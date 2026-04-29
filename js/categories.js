

document.getElementById('form-crear-categoria').addEventListener('submit', (e) => {
    e.preventDefault();
    crearCategoria();
});


function crearCategoria() {
    const nomCategoria = document.getElementById('nom-categoria').value.charAt(0).toUpperCase() + document.getElementById('nom-categoria').value.slice(1);
    const colorCategoria = document.getElementById('color-categoria').value;

    const novaCategoria = new Object(nomCategoria, colorCategoria);
    localStorage.setItem(nomCategoria, JSON.stringify(novaCategoria));

    if (!nomCategoria || !colorCategoria) {
        alert('Tots els camps són obligatoris.');
        return;
    }

    const llistaCategories = document.getElementById('categories-llista');
    const novaCategoriaElement = document.createElement('li');

    const spanColor = document.createElement('span');
    spanColor.classList.add('color-indicator');
    spanColor.style.display = 'inline-block';
    spanColor.style.width = '15px';
    spanColor.style.height = '15px';
    spanColor.style.borderRadius = '10px';
    spanColor.style.backgroundColor = colorCategoria;
    novaCategoriaElement.appendChild(spanColor);

    const spanText = document.createElement('span');
    spanText.textContent = nomCategoria;
    novaCategoriaElement.appendChild(spanText);

    
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.classList.add('button-negre');

    novaCategoriaElement.appendChild(btn);

    llistaCategories.appendChild(novaCategoriaElement);


    // Buidar camps
    document.getElementById('nom-categoria').value = '';
    document.getElementById('color-categoria').value = '#000000';

}

