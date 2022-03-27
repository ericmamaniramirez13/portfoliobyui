const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
    console.log(business)
    for (let i = 0; i < 3; i++) {
        displayBuisiness(business[i], i)
    }

  });
  
  function displayBuisiness(business, count){
    let card = document.createElement('section');
    card.setAttribute('class', `spotlight${count + 1}`)
    let h2 = document.createElement('h2');   
    let image = document.createElement('img')
    let address = document.createElement('p')
    let phone = document.createElement('p')
    let url = document.createElement('a')
    h2.textContent = business.name;
    image.setAttribute('src', business.logourl);
    image.setAttribute('alt', business.name);
    image.setAttribute('class', "dir_image");
    address.innerHTML = business.adress;
    phone.innerHTML = business.phone;
    url.innerHTML = business.url;
    url.setAttribute('href', business.logourl);
    image.width = "55";
    image.height = "55"

    card.appendChild(h2);
    card.appendChild(image) ;
    card.append(address);
    card.append(phone);
    

    document.querySelector(`.spot${count + 1}`).appendChild(card);
  }