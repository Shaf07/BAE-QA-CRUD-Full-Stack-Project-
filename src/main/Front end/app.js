
console.log("working")

  function findAll(){
    axios({
      method: 'get',
      url: 'http://localhost:8080/allMovies'
    }).then(res => showOutput(res))
    .catch(err = console.log(err))
  }
  function findMovie(){
    axios({
      method: 'get',
      url: 'http://localhost:8080/findMovie/fre'
    }).then(res => showOutput(res))
    .catch(err = console.log(error))
  }
  function addMovie(){
    axios({
      method: 'post',
      url: 'http://localhost:8080/addMovie',
      data:{
        movieTitle: document.getElementById('movieTitle').value,
        releaseYear: document.getElementById('releaseYear').value,
        rating: document.getElementById('rating').value,
        seen: document.getElementById('seen').value
      }
    }).then(res => showOutput(res))
    .catch(err = console.log(error))
  }

  // INTERCEPTING REQUESTS & RESPONSES  // AXIOS INSTANCES  // Show output in browser  function showOutput(res) {
  function showOutput(res){
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
  document.getElementById('findMovie').addEventListener('click', findMovie);
  document.getElementById('addMovie').addEventListener('click', addMovie);

