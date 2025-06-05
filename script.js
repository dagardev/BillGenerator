function getdata(){
    let name=document.getElementById("name").value;
    localStorage.setItem("name",name)
    
    let address=document.getElementById("address").value;
    localStorage.setItem("address",address)

    let contact=document.getElementById("contact").value;
    localStorage.setItem("contact",contact)

    let imei=document.getElementById("imei").value;
    localStorage.setItem("imei",imei)

    let item=document.getElementById("item").value;
    localStorage.setItem("item",item)
    
    let qty=document.getElementById("qty").value;
    localStorage.setItem("qty",qty)

    let price=document.getElementById("price").value;
    localStorage.setItem("price",price)

    let gst=document.getElementById("gst").value;
    localStorage.setItem("gst",gst)
    // console.log(name,address,contact);
    
}


