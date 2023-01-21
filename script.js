var entry = document.getElementById("submit");
console.log(entry);
entry.addEventListener("submit", (x) => {
  x.preventDefault();
  displayDetails();
});

var row = 1;

function displayDetails() {
  var FirstName = document.getElementById("FirstName").value;
  var LastName = document.getElementById("LastName").value;
  var Gender = document.getElementById("gender").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var FavoriteFood = document.getElementById("Favoritefood").value;

  // if (
  //   !FirstName ||
  //   !LastName ||
  //   !Gender ||
  //   !address ||
  //   !pincode ||
  //   !state ||
  //   !country ||
  //   !Favoritefood
  // ) {
  //   alert("Please fill the details");
  //   return;
  // }

  var data = [{}];
  data.push({
    FirstName: FirstName,
    LastName: LastName,
    Gender: Gender,
    address: address,
    pincode: pincode,
    state: state,
    country: country,
    FavoriteFood: FavoriteFood,
  });
  var string = "";
  data.map((x) => {
    return (string = `<tr>
    <td>${x.FirstName}
    </td>
    <td>${x.LastName}
    </td>
    <td>${x.Gender}
    </td>
    <td>${x.address}
    </td>
    <td>${x.pincode}
    </td>
    <td>${x.state}
    </td>
    <td>${x.country}
    </td>
    <td>
    <ul style="list-style: none">
    <li>${x.FavoriteFood}</li>
    <li>${x.FavoriteFood}</li>
    <li>${x.FavoriteFood}</li>
    </ul>
    </td>
    </tr>`);
  });
  var display = document.getElementById("display");
  display.innerHTML = string;

  // var newRow = display.insertRow(row);
  // var cell1 = newRow.insertCell(0);
  // var cell2 = newRow.insertCell(0);
  // var cell3 = newRow.insertCell(0);
  // var cell4 = newRow.insertCell(0);
  // var cell5 = newRow.insertCell(0);
  // var cell6 = newRow.insertCell(0);
  // var cell7 = newRow.insertCell(0);
  // var cell8 = newRow.insertCell(0);
  // console.log(display);

  // cell1.innerHTML = FirstName;
  // cell2.innerHTML = LastName;
  // cell3.innerHTML = Gender;
  // cell4.innerHTML = address;
  // cell5.innerHTML = pincode;
  // cell16.innerHTML = state;
  // cell7.innerHTML = country;
  // cell8.innerHTML = Favoritefood;

  // row++;
}
