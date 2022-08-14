function getfile(filename){
     loading();
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("ajaxdata").innerHTML = this.responseText;
        }
      };
      xmlhttp.open("GET" , filename);
      xmlhttp.send();
}

function loading(){
      document.getElementById("ajaxdata").innerHTML="<p class='text-center'> Wait Page Loading..... </p>";
}