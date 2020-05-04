var inputUm = document.getElementById("input-um")
var inputDois = document.getElementById("input-dois")
var inputTres = document.getElementById("input-tres")
var inputQuatro = document.getElementById("input-quatro")

inputUm.addEventListener("input", add)
inputDois.addEventListener("input", add)
inputTres.addEventListener("input", add)
inputQuatro.addEventListener("input", add)

function add() {
    const max_value = 150
    const min_value = 0

    var value1 = Number(inputUm.value)
    var value2 = Number(inputDois.value)
    var value3 = Number(inputTres.value)
    var value4 = Number(inputQuatro.value)
    var texto = document.getElementById("texto-resposta")
    var borda = document.getElementById("borda-fora")
    var text_out = []

    //limpa a tela toda vez que ocorre uma iteração, assim não haverá o risco de exibir
    //o texto "border-radius: " quando não existir nada a ser mostrado
    texto.innerText = ''

    if (value1 <= max_value && value1 >= min_value || value2 <= max_value && value2 >= min_value || value3 <= max_value && value3 >= min_value || value4 <= max_value && value4 >= min_value) {
        if (value1 <= max_value && value1 > min_value) {
            borda.style.borderTopLeftRadius = value1 + 'px'
            text_out[0] = `border-top-left-radius: ${value1}px;`
        } else if (value1 > max_value) {
            borda.style.borderTopLeftRadius = max_value + 'px'
            inputUm.value = max_value
            text_out[0] = `border-top-left-radius: ${max_value}px;`
            value1 = 150
        } else {
            borda.style.borderTopLeftRadius = '0'
            text_out[0] = 'null'
        }

        if (value2 <= max_value && value2 > min_value) {
            borda.style.borderTopRightRadius = value2 + 'px'
            text_out[1] = `border-top-right-radius: ${value2}px;`
        } else if (value2 > max_value) {
            borda.style.borderTopRightRadius = max_value + 'px'
            inputDois.value = max_value
            text_out[1] = `border-top-right-radius: ${max_value}px;`
            value2 = 150
        } else {
            borda.style.borderTopRightRadius = '0'
            text_out[1] = 'null'
        }

        if (value3 <= max_value && value3 > min_value) {
            borda.style.borderBottomRightRadius = value3 + 'px'
            text_out[2] = `border-bottom-right-radius: ${value3}px;`
        } else if (value3 > max_value) {
            borda.style.borderBottomRightRadius = max_value + 'px'
            inputTres.value = max_value
            text_out[2] = `border-bottom-right-radius: ${max_value}px;`
            value3 = 150
        } else {
            borda.style.borderBottomRightRadius = '0'
            text_out[2] = 'null'
        }

        if (value4 <= max_value && value4 > min_value) {
            borda.style.borderBottomLeftRadius = value4 + 'px'
            text_out[3] = `border-bottom-left-radius: ${value4}px;`
        } else if (value4 > max_value) {
            borda.style.borderBottomLeftRadius = max_value + 'px'
            inputQuatro.value = max_value
            text_out[3] = `border-bottom-left-radius: ${max_value}px;`
            value4 = 150
        } else {
            borda.style.borderBottomLeftRadius = '0'
            text_out[3] = 'null'
        }
    }

    for (var i = 0; i < 4; i++) {
        if (text_out[i] != 'null') {
            texto.innerHTML += text_out[i] + '<br/>'
        }
    }

    if (value1 == value2 && value2 == value3 && value3 == value4 && value1 <= max_value && value1 > min_value) {
        borda.style.borderRadius = value1 + 'px'
        texto.innerText = `border-radius: ${value1}px;`
    }
}