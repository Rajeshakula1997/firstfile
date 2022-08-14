   class Location {
	   constructor(){
		   this.city="Bangalore";
		   this.areas="Marathahalli";
	   }
   }
   
    class Myuser extends Location{
		constructor(){
			super();// to all parent constructor
			this.alluser = ["Ganesh", "Alex", "Mahesh", "Rajesh","mahesh","kamlesh"];
		}
		getUser = ()=>{
			var data = "<h1> Available users </h1>";
			this.alluser.map((name, index)=>{
				data = data + "<div class='four'>";
				data = data + "<p>" + name + "</p>";
				data = data + "<p>" + this.city + "</p>";
				data = data + "<p>" + this.areas + "</p>";
				data = data + "<button onclick='obj2.deluser("+index+")'> Delete </button>";
				data = data + "</div>";
			})
			document.getElementById("container").innerHTML=data;
		}
		
		  deluser = (index) => {
			 this.alluser.splice(index,1);
			 this.getUser();
		  }
		
		save=()=>{
			var name = document.getElementById("fname").value;
			this.alluser.unshift(name);
			//this.alluser.push(name);
			
			this.getUser();
			document.getElementById("fname").value="";
		}
	}
	 const obj2= new Myuser();
	 