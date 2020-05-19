
// Get modal element
var modal = document.getElementById('scanSimpleModal');

// Get close modalbutton
var closeBtn = document.getElementsByClassName('scanCloseBtn')[0];


// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}
// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
  modal.style.display = 'none';
  }
}
