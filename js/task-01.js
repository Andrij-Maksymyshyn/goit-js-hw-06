const totalLi = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalLi.length}`);

totalLi.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);

});


