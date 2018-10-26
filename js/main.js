/* slider */

function showSlider() {
	var featuresSliderButtons = document.querySelectorAll('.features-slider-button');
	var featuresItems = document.querySelectorAll('.features-item');

	function changeSlide(evt) {
		evt.preventDefault();
		for (var j = 0; j < featuresSliderButtons.length; j++) {
			featuresSliderButtons[j].classList.remove('active');
		}
		this.classList.add('active');
		
		for (var r = 0; r < featuresItems.length; r++) {
			featuresItems[r].classList.add('visually-hidden');
			if(featuresSliderButtons[r].classList.contains('active')) {
				featuresItems[r].classList.remove('visually-hidden');
			}
		}
	}

	for (var i = 0; i < featuresSliderButtons.length; i++) {
		featuresSliderButtons[i].addEventListener('click', changeSlide);
	}
}

showSlider();

/* modal contact us */

function toggleModal() {
	
}

toggleModal();

var contactUsLink = document.querySelector('.contact-us-link');
var modalContact = document.querySelector('.modal-contact');
var modalOverlay = document.querySelector('.modal-overlay');
var modalClose = document.querySelector('.modal-close');

var form = document.querySelector('.contact-form');
var name = document.querySelector('[name=name]');
var email = document.querySelector('[name=email]');
var text = document.querySelector('[name=text]');

function modalHide(evt) {
	evt.preventDefault();
	modalContact.classList.remove('modal-show');
	modalOverlay.classList.remove('overlay-show');
}

function validateForm(evt) {
	if(!name.value || !email.value || !text.value) {
		evt.preventDefault();
		if(!name.value) {
			
		}
	}
}

function modalShow(evt) {
	evt.preventDefault();
	modalContact.classList.add('modal-show');
	modalOverlay.classList.add('overlay-show');
}

contactUsLink.addEventListener('click', modalShow);

form.addEventListener('submit', validateForm)

modalOverlay.addEventListener('click', modalHide);
modalClose.addEventListener('click', modalHide);
