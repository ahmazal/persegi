const boxResult = document.querySelector('.box-result');
const submit = document.getElementById('submit');
const reset = document.getElementById('reset');
const number = document.getElementById('number');

submit.addEventListener('click', function() {
    const sisi = parseFloat(number.value);
    if (isNaN(sisi) || sisi <= 0) {
        alert('mohon masukkan angka dengan valid')
    }
    const luas = sisi * sisi;
    boxResult.innerHTML = `<p>Luas persegi dari sisi ${sisi} adalah ${luas}</p>`;
})
reset.addEventListener('click', function() {
    number.value = "";
    boxResult.innerHTML = "";
})