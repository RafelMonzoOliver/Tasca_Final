const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Gen', 'Febr', 'Mar', 'Abr', 'Mai', 'Jn',"Jl","Ag","Sep","Oct","Nov","Des"],
    datasets: [{
      label: 'Tasques',
      data: [],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
      pointStyle: 'rectRot',
      pointRadius: 10,
      pointHoverRadius: 15
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de ejemplo con puntos personalizados'
      }
    }
  }
});