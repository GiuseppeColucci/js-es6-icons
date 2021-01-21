$(document).ready(function(){

})//fine Jqery 
/**
 * Milestone 1:
- Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
 */
const boxIcon=[
    {name:'cat', prefisso:'fas', tipo:'fa-cat', family:'animals'},
    {name:'cat', prefisso:'fas', tipo:'fa-cat', family:'animals'},
    {name:'cat', prefisso:'fas', tipo:'fa-cat', family:'animals'},
    {name:'cat', prefisso:'fas', tipo:'fa-cat', family:'animals'},
    {name:'cat', prefisso:'fas', tipo:'fa-cat', family:'animals'},
    {name:'cat', prefisso:'fas', tipo:'fa-cat', family:'animals'},
    {name:'cat', prefisso:'fas', tipo:'fa-cat', family:'animals'},
    {name:'cat', prefisso:'fas', tipo:'fa-cat', family:'animals'},
    

];
boxIcon.forEach((element)=>{
    let icons=document.getElementById('rew');
    icons.innerHTML+=`
    <div>
    <i class="fas fa-cat"></i>
    ${element.name}
    </div>

    `
})