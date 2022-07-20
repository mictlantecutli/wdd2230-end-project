const requestURL = 'https://mictlantecutli.github.io/wdd230-end-project/jsonFiles/infoTemples.json';
const directoryBox = document.querySelector('.temple_cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing


    const dataTemples = jsonObject['directoryTemples'];
    dataTemples.forEach(displayTemples);
  });
  

function displayTemples(temple) {
  // Create elements to add to the document
  let templeSection = document.createElement('section');
 
  let nameTemple = document.createElement('h2');
  let addressTemple = document.createElement('p');
  let phoneTemple = document.createElement('p');
  let emailTemple = document.createElement('p');
  let servicesTemple = document.createElement('ul');
  let divList = document.createElement('div');
  let headingList = document.createElement('h3');

  let containerHistory = document.createElement('ul');
  let divHistory = document.createElement('div');
  let headingHistory = document.createElement('h3');

  let headingOrdinances = document.createElement('h3');
  let textOrdinances = document.createElement('p')
  let divOrdinances = document.createElement('div');



  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  //logoCompany.setAttribute('src', `images/${company.logoImage}`);
  //logoCompany.setAttribute('alt', `Logo of: ${company.logoImage}`);
  //logoCompany.setAttribute('loading', 'lazy');



  // Change the textContent property of the h2, p element to contain the name, address, phone, website and membership of the companies.
  nameTemple.textContent = `${temple.name}`
  addressTemple.textContent = `${temple.address}`
  phoneTemple.textContent = `${temple.phone}`
  emailTemple.textContent = `${temple.email}`
  headingList.textContent = "SERVICES"
  headingHistory.textContent = "HISTORY"
  headingOrdinances.textContent = "ORDINANCE SCHELUDE"
  textOrdinances.textContent = `${temple.ordinance}`
  
  //I iterate in the list of services of every temple
  temple.services.forEach( service =>{
    
    let listService = document.createElement('li');

    listService.textContent = service;

    servicesTemple.appendChild(listService);

  })

  //I iterate in the list of the history of every temple
  temple.history.forEach( milestone =>{   
    let listMilestone = document.createElement('li');

    listMilestone.textContent = milestone;

    containerHistory.appendChild(listMilestone);

  })



//HERE I added the h3 and the list in the div element
  divList.appendChild(headingList);
  divList.appendChild(servicesTemple);

  divHistory.appendChild(headingHistory);
  divHistory.appendChild(containerHistory);

  divOrdinances.appendChild(headingOrdinances);
  divOrdinances.appendChild(textOrdinances);








  // Add/append the section(company) with img, h2 and four p element.
 
  templeSection.appendChild(nameTemple);
  templeSection.appendChild(addressTemple);
  templeSection.appendChild(phoneTemple);
  templeSection.appendChild(emailTemple);
  templeSection.appendChild(divList);
  templeSection.appendChild(divHistory);
  templeSection.appendChild(divOrdinances);



  // Add/append the existing HTML div with the directory_box class with the section(company)
  document.querySelector('.temple_cards').appendChild(templeSection);
}