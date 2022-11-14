const tagBody = document.querySelector("body")

const divTitulo = document.createElement("div")
tagBody.appendChild(divTitulo)
const tituloPrincipal = document.createElement("h1") 
tituloPrincipal.innerText = "VIRTUAL MARKET"
divTitulo.appendChild(tituloPrincipal)
 

const principal = document.createElement("main")
principal.id = "corpoPrincipal"
tagBody.appendChild(principal)

const titulos = document.createElement("section")
titulos.classList.add("secaoItemValor")
principal.appendChild(titulos)
const titulo1 = document.createElement("p")
titulo1.innerText = "Item"

const titulo2 = document.createElement("p")
titulo2.innerText = "Valor"

titulos.appendChild(titulo1)
titulos.appendChild(titulo2)

const lista = document.createElement("ul")
lista.id = "list"
principal.appendChild(lista)


let produts = [
    { id : 1 , name: "Delineador" , price: 26.00 },
    { id : 2 , name: "Blush" , price: 15.90 },
    { id : 3 , name: "Iluminador" , price: 18.80 },
    { id : 4 , name: "Esmalte" , price: 10.00}
]
let soma = 0
function criarLista (produts){
  for(let i = 0; i < produts.length; i++){
      soma += produts[i].price
  
  const tagLi =  document.createElement("li")
  tagLi.classList.add("classe")
  const nome = document.createElement("p")
  const preco = document.createElement("p")
  nome.innerText = produts[i].name
  preco.innerText = `R$ ${produts[i].price}`
  tagLi.appendChild(preco)
  tagLi.appendChild(nome)
  lista.appendChild(tagLi)

  }

  const totalContainer = document.createElement("section")
  totalContainer.id = "containerFinal"
  principal.appendChild(totalContainer)

  const totalP = document.createElement("p")
  const precototal = document.createElement("p")
  totalP.innerText = "TOTAL"
  precototal.innerText = `R$ ${soma}`
  totalContainer.appendChild(totalP)
  totalContainer.appendChild(precototal)
  lista.appendChild(totalContainer)
  
  const botao = document.createElement("button")
  botao.id = "click"
  botao.innerText = "FINALIZAR"
  principal.appendChild(botao)
  
} criarLista(produts)




  
 