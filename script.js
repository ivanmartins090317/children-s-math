

//gerador de numero aleatorio
const getNumber = (min, max) =>
Math.floor(Math.random() * (max - min)) + min 



 const result = () =>{
   var insert = document.getElementById('numberInput')

   var botaoOne = document.getElementById('botao1')
   var botaoTwo = document.getElementById('botao2')
   var botaoThee = document.getElementById('botao3')
   var botaoFour = document.getElementById('botao4')
   var botaoFive = document.getElementById('botao5')
   var botaoSix = document.getElementById('botao6')

   insert.innerHTML = getNumber(1, 10)
   
   botaoOne.innerHTML = getNumber(1, 4 )
   botaoTwo.innerHTML = getNumber(1, 6 )
   botaoThee.innerHTML = getNumber(1, 8)
   botaoFour.innerHTML = getNumber(1, 10)
   botaoFive.innerHTML = getNumber(1, 10)
   botaoSix.innerHTML = getNumber(1, 10)
   
  }
  
  result()
  
 
  //verificação dos numeros
          
  function click(){


    const ent = document.getElementById('numberInput')
  
    const valor = ent.innerHTML

    const butao = document.querySelectorAll('button')

 
          const but1 = butao[0].innerHTML
          const but2 = butao[1].innerHTML
          const but3 = butao[2].innerHTML
          const but4 = butao[3].innerHTML
          const but5 = butao[4].innerHTML
          const but6 = butao[5].innerHTML

        
          
           if (but1 == valor){
            alert('Certo!')
          }else if (but2 === valor){
            alert('Certo!')
          } else if (but3 === valor){
            alert('Certo!')
          }else if (but4 === valor){
            alert('Certo!')
          }else if (but5 === valor){
            alert('Certo!')
          }else if (but6 === valor){
            alert('Certo!')
          }else { 
            alert('Tente outra vez!')
          }
          
           location.reload()
           
         } 
         
  //resposavel pelo click

  window.onload = function clickando(){

  const botao = document.querySelectorAll(".btn")

  for (let i = 0; i < botao.length; i++){
    const botoes = botao[i]
   botoes.addEventListener("click", click)

  }
}



    
    

  
  



  

  
       

    
     
    
    
  
   
    
    
  


   
    

     
    

   

   

  

  

 
    

  

  

   
   

   

       
      
     
      
       
      
    


  
  


     
        
       


       
      
      




       

    
       

    
   

   

            
            
            
            
           
 

  

    


  
   
    


   
   
  
   
   
   
  


    
    


    

  
  

 

  


 
 

 
  
   
   
   
  
  
  
  


