
document.addEventListener("DOMContentLoaded", carregarTasques);

function carregarTasques() {

    const tasquesPendents = document.getElementById('tasques-pendents');
    const tasquesCompletades = document.getElementById('tasques-acabades');

    tasquesPendents.innerHTML = '';
    tasquesCompletades.innerHTML = '';




    Object.keys(localStorage).forEach(key => {
        const tasca = JSON.parse(localStorage.getItem(key));

        if (!tasca.nom || !tasca.data || !tasca.categoria || !tasca.prioritat) {
            return;
        }

        const tascaElement = document.createElement('article');
        tascaElement.classList.add('tasca');

        const titol = document.createElement('h3');
        titol.textContent = tasca.nom;
        tascaElement.appendChild(titol);

        const descripcio = document.createElement('p');
        descripcio.textContent = tasca.descripcio;
        tascaElement.appendChild(descripcio);

        const data = document.createElement('p');
        data.textContent = `Data: ${tasca.data}`;
        tascaElement.appendChild(data);

        const categoriaObj = JSON.parse(localStorage.getItem(tasca.categoria));
        const categoria = document.createElement('p');
        categoria.textContent = `Categoria: ${tasca.categoria}`;
        if (categoriaObj && categoriaObj.color) {
            categoria.style.backgroundColor = categoriaObj.color;
        }
        tascaElement.appendChild(categoria);

        const prioritat = document.createElement('p');
        prioritat.textContent = `Prioritat: ${tasca.prioritat}`;
        if (tasca.prioritat === 'Alta') {
            tascaElement.style.backgroundColor = 'lightCoral';
        }   else if (tasca.prioritat === 'Mitja') {
            tascaElement.style.backgroundColor = 'lightYellow';
        } else if (tasca.prioritat === 'Baixa') {
            tascaElement.style.backgroundColor = 'lightGreen';
        }
        tascaElement.appendChild(prioritat);


        const partBaixa = document.createElement('div');
        partBaixa.classList.add('part-baixar');
        partBaixa.style.display = 'flex';
        partBaixa.style.justifyContent = 'space-between';
        partBaixa.style.alignItems = 'center';
        partBaixa.style.paddingTop = '10px';
        partBaixa.style.borderTop = '1px solid black';
        tascaElement.appendChild(partBaixa);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tasca.completada;
        checkbox.style.marginRight = '10px';
        checkbox.style.cursor = 'pointer';
        checkbox.style.width = '20px';
        checkbox.style.height = '20px';
        checkbox.addEventListener('change', () => {
            tasca.completada = checkbox.checked;
            localStorage.setItem(tasca.nom, JSON.stringify(tasca));
            carregarTasques();
        });
        partBaixa.appendChild(checkbox);

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.classList.add('button-negre');

        btnEliminar.addEventListener('click', () => {
            localStorage.removeItem(tasca.nom);
            carregarTasques();
        });
        partBaixa.appendChild(btnEliminar);

        if (tasca.completada) {
            tasquesCompletades.appendChild(tascaElement);
        } else {
            tasquesPendents.appendChild(tascaElement);
        }

    });
}