export const ReceiveMessages = async (base_url) => {
    if(document.getElementById("user-id")){
        const url = base_url + "/receivemessages";
        const data = {
            receiver_id:document.getElementById("user-id").getAttribute("user-id")
        }
        const messages = await axios.post(url,data, { headers: {
            'Authorization': `Bearer ${localStorage.getItem(`token`)}`
        }
        });
        const chatBoard = document.getElementById("chat-box");
        chatBoard.innerHTML = "";

        messages.data.messages.map( msg =>{
            console.log(msg.user_id);
            const receiver_msg = document.createElement("li");
            receiver_msg.classList.add("reciever");
            receiver_msg.innerHTML = msg.message;
            chatBoard.append(receiver_msg);
        })
    }
    

}
