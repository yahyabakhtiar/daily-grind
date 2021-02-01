/*
    What we need to change
Day of Week - day

Coffee Name - name
Coffee Pic - pic
Alt tag - alt
Coffee Descriptiton - decs
Color for coffee - color







*/

let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
 
 
if(urlParams.has('day')){
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
 
}else{
    myDay = myDate.getDay();
 
}
 
 
function coffeeTemplate(coffee){
    let myReturn = "";
 
    myReturn = `
    <p>
    <img src="${coffee.pic}" alt="Our ${coffee.alt}" id="coffee">
    <strong id="coffee-higlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily special is <strong>${coffee.name}</strong>, ${coffee.desc}
 
    </p>
        `;
        
    return myReturn;
}
 
switch(myDay){
 
    case 1:
        today = "Monday";
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of Bubble Tea",
            day: "Monday",
            desc: 'I love Bubble Tea'
        };
 
    break;    
 
    case 2:
        today = "Tuesday";
 
        coffee = {
            color: "orange",
            name: "Flat White",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of caramel latte",
            day: "Tuesday",
            desc: 'someday we need to caramel lattee'
        };
 
    break;   
 
 
    case 3:
        today = "Wednesday";
 
        coffee = {
            color: "brown",
            name: "drip",
            pic: "images/drip.jpg",
            alt: "A pic of drip coffee",
            day: "Wednesday",
            desc: 'Some days you just need the drip!'
        };
 
    break;
    case 4:
        today = "Thursday";
 
        coffee = {
            color: "red",
            name: "Cortado",
            pic: "images/frappaccino.jpg",
            alt: "A pic of frappaccino",
            day: "Thursday",
            desc: 'I love frappaccino'
 
        };
 
    break;
 
 
    case 5:
        today = "Friday";
    
        coffee = {
            color: "green",
            name: "Cappuccino",
            pic: "images/largebucks-logo.jpg",
            alt: "A pic of Cappuccino",
            day: "Friday",
            desc: `With this cappuccino, i can take on a rhino`
           
         };
 
    break;     
 
 
    case 6:
        today = "Saturday";
 
        coffee = {
            color: "Blue",
            name: "Affogato",
            pic: "images/mocha.jpg",
            alt: "A pic of mocha",
            day: "Saturday",
            desc: `Mocha is best drink`
 
        
        };
 
    break;
    
    
    case 0:
        today = "Sunday";
 
        coffee = {
            color: "purple",
            name: "Milk Tea",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of pumkin spice",
            day: "Sunday",
            desc: `weekend pumkin spice time.`
        };
 
    break;    
 
 
 
}
 
 
console.log(coffee);
 
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
 
document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;
 
document.getElementById("coffee-highlight").style.color = coffee.color;
 
