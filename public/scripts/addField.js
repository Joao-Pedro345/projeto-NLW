// Procurar pelo botão
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener('click', cloneField) /* como se esse Listener ouvi-se o evento e realiza-se algo #boraaa */

// Executar uma ação 
function cloneField() {
    // Duplicar os campos 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) /* eu tenho que usar isso para os desafios da rocketseat hehe */

    //pegar os campos 
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""    
    }) /* forEach para cada campo faça */    

    // Colocar na página: onde colocar? putinha disse o pc
    document.querySelector('#schedule-items').appendChild(newFieldContainer)/* colocando um filhinho */
}