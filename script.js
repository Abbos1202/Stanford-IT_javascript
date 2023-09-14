// To'rburchakning maydonini hisoblaydigan dastur tuzing.

// var boy = Number(prompt("Boyi", "33"));
// var en = Number(prompt("Eni", "28"));

// var S = (boy + en) * 2;

// alert(S);

// ==================================================================================>

// Do'koningiz bor. Har bir molning ustiga foiz qo'yib sotasiz. Pechenyeni qanchadir pulga oldingiz. Nechpul foyda ko'rasiz?

// var pechenyeNarx = Number(prompt("Pechenye narxi", "10000000"));
// var ustigaFoiz = Number(prompt("Ustiga foiz", "15"));

// var foyda = (pechenyeNarx / 100) * ustigaFoiz;

// alert(foyda);

// ==================================================================================>

// Oyligingiz bor. Va o'rtog'ingizdan qarzingiz bor. Va har oy muddatli to'lo'vga olgan uyingizga pul to'lashingiz kerak. Bir yilda qancha pul yig'asiz?

// var qarz = Number(prompt("Qarz", "1000000"));
// var oylik = Number(prompt("Oylik", "5000000"));
// var muddatliTolov = Number(prompt("Muddatli to'lov", "2000000"));

// var Pul = (oylik - qarz - muddatliTolov) * 12;

// alert(Pul);

// ==================================================================================>

// Firmangiz har oy qanchadir pul topadi. Reklamaga qanchadir pul sarflaydi. Ishchilarning oyligiga qanchadir pul sarflaydi. Bir yilda qancha pul yig'iladi?

// var kirim = Number(prompt("Kirim", "1100000"));
// var reklama = Number(prompt("Reklama", "1000"));
// var oyliklar = Number(prompt("Oyliklar", "700000"));

// var daromad = (kirim - reklama - oyliklar) * 12;

// alert(daromad);

// ==================================================================================>

// Har 100 kilometrga qanchadir benzin sarflanadi. Siz qanchadir litr benzin oldingiz. Nechi kilometrga yetadi?

// var olinganBenzin = Number(prompt("Olingan benzin", "56"));
// var har100kmga = Number(prompt("Har 100 km ga", "8"));

// var km = (olinganBenzin / har100kmga) * 100;

// alert(km);

// ==================================================================================>


// Benzinning narxi bor. Va har 100 kilometrga qanchadir benzin sarflanadi. Siz qanchadir pulga benzin oldingiz. Nechi kilometrga yetadi?

// var narx = Number(prompt("Benzin narxi", "4500"));
// var har100kmga = Number(prompt("har 100 km ga", "9"));
// var pul = Number(prompt("Pul", "120000"));

// var kilometr = (pul / narx / har100kmga) * 100;

// alert(kilometr);

// ==================================================================================>


// Firmangiz har oy qanchadir pul topadi. Soliqqa topgan pulidan 24% beradi. Reklamaga qanchadir pul sarflaydi. Ishchilarning oyligiga qanchadir pul sarflaydi. Bir yilda qancha pul yig'iladi?

// var kirim = Number(prompt("Kirim", "1100000"));
// var reklama = Number(prompt("Reklama narxi", "1000"));
// var oyliklar = Number(prompt("Oyliklar", "700000"));
// var soliq = Number(prompt("Soliq", "24"));

// var daromad = (kirim - soliqPuli - reklama - oyliklar) * 12;

// alert(daromad);

// ==================================================================================>


// Mikrofon AliExpressda 40$ turadi. Yetkazib berish narxi - 30%. O'zbekistonda esa AliExpress narxiga 50% qo'yib sotsa bo'ladi. Nechpul foyda ko'rasiz?

// var narx = Number(prompt("Narx", "40"));
// var yetkazish = Number(prompt("Yetkazib berish", "30"));
// var ustigaFoiz = Number(prompt("Ustiga foiz", "50"));

// var sotuvNarxi = narx - yetkazishNarxi + foizliNarx;


// alert(sotuvNarxi);


// ==================================================================================>


// Do'koningiz bor. Har bir molning ustiga 15% qo'yib sotasiz. Har kun 100000 so'mga ga pechenye sotasiz. Nechi kunda 500000 so'm sof foyda ko'rasiz?

var sotilish = Number(prompt("Sotilish", "100000"));
var ustigaFoiz = Number(prompt("Ustiga foiz", "15"));

var foiz = (sotilish / 100) * 15;

var kun = 500000 / foiz;

alert(kun);
