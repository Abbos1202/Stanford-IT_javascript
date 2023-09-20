// Begin 1

// `Foydalanuvchidan yoshni so'raydigan dasturni tuzing. Yosh 50 dan yuqori bo'lsa, dastur "Siz kattasiz" deb chiqarib berishi kerak.
// Yosh 50 dan past bo'lsa "Siz yoshsiz" deb chiqarib berishi kerak.

// var yosh = Number(prompt("Yoshingizni kiriting"));

// if (yosh > 50) {
//   alert("Siz kattasiz");
// } else if (yosh < 50) {
//   alert("Siz yoshsiz");
// } else {
//   alert("404 Not found 🤦‍♂️");
// }

// ---

// Begin 2

// Somsani narxini so'raydigan dastur. Narx 3000 dan yuqori bo'lsa - dastur "qimmat" deb chiqarib bersin.
// 3000 dan arzon bo'lsa - "arzon" deb chiqarib bersin.

// var somsa = Number(prompt("Summani kiriting"));

// if (somsa > 3000) {
//   alert("qimmat");
// } else if (somsa < 3000) {
//   alert("arzon");
// } else alert("404 Not found 🤦‍♂️");

// ---

// Begin 3

// Parolni tekshiradigan dastur. Foydalanuvchi "sarimsoqpiyoz" parolini kiritgan bo'lsa, u bilan salomlashing.

// var parol = prompt("Parolni kiriting");

// if (parol === "sarimsoqpiyoz") {
//   alert("Salom bolakay");
// } else {
//   alert("Bor yo'qol 😂");
// }

// ---

// Begin 4

// Parolni tekshiradigan dastur. Foydalanuvchi "sarimsoqpiyoz" parolini kiritgan bo'lsa, u bilan salomlashing.
// Boshqa narsa kiritgan bo'lsa - unga "Xato!" deb yozing.

// var parol = prompt("Parolni kiriting");

// if (parol === "sarimsoqpiyoz") {
//   alert("Salom bolakay");
// } else {
//   alert("Xato! 🤦‍♂️");
// }

// ---

// Begin 5

// Foydalanuvchi yoshini kiritish kerak.
// Yoshi 0 dan 30 gacha bo'lsa, unga "yoshsiz" deb yozing.
// Yoshi 30 dan 60 gacha bo'lsa, unga "kattasiz" deb yozing.
// Yoshi 60 dan yuqori bo'lsa, unga siz qarisiz deb yozing.

// var yosh = Number(prompt("Yoshingizni kiriting"));

// if (yosh >= 0 && yosh <= 30) {
//   alert("yoshsiz");
// } else if (yosh > 30 && yosh <= 60) {
//   alert("kattasiz");
// } else if (yosh > 60) {
//   alert("qarisiz");
// } else {
//   alert("404 Not found 😒");
// }

// ---

// Begin 6

// Foydalanuvchidan ismini so'rang.
// Ismi "Ali" bo'lsa, unga "Salom og'a" deb yozing. Ismi "Ahmad" bo'lsa, unga "Ko'rinmayapsan dostim, nima qilyapsan?" deb yozing.

// var ismi = prompt("Ismingizni kiriting");

// if (ismi === "Ali") {
//   alert("Salom og'a 🙋‍♂️");
// } else if (ismi === "Ahmad") {
//   alert("Ko'rinmayapsan dostim 👀, nima qilyapsan?");
// } else {
//   alert("404 Not found 🥴");
// }

// ---

// Begin 7

// Foydalanuvchidan oyligini so'rang. Va soliq bilan yoki soliqsiz hisoblash kerakligini so'rang.
// So'ng yillik topadigan pulini hisoblab bering (soliq bilan yoki soliqsiz).

// if else orqali

// var oylik = Number(prompt("Oyligingizni kiriting"));
// var soliq = prompt("Soliq bilan yoki soliqsiz");

// var soliqli = (oylik / 100) * 10;

// if (oylik && soliq === "soliq bilan") {
//   alert(soliqli * 12);
// } else if (oylik && soliq === "soliqsiz") {
//   alert(oylik * 12);
// } else {
//   alert("Not found");
// }

// ---------------------------->

// Nested if orqali

// var oylik = Number(prompt("Oyligingizni kiriting"));

// var Soliq = prompt("Soliq bilan yoki soliqsiz");

// var soliqli = (oylik / 100) * 10;

// if (oylik) {
//   if (Soliq === "soliq bilan") {
//     alert(soliqli * 12);
//   } else {
//     alert(oylik * 12);
//   }
// } else {
//   alert("Not found");
// }

// ---

// Begin 8

// Foydalanuvchidan oyligini so'rang. Va soliq bilan yoki soliqsiz hisoblash kerakligini so'rang.
// So'ng yillik YIG'ADIGAN pulini hisoblab bering (soliq bilan yoki soliqsin).
// Foydalanuvchi topgan pulidan 90% sarflaydi - shuni inobatga oling.

// if else orqali

// var oylik = Number(prompt("Oyligingizni kiriting"));
// var soliq = prompt("Soliq bilan yoki soliqsiz");

// var soliqli = (oylik / 100) * 10;
// var foiz = (oylik / 100) * 90;

// if (oylik && soliq === "soliqli") {
//   alert(soliqli * 12 - foiz);
// } else if (oylik && soliq === "soliqsiz") {
//   alert(oylik * 12 - foiz);
// } else {
//   alert("Not found");
// }

// Ternary operator orqali

// var oylik = Number(prompt("Oyligingizni kiriting"));
// var soliq = prompt("Soliq bilan yoki soliqsiz");
// var soliqli = (oylik / 100) * 10;
// var foiz = (oylik / 100) * 90;

// oylik && soliq === "soliqli"
//   ? alert(soliqli * 12 - foiz)
//   : oylik && soliq === "soliqsiz"
//   ? alert(oylik * 12 - foiz)
//   : alert("Not found");

// ---------------------------->

// Nested if orqali

// var oylik = Number(prompt("Oyligingizni kiriting"));

// var Soliq = prompt("Soliq bilan yoki soliqsiz");

// var soliqli = (oylik / 100) * 10;

// var foiz = (oylik / 100) * 90;

// if (oylik) {
//   if (Soliq === "soliq bilan") {
//     alert(soliqli * 12 - foiz);
//   } else {
//     alert(oylik * 12 - foiz);
//   }
// } else {
//   alert("Not found");
// }

// ---

// Begin 9

// Dollarni so'mga va so'mni dollarga o'giradigan dasturni tuzing.
// Foydalanuvchi pulni kiritishi kerak bo'ladi, `<select>` orqali pul jinsini tanlash kerak bo'ladi,
// va "o'girish" tugmasini bosishi kerak bo'ladi.

// if else orqali

// var valyuta = prompt("Valyutani kiriting 🤑");

// var pul = prompt("Qancha pulingiz bor");
// var dollr = 1;
// var som = 1216;

// if (valyuta === "dollr" && dollr) {
//   alert(pul * som);
// } else if (valyuta === "som" && som) {
//   alert(pul / som);
// } else {
//   alert("Valyuta xato!");
// }

// ---------------------->

// Ternary operator orqali

// var valyuta = prompt("Valyutani kiriting 🤑");

// var pul = prompt("Qancha pulingiz bor");
// var dollr = 1;
// var som = 1216;

// valyuta === "dollr" && dollr
//   ? alert(pul * som)
//   : valyuta === "som" && som
//   ? alert(pul / som)
//   : alert("Valyuta xato!");

// ---------------------------->

// Nested if orqali

// var valyuta = prompt("Valyutani kiriting 🤑");

// var pul = prompt("Qancha pulingiz bor");
// var dollr = 1;
// var som = 1216;

// if (valyuta === "dollr") {
//   if (dollr) {
//     alert(pul * som);
//   } else {
//     alert("Error");
//   }
// } else if (valyuta === "som") {
//   if (som) {
//     alert(pul / som);
//   } else {
//     alert("Error");
//   }
// } else {
//   alert("Valyuta xato!");
// }

// ---

// Begin 10

// Oshxonani menyusini tuzing. Foydalanuvchi "somsa" deb kiritsa - unga   "3000" deb yozing.
// "palov" deb kiritsa "15000" deb yozing. "gumma" - "2000". Bitta `<select>` dan foydalaning.

// if else orqali

// var menu = prompt("Taom nomini kiriting / somsa / palov / gumma");

// if (menu === "somsa") {
//   alert(3000);
// } else if (menu === "palov") {
//   alert(15000);
// } else if (menu === "gumma") {
//   alert(2000);
// } else {
//   alert("Bunday taomimiz yo'q");
// }

// ----------------->

// Ternary operator orqali

// var menu = prompt("Taom nomini kiriting / somsa / palov / gumma");

// menu === "somsa"
//   ? alert(3000)
//   : menu === "palov"
//   ? alert(15000)
//   : menu === "gumma"
//   ? alert(2000)
//   : alert("Bunday taomimiz yo'q");

// ---

// Begin 11

// Oshxonani menyusini tuzing. Foydalanuvchi "somsa" deb kiritsa - unga "3000" deb yozing.
// "palov" deb kiritsa "15000" deb yozing. "gumma" - "2000". Uchta `<select>` dan foydalaning.
// Va tanlangan taomlarni umumiy narxini hisoblab bering.

// var menu = prompt("Taom nomini kiriting / somsa / palov / gumma");

// if (menu === "somsa") {
//   alert(3000);
// } else if (menu === "palov") {
//   alert(15000);
// } else if (menu === "gumma") {
//   alert(2000);
// } else {
//   alert("Bunday taomimiz yo'q");
// }

// ---

// Begin 12

// Huddi yuqoridagi dastur, lekin umumiy narxga yana xizmatga 10% qo'shiladi.

// ---

// Begin 13

// Qo'yliqqa, Chorsuga va Oloy bozorga boradigan avtobuslarni chiqaradigan dasturni tuzing.
// Foydalanuvchi Qo'yliqni tanlasa 7, 93 deb chiqaring.
// Chorsu - 3, 54, 12.
// Oloy - 434, 5545, 11111.

// var avtobus = prompt("Qayerga borasiz");

// if (avtobus === "Qoyliqqa") {
//   alert("7, 93");
// }else if (avtobus === "Chorsuga") {
//     alert("3, 54, 12")
// }else if (avtobus === "Oloy bozoriga") {
//     alert("434, 5545, 11111")
// }else {
//     alert("Borar joyingiz xato")
// }

// ---------------------->

// Ternary operator orqali

// var avtobus = prompt("Qayerga borasiz");

// avtobus === "Qoyliqqa"
//   ? alert("7, 93")
//   : avtobus === "Chorsuga"
//   ? alert("3, 54, 12")
//   : avtobus === "Oloy bozoriga"
//   ? alert("434, 5545, 11111")
//   : alert("Borar joyingiz xato");

// ---

