//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
var API_key = 'd85ff557ade8996e0d7a136b54ae2182'

async function api(){
    v = fetch('https://restcountries.com/v3.1/all')
    out = await v
    prom = out.json()
    out1 = await prom
    var parent_data_all = document.querySelector('.weather-data')
    for(let i of out1){
        try{
            
         var data_cont = document.createElement('div')
         lat = i.latlng[0];
         lng = i.latlng[1];
         data_cont.setAttribute('lat',lat)
         data_cont.setAttribute('lng',lng)
         console.log(i.latlng);
         data_cont.classList.add('country_data')
         data_cont.style.display = "inline-block"

        //name
        
        var countryName = document.createElement('p')
        countryName.innerText = i.name.common
        data_cont.append(countryName)
        countryName.style.backgroundColor = 'black'
        countryName.style.textAlign = 'center'
        countryName.style.height = '10px'
        countryName.style.padding = '15px'
        console.log(i.name.common);
        

        //flag
        var flags = document.createElement('img')
        flags.setAttribute('src',i.flags.png)
        data_cont.append(flags)
        flags.style.textAlign = 'center'
        console.log(i.flags.png);

        //capital
        var capital = document.createElement('p')
        capital.innerText = i.capital[0]
        data_cont.append(capital)
        capital.style.textAlign = 'center'
        console.log(i.capital[0]);

        //region
        var region = document.createElement('p')
        region.innerText = i.region
        data_cont.append(region)
        region.style.textAlign = 'center'
        console.log(i.region);

        //country code
        var country_Code = document.createElement('p')
        country_Code.innerText = i.cioc
        data_cont.append(country_Code)
        country_Code.style.textAlign = 'center'
        console.log(i.cico);

        //button
        var button_weather = document.createElement('button')
        button_weather.setAttribute('onclick','weatherapi(this)')
        button_weather.innerText = 'Click for Weather'
        button_weather.style.textAlign = 'center'
        data_cont.append(button_weather)
        
        parent_data_all.append(data_cont)

    }catch{
        //
    }

    }
    
}

api()
 async function weatherapi(e){
    console.log(e);
    console.log(e.parentElement);

    var parent = e.parentElement;
    var lat = parent.getAttribute('lat')
    var lng = parent.getAttribute('lng')
    var weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`
    v = fetch(weather_url)
    out = await v
    prom = out.json()
    out1 = await prom 
    console.log(out1)
}

