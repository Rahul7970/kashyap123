
const pincodeDataDiv = document.getElementById('pincode-data');
const pincodeData = {
  "Message": "Number of pincode(s) found:14",
  "Status": "Success",
  "PostOffice": [
    {
      "Name": "Bhagwan Bazar",
    //   "Description": null,
    //   "BranchType": "Sub Post Office",
    //   "DeliveryStatus": "Non-Delivery",
    //   "Circle": "Bihar",
      "District": "Saran",
      "Division": "Saran",
    //   "Region": "Muzaffarpur",
    //   "Block": "Chapra",
      "State": "Bihar",
      "Country": "India",
      "Pincode": "841301"
    },
   
  ]
};

let html = '';
pincodeData.PostOffice.forEach(postOffice => {
  html += `
    <div>
      <p>Name: ${postOffice.Name}</p>
      <p>District: ${postOffice.District}</p>
      <p>Division: ${postOffice.Division}</p>
      <p>State: ${postOffice.State}</p>
      <p>Country: ${postOffice.Country}</p>
      <p>Pincode: ${postOffice.Pincode}</p>
    </div>
  `;
});

pincodeDataDiv.innerHTML = html;

