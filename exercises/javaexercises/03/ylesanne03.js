//Thomas-Henry Pärt
//15.10.2024
//1

function CalculateTravelTime(){
 let distance = document.getElementById("distance").value;
 let speed = document.getElementById("speed").value;
 let time = distance / speed;
 document.getElementById("TravelTimeResult").innerHTML = ("driving " + (distance) + "km" + " at " + (speed) + "km/h, takes " + time + " hours");
 return false;
}

function showPosts(){
    let MaxPostsPerPage = document.getElementById("MaxPostsPerPage").value;
    let AmountOfPosts = document.getElementById("AmountOfPosts").value;
    let AmountOfPagesNeeded = AmountOfPosts / MaxPostsPerPage
    let LeftOverPosts = AmountOfPosts % MaxPostsPerPage
    document.getElementById("ShowPostsResults").innerHTML =`You need ${AmountOfPagesNeeded} pages to show ${AmountOfPosts} posts, there is ${LeftOverPosts} leftover posts`
    return false
}

function ServerRunningCosts(){
    //Serveri töökulu
    let ServerPower = document.getElementById("ServerPower").value; // WATT
    let ElectricityPrice = document.getElementById("ElectricityPrice").value //Senti/KWH
    let PowerUsage = ServerPower / 1000
    let Price = PowerUsage / ElectricityPrice 
    document.getElementById("ServerRunCostResult").innerHTML =(`Üks tund serveri töös hoidmist läheb maksma ${Price}€ `)
    return false;
}
