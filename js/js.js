//alert('ize');
	function HatraHusz() {}
	function HatraEgy() {}
	function EloreEgy() {}
	function EloreHusz() {}
        function CikkLeptet() {}
        function ListaErtekMegnez() {}
        function ListaValt(){}
        function CsuszkaValt() {}
        function CheckboxMinValt() {}
try{
$.get('https://raw.githubusercontent.com/tuzesbalazs2/Webprog4-Beadando1/master/data.txt', function(data) {
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
var ajanlott_specialis_cimkek= [];
for (i = 0; i < splittelt.length; i++) { //alert(splittelt[i][1]);
ajanlott_specialis_cimkek[i] = splittelt[i][1].split("__label__");
	for (z = 0; z < ajanlott_specialis_cimkek[i].length; z++) { 
	ajanlott_specialis_cimkek[i][z] = ajanlott_specialis_cimkek[i][z].split(" ");
	}
}
var eredeti_cimkek= [];
for (i = 0; i < splittelt.length; i++) { 
eredeti_cimkek[i] = splittelt[i][2].split("__label__");

}
var cim= [];
for (i = 0; i < splittelt.length; i++) { 
cim[i] = splittelt[i][3];
}
var cikk_szovege= [];
for (i = 0; i < splittelt.length; i++) { 
cikk_szovege[i] = splittelt[i][4];
}

ajanlott_cimkek.shift();
ajanlott_specialis_cimkek.shift();
eredeti_cimkek.shift();
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


        CikkLeptet=function() {
          $("#szoveg").html(cikk_szovege[CikkIndex]);
document.querySelector("#eredeti_cimkek").innerHTML = "";
document.querySelector("#ajanlott_cimkek").innerHTML = "";
document.querySelector("#eredeti_cimkek_egyeb").innerHTML = "";
document.querySelector("#ajanlott_cimkek_egyeb").innerHTML = "";
for (z = 0; z < eredeti_cimkek[CikkIndex].length; z++) { 
	document.querySelector("#eredeti_cimkek").innerHTML += eredeti_cimkek[CikkIndex][z]+"<br>";
}
for (z = 0; z < ajanlott_cimkek[CikkIndex].length; z++) { 
if(ajanlott_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
	document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0]+" "+"("+ajanlott_cimkek[CikkIndex][z][1]+")"+"<br>";
}
for (z = 0; z < eredeti_cimkek[CikkIndex].length; z++) { 
	document.querySelector("#eredeti_cimkek_egyeb").innerHTML += eredeti_cimkek[CikkIndex][z]+"<br>";
}
for (z = 0; z < ajanlott_specialis_cimkek[CikkIndex].length; z++) { 
if(ajanlott_specialis_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
	document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0]+" "+"("+ajanlott_specialis_cimkek[CikkIndex][z][1]+")"+"<br>";
}
	};



	HatraHusz=function() {
	  CikkIndex -=20;
	if (CikkIndex<0){CikkIndex=cikkek.length+CikkIndex;}
	if (CikkIndex>cikkek.length-1){CikkIndex=CikkIndex-cikkek.length;}
          CikkLeptet();
  	  //alert("20 cikkel vissz�bb");
  	  //alert(CikkIndex);
	ListaErtekMegnez();
	};


	HatraEgy=function() {
	  CikkIndex --;
	if (CikkIndex<0){CikkIndex=cikkek.length+CikkIndex;}
	if (CikkIndex>cikkek.length-1){CikkIndex=CikkIndex-cikkek.length;}
          CikkLeptet();
  	  //alert("Egy cikkel vissz�bb");
  	  //alert(CikkIndex);
	ListaErtekMegnez();
	};


	EloreEgy=function() {
	  CikkIndex ++;
	if (CikkIndex<0){CikkIndex=cikkek.length+CikkIndex;}
	if (CikkIndex>cikkek.length-1){CikkIndex=CikkIndex-cikkek.length;}
          CikkLeptet();
  	  //alert("Egy cikkel el�r�bb");
  	  //alert(CikkIndex);
	ListaErtekMegnez();
	};


	EloreHusz=function() {
	  CikkIndex +=20;
	if (CikkIndex<0){CikkIndex=cikkek.length+CikkIndex;}
	if (CikkIndex>cikkek.length-1){CikkIndex=CikkIndex-cikkek.length;}
          CikkLeptet();
  	  //alert("20 cikkel el�r�bb");
  	  //alert(CikkIndex);
	ListaErtekMegnez();

	};

         ListaErtekMegnez=function() {
         var kivalaszt = document.getElementById("CikkLista");
         CikkIndex = CikkIndex + Number(kivalaszt.options[kivalaszt.selectedIndex].value);
kivalaszt.selectedIndex = 0;
         //alert(CikkIndex);
         CikkLeptet();
         ListaValt();
         };

     //    ListaErtekMegnez();


         ListaValt=function(){
              var select=document.getElementById('CikkLista');
              //var index = 0;
              //select.options[index].value = 0;
              //select.options[index].text = 'iz�';
		for (i = 0; i < 20; i++) { 
		select.options[i].text = cim[CikkIndex+i];
		}
         };

		CikkLeptet();
		ListaErtekMegnez();

        CsuszkaValt=function(){
           

             document.getElementById('CsuszkaSzovegErtek').innerHTML = document.getElementById('Csuszka').value ;

document.querySelector("#ajanlott_cimkek").innerHTML = "";
document.querySelector("#ajanlott_cimkek_egyeb").innerHTML = "";

for (z = 0; z < ajanlott_cimkek[CikkIndex].length; z++) { 
if(ajanlott_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
	document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z][0]+" "+"("+ajanlott_cimkek[CikkIndex][z][1]+")"+"<br>";
}
for (z = 0; z < ajanlott_specialis_cimkek[CikkIndex].length; z++) { 
if(ajanlott_specialis_cimkek[CikkIndex][z][1] >= document.getElementById('Csuszka').value)
	document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z][0]+" "+"("+ajanlott_specialis_cimkek[CikkIndex][z][1]+")"+"<br>";
}

        };

        CheckboxMinValt=function(){

          var CheckboxMinErtek=document.getElementById('CheckboxMin');


           // alert(document.getElementById('CheckboxMin').value);

        };


}, 'text');
} catch (err){alert(err.message);}

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
*/





   

