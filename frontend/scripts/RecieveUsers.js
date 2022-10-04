import { ReceiveMessages } from './ReceiveMessages.js'

export const ReceiveUsers = async (base_url) => {
    if (document.getElementById('receiver')) {
        const url = base_url + '/allusers';
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem(`token`)}`
            }
        });

        
        let users = response.data;
        users.map(user => {
            let receiver = document.createElement('li');
            receiver.classList.add('profile');
            let name = document.createElement('span');
            name.append(user.name);
            receiver.appendChild(name);
            receiver.setAttribute("id", user.id);

            document.getElementById('receiver').appendChild(receiver);
            receiver.addEventListener("click", () => {
                // debugger
                document.getElementById("user-id").setAttribute("user-id", receiver.id);
                console.log(document.getElementById("user-id"));
                ReceiveMessages(base_url);
            })
        })
    }

}