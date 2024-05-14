// naming variables ||
let form = document.forms[0]
let cardNameInp = document.getElementById(`cardName`)
let cardNumberInp = document.getElementById(`cardNumber`)
let monthInp = document.getElementById(`month`)
let yearInp = document.getElementById(`year`)
let cvcInp = document.getElementById(`cvc`)
let submit = document.getElementById(`submit`)
let namer = document.getElementById(`namer`)
let serial = document.getElementById(`serial`)
let cardMonth = document.getElementById(`cardMonth`)
let cardYear = document.getElementById(`cardYear`)
let cvcNumber = document.getElementById(`cvcNumber`)
//
cardNameInp.oninput = function () {
    cardNameInp.style.border = ` 1px solid hsl(279, 6%, 55%)`
    if (cardNameInp.value.length == 0) {
        namer.innerHTML = `FELICA LEIRE`
    } else if (cardNameInp.value.length <= 15) {
        namer.innerHTML = cardNameInp.value
        namer.style.textTransform = `uppercase`
        namer.style.letterSpacing = `1.5px`
    }
}
cardNumberInp.oninput = function () {
    cardNumberInp.style.border = ` 1px solid hsl(279, 6%, 55%)`
    if (cardNumberInp.value.length == 0) {
        serial.innerHTML = `0000 0000 0000 0000`
    } else if (cardNumberInp.value.length <= 16) {
        serial.innerHTML = cardNumberInp.value
    }

}
yearInp.oninput = function () {
    yearInp.style.border = ` 1px solid hsl(279, 6%, 55%)`
    if (yearInp.value.length == 0) {
        cardYear.innerHTML = `YY`
    } else if (yearInp.value.length <= 2) {
        cardYear.innerHTML = yearInp.value
    }
}
monthInp.oninput = function () {
    monthInp.style.border = ` 1px solid hsl(279, 6%, 55%)`
    if (monthInp.value.length == 0) {
        cardMonth.innerHTML = `MM`
    } else if (monthInp.value.length <= 2) {
        cardMonth.innerHTML = monthInp.value
    }
}
cvcInp.oninput = function () {
    cvcInp.style.border = ` 1px solid hsl(279, 6%, 55%)`
    if (cvcInp.value.length == 0) {
        cvcNumber.innerHTML = `###`
    } else if (cvcInp.value.length <= 3) {
        cvcNumber.innerHTML = cvcInp.value
    }
}
form.onsubmit = function (e) {
    let v1 = false
    let v2 = false
    let v3 = false
    let v4 = false
    let v5 = false
    if (cardNameInp.value.length == 0) {
        cardNameInp.style.border = `1px solid red`
    } else {
        v1 = true
    }
    if (cardNumberInp.value.length == 0 || cardNumberInp.value.length < 16 || isNaN(+cardNumberInp.value) == true) {
        cardNumberInp.style.border = `1px solid red`
    } else {
        v2 = true
    }
    if (yearInp.value.length == 0 || yearInp.value.length < 2 || isNaN(+yearInp.value) == true) {
        yearInp.style.border = `1px solid red`
    } else {
        v3 = true
    }
    if (monthInp.value.length == 0 || monthInp.value.length < 2 || isNaN(+monthInp.value) == true || +monthInp.value > 12) {
        monthInp.style.border = `1px solid red`
    } else {
        v4 = true
    }
    if (cvcInp.value.length == 0 || cvcInp.value.length < 3 || isNaN(+cvcInp.value) == true) {
        cvcInp.style.border = `1px solid red`
    } else {
        v5 = true
    }
    if (v1 == false || v2 == false || v3 == false || v4 == false || v5 == false) {
        e.preventDefault()
    }
}