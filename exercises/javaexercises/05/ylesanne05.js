//PÄRT TARPE23 22.10.2024
function temperature() {
    const temp = prompt("Sisesta temperatuur")
    alert(`Sisestasid ${temp}`)

    if (temp > 25) {
        console.log("Väga kuum ilm")
    }
    else if (temp <= 25 && temp >= 15) {
        console.log("Mõnus temperatuur")
    }
    else if (temp < 15) {
        console.log("Jahe ilm")
    }
}

function UsernameCheck() {
    let Username = prompt("Enter username")
    const adminName = "admin"
    alert(`Sisestasid ${Username}`)

    if (Username == adminName) {
        console.log("Tere, administraator!")
    }
    else if (Username != adminName) {
        console.log("Tere, külaline")
    }
}

function TicketSale() {
    let ticketType = prompt("Enter ticket type(Soodus/Tais)")
    let age = prompt("Enter your age")
    alert(`Sisestasid ${ticketType}`)
    alert(`Sisestasid ${age}`)
    if (ticketType == "Tais" && age < 18) {
        console.log("Your ticket is 10 Euro")
    }
    else if (ticketType == "Tais" && age >= 18 && age <= 64) {
        console.log("Your ticket is 20 Euro")
    }
    else if (ticketType == "Tais" && age >= 65) {
        console.log("Your ticket is 15 Euro")
    }

    if (ticketType == "Soodus" && age < 18) {
        console.log("Your ticket is 8 Euro")
    }
    else if (ticketType == "Soodus" && age >= 18 && age <= 64) {
        console.log("Your ticket is 15 Euro")
    }
    else if (ticketType == "Soodus" && age >= 65) {
        console.log("Your ticket is 8 Euro")
    }
}