var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'red';
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['', 'C', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'Bash'],
        datasets: [{
            data: [0, 55, 78, 30, 100, 85, 70],
            label: 'Main Skills',
            backgroundColor: 'rgb(187, 185, 185)',
            borderColor: 'white',
        }]
    },
    // Configuration options go here
    options:{}
});