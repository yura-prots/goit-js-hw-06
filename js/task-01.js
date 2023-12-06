const categories = document.querySelectorAll("#categories").forEach((el) => {
  const numberOfCategories = el.children.length;

  console.log(`Number of categories: ${numberOfCategories}`);
});

const categoriesList = document.querySelectorAll(".item").forEach((el) => {
  const categoryName = el.firstElementChild.textContent;
  const numberOfElements = el.lastElementChild.children.length;

  console.log(`
  Category: ${categoryName}
  Elements: ${numberOfElements}
  `);
});
