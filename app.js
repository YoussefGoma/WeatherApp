const APIKEY = "3a24e16df0d2dadf5e2f6250f71c77ba";
let lat;
let lon;
let button = document.querySelector(".btn");
let cityinput = document.querySelector(".cityinput");
let cityoutput = document.querySelector(".cityoutput");
let tempoutput = document.querySelector(".tempoutput");
let descoutput = document.querySelector(".descoutput");
        function fetchWeather(city){
        fetch("https://api.weatherstack.com/current?access_key="+APIKEY+"&query="+city)
        .then((response) => response.json())
        .then((data) => {
            const name = data["location"]["name"];
            const temp = data["current"]["temperature"]
            const description = data["current"]["weather_descriptions"]   
            document.querySelector(".cityoutput").innerText = name;
            document.querySelector(".tempoutput").innerText = temp;
            document.querySelector(".descoutput").innerText = description;
        });
        
    }
    console.log(5)
button.addEventListener("click",function(){fetchWeather(cityinput.value)})

