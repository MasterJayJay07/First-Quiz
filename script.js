const escolhas = document.getElementsByClassName("choose")
let botaoSubmit = document.getElementById("resultado")
let imagem = document.getElementById("imagemPokemon")
let botaoReset = document.getElementById("reset")
let containerResultado = document.getElementById("tipoDePokemon")
let containerEscolhas = document.getElementById("formulario")
let tituloQuiz = document.getElementsByTagName("h1")[0]
let tituloTipo = document.getElementById("tituloTipo")
let fraseTipo = document.getElementById("frase")



//botão calcula tipo do pokemon pelas respostas
botaoSubmit.addEventListener("click", function(e){
    e.preventDefault()
    let sum = 0
    let num = 0
    for (let i=0; i<escolhas.length; i++){
        if(escolhas[i].checked){
            num = parseInt(escolhas[i].value)
            sum = sum+num
        }
    }
    tituloQuiz.classList.add("sumir")
    containerEscolhas.classList.add("sumir")
    containerResultado.classList.remove("sumir")
    console.log(sum)
    if(sum===210){
        tituloTipo.innerHTML="tipo Dragão"
        imagem.src="./img/dragon.jpg"
        fraseTipo.innerHTML="Você realmente não tem medo de nada hein, parte pra cima com tudo sempre que pode e se garante na própria força."
    }
    if(sum===140){
        imagem.src="./img/ice.jpg"
    }
    if(sum===70){
        imagem.src="./img/grass.jpg"
    }
    if(sum===0){
        imagem.src="./img/dark.jpg"
    }
    if(sum<210 && sum>140){
        imagem.src="./img/fire.jpg"
    }
    if(sum<140 && sum>70){
        imagem.src="./img/water.jpg"
    }
    if(sum<70 && sum>0){
        imagem.src="./img/normal.jpg"
    }
    return sum
})



//botão resetar teste
botaoReset.addEventListener("click", function(){
    tituloQuiz.classList.remove("sumir")
    containerResultado.classList.add("sumir")
    containerEscolhas.classList.remove("sumir")
})



//modo escuro site
let botaoDark = document.getElementById("dark")

botaoDark.addEventListener("click", function(){
    let container = document.getElementById("container")
    let h1 = document.getElementsByTagName("h1")[0]
    let corpo = document.getElementsByTagName("body")[0]
    let modo = botaoDark.checked
    if(modo===true){
        container.classList.add("dark-mode")
        h1.classList.add("dark-mode")
        corpo.classList.add("dark-mode")
        return modo
    }
    if(modo===false){
        container.classList.remove("dark-mode")
        h1.classList.remove("dark-mode")
        corpo.classList.remove("dark-mode")
        return modo
    }
})