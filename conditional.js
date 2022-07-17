// conditional

// console.log("Haloo");
// var umur = 70;
// var tinggi = 150;

// if (umur >= 17 && umur < 50){
//     if(tinggi > 160){
//         console.log("Kamu bisa menaiki wahana ini");
//     }else{
//         console.log("Kamu tidak boleh menaiki wahana ini");
//     }
// }else if (umur < 17){
//     if(tinggi > 160){
//         console.log("Umur kamu belum mencukupi kriteria walaupun sudah cukup tinggi");
//     }else{
//         console.log("Umur dan tinggi kamu tidak memenuhi persyaratan");
//     }
// }else{
//     console.log("Umurmu sudah terlalu tua"); 
// }

// var beverages = "TEH";
// switch(beverages.toLowerCase()){
//     case 'kopi':
//         console.log('Kamu memilih kopi')
//         break;
//     case 'teh':
//         console.log('Kamu memilih teh')
//         break;
//     default:
//         console.log('Maaf, Minumanmu tidak tersedia')
// } 

// var nilai = 97;

// if(nilai <= 100 && nilai >= 85){
//     console.log("Grade A");
// }else if(nilai < 85 && nilai >= 70){
//     console.log("Grade B");
// }else if(nilai < 70 && nilai >= 50){
//     console.log("Grade C");
// }else if(nilai < 50 && nilai >= 30){
//     console.log("Grade D");
// }else if(nilai < 30 && nilai >= 0){
//     console.log("Grade D");
// }else{
//     console.log("Input nilai antara 0 - 100");
// } 

// var bilangan = 7;

// if(bilangan % 7 === 0){
//     console.log(bilangan + " adalah bilangan genap");
// }else if(bilangan % 7 === 1){
//     console.log(bilangan + " adalah bilangan ganjil");
// }

// var minuman = "Boba";

// if(minuman === ""){
//     console.log("Input minuman");
// }else if(minuman === "Sweet Tea"){
//     console.log("You choose Sweet Tea, thanks");
// }else if(minuman === "Plain Tea"){
//     console.log("You choose Plain Tea, thanks");
// }else if(minuman === "Boba"){
//     console.log("You choose Boba, thanks");
// }else if(minuman === "Milk Coffee"){
//     console.log("You choose Milk Coffee, thanks");
// }else if(minuman === "Choco Ice"){
//     console.log("You choose Choco Ice, thanks");
// }else{
//     console.log("minuman is undifined");
// }

// switch(minuman){
//     case 'Sweet Tea':
//         console.log("You choose Sweet Tea, thanks");break;
//     case 'Plain Tea':
//         console.log("You choose Plain Tea, thanks");break;
//     case 'Boba':
//         console.log("You choose Boba, thanks");break;
//     case 'Milk Coffee':
//         console.log("You choose Milk Coffee, thanks");break;
//     case 'Choco Ice':
//         console.log("You choose Choco Ice, thanks");break;
//     default:
//         if(minuman === ""){
//             console.log("Input minuman");
//         }else{
//             console.log("minuman is undefined");
//         }break; 
// } 

// var coupon = "Free15%";
// var harga =  40000;

// if(coupon === "FreeOngkir"){
//     if(harga >= 50000){
//         console.log(harga - (harga*0.1));
//     }else if(harga >= 30000 && harga <= 50000){
//         console.log(harga - (harga*0.05));
//     }else if(harga < 30000)
//         console.log(harga - (harga*0.025));
// }else if(coupon === "Free15%"){
//     if(harga >= 30000){
//         console.log(harga - (harga*0.15));
//     }else if(harga < 30000){
//         console.log(harga - (harga*0.00));
//     }
// } 

// for(var i=1; i<=10; i++){
//     console.log(i);
// }
// var i = 1
// while(i <= 10){
//     console.log(i);
//     i++; 
// }

// for(var i=20; i>10; i--){
//     console.log(i);
// }
// var i = 35
// while(i > 10){
//     console.log(i);
//     i--;
// }

// var angka = 5;
// for(var i = 1; i <= angka; i++){
//     if(i % 2 === 0){
//         console.log(i + " bilangan genap");
//     }else{
//         console.log(i + " bilangan ganjil");
//     }
// }  

// var str = "sarapan";
// var temp = "";

// for(var i = 0; i < str.length; i++){
//     if(i % 2 === 0){
//         temp = temp + str[i].toUpperCase();
//     }else{
//         temp = temp + str[i];
//     }
// }
// console.log(temp); 

var num = 3;
var temp = "";
for (var i = 0; i < num; i++){
    for (var j = 0; j < num; j++){
        temp += "#"
    }
    console.log(temp);
    temp = "";
}








