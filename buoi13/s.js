// $(document).ready(function () {
//     console.log("ready");

//     $("#btn").click(()=>{
//         console.log("clicked");
        
//     });
    
// });
//  function toggleText() {
//       let text = document.getElementById("myText");
      
//       if (text.style.display === "none") {
//         text.style.display = "block";  
//       } else {
//         text.style.display = "none";   
//       }
//     }


 fetch("https://jsonplaceholder.typicode.com/users")
      .then(function(response) {
        return response.json()
      })
      .then(function(users) {
        let table = document.getElementById("userTable")
        users.forEach(function(user) {
          let row = document.createElement("tr")
          row.innerHTML = "<td>" + user.id + "</td>" +
                          "<td>" + user.name + "</td>" +
                          "<td>" + user.email + "</td>"
          table.appendChild(row)
        })
      })
      .catch(function(error) {
        console.log("Lỗi: ", error)
      })

      