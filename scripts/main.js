function printHasil(angka){
    document.querySelector("#hasil").value = angka;
}

function getAngkas(){
    document.querySelector("#warning").innerHTML="";
    return{
        "angka1":parseInt(document.querySelector("#angka1").value),
        "angka2":parseInt(document.querySelector("#angka2").value)
    };
}

document.querySelector("#plus").addEventListener("click", function(){
    var angka1 = getAngkas().angka1;

    var angka2 = getAngkas().angka2;
    var hasil=0;

    if(!isNaN(angka1) && !isNaN(angka2)){
        hasil = angka1+angka2;
    }else if(isNaN(angka1)){
        hasil =angka2;
        document.querySelector("#angka1").value = 0;
    }else if(isNaN(angka2)){
        hasil = angka1;
        document.querySelector("#angka2").value = 0;
    }else{
        document.querySelector("#angka1").value = 0;
        document.querySelector("#angka2").value = 0;
    }

    printHasil(hasil);
});

document.querySelector("#minus").addEventListener("click", function(){
    var angka1 = getAngkas().angka1;

    var angka2 = getAngkas().angka2;
    var hasil=0;

    if(!isNaN(angka1) && !isNaN(angka2)){
        hasil = angka1-angka2;
    }else if(isNaN(angka1)){
        hasil = angka2;
    }else if(isNaN(angka2)){
        hasil = angka1;
        document.querySelector("#angka2").value = 0;
    }else{
        document.querySelector("#angka1").value = 0;
        document.querySelector("#angka2").value = 0;
    }

    printHasil(hasil);
});

document.querySelector("#kali").addEventListener("click", function(){
    var angka1 = getAngkas().angka1;

    var angka2 = getAngkas().angka2;
    var hasil=0;

    if(!isNaN(angka1) && !isNaN(angka2)){
        hasil = angka1*angka2;
    }else if(isNaN(angka1)){
        hasil = 0*angka2;
        document.querySelector("#angka1").value = 0;
    }else if(isNaN(angka2)){
        hasil = angka1*0;
        document.querySelector("#angka2").value = 0;
    }else{
        document.querySelector("#angka1").value = 0;
        document.querySelector("#angka2").value = 0;
    }

    printHasil(hasil);
});

document.querySelector("#bagi").addEventListener("click", function(){
    var angka1 = getAngkas().angka1;

    var angka2 = getAngkas().angka2;
    var hasil=0;

    if(!isNaN(angka1) && !isNaN(angka2) && angka2 !==0){
        hasil = angka1/angka2;
    }else if(isNaN(angka1)){
        hasil = 0/angka2;
        document.querySelector("#angka1").value = 0;
    }else if(isNaN(angka2) || angka2===0){
        hasil = angka1/0;
        document.querySelector("#warning").innerHTML = '<div class="alert alert-danger" role="alert">Error: Pembagian dengan 0!</div>'
    }else{
        document.querySelector("#warning").innerHTML = '<div class="alert alert-danger" role="alert"> Error: Pembagian dengan 0!</div>'
    }

    printHasil(hasil);
});

document.querySelector("#mod").addEventListener("click", function(){
    var angka1 = getAngkas().angka1;

    var angka2 = getAngkas().angka2;
    var hasil=0;

    if(!isNaN(angka1) && !isNaN(angka2) && angka2 !==0){
        hasil = angka1%angka2;
    }else if(isNaN(angka1)){
        hasil = 0%angka2;
        document.querySelector("#angka1").value = 0;
    }else if(isNaN(angka2) || angka2===0){
        document.querySelector("#warning").innerHTML = '<div class="alert alert-danger" role="alert">Error: Modulus dengan 0!</div>'
    }else{
        document.querySelector("#warning").innerHTML = '<div class="alert alert-danger" role="alert"> Error: Modulus dengan 0!</div>'
    }

    printHasil(hasil);
});

document.querySelector("#sqr").addEventListener("click", function(){
    var angka1 = getAngkas().angka1;
    var angka2 = 2;
    var hasil=0;

    document.querySelector("#angka2").value=angka2;

    function pangkat2(){
        return Math.pow(angka1, angka2);
    }

    if(!isNaN(angka1)){
        hasil = pangkat2();
    }else{
        document.querySelector("#angka1").value = 0;
    }

    printHasil(hasil);
});


document.querySelector("#sqrt").addEventListener("click", function(){
    var angka1 = getAngkas().angka1;
    var hasil=0;

    document.querySelector("#angka2").value=2;

    if(!isNaN(angka1) && angka1>=0){
        hasil = Math.sqrt(angka1);
    }else if(angka1<0){
        document.querySelector("#warning").innerHTML = '<div class="alert alert-danger" role="alert">Error: Akar negatif adalah bilangan imajiner!</div>'
    }else{
        document.querySelector("#angka1").value = 0;
    }

    printHasil(hasil);
});