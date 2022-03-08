document.addEventListener("mousemove", track);

let hereEl = document.querySelector(".here");
function track() {
  hereEl.innerHTML = `${Math.random() * 100}`;
}

//let removeEL = document.querySelector('.btn')
function fun() {
  document.removeEventListener("mousemove", track);
}

//-----------------------------------------------------------------------

// Event bubbling -- bottom to top
// Event capturing -- top to bottom

//-------------------------------------------------
// custom event


document.addEventListener("hello", function(data){
    console.log("hello has called and send", data.detail)
})

function customEventhandler() {
    let event = new CustomEvent("hello", {
      detail: { name: "mahi", age: 24, number: "9106-979-365" },
    });
    document.dispatchEvent(event)
  }