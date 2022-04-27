
console.log("working")

function findAll() {
  axios({
    method: 'get',
    url: 'http://localhost:8080/allMovies'
  }).then(res => showOutput(res))
    .catch(err => console.log(err))
}
document.getElementById('addMovieForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const form = this;
  const data = {
    movieTitle: form.movieTitle.value, releaseYear: form.releaseYear.value, rating: form.rating.value, seen: form.seen.value
  };
  axios.post('http://localhost:8080/addMovie', data)
    .then(response => console.log(response))
    .catch(errors => console.log(errors));
});

document.getElementById('findMovieForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const form = this;
  const data = {
    movieTitle: form.movieTitle.value
  };
  axios.get('http://localhost:8080/findMovie/'+movieTitle)
    .then(res => showOutput(res))
    .catch(err => console.log(err))
});

document.getElementById('addMovieForm').addEventListener('submit', function updateMovie(event) {
  event.preventDefault();
  const form = this;
  const data = {
    movieTitle: form.movieTitle.value, releaseYear: form.releaseYear.value, rating: form.rating.value, seen: form.seen.value
  };
  axios.put('http://localhost:8080/updateMovie' + document.getElementById('id'), data)
    .then(response => console.log(response))
    .catch(errors => console.log(errors));
});


// INTERCEPTING REQUESTS & RESPONSES  // AXIOS INSTANCES  // Show output in browser  function showOutput(res) {
function showOutput(res) {
  document.getElementById('res').innerHTML = `    
    <div class="card card-body mb-4">  s 
       <h5>Status: ${res.status}</h5>   
     </div> 
      <div class="card mt-3">   
         <div class="card-header">     
            Headers     
        </div>   
           <div class="card-body">   
                <pre>${JSON.stringify(res.headers, null, 2)}</pre>     
         </div> 
           </div> 
              <div class="card mt-3">     
               <div class="card-header">      
                 Data      
         </div>     
         <div class="card-body">     
            <pre>${JSON.stringify(res.data, null, 2)}</pre>    
            </div>   
         </div>   
            <div class="card mt-3"> 
                 <div class="card-header">   
                      Config     
                       </div>     
           <div class="card-body">       
            <pre>${JSON.stringify(res.config, null, 2)}</pre>   
               </div>  
                 </div>  `;
}
document.getElementById('allMovies').addEventListener('click', findAll);
document.getElementById('findMovie').addEventListener('submit', findMovie);

