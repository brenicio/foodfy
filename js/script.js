const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function () {
        const img = card.querySelector("img").getAttribute("src")
        const title = card.querySelector(".card_title").querySelector("span").innerText
        const autor = card.querySelector(".card_autor").querySelector("span").innerText

        modalOverlay.classList.add('active')
        modal.querySelector("img").src = img
        modal.querySelector(".title").innerText = title
        modal.querySelector(".autor").innerText = autor
    });
}

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active');
});