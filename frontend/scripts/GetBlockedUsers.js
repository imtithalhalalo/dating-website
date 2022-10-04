import { User } from "./User.js";
import { AddTo } from "./AddTo.js";
export const GetBlockedUsers = async (base_url) => {
    if(document.getElementById("blocked-row")){
        let blockedHTML = "";    
        const url = base_url + "/getblockedusers";
        const blocked = await axios.get(url, { headers: {'Authorization': `Bearer ${localStorage.getItem(`token`)}`}});
        blocked.data.map(block => {
            blockedHTML += User(block);
        })

        
        if(document.getElementById("blocked-row")){
            document.getElementById("blocked-row").innerHTML = blockedHTML;
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

            AddTo('removeblock', data);
            document.getElementById(e.currentTarget.parentElement.id).classList.add('none');
        })
        
    });
    
}