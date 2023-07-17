console.log('script loaded');

document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed('.txt', {
    strings: ["DEVELOPER", "PROGRAMMER"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


  const scriptURL = 'https://script.google.com/macros/s/AKfycby9XtjlFAOZ6hs50HQCFpXwYjd5odlNX3q5N16h1-UIy-4IriSKXOf-j81sGPi_LeZM/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = 'Message Submitted<i class="fa-solid fa-check fa-beat-fade" style="color: #61b752;"></i>';

    setTimeout(function(){
      msg.innerHTML=""
    },5000)
     form.reset()
    })
      .catch(error => {msg.innerHTML = 'Submission Unsuccesfull<i class="fa-solid fa-check fa-beat-fade" style="color: #61b752;"}></i>'
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset()
      })
  })
