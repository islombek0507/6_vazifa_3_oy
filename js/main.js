var a=18;
console.log(a);

// Dubayga borishga chipta haqqi dollarda
var DOLLAR = 10870;
var EURO = 11800;
var chipta = 150;
// mehmonxona narxi dollarda
var hotel= 170;
// xizmat narxi euroda
var xizmat = 200;

// Dubayga borish uchun jami kerak bo'ladigan pul

var jami = (150*DOLLAR) + (170*DOLLAR) + (200* EURO);
alert("jami kerak bo'ladigan pul " + Number(jami));
var mony = Number(prompt("Alisherning qancha puli bor"));

if(Number(mony)>jami){
    console.log("Dubayga xush kelibsiz Alisher \n" + "Dubaydan yana " + (Number(mony)-Number(jami)) + " \t sum miqdorda pul ortib qolar ekan sovg'aga menga ham sovg'a olib kel");
    alert("Dubayga xush kelibsiz Alisher \n" + "Dubaydan yana " + (Number(mony)-Number(jami)) + " \t sum miqdorda pul ortib qolar ekan sovg'aga menga ham sovg'a olib kel");

}
else
{
    console.log("Puling bo'lmasa Dubayda balo bormi Alisher \n" + (Number(jami) - Number(mony)) + "\t sum miqdorda pul ishlashing kerak alish");
    alert("Puling bo'lmasa Dubayda balo bormi Alisher " + (Number(jami) - Number(mony)) + "\t sum miqdorda pul ishlashing kerak alish");
    
}


