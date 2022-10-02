import { EditProfile } from "./EditProfile.js";
import { SignUp } from "./SignUp.js";
import { Login } from "./Login.js";


const base_url = "http://127.0.0.1:8000/api/v0.1";


EditProfile(base_url);
SignUp(base_url);
Login(base_url);