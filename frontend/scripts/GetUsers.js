import { User } from "./User.js";
import { AddTo } from "./AddTo.js";
export const GetUsers = async (base_url) => {
    if(document.getElementById("users-row")){
        let usersHTML = "";
        const url = base_url + "/allusers";
        
        const token = localStorage.getItem('token');
        console.log(token)
        const users = await axios.get(url, { headers: {'Authorization': `Bearer ${localStorage.getItem(`token`)}`}});
        
        users.data.map(user => {
            usersHTML += User(user);
        })
        
        if(document.getElementById("users-row")){
            document.getElementById("users-row").innerHTML = usersHTML;
        }
    }

    const favorite_section = Array.prototype.slice.call(document.getElementsByClassName("fa-heart-o"));
        favorite_section.forEach(favorite => {
            favorite.addEventListener("click", (e) => {
                let data = {
                    favored_id: e.currentTarget.parentElement.id
                };
                
                AddTo('favorite', data);
            })
        });

    const block_section = Array.prototype.slice.call(document.getElementsByClassName("fa-ban"));
    block_section.forEach(block => {
        block.addEventListener("click", (e) => {
            let data = {
                blocked_id: e.currentTarget.parentElement.id
            };
            
            AddTo('block', data);
            document.getElementById(e.currentTarget.parentElement.id).classList.add('none');
        })
        
    });


    const chat_section = Array.prototype.slice.call(document.getElementsByClassName("fa-comment-o"));
    chat_section.forEach(receiver => {
        receiver.addEventListener("click", (e) => {
            let data = {
                receiver_id: e.currentTarget.parentElement.id
            };
            
            AddTo('chat', data);
        })
        
    });
    
}