const requestURL = 'https://mictlantecutli.github.io/wdd230-end-project/jsonFiles/infoTemples.json';
const directoryBox = document.querySelector('.temple_cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing


    const dataBusiness = jsonObject['directoryTemples'];
    dataBusiness.forEach(displayCompanies);
  });
  

function displayCompanies(temple) {
  // Create elements to add to the document
  let templeSection = document.createElement('section');
 
  let nameTemple = document.createElement('h2')
  let addressTemple = document.createElement('p');

  let phoneCompany = document.createElement('p')
  let webCompany = document.createElement('p')
  let levelMember = document.createElement('p')


  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  //logoCompany.setAttribute('src', `images/${company.logoImage}`);
  //logoCompany.setAttribute('alt', `Logo of: ${company.logoImage}`);
  //logoCompany.setAttribute('loading', 'lazy');



  // Change the textContent property of the h2, p element to contain the name, address, phone, website and membership of the companies.
  nameTemple.textContent = `${temple.name}`
  addressTemple.textContent = `${temple.address}`

  phoneCompany.textContent = `${company.phone}`
  webCompany.textContent = `${company.website}`
  levelMember.textContent = `${company.membership}`




  // Add/append the section(company) with img, h2 and four p element.
 
  templeSection.appendChild(nameTemple);
  templeSection.appendChild(addressTemple);
  s
  templeSection.appendChild(phoneCompany);
  templeSection.appendChild(webCompany);
  templeSection.appendChild(levelMember);



  // Add/append the existing HTML div with the directory_box class with the section(company)
  document.querySelector('.temple_cards').appendChild(directorySection);
}