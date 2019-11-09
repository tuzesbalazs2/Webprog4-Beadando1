try{
$.get('https://raw.githubusercontent.com/tuzesbalazs2/Webprog4-Beadando1/master/data.txt', function(data) {
//alert(data);
   $(".szoveg").html(data);
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
alert(ajanlott_cimkek[3][3][0]);

}, 'text');
} catch (err){alert(err.message);}

/*
var z;var splittelt;
for (x of cikkek) {
z = 0;
  splittelt[z] = x.split("$$$");//
z += 1;
}
*/

