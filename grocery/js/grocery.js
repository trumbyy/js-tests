
update();

function additem() {

	//prompt user to input what they want to add to the grocery list
	var userInput = prompt("What groceries do you want?");

	//get the <ul> element and make variable
	var list = document.getElementsByTagName('ul')[0];

	//create element using <li> 
	var newItemLast = document.createElement('li');

	//create node for userInput
	var newTextLast = document.createTextNode(userInput);

	//append userInput to the end of the list
	newItemLast.appendChild(newTextLast);

	//add input value to unordered list
	list.appendChild(newItemLast);

  
	//update current number of items in list
	update();

	//end function additem()
}


function clearitem() {

	//add function clearitem() to clear items from list when prompted
	while (listid.firstChild) {
		listid.removeChild(listid.firstChild);
	}

	//update current number of items in list
	update();

	//end function clearitem()
}


function update() {

	//add function update() to update when items are added or removed from list
	//number will update next to h2 element
	var listItems = document.querySelectorAll('li'); 

	//set h2 element as variable
	var heading = document.querySelector('h2');

	//set first child of h2 as the first item on list 
	var headingText = heading.firstChild.nodeValue;

	//gather total number of <li>
	var totalItems = listItems.length;

	//display totalItems in header
	var newHeading =  headingText + '<span>' + totalItems + '</span>';

	//update h2 to display totalItems
	heading.innerHTML = newHeading;     

//end function update()	
}