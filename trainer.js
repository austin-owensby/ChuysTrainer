var count = 0;
var previous;
function menu(button_name,submenu,special) { //Toggle between menu selections
	submenu=submenu||false;
	special=special||false;
	if(special && (button_name == 'House Spec' || button_name == 'Burritos' || button_name == 'Enchiladas')){
		previous = button_name;
		if(submenu)button_name = 'SAUCES';
		else button_name = '1/2SAUCES';
		submenu = true;
	}
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
	if(!submenu && (document.getElementById(button_name).className != 'button_3')) toggle_drink(document.getElementById(button_name).className != 'button');
	if(special) clear_menu(true);
	if(button_name == 'COMBO TACOS'){
		count++;
		if(count == 3){
			count = 0;
			menu('Tacos',true);
			clear_menu(false);
		}
		if(count == 5){
			count = 0;
			menu('Soups Salads',true);
			clear_menu(false);
		}
	}
	if(button_name == 'COMBO ENCH' && previous == 'COMBO ENCH') clear_menu(true);
	if(button_name == 'COMBO ENCH'){
		count++;
		if(count == 3 || count == 8){
			count = 0;
			menu('Enchiladas',true);
			clear_menu(false);
		}
		if(count == 6){
			count = 0;
			menu('Combos',true);
			clear_menu(false);
		}
		if(count == 10){
			count = 0;
			menu('A La Carte',true);
			clear_menu(false);
			arrow(1);
		}
		if(count == 12){
			count = 0;
			menu('Soups Salads',true);
			clear_menu(false);
		}
	}
	if(button_name == 'COMBO RELLENO' && previous == 'COMBO RELLENO') clear_menu(true);
	if(button_name == 'COMBO RELLENO'){
		count++;
		if(count == 3){
			count = 0;
			menu('House Spec',true);
			clear_menu(false);
		}
		if(count == 5){
			count = 0;
			menu('A La Carte',true);
			clear_menu(false);
			arrow(1)
		}
		if(count == 7){
			count = 0;
			menu('Soups Salads',true);
			clear_menu(false);
		}
	}
	if(previous == 'Specials' && !special && submenu) arrow(1);
	if(previous == 'A La Carte' && !special && submenu) arrow(1);
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
	if(!state || window.getComputedStyle(document.getElementsByClassName('Margaritas')[0], null).getPropertyValue('visibility') == 'visible' || window.getComputedStyle(document.getElementsByClassName('1/2Margaritas')[0], null).getPropertyValue('visibility') == 'visible'){
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
			document.getElementById('reorder').style.visibility = 'hidden';
		} else {
			document.getElementsByClassName('drink_menu')[i].style.visibility = 'visible';
			document.getElementById('reorder').style.visibility = 'visible';
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
			arrow(1);
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
			arrow(2);
		}
		if(window.getComputedStyle(document.getElementById('Tacos'), null).getPropertyValue('visibility') == 'visible'){	
			spec.visibility = 'hidden';
		}
		else{
			spec.visibility = 'visible';
		}
	}
}

var drink_sub_menu = false;

function clear_menu(state){
	if(state){
		document.getElementsByClassName('margarita')[0].style.visibility = 'hidden';
		document.getElementsByClassName('beverage')[0].style.visibility = 'hidden';
		document.getElementById('reorder').style.visibility = 'hidden';
		var buttons = document.getElementsByClassName('drink_menu');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		}
		buttons = document.getElementsByClassName('drink_menu_2');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		}
		buttons = document.getElementsByClassName('button');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		}
		buttons = document.getElementsByClassName('button_2');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		}
		buttons = document.getElementsByClassName('arrow_button');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		}
		if(drink_sub_menu){
			buttons = document.getElementsByClassName('drink_sub_menu');
			for (var i = 0; i < buttons.length; i++) {
				buttons[i].style.visibility = 'visible';
			}
		}
		else{
			buttons = document.getElementsByClassName('sub_menu');
			for (var i = 0; i < buttons.length; i++) {
				buttons[i].style.visibility = 'visible';
			}
		}
	} else{
		document.getElementsByClassName('margarita')[0].style.visibility = 'visible';
		document.getElementsByClassName('beverage')[0].style.visibility = 'visible';
		document.getElementById('reorder').style.visibility = 'visible';
		var buttons = document.getElementsByClassName('drink_menu');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'visible';
		}
		buttons = document.getElementsByClassName('button');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'visible';
		}
		buttons = document.getElementsByClassName('button_2');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'visible';
		}
		buttons = document.getElementsByClassName('arrow_button');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'visible';
		}
		Buttons = document.getElementsByClassName('btn-subgroup');
		buttons = Buttons[0].getElementsByClassName('button');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		}
		buttons = Buttons[1].getElementsByClassName('button_2');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		}
		buttons = document.getElementsByClassName('sub_menu');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		}
		buttons = document.getElementsByClassName('drink_sub_menu');
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
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

function remove_last(){
	order.pop(order.length - 1);
	var order_string = '';
	for (var i = 0; i < order.length; i++) {
		order_string = order_string + order[i] + ' ';
		if (total[i] != '')
			order_string = order_string + '$';
		order_string = order_string + total[i] + '<br>';
	}
	document.getElementById("order_screen").innerHTML = order_string;
}

function modify(state){
	if(state){
		clear_menu(true);
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		}
		Buttons = document.getElementsByClassName('sub_menu');
		for (var i = 0; i < Buttons.length; i++) {
			Buttons[i].style.visibility = 'hidden';
		}
		Buttons = document.getElementsByClassName('drink_sub_menu');
		for (var i = 0; i < Buttons.length; i++) {
			Buttons[i].style.visibility = 'hidden';
		}
		Buttons = document.getElementsByClassName('modify_menu');
		for (var i = 0; i < Buttons.length; i++) {
			Buttons[i].style.visibility = 'hidden';
		}
		Buttons = document.getElementsByClassName('modify_menu2');
		for (var i = 0; i < Buttons.length; i++) {
			Buttons[i].style.visibility = 'visible';
		}
	} 
	else {
		clear_menu(false);
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'visible';
		}
	}
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