Date Object

var today new Date(); //current date and time

today.getMonth(); // 0-11

comparing dates

var date1 = new Date(2000,0,1);
var date2 = new Date(2000,0,1);

if( date1 == date2 ) { // false ( because date is obj n two obj are not same)
	
}


if( date1.getTime() == date2.getTime() ) { 
	// compare two date
}
