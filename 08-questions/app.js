const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach((item) => {
      if (question !== item) {
        item.classList.remove("show-text");
      }
    });

    if (question)

    question.classList.toggle("show-text");
  });

});
