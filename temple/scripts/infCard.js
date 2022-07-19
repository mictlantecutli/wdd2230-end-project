const output = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement("article");

    let templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    let location = document.createElement("h4");
    location.textContent = temple.location;

    let dedicated = document.createElement("h4");
    dedicated.textContent = temple.dedicated;

    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.templeName);

    article.appendChild(templeName);
    article.appendChild(location);
    article.appendChild(dedicated);
    article.appendChild(img);

    document.querySelector("#temples").appendChild(article);
  });
};


const getTemples = async () => {
  const response = await fetch(
    "https://github.com/mictlantecutli/wdd230-end-project/jsonFiles/infoTemples.json"

  
  );

  console.log(response)
  templeList = await response.json();
  output(templeList);
};

getTemples();