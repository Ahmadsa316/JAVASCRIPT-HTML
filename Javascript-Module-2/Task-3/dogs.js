function showDogNames() {
    let dogNames = [];

    for (let i = 0; i < 6; i++) {
      let name = prompt(`Enter the name of dog ${i + 1}:`);
      dogNames.push(name);
    }

    dogNames.sort().reverse();

    let ul = document.createElement("ul");

    for (let name of dogNames) {
      let li = document.createElement("li");
      li.textContent = name;
      ul.appendChild(li);
    }

    const dogNamesListDiv = document.getElementById("dogNamesList");
    dogNamesListDiv.innerHTML = ""; // Clear previous content
    dogNamesListDiv.appendChild(ul);
  }
