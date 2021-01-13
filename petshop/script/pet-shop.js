var pets = [];

function cadastrarPet () {
    var pet = {}
    pet.nome = document.getElementById("nome").value;
    pet.animal = document.getElementById("animal").value;
    pet.idade = document.getElementById("idade").value;
    pet.raca = document.getElementById("raca").value;

    pets.push(pet);

    localStorage.setItem("pets", JSON.stringify(pets));
    console.log(pets)
}

