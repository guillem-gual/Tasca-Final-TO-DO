
document.addEventListener("DOMContentLoaded", carregarCategoriesFormulari);

function Tasca(nom, descripcio, data, categoria, prioritat) {
    this.nom = nom;
    this.descripcio = descripcio;
    this.data = data;
    this.categoria = categoria;
    this.prioritat = prioritat;
}

document.getElementById('form-crear-tasca').addEventListener('submit', (e) => {
    e.preventDefault();
    guardarTasca();
});

function guardarTasca() {
    const nom = document.getElementById('titolTasca').value;
    const descripcio = document.getElementById('descripcioTasca').value;
    const data = document.getElementById('dataTasca').value;
    const categoria = document.getElementById('categoriaTasca').value;
    const prioritat = document.getElementById('prioritatTasca').value;
    const tasca = new Tasca(nom, descripcio, data, categoria, prioritat);
    localStorage.setItem(nom, JSON.stringify(tasca));

    if (!nom || !data || !categoria || !prioritat) {
        alert('Omple els camps obligatoris camps obligatoris.');
        return;
    } else if (data < new Date().toISOString().split('T')[0]) {
        alert('La data no pot ser anterior a la data actual.');
        return;
    }
    
    // Buidar camps
    document.getElementById('titolTasca').value = '';
    document.getElementById('descripcioTasca').value = '';
    document.getElementById('dataTasca').value = '';
    document.getElementById('categoriaTasca').value = '';
    document.getElementById('prioritatTasca').value = '';
}

function carregarCategoriesFormulari(){

    Object.keys(localStorage).forEach(key =>{

        const categoria = JSON.parse(localStorage.getItem(key));

        const selectCategories = document.getElementById("categoriaTasca");
        const novaOpcio = document.createElement("option");

        novaOpcio.value = categoria.nom;
        novaOpcio.textContent = categoria.nom;

        selectCategories.appendChild(novaOpcio);

    });

}