const likesObject = {};
let counter = document.querySelector("#counter");
let paused = false;

//counts on the screen when it is not paused
setInterval(() => {
  if (!paused) {
    counter.innerText++;
  }
}, 1000);

//increment counter with plus and minus buttons
document.querySelector("#plus").addEventListener("click", () => {
  counter.innerText++;
});
document.querySelector("#minus").addEventListener("click", () => {
  counter.innerText--;
});

//like a number and update DOM
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

//pause and resume functionality
document.getElementById("pause").addEventListener("click", (event) => {
  if (event.target.innerText === "pause") {
    paused = true;
    document.querySelector("#plus").disabled = true;
    document.querySelector("#minus").disabled = true;
    document.querySelector("#heart").disabled = true;
    document.querySelector("#submit").disabled = true;
    event.target.innerText = "resume";
  } else {
    paused = false;
    document.querySelector("#plus").disabled = false;
    document.querySelector("#minus").disabled = false;
    document.querySelector("#heart").disabled = false;
    document.querySelector("#submit").disabled = false;
    event.target.innerText = "pause";
  }
});

//leave comments and put them on the screen
document.getElementById("comment-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const p = document.createElement("p");
  p.innerText = document.getElementById("comment-input").value;
  document.getElementById("list").appendChild(p);
});
