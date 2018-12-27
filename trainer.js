function menu(button_name,submenu) { //Toggle between menu selections
	submenu=submenu||false
	if(!submenu){
		document.getElementById(buttons[0].className.replace('1/2','')).style.backgroundColor = menu_background_color;
		document.getElementById(buttons[0].className.replace('1/2','')).style.color = menu_color;
	}
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.visibility = 'hidden';
	}
	buttons = document.getElementsByClassName(button_name);
	if(!submenu){
		menu_background_color = window.getComputedStyle(document.getElementById(button_name),null).getPropertyValue('background-color');
		menu_color = window.getComputedStyle(document.getElementById(button_name),null).getPropertyValue('color');
		document.getElementById(buttons[0].className).style.backgroundColor = "#a1a9bc";
		document.getElementById(buttons[0].className).style.color = "black";
	}
	for(var i = 0; i < buttons.length; i++){
		buttons[i].style.visibility = 'visible';
	}
	if(!submenu) toggle_drink(document.getElementById(button_name).className != 'button');
}

var buttons = document.getElementsByClassName('House Spec'); //Initialize menu to House Specials
var menu_background_color = window.getComputedStyle(document.getElementById('House Spec'),null).getPropertyValue('background-color');
var menu_color = window.getComputedStyle(document.getElementById('House Spec'),null).getPropertyValue('color');
menu('House Spec');


function arrow(arrow_id){ //Toggle menu buttons
	if (arrow_id == 1) Buttons = document.getElementsByClassName('button');
	else Buttons = document.getElementsByClassName('button_2');
	for (var i = 0; i < Buttons.length; i++) {
		if (window.getComputedStyle(Buttons[i], null).getPropertyValue('visibility') == 'visible') {
			Buttons[i].style.visibility = 'hidden';
		} else {
			Buttons[i].style.visibility = 'visible';
		}
	}
	if(arrow_id == 2){
		if (window.getComputedStyle(document.getElementsByClassName('margarita')[0], null).getPropertyValue('visibility') == 'visible') {
			document.getElementsByClassName('margarita')[0].style.visibility = 'hidden';
			document.getElementsByClassName('beverage')[0].style.visibility = 'hidden';
		}
		else{
			document.getElementsByClassName('margarita')[0].style.visibility = 'visible';
			document.getElementsByClassName('beverage')[0].style.visibility = 'visible';
		}
	}
}

function toggle_drink(state){ //Toggle drink menu buttons
	console.log(document.getElementsByClassName('Margaritas')[0]);
	if(!state || window.getComputedStyle(document.getElementsByClassName('Margaritas')[0], null).getPropertyValue('visibility') == 'visible'){
		document.getElementsByClassName('drink_menu_3')[0].style.visibility = 'hidden';
		document.getElementsByClassName('drink_menu_3')[1].style.visibility = 'hidden';
	}
	else{
		document.getElementsByClassName('drink_menu_3')[0].style.visibility = 'visible';
		document.getElementsByClassName('drink_menu_3')[1].style.visibility = 'visible';
	}
	var buttons = document.getElementsByClassName('drink_menu');
	for (var i = 0; i < buttons.length; i++) {
		if (state) {
			document.getElementsByClassName('drink_menu')[i].style.visibility = 'hidden';
			document.getElementById('reorder').innerHTML = '';
			document.getElementById('reorder').style.backgroundColor = '#dbc5b8';
		} else {
			document.getElementsByClassName('drink_menu')[i].style.visibility = 'visible';
			document.getElementById('reorder').innerHTML = 'Reorde<br>r';
			document.getElementById('reorder').style.backgroundColor = '#98ade2';
		}
	}
	buttons = document.getElementsByClassName('drink_menu_2');
	for (var i = 0; i < buttons.length; i++) {
		if (!state) {
			document.getElementsByClassName('drink_menu_2')[i].style.visibility = 'hidden';
		} else {
			document.getElementsByClassName('drink_menu_2')[i].style.visibility = 'visible';
		}
	}
	var gin = document.getElementById('Gin').style;
	var spec = document.getElementById('Specials').style;
	if(state){
		gin.position = 'absolute';
		gin.top = '63%';
		spec.position = 'absolute';
		spec.top = '63%';
		document.getElementById('up_1').style.position = 'absolute';
		document.getElementById('down_1').style.position = 'absolute';
		document.getElementById('up_1').style.top = '71%';
		document.getElementById('down_1').style.top = '79%';
		document.getElementById('up_2').style.position = 'absolute';
		document.getElementById('down_2').style.position = 'absolute';
		document.getElementById('up_2').style.top = '71%';
		document.getElementById('down_2').style.top = '79%';
		if(window.getComputedStyle(document.getElementById('Vodka'), null).getPropertyValue('visibility') == 'visible'){	
			gin.visibility = 'visible';
		}
		else{
			gin.visibility = 'hidden';
		}
		if(window.getComputedStyle(document.getElementById('Tacos'), null).getPropertyValue('visibility') == 'visible'){	
			spec.visibility = 'visible';
		}
		else{
			spec.visibility = 'hidden';
		}
	}
	else{
		gin.position = 'static';
		spec.position = 'static';
		document.getElementById('up_1').style.position = 'static';
		document.getElementById('down_1').style.position = 'static';
		document.getElementById('up_2').style.position = 'static';
		document.getElementById('down_2').style.position = 'static';
		if(window.getComputedStyle(document.getElementById('Vodka'), null).getPropertyValue('visibility') == 'visible'){	
			gin.visibility = 'hidden';
		}
		else{
			gin.visibility = 'visible';
		}
		if(window.getComputedStyle(document.getElementById('Tacos'), null).getPropertyValue('visibility') == 'visible'){	
			spec.visibility = 'hidden';
		}
		else{
			spec.visibility = 'visible';
		}
	}
}

var order = []
var total = []
var subtotal = 0;

function add_to_order(ordered_item) { //Add an item to the order screen
	ordered_item = ordered_item.replace(/<br>/g, '');
	var price = ordered_item.substring(ordered_item.lastIndexOf(" ") + 1);
	if (isNaN(price))
		price = '';
	else{
		subtotal = +subtotal + +price;
		document.getElementById("subtotal").innerHTML = subtotal.toFixed(2);
		document.getElementById("tax").innerHTML = (.0825*subtotal).toFixed(2);
		document.getElementById("total").innerHTML = (1.0825*subtotal).toFixed(2);
		ordered_item = ordered_item.replace(price, '');
	}
	order.push(ordered_item);
	total.push(price);
	var order_string = '';
	for (var i = 0; i < order.length; i++) {
		order_string = order_string + order[i] + ' ';
		if (total[i] != '')
			order_string = order_string + '$';
		order_string = order_string + total[i] + '<br>';
	}
	document.getElementById("order_screen").innerHTML = order_string;
	document.getElementById("order_screen").scrollTop = document.getElementById("order_screen").scrollHeight;
}

var random = Math.floor(Math.random() * (9999 - 1)) + 1; 
document.getElementById("table_number").innerHTML = "Chk " + random;

clock();

function clock() {

	var this_date = new Date();
	var month = this_date.getMonth();
	var year = this_date.getFullYear();
	var date = this_date.getDate();
	var hours = this_date.getHours();
	var minutes = this_date.getMinutes();
	var meridiem = 'AM';

	var date_string;
	switch (month) {
	case 0:
		month = 'Jan';
		break;
	case 1:
		month = 'Feb';
		break;
	case 2:
		month = 'Mar';
		break;
	case 3:
		month = 'Apr';
		break;
	case 4:
		month = 'May';
		break;
	case 5:
		month = 'Jun';
		break;
	case 6:
		month = 'Jul';
		break;
	case 7:
		month = 'Aug';
		break;
	case 8:
		month = 'Sep';
		break;
	case 9:
		month = 'Oct';
		break;
	case 10:
		month = 'Nov';
		break;
	case 11:
		month = 'Dec';
		break;
	default:
		month = 'Month';
	}
	if (minutes < 10)
		minutes = '0' + minutes;
	if (hours > 11)
		meridiem = 'PM';
	hours = hours % 12;
	if(hours == 0) hours = 12;
	document.getElementById('date').innerHTML = month + date + '`' + year % 2000 + ' ' + hours + ':' + minutes + meridiem;
}

setInterval(clock, 1000);