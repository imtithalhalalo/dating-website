const base_url = "http://127.0.0.1:8000/api/v0.1";
export const AddTo = async (type, data) => {

    if(type == 'favorite'){
        const url = "http://127.0.0.1:8000/api/v0.1/addfavorite";
        const response = await axios.post(url, data, { headers: {'Authorization': `Bearer ${localStorage.getItem(`token`)}`}});
        console.log(response);
        document.getElementById('inform-status').innerText = "Added To Favorite";
        document.getElementById('pop-inform').classList.add('popup-visible'); 
        document.getElementById('close-btn').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('pop-inform').classList.remove('popup-visible');
        })

        document.getElementById('ok-btn').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('pop-inform').classList.remove('popup-visible');
        })
    }

    if(type == 'block'){
        const url = "http://127.0.0.1:8000/api/v0.1/addblocked";
        const response = await axios.post(url, data, { headers: {'Authorization': `Bearer ${localStorage.getItem(`token`)}`}});
        console.log(response);
        alert(response.data.message);
    }

    if(type == 'favoriteremove'){
        const url = "http://127.0.0.1:8000/api/v0.1/removefavorite";
        const response = await axios.post(url, data, { headers: {'Authorization': `Bearer ${localStorage.getItem(`token`)}`}});
        console.log(response);
        document.getElementById('inform-status').innerText = response.data.message;
        document.getElementById('pop-inform').classList.add('popup-visible'); 
        document.getElementById('close-btn').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('pop-inform').classList.remove('popup-visible');
        })

        document.getElementById('ok-btn').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('pop-inform').classList.remove('popup-visible');
        })
    }

    if(type == 'removeblock'){
        const url = "http://127.0.0.1:8000/api/v0.1/removeblock";
        const response = await axios.post(url, data, { headers: {'Authorization': `Bearer ${localStorage.getItem(`token`)}`}});
        console.log(response);
        alert(response.data.message);
    }
}