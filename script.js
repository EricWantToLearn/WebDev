const scriptURL = 'https://script.google.com/macros/s/AKfycbxEcGSvPloR5tSTseWLxNpm9K-vCc36Zr8Idf_vz_lYS2wijsNFJdGNpZMPXB70YjxX/exec'

const form = document.forms['questions'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Successfully Answered."))
    .then(() => {
      window.scrollTo(0, 0);
      window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});