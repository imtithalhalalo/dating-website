export const AddTo = async (type, data) => {

    if(type == 'favorite'){
        const url = "http://127.0.0.1:8000/api/v0.1/addfavorite";
        const response = await axios.post(url, data, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
        console.log(response);
        alert(response.data.message);
    }

    if(type == 'block'){
        const url = "http://127.0.0.1:8000/api/v0.1/addblocked";
        const response = await axios.post(url, data, { headers: {'Authorization': `token ${localStorage.getItem(`token`)}`}});
        console.log(response);
        alert(response.data.message);
    }
}