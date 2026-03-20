//завдання 1:
//відповідь:тому що браузер виконує скрипти зверху вниз у html.якщо big.js підключений раніше — він і запускається першим, незалежно від розміру

//завдання 2:
//1.спочатку а переходить в число 4,(так як a *= 2 це 2 * 2 = 4), а після цього 1+4 і виходить 5.
//2.alert з’явиться.бо 0 - це є рядок, і він не є порожній 
//3.
console.log("Завдання №2.3:");
var a_task2 = 2; 
var x = 1 + (a_task2 *= 2);
console.log("Значення х:", x);

let name = "Василь";
let admin = name;
console.log("Значення admin:", admin);
console.log("");

// Завдання №3: Робота з API
console.log("Завдання №3: API");
let countiesData = [];

async function loadData() {
    const res = await fetch('https://api.census.gov/data/2020/acs/acs5/profile?get=NAME&for=county:*');
    const data = await res.json();
    countiesData = data.slice(1).map(row => ({ name: row[0], code: row[1] + row[2] }));
    console.log("Дані API завантажено успішно.");
}

document.getElementById('searchBtn').onclick = () => {
    const val = document.getElementById('countyInput').value;
    const found = countiesData.find(c => c.name.toLowerCase() === val.toLowerCase());
    const display = document.getElementById('apiDisplay');
    
    if (found) {
        display.innerText = "Код округу: " + found.code;
        console.log("Знайдено код:", found.code);
    } else {
        display.innerText = "Округ не знайдено";
        console.log("Пошук: Округ не знайдено");
    }
};
loadData();
console.log("");


// Завдання №4: Валідація форми
console.log("Завдання №4: Валідація");
document.getElementById('userForm').onsubmit = function(event) {
    const fName = document.getElementById('first_name').value;
    const lName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;

    if (!fName || !lName || !email) {
        event.preventDefault();
        alert("Заповніть усі поля!");
        console.log("Валідація: Помилка (пусті поля)");
    } else {
        alert(`Привіт, ${fName} ${lName}!`);
        console.log("Валідація: Успіх");
    }
};
console.log("");


// Завдання №5: Анімація
console.log("Завдання №5: Анімація активована");
let pos = 0;
const box = document.getElementById('elid');

document.getElementById('btnLeft').onclick = () => {
    pos -= 100;
    box.style.left = pos + "px";
    console.log("Рух вліво, позиція:", pos);
};

document.getElementById('btnRight').onclick = () => {
    pos += 100;
    box.style.left = pos + "px";
    console.log("Рух вправо, позиція:", pos);
};