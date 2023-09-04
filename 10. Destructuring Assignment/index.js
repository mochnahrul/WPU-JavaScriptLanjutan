// Destructuring Assignment adalah Expression pada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variabel yang terpisah

// Destructuring Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Nahrul'];

// const [satu, dua, tiga, empat] = perkenalan;

// console.log(empat);

// Skipping Items

// const perkenalan = ['Halo', 'nama', 'saya', 'Nahrul'];

// const [satu, , , empat] = perkenalan;

// console.log(empat);

// Swap Items

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// Return value pada function

// function test() {
//   return [1, 2];
// };

// const [a, b] = test();
// console.log(a);

// Rest Parameter

// const [a, ...values] = [1, 2, 3, 4, 5];

// console.log(a);
// console.log(values);

// const mahasiswa = {
//   nama: 'Mochamad Nahrul',
//   nim: '15190009',
//   email: 'mochnahrul@student.ac.id'
// };

// const {nama, ...values} = mahasiswa;
// console.log(values);

// Destructuring Object

// const mahasiswa = {
//   nama: 'Mochamad Nahrul',
//   nim: '15190009'
// };

// const {nama, nim} = mahasiswa;
// console.log(nama);

// Assignment tanpa deklarasi object

// ({nama, nim} = { nama: 'Mochamad Nahrul', nim: '15190009' });

// console.log(nama);

// Assignment ke variabel baru

// const mahasiswa = {
//   nama: 'Mochamad Nahrul',
//   nim: '15190009'
// };

// const {nama: a, nim: b} = mahasiswa;
// console.log(a);

// Memberikan default value

// const mahasiswa = {
//   nama: 'Mochamad Nahrul',
//   nim: '15190009',
//   email: 'mochnahrul@student.ac.id'
// };

// const {nama, nim, email = 'email@student.ac.id'} = mahasiswa;
// console.log(email);

// Memberikan default value + Assignment ke variabel baru

// const mahasiswa = {
//   nama: 'Mochamad Nahrul',
//   nim: '15190009',
//   email: 'mochnahrul@student.ac.id'
// };

// const {nama: a, nim: b, email: c = 'email@student.ac.id'} = mahasiswa;
// console.log(c);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function

const mahasiswa = {
  id: "001",
  nama: "Mochamad Nahrul",
  nim: "15190009",
  email: "mochnahrul@student.ac.id",
};

function getIdMahasiswa({ id, nama }) {
  return `${id}. ${nama}`;
}

console.log(getIdMahasiswa(mahasiswa));
