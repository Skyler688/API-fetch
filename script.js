const parentList = document.getElementById("restaurant-list");

const apiUrl =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    grabElements(jsObject.business);
  });

function grabElements(elements) {
  elements.forEach(displayInfo);
}

function displayInfo(item) {
  //   console.log(item.name);

  let card = document.createElement("div");

  createImage(item.imageurl, card);
  createName(item.name, card);
  createDescription(item.description, card);
  createAddress(item.address, card);

  parentList.appendChild(card);
}

function createName(nameItem, parentElement) {
  let name = document.createElement("h2");
  name.textContent = nameItem;
  //   console.log(name);
  parentElement.appendChild(name);
}

function createImage(imgItem, parentElement) {
  let img = document.createElement("img");
  img.src = imgItem;
  img.alt = "error loading image";

  parentElement.appendChild(img);
}

function createDescription(descItem, parentElement) {
  let desc = document.createElement("p");
  desc.textContent = descItem;
  //   console.log(desc);
  parentElement.appendChild(desc);

  desc.classList.add("description");
}

function createAddress(addressItem, parentElement) {
  let address = document.createElement("p");
  address.textContent = addressItem;
  //   console.log(address);
  parentElement.appendChild(address);

  address.classList.add("location");
}
