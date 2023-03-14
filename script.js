const voegItemToe = document.getElementById("voegItemToe");
const item = document.getElementById("item");
const ul = document.getElementById("itemsLijst");

async function voegDataToe(){
  if (item.value !== "") {
    const data = {
      description: item.value,
      done: false, 
    }
    await postItem(url, data);
  } else {
    alert("Voer je taak in!")
  }
} 

getItems();

async function laatItemsZien(items) {
  
  items.forEach(item => {

    const li = document.createElement("li");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = item.done;
    
    const label = document.createElement("label");
    label.id = "itemLabel";
    label.innerText = item.description;

    checkBox.addEventListener("change", () => {

      if (item.done !== true) {
        item.done = true;
      } else {
        item.done = false;
      }
      putData = {done: item.done};
      putItem(url + item._id, putData);
      
    });

    label.addEventListener("click", function() {

      const bewerkItem = prompt("Bewerk je item...")
      if (bewerkItem) {
        const label = document.getElementById("itemLabel");
        label.innerText = bewerkItem;
      } else {
        label.innerText;
      }
      putData = {description: label.innerText}
      putItem(url + item._id, putData);

    });

    const verwijderBtn = document.createElement("button")
    verwijderBtn.className = "far fa-trash-alt";

    verwijderBtn.addEventListener("click", () => {
      ul.removeChild(li);
      verwijderItem(url + item._id);
    });

    li.appendChild(checkBox);
    li.appendChild(label);
    li.appendChild(verwijderBtn);
    ul.appendChild(li);
    
  });
}

voegItemToe.addEventListener("submit", voegDataToe, false);