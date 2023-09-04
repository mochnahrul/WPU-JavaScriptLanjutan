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

// document.body.innerHTML = el;

// Looping

// const mahasiswa = [
//   {
//     nama: 'Mochamad Nahrul',
//     nim: '15190009'
//   },
//   {
//     nama: 'Elon Musk',
//     nim: '15190010'
//   }
// ];

// const el = `
// <div class="mahasiswa">${mahasiswa.map(e => `
//   <ul>
//     <li>${e.nama}</li>
//     <li>${e.nim}</li>
//   </ul>`)
//   .join('')};
// </div>
// `;

// document.body.innerHTML = el;

// Conditionals

// const songs = [
//   {
//     title: 'Impermanence',
//     band: 'Architects',
//     featuring: 'Winston McCall'
//   },
//   {
//     title: 'Modern Misery',
//     band: 'Architects'
//   }
// ];

// const el = `
// <div class="song">${songs.map(song => `
//   <ul>
//     ${song.featuring ? `
//     <li>${song.band}</li>
//     <li>${song.title}</li>
//     <li>${song.featuring}</li>
//     ` : `
//     <li>${song.band}</li>
//     <li>${song.title}</li>
//     `}
//   </ul>`)
//   .join('')}
// </div>
// `;

// document.body.innerHTML = el;

// Nested

const mahasiswa = {
  nama: "Mochamad Nahrul",
  nim: "15190009",
  semester: 7,
  prodi: "Ilmu Komputer",
  mataKuliah: ["Web Programming", "Mobile Programming"],
};

function mapMataKuliah(mataKuliah) {
  return `
  <ol>${mataKuliah
    .map(
      (e) => `
    <li>${e}</li>`
    )
    .join("")}
  </ol>
  `;
}

const el = `
<div class="mahasiswa">
  <h2>Nama: ${mahasiswa.nama}</h2>
  <h2>Matakuliah: </h2>
  ${mapMataKuliah(mahasiswa.mataKuliah)}
</div>
`;

document.body.innerHTML = el;
