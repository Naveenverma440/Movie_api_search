async function getapi() {
    
    let mov = document.getElementById("name").value;
     try {
    let response = await fetch(`http://www.omdbapi.com/?${mov}&apikey=57ce41f3`)


      let data = await response.json();
         console.log("data:", data);
         
        

  } catch (e) {
    console.log("e:", e);
  }

}

getapi()