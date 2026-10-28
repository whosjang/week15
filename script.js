const foods = [
    {
        name: "ผัดซีอิ๊ว",
        description: "เส้นใหญ่ผัดกับไข่ คะน้า และซอสซีอิ๊ว",
        price: 50,
        image: "food/padseeew.jpg"
    },

    {
        name: "ข้าวกะเพราไก่",
        description: "ข้าวราดกะเพราไก่หอม ๆ เสิร์ฟพร้อมไข่ดาว",
        price: 55,
        image: "food/กระเพราไก่.jpg"
    },

    {
        name: "ข้าวมันไก่",
        description: "ข้าวมันหอม ๆ เสิร์ฟพร้อมไก่นุ่มและน้ำจิ้มรสเด็ด",
        price: 50,
        image: "food/ข้าวมันไก่.jpg"
    },

    {
        name: "ข้าวผัด",
        description: "ข้าวผัดหอม ๆ พร้อมไข่และผักสด",
        price: 50,
        image: "food/Egg Fried Rice.jpg"
    },

    {
        name: "ราดหน้า",
        description: "เส้นใหญ่ราดน้ำราดหน้าพร้อมหมูนุ่มและผักคะน้า",
        price: 55,
        image: "food/radna.jpg"
    },

    {
        name: "สุกี้หมู",
        description: "สุกี้น้ำร้อน ๆ พร้อมหมู ผัก และน้ำจิ้มสุกี้",
        price: 60,
        image: "food/สุกี้หมู.jpg"
    }
];


const foodImage = document.getElementById("food-image");
const foodName = document.getElementById("food-name");
const foodDescription = document.getElementById("food-description");
const foodPrice = document.getElementById("food-price");
const randomButton = document.getElementById("random-btn");


randomButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * foods.length);

    const randomFood = foods[randomIndex];

    foodImage.src = randomFood.image;
    foodName.textContent = randomFood.name;
    foodDescription.textContent = randomFood.description;
    foodPrice.textContent = randomFood.price + " บาท";
});