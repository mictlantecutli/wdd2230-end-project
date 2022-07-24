const currentTemp = document.querySelector('#temp_number');
const weatherIcon = document.querySelector('#icon_weather');



const requestURL = "https://api.openweathermap.org/data/2.5/onecall?lat=38.98&lon=-77.10&units=imperial&appid=04adae9f3166a0116b9cc43d5555888f";



async function apiFetch(apiUrl) {

  const response = await fetch(apiUrl);
  if (response.ok) {
    const data = await response.json();

     
    
    if(data.alerts) {
      console.log('si tiene Alerts');
   
      let containAlert = document.querySelector('.alert');
      let buttonAlert = document.createElement('button');
      let textAlert = document.createElement('p');

      buttonAlert.innerText="CLICK HERE AND CLOSE THE ALERT"

      buttonAlert.setAttribute("class", "close");

      textAlert.innerHTML = `${data.alerts[0].description}!!`;

      containAlert.appendChild(textAlert);

      containAlert.appendChild(buttonAlert);

      const close = document.querySelector(".close");
      close.addEventListener("click", () => {
        containAlert.style.display = "none";
      })


  }else{
    console.log("no hay")
  }



    //document.querySelector('.alert').innerHTML = `${data.alerts[0].event}!!`

    for (i = 0; i < 4; i++) {
      console.log(data); // this is for testing the call
      //displayResults(data);

      //document.querySelector('#temp_current').innerHTML = `<strong>${data.current.temp.toFixed(0)}</strong>`;

      
      //document.querySelector("#icon_weather").src = "http://openweathermap.org/img/w/"+data.weather[i].icon +".png";

      dt = data.daily[i].dt
      date = new Date(dt * 1000)

      document.querySelector(`#temp_number${i+1}`).innerHTML = `<strong>${data.daily[i].temp.day.toFixed(0)}</strong>`;
      document.querySelector(`.date_temp${i+1}`).innerHTML = `<strong>${date.toDateString()}</strong>`

      
   
    }


    
    

    document.querySelector('#temp_current').innerHTML = `<strong>${data.current.temp.toFixed(0)}</strong>`;
    document.querySelector('#humidity').innerHTML =  `<strong>${data.current.humidity.toFixed(0)}</strong>`;
    document.querySelector('#icon_weather').setAttribute('src', `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`);
    document.querySelector('#icon_weather').setAttribute('alt', data.current.weather[0].description)
    document.querySelector('figcaption').innerHTML = data.current.weather[0].description;


  } else {
    throw Error(await response.text());
  }

}

apiFetch(requestURL)


/*/
function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.innerHTML = desc

  humidity.innerHTML = `${weatherData.main.humidity}`

}
/*/
