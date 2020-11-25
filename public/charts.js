var xhttpDollar = new XMLHttpRequest()
xhttpDollar.open("GET", "https://economia.awesomeapi.com.br/json/daily/usd-brl/6", false)
xhttpDollar.send()
var todayDollar = JSON.parse(xhttpDollar.responseText)[1].high
var Dollar2 = JSON.parse(xhttpDollar.responseText)[2].high
var Dollar3 = JSON.parse(xhttpDollar.responseText)[3].high
var Dollar4 = JSON.parse(xhttpDollar.responseText)[4].high
var Dollar5 = JSON.parse(xhttpDollar.responseText)[5].high

var xhttpEuro = new XMLHttpRequest()
xhttpEuro.open("GET", "https://economia.awesomeapi.com.br/json/daily/eur-brl/6", false)
xhttpEuro.send()
var todayEuro = JSON.parse(xhttpEuro.responseText)[1].high
var Euro2 = JSON.parse(xhttpEuro.responseText)[2].high
var Euro3 = JSON.parse(xhttpEuro.responseText)[3].high
var Euro4 = JSON.parse(xhttpEuro.responseText)[4].high
var Euro5 = JSON.parse(xhttpEuro.responseText)[5].high

var xhttpLibra = new XMLHttpRequest()
xhttpLibra.open("GET", "https://economia.awesomeapi.com.br/json/daily/gbp-brl/6", false)
xhttpLibra.send()
var todayLibra = JSON.parse(xhttpLibra.responseText)[1].high
var Libra2 = JSON.parse(xhttpLibra.responseText)[2].high
var Libra3 = JSON.parse(xhttpLibra.responseText)[3].high
var Libra4 = JSON.parse(xhttpLibra.responseText)[4].high
var Libra5 = JSON.parse(xhttpLibra.responseText)[5].high

var date = new Date()
var dayToday = date.getDate()
var monthToday = date.getMonth()
var yearToday = date.getFullYear()
var yesterday = (function(d){ d.setDate(d.getDate()-1); return d})(new Date)
var dayYesterday = yesterday.getDate()
var monthYesterday = yesterday.getMonth()
var yearYesterday = yesterday.getFullYear()
var yesterday2 = (function(d){ d.setDate(d.getDate()-2); return d})(new Date)
var dayYesterday2 = yesterday2.getDate()
var monthYesterday2 = yesterday2.getMonth()
var yearYesterday2 = yesterday2.getFullYear()
var yesterday3 = (function(d){ d.setDate(d.getDate()-3); return d})(new Date)
var dayYesterday3 = yesterday3.getDate()
var monthYesterday3 = yesterday3.getMonth()
var yearYesterday3 = yesterday3.getFullYear()
var yesterday4 = (function(d){ d.setDate(d.getDate()-4); return d})(new Date)
var dayYesterday4 = yesterday4.getDate()
var monthYesterday4 = yesterday4.getMonth()
var yearYesterday4 = yesterday4.getFullYear()

var ctxDollar = document.getElementById('dollar').getContext('2d');
var dollarChart = new Chart(ctxDollar, {
    type: 'line',
    responsive: true,
    data: {
        labels: [dayYesterday4+"/"+monthYesterday4+"/"+yearYesterday4, dayYesterday3+"/"+monthYesterday3+"/"+yearYesterday3, dayYesterday2+"/"+monthYesterday2+"/"+yearYesterday2, dayYesterday+"/"+monthYesterday+"/"+yearYesterday, dayToday+"/"+monthToday+"/"+yearToday+" (Hoje)"],
        datasets: [{
            label: '(Dólar em reais) R$',
            data: [Dollar5, Dollar4, Dollar3, Dollar2, todayDollar],
            backgroundColor: [
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)'
            ],
            borderColor: [
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)'
            ],
            borderWidth: 2,
            pointRadius: 5
        }]
    },
    options: {
        title: {
            display: true,
            text: "Valor do Dólar em Reais (Hoje e 4 Últimos Dias)",
            fontSize: 18
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: (value) => {return "R$"+value}
                }
            }]
        }
    }
});

var ctxEuro = document.getElementById('euro').getContext('2d');
var euroChart = new Chart(ctxEuro, {
    type: 'line',
    responsive: true,
    data: {
        labels: [dayYesterday4+"/"+monthYesterday4+"/"+yearYesterday4, dayYesterday3+"/"+monthYesterday3+"/"+yearYesterday3, dayYesterday2+"/"+monthYesterday2+"/"+yearYesterday2, dayYesterday+"/"+monthYesterday+"/"+yearYesterday, dayToday+"/"+monthToday+"/"+yearToday+" (Hoje)"],
        datasets: [{
            label: '(Euro em reais) R$',
            data: [Euro5, Euro4, Euro3, Euro2, todayEuro],
            backgroundColor: [
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)'
            ],
            borderColor: [
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)'
            ],
            borderWidth: 2,
            pointRadius: 5
        }]
    },
    options: {
        title: {
            display: true,
            text: "Valor do Euro em Reais (Hoje e 4 Últimos Dias)",
            fontSize: 18
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: (value) => {return "R$"+value}
                }
            }]
        }
    }
});

var ctxLibra = document.getElementById('libra').getContext('2d');
var libraChart = new Chart(ctxLibra, {
    type: 'line',
    responsive: true,
    data: {
        labels: [dayYesterday4+"/"+monthYesterday4+"/"+yearYesterday4, dayYesterday3+"/"+monthYesterday3+"/"+yearYesterday3, dayYesterday2+"/"+monthYesterday2+"/"+yearYesterday2, dayYesterday+"/"+monthYesterday+"/"+yearYesterday, dayToday+"/"+monthToday+"/"+yearToday+" (Hoje)"],
        datasets: [{
            label: '(Libra em reais) R$',
            data: [Libra5, Libra4, Libra3, Libra2, todayLibra],
            backgroundColor: [
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)',
                'rgba(39, 147, 218, 0.7)'
            ],
            borderColor: [
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)',
                'rgba(50, 120, 225, 1)'
            ],
            borderWidth: 2,
            pointRadius: 5
        }]
    },
    options: {
        title: {
            display: true,
            text: "Valor da Libra em Reais (Hoje e 4 Últimos Dias)",
            fontSize: 18
        },
        scales: {
            yAxes: [{
                ticks: {
                    callback: (value) => {return "R$"+value}
                }
            }]
        }
    }
});