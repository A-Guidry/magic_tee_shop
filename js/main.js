 function teeInfo(name, color, gender, image) {
 	this.name = name
 	this.color = color
 	this.gender = gender
 	this.image = image
 }
 var teeShirt = []

 var t001 = new teeInfo("Unforgettable Walk", "Brown", "Mens", "img/t001.2.jpg")
 var t002 = new teeInfo("Unforgettable Walk", "Brown", "Womens", "img/t001.2.jpg")
 var t003 = new teeInfo("Raiders of the Lost Lamp", "Black", "Mens", "img/t003.4.jpg")
 var t004 = new teeInfo("Raiders of the Lost Lamp", "Black", "Womens", "img/t003.4.jpg")
 var t005 = new teeInfo("She's Poppin", "Purple", "Mens", "img/t005.6.jpg")
 var t006 = new teeInfo("She's Poppin", "Purple", "Womens", "img/t005.6.jpg")
 var t007 = new teeInfo("Pika Means Family", "Blue", "Mens", "img/t007.8.jpg")
 var t008 = new teeInfo("Pika Means Family", "Blue", "Womens", "img/t007.8.jpg")
 var t009 = new teeInfo("Royal Master B'el", "Purple", "Mens", "img/t009.10.jpg")
 

 teeShirt.push(t001)
 teeShirt.push(t002)
 teeShirt.push(t003)
 teeShirt.push(t004)
 teeShirt.push(t005)
 teeShirt.push(t006)
 teeShirt.push(t007)
 teeShirt.push(t008)
 teeShirt.push(t009)

for (var i = 0; i < teeShirt.length; i++) {
	var tName = document.createTextNode(teeShirt[i].name)
	var tColor = document.createTextNode("Available Color: "+ teeShirt[i].color)
	var tgender = document.createTextNode("Gender: "+ teeShirt[i].gender)
	var tButton = document.createTextNode("ADD TO CART")
	var tImage = teeShirt[i].image

	var newItem = document.createElement("DIV")
	var newDiv = document.createElement("DIV")
	var itemName = document.createElement("H2")
	var colorText = document.createElement("H4")
	var genderText = document.createElement("H4")
	var buyBtn = document.createElement("BUTTON")
	var itemImg = document.createElement("IMG")

	itemName.appendChild(tName)
	colorText.appendChild(tColor)
	genderText.appendChild(tgender)
	buyBtn.appendChild(tButton)
	buyBtn.className = "btn btn-primary"
	itemImg.src = tImage
	itemImg.className = "img-responsive"

	newItem.className = "col-sm-4"
	newDiv.className = "item"
	newDiv.appendChild(itemImg)
	newDiv.appendChild(itemName)
	newDiv.appendChild(colorText)
	newDiv.appendChild(genderText)
	newDiv.appendChild(buyBtn)
	newItem.appendChild(newDiv)

document.getElementById("magicT").appendChild(newItem)









} // end for loop