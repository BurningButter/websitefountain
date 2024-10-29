const fountainList = [{ "name": "fountain1" }, { "name": "fountain2" }, { "name": "fountain3" }]


async function fetchAsync() {
  /* let response = await fetch("https://fountaindb-hnkqh6eo7-brnbtrs-projects.vercel.app/fountains");
  let data = await response.json();
  return data; */
}

function updateCards() {
  let i = 0;
  while (true) {
    console.log(i);
    try {
      let div = document.getElementById("cards").appendChild(document.createElement("div"));
      div.classList.add("card");
      let p = div.appendChild(document.createElement("p"));
      p.innerHTML = fountainList[i]["name"] + "\n ★★★★☆";
      i++;
      console.log("Success!");
    }
    catch {
      console.log("Failed :(")
      break;
    }
  }
}