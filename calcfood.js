(function () {
    'use strict';
    
  
    function initCalc(){
  
     const people = document.querySelector('[data-js="people"]');
     const foods = document.querySelector('[data-js="foods"]');
     const drinks = document.querySelector('[data-js="drinks"]');
     const sweets = document.querySelector('[data-js="sweets"]');
     const calc = document.querySelector('[data-js="calc"]');
     const result = document.querySelector('[data-js="result"]');

    const peopleValue = () =>{
      if(people.value === "" || people.value <= 0){
       alert("Lamentamos, mas a o número de pessoas não pode ser inferior ou igual a zero!") 
      } else{
       finalSum();
      };
    }
    
     calc.addEventListener('click', peopleValue);

    const finalSum = () =>{
      const contribuir = 'Cada pessoa deverá contribuir com R$'
      const allFood =  +foods.value + +drinks.value + +sweets.value;
      const pay = (allFood / people.value).toFixed(2);
      if(allFood <= 0 || allFood === ''){
        alert('Por favor,  digite algum valor!')
      } else{
        result.style.display = 'block';  
        result.innerText = contribuir + pay;
        clearValue();  
      }
    };
  
    const clearValue = () =>{
      const allValues = [people,foods,drinks,sweets];
      allValues.forEach( item =>{ item.value = ''; });
    };
  
  };
  initCalc();
  
  
  })();