const ctx = document.getElementById('myChart').getContext('2d');
const tasques = JSON.parse(localStorage.getItem("tasques")) || [];
const tasquesPerMes = new Array(12).fill(0);

tasques.forEach(tasca => {
  if(tasca.acabada){
    const mes = new Date(tasca.data).getMonth();
    tasquesPerMes[mes]++;
  }
});

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Gen', 'Febr', 'Mar', 'Abr', 'Mai', 'Jn',"Jl","Ag","Sep","Oct","Nov","Des"],
    datasets: [{
      label: 'Tasques',
      data: tasquesPerMes,
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
        text: 'Tasques acabades'
      }
    }
  }
});