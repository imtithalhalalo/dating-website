// Only for showing how I am getting location but it didn't work and I didn't add it to the users table
// but used text instead and sorted by Asc
export const GetLocation = async () => {
    let location;
    if(document.getElementById('location-log')){
        document.getElementById('location-log').addEventListener('click', async ()=>{
            const status = document.getElementById('status');
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
                status.innerText = 'Successfuly added';
            } else { 
                status.innerText = "Geolocation is not supported by this browser.";
            }
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
    
            location = latitude + longitude;
            
        })
        
    }
    return location;
    
}