const url = 'http://localhost:3000/api/products';

function Get() {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}

function GetOne() {
  axios
    .get(`${url}/5`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}

function Create() {
  const itens = {
    name: 'Massa',
    price: 12,
    description: 'teste',
    category: 'Legal',
  };
  axios.post(url, itens).then((response) => {
    console.log(response.data).catch((error) => console.log(error));
  });
}
function Update() {
  const itensMudado = {
    name: 'Mudado',
    price: 10,
    description: 'Agora mudou',
    category: 'legal',
  };
  axios
    .put(`${url}/5`, itensMudado)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}

function Delete() {
  axios
    .delete(`${url}/5`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));
}
