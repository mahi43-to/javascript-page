const data = [
    {
        player: 'jame',
        score: 45
    },
    {
        player: 'Mahi',
        score: 41
    }
]

//fetch the button from the dom, store it in a varible
let scoreBtn = document.getElementById("input-btn");

// use addEventListner to get click from the the buttons and fetch james score only
scoreBtn.addEventListener("click", function() {
    console.log(data[0].score)
})