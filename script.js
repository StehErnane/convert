// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input" , () => {
  
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o evento de submit (enviar) do formulario
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBR":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função p/ converter a moeda
function convertCurrency(amount, price, symbol){
  try{
    // Aplica a classe que exibe o footer para mostrar 0 resultado
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
    // remove a classe que exibe o footer que mostra o resultado
    footer.classList.remove("show-result")
    alert("Não foi possível converter, tente novamente mais tarde !!!")
  }
}