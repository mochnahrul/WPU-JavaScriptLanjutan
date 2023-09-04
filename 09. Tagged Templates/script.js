// Tagged Templates adalah bentuk yang lebih kompleks dari template literals, memungkinkan kita untuk membaca template literals melalui sebuah function

// Tagged Templates

// const nama = 'Mochamad Nahrul';
// const umur = 23;

// function test(strings, ...values) {
//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = test`Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
// console.log(str);

// Highlight

const nama = "Mochamad Nahrul";
const umur = 23;

function test(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="highlight">${values[i] || ""}</span>`, "");
}

const str = test`Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
document.body.innerHTML = str;
