// Closures merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut
// Closures digunakan untuk membuat function factories dan private method

// Function Factories

// function init() {
//   function tampilNama(nama) {
//     console.log(nama);
//   };

//   return tampilNama;
// };

// const panggilNama = init();
// panggilNama('Nahrul');

// function init() {
//   return function(nama) {
//     console.log(nama);
//   };
// };

// const panggilNama = init();
// panggilNama('Nahrul');

// function ucapkanSalam(waktu) {
//   return function(nama) {
//     console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// };

// const selamatPagi = ucapkanSalam('pagi');
// const selamatSiang = ucapkanSalam('siang');
// const selamatMalam = ucapkanSalam('malam');

// selamatPagi('Mochamad');
// selamatPagi('Nahrul');

// Private Method

// function add() {
//   let counter = 0;
//   return function() {
//     return ++counter;
//   };
// };

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
