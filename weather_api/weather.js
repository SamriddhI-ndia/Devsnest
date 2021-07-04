const wind=document.querySelector('#wind');
const feel=document.querySelector('#feels-like');
const humidity=document.querySelector('#humidity');
const locat=document.querySelector('.location');
const desk=document.querySelector('.desk');
const str=document.querySelector('.string');
const image=document.querySelector('.image');
const btn=document.querySelector('#change-btn');

btn.addEventListener('click',()=>{ 
    let val=document.querySelector('#state').value;
  
//     console.log(`https://api.weatherapi.com/v1/current.json?key=100f5d2ac8a84a31805160647210307&q=`+val+`&aqi=yes`);

fetch(`https://api.weatherapi.com/v1/current.json?key=100f5d2ac8a84a31805160647210307&q=`+val+`&aqi=yes`)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    locat.innerHTML=data.location.country;
    feel.innerHTML="Feels like: "+data.current.feelslike_c +"°C";
    humidity.innerHTML="Realative Humidity: "+data.current.humidity+"%";
    wind.innerHTML="Wind: From the "+data.current.wind_dir+" at "+data.current.wind_mph+" MPH";
    image.src=data.current.condition.icon;
    desk.innerHTML=data.current.condition.text;
    str.innerHTML=data.current.temp_c+"°C ("+data.current.temp_f+"°F)";
});
    
})
