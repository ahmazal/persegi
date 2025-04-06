const boxResult = document.querySelector('.box-result');
const boxResultP = document.querySelector('.box-resultP');
const submit = document.getElementById('submit');
const number = document.getElementById('number');
const panjang = document.getElementById('panjang');
const lebar = document.getElementById('lebar');
const submitP = document.getElementById('submitP');

// menghitung persegi luas
submit.addEventListener('click', function() {
    const sisi = parseFloat(number.value);
    if (isNaN(sisi) || sisi <= 0) {
        alert('mohon masukkan angka dengan valid')
    }
    const luas = sisi * sisi;
    boxResult.innerHTML = `<p>Luas persegi dari sisi ${sisi} adalah ${luas}</p>`;
})

submitP.addEventListener('click', function() {
    const sisiPanjangP = parseFloat(panjang.value);
    const sisiLebarP = parseFloat(lebar.value);
    if (isNaN(sisiPanjangP) || sisiPanjangP <= 0) {
        alert('mohon masukkan angka dengan valid')
    } else if (isNaN(sisiLebarP) || sisiLebarP <= 0) {
        alert('mohon masukkan angka dengan valid')
    }
    const luasP = sisiPanjangP * sisiLebarP;
    boxResultP.innerHTML = `<p>Luas persegi panjang dari sisi panjang ${sisiPanjangP} dan lebar ${sisiLebarP} adalah ${luasP}</p>`;
})

// mereset
const resetButtons = document.querySelectorAll('button#reset');
resetButtons.forEach(button => {
    button.addEventListener('click', function() {
        boxResult.innerHTML = '';
        boxResultP.innerHTML = '';
        number.value = '';
        panjang.value = '';
        lebar.value = '';
    });
});

// Handle shape selection and visibility
const Buttons = document.querySelectorAll('.button-choice button');
const aktif = document.querySelector('.container-input:not(#nonAktif)');
const nonAktif = document.getElementById('nonAktif');

Buttons.forEach(button => {
    button.addEventListener('click', function() {
        Buttons.forEach(btn => btn.removeAttribute('id'));
        this.setAttribute('id', 'active');
        if (this.textContent === 'persegi') {
            aktif.style.display = 'flex';
            nonAktif.style.display = 'none';
        } else {
            aktif.style.display = 'none';
            nonAktif.style.display = 'flex';
        }
    });
});
