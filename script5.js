   window.onload = function(){ 
	var ClockMode = "hhmmssMode",
		clockElement = document.getElementById("digital_watch"),  
		clockObject = new Clock();
      	  
  
  
  
    function Clock() {
    		
		function check_date(n) {
			return (n < 10) ? "0" + n : n;
		};
    
		function getYearMonthDay() {
			date = new Date();    				
				return [date.getFullYear(), check_date(date.getMonth()+1), check_date(date.getDate())];
		};
	
		function getHourMinuteSec() {
			date = new Date();
					return [check_date(date.getHours()), check_date(date.getMinutes()), check_date(date.getSeconds())];
		};	
	
		clockElement.addEventListener("click", function() {
			ClockMode = "hhmmssMode"; 
		});
	
		clockElement.addEventListener("contextmenu", function() {
			ClockMode = "yymmddMode"; event.preventDefault();
		});  
  
		function render() {
			if(ClockMode === "hhmmssMode") { 
				clockElement.innerHTML = getHourMinuteSec()[0] + ':' + getHourMinuteSec()[1] + ':' + getHourMinuteSec()[2];
			};
			
			if(ClockMode === "yymmddMode") { 
				clockElement.innerHTML = getYearMonthDay()[0] + ':' + getYearMonthDay()[1] + ':' + getYearMonthDay()[2];
			};
	};
    
	this.init = function() {
		render();
	};
	
	this.destroy = function(destroy_var) {
		this.destroy_var = null; 
	};
	
    clockElement.onmousedown = function(e) {
		clockElement.style.position = 'absolute';
		moveAt(e);
		document.body.appendChild(clockElement);

		clockElement.style.zIndex = 1000; 
  
	function moveAt(e) {
		clockElement.style.left = e.pageX - clockElement.offsetWidth / 2 + 'px';
		clockElement.style.top = e.pageY - clockElement.offsetHeight / 2 + 'px';
    };

	document.onmousemove = function(e) {
		moveAt(e);
	};

	clockElement.onmouseup = function() {
		document.onmousemove = null;
		clockElement.onmouseup = null; 
    };
 };  

  return this; 
  }

 
setInterval(window.onload = function(){if(ClockMode ===  0){clockObject.init()} else {clockObject.destroy(); clockObject.init();}}, 1000); 

} 
