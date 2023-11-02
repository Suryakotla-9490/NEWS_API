const mainContainer = document.querySelector('main-container')
const navContainer = document.querySelector('.navbar')
const cryptoContainer = document.querySelector(".crypto-container")
const sportsContainer = document.querySelector(".sports-container")
const moviesContainer = document.querySelector(".movies-container")



function navbar(){
    const cardd = document.createElement('div')
    cardd.classList.add('cardd')

    const button1 = document.createElement('button')
    button1.innerHTML = "HOME"
    button1.addEventListener('click',()=>{
        cryptoContainer.classList.add('hide')
        moviesContainer.classList.add('hide')
        sportsContainer.classList.add('hide')
    })

  

    const button3 = document.createElement('button')
    button3.innerHTML = "SPORTS"
    button3.addEventListener('click',()=>{
        cryptoContainer.classList.add('hide')
        moviesContainer.classList.add('hide')
        sportsContainer.classList.remove('hide')
       
    })

    const button2 = document.createElement('button')
    button2.innerHTML = "CRYPTO"
    button2.addEventListener('click',()=>{
        cryptoContainer.classList.remove('hide')
        moviesContainer.classList.add('hide')
        sportsContainer.classList.add('hide')
        
    })

    const button4 = document.createElement('button')
    button4.innerHTML = "MOVIES"
    button4.addEventListener('click',()=>{
        cryptoContainer.classList.add('hide')
        moviesContainer.classList.remove('hide')
        sportsContainer.classList.add('hide')
        
    })

    cardd.appendChild(button1)
    cardd.appendChild(button2)
    cardd.appendChild(button3)
    cardd.appendChild(button4)

    navContainer.appendChild(cardd)
}

navbar()
getCryptoData()
getSportsData()
getMoviesData()



function getCryptoData(id){
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=964479de95ac4ea296a25afbf1cdb086')
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
        cryptoCard(data.articles)
    })
}
// getCryptoData() 

function cryptoCard(apiData){
    apiData.forEach((coin) => {

        const card = document.createElement('div')
        card.classList.add('card')

        const image = document.createElement('img')
        image.src = coin.urlToImage
        image.alt = "image is not found"

        const heading = document.createElement('h2')
        heading.innerHTML = coin.source.name

        const heading3 = document.createElement('h2')
        heading3.innerHTML = coin.author

        const para = document.createElement('p')
        para.innerHTML = coin.description

        card.appendChild(image)
        card.appendChild(heading)
        card.appendChild(heading3)
        card.appendChild(para)
        cryptoContainer.appendChild(card)

    });
    
}



function getSportsData(){
    fetch('https://newsapi.org/v2/everything?q=sports&apiKey=964479de95ac4ea296a25afbf1cdb086')
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
        sportsCard(data.articles)
    })
}
// getSportsData()

function sportsCard(apiData){
    apiData.forEach((sport)=>{

        const card = document.createElement('div')
        card.classList.add('card')

        const image = document.createElement('img')
        image.src = sport.urlToImage
        image.alt = "image is not found"

        const heading1 = document.createElement('h2')
        heading1.innerHTML = sport.source.name

        const heading2 = document.createElement('h2')
        heading2.innerHTML = sport.author

        const para = document.createElement('p')
        para.innerHTML = sport.description


        card.appendChild(image)
        card.appendChild(heading1)
        card.appendChild(heading2)
        card.appendChild(para)
        sportsContainer.appendChild(card)

    })
}


function getMoviesData(){

    fetch('https://newsapi.org/v2/everything?q=movies&apiKey=964479de95ac4ea296a25afbf1cdb086')
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
        moviesCard(data.articles)
    })
}
// getMoviesData()

function moviesCard(apiData){
     apiData.forEach((movie)=>{
        const card = document.createElement('div')
        card.classList.add('card')

        const image = document.createElement('img')
        image.src = movie.urlToImage

        const heading1 = document.createElement('h2')
        heading1.innerHTML = movie.source.name

        const heading2 = document.createElement('h2')
        heading2.innerHTML = movie.author

        const para = document.createElement('p')
        para.innerHTML = movie.description

        card.appendChild(image)
        card.appendChild(heading1)
        card.appendChild(heading2)
        card.appendChild(para)
        moviesContainer.appendChild(card)
     })
}

