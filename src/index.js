const API = 'http://localhost:3000/films'
const API2 = 'http://localhost:3000/films/1'
fetch(API)
.then(resp => resp.json())
.then(renderMoviesToScreen)

// let currentTickets = 0;


const buyTicket = document.querySelector('#buy-ticket');
buyTicket.addEventListener('click', getTicketAmnt)
console.log(buyTicket)
fetch(API2)
.then(resp => resp.json())
.then(renderFirstMovie)

// const div = document.querySelector('.four wide column');
// const movieName = document.querySelector('#title');
// const runtime = document.querySelector('#runtime');
// // const capacity = document.querySelector('');
// const showTime = document.querySelector('#showtime');
// const ticketsSold = document.querySelector('#ticket-num');
// const description = document.querySelector('#film-info');
// const poster = document.querySelector('#poster')

function renderFirstMovie(){
  div.append(movieName, runtime, showTime, ticketsSold, description, poster);
}


function renderMoviesToScreen(movie) {
  movie.forEach(renderMovies)
};

function renderMovies(movie){
  const ul = document.querySelector('#films')
  const title = document.createElement('li')

  title.textContent = movie.title;
  ul.append(title)

  title.addEventListener('click', e => {
    movieDetails(movie)
  })
};

function movieDetails(movie) {
  const div = document.querySelector('.four wide column');
  // const mainPoster = document.querySelector('#poster')
  const movieName = document.querySelector('#title');
  const runtime = document.querySelector('#runtime');
  // const capacity = document.querySelector('');
  const showtime = document.querySelector('#showtime');
  const ticketsSold = document.querySelector('#ticket-num');
  const description = document.querySelector('#film-info');
  const poster = document.querySelector('#poster')


 
  movieName.textContent = movie.title;
  runtime.textContent = movie.runtime;
  //capacity.textContent = parseInt(movie.capacity);
  showtime.textContent = movie.showtime;
  ticketsSold.textContent = movie.tickets_sold;
  // ticketsSold.textContent = getTicketAmnt(movie)
  description.textContent = movie.description;
  poster.src = movie.poster
  poster.alt = movie.poster

  div.append(movieName, runtime, showTime, ticketsSold, description, poster);


}
// const ticketTracker = {

// }

function getTicketAmnt(movie){
  console.log(movie)
  
  // console.log(e)
  // currentTickets.ticketsSold -= parseInt(e.target.ticketsSold.value)
  // movieDetails(currentTickets)
  return movie.tickets_sold
}


