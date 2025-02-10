//Thomas-Henry Pärt
//15.10.2024
//1

{
    //KELLAAEG
    let hours = 8;
    let minutes = 27;
    let seconds = 33;
    console.log(hours + ":" + minutes + ":" + seconds + "PM");
}

{
    //NIMETÄHED
    let firstName = "Ry ";
    let lastName = "Pärt ";
    let firstNameFirstLetter = firstName.charAt(0); 
    let lastNameFirstLetter = lastName.charAt(0);
    console.log(firstName + lastName + " Nimetähed on " + firstNameFirstLetter +"."+lastNameFirstLetter)
}

{
    //EPOSTI MUUTMINE 2
    let epost = "kass@meow.ee" 
    let epostlength = epost.length
    let epostSplit = epost.split("@")[0]
    let domainSplit = epost.split(".")[epostSplit]
    let newepost = epostSplit + "@gmail" + domainSplit
    console.log(newepost)
}