/*
This is for the formatting of time from raw seconds to hh:mm:ss
*/

function formattingTime(sec_num){
		var hours   = Math.floor(sec_num / 3600);
	    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	    var seconds = sec_num - (hours * 3600) - (minutes * 60);

	    if (hours   < 10) {hours   = "0"+hours;}
	    if (minutes < 10) {minutes = "0"+minutes;}
	    if (seconds < 10) {seconds = "0"+seconds;}

	    if (hours == "00") {
	    	//just in case there is no hours
	    	return minutes+":"+seconds;
	    }
		return hours+":"+minutes+":"+seconds;
	}

export default formattingTime;