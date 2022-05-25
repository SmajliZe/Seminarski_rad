fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
.then(res => {
  if(!res.ok){
      throw Error('ERROR');
  }
  return res.json();
})
.then((data) => {
  cars=data;
  renderCars(data);
  })
  renderCars = (cars) => {
    let containerList = document.getElementById('container');
    let resultHtml = '';
      cars.forEach(car => {
        resultHtml += `
        <div class="card">
            <img src="${car.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h1 class="card-title">${car.name}</h1>
            <p> ${car.manufacturer}</p>
            <p>Price: ${car.price} KM</p>
            </div>
        </div>
        `;
      });
  containerList.innerHTML = resultHtml;
}

