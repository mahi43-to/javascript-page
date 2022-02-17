let myUrls = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("save-btn");
//---------------------------------------------------------------------------------
// localStorage.setItem('myUr', 'www.salesforceDeveloperconsole.com');
// console.log(localStorage.getItem('myUr'));

// myUrls = JSON.parse(myUrls);
// myUrls.push("www.trailhead.com")
// console.log(typeof myUrls);

// myUrls = JSON.stringify(myUrls);
// console.log(typeof myUrls)

//---------------------------------------------------------------------------------
// now fetch the data from localstoreage
const urlFromLocalStorage = JSON.parse(localStorage.getItem('myUrl'))

// check if urlFromLocalStorage is truthy
// if so, set myUrls to its value and call renderLeads()

if(urlFromLocalStorage) {
    myUrls = urlFromLocalStorage;
    render(myUrls)
}

function render(urls) {
    let listItems = ""
    for(let i = 0; i < myUrls.length; i++) {
        //ulEl.innerHTML += "<li>" + myUrls[i] + "</li>"
        // create element
        // set text content
        // append to ul
        // let li = document.createElement("li")
        // li.textContent = myUrls[i]
        // ulEl.append(li)
    
       // listItems += "<li><a href=' "+ myUrls[i] +" ' target='_blank'>" + myUrls[i] + "</a></li>"
        listItems += `
            <li>
                <a href='${myUrls[i]}' target='_blank' method='GET'> 
                    ${myUrls[i]} 
                </a>
            </li>
        `
    
    }
    ulEl.innerHTML = listItems
    
    // --------------------------------------------------------------------
    // local storage
    
}

inputBtn.addEventListener("click", function() {
    myUrls.push(inputEl.value);
    inputEl.value= ""

    // save the myLead arrary into localstorage
    localStorage.setItem("myUrl", JSON.stringify(myUrls))


    console.log(myUrls)
    render(myUrls)
    listItems = null;
})

// for give the key to tab array
// const tabs = [
//     {urls : "https://www.linkedin.com/in/per-harald-borgen/"}
// ]

// listen for clicks on tabBtn. log linkedIn url to the console
tabBtn.addEventListener("click", function() {
    // console.log(tabs[0].urls)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myUrls.push(tabs[0].urls)
        localStorage.setItem("myUrls", JSON.stringify(myUrls))
        render(myUrls)
    })
})
    

// listen for double clicks on the delete button
deleteBtn.addEventListener("dblclick", function() {
    // Double-click detected
    console.log("Double-click detected")

    // when clicked, clear localstorage, clear myUrls, and clear dom
    localStorage.clear();
    //here i am reassing it so that it can be empty
    myUrls = [];
    // here i am recalling the render() function bcz we dont have any item in myUrls so all will be clear(refer to that function line no --> 30)
    render(myUrls)
  })





