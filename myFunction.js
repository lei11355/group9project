

 function myFunction() {
  var searchTerm = document.querySelector('#searchTerm').value;
  const m= document.getElementById("response-container");
  m.innerHTML="";
 
 console.log(searchTerm);
  fetch(
    'https://api.zippopotam.us/us/'+searchTerm
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      //console.log("data length is " + data[0].length);
     
      for (var prop in data) {
       
        alert(prop + " is " + prop);
          m.innerHTML=m.innerHTML+
          "<h6>" + data[prop] + "</h6>" ;
          
          if (prop=="places"){
            
         
            for (var prop in data[0]) {
         
           m.innerHTML=m.innerHTML+
          "<h6>" + data[prop][0] + "</h6>" ;
          }
    }


  }})}


  function myFunction2() {
    var country = document.querySelector('#country').value;
    const m= document.getElementById("response-container2");
    m.innerHTML="";
   
   console.log(searchTerm);
    fetch(
      'http://universities.hipolabs.com/search?'+country
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        //console.log("data length is " + data[0].length);
       
        for (var prop in data) {
         
          //alert(prop + " is " + prop);
            m.innerHTML=m.innerHTML+
            "<h6>" + data[prop] + "</h6>" ;
            
           
      }
  
  
    })}
