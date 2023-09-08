
function formdata() {
    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let mobile  = document.getElementById('mobileNo').value;
    let Email  = document.getElementById('Email').value;
    let pass = document.getElementById('password').value;

    console.log("firstname",fname );
    console.log('lastname',lname);
    console.log('mobile',mobile);
    console.log('Email',Email);
    console.log('password',pass);
    

    localStorage.setItem("firstname",fname);
    localStorage.setItem('lastname',lname);
    localStorage.setItem('mobile',mobile);
    localStorage.setItem('Email',Email);
    localStorage.setItem('password',pass);

    sessionStorage.setItem("firstname",fname);
    sessionStorage.setItem('lastname',lname);
    sessionStorage.setItem('mobile',mobile);
    sessionStorage.setItem('Email',Email);
    sessionStorage.setItem('password',pass);
    


    getdataforlocalstorage();
    
} 
// formdata();   

function getdataforlocalstorage(params) {
    let localfor_usernmae =localStorage.getItem("firstname");
    let localfor_lastname= localStorage.getItem("lastname");
    let  localfor_mobile = localStorage.getItem("mobile");
    let localfor_Email = localStorage.getItem("Email");
    let localfor_password = localStorage.getItem("password");

    console.log("local data storege", localfor_usernmae, localfor_lastname, localfor_mobile,localfor_Email, localfor_password);
    
    document.getElementById("ShowData").innerHTML=`My name is ${localfor_usernmae} and email is
    ${localfor_email} number is ${localfor_mobile} and password is ${localfor_password}`

}
// formdata()
