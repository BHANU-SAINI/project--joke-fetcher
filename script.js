const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener("click", generateJoke) /*what event to perform when clicking on btn */

generateJoke()

function generateJoke() 
     {
       const config = {
                        headers: {
                        Accept: 'application/json',
                                 },
       }
        /*to fetch data in jason format as icahazdadjoke.com/api 
     gives response by default in html format */
  
       fetch('https://icanhazdadjoke.com', config)
         .then((res) => res.json())
         .then((data) => {
           jokeEl.innerHTML = data.joke
         })
     }
      
