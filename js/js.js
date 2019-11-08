try{
$.get('https://raw.githubusercontent.com/tuzesbalazs2/Webprog4-Beadando1/master/data.txt', function(data) {
//alert(data);
   $(".card-body p").html(data);
}, 'text');
} catch (err){alert(err.message);}