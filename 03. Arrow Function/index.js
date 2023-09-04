// Arrow Function adalah bentuk lain yang lebih ringkas dari function expression

// Function Expression

// const tampilNama = function(nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama('Nahrul'));

// Arrow Function

// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama('Nahrul'));

// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };

// console.log(tampilNama('Nahrul', 'malam'));

// Implicit Return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Nahrul'));

// Tanpa Parameter
// const tampilNama = () => `Halo, Nahrul`;
// console.log(tampilNama());

// const mahasiswa = ['Mochamad', 'Nahrul', 'Hayawan'];

// const jumlahHuruf = mahasiswa.map(function(nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

// const jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// const jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jumlahHuruf: nama.length}));
// console.table(jumlahHuruf);

// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function() {
//   this.nama = 'Nahrul';
//   this.umur = 23;
//   this.sayHello = function() {
//     console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
//   };
// };

// const nahrul = new Mahasiswa();
// nahrul.sayHello();

// Arrow Function
// const Mahasiswa = function() {
//   this.nama = 'Nahrul';
//   this.umur = 23;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
//   };
// };

// const nahrul = new Mahasiswa();
// nahrul.sayHello();

const mahasiswa = {
  nama: "Nahrul",
  umur: 23,
  sayHello: () => {
    console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
  },
};

mahasiswa.sayHello();

// const Mahasiswa = function() {
//   this.nama = 'Nahrul';
//   this.umur = 23;
//   this.sayHello = function() {
//     console.log(`Halo, nama saya ${this.nama}, dan umur saya ${this.umur} tahun.`);
//   };

//   setInterval( () => {
//     console.log(this.umur++);
//   }, 500);
// };

// const nahrul = new Mahasiswa();
// nahrul.sayHello();
