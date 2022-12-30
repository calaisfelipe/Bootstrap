
//Seletor
const myModal = document.querySelector('#exampleModal')

//Criei um novo modal com a classe de bootstrap e a estrutura de HTML5 já pronta e armazenei tudo na variavel meuModal para trabalhar com os metodos no javascript
const meuModal = new bootstrap.Modal(myModal , {
    backdrop: false, 
    keybord:false
})


meuModal.show()