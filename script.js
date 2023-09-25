// #### Barcha vazifalarda `while` dan foydalanish shart

// while dan foydalanib "salom" ni 10 marta konsolga chiqaring

// for (let i = 0; i < 10; i++) {
//   console.log("salom");
// }

// let i = 0;

// while (i < 10) {
//   console.log("salom");
//   i++;
// }

// ---

// whila dan foydalanib 0 dan 10 gacha sonlarni konsolga chiqaring

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// ---

// 20 dan 30 gacha

// for (let i = 20; i <= 30; i++) {
//   console.log(i);
// }

// let i = 20;

// while (i <= 30) {
//   console.log(i);
//   i++;
// }

// ---

// -10 dan 10 gacha

// for (let i = -10; i <= 10; i++) {
//   console.log(i);
// }

// let i = -10;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// ---

// 0 2 4 6 8 ... 20

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// let i = 0;

// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }

// ---

// 1 3 5 7 9 ... 20

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// let i = 1;

// while (i <= 20) {
//   console.log(i);
//   i += 2;
// }

// ---

// 4 12 36 108 ... 26244

// for (let i = 4; i <= 26244; i*=3) {
//     console.log(i);
// }

// let i = 4;

// while (i <= 26244) {
//   console.log(i);
//   i *= 3;
// }

// ---

// 12 15 18 21 ... 300

// for (let i = 12; i <= 300; i += 3) {
//   console.log(i);
// }

// let i = 12;

// while (i <= 300) {
//   console.log(i);
//   i += 3;
// }

// ---

// 12 18 24 30 ... 300

// for (let i = 12; i <= 300; i += 6) {
//   console.log(i);
// }

// let i = 12;

// while (i <= 300) {
//   console.log(i);
//   i += 6;
// }

// ---

// 1000 500 250 125 ... 0.9765625

// for (let i = 1000; i >= 0.9765625; i/=2) {
//   console.log(i);
// }

// let i = 1000;

// while (i >= 0.9765625) {
//   console.log(i);
//   i /= 2;
// }
// ---

// 13.5 16 18.5 21 23.5 ... 248.5 251

// for (let i = 13.5; i <= 251; i += 2.5) {
//   console.log(i);
// }

// let i = 13.5;

// while (i <= 251) {
//   console.log(i);
//   i += 2.5;
// }

// ---

// while dan foydalanib hisoblash 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3 * 3

// for (let i = 0; i < 1; i++) {
//   console.log(3 ** 15);
// }

// let sum = 1;

// for(let i = 0; i < 15; i++) {
//     sum *= 3
// }
// console.log(sum)

// let sum = 1;
// let i = 0;

// while (i <= 15) {
//     console.log(sum);
//     sum *= 3;
//     i++;
// }

// ---

// while dan foydalanib hisoblash 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + ... + 300

// let sum = 0;

// for (let i = 1; i <= 300; i++) {
//   sum += i;
// }
// console.log(sum);

// let sum = 0;
// let i = 1;

// while (i <= 300) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// ---

// while dan foydalanib konsolga chiqarish -3 1 5 9 13 17 21 25 ... 125

// for (let i = -3; i <= 125; i += 4) {
//   console.log(i);
// }

// let i = -3;

// while (i <= 125) {
//   console.log(i);
//   i += 4;
// }

// ---

// 1 5 25 125 ... 78125

// for (let i = 1; i <= 78125; i*= 5) {
//   console.log(i);
// }

// let i = 1;

// while (i <= 78125) {
//   console.log(i);
//   i *= 5;
// }

// ---

// 100 89 78 67 56 45 34 23 12 1

// for (let i = 100; i >= 1; i -= 11) {
//   console.log(i);
// }

// let i = 100;

// while (i >= 1) {
//   console.log(i);
//   i -= 11;
// }

// ---

// while dan foydalanib hisoblash 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * ... * 300

// let sum = 1;

// for (let i = 1; i <= 300; i++) {
//   sum *= i;
// }
// console.log(sum);

// let i = 1;
// let sum = 1;

// while (i <= 300) {
//     sum *= i;
//     i++;
// }
// console.log(sum);

// ---

// 0 4 8 12 16 20 ... 400

// for (let i = 0; i <= 400; i += 4) {
//   console.log(i);
// }

// ---

// Hisoblash 0 + 2 + 4 + 6 + ... + 100

// let sum = 0;

// for (let i = 0; i <= 100; i+= 2) {
//   sum += i;
// }
// console.log(sum);

// let i = 0;
// let sum = 0;

// while (i <= 100) {
//   sum += i;
//   i += 2;
// }
// console.log(sum);

// ---

// Hisoblash 0 + 3 + 6 + 9 + 12 ... 102

// let sum = 0;

// for (let i = 0; i <= 102; i+= 3) {
//   sum += i;
// }

// console.log(sum);

// let i = 0;
// let sum = 0;

// while (i <= 102) {
//   sum += i;
//   i += 3;
// }
// console.log(sum);

// ---

// Konsolga chiqarish 0 7 14 21 ... 700

// for (let i = 0; i <= 700; i += 7) {
//   console.log(i);
// }

// let i = 0;

// while (i <= 700) {
//   console.log(i);
//   i += 7;
// }

// ---

// Hisoblash 2 * 4 * 6 * 8 ... 100

// let sum = 1;

// for (let i = 2; i <= 100; i += 2) {
//   sum *= i;
// }

// console.log(sum);

// let sum = 1;

// let i = 2;

// while (i <= 100) {
//   sum *= i;
//   i += 2;
// }
// console.log(sum);



