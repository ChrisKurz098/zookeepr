const fs = require('fs');

jest.mock('fs');

const {
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal
} = require("../lib/animals.js");

const { animals } = require('../data/animals');

test("creates new animal object", () => {
    const animal = createNewAnimal(
        { name: "Darlene", id: "jhgdja3ng2" },
        animals
    );
    expect(animal.name).toBe("Darlene");
    expect(animal.id).toBe('jhgdja3ng2');
});

test('filters by query', () => {
    const startingAnimals = [
        {
            id: "3",
            name: "Erica",
            species: "gorilla",
            diet: "omnivore",
            personalityTraits: ["quirky", "rash"],
        },
        {
            id: "4",
            name: "Noel",
            species: "bear",
            diet: "carnivore",
            personalityTraits: ["impish", "sassy", "brave"],
        },
    ];

    const updatedAnimals = filterByQuery({ species: 'gorilla' }, startingAnimals);
    expect(updatedAnimals.length).toEqual(1);
});

test('finds by id', () => {
    const startingAnimals = [
        {
          id: "3",
          name: "Erica",
          species: "gorilla",
          diet: "omnivore",
          personalityTraits: ["quirky", "rash"],
        },
        {
          id: "4",
          name: "Noel",
          species: "bear",
          diet: "carnivore",
          personalityTraits: ["impish", "sassy", "brave"],
        },
      ];

      const result = findById("3", startingAnimals);
      
      expect(result[0].name).toBe("Erica");
});

test('Validated if animal data is good', () => {
    const validAnimal = {
        name: "Noel",
        species: "bear",
        diet: "carnivore",
        personalityTraits: ["impish", "sassy", "brave"],
    };
    const invalidAnimal = {
        name: "Noel",
        species: "bear",
        diet: "carnivore",
    };
    const valid = validateAnimal(validAnimal);
    const invalid = validateAnimal(invalidAnimal);
    expect(valid).toBe(true);
    expect(invalid).toBe(false);
});