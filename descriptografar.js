var input = document.querySelector('#input')
var decriptografar = document.querySelector('.decriptografar')
var saida = document.querySelector('.saida')

decriptografar.addEventListener('click', function (event) {
  event.preventDefault()
  if (input.value == '') {
    return
  }
  var novoTexto = decriptografaTexto(input.value)
  saida.textContent = ''
  saida.textContent = novoTexto
  saida.appendChild((botton = criaElement('copiar', 'copiar', 'button')))
})

saida.addEventListener('click', function (event) {
  var copia = document.querySelector('.copiar')

  if (event.target == copia) {
    saida.textContent = saida.textContent.replace(/copiar/, '')
    navigator.clipboard.writeText(saida.textContent)

    confirma()
  }
})
function decriptografaTexto(texto) {
  text = texto
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

  return texto == text ? 'Texto não criptografado' : text
}
//
function confirma() {
  saida.textContent = ''
  saida.appendChild(
    (span = criaElement('Texto copiado com sucesso!', 'sucesso', 'span'))
  )
}
