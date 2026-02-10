const paginationButtons = document.querySelectorAll('.banner__pagination-btn');
const list = document.querySelector('.banner__pagination-list');


paginationButtons.forEach((btn, index) => {
    btn.onclick = (e) => {
        const btn = e.target.closest('.banner__pagination-btn');
        if(!btn) return;

        list.querySelector('.is-current')?.classList.remove('is-current')
        btn.classList.add('is-current')
    }
})
