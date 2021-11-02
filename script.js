const escolhas = document.getElementsByClassName("choose")
let botaoSubmit = document.getElementById("resultado")
let botaoReset = document.getElementById("reset")
let containerResultado = document.getElementById("tipoDePokemon")
let containerEscolhas = document.getElementById("formulario")
let tituloQuiz = document.getElementsByTagName("h1")[0]
let tituloTipo = document.getElementById("tituloTipo")
let fraseTipo = document.getElementById("frase")
let boxImage = document.getElementById("boxImage")
let boxMsg = document.getElementById("nameMsg")
let botaoNome = document.getElementById("botaoNome")
let msgDoNome = document.getElementById("nomeDaPessoa")



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
    nameMsg.classList.remove("sumir")
    if(sum===210){
        boxImage.style.backgroundImage="url(./img/dragon.jpg)"
        tituloTipo.innerHTML="tipo Dragão"
        fraseTipo.innerHTML="Você é uma pessoa forte que realmente não tem medo de nada hein, parte pra cima com tudo sempre que pode e se garante na própria força. Além de não se importar com os perigos que encontra pelo caminho"
    }
    if(sum===140){
        boxImage.style.backgroundImage="url(./img/ice.jpg)"
        tituloTipo.innerHTML="tipo Gelo"
        fraseTipo.innerHTML="Ora ora, parece que temos alguém frio e calculista aqui, você pensa muito no seu próximo passo e não costuma agir por impulso e quando enfrenta situações difíceis, fica frio, apenas esperando a hora certa de fazer algo"
    }
    if(sum===70){
        boxImage.style.backgroundImage="url(./img/grass.jpg)"
        tituloTipo.innerHTML="tipo Grama"
        fraseTipo.innerHTML="Você é uma pessoa bem de boa, que procura evitar problemas e que se apega sentimentalmente a tudo que você considera ter valor. Se desfazer de algo ou se separar de alguém é sempre um desafio pra você"
    }
    if(sum===0){
        boxImage.style.backgroundImage="url(./img/dark.jpg)"
        tituloTipo.innerHTML="tipo Noturno"
        fraseTipo.innerHTML="Parece que temos alguém da zueira por aqui, você sempre tenta deixar o clima descontraído seja pra evitar o nervosismo ou simplesmente porque prefere risos ao invés de rostos sérios. Algumas pessoas tem dificuldade de diferenciar quando você está falando sério ou brincando"
    }
    if(sum<210 && sum>140){
        boxImage.style.backgroundImage="url(./img/fire.jpg)"
        tituloTipo.innerHTML="tipo Fogo"
        fraseTipo.innerHTML="Olha, eu não iria querer ser seu inimigo, você é uma pessoa calorosa que se deixa levar pelo momento mas que também faz de tudo por aqueles que você se importa"
    }
    if(sum<140 && sum>70){
        boxImage.style.backgroundImage="url(./img/water.jpg)"
        tituloTipo.innerHTML="tipo Água"
        fraseTipo.innerHTML="Se tem uma palavra que te define seria 'Sabedoria'. Você sabe lhe dar com os seus problemas mesmo achando que não faz ideia do que está fazendo, a prova disso é que raramente se mete em encrencas. Além de que, também sabe usar o ambiente para se proteger do problemas da vida"
    }
    if(sum<70 && sum>0){
        boxImage.style.backgroundImage="url(./img/normal.jpg)"
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
let fraseDarkmode = document.getElementById("labelDark")
fraseDarkmode.innerHTML="modo-escuro"

botaoDark.addEventListener("click", function(){
    let container = document.getElementById("container")
    let h1 = document.getElementsByTagName("h1")[0]
    let corpo = document.getElementsByTagName("body")[0]
    let modo = botaoDark.checked
    if(modo===true){
        container.classList.add("dark-mode")
        h1.classList.add("dark-mode")
        corpo.classList.add("dark-mode")
        fraseDarkmode.innerHTML="modo-escuro ligado"
        fraseDarkmode.style.color="#fff"
        return modo
    }
    if(modo===false){
        container.classList.remove("dark-mode")
        h1.classList.remove("dark-mode")
        corpo.classList.remove("dark-mode")
        fraseDarkmode.innerHTML="modo-escuro desligado"
        fraseDarkmode.style.color="#1C1C1C"
        return modo
    }
})

//caixa de nome
botaoNome.addEventListener("click", function(){
    let inputNome = document.getElementById("escreverNome").value
    let nome = inputNome
    let newParagraph = document.createElement("p")
    if(nome==="Nathália" || nome==="Nathalia" || nome==="nathália" || nome==="nathalia"){
        newParagraph.innerHTML=`${nome}, primeiramente, você a melhor professora de inglês da história mundial, e o tipo que mais combina com você é o :`
        msgDoNome.appendChild(newParagraph)
    }
    if(nome==="Ingrid" || nome==="ingrid"){
        newParagraph.innerHTML=`${nome}, não sei porque você está aqui, você devia estar ganhando dinheiro, mas já que está aqui, o tipo que mais combina com você é o :`
        msgDoNome.appendChild(newParagraph)
    }
    if(nome==="Igor" || nome==="igor"){
        newParagraph.innerHTML=`${nome}, lembre-se, esqueça os erros do passado e foque nos erros do futuro, o tipo que mais combina com você é o :`
        msgDoNome.appendChild(newParagraph)
    }
    if(nome==="André" || nome==="Andre" || nome==="andré" || nome==="andre"){
        newParagraph.innerHTML=`${nome}, bão demais, é os guri, o tipo que mais combina com você é o :`
        msgDoNome.appendChild(newParagraph)
    }
    else {
        newParagraph.innerHTML=`${nome}, o tipo que mais combina com você é o :`
        msgDoNome.appendChild(newParagraph)
    }
    
    containerResultado.classList.remove("sumir")
    nameMsg.classList.add("sumir")
})