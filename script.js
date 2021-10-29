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
        console.log(modo)
        return modo
    }
    if(modo===false){
        container.classList.remove("dark-mode")
        h1.classList.remove("dark-mode")
        corpo.classList.remove("dark-mode")
        return modo
    }
})