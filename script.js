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
    if(sum===210){
        imagem.src="./img/dragon.jpg"
        tituloTipo.innerHTML="tipo Dragão"
        fraseTipo.innerHTML="Você é uma pessoa forte que realmente não tem medo de nada hein, parte pra cima com tudo sempre que pode e se garante na própria força. Além de não se importar com os perigos que encontra pelo caminho"
    }
    if(sum===140){
        imagem.src="./img/ice.jpg"
        tituloTipo.innerHTML="tipo Gelo"
        fraseTipo.innerHTML="Ora ora, parece que temos alguém frio e calculista aqui, você pensa muito no seu próximo passo e não costuma agir por impulso e quando enfrenta situações difíceis, fica frio, apenas esperando a hora certa de fazer algo"
    }
    if(sum===70){
        imagem.src="./img/grass.jpg"
        tituloTipo.innerHTML="tipo Grama"
        fraseTipo.innerHTML="Você é uma pessoa bem de boa, que procura evitar problemas e que se apega sentimentalmente a tudo que você considera ter valor. Se desfazer de algo ou se separar de alguém é sempre um desafio pra você"
    }
    if(sum===0){
        imagem.src="./img/dark.jpg"
        tituloTipo.innerHTML="tipo Noturno"
        fraseTipo.innerHTML="Parece que temos alguém da zueira por aqui, você sempre tenta deixar o clima descontraído seja pra evitar o nervosismo ou simplesmente porque prefere risos ao invés de rostos sérios. Algumas pessoas tem dificuldade de diferenciar quando você está falando sério ou brincando"
    }
    if(sum<210 && sum>140){
        imagem.src="./img/fire.jpg"
        tituloTipo.innerHTML="tipo Fogo"
        fraseTipo.innerHTML="Olha, eu não iria querer ser seu inimigo, você é uma pessoa calorosa que se deixa levar pelo momento mas que também faz de tudo por aqueles que você se importa"
    }
    if(sum<140 && sum>70){
        imagem.src="./img/water.jpg"
        tituloTipo.innerHTML="tipo Água"
        fraseTipo.innerHTML="Se tem uma palavra que te define seria 'Sabedoria'. Você sabe lhe dar com os seus problemas mesmo achando que não faz ideia do que está fazendo, a prova disso é que raramente se mete em encrencas. Além de que, também sabe usar o ambiente para se proteger do problemas da vida"
    }
    if(sum<70 && sum>0){
        imagem.src="./img/normal.jpg"
        tituloTipo.innerHTML="tipo Normal"
        fraseTipo.innerHTML="Você literalmente pode se misturar com qualquer grupo de pessoas, é bem maleável e se adapta ao ambiente e ao assunto. Alguns podem até confundir isso com não ter personalidade própria mas a verdade é que você gosta de ver todos os lados e extrair o melhor deles"
    }
    return sum
})



//botão resetar teste
botaoReset.addEventListener("click", function(){
    tituloQuiz.classList.remove("sumir")
    containerResultado.classList.add("sumir")
    containerEscolhas.classList.remove("sumir")
    location.reload()
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