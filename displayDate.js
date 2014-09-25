var today = new Date();
var day = today.getDay();
var month = today.getMonth();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
alert(daysOfWeek[day] + ", " + monthsOfYear[month] + " " + today.getDate() + ", " + today.getFullYear());
