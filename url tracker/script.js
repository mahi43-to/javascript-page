let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

const ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads)
    renderLeads()
    inputEl.value= ""
})

function renderLeads() {
let listItems = ""
for(let i = 0; i < myLeads.length; i++) {
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // create element
    // set text content
    // append to ul
    // let li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)

   // listItems += "<li><a href=' "+ myLeads[i] +" ' target='_blank'>" + myLeads[i] + "</a></li>"
    listItems += `
        <li>
            <a href='${myLeads[i]}' target='_blank' method='GET'> 
                ${myLeads[i]} 
            </a>
        </li>
    `

}

ulEl.innerHTML = listItems
}