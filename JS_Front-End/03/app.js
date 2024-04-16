
    const baseUrl = "http://localhost:3030/jsonstore/games/";
    const loadGamesBtn = document.getElementById("load-games");
    const addGameBtn = document.getElementById("add-game");
    const editGameBtn = document.getElementById("edit-game");
    const gamesList = document.getElementById("games-list");
    const form = document.querySelector("#form form");
  
    loadGamesBtn.addEventListener("click", function () {
      fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
          gamesList.innerHTML = "";
          for (const game of Object.values(data)) {
            const gameDiv = createGameDiv(game);
            gamesList.appendChild(gameDiv);
          }
          editGameBtn.disabled = true;
        });
    });
  
    addGameBtn.addEventListener("click", function () {
      const gameData = {
        name: form["g-name"].value,
        type: form["type"].value,
        players: form["players"].value
      };
  
      fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gameData)
      })
        .then(response => response.json())
        .then(() => {
          loadGamesBtn.click();
          form.reset();
        });
    });
  
    function handleEditClick(event) {
      const gameDiv = event.target.parentNode.parentNode;
      const [name, type, players] = Array.from(gameDiv.querySelectorAll(".content p")).map(p => p.textContent);
      form["g-name"].value = name;
      form["type"].value = type;
      form["players"].value = players;
  
      addGameBtn.disabled = true;
      editGameBtn.disabled = false;
      editGameBtn.addEventListener("click", function () {
        const gameData = {
          name: form["g-name"].value,
          type: form["type"].value,
          players: form["players"].value
        };
        const gameId = gameDiv.getAttribute("data-id");
  
        fetch(baseUrl + gameId, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(gameData)
        })
          .then(() => {
            loadGamesBtn.click();
            form.reset();
            addGameBtn.disabled = false;
            editGameBtn.disabled = true;
          });
      });
    }
  
    function handleDeleteClick(event) {
      const gameDiv = event.target.parentNode.parentNode;
      const gameId = gameDiv.getAttribute("data-id");
  
      fetch(baseUrl + gameId, {
        method: "DELETE",
      })
      .then(() => gameDiv.remove())
      .catch(console.error);
    }
  
    function createGameDiv(game) {
      const gameDiv = document.createElement("div");
      gameDiv.className = "board-game";
      gameDiv.setAttribute("data-id", game._id);
  
      const contentDiv = document.createElement("div");
      contentDiv.className = "content";
      const nameP = document.createElement("p");
      nameP.textContent = game.name;
      const typeP = document.createElement("p");
      typeP.textContent = game.type;
      const playersP = document.createElement("p");
      playersP.textContent = game.players;
      contentDiv.appendChild(nameP);
      contentDiv.appendChild(typeP);
      contentDiv.appendChild(playersP);
  
      const buttonsDiv = document.createElement("div");
      buttonsDiv.className = "buttons-container";
      const changeBtn = document.createElement("button");
      changeBtn.className = "change-btn";
      changeBtn.textContent = "Change";
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";
      buttonsDiv.appendChild(changeBtn);
      buttonsDiv.appendChild(deleteBtn);
  
      gameDiv.appendChild(contentDiv);
      gameDiv.appendChild(buttonsDiv);
  
      changeBtn.addEventListener("click", handleEditClick);
      deleteBtn.addEventListener("click", handleDeleteClick);
  
      return gameDiv;
    }
