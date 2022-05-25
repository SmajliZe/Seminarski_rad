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
            <h1 class="card-title">${car.name}</h1>
            <img src="${car.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <p> ${car.manufacturer}</p>
            <p>Price: ${car.price} KM</p>
            <button type="button" onclick="editData(${car.id})" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Edit</button>
            <button type="button" class="btn btn-dark" onclick="deleteCARS(${car.id})"> Delete </button>
            </div>
        </div>
        `;
      });
  containerList.innerHTML = resultHtml;
}

const deleteCARS = (id) => {
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      console.log(res);
    })
  }
  

  const addCar = () => {
    var CarFormID=document.getElementById("car-id").value;
    var CarFormName=document.getElementById("car-name").value;
    var CarFormManufacturer=document.getElementById("car-manufacturer").value;
    var CarFormURL=document.getElementById("car-url").value;
    var CarFormPrice=document.getElementById("car-price").value;
    var CarFormYear=document.getElementById("car-year").value;
      
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars`, {
      method: 'POST',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
  
        "id": CarFormID,
        "name": CarFormName,
        "manufacturer": CarFormManufacturer,
        "imageUrl": CarFormURL,
        "price": CarFormPrice,
        "year": CarFormYear

      })
    })
    .then(res => {
      console.log(res);
    })
  }

  const editData = (carID) => {
    const car=cars.find(car => car.id === carID)
    const CarFormID1=document.getElementById("car-id1");
    const CarFormName1=document.getElementById("car-name1");
    const CarFormManufacturer1=document.getElementById("car-manufacturer1");
    const CarFormURL1=document.getElementById("car-url1");
    const CarFormPrice1=document.getElementById("car-price1");
    const CarFormYear1=document.getElementById("car-year1");
      
    CarFormID1.value=car.id;
    CarFormName1.value=car.name;
    CarFormManufacturer1.value=car.manufacturer;
    CarFormURL1.value=car.imageUrl;
    CarFormPrice1.value=car.price;
    CarFormYear1.value=car.year;
  }
  
  const putCar=()=>{
    CarFormID1=document.getElementById("car-id1").value;
    CarFormName1=document.getElementById("car-name1").value;
    CarFormManufacturer1=document.getElementById("car-manufacturer1").value;
    CarFormURL1=document.getElementById("car-url1").value;
    CarFormPrice1=document.getElementById("car-price1").value;
    CarFormYear1=document.getElementById("car-year1").value;

  
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars', {
      method: 'PUT',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify({
  
        "id": CarFormID1,
        "name": CarFormName1,
        "manufacturer": CarFormManufacturer1,
        "imageUrl": CarFormURL1,
        "price": CarFormPrice1,
        "year": CarFormYear1
  
      })
    })
    .then(res => {
      console.log(res);
    })
  }
