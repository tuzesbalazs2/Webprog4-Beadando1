//alert('ize');
function HatraHusz() { }
function HatraEgy() { }
function EloreEgy() { }
function EloreHusz() { }
function CikkLeptet() { }
function ListaErtekMegnez() { }
function ListaValt() { }
function CsuszkaValt() { }
function CheckboxMinValt() { }
function PrecisionRecallMegnez() { }
try {
    $.get('https://raw.githubusercontent.com/tuzesbalazs2/Webprog4-Beadando1/master/data.txt', function (data) {
        //alert(data);
        //   $(".szoveg").html(data);
        var cikkek = data.split("\n");
        var zzzzzz = cikkek.pop();
        var splittelt = [];
        for (i = 0; i < cikkek.length; i++) {
            splittelt[i] = cikkek[i].split("$$$");//
        }
        //alert(cikkek[32]);

        var ajanlott_cimkek = [];
        for (i = 0; i < splittelt.length; i++) {
            ajanlott_cimkek[i] = splittelt[i][0].split("__label__");
            for (z = 0; z < ajanlott_cimkek[i].length; z++) {
                ajanlott_cimkek[i][z] = ajanlott_cimkek[i][z].split(" ");
            }
        }
        var ajanlott_specialis_cimkek = [];
        for (i = 0; i < splittelt.length; i++) { //alert(splittelt[i][1]);
            ajanlott_specialis_cimkek[i] = splittelt[i][1].split("__label__");
            for (z = 0; z < ajanlott_specialis_cimkek[i].length; z++) {
                ajanlott_specialis_cimkek[i][z] = ajanlott_specialis_cimkek[i][z].split(" ");
            }
        }
        var eredeti_cimkek = []; var eredeti_cimkek_egyeb = [];
        for (i = 0; i < splittelt.length; i++) {
            eredeti_cimkek[i] = splittelt[i][2].split("__label__");
	    eredeti_cimkek_egyeb[i] = eredeti_cimkek[i][eredeti_cimkek[i].length-1].split(" "); eredeti_cimkek_egyeb[i].shift();
	    eredeti_cimkek[i][eredeti_cimkek[i].length-1] = eredeti_cimkek[i][eredeti_cimkek[i].length-1].split(" ")[0]+" ";
        }
	
	
        var cim = [];
        for (i = 0; i < splittelt.length; i++) {
            cim[i] = splittelt[i][3];
        }
        var cikk_szovege = [];
        for (i = 0; i < splittelt.length; i++) {
            cikk_szovege[i] = splittelt[i][4];
        }

        //ajanlott_cimkek.shift();
        //ajanlott_specialis_cimkek.shift();
        //eredeti_cimkek.shift();
        for (z = 0; z < ajanlott_cimkek.length; z++) {
            ajanlott_cimkek[z].shift();
        }
        for (z = 0; z < ajanlott_specialis_cimkek.length; z++) {
            ajanlott_specialis_cimkek[z].shift();
        }
        for (z = 0; z < eredeti_cimkek.length; z++) {
            eredeti_cimkek[z].shift();
        }



        //alert(ajanlott_cimkek[0]);
        //alert(ajanlott_specialis_cimkek[0]);
        //alert(eredeti_cimkek[0]);
        //alert(cim);
        //alert(cikk_szovege);
        //alert(splittelt[0]);
        //alert(ajanlott_cimkek);alert(ajanlott_cimkek_valoszinuseg);
        //alert(ajanlott_cimkek_valoszinuseg[i][z]);
        //alert(ajanlott_cimkek[i][z].split(" ")[1]);
        //alert(ajanlott_cimkek_valoszinuseg)[4][4][4][4];
        //alert(ajanlott_cimkek[i][z][1]);
        //alert(ajanlott_cimkek_valoszinuseg[i][0]);
        //alert(ajanlott_cimkek[3][3][0]);


        var CikkIndex = 0;


        CikkLeptet = function () {
            $("#szoveg").html(cikk_szovege[CikkIndex]);
            document.querySelector("#eredeti_cimkek").innerHTML = "";
            document.querySelector("#ajanlott_cimkek").innerHTML = "";
            document.querySelector("#eredeti_cimkek_egyeb").innerHTML = "";
            document.querySelector("#ajanlott_cimkek_egyeb").innerHTML = "";
            for (z = 0; z < eredeti_cimkek[CikkIndex].length; z++) {
                
                    document.querySelector("#eredeti_cimkek").innerHTML += eredeti_cimkek[CikkIndex][z] + "<br>";
                
            }
	    for (z = 0; z < eredeti_cimkek_egyeb[CikkIndex].length; z++) {
                        if ((eredeti_cimkek_egyeb[CikkIndex][z].indexOf("geography__") !== -1) || (eredeti_cimkek_egyeb[CikkIndex][z].indexOf("organization__") !== -1) || (eredeti_cimkek_egyeb[CikkIndex][z].indexOf("person__") !== -1)) {
                    document.querySelector("#eredeti_cimkek_egyeb").innerHTML += eredeti_cimkek_egyeb[CikkIndex][z] + "<br>";
                      }
            }
            
            for (z = 0; z < ajanlott_cimkek[CikkIndex].length; z++) {
                if (ajanlott_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                    document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_cimkek[CikkIndex][z][1] + ")" + "<br>";
            }
            for (z = 0; z < ajanlott_specialis_cimkek[CikkIndex].length; z++) {
                if ((ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("geography__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("organization__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("person__") !== -1)) {
                    //alert('az');
                    if (ajanlott_specialis_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                        document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_specialis_cimkek[CikkIndex][z][1] + ")" + "<br>";
                }//n
            }
            CheckboxMinValt();
            document.querySelector("#cardok").innerHTML = document.querySelector("#cardok").innerHTML.replace(/@@/g, ' ');
	    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	    var HelyesTalalatok = 0;
            for (z = 0; z < eredeti_cimkek[CikkIndex].length; z++) {
                
                    
                    for (i = 0; i < ajanlott_cimkek[CikkIndex].length; i++) {
                        
                        if (ajanlott_cimkek[CikkIndex][i][0] === eredeti_cimkek[CikkIndex][z].trim()) {

                            HelyesTalalatok++;
                            //alert(HelyesTalalatok);
			    //alert(ajanlott_cimkek[CikkIndex].length);
                        }
                    }
            } 


            for (z = 0; z < eredeti_cimkek_egyeb[CikkIndex].length; z++) {
                
                    
                    for (i = 0; i < ajanlott_specialis_cimkek[CikkIndex].length; i++) {
                        
                        if (ajanlott_specialis_cimkek[CikkIndex][i][0] === eredeti_cimkek_egyeb[CikkIndex][z]) {

                            HelyesTalalatok++;
                            //alert(HelyesTalalatok);
			    //alert(ajanlott_cimkek[CikkIndex].length);
                        }
                    }
            } 

            
            document.getElementById("PrecisionSzovegErtek").innerHTML = (HelyesTalalatok / (ajanlott_cimkek[CikkIndex].length + ajanlott_specialis_cimkek[CikkIndex].length)).toFixed(3);
            document.getElementById("RecallSzovegErtek").innerHTML = (HelyesTalalatok / (eredeti_cimkek[CikkIndex].length + eredeti_cimkek_egyeb[CikkIndex].length)).toFixed(3);
            //alert (HelyesTalalatok);

            
        };



        HatraHusz = function () {
            CikkIndex -= 20;
            if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
            if (CikkIndex > cikkek.length - 1) { CikkIndex = CikkIndex - cikkek.length; }
            CikkLeptet();
            //alert("20 cikkel visszább");
            //alert(CikkIndex);
            ListaErtekMegnez();
        };


        HatraEgy = function () {
            CikkIndex--;
            if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
            if (CikkIndex > cikkek.length - 1) { CikkIndex = CikkIndex - cikkek.length; }
            CikkLeptet();
            //alert("Egy cikkel visszább");
            //alert(CikkIndex);
            ListaErtekMegnez();
        };


        EloreEgy = function () {
            CikkIndex++;
            if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
            if (CikkIndex > cikkek.length - 1) { CikkIndex = CikkIndex - cikkek.length; }
            CikkLeptet();
            //alert("Egy cikkel elõrébb");
            //alert(CikkIndex);
            ListaErtekMegnez();
        };


        EloreHusz = function () {
            CikkIndex += 20;
            if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
            if (CikkIndex > cikkek.length - 1) { CikkIndex = CikkIndex - cikkek.length; }
            CikkLeptet();
            //alert("20 cikkel elõrébb");
            //alert(CikkIndex);
            ListaErtekMegnez();

        };

        ListaErtekMegnez = function () {
            var kivalaszt = document.getElementById("CikkLista");
            CikkIndex = CikkIndex + Number(kivalaszt.options[kivalaszt.selectedIndex].value);
            if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
            if (CikkIndex > cikkek.length - 1) { CikkIndex = CikkIndex - cikkek.length; }
            kivalaszt.selectedIndex = 0;
            //alert(CikkIndex);
            CikkLeptet();
            ListaValt();
        };

        //    ListaErtekMegnez();


        ListaValt = function () {
            var select = document.getElementById('CikkLista');
            //var index = 0;
            //select.options[index].value = 0;
            //select.options[index].text = 'izé';
            for (i = 0; i < 20; i++) {

            //if (CikkIndex < 0) { CikkIndex = cikkek.length + CikkIndex; }
             if ((CikkIndex + i) > cikkek.length - 1) { select.options[i].text = cim[CikkIndex + i -cikkek.length]; }
                else {select.options[i].text = cim[CikkIndex + i];}
            }
        };
        CikkLeptet();
        ListaErtekMegnez();

        CsuszkaValt = function () {


            document.getElementById('CsuszkaSzovegErtek').innerHTML = document.getElementById('Csuszka').value;

            document.querySelector("#ajanlott_cimkek").innerHTML = "";
            document.querySelector("#ajanlott_cimkek_egyeb").innerHTML = "";

            for (z = 0; z < ajanlott_cimkek[CikkIndex].length; z++) {
                if (ajanlott_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                    document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_cimkek[CikkIndex][z][1] + ")" + "<br>";
            }
            for (z = 0; z < ajanlott_specialis_cimkek[CikkIndex].length; z++) {
                if ((ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("geography__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("organization__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("person__") !== -1)) {
                    if (ajanlott_specialis_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                        document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_specialis_cimkek[CikkIndex][z][1] + ")" + "<br>";
                }
            }
	    var CheckboxMinErtek = document.getElementById('CheckboxMin').checked;
            if (CheckboxMinErtek == true){
                                 document.querySelector("#ajanlott_cimkek").innerHTML = "";
                document.querySelector("#ajanlott_cimkek_egyeb").innerHTML = "";
                var az = 0;
                for (z = 0; z < ajanlott_cimkek[CikkIndex].length; z++) {
                    if (z <= 2) {
                        document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_cimkek[CikkIndex][z][1] + ")" + "<br>";
                    }
                    else {
                        if (ajanlott_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                            document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_cimkek[CikkIndex][z][1] + ")" + "<br>";
                    }
                }
                for (z = 0; z < ajanlott_specialis_cimkek[CikkIndex].length; z++) {
                    if (az > 2) {
                        if ((ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("geography__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("organization__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("person__") !== -1)) {
                            if (ajanlott_specialis_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                                document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_specialis_cimkek[CikkIndex][z][1] + ")" + "<br>";
                        }
                    }
                    if ((az <= 2))
                        if ((ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("geography__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("organization__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("person__") !== -1)) {
                            document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_specialis_cimkek[CikkIndex][z][1] + ")" + "<br>";
                            az++;
                        }
                    //if (az > 2){break;}
                }
               }
            	

            document.querySelector("#cardok").innerHTML = document.querySelector("#cardok").innerHTML.replace(/@@/g, ' ');

        };

        CheckboxMinValt = function () {

            var CheckboxMinErtek = document.getElementById('CheckboxMin').checked;
            if (CheckboxMinErtek == true) {

                document.querySelector("#ajanlott_cimkek").innerHTML = "";
                document.querySelector("#ajanlott_cimkek_egyeb").innerHTML = "";
                var az = 0;
                for (z = 0; z < ajanlott_cimkek[CikkIndex].length; z++) {
                    if (z <= 2) {
                        document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_cimkek[CikkIndex][z][1] + ")" + "<br>";
                    }
                    else {
                        if (ajanlott_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                            document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_cimkek[CikkIndex][z][1] + ")" + "<br>";
                    }
                }
                for (z = 0; z < ajanlott_specialis_cimkek[CikkIndex].length; z++) {
                    if ((az <= 2))
                        if ((ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("geography__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("organization__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("person__") !== -1)) {
                            document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_specialis_cimkek[CikkIndex][z][1] + ")" + "<br>";
                            az++;
                        }
                    //if (az > 2){break;}
                    if (az > 2) {
                        if ((ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("geography__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("organization__") !== -1) || (ajanlott_specialis_cimkek[CikkIndex][z][0].indexOf("person__") !== -1)) {
                            if (ajanlott_specialis_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
                                document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0] + " " + "(" + ajanlott_specialis_cimkek[CikkIndex][z][1] + ")" + "<br>";
                        }
                    }
                }

            }

            else { CsuszkaValt(); }


            // alert(document.getElementById('CheckboxMin').checked);
            document.querySelector("#cardok").innerHTML = document.querySelector("#cardok").innerHTML.replace(/@@/g, ' ');
        };



        PrecisionRecallMegnez = function () {
	    //alert('a');
            //alert ("elart!!!44");
            //alert (Array.prototype.include);
        };


//aler()
//alert(eredeti_cimkek[CikkIndex][3]);
//alert(eredeti_cimkek_egyeb[CikkIndex][0]);
    }, 'text');
} catch (err) { alert(err.message); }

/*
var z;var splittelt;
for (x of cikkek) {
z = 0;
  splittelt[z] = x.split("$$$");//
z += 1;
}
var valtozo = document.body.innerHTML + eredeti_cimkek[CikkIndex][1]+"\n");
$("#eredeti_cimkek").html(valtozo);"u";alert('fos');// m
var zzzzzz =  = ajanlott_cimkek.filter(function (el) {return el != null;});
var ajanlott_cimkek = ajanlott_cimkek.filter(function (el) {return el != undefined;});
var ajanlott_specialis_cimkek = ajanlott_specialis_cimkek.filter(function (el) {return el != undefined;});
var eredeti_cimkek = eredeti_cimkek.filter(function (el) {return el != undefined;});
document.querySelector("#cardok").style.display = "none";
*/







