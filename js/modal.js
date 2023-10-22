(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backDrop: document.querySelector(".body"),
  };

  refs.openModalBtn.addEventListener("click", startModal);
  refs.closeModalBtn.addEventListener("click", stopModal);

  function startModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.style.overflow = "hidden";
  }
  function stopModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.style.overflow = "";
  }
})();
const getted=2.75;

const modalRatingValue=document.querySelector(".modal-rating-value");
 modalRatingValue.textContent=Math.round(getted *10)/10;
 const modalRating = document.querySelector(".modal-rating");
const ratingValue = modalRating.querySelector(".modal-rating-value").textContent;

// Визначаємо кількість зірок, які потрібно відобразити
const numberOfStars = Math.floor(ratingValue);
const fractionStar = getted % 1;
console.log(fractionStar);
// Відображуємо зірки
const starring = modalRating.querySelector(".starring");
for (let i = 0; i < numberOfStars; i++) {
  const star = starring.querySelector(`.modal-rating-star[data-value="${i + 1}"]`);
  star.querySelector(".modal-icon-star").classList.remove("inactive");
  star.querySelector(".modal-icon-star").classList.add("modal-icon-star");}
  star=starring.querySelector(`.modal-rating-star[data-value="${numberOfStars + 1}"]`);
  fractedStar=star.querySelector(".modal-icon-star");
fractedStar.style.fill = "linear-gradient(to right, rgba(238, 161, 12, 1) 30%, rgba(244, 244, 244, 0.2) 70%)"