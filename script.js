// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

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
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função p/ converter a moeda
function convertCurrency(amount, price, symbol){
  try{
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    // Aplica a classe que exibe o footer para mostrar 0 resultado
    footer.classList.add("show-result")

  } catch (error) {
    console.log(error)
    // remove a classe que exibe o footer que mostra o resultado
    footer.classList.remove("show-result")
    alert("Não foi possível converter, tente novamente mais tarde !!!")
  }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value){
  // converte para numero para utiliza o toLocaleString para formatar no padrão BRL (R$ 00,00)
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}