

function myFunction() {
  var searchTerm = document.querySelector('#searchTerm').value;
  const m = document.getElementById("response-container");
  m.innerHTML = "";

  console.log(searchTerm);
  fetch(
    'https://api.zippopotam.us/us/' + searchTerm
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // {
      //   post code: "11355",
      //   country: "United States",
      //   country abbreviation: "US",
      //   places: [
      //   {
      //   place name: "Flushing",
      //   longitude: "-73.8226",
      //   state: "New York",
      //   state abbreviation: "NY",
      //   latitude: "40.7536",
      //   }
      //   ],
      //   }
      //console.log("data length is " + data[0].length);

      // for (let i = 0; i < data.places.length; i++) {
      //   for (const key in data[places]) {

      //   }
      // }
      for (var prop in data) {

        alert(prop + " is " + prop);
        m.innerHTML = m.innerHTML +
          "<h6>" + prop + "</h6>";

        if (prop == "places") {

          for (var key in data[prop][0]) {
              
            m.innerHTML = m.innerHTML +
              "<h6>" + data[prop][0][key] + "</h6>";
          }
        }
      }
    })
}


function myFunction2() {
  var country = document.querySelector('#country').value;
  const m = document.getElementById("response-container2");
  m.innerHTML = "";

  console.log(searchTerm);
  fetch(
    'http://universities.hipolabs.com/search?' + country
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //console.log("data length is " + data[0].length);
      //for (let i = 0; i < data.length; i++) {
        for (let i = 0; i < 5; i++) {
        m.innerHTML += `<h6>${data[i].name}</h6>`;
        m.innerHTML += `<h6>${data[i].web_pages[0]}</h6>`;
      }
      // for (var prop in data) {

      //   //alert(prop + " is " + prop);
      //   m.innerHTML = m.innerHTML +
      //     "<h6>" + data[prop] + "</h6>";


      // }


    })
}
