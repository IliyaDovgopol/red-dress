let myBurger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');
let burgerTransparent = document.querySelector('.burger-transparent');
let a = document.querySelector('a');


function burger() {
	let burgerWidth = burgerMenu.style.width;
	if (burgerWidth == "0px") {
		burgerMenu.style.width = "80vw";
		burgerTransparent.style.width = "100vw";
		myBurger.style.background = "url(img/close.png)";
		myBurger.style.backgroundSize = "cover";
	}
	else {
		burgerMenu.style.width = "0px";
		burgerTransparent.style.width = "0px";
		myBurger.style.background = "url(img/menu.png)";
		myBurger.style.backgroundSize = "cover";
	}
}

function contact() {
	const element = document.getElementById("box");

	const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y,
  behavior: 'smooth'
});
}

function order() {
	const element = document.getElementById("contacts");

	const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y,
  behavior: 'smooth'
});
}

function process() {
	const element = document.getElementById("process");

	const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y,
  behavior: 'smooth'
});
}


function poslugy() {
	const element = document.getElementById("personal");

	const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y,
  behavior: 'smooth'
});
}

function about() {
	const element = document.getElementById("about");

	const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y,
  behavior: 'smooth'
});
}



jQuery(document).ready(function () {
     
    $(".phone").mask("+380 (99) 999 99 99"); 
   
  
   jQuery('.send-form').click( function() {
       var form = jQuery(this).closest('form');
       
       if ( form.valid() ) {
           form.css('opacity','.5');
           var actUrl = form.attr('action');

           jQuery.ajax({
               url: actUrl,
               type: 'post',
               dataType: 'html',
               data: form.serialize(),
               success: function(data) {
                   form.html(data);
                   form.css('opacity','1');
                   //form.find('.status').html('форма отправлена успешно');
                   //$('#myModal').modal('show') // для бутстрапа
               },
               error:	 function() {
                    form.find('.status').html('серверна помилка');
               }
           });
       }
   });





});