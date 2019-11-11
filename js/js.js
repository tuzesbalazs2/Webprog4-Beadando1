//alert('ize');
	function HatraHusz() {}
	function HatraEgy() {}
	function EloreEgy() {}
	function EloreHusz() {}
        function CikkLeptet() {}
        function ListaErtekMegnez() {}
        function ListaValt(){}
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
	for (z = 0; z < eredeti_cimkek[i].length; z++) { 
	eredeti_cimkek[i][z] = eredeti_cimkek[i][z].split(" ");
	}
}
var cim= [];
for (i = 0; i < splittelt.length; i++) { 
cim[i] = splittelt[i][3];
}
var cikk_szovege= [];
for (i = 0; i < splittelt.length; i++) { 
cikk_szovege[i] = splittelt[i][4];
}

var zzzzzz = ajanlott_cimkek.shift();
var zzzzzz = ajanlott_specialis_cimkek.shift();
var zzzzzz = eredeti_cimkek.shift();
var ajanlott_cimkek = ajanlott_cimkek.filter(Boolean);
var ajanlott_specialis_cimkek = ajanlott_specialis_cimkek.filter(Boolean);
var eredeti_cimkek = eredeti_cimkek.filter(Boolean);

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
for (z = 0; z < eredeti_cimkek[CikkIndex].length; z++) { 
	document.querySelector("#eredeti_cimkek").innerHTML += eredeti_cimkek[CikkIndex][z]+"<br>";
}
for (z = 0; z < ajanlott_cimkek[CikkIndex].length; z++) { 
	document.querySelector("#ajanlott_cimkek").innerHTML += ajanlott_cimkek[CikkIndex][z]+"<br>";
}
for (z = 0; z < eredeti_cimkek[CikkIndex].length; z++) { 
	document.querySelector("#eredeti_cimkek_egyeb").innerHTML += eredeti_cimkek[CikkIndex][z]+"<br>";
}
for (z = 0; z < ajanlott_specialis_cimkek[CikkIndex].length; z++) { 
	document.querySelector("#ajanlott_cimkek_egyeb").innerHTML += ajanlott_specialis_cimkek[CikkIndex][z]+"<br>";
}
	};

        CikkLeptet();

	HatraHusz=function() {
	  CikkIndex -=20;
	if (CikkIndex<0){CikkIndex=cikkek.length+CikkIndex;}
	if (CikkIndex>cikkek.length-1){CikkIndex=CikkIndex-cikkek.length;}
          CikkLeptet();
  	  alert("20 cikkel visszább");
  	  alert(CikkIndex);
	};


	HatraEgy=function() {
	  CikkIndex --;
	if (CikkIndex<0){CikkIndex=cikkek.length+CikkIndex;}
	if (CikkIndex>cikkek.length-1){CikkIndex=CikkIndex-cikkek.length;}
          CikkLeptet();
  	  alert("Egy cikkel visszább");
  	  alert(CikkIndex);
	};


	EloreEgy=function() {
	  CikkIndex ++;
	if (CikkIndex<0){CikkIndex=cikkek.length+CikkIndex;}
	if (CikkIndex>cikkek.length-1){CikkIndex=CikkIndex-cikkek.length;}
          CikkLeptet();
  	  alert("Egy cikkel elõrébb");
  	  alert(CikkIndex);
	};


	EloreHusz=function() {
	  CikkIndex +=20;
	if (CikkIndex<0){CikkIndex=cikkek.length+CikkIndex;}
	if (CikkIndex>cikkek.length-1){CikkIndex=CikkIndex-cikkek.length;}
          CikkLeptet();
  	  alert("20 cikkel elõrébb");
  	  alert(CikkIndex);

	};

         ListaErtekMegnez=function() {
         var kivalaszt = document.getElementById("CikkLista");
         CikkIndex = CikkIndex + Number(kivalaszt.options[kivalaszt.selectedIndex].value);

         alert(CikkIndex);
         CikkLeptet();
         ListaValt();
         };

     //    ListaErtekMegnez();


         ListaValt=function(){
              var select=document.getElementById('CikkLista');
              var index = 0;
              //select.options[index].value = 0;
              //select.options[index].text = 'izé';
                select.options[CikkIndex].text = 'izé';
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





   

