export const Logout = async () => {
    if (document.getElementById("logout-btn")) {
        document.getElementById("logout-btn").addEventListener('click', async (e) => {
            e.preventDefault();
            localStorage.removeItem("token");
            window.location = "./login.html";
        });
    }
}