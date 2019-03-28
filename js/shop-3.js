
function Item(image,name,price,description,) {
    this.image = image;
    this.name = name;
    this.price = price;
    this.description = description;
}

let product9 = new Item ('<img src="images/chair-coffee-cup-eyewear-1726486.jpg">',"Blue Bomber Jacket","R550.00","Perfect for winter situations");

document.getElementById("image9").innerHTML = product9.image;
document.getElementById("text9").innerHTML = product9.name;
document.getElementById("price9").innerHTML = product9.price;
document.getElementById("description9").innerHTML = product9.description;


let product10 = new Item ('<img src="images/pexels-photo-1770193.jpeg">',"Light brown Jacket","R1200.00","Stunning color and wil also look fancy");

document.getElementById("image10").innerHTML = product10.image;
document.getElementById("text10").innerHTML = product10.name;
document.getElementById("price10").innerHTML = product10.price;
document.getElementById("description10").innerHTML = product10.description;

let product11 = new Item ('<img src="images/bar-boy-casual-434708.jpg">',"Stripe Shirt","R450.00","Shirt looks fabulous,and is also tight fight.");

document.getElementById("image11").innerHTML = product11.image;
document.getElementById("text11").innerHTML = product11.name;
document.getElementById("price11").innerHTML = product11.price;
document.getElementById("description11").innerHTML = product11.description;


let product12 = new Item ('<img src="images/adult-beanie-beard-1078851.jpg">',"Pro-Star","R580.00","Silky type shirt,with an amazing color.");

document.getElementById("image12").innerHTML = product12.image;
document.getElementById("text12").innerHTML = product12.name;
document.getElementById("price12").innerHTML = product12.price;
document.getElementById("description12").innerHTML = product12.description;