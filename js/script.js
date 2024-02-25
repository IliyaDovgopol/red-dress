let myBurger = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burger-menu');
let burgerTransparent = document.querySelector('.burger-transparent');
let a = document.querySelector('a');




function changeLang() {



	let paragraph = document.getElementById('first-text');
	let langButton = document.getElementById('language');
	let langBurgButton = document.getElementById('burg-language');
	let about = document.getElementById('about');
	let poslugy = document.getElementById('poslugy');
	let process = document.getElementById('process');
	let contact = document.getElementById('contact');
	let order = document.getElementById('order');
	let burgOrder = document.getElementById('burg-order');
	let firstCont = document.getElementById('first-cont');
	let why = document.getElementById('why');
	let baza = document.getElementById('baza');
	let people = document.getElementById('people');
	let ourRespose = document.getElementById('response');
	let ourService = document.getElementById('our-service');
	let peoples = document.getElementById('peoples');
	let one = document.getElementById('people-one');
	let two = document.getElementById('people-two');
	let three = document.getElementById('people-three');
	let four = document.getElementById('people-four');
	let five = document.getElementById('people-five');
	let six = document.getElementById('people-six');
	let work = document.getElementById('work');
	let workText = document.getElementById('work-text');
	let details = document.getElementById('details');
	let stepOne = document.getElementById('step-one');
	let stepTwo = document.getElementById('step-two');
	let stepThree = document.getElementById('step-three');
	let stepFour = document.getElementById('step-four');
	let persTitle = document.getElementById('pers-title');
	let persTextOne = document.getElementById('pers-text-one');
	let persTextTwo = document.getElementById('pers-text-two');
	let persTextThree = document.getElementById('pers-text-three');
	let persTextFour = document.getElementById('pers-text-four');
	let aboutUs = document.getElementById('about-us');
	let titleOrder = document.getElementById('title-order');
	let OrderTitle = document.getElementById('order-title');
	let formTitle = document.getElementById('form-title');
	let sendButton = document.getElementById('send-button');
	let socialMedia = document.getElementById('social-media');
	let callUs = document.getElementById('call-us');
	let textUs = document.getElementById('text-us');
	let phoneNum = document.getElementById('phone-num');
	let company = document.getElementById('company');
	let listContacts = document.getElementById('list-contacts');
	let listAbout = document.getElementById('list-about');
	let listBlog = document.getElementById('list-blog');
	let footerSocial = document.getElementById('footer-social');


	if (paragraph.innerHTML === "Агенція по підбору домашнього персоналу") {
        paragraph.innerHTML = "Agency for recruitment of domestic staff";
		langButton.innerHTML = "UA";
		langBurgButton.innerHTML = "UA";
		about.innerHTML = "ABOUT";
		poslugy.innerHTML = "SERVICES";
		process.innerHTML = "PROCESS";
		contact.innerHTML = "CONTACT";
		order.innerHTML = "ORDER STAFF";
		burgOrder.innerHTML = "ORDER STAFF";
		firstCont.innerHTML = "With our help, you will find the people you need";
		why.innerHTML = "Why us?";
		baza.innerHTML = "We have a large base of qualified specialists.";
		people.innerHTML = "We will select certain verified people according to your requirements and needs.";
		ourRespose.innerHTML = "We are responsible for ensuring that you are satisfied with the work of our employees.";
		ourService.innerHTML = "We will select people for you in the shortest possible time";
		peoples.innerHTML = "We have at our disposal all domestic workers that you may need in the household";
		one.innerHTML = "Nanny";
		two.innerHTML = "Governesses";
		three.innerHTML = "Cleaners";
		four.innerHTML = "Gardeners";
		five.innerHTML = "Drivers";
		six.innerHTML = "Cooks";
		work.innerHTML = "How does our workflow work?";
		workText.innerHTML = "Do you want to find a carer, nanny, maid or other helpers? \"Family Happiness\" company provides a personalized approach to each customer.";
		details.innerHTML = "All details";
		stepOne.innerHTML = "You are submitting an application";
		stepTwo.innerHTML = "We are having a meeting";
		stepThree.innerHTML = "We are doing a trial period";
		stepFour.innerHTML = "We sign the contract";
		persTitle.innerHTML = "Name and Surname";
		persTextOne.innerHTML = "Founder of \"Family happiness\" organization";
		persTextTwo.innerHTML = "Studied HRM (human resource management) at Kyiv-Mohyla Business School (kmbs)";
		persTextThree.innerHTML = "6 years of experience as an HR director in large national and foreign companies";
		persTextFour.innerHTML = "Since 2008, she specializes in household management";
		aboutUs.innerHTML = "About us";
		titleOrder.innerHTML = "Contact us";
		OrderTitle.innerHTML = "Submit an application";
		formTitle.innerHTML = "I am looking for staff";
		sendButton.innerHTML = "Send";
		socialMedia.innerHTML = "We are on social networks";
		callUs.innerHTML = "Call us";
		textUs.innerHTML = "Text";
		phoneNum.innerHTML = "Call us: 38-012-345-67-89";
		company.innerHTML = "Company";
		listContacts.innerHTML = "Contacts";
		listAbout.innerHTML = "About us";
		listBlog.innerHTML = "Blog";
		footerSocial.innerHTML = "Social media";
    } else {
        paragraph.innerHTML = "Агенція по підбору домашнього персоналу";
		langButton.innerHTML = "EN";
		langBurgButton.innerHTML = "EN";
		about.innerHTML = "ПРО НАС";
		poslugy.innerHTML = "ПОСЛУГИ";
		process.innerHTML = "ПРОЦЕС";
		contact.innerHTML = "КОНТАКТИ";
		order.innerHTML = "ЗАМОВИТИ ПЕРСОНАЛ";
		burgOrder.innerHTML = "ЗАМОВИТИ ПЕРСОНАЛ";
		firstCont.innerHTML = "З нашою допомогою Ви знайдете потрібних Вам людей";
		why.innerHTML = "Чому саме ми?";
		baza.innerHTML = "У нас є велика база кваліфікованих спеціалістів.";
		people.innerHTML = "Ми підберемо тих чи інших перевірених людей за вашими вимогами та потребами.";
		ourRespose.innerHTML = "Ми несемо відповідальність за те, щоб ви були задоволені роботою наших працівників.";
		ourService.innerHTML = "Ми підберемо Вам людей у найкоротші терміни";
		peoples.innerHTML = "Ми маємо у своєму розпорядженні всіх домашніх працівників, які можуть Вам знадобитися в домогосподарстві";
		one.innerHTML = "Няні";
		two.innerHTML = "Гувернантки";
		three.innerHTML = "Прибиральниці";
		four.innerHTML = "Садівники";
		five.innerHTML = "Водії";
		six.innerHTML = "Кухарі";
		work.innerHTML = "Як триває наш робочий процес?";
		workText.innerHTML = 'Бажаєте знайти доглядальницю, няню, покоївку чи інших помічників? Компанія "Family Happiness" надає персоналізований підхід до кожного замовника.		';
		details.innerHTML = "Всі деталі";
		stepOne.innerHTML = "Ви залишаєте заявку";
		stepTwo.innerHTML = "Проводимо зустріч";
		stepThree.innerHTML = "Випробувальний термін";
		stepFour.innerHTML = "Підписуємо договір";
		persTitle.innerHTML = "Ім'я та Фамілія";
		persTextOne.innerHTML = "Засновник організації \"Family happiness\"";
		persTextTwo.innerHTML = "Вивчав HRM (управління людськими ресурсами) в Kyiv-Mohyla Business School (kmbs)		";
		persTextThree.innerHTML = "6 років досвіду роботи HR-директором у великих національних і закордонних компаніях";
		persTextFour.innerHTML = "З 2008 р спеціалізується на питаннях управління домашнім господарством";
		aboutUs.innerHTML = "Про нас";
		titleOrder.innerHTML = "Зв'яжіться з нами";
		OrderTitle.innerHTML = "Залиште заявку";
		formTitle.innerHTML = "Я шукаю персонал";
		sendButton.innerHTML = "Відправити";
		socialMedia.innerHTML = "Ми в соціальних мережах";
		callUs.innerHTML = "Телефонуйте нам";
		textUs.innerHTML = "Пишіть";
		phoneNum.innerHTML = "Подзвоніть нам: 38-012-345-67-89";
		company.innerHTML = "Компанія";
		listContacts.innerHTML = "Контакти";
		listAbout.innerHTML = "Про нас";
		listBlog.innerHTML = "Блог";
		footerSocial.innerHTML = "Соцмережі";
	}
}

let userLang = navigator.language || navigator.userLanguage;
if (userLang != "uk" & userLang != "ru") {
	changeLang();
}

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
