const fs = require('fs');

const {    
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper
} = require('../lib/zookeepers.js');

const { zookeepers } = require('../data/zookeepers');

jest.mock('fs');
///////Start tests/////////

test("creates new zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Darlene", id: "jhgdja3ng2" },
        zookeepers
    );
    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe('jhgdja3ng2');
});

///////

test('filters by query', () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Erica",
            age: 33,
            favoriteAnimal: 'penguin'
        },
        {
            id: "4",
            name: "Noel",
            age: 27,
            favoriteAnimal: "bear"
    
        },
    ];

    const updatedZookeepers = filterByQuery({ age: 33 }, startingZookeepers);
    expect(updatedZookeepers.length).toEqual(1);
});

test('finds by id', () => {
    const startingZookeepers = [
        {
            id: "3",
            name: "Erica",
            age: 33,
            favoriteAnimal: 'penguin'
        },
        {
            id: "4",
            name: "Noel",
            age: 27,
            favoriteAnimal: "bear"
        },
    ];

      const result = findById("3", startingZookeepers);
      
      expect(result[0].name).toBe("Erica");
});

test('Validated age', () => {
    const validZookeeper =     {
        id: "3",
        name: "Erica",
        age: 33,
        favoriteAnimal: 'penguin'
    }

    const invalidZookeeper =     {
        id: "3",
        name: "Erica",
        age: "33",
        favoriteAnimal: 'penguin'
    }
    const valid = validateZookeeper(validZookeeper);
    const invalid = validateZookeeper(invalidZookeeper);
    expect(valid).toBe(true);
    expect(invalid).toBe(false);
});