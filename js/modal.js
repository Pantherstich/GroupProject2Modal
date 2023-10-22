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
const getted=4.75;

// "_id": "64f389465ae26083f39b17a4",
// "bodyPart": "waist",
// "equipment": "body weight",
// "gifUrl": "https://ftp.goit.study/img/power-pulse/gifs/0003.gif",
// "name": "air bike",
// "target": "abs",
// "description": "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
// "rating": 4.64,
// "burnedCalories": 312,
// "time": 3,
// "popularity": 529









const modalRatingValue=document.querySelector(".modal-rating-value");
 modalRatingValue.textContent=Math.round(getted *10)/10;
 const modalRating = document.querySelector(".modal-rating");
const ratingValue = modalRating.querySelector(".modal-rating-value").textContent;

// Визначаємо кількість зірок, які потрібно відобразити
// const numberOfStars = Math.floor(ratingValue);
const numberOfStars = Math.round(ratingValue);

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
console.log(fractedStar);
//   fractedStar.style.background-repeat = "repeat-x";
// fractedStar.style.fill = "linear-gradient(to right, rgba(238, 161, 12, 1) 30%, rgba(244, 244, 244, 0.2) 70%)"



