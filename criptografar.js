var input = document.querySelector('#input')
var criptografar = document.querySelector('.criptografar')
var saida = document.querySelector('.saida')

criptografar.addEventListener('click', function (event) {
  event.preventDefault()
  if (input.value == '') {
    return
  }
  var novoTexto = criptografaTexto(input.value)

  saida.textContent = ''
  saida.textContent = novoTexto
  saida.appendChild((botton = criaElement('copiar', 'copiar', 'button')))
})

function criaElement(dado, classe, tag) {
  var elemento = document.createElement(tag)
  elemento.textContent = dado
  elemento.classList.add(classe)

  return elemento
}

function criptografaTexto(texto) {
  text = texto.toLowerCase()
  text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
  text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
  text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
  text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
  text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
  text = text.replace(new RegExp('[Ç]', 'gi'), 'c')

  text = text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

  return text
}
