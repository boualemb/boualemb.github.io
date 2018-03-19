function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
   /* document.getElementById("main").style.marginLeft = "250px";*/
    document.body.style.backgroundColor = "rgba(0.5,0.5,0.5,0.8)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "50px";
    /*document.getElementById("main").style.marginLeft= "0";*/
    document.body.style.backgroundColor = "rgba(0.1,0.1,0.1,1);";
}
function myFunction(x) {
    x.classList.toggle("change");
    if (document.getElementById("mySidenav").style.width==="300px"){
    	document.getElementById("mySidenav").style.width = "40px";
    	document.getElementById("main").style.margin= "00px";
    	document.getElementById("main").style.marginLeft= "40px";/**/

    	document.body.style.backgroundColor = "rgba(0.1,0.1,0.1,1);";
    }else 
      { document.getElementById("mySidenav").style.width = "300px";
   document.getElementById("main").style.margin = "40px"; /**/
    	document.body.style.backgroundColor = "rgba(0.5,0.5,0.5,0.8)";
	} 
}