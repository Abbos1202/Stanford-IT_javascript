// var ball = Number(prompt("Balingizni kiriting"));

// if else orqali

// if (ball >= 86 && ball <= 100) {
//   alert("A");
// } else if (ball >= 61 && ball <= 85) {
//   alert("B");
// } else if (ball >= 50 && ball <= 60) {
//   alert("C");
// } else if (ball < 50) {
//   alert("Failed");
// }

// ----------------------------------------------->

// ternary operator orqali

// ball >= 86 && ball <= 100
//   ? alert("A")
//   : ball >= 61 && ball <= 85
//   ? alert("B")
//   : ball >= 50 && ball <= 60
//   ? alert("C")
//   : ball < 50
//   ? alert("Failed")
//   : alert("Error");

// switch case da qilib bo'lmaydi

// ============================================================>

// var meva = prompt("Meva nomini yozing");

// if else orqali

// if (meva === "olma") {
//   alert(10000);
// } else if (meva === "nok") {
//   alert(12000);
// } else if (meva === "tarvuz") {
//   alert(20000);
// } else {
//   alert("Bunday meva yo'q");
// }

// ----------------------------------------------->

// ternary operator orqali

// meva === "olma"
//   ? alert(10000)
//   : meva === "nok"
//   ? alert(12000)
//   : meva === "tarvuz"
//   ? alert(20000)
//   : alert("Bunday meva yo'q");

// ----------------------------------------------->

// switch case orqali

// switch (meva) {
//   case "olma":
//     alert(10000);
//     break;
//   case "nok":
//     alert(12000);
//     break;
//   case "tarvuz":
//     alert(20000);
//     break;
//   default:
//     alert("Bunday meva yo'q");
// }

// ============================================================>

// var num = Number(prompt("Sonni kiriting"));

// if else orqali

// if(num % 5 === 0 && num % 3 === 0) {
//     alert("3 ga va 5 ga bo'linadi")
// } else if (num % 5 === 0) {
//     alert("5 ga bo'linadi")
// }else if (num % 3 === 0) {
//     alert("3 ga bo'linadi")
// }else {
//     alert("Error")
// }

// ----------------------------------------------->

// ternary operator bilan

// num % 5 === 0 && num % 3 === 0
//   ? alert("3 ga va 5 ga bo'linadi")
//   : num % 5 === 0
//   ? alert("5 ga bo'linadi")
//   : num % 3 === 0
//   ? alert("3 ga bo'linadi")
//   : alert("Error");

// switch case orqali qilib bo'lmaydi

// ============================================================>

// var browser = prompt("Choose default browser");

// if else orqali

// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// ----------------------------------------------->

// ternary operator orqali

// browser === "Edge"
//   ? alert("You've got the Edge!")
//   : browser === "Chrome" ||
//     browser === "Firefox" ||
//     browser === "Safari" ||
//     browser === "Opera"
//   ? alert("Okay we support these browsers too")
//   : alert("We hope that this page looks ok!");

// ----------------------------------------------->

// switch case orqali

// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;
//   default:
//     alert("We hope that this page looks ok!");
// }

// ============================================================>

let login = prompt("Who is this?");

// if else orqali

// if (login === "Employee") {
//   alert("Hello");
// } else if (login === "Director") {
//   alert("Greetings");
// } else if (login === "") {
//   alert("No login");
// } else {
//   alert("");
// }

// ----------------------------------------------->

// ternary operator orqali

// login === "Employee"
//   ? alert("Hello")
//   : login === "Director"
//   ? alert("Greetings")
//   : login === ""
//   ? alert("No login")
//   : alert("");

// ----------------------------------------------->

// switch case orqali

switch (login) {
  case "Employee":
    alert("Hello");
    break;
  case "Director":
    alert("Greetings");
    break;
  case "":
    alert("No login");
    break;
  default:
    alert("");
}
