$.getJSON("https://api.imgflip.com/get_memes", (response) => 
{
    for(var m of response.data.memes){
        document.getElementById("memes").innerHTML += 
        
        `
        <div class="container d-flex justify-content-center">
        <div class="card p-2 shadow mt-4" style="width: 18rem;">
            <div class="card-body">
              <p class="card-title text-center">${m.name}</p>
            </div>
                <img src=${m.url} class="card-img-top borde-none rounded-2 shadow" alt="...">    
          </div>
        </div>

        `
    }

    
}
)

