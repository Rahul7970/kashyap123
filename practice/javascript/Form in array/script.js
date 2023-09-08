
function handleSubmit(event) {
    event.preventDefault();


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

  
    const formData = {
        name,
        email,
        phone
    };

  
    let dataArray = localStorage.getItem("formDataArray") ?
     localStorage.getItem("formDataArray").split(',') : [];

  
    dataArray.push(JSON.stringify(formData));


    localStorage.setItem("formDataArray", dataArray.toString());

    
    document.getElementById("dataForm").reset();

  
    document.getElementById("output").innerHTML = "Data saved successfully!";
}


document.getElementById("dataForm").addEventListener("submit", handleSubmit);