document.getElementById("printbtn").addEventListener("click", function () {
  window.print();
});

let date=new Date()
// let newDate=`date.getDate()`
let day=date.getDate()
let month=date.getMonth()
let year=date.getFullYear()
if(day < 10){
  day="0"+day
}
if(month < 10){
  month="0"+month
}
var newDate=`${day}/${month}/${year}`
// console.log(newDate);

document.querySelector("#date").innerText=newDate


////getting data from form page 
let name=localStorage.getItem("name")
document.querySelector("#name").innerText=name

let address=localStorage.getItem("address")
document.querySelector("#address").innerText=address

let contact=localStorage.getItem("contact")
document.querySelector("#contact").innerText=contact

let imei=localStorage.getItem("imei")
document.querySelector("#imei").innerText=imei

let item=localStorage.getItem("item")
document.querySelector("#item").innerText=item

let qty=localStorage.getItem("qty")
document.querySelector("#qty").innerText=qty

let gst=localStorage.getItem("gst")
let gstpercent=gst/100
let price=localStorage.getItem("price")
//GST Calculation
let gstamount=price*gstpercent
let priceAfterGST=document.querySelector("#price").innerText=price-gstamount
// console.log(price);

document.querySelector("#gst").innerText=gstamount*qty

let totalprice=qty*priceAfterGST
document.querySelector("#total-price").innerText=totalprice

// let gstamount=totalprice*0.18
// console.log(gstamount);

let grandtotal=totalprice+gstamount*qty
document.querySelector("#grand-total").innerText=grandtotal


