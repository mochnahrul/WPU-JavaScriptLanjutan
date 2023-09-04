// Destructuring Function Return Value

// function kalkulasi(a, b) {
//   return [a * b, a / b, a + b, a - b];
// };

// const [kali, bagi, tambah, kurang] = kalkulasi(2, 3);
// console.log(kali);

// function kalkulasi(a, b) {
//   return {
//     kali: a * b,
//     bagi: a / b,
//     tambah: a + b,
//     kurang: a - b
//   };
// };

// const {kurang, tambah, bagi, kali} = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring Function Arguments

const mahasiswa = {
  nama: "Mochamad Nahrul",
  nim: "15190009",
  email: "nahrulalarcon@gmail.com",
  nilai: {
    tugas: 80,
    uts: 90,
    uas: 100,
  },
};

function cetakMahasiswa({ nama, nim, email, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, nilai uas saya adalah ${uas}.`;
}

console.log(cetakMahasiswa(mahasiswa));
