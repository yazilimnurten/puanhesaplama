function hesapla() {
    var ara_not = document.getElementById("ara_not").value;
    var donem_not = document.getElementById("donem_not").value;
    var ort = (parseFloat(ara_not) + parseFloat(donem_not)) / 2; // string yazıyı sayıya çevirir parsefloat
    document.getElementById("ort_hesapla").innerHTML = ort;
    if (ort >= 90 && ort <= 100) {
        document.getElementById("sonuc").innerHTML = "AA";
        document.getElementById("derece").innerHTML = "GEÇTİ"
    } else if (ort >= 80 && ort <= 89) {
        document.getElementById("sonuc").innerHTML = "BA";
        document.getElementById("derece").innerHTML = "GEÇTİ"
    } else if (ort >= 75 && ort <= 79) {
        document.getElementById("sonuc").innerHTML = "BB";
        document.getElementById("derece").innerHTML = "GEÇTİ"
    } else if (ort >= 70 && ort <= 74) {
        document.getElementById("sonuc").innerHTML = "CB";
        document.getElementById("derece").innerHTML = "GEÇTİ"
    } else if (ort >= 65 && ort <= 69) {
        document.getElementById("sonuc").innerHTML = "CC";
        document.getElementById("derece").innerHTML = "GEÇTİ"
    } else if (ort >= 60 && ort <= 64) {
        document.getElementById("sonuc").innerHTML = "DC";
        document.getElementById("derece").innerHTML = "GEÇTİ"
    } else if (ort >= 50 && ort <= 59) {
        document.getElementById("sonuc").innerHTML = "DD";
        document.getElementById("derece").innerHTML = "GEÇTİ"
    } else if (ort >= 40 && ort <= 49) {
        document.getElementById("sonuc").innerHTML = "FD";
        document.getElementById("derece").innerHTML = "GEÇTİ"
    } else if (ort <= 39) {
        document.getElementById("sonuc").innerHTML = "FF"
        document.getElementById("derece").innerHTML = "KALDI"
    } else {
        document.getElementById("sonuc").innerHTML = " GEÇERSİZ"
    }

}

function hesapla1() {
    var ara_not1 = document.getElementById("ara_not1").value;
    var donem_not1 = document.getElementById("donem_not1").value;
    var ort = (parseFloat(ara_not1) + parseFloat(donem_not1)) / 2; // string yazıyı sayıya çevirir parsefloat
    document.getElementById("ort_hesapla1").innerHTML = ort;
    if (ort >= 90 && ort <= 100) {
        document.getElementById("sonuc1").innerHTML = "AA";
        document.getElementById("derece1").innerHTML = "GEÇTİ"
    } else if (ort >= 80 && ort <= 89) {
        document.getElementById("sonuc1").innerHTML = "BA";
        document.getElementById("derece1").innerHTML = "GEÇTİ"
    } else if (ort >= 75 && ort <= 79) {
        document.getElementById("sonuc1").innerHTML = "BB";
        document.getElementById("derece1").innerHTML = "GEÇTİ"
    } else if (ort >= 70 && ort <= 74) {
        document.getElementById("sonuc1").innerHTML = "CB";
        document.getElementById("derece1").innerHTML = "GEÇTİ"
    } else if (ort >= 65 && ort <= 69) {
        document.getElementById("sonuc1").innerHTML = "CC";
        document.getElementById("derece1").innerHTML = "GEÇTİ"
    } else if (ort >= 60 && ort <= 64) {
        document.getElementById("sonuc1").innerHTML = "DC";
        document.getElementById("derece1").innerHTML = "GEÇTİ"
    } else if (ort >= 50 && ort <= 59) {
        document.getElementById("sonuc1").innerHTML = "DD";
        document.getElementById("derece1").innerHTML = "GEÇTİ"
    } else if (ort >= 40 && ort <= 49) {
        document.getElementById("sonuc1").innerHTML = "FD";
        document.getElementById("derece1").innerHTML = "GEÇTİ"
    } else if (ort <= 39) {
        document.getElementById("sonuc1").innerHTML = "FF"
        document.getElementById("derece1").innerHTML = "KALDI"
    } else {
        document.getElementById("sonuc1").innerHTML = " GEÇERSİZ"
    }

}

function hesapla2() {
    var ara_not2 = document.getElementById("ara_not2").value;
    var donem_not2 = document.getElementById("donem_not2").value;
    var ort = (parseFloat(ara_not2) + parseFloat(donem_not2)) / 2; // string yazıyı sayıya çevirir parsefloat
    document.getElementById("ort_hesapla2").innerHTML = ort;
    if (ort >= 90 && ort <= 100) {
        document.getElementById("sonuc2").innerHTML = "AA";
        document.getElementById("derece2").innerHTML = "GEÇTİ"
    } else if (ort >= 80 && ort <= 89) {
        document.getElementById("sonuc2").innerHTML = "BA";
        document.getElementById("derece2").innerHTML = "GEÇTİ"
    } else if (ort >= 75 && ort <= 79) {
        document.getElementById("sonuc2").innerHTML = "BB";
        document.getElementById("derece2").innerHTML = "GEÇTİ"
    } else if (ort >= 70 && ort <= 74) {
        document.getElementById("sonuc2").innerHTML = "CB";
        document.getElementById("derece2").innerHTML = "GEÇTİ"
    } else if (ort >= 65 && ort <= 69) {
        document.getElementById("sonuc2").innerHTML = "CC";
        document.getElementById("derece2").innerHTML = "GEÇTİ"
    } else if (ort >= 60 && ort <= 64) {
        document.getElementById("sonuc2").innerHTML = "DC";
        document.getElementById("derece2").innerHTML = "GEÇTİ"
    } else if (ort >= 50 && ort <= 59) {
        document.getElementById("sonuc2").innerHTML = "DD";
        document.getElementById("derece2").innerHTML = "GEÇTİ"
    } else if (ort >= 40 && ort <= 49) {
        document.getElementById("sonuc2").innerHTML = "FD";
        document.getElementById("derece2").innerHTML = "GEÇTİ"
    } else if (ort <= 39) {
        document.getElementById("sonuc2").innerHTML = "FF"
        document.getElementById("derece2").innerHTML = "KALDI"
    } else {
        document.getElementById("sonuc2").innerHTML = " GEÇERSİZ"
    }

}

function hesapla3() {
    var ara_not3 = document.getElementById("ara_not3").value;
    var donem_not3 = document.getElementById("donem_not3").value;
    var ort = (parseFloat(ara_not3) + parseFloat(donem_not3)) / 2; // string yazıyı sayıya çevirir parsefloat
    document.getElementById("ort_hesapla3").innerHTML = ort;
    if (ort >= 90 && ort <= 100) {
        document.getElementById("sonuc3").innerHTML = "AA";
        document.getElementById("derece3").innerHTML = "GEÇTİ"
    } else if (ort >= 80 && ort <= 89) {
        document.getElementById("sonuc3").innerHTML = "BA";
        document.getElementById("derece3").innerHTML = "GEÇTİ"
    } else if (ort >= 75 && ort <= 79) {
        document.getElementById("sonuc3").innerHTML = "BB";
        document.getElementById("derece3").innerHTML = "GEÇTİ"
    } else if (ort >= 70 && ort <= 74) {
        document.getElementById("sonuc3").innerHTML = "CB";
        document.getElementById("derece3").innerHTML = "GEÇTİ"
    } else if (ort >= 65 && ort <= 69) {
        document.getElementById("sonuc3").innerHTML = "CC";
        document.getElementById("derece3").innerHTML = "GEÇTİ"
    } else if (ort >= 60 && ort <= 64) {
        document.getElementById("sonuc3").innerHTML = "DC";
        document.getElementById("derece3").innerHTML = "GEÇTİ"
    } else if (ort >= 50 && ort <= 59) {
        document.getElementById("sonuc3").innerHTML = "DD";
        document.getElementById("derece3").innerHTML = "GEÇTİ"
    } else if (ort >= 40 && ort <= 49) {
        document.getElementById("sonuc3").innerHTML = "FD";
        document.getElementById("derece3").innerHTML = "GEÇTİ"
    } else if (ort <= 39) {
        document.getElementById("sonuc3").innerHTML = "FF"
        document.getElementById("derece3").innerHTML = "KALDI"
    } else {
        document.getElementById("sonuc3").innerHTML = " GEÇERSİZ"
    }

}

function hesapla4() {
    var ara_not4 = document.getElementById("ara_not4").value;
    var donem_not4 = document.getElementById("donem_not4").value;
    var ort = (parseFloat(ara_not4) + parseFloat(donem_not4)) / 2; // string yazıyı sayıya çevirir parsefloat
    document.getElementById("ort_hesapla4").innerHTML = ort;
    if (ort >= 90 && ort <= 100) {
        document.getElementById("sonuc4").innerHTML = "AA";
        document.getElementById("derece4").innerHTML = "GEÇTİ"
    } else if (ort >= 80 && ort <= 89) {
        document.getElementById("sonuc4").innerHTML = "BA";
        document.getElementById("derece4").innerHTML = "GEÇTİ"
    } else if (ort >= 75 && ort <= 79) {
        document.getElementById("sonuc4").innerHTML = "BB";
        document.getElementById("derece4").innerHTML = "GEÇTİ"
    } else if (ort >= 70 && ort <= 74) {
        document.getElementById("sonuc4").innerHTML = "CB";
        document.getElementById("derece4").innerHTML = "GEÇTİ"
    } else if (ort >= 65 && ort <= 69) {
        document.getElementById("sonuc4").innerHTML = "CC";
        document.getElementById("derece4").innerHTML = "GEÇTİ"
    } else if (ort >= 60 && ort <= 64) {
        document.getElementById("sonuc4").innerHTML = "DC";
        document.getElementById("derece4").innerHTML = "GEÇTİ"
    } else if (ort >= 50 && ort <= 59) {
        document.getElementById("sonuc4").innerHTML = "DD";
        document.getElementById("derece4").innerHTML = "GEÇTİ"
    } else if (ort >= 40 && ort <= 49) {
        document.getElementById("sonuc4").innerHTML = "FD";
        document.getElementById("derece4").innerHTML = "GEÇTİ"
    } else if (ort <= 39) {
        document.getElementById("sonuc4").innerHTML = "FF"
        document.getElementById("derece4").innerHTML = "KALDI"
    } else {
        document.getElementById("sonuc4").innerHTML = " GEÇERSİZ"
    }

}

function hesapla5() {
    var ara_not5 = document.getElementById("ara_not5").value;
    var donem_not5 = document.getElementById("donem_not5").value;
    var ort = (parseFloat(ara_not5) + parseFloat(donem_not5)) / 2; // string yazıyı sayıya çevirir parsefloat
    document.getElementById("ort_hesapla5").innerHTML = ort;
    if (ort >= 90 && ort <= 100) {
        document.getElementById("sonuc5").innerHTML = "AA";
        document.getElementById("derece5").innerHTML = "GEÇTİ"
    } else if (ort >= 80 && ort <= 89) {
        document.getElementById("sonuc5").innerHTML = "BA";
        document.getElementById("derece5").innerHTML = "GEÇTİ"
    } else if (ort >= 75 && ort <= 79) {
        document.getElementById("sonuc5").innerHTML = "BB";
        document.getElementById("derece5").innerHTML = "GEÇTİ"
    } else if (ort >= 70 && ort <= 74) {
        document.getElementById("sonuc5").innerHTML = "CB";
        document.getElementById("derece5").innerHTML = "GEÇTİ"
    } else if (ort >= 65 && ort <= 69) {
        document.getElementById("sonuc5").innerHTML = "CC";
        document.getElementById("derece5").innerHTML = "GEÇTİ"
    } else if (ort >= 60 && ort <= 64) {
        document.getElementById("sonuc5").innerHTML = "DC";
        document.getElementById("derece5").innerHTML = "GEÇTİ"
    } else if (ort >= 50 && ort <= 59) {
        document.getElementById("sonuc5").innerHTML = "DD";
        document.getElementById("derece5").innerHTML = "GEÇTİ"
    } else if (ort >= 40 && ort <= 49) {
        document.getElementById("sonuc5").innerHTML = "FD";
        document.getElementById("derece5").innerHTML = "GEÇTİ"
    } else if (ort <= 39) {
        document.getElementById("sonuc5").innerHTML = "FF"
        document.getElementById("derece5").innerHTML = "KALDI"
    } else {
        document.getElementById("sonuc5").innerHTML = " GEÇERSİZ"
    }

}

function hesapla6() {
    var ara_not6 = document.getElementById("ara_not6").value;
    var donem_not6 = document.getElementById("donem_not6").value;
    var ort = (parseFloat(ara_not6) + parseFloat(donem_not6)) / 2; // string yazıyı sayıya çevirir parsefloat
    document.getElementById("ort_hesapla6").innerHTML = ort;
    if (ort >= 90 && ort <= 100) {
        document.getElementById("sonuc6").innerHTML = "AA";
        document.getElementById("derece6").innerHTML = "GEÇTİ"
    } else if (ort >= 80 && ort <= 89) {
        document.getElementById("sonuc6").innerHTML = "BA";
        document.getElementById("derece6").innerHTML = "GEÇTİ"
    } else if (ort >= 75 && ort <= 79) {
        document.getElementById("sonuc6").innerHTML = "BB";
        document.getElementById("derece6").innerHTML = "GEÇTİ"
    } else if (ort >= 70 && ort <= 74) {
        document.getElementById("sonuc6").innerHTML = "CB";
        document.getElementById("derece6").innerHTML = "GEÇTİ"
    } else if (ort >= 65 && ort <= 69) {
        document.getElementById("sonuc6").innerHTML = "CC";
        document.getElementById("derece6").innerHTML = "GEÇTİ"
    } else if (ort >= 60 && ort <= 64) {
        document.getElementById("sonuc6").innerHTML = "DC";
        document.getElementById("derece6").innerHTML = "GEÇTİ"
    } else if (ort >= 50 && ort <= 59) {
        document.getElementById("sonuc6").innerHTML = "DD";
        document.getElementById("derece6").innerHTML = "GEÇTİ"
    } else if (ort >= 40 && ort <= 49) {
        document.getElementById("sonuc6").innerHTML = "FD";
        document.getElementById("derece6").innerHTML = "GEÇTİ"
    } else if (ort <= 39) {
        document.getElementById("sonuc6").innerHTML = "FF"
        document.getElementById("derece6").innerHTML = "KALDI"
    } else {
        document.getElementById("sonuc6").innerHTML = " GEÇERSİZ"
    }

}

function hesapla7() {
    var ara_not7 = document.getElementById("ara_not7").value;
    var donem_not7 = document.getElementById("donem_not7").value;
    var ort = (parseFloat(ara_not7) + parseFloat(donem_not7)) / 2; // string yazıyı sayıya çevirir parsefloat
    document.getElementById("ort_hesapla7").innerHTML = parseFloat(ort);
    if (ort >= 90 && ort <= 100) {
        document.getElementById("sonuc7").innerHTML = "AA";
        document.getElementById("derece7").innerHTML = "GEÇTİ"
    } else if (ort >= 80 && ort <= 89) {
        document.getElementById("sonuc7").innerHTML = "BA";
        document.getElementById("derece7").innerHTML = "GEÇTİ"
    } else if (ort >= 75 && ort <= 79) {
        document.getElementById("sonuc7").innerHTML = "BB";
        document.getElementById("derece7").innerHTML = "GEÇTİ"
    } else if (ort >= 70 && ort <= 74) {
        document.getElementById("sonuc7").innerHTML = "CB";
        document.getElementById("derece7").innerHTML = "GEÇTİ"
    } else if (ort >= 65 && ort <= 69) {
        document.getElementById("sonuc7").innerHTML = "CC";
        document.getElementById("derece7").innerHTML = "GEÇTİ"
    } else if (ort >= 60 && ort <= 64) {
        document.getElementById("sonuc7").innerHTML = "DC";
        document.getElementById("derece7").innerHTML = "GEÇTİ"
    } else if (ort >= 50 && ort <= 59) {
        document.getElementById("sonuc7").innerHTML = "DD";
        document.getElementById("derece7").innerHTML = "GEÇTİ"
    } else if (ort >= 40 && ort <= 49) {
        document.getElementById("sonuc7").innerHTML = "FD";
        document.getElementById("derece7").innerHTML = "GEÇTİ"
    } else if (ort <= 39) {
        document.getElementById("sonuc7").innerHTML = "FF"
        document.getElementById("derece7").innerHTML = "KALDI"
    } else {
        document.getElementById("sonuc7").innerHTML = " GEÇERSİZ"
    }

}

function hesapla8() {
    var ara_not8 = document.getElementById("ara_not8").value;
    var donem_not8 = document.getElementById("donem_not8").value;
    var ort = (parseFloat(ara_not8) + parseFloat(donem_not8)) / 2; // string yazıyı sayıya çevirir parsefloat
    document.getElementById("ort_hesapla8").innerHTML = ort;
    if (ort >= 90 && ort <= 100) {
        document.getElementById("sonuc8").innerHTML = "AA";
        document.getElementById("derece8").innerHTML = "GEÇTİ"
    } else if (ort >= 80 && ort <= 89) {
        document.getElementById("sonuc8").innerHTML = "BA";

        document.getElementById("derece8").innerHTML = "GEÇTİ"
    } else if (ort >= 75 && ort <= 79) {
        document.getElementById("sonuc8").innerHTML = "BB";

        document.getElementById("derece8").innerHTML = "GEÇTİ"
    } else if (ort >= 70 && ort <= 74) {
        document.getElementById("sonuc8").innerHTML = "CB";

        document.getElementById("derece8").innerHTML = "GEÇTİ"
    } else if (ort >= 65 && ort <= 69) {
        document.getElementById("sonuc8").innerHTML = "CC";

        document.getElementById("derece8").innerHTML = "GEÇTİ"
    } else if (ort >= 60 && ort <= 64) {
        document.getElementById("sonuc8").innerHTML = "DC";

        document.getElementById("derece8").innerHTML = "GEÇTİ"
    } else if (ort >= 50 && ort <= 59) {
        document.getElementById("sonuc8").innerHTML = "DD";

        document.getElementById("derece8").innerHTML = "GEÇTİ"
    } else if (ort >= 40 && ort <= 49) {
        document.getElementById("sonuc8").innerHTML = "FD";

        document.getElementById("derece8").innerHTML = "GEÇTİ"
    } else if (ort <= 39) {
        document.getElementById("sonuc8").innerHTML = "FF"

        document.getElementById("derece8").innerHTML = "KALDI"
    } else {
        document.getElementById("sonuc8").innerHTML = " GEÇERSİZ"
    }

}


function hesapla9() {
    var ara_not9 = document.getElementById("ara_not9").value;
    var donem_not9 = document.getElementById("donem_not9").value;
    var ort = (parseFloat(ara_not9) + parseFloat(donem_not9)) / 2; // string yazıyı sayıya çevirir parsefloat
    document.getElementById("ort_hesapla9").innerHTML = ort;
    if (ort >= 90 && ort <= 100) {
        document.getElementById("sonuc9").innerHTML = "AA";

        document.getElementById("derece9").innerHTML = "GEÇTİ"
    } else if (ort >= 80 && ort <= 89) {
        document.getElementById("sonuc9").innerHTML = "BA";
        document.getElementById("derece9").innerHTML = "GEÇTİ"
    } else if (ort >= 75 && ort <= 79) {
        document.getElementById("sonuc9").innerHTML = "BB";
        document.getElementById("derece9").innerHTML = "GEÇTİ"
    } else if (ort >= 70 && ort <= 74) {
        document.getElementById("sonuc9").innerHTML = "CB";
        document.getElementById("derece9").innerHTML = "GEÇTİ"
    } else if (ort >= 65 && ort <= 69) {
        document.getElementById("sonuc9").innerHTML = "CC";
        document.getElementById("derece9").innerHTML = "GEÇTİ"
    } else if (ort >= 60 && ort <= 64) {
        document.getElementById("sonuc9").innerHTML = "DC";
        document.getElementById("derece9").innerHTML = "GEÇTİ"
    } else if (ort >= 50 && ort <= 59) {
        document.getElementById("sonuc9").innerHTML = "DD";
        document.getElementById("derece9").innerHTML = "GEÇTİ"
    } else if (ort >= 40 && ort <= 49) {
        document.getElementById("sonuc9").innerHTML = "FD";
        document.getElementById("derece9").innerHTML = "GEÇTİ"
    } else if (ort <= 39) {
        document.getElementById("sonuc9").innerHTML = "FF"
        document.getElementById("derece9").innerHTML = "GEÇTİ"
    } else {
        document.getElementById("sonuc9").innerHTML = " GEÇERSİZ"
    }

}