
// _______Products of the shop_______
// __________________________________


// Brown fur jacket
function Item(image,name,price,description,) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.description = description;
}

let product5 = new Item ('<img src="images/lacoste.jpeg">',"Blue Tight Shirt","R600.00","Our Lacoste Men's Shirts are available in different styles and shapes, regular fit and slim fit.");

document.getElementById("image5").innerHTML = product5.image;
document.getElementById("text5").innerHTML = product5.name;
document.getElementById("price5").innerHTML = product5.price;
document.getElementById("description5").innerHTML = product5.description;


let product6 = new Item ('<img src="images/jackett.jpg">',"Ripped Denim Jacket","R750.00","Here's a denim jacket that rolls up its sleeves and goes to work for your style.");

document.getElementById("image6").innerHTML = product6.image;
document.getElementById("text6").innerHTML = product6.name;
document.getElementById("price6").innerHTML = product6.price;
document.getElementById("description6").innerHTML = product6.description;


let product7 = new Item ('<img src="images/white island.jpg">',"White Island Hoodie","R790.00","Men's white with grey hood printed on the front and back.");

document.getElementById("image7").innerHTML = product7.image;
document.getElementById("text7").innerHTML = product7.name;
document.getElementById("price7").innerHTML = product7.price;
document.getElementById("description7").innerHTML = product7.description;


let product8 = new Item ('<img src="images/adult-bag-beautiful-1024036.jpg">',"Floral Dress","R920.00","Floral dresses are symbol of elegance, sophistication and femininity. ");

document.getElementById("image8").innerHTML = product8.image;
document.getElementById("text8").innerHTML = product8.name;
document.getElementById("price8").innerHTML = product8.price;
document.getElementById("description8").innerHTML = product8.description;