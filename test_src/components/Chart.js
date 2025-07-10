export const Chart = {
  tag: 'canvas',
  width: '100%',
  flex: 1,
  onRender: el => {
    const Chart = window.require('chart.js')

    // </script>

    const chartColors = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(231,233,237)'
    }

    var randomScalingFactor = function () {
      return (Math.random() > 0.5 ? 1.0 : 1.0) * Math.round(Math.random() * 100)
    }

    var line1 = [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ]

    var line2 = [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ]

    var MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    var config = {
      type: 'line',
      data: {
        labels: MONTHS,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: chartColors.red,
            borderColor: chartColors.red,
            data: line1,
            fill: false
          },
          {
            label: 'My Second dataset',
            fill: false,
            backgroundColor: chartColors.blue,
            borderColor: chartColors.blue,
            data: line2
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true
              }
            }
          ]
        }
      }
    }

    var ctx = el.node.getContext('2d')
    return new Chart(ctx, config)
  }
}
