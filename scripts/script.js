import { countries } from "../node_modules/covidapi/index.js";

setInterval(() => {

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const data = countries({country: 'slovakia'}).then(console.log)
   window.document.getElementById("casesOverall").innerHTML = "test"
}, 1000)
    