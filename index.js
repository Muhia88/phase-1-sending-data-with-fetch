
function submitData(name, email){

  return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      },
      body: JSON.stringify({
      name,
      email
      }),
    })
    .then(response =>  response.json())
    .then(responseData => {
      const idElement = document.createElement('div');
      idElement.textContent = responseData.id;

    
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement('div');
      errorElement.textContent = error.message;

      document.body.appendChild(errorElement);
    });
}

