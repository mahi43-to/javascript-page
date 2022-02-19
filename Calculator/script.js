//let textContainEl = document.getElementById("text-contain");
let inputEl = document.getElementById("input-el");
let count = 0;
let numONEl = document.getElementById("numON-btn");
numONEl.addEventListener("click",  function (){
  //console.log(num1El.value);
  // inputEl.value = "0";
  
  //textContainEl.innerHTML = '<input type="text" name="value" id="input-el" placeholder = "0" >';
  console.log(count)
  //start(count);
  count++;
  console.log(count)

});

let numOFFEl = document.getElementById("numOFF-btn");
numOFFEl.addEventListener("click", function () {
  //console.log(num1El.value);
  textContainEl.innerHTML = '<input type="text" name="value" id="input-el" placeholder = "" >';
});

//function start(vallluee) {
  
    //if ((true)) {
        let num1El = document.getElementById("num1-btn");
        num1El.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += parseInt(document.getElementById("num1-btn").value);
          console.log(typeof(inputEl.value))
        });
    
        let num2El = document.getElementById("num2-btn");
        num2El.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num2-btn").value;
        });
    
        let num3El = document.getElementById("num3-btn");
        num3El.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num3-btn").value;
        });
    
        let num4El = document.getElementById("num4-btn");
        num4El.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num4-btn").value;
        });
    
        let num5El = document.getElementById("num5-btn");
        num5El.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num5-btn").value;
        });
    
        let num6El = document.getElementById("num6-btn");
        num6El.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num6-btn").value;
        });
    
        let num7El = document.getElementById("num7-btn");
        num7El.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num7-btn").value;
        });
    
        let num8El = document.getElementById("num8-btn");
        num8El.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num8-btn").value;
        });
    
        let num9El = document.getElementById("num9-btn");
        num9El.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num9-btn").value;
        });
    
        let num0El = document.getElementById("num0-btn");
        num0El.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num0-btn").value;
        });
    
        let numaddEl = document.getElementById("num+-btn");
        numaddEl.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num+-btn").value;
        });
    
        let numsubEl = document.getElementById("num--btn");
        numsubEl.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num--btn").value;
        });
    
        let nummulEl = document.getElementById("num*-btn");
        nummulEl.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num*-btn").value;
        });
    
        let numdivEl = document.getElementById("num/-btn");
        numdivEl.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num/-btn").value;
        });
    
        let nummodEl = document.getElementById("num%-btn");
        nummodEl.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num%-btn").value;
        });
    
        let numdotEl = document.getElementById("num.-btn");
        numdotEl.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value += document.getElementById("num.-btn").value;
        });
    
        let numCEEl = document.getElementById("numCE-btn");
        numCEEl.addEventListener("click", function () {
          //console.log(num1El.value);
          inputEl.value = "";
        });
        
      //}
//}

let numeqEl = document.getElementById("num=-btn");
        numeqEl.addEventListener("click", function () {
          //console.log(num1El.value);
          let num = inputEl.value;
          console.log(num);
        });
