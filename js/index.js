 const country=[
  {name:`America`, code:`US`,},
   {name:`Canada`,code:`CA`,},
   {name:`China`,code:`CN`,},
   {name:`Australia`,code:`AU`,},
 ];



 let inquireCountry =[{city:``,country:``,code:``},]

 const printOneDropDown =(country)=>{
   return `<option name="country-op" value="${country.code}">${country.code}</option>`
 }
 
 const $countryOptions = document.getElementById(`country-option`);


 const printAllCountries =()=>{
   $countryOptions.innerHTML = country.map(printOneDropDown).join(``);
 }

 printAllCountries();



 const getLocalStorage = ()=>{
   const str = localStorage.getItem(`weather`);
   const arr = JSON.parse(str);
   console.log(arr)
   return arr;
 }

 const setLocalStorage = ()=>{
   const str = JSON.stringify(newInquire)
   localStorage.setItem(`weather`,str);
 }





  const newInquire= inquireCountry || getLocalStorage();


  const $submitForm = document.getElementById(`weather-form`)





 $submitForm.addEventListener(`submit`,event=>{
       event.preventDefault();
       
    newInquire[0].code = $submitForm.country.value;
   newInquire[0].city = $submitForm.city.value

     setLocalStorage();
     console.log(newInquire)
     print(newInquire)

    $submitForm.classList.add(`show-none`);
   })
    
    const print=()=>{
      const key=`2acceff38206283f50a4dc5d0aac6562`
      const city = newInquire[0].city+`,`+newInquire[0].code
     const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${key}&q=${city}`; 
     fetch(url).then(response=>{
      response.json().then(data=>{
        console.log(data);

    
         document.getElementById(`area-name`).innerHTML=`${data.name}`;
         let icon =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
         document.getElementById(`weather-icon`).innerHTML=`<img src="${icon}" alt="code-${data.weather[0].icon}" class="weather-icon"> ` 
          document.getElementById(`weather-main`).innerHTML=` ${data. weather[0].main}`
          document.getElementById(`temp`).innerHTML=`Current Temperature: ${data.main.temp} &#176 C`
          document.getElementById(`temp-max`).innerHTML=`${data.main.temp_max}&#176 C`
          document.getElementById(`temp-min`).innerHTML=` ${data.main.temp_min}&#176 C`
          document.getElementById(`humidity`).innerHTML=`Humidity: ${data.main.humidity}%`
          document.getElementById(`pressure`).innerHTML=`Pressure: ${data.main.pressure}hPa`
          document.getElementById(`wind`).innerHTML=`Wind Speed: ${data.wind.speed}km/h`
          document.getElementById(`visibility`).innerHTML=`Visibility: ${data.visibility/1000}km`
           let imgResource = `https://source.unsplash.com/random/600×1300/?${data.name},${data.weather[0].main},skyline`
          document.querySelector(`body`).style.backgroundImage= `url(${imgResource})`;

          const sunsetTime = new Date(data.sys.sunset * 1000);
          const sunriseTime = new Date(data.sys.sunrise * 1000);
          
          const $localSunSetTime = sunsetTime.toLocaleTimeString(`en-CA`);
          const $localSunRiseTime =sunriseTime.toLocaleTimeString(`en-CA`);

          document.getElementById(`sun-rise`).innerHTML= `Sunrise Time: ${$localSunRiseTime}`;
          document.getElementById(`sun-set`).innerHTML= `Sunset Time: ${$localSunSetTime}`;
                
     
      })
    })
  }
    










