function saveuserdata() {

// for colour change
   let colorvalue = document.getElementById("color").value;
   document.getElementById("container").style.backgroundColor = colorvalue;

   //for text color change
//    document.getElementById("radiobtn").style.color =;

   //we take id
   let uanme = document.getElementById("username").value;
   let fvalue =  document.getElementById("firstName").value;
   let Lname = document.getElementById("lastName").value;
   let passeord =  document.getElementById("password").value;
   let email = document.getElementById("Email").value;
   let rbtn = document.getElementById("radiobtn").value;

//for checking than use console

// console.log(colorvalue);
//     console.log("usernmae",uanme);
//     console.log("firstName",fvalue);
//     console.log("lastName",Lname);
//     console.log("password",passeord);
//     console.log("Email",email);
//     console.log("radiobtn",rbtn);  


// to store the data in local

    localStorage.setItem("username",uanme);
    localStorage.setItem("firstName",fvalue);
    localStorage.setItem("lastName",Lname);
    localStorage.setItem("password",passeord);
    localStorage.setItem("Email",email);
    localStorage.setItem("radiobtn",rbtn);

    sessionStorage.setItem("username",uanme);
    sessionStorage.setItem("firstName",fvalue);
    sessionStorage.setItem("lastName",Lname);
    sessionStorage.setItem("password",passeord);
    sessionStorage.setItem("Email",email);
    sessionStorage.setItem("radiobtn",rbtn);

    getdataforlocal();
}
// savedata();

function getdataforlocal() {

   let getforLocalUsername = localStorage.getItem("username");
   let getforLocalFname =  localStorage.getItem("firstName");
   let getforLocalLname =localStorage.getItem("lastName");
   let getforLocalPasword= localStorage.getItem("password");
   let getforLocalEmail = localStorage.getItem("Email");
   let getLocalRadiobtn = localStorage.getItem("radiobtn");

//    console.log("Get Local Stroge",getforLocalUsername , getforLocalFname, getforLocalLname, getforLocalPasword, 
//     getforLocalEmail,  getLocalRadiobtn);

    document.getElementById("Datavalue" ).innerHTML=`my username is ${getforLocalUsername} and my name is ${getforLocalFname} ${getforLocalLname} and my
    password is ${getforLocalPasword} and email is ${getforLocalEmail} and gender is ${getLocalRadiobtn}`


    
}