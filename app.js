// const myButton = document.querySelector("button")
// const myContainer = document.querySelector(".container")
// const myH2 = document.createElement("h2")

// myButton.addEventListener("click", function () {
//     fetch("https://api.quotable.io/random").then(function (output) {
//         return output.json()
//     })
//         .then(function (result) {
//             let randomQuote = result.content

//             myH2.textContent = randomQuote
//             myContainer.append(myH2)
//         })
//         .catch(function (error) {
//             console.log(error);
//         })
// })

myButton.addEventListener("click", async function () {
    const output = await fetch("https://api.quotable.io/random")
    const result = await output.json()

    console.log(result);
})