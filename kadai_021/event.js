const btn = document.getElementById('btn');
const textElemant = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        textElemant.textContent = 'ボタンをクリックしました';
    }, 2000);
});