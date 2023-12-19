
let api = "531a4dc053d11cbda28e7b5667785d1d"

let button = document.querySelector("#Buscar")



function DadosDoTempo(dados) {
    document.querySelector(".cidade").innerHTML = "tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + " °C "
    document.querySelector(".ceu").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = " umidade: " + dados.main.humidity + "%"
    document.querySelector(".min").innerHTML = "Minimo dê  " + Math.floor(dados.main.temp_min) + " °C"
    document.querySelector(".max").innerHTML = "Maximo dê " + Math.floor(dados.main.temp_max) + " °C "




    console.log(dados)
}


async function buscarcity(city) {
    //async = funçao assincrona 

    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&lang=pt_br&units=metric`).then(Response => Response.json())


    DadosDoTempo(dados)

}



function clickbutton() {

    let city = document.querySelector("#city").value


    buscarcity(city)
}

button.addEventListener("click", clickbutton)