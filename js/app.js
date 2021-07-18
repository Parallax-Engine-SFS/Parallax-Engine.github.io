let contabout = document.getElementById("aboutSection")
let contstock = document.getElementById("stockSection")
let contreview = document.getElementById("reviewSection")
let closeAbout = document.getElementsByClassName("close")[0]
let closeStock = document.getElementsByClassName("close")[1]
let closeReview = document.getElementsByClassName("close")[2]


function openModal(type) {
  if (type === 'about') {
    contabout.style.display = "block"
  } else if (type === 'stocks') {
    contstock.style.display = "block"
  } else if (type === 'reviews') {
    contreview.style.display = "block"
  }
}

closeAbout.onclick = function () {
  contabout.style.display = "none"
}

closeStock.onclick = function () {
  contstock.style.display = "none"
}

closeReview.onclick = function () {
  contreview.style.display = "none"
}

google.charts.load('current', { 'packages': ['corechart'] })
google.charts.setOnLoadCallback(drawChart)
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['July', 57890.98, 57999.58, 59790.00, 69908.98],
    ['August', 45090.73, 49090.73, 50090.73, 51090.73],
    ['Spetember', 55090.88, 54090.88, 55090.88, 51090.88],
    ['October', 61090.98, 62090.98, 63090.98, 64090.98],
    ['November', 65090.98, 61090.98, 59090.98, 50090.98]
  ], true)

  var data2 = google.visualization.arrayToDataTable([
    ['July', 51890.98, 46999.58, 42790.00, 31908.98],
    ['August', 58090.73, 54090.73, 50090.73, 45090.73],
    ['Spetember', 45090.88, 44090.88, 39090.88, 60090.88],
    ['October', 71090.98, 72090.98, 79090.98, 84090.98],
    ['November', 35090.98, 41090.98, 49090.98, 50090.98]
  ], true)

  var options = {
    legend: 'none',
    title: 'Sensex',
    bar: { groupWidth: '100%' },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
    }
  }

  var options2 = {
    legend: 'none',
    title: 'Nifty',
    bar: { groupWidth: '100%' },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
    }
  }

  var chart = new google.visualization.CandlestickChart(stock)
  chart.draw(data, options)
  var chart = new google.visualization.CandlestickChart(stock2)
  chart.draw(data2, options2)
}

let stock = document.getElementById('stockChart')
let stock2 = document.getElementById('stockChart2')
let id

const generate = () => {
  if (id == "sensex") {
    return stock.style.display = "flex"
  } else if (id == "nifty") {
    return stock2.style.display = "flex"
  }
}

let btn = document.getElementById('button1')
let btn2 = document.getElementById('button2')

btn.onclick = () => {
  id = "nifty"
  btn.style.backgroundColor = "#03f"
  btn.style.color = "#fff"
  btn2.style.backgroundColor = "#f1f1f1"
  btn2.style.color = "#000"
}

btn2.onclick = () => {
  id = "sensex"
  btn2.style.backgroundColor = "#03f"
  btn2.style.color = "#fff"
  btn.style.backgroundColor = "#f1f1f1"
  btn.style.color = "#000"
}

window.addEventListener('click', () => {
console.log(id)
}
)


function showUsers() {
  let responsive = document.getElementById("myNavbar");
  if (responsive.className === "navbar") {
      responsive.className += " responsive";
  } else {
      responsive.className = "navbar";
  }
   }