
  
    export default function initCalc(){
  
     const people = document.querySelector('[data-js="people"]');
     const foods = document.querySelector('[data-js="foods"]');
     const drinks = document.querySelector('[data-js="drinks"]');
     const sweets = document.querySelector('[data-js="sweets"]');
     const calc = document.querySelector('[data-js="calc"]');
     const result = document.querySelector('[data-js="result"]');


    const peopleValue = () =>{
      if(people.value === "" || people.value <= 0){
       alert("Lamentamos, mas precisará digitar o número de pessoas!") 
      } else{
       finalSum();
      };
    }
    calc.addEventListener('click', peopleValue);
    
     const showValues = () =>{
      result.style.display = 'block';  
      clearValue();  
     }

    const finalSum = () =>{
      const allFood =  +foods.value + +drinks.value + +sweets.value;
      const pay = (allFood / people.value).toFixed(2);
      result.innerText = `Cada pessoa deverá contribuir com R$ ${pay}`;
      return showValues();
    };
  
    const clearValue = () =>{
      people.value = '';
      foods.value = '';
      drinks.value = '';
      sweets.value = '';
    };
  
  };
  
  
