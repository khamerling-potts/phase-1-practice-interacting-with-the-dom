const likesObject = {};
let counter = document.querySelector("#counter");
setInterval(() => counter.innerText++, 1000);

//increment counter with plus and minus buttons
document.querySelector("#plus").addEventListener("click", () => {
  counter.innerText++;
});
document.querySelector("#minus").addEventListener("click", () => {
  counter.innerText--;
});

//like a number and add it to screen
document.querySelector("#heart").addEventListener("click", () => {
  const counterValue = counter.innerText;
  if (counterValue in likesObject) {
    //update object storing numbers and their # of likes
    const likeValue = ++likesObject[counterValue];
    //update the DOM list item associated with that number
    const listItem = document.getElementById(counterValue);
    listItem.innerText = `${counterValue} has ${likeValue} likes`;
  } else {
    //create new key value pair for the liked number
    likesObject[counterValue] = 1;
    //create new list item for the liked number, set its id equal to that number, and update its 'numLikes' data value
    const listItem = document.createElement("li");
    listItem.id = counterValue;
    listItem.innerText = `${counterValue} has 1 like`;
    document.querySelector(".likes").appendChild(listItem);
  }
  console.log(likesObject);
});
