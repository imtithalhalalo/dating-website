export const SendMessage = async (base_url) => {
    if (document.getElementById('sendmsg'))
        document.getElementById('sendmsg').addEventListener('click', async () => {
            const message = document.getElementById('message-text').value;
            const url = base_url + '/sendmessage';

            const data ={
                message,
                receiver_id: document.getElementById("user-id").getAttribute("user-id")
            };
            await axios.post(url, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem(`token`)}` } });
            const user_message = document.createElement("li");
            user_message.classList.add("sender");
            user_message.innerHTML = message;
            document.getElementById("chat-box").append(user_message);
            
        })
}
