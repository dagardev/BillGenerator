function login(){
    // Get values from input fields
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    
    if (username === "yogesh" && password === "829112") {
        alert("Login successful");
        // display the form and hide the login form
        document.getElementById("login-fieldset").style.display = "block";
        document.getElementById("header").style.display = "none";
    } else {
        alert("Invalid username or password");
    }
}


function getdata(){
    // Get values from input fields
    let name=document.getElementById("name").value;
    let address=document.getElementById("address").value;
    let contact=document.getElementById("contact").value;
    let imei=document.getElementById("imei").value;
    let item=document.getElementById("item").value;
    let qty=document.getElementById("qty").value;
    let price=document.getElementById("price").value;
    let gst=document.getElementById("gst").value;
    
    if (!name || !address || !contact || !imei || !item || !qty || !price || !gst) {
                alert("Please fill all fields");
                return false;
            }
    else{
        alert("Bill generated successfully");
        // Redirect to bill.html
        // window.location.href = "bill.html";
    }
    console.log("getdata function called");
    //Store values in localStorage
    // localStorage.clear(); // Uncomment this line if you want to clear previous data
    localStorage.setItem("name",name)
    localStorage.setItem("address",address)
    localStorage.setItem("contact",contact)
    localStorage.setItem("imei",imei)
    localStorage.setItem("item",item)    
    localStorage.setItem("qty",qty)
    localStorage.setItem("price",price)
    localStorage.setItem("gst",gst)
}


