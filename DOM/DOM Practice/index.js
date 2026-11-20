const content = document.createElement("div");

content.classList.add("content"); //class name = content
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm, red";
container.append(paragraph);
document.querySelector("p").style.color = "red";

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

const anotherDiv = document.createElement("div");
anotherDiv.classList.add("anotherDiv");

container.appendChild(anotherDiv);

anotherDiv.style.border = "black";
anotherDiv.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
paragraph.textContent = "me too";
anotherDiv.append(h1);
anotherDiv.append(paragraph);
w