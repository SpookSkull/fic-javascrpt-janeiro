const cars = [
    {
        brand: "toyota",
        model: "corola",
        year: 2022
    },
    {
        brand: "volkswagen",
        model: "sivicus",
        year: 2024
    },
    {
        brand: "BMW",
        model: "fiesta",
        year: 2015
    },
    {
        brand: "mercedes",
        model: "focus",
        year: 2000
    }
]
console.log(cars)
console.log(cars[0].model)
console.log(cars[1].year)
console.log(cars[0].year)

function displayCards() {
    const cardlist = document.querySelector("#card-list");

    cars.forEach((car) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add(`car`);

        // modelos 
        const carModel = document.createElement("h2");
        carModel.textContent = `${car.brand} ${car.model}`;

        //o ano de meow
        const carAno = document.createElement("p")
        carAno.textContent = `Ano: ${car.year}`;

        // na tela
        cardDiv.appendChild(carModel);
        cardlist.appendChild(cardDiv);
        cardDiv.appendChild(carAno)

    })

};
displayCards();
