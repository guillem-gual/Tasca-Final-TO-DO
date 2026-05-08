
// Fer arrays amb les dades de els mesos i el # de tasques realitzades en aquest

export function crearGrafic(dades) {

  const ctx = document.getElementById('myChart');

  let existingChart = Chart.getChart(ctx);
  if (existingChart) {
    existingChart.destroy();
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Object.keys(dades),
      datasets: [{
        label: 'Tasques Completades',
        data: Object.values(dades),
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
