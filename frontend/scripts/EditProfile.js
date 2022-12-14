export const EditProfile =  async (base_url) => {

const profile_image = document.getElementById("file-input");
if(document.getElementById("image-upload")){

  // Add label listner
  document.getElementById("image-upload").addEventListener("click" , async ()=>{
    profile_image.click();
  })

  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = res => {
        resolve(res.target.result);
      };
      reader.onerror = err => reject(err);

      reader.readAsDataURL(file);
    });
  }

  const edit = async ( e ) => {
  e.preventDefault();
    // Retrieving data
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const bio = document.getElementById("bio").value;
    // Encrypt Image
    let encryptedImage = await readFile(profile_image.files[0]);   
    encryptedImage = encryptedImage.split(",")[1];

    const imageExtension = profile_image.files[0].name.split(".")[profile_image.files[0].name.split(".").length -1];

    
    console.log(name,age,bio,encryptedImage,imageExtension);
    const url = base_url + "/editprofile";
    // Send data to the backend
    const data ={
        name: name,
        age: age,
        bio: bio,
        encryptedImage: encryptedImage,
        imageExtension: imageExtension
    }
    const edit_profile = await axios.post(url, data, { headers: {'Authorization': `Bearer ${localStorage.getItem(`token`)}`}});
    console.log(edit_profile.data);
    if(edit_profile.data.status == 'success'){
      document.getElementById('inform-status').innerText = "Profile Edited Successfully";
      document.getElementById('pop-inform').classList.add('popup-visible'); 
        document.getElementById('close-btn').addEventListener('click', (e) => {
          e.preventDefault();
          document.getElementById('pop-inform').classList.remove('popup-visible');
        })

        document.getElementById('ok-btn').addEventListener('click', (e) => {
          e.preventDefault();
          document.getElementById('pop-inform').classList.remove('popup-visible');
        })
      
    }
    
    
  }

  

  document.getElementById("edit_profile").addEventListener("click", edit);

}

    
}
