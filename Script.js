window.onload = function() {
  if (!localStorage.getItem('popupDisplayed')) {
    document.getElementById('popup').style.display = 'block';
    localStorage.setItem('popupDisplayed', 'true');
  }
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const birthdayMessages = document.querySelectorAll('.birthdayMessage');
    let index = 0;

    function showNextMessage() {
        birthdayMessages.forEach(message => {
            message.style.display = 'none';
        });

        birthdayMessages[index].style.display = 'block';
        index = (index + 1) % birthdayMessages.length;
    }

    showNextMessage();
    setInterval(showNextMessage, 5000); 
});

document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
              panel.style.padding = "0 18px";
          } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
              panel.style.padding = "18px 18px";
          }
      });
  }
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const newTransform = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${newTransform}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(() => {
        moveSlide(1);
    }, 3000); // Change slide every 3 seconds
});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}



