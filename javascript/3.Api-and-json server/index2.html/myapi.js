

function gethome(){
    var data="<h1> Welcome home </h1>";
    fetch("data.json")
    .then(Response =>Response.json())
    .then(cityArray =>{
    cityArray.map((cityname, index)=>{
      data = data + "<p class='four'>" + cityname +"</p>";
    })
    document.getElementById("container").innerHTML=data;
    })

  
}
function getuser(){

    var data = "<h2> User List </h2>";
    fetch("https://jsonplaceholder.typicode.com/users")
  .then(response =>response.json())
  .then(userArray => {
    userArray.map((userinfo,index) =>{
      data= data + "<p class='four'>" +userinfo.name + "<br/>" + userinfo.email +"</p>";
    })
    document.getElementById("container").innerHTML=data;


  })

}

function getcomment(){

  var data = "<h2> Comment List </h2>";
  fetch("https://jsonplaceholder.typicode.com/comments")
.then(response =>response.json())
.then(userArray => {
  userArray.map((userinfo,index) =>{
    data= data + "<p class='four'>" +userinfo.name +  "<br/>" + userinfo.email +"</p>";
  })
  document.getElementById("container").innerHTML=data;


})

}

function getcar(){

  var data = "<h2> Car List from Server </h2>";
  fetch("https://firstenquiry.com/api/car.php")
  .then(carresponse => carresponse.json())
  .then(carArray=>{
    carArray.map((car, index1) =>{
      var imgpath = "https://firstenquiry.com/api/img/"+car.image;
   
    data = data + "<div class = 'four'>";
    data = data + "<h4>" + car.model + "</h4>";
    data = data + "<img src='" +imgpath+ "' height = '120' width = '100%'/>";
    data = data + "<p> Rs." + car.price + "</p>";
    data = data + "<p><b> Service History"+ car.serviceHistory.length + "</b> </p>";
      car.serviceHistory.map((service, index2)=>{
        data = data + "<p> Data : " + service.serviceDate + ", cost : " + service.serviceCost + "</p>";
      })

    data = data + "</div>";
 // alert(carArray.length);
  })
   data = data + "<p id='clearblock'></p>";
   document.getElementById("container").innerHTML = data;
})
}

function getbook(){
  var data ="<h2> Book List </h2>";
  fetch("http://localhost:1234/booklist")
  .then(response => response.json())
  .then(bookArray =>{
    bookArray.map((info, index)=>{
      data = data + "<div class='four'>";
      data = data + "<p>" + info.id + "</p>";
      data = data + "<p>" + info.name + "</p>";
      data = data + "<p>" + info.price +"</p>";
      data = data +"<p>"  + info.qty + "</p>";
      data = data + "<img src='"+ info.pic +"' height='100' width='100%' alt='none'/>";
      data = data + "</div>";
            })
            document.getElementById("container").innerHTML=data;
  })
}

function userlist2(){

  var data = "<h2> User List2 </h2>";
  fetch("http://localhost:3000/userlist2")
.then(response =>response.json())
.then(userArray => {
  userArray.map((userinfo,index) =>{
    data= data + "<div class='four'>";
    data = data +"<p>" +userinfo.id + "</p>";
    data = data +"<p>" + userinfo.mobile + "</p>";
    data = data +"<p>" + userinfo.fullname +"</p>";
    data = data + "</div>";
  })
  document.getElementById("container").innerHTML=data;


})

}

