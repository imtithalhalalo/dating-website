
export const SignUp = async (base_url) => {
   
    if (document.getElementById("signup")) {
        document.getElementById("signup").addEventListener('click', async (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const user_gender = document.querySelectorAll('input[name="user_gender"]');
            const interested_gender = document.querySelectorAll('input[name="interested_gender"]');
            const user_location = document.getElementById('location').value;
            
            let usergender;
            const getGender = () => {
                for (let i = 0; i < user_gender.length; i++) {
                    if (user_gender[i].checked) {
                        usergender = user_gender[i].value;
                    }
                }
            }

            let interestedgender;
            const getInterestedGender = () => {
                for (let i = 0; i < interested_gender.length; i++) {
                    if (interested_gender[i].checked) {
                        interestedgender = interested_gender[i].value;
                    }
                }
            }

            getGender();
            getInterestedGender();
            localStorage.setItem("interested_in", interestedgender);

                const url = base_url + "/signup";
                const body = {
                    name : name,
                    email: email,
                    password: password,
                    gender: usergender,
                    location: user_location,
                };

                await axios.post(url, body).then(response=>{
                    if(response.data.message === "User successfully signed up!"){
                        console.log(response.data.user);

                        window.location = "login.html"
                    }
                });
                const login_url = "./login.html";
                window.location = login_url;                
        })
    }
    
}