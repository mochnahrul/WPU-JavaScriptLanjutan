const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Mencari angka yang lebih besar sama dengan 3

// Tanpa menggunakan filter
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }

// console.log(newAngka);

// Menggunakan filter
// const newAngka = angka.filter(function(e) {
//   return e >= 3;
// });

// console.log(newAngka)

// Menggunakan filter dan arrow function
// const newAngka = angka.filter(e => e >= 3);
// console.log(newAngka)

// Kalikan semua angka dengan 2

// Menggunakan map
// const newAngka = angka.map(e => e * 2);
// console.log(newAngka)

// Jumlahkan seluruh elemen pada array

// Menggunakan reduce
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka)

// Mencari angka yang lebih besar dari 5, kemudian angka tersebut dikalikan dengan 3, terakhir jumlahkan seluruh angka tersebut

// Menggunakan method chaining
const newAngka = angka
  .filter((e) => e >= 5)
  .map((e) => e * 3)
  .reduce((a, c) => a + c);

console.log(newAngka);
