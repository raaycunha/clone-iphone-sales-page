const btnsBuy = document.querySelectorAll('.btn-buy')

btnsBuy.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.97)';
        btn.style.boxShadow = '0px 0px 0px #2467af54';
    })
    btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = '0px 0px 2px #2467af54';
    })
})

const radiosColor = document.querySelectorAll('input[name="iphone-color"]')

radiosColor.forEach(radio => {
    radio.addEventListener('change', (e) => {

        const imgiPhone = document.querySelector('.img-iphone')
        const colorName = e.target.id

        imgiPhone.style.transition = 'opacity 0.39s'
        imgiPhone.style.opacity = '0';

        setTimeout(() => {
            imgiPhone.src = `src/assets/iphone_${colorName}.jpg`
            imgiPhone.onload = () => imgiPhone.style.opacity = '1';
        }, 390)
    })
})