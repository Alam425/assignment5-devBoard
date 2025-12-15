const taskDayP = document.getElementById("taskDay")
const taskDateP = document.getElementById("taskDate")

const newDate = new Date()
const formatter = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
    timeStyle: "long"
})

const formated = formatter.format(newDate).split(" ")

taskDayP.innerText = formated[0]
taskDateP.innerText = formated[2].split(",")[0] + " " + formated[1] + " " + formated[3]