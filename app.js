const { default: axios } = require("axios");

console.log("Gg");

function findAll() {
  axios({
    method: 'get',
    url: 'localhost:8080/allMovies',
    params: {
      _limit: 10
    }
  }).
    then(res => showOutput(res))
    .catch(err => alert(err));


  // INTERCEPTING REQUESTS & RESPONSES  // AXIOS INSTANCES  // Show output in browser  function showOutput(res) {
    document.getElementById('res').innerHTML = `    <div class="card card-body mb-4">      <h5>Status: ${res.status}</h5>    </div>    <div class="card mt-3">      <div class="card-header">        Headers      </div>      <div class="card-body">        <pre>${JSON.stringify(res.headers, null, 2)}</pre>      </div>    </div>    <div class="card mt-3">      <div class="card-header">        Data      </div>      <div class="card-body">        <pre>${JSON.stringify(res.data, null, 2)}</pre>      </div>    </div>    <div class="card mt-3">      <div class="card-header">        Config      </div>      <div class="card-body">        <pre>${JSON.stringify(res.config, null, 2)}</pre>      </div>    </div>  `;
  }
  document.getElementById('get').addEventListener('click', findAll);
