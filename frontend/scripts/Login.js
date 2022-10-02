export const Login = async (base_url) => {
   
    if (document.getElementById("login-btn")) {
        document.getElementById("login-btn").addEventListener('click', async (e) => {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const url = base_url + "/login";
            const data ={
                email: email,
                password: password
            }

            await axios.post(url, data).then(response=>{
                if(response.data.message === "User successfully logged In!"){
                    console.log(response.data.token.original.access_token);
                    localStorage.setItem("token", response.data.token.original.access_token);
                    window.location = "index.html"
                }
            });
            // console.log(user.data)
        });
    }
}