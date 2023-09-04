// Higher Order Function adalah function yang beroperasi pada function yang lain, baik itu digunakan dalam argument, maupun sebagai return value

/**
 * Kenapa menggunakan higher order function?
 * 1. Abstraksi, untuk membuat code yang kita buat bisa lebih sederhana/simple. Karena dengan menggunakan function artinya menyembunyikan kerumitan. "Semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya.".
 * 2. Functional programming, dengan melakukan pendekatan ke functional programming dapat membuat program kita lebih efektif, aman, dan efisien.
 */

// Function kerjakanTugas disebut higher order function, dan jika memiliki function sebagai argument disebut callback
function kerjakanTugas(matakuliah, selesai) {
  console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
  selesai();
}

function selesai() {
  console.log("Selesai mengerjakan tugas!");
}

kerjakanTugas("Matematika", selesai);

// setTimeout(function() {
//   console.log('Hello World');
// }, 1000);

// const tombol = document.querySelector('.tombol');

// tombol.addEventListener('click', function() {
//   console.log('Tombol ditekan!');
// });

// function uncapkanSalam(waktu) {
//   return function(nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`)
//   };
// };

// const selamatPagi = uncapkanSalam('pagi');
// selamatPagi('Nahrul');
