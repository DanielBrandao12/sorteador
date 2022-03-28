let array = [];


var btn1 = document.getElementById('botao1')
var btn2 = document.getElementById('botao2')
var table = document.getElementById('tabela')
var nameSorte = document.getElementById('sorteado')
    


var valor = document.getElementById('name')
btn1.addEventListener("click",e=>{
    let name = valor.value;
  if (name === ""){
    alert("Preecha o campo")
  }else{

    
        
      if(array.includes(name)){
        alert('Este nome já existe na lista')
        valor.value='';
      }else{
        array.push(name)
        let tr = document.createElement('tr');
      
        tr.innerHTML= ` <td>${name}</td>`
      
        console.log(this.table.appendChild(tr))
        this.table.appendChild(tr)
        valor.value='';
        
      }
    
    }
  
  });
  
  
  
  

btn2.addEventListener('click', e=>{
  if(array.length <= 0){
    alert('Lista vazia')
  }else{
    const sorteado =Math.floor(Math.random() * array.length);
    let tr = document.createElement('tr');
  
    tr.innerHTML= ` <td>${array[sorteado]}</td>`
  
    
    this.nameSorte.appendChild(tr)
 
  alert(`O sorteado foi ${array[sorteado]}`)
  document.location.reload(true)
  }
});




