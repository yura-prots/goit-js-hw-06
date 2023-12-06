const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesList = images.map((item) => {
  const imageEl = document.createElement("img");
  imageEl.src = item.url;
  imageEl.alt = item.alt;
  imageEl.style.width = "100%";
  imageEl.style.height = "auto";

  const itemEl = document.createElement("li");
  itemEl.appendChild(imageEl);

  return itemEl;
});

const gallery = document.querySelector(".gallery");
gallery.append(...imagesList);
gallery.style.listStyle = "none";
