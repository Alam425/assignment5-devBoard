let taskCount = parseInt(provideInnerText("taskCount"))
let taskCompletionCount = parseInt(provideInnerText("taskCompletionCount"))
let count = 0;
const time = formated[5] + " " + formated[6]
const completedBtn = document.querySelectorAll(".completedBtn")

completedBtn.forEach(btn => {
    btn.addEventListener("click", function () {

        alert("Board Updated Successfully!")

        const text = btn.parentNode.parentNode.querySelector(".title")
        const newPara = document.createElement("p")
        newPara.innerText = `You have Complete The Task ${text.innerText} at ${time}`
        newPara.classList.add("p-2")
        newPara.classList.add("m-2")
        newPara.classList.add("mini")
        newPara.classList.add("rounded-lg")
        document.getElementById("activityHistory").appendChild(newPara)

        taskCompletionCount++
        setInnerText("taskCompletionCount", taskCompletionCount)
        taskCount--
        setInnerText("taskCount", taskCount)
        btn.setAttribute("disabled", "disabled")
        btn.classList.add("bg-slate-700")
        count++
        
        if (count === 6) {
            alert("🎉 Congratulation, You Have Successfully Completed All The Tasks!!")
        }
    })
})


const clearHistory = document.getElementById("clearHistory")
clearHistory.addEventListener("click", function () {
    const activityHistory = document.querySelector("#activityHistory")
    const allPeragraphs = document.querySelectorAll(".mini")
    allPeragraphs.forEach(pera => activityHistory.removeChild(pera))
    alert("Activity History Vanished...")
})


const discoverDiv = document.getElementById("discover")
discoverDiv.addEventListener("click", function () {
    window.location.href = "/blog.html"
})
