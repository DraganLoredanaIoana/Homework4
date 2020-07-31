// const apiUrl = "https://movies-app-siit.herokuapp.com";
// const fetchAPI = new FetchApi(apiUrl);

const registerBtn = document.getElementById("registerButton");
const inputUsername2 = document.getElementById("username2");
const inputPassword2 = document.getElementById("password2");
// const inputEmail = document.getElementById("email");

// signUpButton.addEventListener("click",  (event) => {
//     event.preventDefault();
//     window.location.href= "../pages/login.html";

// })

registerBtn.addEventListener("click",  async (event,token) =>{
    event.preventDefault();

    // window.location.href = "home.html";
    

    console.log("merge")

    await fetchAPI.register(inputUsername2.value, inputPassword2.value)

    console.log(inputUsername2.value)
    console.log(inputPassword2.value)
    registerFormValidation()

})


const userError2 = document.getElementById("user_error2");
const passError2 = document.getElementById("password_error2");


function registerFormValidation(){
    if(inputUsername2.value.length < 4 || inputUsername2.value === ""){
        inputUsername2.style.border = "3px solid red";
        userError2.style.display = "flex";
        inputUsername2.focus();
    } else {
        inputUsername2.style.border = "1px solid silver";
        userError2.style.display = "none";

    };
    
    if(inputPassword2.value.length < 4 || inputPassword2.value === "") {
        inputPassword2.style.border = "3px solid red";
        passError2.style.display = "flex";
        inputPassword2.focus();
    }
    else {
        inputPassword2.style.border = "1px solid silver";
        passError2.style.display = "none";
    }
}

// const signOutBtn = document.querySelector(".signOut");

// signOutBtn.addEventListener("click", () => {
//     localStorage.removeItem("accessToken");
//     console.log("token removed");
//     window.location.replace("home.html")
// })

// function signOut(){
//     // if(token !== undefined){
//         Storage.removeItem(accessToken);
//         console.log("token removed")
//     // 
// }