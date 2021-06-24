/*fetch("http://jsonplaceholder.typicode.com/posts")
  .then(function (res) {
    //res.json() - collect data
    return res.json();
  })
  .then(function (res) {
    console.log("res:", res);
  })
  .catch(function (err) {
    console.log("we have an error", err);
  })
  .finally(function () {
    console.log("my promise is settled");
  });

//async await version of above code

//settled promise vs resolved promise

async function makeRequest() {
  //error handling in async await

  try {
    let response = await fetch("http://jsonplaceholder.typicode.com/posts");

      var data = await response.json();
      console.log("data:", data);

  } catch (e) {
    console.log("e:", e);
  }
  finally {
      
      console.log('completed')
   } 

}

makeRequest();

*/


// let products_data = [];

// async function getData() {
    

//      try {
//     let response = await fetch('https://fakestoreapi.com/products')


//       var data = await response.json();
//          console.log("data:", data);
         
//          appendProducts

//   } catch (e) {
//     console.log("e:", e);
//   }

// }

// getData()


// function appendProducts(d) {
    
//     d.foreach(function (el) {
//         let div = document.createElement('div')
//         let img = document.createElement('img')

//         img.src = el.image

//         let title = document.createElement('p')
//         title.innerHTML
// })
// }



async function getweatherData() {
    
    res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=26ee42017b28288b5090301173125294")
    data = await res.json()
    console.log('data:', data)
}
getweatherData()
