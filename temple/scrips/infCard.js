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
    "https://byui-cse.github.io/cse121b-course/week05/temples.json"
  );
  templeList = await response.json();
  output(templeList);
};

getTemples();