
function pujarActivitats() {
    
    console.log('Pujant activitats...');
    const archiuJSON = document.getElementById('nom-fitxer').value;
    fetch("../dades/" + archiuJSON)
        .then(response => response.json())
        .then(activitats => {
            const llistaActivitats = document.getElementById('llista-activitats');
            activitats.forEach(activitat => {
                if (activitat.categoria && activitat.categoria.nom) {
                    new Categoria(activitat.categoria.nom, activitat.categoria.color);
                    localStorage.setItem(activitat.categoria.nom, JSON.stringify(activitat.categoria));
                }

                const tasca = new Tasca(activitat.nom, activitat.descripcio, activitat.data, activitat.categoria.nom, activitat.prioritat);

                localStorage.setItem(activitat.nom, JSON.stringify(tasca));
            });
        })
        .catch(error => console.error('Error carregant les activitats:', error));
}

document.getElementById('form-pujar-tasca').addEventListener('submit', pujarActivitats);

function Tasca(nom, descripcio, data, categoria, prioritat) {
    this.nom = nom;
    this.descripcio = descripcio;
    this.data = data;
    this.categoria = categoria;
    this.prioritat = prioritat;
    this.completada = false;
}

function Categoria(nom, color) {
    this.nom = nom;
    this.color = color;
}