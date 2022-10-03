import { User } from "./User.js";
import { AddTo } from "./AddTo.js";
export const GetFavorites = async (base_url) => {
    if(document.getElementById("favorites-row")){
        let favoritesHTML = "";
        
        const id = localStorage.getItem("id");
        
        const url = base_url + "/getfavorites/" +id;
        debugger
        const favorites = await axios.get(url);
        favorites.data.map(favorite => {
            favoritesHTML += User(favorite);
        })

        
        if(document.getElementById("favorites-row")){
            document.getElementById("favorites-row").innerHTML = favoritesHTML;
        }
    }

    const favorite_section = Array.prototype.slice.call(document.getElementsByClassName("fa-heart-o"));
        favorite_section.forEach(favorite => {
            favorite.addEventListener("click", (e) => {
                let data = {
                    user_id: localStorage.getItem("id"),
                    favored_id: e.currentTarget.parentElement.id
                };
                
                AddTo('favorite', data);
            })
        });

    const block_section = Array.prototype.slice.call(document.getElementsByClassName("fa-ban"));
    block_section.forEach(block => {
        block.addEventListener("click", (e) => {
            let data = {
                user_id: localStorage.getItem("id"),
                blocked_id: e.currentTarget.parentElement.id
            };

            AddTo('block', data);
            document.getElementById(localStorage.getItem("id")).classList.add('none');
        })
        
    });
    
}