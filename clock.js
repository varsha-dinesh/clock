let clock = document.querySelector(".clock")

setInterval(function () {
    const timeNow = new Date()
    const hours = timeNow.getHours()
    // const hour = hours % 12
    const minutes = timeNow.getMinutes()
    const seconds = timeNow.getSeconds()
    const am_pm = timeNow.getHours() >= 12 ? "PM" : "AM"
    clock.textContent = `${hours}: ${minutes}: ${seconds} ${am_pm}`
}, 100)

let day = document.querySelector(".day")

function dayName() {
    const time = new Date().getDay()
    const name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const day_name = name[time]
    day.textContent = day_name
}

dayName()