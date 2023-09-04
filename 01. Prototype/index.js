// Cara membuat object pada javascript

// 1. Object Literal
// let mahasiswa = {
//   nama: 'Nahrul',
//   energi: 10,
//   makan: function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   },

//   main: function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
//   }
// };

// mahasiswa.makan(5);
// mahasiswa.main(5);
// console.log(mahasiswa);

// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   };

//   mahasiswa.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
//   };

//   return mahasiswa;
// };

// let nahrul = Mahasiswa('Nahrul', 10);

// nahrul.makan(5);
// nahrul.main(5);
// console.log(nahrul);

// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   };

//   this.main = function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
//   };
// };

// let nahrul = new Mahasiswa('Nahrul', 10);

// nahrul.makan(5);
// nahrul.main(5);
// console.log(nahrul);

// 4. Object.create
// let methodMahasiswa = {
//   makan: function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   },

//   main: function(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
//   }
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// };

// let nahrul = Mahasiswa('Nahrul', 10);

// nahrul.makan(5);
// nahrul.main(5);
// console.log(nahrul);

// 5. Prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// };

// Mahasiswa.prototype.makan = function(porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// };

// Mahasiswa.prototype.main = function(jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat bermain!`;
// };

// let nahrul = new Mahasiswa('Nahrul', 10);

// nahrul.makan(5);
// nahrul.main(5);
// console.log(nahrul);

// 6. Class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }
}

let nahrul = new Mahasiswa("Nahrul", 10);

nahrul.makan(5);
nahrul.main(5);
console.log(nahrul);
