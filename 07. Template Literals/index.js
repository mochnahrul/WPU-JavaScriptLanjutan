// Template Literal adalah string literal yang memungkinkan adanya expression di dalamnya

/**
 * Menggunakan template literal bisa melakukan:
 * 1. Multi-line String
 * 2. Embedded Expression
 * 3. HTML Fragments
 * 4. Expression Interpolation
 * 5. Tagged Template
 */

// Multi-line String

// console.log(`String 1
// String 2`);

// Embedded Expression

// const nama = 'Mochamad Nahrul';
// console.log(`Halo, perkenalkan nama saya ${nama}`);

// HTML Fragments

// const mahasiswa = {
//   nama: 'Mochamad Nahrul',
//   nim: '15190009',
//   semester: 7,
//   prodi: 'Ilmu Komputer'
// };

// const el = `
// <div class="mahasiswa">
//   <h2>${mahasiswa.nama}</h2>
//   <h2>${mahasiswa.nim}</h2>
// </div>
// `;

// console.log(el);

// Expression Interpolation

let a = 10;
let b = 15;

console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah: ${a + b}`);
