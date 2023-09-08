function saveformdata(params){
    let uname =document.getElementById("usernmae").value;
    let mail =document.getElementById("Email").value;
    let Mobile =document.getElementById("Mobile").value;
    let Password =document.getElementById("password").value;

    // console.log("usernmae",uname);
    // console.log("Email",mail);
    // console.log("Mobile",Mobile);
    // console.log("password",Password);


    localStorage.setItem("usernmae",uname);
    localStorage.setItem("Email",mail);
    localStorage.setItem("Mobile",Mobile);
    localStorage.setItem("password",Password);

    sessionStorage.setItem("uname",uname);
    sessionStorage.setItem("mail",mail);
    sessionStorage.setItem("Mobile",Mobile);
    sessionStorage.setItem("password",Password);

    getdataforlocalstorage();
    
} 
// formdata();   

function getdataforlocalstorage(params) {
    let localfor_usernmae =localStorage.getItem("usernmae");
    let localfor_email = localStorage.getItem("Email");
    let  localfor_mobile = localStorage.getItem("Mobile");
    let localfor_password = localStorage.getItem("password");

    console.log("local data storege", localfor_usernmae, localfor_email, localfor_mobile, localfor_password);
    
    document.getElementById("datavalue").innerHTML=`My name is ${localfor_usernmae} and Email is
    ${localfor_email} mobile number is ${localfor_mobile} and password is ${localfor_password}`
}