
// _______Products of the shop_______
// __________________________________


// Brown fur jacket
function Item(image,name,price,description,) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.description = description;
}

let product1 = new Item ('<img src="images/fur-jacket.jpeg" alt="">',"Brown fur jacket","R900.00"," Fur clothing is clothing made of furry animal hides. Fur is one of the oldest forms of clothing, and is thought to have been widely used as hominids first expanded outside Africa. Some view fur as luxurious and warm; however, others reject it due to moral concerns for animal rights.");

document.getElementById("image").innerHTML = product1.image;
document.getElementById("text").innerHTML = product1.name;
document.getElementById("price").innerHTML = product1.price;
document.getElementById("description").innerHTML = product1.description;
