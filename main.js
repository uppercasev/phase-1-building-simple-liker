// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorModal = document.querySelector("#modal");
const likeHearts = document.querySelectorAll(".like-glyph");
const hideError = function() {errorModal.className = "hidden"};
hideError();

likeHearts.forEach((heart) => {
  heart.addEventListener('mousedown', function() {
    mimicServerCall()
    .then(function() {
      if (heart.className === "like-glyph") {
        heart.innerHTML = FULL_HEART;
        heart.className += " activated-heart";
      } else {
        heart.innerHTML = EMPTY_HEART;
        heart.className = "like-glyph";
      }
    })
    .catch(function(reject) {
      errorModal.innerHTML = reject;
      errorModal.className = "";
      setTimeout(hideError, 3000);
    });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
