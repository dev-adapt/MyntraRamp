document.getElementById('toggle').addEventListener('change', function() {
    if (this.checked) {
        window.location.href = '../Structure/ramp.html';
    }
  
  });

  // Set the date we're counting down to
var countDownDate = new Date("August 1, 2024 12:15:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + " days " + hours + " hours" + " left"
  ;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function lock(){
    document.getElementById("submit-btn").innerHTML = 'Locked';
}

let count = 0;
let btn = document.getElementById("wishlist-btn");
let disp = document.getElementById("display");
btn.onclick = function () {
            count++;
disp.innerHTML = count;
}

document.addEventListener('DOMContentLoaded', (event) => {
    btn.addEventListener('click', function handleClick() {
        btn.classList.add('clicked');
        btn.removeEventListener('click', handleClick);
    });
});



let count2 = 0;
let btn2 = document.getElementById("wishlist-btn2");
let disp2 = document.getElementById("display2");
 
btn2.onclick = function () {
            count2++;
disp2.innerHTML = count2;
}
document.addEventListener('DOMContentLoaded', (event) => {
    btn2.addEventListener('click', function handleClick() {
        btn2.classList.add('clicked');
        btn2.removeEventListener('click', handleClick);
    });
});


let count3 = 0;
let btn3 = document.getElementById("wishlist-btn3");
let disp3 = document.getElementById("display3");
 
btn3.onclick = function () {
            count3++;
disp3.innerHTML = count3;
}
document.addEventListener('DOMContentLoaded', (event) => {
    btn3.addEventListener('click', function handleClick() {
        btn3.classList.add('clicked');
        btn3.removeEventListener('click', handleClick);
    });
});

let count4 = 0;
let btn4 = document.getElementById("wishlist-btn4");
let disp4 = document.getElementById("display4");
 
btn4.onclick = function () {
            count4++;
disp4.innerHTML = count4;
}
document.addEventListener('DOMContentLoaded', (event) => {
    btn4.addEventListener('click', function handleClick() {
        btn4.classList.add('clicked');
        btn4.removeEventListener('click', handleClick);
    });
});

let count5 = 0;
let btn5 = document.getElementById("wishlist-btn5");
let disp5 = document.getElementById("display5");
 
btn5.onclick = function () {
            count5++;
disp5.innerHTML = count5;
}
document.addEventListener('DOMContentLoaded', (event) => {
    btn5.addEventListener('click', function handleClick() {
        btn5.classList.add('clicked');
        btn5.removeEventListener('click', handleClick);
    });
});



let count6 = 0;
let btn6 = document.getElementById("wishlist-btn6");
let disp6 = document.getElementById("display6");
 
btn6.onclick = function () {
            count6++;
disp6.innerHTML = count6;
}
document.addEventListener('DOMContentLoaded', (event) => {
    btn6.addEventListener('click', function handleClick() {
        btn6.classList.add('clicked');
        btn6.removeEventListener('click', handleClick);
    });
});


let count7 = 0;
let btn7 = document.getElementById("wishlist-btn7");
let disp7 = document.getElementById("display7");
 
btn7.onclick = function () {
            count7++;
disp7.innerHTML = count7;
}
document.addEventListener('DOMContentLoaded', (event) => {
    btn7.addEventListener('click', function handleClick() {
        btn7.classList.add('clicked');
        btn7.removeEventListener('click', handleClick);
    });
});


let count8 = 0;
let btn8 = document.getElementById("wishlist-btn8");
let disp8 = document.getElementById("display8");
 
btn8.onclick = function () {
            count8++;
disp8.innerHTML = count8;
}
document.addEventListener('DOMContentLoaded', (event) => {
    btn8.addEventListener('click', function handleClick() {
        btn8.classList.add('clicked');
        btn8.removeEventListener('click', handleClick);
    });
});


function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let match;
    while (match = regex.exec(queryString)) {
        params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }
    return params;
}

// Get the query parameters
const params = getQueryParams();

// Display the name in the message
if (params.name) {
    document.getElementById('message').innerText = `${params.name}`;
}