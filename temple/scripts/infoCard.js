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
  let headerContact = document.createElement('div')

  let servicesTemple = document.createElement('ul');
  let divList = document.createElement('div');
  let headingList = document.createElement('h3');

  let containerHistory = document.createElement('ul');
  let divHistory = document.createElement('div');
  let headingHistory = document.createElement('h3');

  let headingOrdinances = document.createElement('h3');
  let textOrdinances = document.createElement('p')
  let divOrdinances = document.createElement('div');

  let listSession = document.createElement('ul')
  let divSession = document.createElement('div');
  let headingSession = document.createElement('h3');

  let containerClosure = document.createElement('ul')
  let divClosure = document.createElement('div');
  let headingClosure = document.createElement('h3');




  //let containerLike = document.createElement('section');
  //containerLike.setAttribute('class', 'containerLike');
  //let btnLike = document.createElement('button');
  //let displayLikes = document.createElement('p');

  let containerLike = document.createElement(`section`);
  containerLike.setAttribute('class', 'containerLike');

 


 
  let btnLike = document.createElement(`button`);
  let displayLikes = document.createElement(`p`);









  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  //logoCompany.setAttribute('src', `images/${company.logoImage}`);
  //logoCompany.setAttribute('alt', `Logo of: ${company.logoImage}`);
  //logoCompany.setAttribute('loading', 'lazy');


  // Change the textContent property of the h2, p element to contain the name, address, phone, website and membership of the companies.
  nameTemple.textContent = `${temple.name}`;
  addressTemple.textContent = `${temple.address}`;
  phoneTemple.textContent = `${temple.phone}`;
  emailTemple.textContent = `${temple.email}`;

  headingList.textContent = "SERVICES";
  headingHistory.textContent = "HISTORY";
  headingOrdinances.textContent = "ORDINANCE SCHELUDE";
  textOrdinances.textContent = `${temple.ordinance}`;
  headingSession.textContent = "SESSION SCHELUDE";
  headingClosure.textContent = "TEMPLE CLOSURE SCHELUDE";


  

  let counter = 0;
 

  btnLike.onclick = function () {
    counter++;

    localStorage.setItem("likes1", counter);

  



  }


  let numLikes = Number(window.localStorage.getItem("likes1"));

  

  displayLikes.textContent = numLikes;


 
    
    














  //I iterate in the list of services of every temple
  temple.services.forEach(service => {

    let listService = document.createElement('li');

    listService.textContent = service;

    servicesTemple.appendChild(listService);

  })

  //I iterate in the list of the history of every temple
  temple.history.forEach(milestone => {
    let listMilestone = document.createElement('li');

    listMilestone.textContent = milestone;

    containerHistory.appendChild(listMilestone);

  })

  //I iterate in the list of the session schelude of every temple
  temple.session.forEach(scheludeItem => {
    let listSchelude = document.createElement('li');

    listSchelude.textContent = scheludeItem;

    listSession.appendChild(listSchelude);

  })


  //I iterate in the list of the temple closure schelude of every temple
  temple.closure.forEach(itemClosure => {
    let listClosure = document.createElement('li');

    listClosure.textContent = itemClosure;

    containerClosure.appendChild(listClosure);

  })


  let imageLike = document.createElement('img');

  imageLike.setAttribute('src', `images/like2.png`);
  imageLike.setAttribute('alt', `The like icon`);







  btnLike.appendChild(imageLike);



  headerContact.appendChild(nameTemple);
  headerContact.appendChild(addressTemple);
  headerContact.appendChild(phoneTemple);
  headerContact.appendChild(emailTemple);



  //HERE I added the h3 and the list in the div element
  divList.appendChild(headingList);
  divList.appendChild(servicesTemple);

  divHistory.appendChild(headingHistory);
  divHistory.appendChild(containerHistory);

  divOrdinances.appendChild(headingOrdinances);
  divOrdinances.appendChild(textOrdinances);


  divSession.appendChild(headingSession);
  divSession.appendChild(listSession);

  divClosure.appendChild(headingClosure);
  divClosure.appendChild(containerClosure);


  containerLike.appendChild(btnLike);
  containerLike.appendChild(displayLikes)


  // Add/append the section(company) with img, h2 and four p element.

  templeSection.appendChild(headerContact);
  templeSection.appendChild(divList);
  templeSection.appendChild(divHistory);
  templeSection.appendChild(divOrdinances);
  templeSection.appendChild(divSession);
  templeSection.appendChild(divClosure);
  templeSection.appendChild(containerLike);



  // Add/append the existing HTML div with the directory_box class with the section(company)
  document.querySelector('.temple_cards').appendChild(templeSection);







}