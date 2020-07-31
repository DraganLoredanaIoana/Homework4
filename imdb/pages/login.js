const apiUrl = "https://movies-app-siit.herokuapp.com";
const fetchAPI = new FetchApi(apiUrl);

const loginButton = document.getElementById("sign-in");
const signUpButton = document.querySelector("#signUpBtn");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");


// signUpButton.addEventListener("click",  (event) => {
//     event.preventDefault();
//     window.location.href= "../pages/login.html";

// })

loginButton.addEventListener("click",  async (event,token) =>{
    event.preventDefault();

    console.log(token)
    ;

    if(loginFormValidation() === true){

   const loginResponse= await fetchAPI.signIn(inputUsername.value, inputPassword.value);
   window.localStorage.setItem("accessToken", `${loginResponse.accessToken}`);

   const accessToken = window.localStorage.getItem("accessToken");
    console.log(inputUsername.value)
    console.log(accessToken)

    // if(window.localStorage.getItem("accessToken") !== undefined){
        if(accessToken !== "undefined"){
         window.location.href = "home.html";
        }
    }
    // if( token === undefined){
    //     const loginFailMsg = document.getElementById("login-fail");
    //     loginFailMsg.style.display = "flex";
    // } else {
    //     loginFailMsg.style.display = "none";
    // }
})




function loginFormValidation(){
    const userError = document.getElementById("user_error");
    const passError = document.getElementById("password_error");   

    if(inputUsername.value.length < 4 || inputUsername.value === ""){
        inputUsername.style.border = "3px solid red";
        userError.style.display = "flex";
        inputUsername.focus();
        return false;
    } else {
        inputUsername.style.border = "1px solid silver";
        userError.style.display = "none";
        return true;
    };
    
    if(inputPassword.value.length < 4 || inputPassword.value === "") {
        inputPassword.style.border = "3px solid red";
        passError.style.display = "flex";
        inputPassword.focus();
        return false;
    }
    else {
        inputPassword.style.border = "1px solid silver";
        passError.style.display = "none";
        return true;
    }

//     if(typeof Storage !== undefined){
//         window.location = "home.html";}
}






// function signOut(){
//     // if(token !== undefined){
//         Storage.removeItem(accessToken);
//         console.log("token removed")
//     // 
// }