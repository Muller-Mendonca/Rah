(function () {
    'use strict';
    
  
    function initCalc(){
  
     const people = document.querySelector('[data-js="people"]');
     const foods = document.querySelector('[data-js="foods"]');
     const drinks = document.querySelector('[data-js="drinks"]');
     const sweets = document.querySelector('[data-js="sweets"]');
     const calc = document.querySelector('[data-js="calc"]');
     const result = document.querySelector('[data-js="result"]');
  
    
     calc.addEventListener('click', peopleValue);
  
     function peopleValue(){
  
      people.value === "" || people.value === "0"
      ? alert("Digite a quantidade de Pessoas!") 
      : finalSum();
      result.style.display = 'block';
     }
  
    const finalSum = () =>{
  
      const allFood =  +foods.value + +drinks.value + +sweets.value;
      const pay = allFood / people.value;
      allFood <= 0 ? alert('Por favor, não digite valores negativos!')
      : result.innerText = `Cada pessoa deverá contribuir com R$ ${pay}`;
      clearValue();  
    };
  
    const clearValue = () =>{
  
      var allValues = [people,foods,drinks,sweets];
      allValues.forEach( item =>{ item.value = ''; });
    };
  
  };
  initCalc();
  
  
  })();