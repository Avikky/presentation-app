$(document).ready(function () {
	// Smooth Scrolling
	$('.btn').on('click', function (e) {
		if (this.hash !== '') {
			e.preventDefault()
			const hash = this.hash;
			$('html, body').animate({
					scrollTop: $(hash).offset().top
				},
				800
			);
		}
	});
});

// Function to Toggle Modal box
// Get modal box
const modalBox = document.getElementById('modalBox');
// Get modal trigger btn
const modalTrigger = document.getElementById('modalBtn');
// Get Modal close Btn
const modalCloseBtn = document.querySelector('#closeModalBtn');
// get Modal form submit Btn
const formSubmitBtn = document.querySelector('submitBtn');
// get modal container
const modalContainer = document.querySelector('#modalBox .container');
// Listen for modal trigger click
modalTrigger.addEventListener('click', displayModal);

// Listen for close btn click
modalCloseBtn.addEventListener('click', closeModal);

// // function to display Modal box
function displayModal() {
	modalBox.style.display = 'block';
	modalTrigger.style.display = 'none';
	if (modalContainer.offsetWidth >= 802) {
		console.log('hello this me offsetvalue');
		formSubmitBtn.style.display = 'none';
		commentTab.style.display = 'none';
		questionTab.style.display = 'none';
	}
}

function closeModal(e) {
	modalBox.style.display = 'none';
	modalTrigger.style.display = 'block';
}

// controlling the mobile tab view of the modal box
// Getting all the element associated for the tab

const tabHeader = document.querySelector('#tabs');
const tabLinks = document.querySelectorAll('.tab');
const tabOne = document.querySelector('#tab1');
const tabTwo = document.querySelector('#tab2');
const tabThree = document.querySelector('#tab3');
const formTab = document.querySelector('#form-tab');
const commentTab = document.querySelector('#comment-tab');
const questionTab = document.querySelector('#question-tab');

// Listening for a tab click
tabOne.addEventListener('click', tabOneSwitch);
// Switching TabOne Function
function tabOneSwitch() {
	const getclassName = tabOne.getAttribute('class');
	if (getclassName === '') {
		tabOne.classList.add('active');
		tabTwo.classList.remove('active');
		tabThree.classList.remove('active');
		commentTab.style.display = 'none';
		questionTab.style.display = 'none';
		formTab.style.display = 'block';
	} else {
		formTab.style.display = 'none';
	}
}

tabTwo.addEventListener('click', tabTwoSwitch);
// Switching TabTwo Function
function tabTwoSwitch(e) {
	const getclassName = tabTwo.getAttribute('class');
	if (getclassName === '') {
		tabTwo.classList.add('active');
		tabOne.classList.remove('active');
		tabThree.classList.remove('active');
		formTab.style.display = 'none';
		questionTab.style.display = 'none';
		commentTab.style.display = 'block';
	} else {
		commentTab.style.display = 'none';

	}

}

tabThree.addEventListener('click', tabThreeSwitch);
// Switching TabThree Function
function tabThreeSwitch(e) {
	const getclassName = tabThree.getAttribute('class');
	if (getclassName === '') {
		tabThree.classList.add('active');
		tabOne.classList.remove('active');
		tabTwo.classList.remove('active');
		questionTab.style.display = 'block';
		commentTab.style.display = 'none';
		formTab.style.display = 'none';
	} else {
		questionTab.style.display = 'none';
	}

}


const getModalContainerWidth = window.getComputedStyle(modalContainer).getPropertyValue('width');
console.log(getModalContainerWidth);


modalBox.addEventListener('resize', retainInitialStyle);

function retainInitialStyle() {
	if (window.screenX < 990) {
		formTab.style.display = 'none';
		commentTab.style.display = 'none';
		questionTab.stle.display = 'none';
	}

}