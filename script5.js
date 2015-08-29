  window.onload = function(){ 
  var flag = 1,
      clock2 = document.getElementById("digital_watch"),  
      clock1 = new Clock();  
  
  
  
  function Clock() {
         
	this.init = function() 	
	{var date = new Date(),
		 year = date.getFullYear(),
		 month = check_date(date.getMonth()+1),
		 day = check_date(date.getDate()),
	
		hours = check_date(date.getHours()),
		minutes = check_date(date.getMinutes()),
		seconds = check_date(date.getSeconds());
	
    function check_date(n){return (n < 10) ? "0" + n : n}
    
		clock2.addEventListener("click", function(){flag = 1; });
		clock2.addEventListener("contextmenu", function(){flag = 2;  event.preventDefault();});  
  
	
	if(flag == 1){clock2.innerHTML = hours + ":" + minutes + ":" + seconds;}
	if(flag == 2){clock2.innerHTML = year + ":" + month + ":" + day;}
	
    }
	
	this.destroy = function(destroy_var)
		{
			this.destroy_var = null; 
		}
	
   return this; 
  }

 
setInterval(window.onload = function(){if(flag ==  0){clock1.init()} else {clock1.destroy(clock1); clock1.init();}}, 1000); 
  

clock2.onmousedown = function(e) {
  clock2.style.position = 'absolute';
  moveAt(e);
  document.body.appendChild(clock2);

  clock2.style.zIndex = 1000; 
  
  function moveAt(e) {
    clock2.style.left = e.pageX - clock2.offsetWidth / 2 + 'px';
    clock2.style.top = e.pageY - clock2.offsetHeight / 2 + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  }

  clock2.onmouseup = function() {
    document.onmousemove = null;
    clock2.onmouseup = null; 
    }
 }

}