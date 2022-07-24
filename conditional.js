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

// var num = 3;
// var temp = "";
// for (var i = 0; i < num; i++){
//     for (var j = 0; j < num; j++){
//         temp += "#"
//     }
//     console.log(temp);
//     temp = "";
// }

// var num = 5;
// var temp = '';
// var chara = "@";

//--------------------------------------------------------------------------------
// for (var i = 0; i < num; i++){
//     for (var j = 0; j <= i; j++){
//         temp += chara;
//     }
//     console.log(temp);
//     temp = "";
// }
// NESTED FOR LOOP JIKA FOR YG KEDUA SYARATNYA SUDAH TERPENUHI KETIKA MASUK LAGI
// DARI FOR PERTAMA DAN MELAKUKAN PENGULANGAN LAGI DI FOR KEDUA DIMANA FOR PERTAMA (i) 
// SUDAH BERTAMBAH (i = 1) MAKA, FOR KEDUA AKAN BERNILAI 0 LAGI (j = 0) 
// SETELAH MEMENUHI SYARATNYA DAN KELUAR DARI LOOP. 
//-------------------------------------------------------------------------------

// var num = 5;
// var temp = "";

// for(var i = 0; i < num; i++){
//     for (var j = 0; j <= i; j++){
//         temp += (j + 1)
//     }
//     console.log(temp);
//     temp = "";
// }

// pertemuan 3 

// var scores = [100, 50, 75, 70, 35];
// var total = 0;
// for(var i = 0; i < scores.length; i++){
//     total += scores[i];
// }
// console.log(total); 

// var mean = total / scores.length;
// console.log(mean); 

// var stats = [
//             [1,2,3],
//             [-1],
//             [10,20,30,40,50],
//             [-5,-7],
//             [15,17,19]
//             ]
// var totals = 0;
// var jumlahBelasan = 0;
// var arrayMin = [];

// for(var i = 0; i < stats.length; i++){
//     for(var j = 0; j < stats[i].length; j++){
//         totals += stats[i][j];
//     }
// }
// console.log(totals);

// for(var i = 0; i < stats.length; i++){
//     for(var j = 0; j < stats[i].length; j++){
//         if(stats[i][j] >= 11 && stats[i][j] < 20){
//             jumlahBelasan += stats[i][j];
//         }
//     }
// }
// console.log(jumlahBelasan); 

// for(var i = 0; i< stats.length; i++){
//     for(var j = 0; j < stats[i].length; j++){
//         if(stats[i][j] < 0){
//             arrayMin.push(stats[i][j]); 
//         }
//     }
// }
// console.log(arrayMin); 

// var kelipatan = [];
// for(var i = 0; i < stats.length; i++){
//     for(var j = 0; j < stats[i].length; j++){
//         if(stats[i][j] % 10 === 0){
//             kelipatan.push(stats[i][j]);
//         }
//     }
// }
// console.log(kelipatan); 

// var murid = [
//     [1, "Vincent", 3.5],
//     [2, "Udin", 3.0],
//     [3, "Mamang", 2.1]
// ];

// for(var i = 0; i < murid.length; i++){
//     if(murid[i][2] >= 3.0){
//         console.log(murid[i][0]+ ". "+
//         murid[i][1] + ", Lulus")
//     }else {
//         console.log(murid[i][0]+ ". "+
//         murid[i][1] + ", Tidak Lulus")
//     }
// }

// var watches = ["Swiss Army","Daniel Wellington","Dublot","Alba","G-Shock"];
// var tempp = "Saya punya ";
// for(var i = 0; i < watches.length; i++){
//     if(i === watches.length - 1){
//         tempp += "dan " + watches[i] + ".";
//     }else{
//         tempp += watches[i] + ", "; 
//     } 
// }
// console.log(tempp); 

function countFactors(num){
    var tempFactors = [];
    for(var i = 1; i <= num; i++){
        if(num % i === 0){
            tempFactors.push(i);
        }
    }
    return tempFactors.length;
}

function checkPrime(x){
    var jumlahFaktor = countFactors(x);

    if(jumlahFaktor === 2){
        console.log(x + " adalah Prima");
    }else{
        console.log(x + " adalah Bukan Prima");
    }
}

// checkPrime(7);
// checkPrime(9); 

// Study Case 3
// BUat segitiga '#' dan 'X'
function triangle(n) {
    var temp = ""
    for (var i = 0; i < n; i++) {
        // if (i % 2 === 0) {
        //     for (var j = 0; j <= i; j++) {
        //         temp += "#"
        //     }
        //     console.log(temp)
        //     temp = ""
        // } else {
        //     for (var k = 0; k <= i; k++) {
        //         temp += "X"
        //     }
        //     console.log(temp)
        //     temp = ""
        // }
        for (var j = 0; j <= i; j++) {
            if (j % 2 === 0) {
                temp += '#'
            } else {
                temp += 'X'
            }
        }
        console.log(temp)
        temp = ""

    }
}
// triangle(5); 


// Study Case 4
// Buat kotak kosong
function square(angka) {
    if (angka % 2 !== 0) {
        var temp = ""
        for (var i = 0; i < angka; i++) {
            if (i === 0 || i === angka - 1) {
                for (var j = 0; j < angka; j++) {
                    temp += '#'
                }
                console.log(temp)
                temp = ""
            } else {
                for (var j = 0; j < angka; j++) {
                    if (j === 0 || j === angka - 1) {
                        temp += "#"
                    } else {
                        temp += ' '
                    }
                }
                console.log(temp)
                temp = ""
            }
        }
    } else {
        console.log("Harus Ganjil")
    }
}
// square(5)
// square(4)

// Study Case 5
// Buat kotak kosong, tetapi ada tengahnya
/**
var num = 5;
#####
@   @
@ $ @
@   @
#####
 */   

function square(angka) {
    if (angka % 2 !== 0) {
        var temp = ""
        for (var i = 0; i < angka; i++) {
            if (i === 0 || i === angka - 1) {
                for (var j = 0; j < angka; j++) {
                    temp += '#'
                }
                console.log(temp)
                temp = ""
            } else {
                for (var j = 0; j < angka; j++) {
                    if (j === 0 || j === angka - 1) {
                        temp += "@"
                    }else{
                        if(i === Math.floor(angka / 2) && j === Math.floor(angka/2)){
                            temp += '$'
                        }else{
                            temp += ' '
                        }
                    }
                }
                console.log(temp)
                temp = ""
            }
        }
    } else {
        console.log("Harus Ganjil");
    }
} 
square(5);  













