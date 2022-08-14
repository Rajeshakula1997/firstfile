
function one(){
var data = "<h2> Welcome to Companys </h2>";
  fetch("http://localhost:3000/company")
.then(response =>response.json())
.then(kakaArray => {
  kakaArray.map((info,index) =>{
    data = data + "<p class='self'>" + info.id + "<br/>" + info.name +"</p>";
  })
  document.getElementById("container").innerHTML = data;
})
}

function two(){
  var data = "<h2> Products Details </h2>";
  fetch("http://localhost:3000/product")
  .then(response => response.json())
  .then(kakaArray =>{
    kakaArray.map((info,index)=>{
      data = data +"<p class='self'>"+ info.id + "<br/>" + info.pname +"</p>";
    })
    document.getElementById("container").innerHTML = data;
  })
  }

  function three(){
    var data = "<h2> Customer Details </h2>";
    fetch("http://localhost:3000/customer")
    .then(response => response.json())
    .then(kakaArray =>{
      kakaArray.map((info,index)=>{
        data = data +"<p class='self'>"+ info.id + "<br/>" + info.name + "<br/>" + info.age + "<br/>" + info.edi + "<br/>" + info.gender+ "</p>";
      })
      document.getElementById("container").innerHTML = data;
    })
    }

    function four(){
      var data = "<h2> inverstor Details </h2>";
      fetch("http://localhost:3000/inverstor")
      .then(response => response.json())
      .then(kakaArray =>{
        kakaArray.map((info,index)=>{
          data = data +"<p class='self'>"+ info.id + "<br/>" + info.name + "<br/>" + info.number + "</p>";
        })
        document.getElementById("container").innerHTML = data;
      })
      }