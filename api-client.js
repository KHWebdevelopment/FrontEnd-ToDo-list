const url = "https://khwebdevelopment-todo-list.netlify.app/"


async function postItem(url, data = {}) {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(function (response) {
    responseClone = response.clone();
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

async function putItem(url, data = {}) {
  await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

async function getItems() {
  await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then (response => response.json())
  .then (items => laatItemsZien(items))
  .catch((error) => {
    console.error('Error:', error);
  });
  
}

async function verwijderItem(url) {
  await fetch(url, {
    method: "DELETE",
  })
  .then ((data) => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
}
