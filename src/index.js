const init = () => {
   const inputForm = document.querySelector('form');
   
   inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.querySelector('input#searchByID');
    
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
       const title = document.querySelector('section#movieDetails h4');
       const summary = document.querySelector('section#movieDetails p');

       title.innerText = data.title;
       summary.innerText = data.summary;
      
        });
    });
  
}

document.addEventListener('DOMContentLoaded', init);

// Your primary task will be to get this form working. When a user inputs a valid ID, the movie information should appear on the page.

// Doing this will involve a few steps:

// Add event listeners to capture form data and override a form's default behavior
// Fetch data based on what the user types into that form
// Display that data on the page