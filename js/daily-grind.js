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
            let myDay = myDate.getDay();
            let today = "";
            let coffee = "";

            function coffeeTemplate(coffee){

                let myReturn = "";

                myReturn = `
                
                
                <p>
                <img src="${coffee.pic} "images/pumpkin-spice-latte.jpg" alt="${coffee.pic}"Our Pumpkin Spice Latte tastes great on a Fall Day!" id="coffee">
               <strong class="feature">${coffee.pic} Coffee Special:</strong> Monday's daily coffee special is <strong class="feature">Pumpkin Spice Latte</strong>, 
               Which is our favorite coffee! Yum!
            </p>
                
                // Watach the class video to change it's on 1:45(wedneday)
                // watch the class video on Monday beginning of the class 
                
                
                
                
                `;

                return myReturn;

            }

            switch(myDay){

                case 0:
                    today ="Monday";
    
                    coffee = {
                        color: "pink",
                        name: "Bubble Tea",
                        pic: "images/bubble-tea.jpg",
                        alt: "A pic of a Bubble Tea",
                        day: "Monday",
                        desc: `I love Bubble Tea!`,
                    };
    
                    break;








                case 3:
                today ="Wednesday";

                coffee = {
                    color: "brown",
                    name: "Drip",
                    pic: "images/drip.jpg",
                    alt: "A pic of a drip coffee",
                    day: "Wednesday",
                    desc: `Some days you just need the drip!`,
                };

                break;






            }


                console.log(coffee);




document.getElementById("coffee-output").innerHTML = today;





           // alert("Hi, it's " + today );