const state = document.getElementById("state");
document.getElementById('add_location').addEventListener('click', function getLocation () {

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
    state.innerText = "Geolocation is not supported by this browser.";
    }
    
    function showPosition(position) {
      state.innerText = "Added Successfully";
      const latitude =  position.coords.latitude
      const longitude = position.coords.longitude;
      console.log(latitude);
    }
});
