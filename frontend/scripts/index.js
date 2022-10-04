import { EditProfile } from "./EditProfile.js";
import { SignUp } from "./SignUp.js";
import { Login } from "./Login.js";
import { Logout } from "./Logout.js";
import { GetUsers } from "./GetUsers.js";
import { GetFavorites } from "./GetFavorites.js";
import { GetBlockedUsers } from "./GetBlockedusers.js";
import { ReceiveUsers } from "./RecieveUsers.js";
import { ReceiveMessages } from "./ReceiveMessages.js";
import { SendMessage } from "./SendMessage.js";
const base_url = "http://127.0.0.1:8000/api/v0.1";


EditProfile(base_url);
SignUp(base_url);
Login(base_url);
Logout();
SendMessage(base_url);
GetUsers(base_url);
GetFavorites(base_url);
ReceiveUsers(base_url);
ReceiveMessages(base_url);
GetBlockedUsers(base_url);
