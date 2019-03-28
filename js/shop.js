
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


// Blue fur coat
let product2 = new Item ('<img src="images/beautiful-dress-elegant-1375736.jpg">',"Blue fur Coat","R1400","The most popular kinds of fur in the 1960s (known as the luxury fur) were blond mink, silver striped fox and red fox. These were mainly bought by the rich. Those who could not afford this wore pelts of wolf, Persian lamb or muskrat.");

document.getElementById("image2").innerHTML = product2.image;
document.getElementById("text2").innerHTML = product2.name;
document.getElementById("price2").innerHTML = product2.price;
document.getElementById("description2").innerHTML = product2.description;

// Black Cosy Coat
let product3 = new Item ('<img src="images/blond-close-up-eyes-449977.jpg">',"Black Cosy Jacket","R850.00"," A leather jacket is a jacket-length coat that is usually worn on top of other apparel or item of clothing, and made from the tanned hide of various animals. The leather material is typically dyed black, or various shades of brown, but a wide range of colors is possible.");

document.getElementById("image3").innerHTML = product3.image;
document.getElementById("text3").innerHTML = product3.name;
document.getElementById("price3").innerHTML = product3.price;
document.getElementById("description3").innerHTML = product3.description;


// Black Cosy Coat
let product4 = new Item ('<img src="images/blur-boy-depth-of-field-1183266.jpg">',"Yellow top","R750.00","Hooded garments have been a documented part of men's and women's wear for centuries. The hooded sweatshirt was first produced in the United States starting in the 1930s.");

document.getElementById("image4").innerHTML = product4.image;
document.getElementById("text4").innerHTML = product4.name;
document.getElementById("price4").innerHTML = product4.price;
document.getElementById("description4").innerHTML = product4.description;

let cart = [];

let item = function(name,price,count) {
    this.name = name
    this.price = price
    this.count = count
};

function addItemToCArt(name,price,count) {
    let item = new Item(name,price,count);
    cart.push(item);
}
    addItemToCArt("Brown fur jacket","R900.00", 1);

    console.log(cart);