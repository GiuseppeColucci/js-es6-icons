$(document).ready(function(){

})//fine Jqery 
/**
 * Milestone 1:
- Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
 */
const boxIcon=[
    {name:'cat', prefisso:'fa', tipo:'animals', family:'fas'},
    {name:'dog', prefisso:'fa', tipo:'animals', family:'fas'},
    {name:'lemon', prefisso:'fa', tipo:'fruit', family:'fas'},
    {name:'carrot', prefisso:'fa', tipo:'fruit', family:'fas'},
    {name:'user-ninja', prefisso:'fa', tipo:'uman', family:'fas'},
    {name:'user-astronaut', prefisso:'fa', tipo:'uman', family:'fas'},
   
    

];
let icons=document.getElementById('rew');

boxIcon.forEach((element)=>{
    const{name,prefisso,tipo,family}=element
    icons.innerHTML+=`
    <div>
    <i class="${family} ${prefisso}-${name}"></i>
    ${tipo}
    </div>

    `
});
/**
 * Milestone 2:
- Definire un array di colori e associare ad ogni tipo di icona un colore.
- Visualizzare le icone di colore diverso in base al tipo.
 */

 const color=['red','blue','orange']

 const value=[];
 boxIcon.forEach((element)=>{
     if(!value.includes(element.tipo)){
         value.push(element.tipo)
     }
     
    });
boxIcon.forEach((element)=>{
    const index=value.indexOf(element.tipo);
    if(index != -1){
        element.color=colors[index]
    }
})
    
 

