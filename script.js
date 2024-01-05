function createAnimal() {
    const animalSelect = document.getElementById("animalSelect").value;
    const animalContainer = document.getElementById("animalContainer");
    const apiKey = "y6B5iXUdiA4eX7_b0LKtYyqrwlEXqCahNLyPzX5S3Pg"; // Insira sua chave da Unsplash API aqui
  
    let apiUrl = `https://api.unsplash.com/photos/random?query=${animalSelect}&client_id=${apiKey}`;
  
    if (animalSelect !== "") {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao buscar imagem');
          }
          return response.json();
        })
        .then(data => {
          const imageUrl = data.urls.regular;
  
          const animalImage = document.createElement("img");
          animalImage.classList.add("animal-image");
          animalImage.src = imageUrl;
  
          animalContainer.innerHTML = "";
          animalContainer.appendChild(animalImage);
        })
        .catch(error => console.error("Erro ao buscar imagem do animal:", error));
    } else {
      console.log("Selecione um animal válido.");
    }
  }
  