// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
// $(document).ready(function () {
//  $('#toggle-1').on('change', function () {
//     if (!$(this).is(':checked')) {
//       $('.navbar').show();
//     } else {
//       $('.navbar').hide();
//     }
//   });
//    $('#toggle-2').on('change', function () {
//     if (!$(this).is(':checked')) {
//       $('.hero').show();
//     } else {
//       $('.hero').hide();
//     }
//   });
//    $('#toggle-3').on('change', function () {
//     if (!$(this).is(':checked')) {
//       $('.dashboard').show();
//     } else {
//       $('.dashboard').hide();
//     }
//   });

// });
document.addEventListener("DOMContentLoaded", function() {
  const toggle1 = document.getElementById('toggle-1');
  const toggle2 = document.getElementById('toggle-2');
  const toggle3 = document.getElementById('toggle-3');
  const navbar = document.querySelector('.navbar');
  const hero = document.querySelector('.hero');
  const dashboard = document.querySelector('.dashboard');

  toggle1.addEventListener('change', function() {
    if (!toggle1.checked) {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }
  });

  toggle2.addEventListener('change', function() {
    if (!toggle2.checked) {
      hero.style.display = 'block';
    } else {
      hero.style.display = 'none';
    }
  });

  toggle3.addEventListener('change', function() {
    if (!toggle3.checked) {
      dashboard.style.display = 'block';
    } else {
      dashboard.style.display = 'none';
    }
  });
});
    