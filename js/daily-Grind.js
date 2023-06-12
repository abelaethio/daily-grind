/*
    here are the main things we'll likely need to store for each coffee. 
    name - the name of the coffee 
    pic - the picture of the coffee 
    color - the color associated with the coffee
    alt - the alt tag identifying the coffee
    day - the day of the week 
    desc - a description of the coffee


*/

let myDate = new Date();

let today = myDate.getDay();

let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


function coffeeTemplate(coffee){


       return `
<p>
            <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
           <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">${coffee.name}</strong>,${coffee.desc} </p>

`;


}


//today = 3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 today = parseInt(today);

switch(today){


    case 1:
        today = "Monday";


        coffee = {
            name: "Bubble Tea", 
            pic: "images/bubble-tea.jpg", 
            alt: "A picture of a bubble tea", 
            color: "pink", 
            day: "Monday", 
            desc: 'I love me some bubble tea!'
        };
     break;

     case 2:
        today = "Tuesday";

        coffee = {
            name: "Mocha", 
            pic: "images/mocha.jpg", 
            alt: "A picture of a Mocha", 
            color: "brown", 
            day: "Tuesday", 
            desc: 'I love me some mocha!'
        };



     break;

     case 3:
        today = "Wednesday";

        coffee = {
            name: "Cold Brew", 
            pic: "images/cold-brew.jpg", 
            alt: "A picture of a Cold Brew", 
            color: "Black", 
            day: "Wednesday", 
            desc: 'I love me some Cold Brew!'
        };
     break;

     case 4:
        today = "Thursday";

        coffee = {
            name: "Drip Coffee", 
            pic: "images/drip.jpg", 
            alt: "A picture of a Drip Coffee", 
            color: "Black", 
            day: "Thursday", 
            desc: 'I love me some Drip Coffee!'
        };
        break;

        case 5:
        today = "Friday";

        coffee = {
            name: "Frappaccino", 
            pic: "images/frappaccino.jpg", 
            alt: "A picture of a Frapaccino", 
            color: "Brown", 
            day: "Friday", 
            desc: 'I love me some Frappe!'
        };
        break;

        case 4:
        today = "Saturdy";

        coffee = {
            name: "Caramel Latte", 
            pic: "images/caramel-latte", 
            alt: "A picture of a Caramel Latte", 
            color: "Brown", 
            day: "Saturday", 
            desc: 'I love me some Caramel Latte!'
        };
        break;

        case 4:
        today = "Sunday";

        coffee = {
            name: "Pumpkin Spice Latte", 
            pic: "images/pumpkin-spice-latte.jpg", 
            alt: "A picture of a Drip Coffee", 
            color: "Brown", 
            day: "Sunday", 
            desc: 'I love me some Pumpkin Spice Latte!'
        };
        break;
   

    default:  
        today ="Day is unknown";
}
      




 
document.getElementById("coffe-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

        console.log(coffee);