import { User } from "./User.js";
import { AddTo } from "./AddTo.js";
export const GetFavorites = async (base_url) => {
    if(document.getElementById("favorites-row")){
        let favoritesHTML = "";    
        const url = base_url + "/getfavorites";
        const favorites = await axios.get(url, { headers: {'Authorization': `Bearer ${localStorage.getItem(`token`)}`}});
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
            document.getElementById(localStorage.getItem("id")).classList.add('none');
        })
        
    });
    
}