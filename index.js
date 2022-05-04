function performConversion() {
    let headerVal = document.getElementById('header-value');

    let userVal = document.getElementsByClassName('user-value')
    for (let i = 0; i < userVal.length; i++) {
        userVal[i].innerText = headerVal.value;
    }

    let feet = metersToFeet(parseFloat(headerVal.value))
    let feetElem = document.getElementById('feet')
    feetElem.innerText = round(feet)

    let meters = feetToMeters(parseFloat(headerVal.value))
    let metersElem = document.getElementById('meters')
    metersElem.innerText = round(meters)

    let gallons = litersToGallons(parseFloat(headerVal.value))
    let gallonsElem = document.getElementById('gallons')
    gallonsElem.innerText = round(gallons)

    let liters = gallonsToLiters(parseFloat(headerVal.value))
    let litersElem = document.getElementById('liters')
    litersElem.innerText = round(liters)

    let pounds = kilosToPounds(parseFloat(headerVal.value))
    let poundsElem = document.getElementById('pounds')
    poundsElem.innerText = round(pounds)

    let kilos = poundsToKilos(parseFloat(headerVal.value))
    let kilosElem = document.getElementById('kilos')
    kilosElem.innerText = round(kilos)

    function metersToFeet(meters) {
        return meters * 3.28084
    }

    function feetToMeters(feet) {
        return feet * 0.3048
    }

    function litersToGallons(liters) {
        return liters * 0.264172
    }

    function gallonsToLiters(gallons) {
        return gallons * 3.78541
    }

    function kilosToPounds(kilos) {
        return kilos * 2.20462
    }

    function poundsToKilos(pounds) {
        return pounds * 0.453592
    }

    function round(num) {
        let m = Number((Math.abs(num) * 1000).toPrecision(15));
        return Math.round(m) / 1000 * Math.sign(num);
    }
}