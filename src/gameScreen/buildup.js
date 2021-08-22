// eslint-disable-next-line no-unused-vars
const buildup = [
  {
    name: 'Hamburger',
    ingredients: ['Ketchup', 'Mustard', 'Pickle x1', '10:1'],
    alternativeIngredients: ['Mustard', 'Ketchup', 'Pickle x1', '10:1'],
    usedRolls: ['upperRoll'],
  },
  {
    name: 'Cheeseburger',
    ingredients: ['Ketchup', 'Mustard', 'Pickle x1', 'Cheese', '10:1'],
    alternativeIngredients: ['Mustard', 'Ketchup', 'Pickle x1', 'Cheese', '10:1'],
    usedRolls: ['upperRoll'],
  },
  {
    name: 'Jalapeno Burger',
    ingredients: ['Green tabasco sauce', 'Sandwich sauce', 'Fresh onion', 'Jalapeno x1', 'Jalapeno x1', 'Jalapeno x1', '10:1'],
    alternativeIngredients: ['Sandwich sauce', 'Green tabasco sauce', 'Fresh onion', 'Jalapeno x1', 'Jalapeno x1', 'Jalapeno x1', '10:1'],
    usedRolls: ['upperRoll'],
  },
  {
    name: 'Chikker',
    ingredients: ['Honey and mustard sauce', 'Honey and mustard sauce', 'Salad', 'Strips'],
    usedRolls: ['bottomRoll'],
  },
  {
    name: 'Red Chikker',
    ingredients: ['Onion-tomato sauce', 'Onion-tomato sauce', 'Salad', 'Strips'],
    usedRolls: ['bottomRoll'],
  },
  {
    name: 'McDouble',
    ingredients: ['Ketchup', 'Mustard', 'Pickle x1', 'Pickle x1', '10:1', 'Cheese', '10:1'],
    alternativeIngredients: ['Mustard', 'Ketchup', 'Pickle x1', 'Pickle x1', '10:1', 'Cheese', '10:1'],
    usedRolls: ['upperRoll'],
  },
  {
    name: 'BigMac',
    ingredientsOnMiddleRoll: ['BigMac sauce', 'Salad', 'Pickle x1', 'Pickle x1', '10:1'],
    ingredientsOnBottomRoll: ['BigMac sauce', 'Salad', 'Cheese', '10:1'],
    usedRolls: ['bottomRoll', 'middleRoll'],
  },
  {
    name: 'McRoyal',
    ingredients: ['Ketchup', 'Mustard', 'Fresh onion', 'Pickle x1', 'Pickle x1', 'Cheese', '4:1', 'Cheese'],
    alternativeIngredients: ['Mustard', 'Ketchup', 'Fresh onion', 'Pickle x1', 'Pickle x1', 'Cheese', '4:1', 'Cheese'],
    usedRolls: ['upperRoll'],
  },
  {
    name: 'WieśMac',
    ingredients: ['Mustard and horseradish sauce', 'Mustard and horseradish sauce', 'Fresh onion', 'Salad', 'Tomato x1', 'Cheese', '4:1'],
    usedRolls: ['upperRoll'],
  },
  {
    name: 'Podwójny McRoyal',
    ingredients: ['Ketchup', 'Mustard', 'Fresh onion', 'Pickle x1', 'Pickle x1', 'Cheese', '4:1', 'Cheese', '4:1'],
    alternativeIngredients: ['Mustard', 'Ketchup', 'Fresh onion', 'Pickle x1', 'Pickle x1', 'Cheese', '4:1', 'Cheese', '4:1'],
    usedRolls: ['upperRoll'],
  },
  {
    name: 'Podwójny McRoyal Pikantny',
    ingredients: ['Sandwich sauce', 'Sandwich sauce', 'Green tabasco sauce', 'Pickle x1', 'Pickle x1', 'Jalapeno x1', 'Jalapeno x1', 'Red onion x1', 'Red onion x1', 'Red onion x1', 'Cheese', '4:1', 'Cheese', '4:1'],
    alternativeIngredients: ['Green tabasco sauce', 'Sandwich sauce', 'Sandwich sauce', 'Pickle x1', 'Pickle x1', 'Jalapeno x1', 'Jalapeno x1', 'Red onion x1', 'Red onion x1', 'Red onion x1', 'Cheese', '4:1', 'Cheese', '4:1'],
    alternativeIngredientsTwo: ['Sandwich sauce', 'Green tabasco sauce', 'Sandwich sauce', 'Pickle x1', 'Pickle x1', 'Jalapeno x1', 'Jalapeno x1', 'Red onion x1', 'Red onion x1', 'Red onion x1', 'Cheese', '4:1', 'Cheese', '4:1'],
    usedRolls: ['upperRoll'],
  },
  {
    name: 'Podwójny WieśMac',
    ingredients: ['Mustard and horseradish sauce', 'Mustard and horseradish sauce', 'Mustard and horseradish sauce', 'Fresh onion', 'Salad', 'Tomato x1', 'Cheese', '4:1', 'Cheese', '4:1'],
    usedRolls: ['upperRoll'],
  },
  {
    name: 'Maestro RedHotChilli',
    ingredientsOnUpperRoll: ['Sandwich sauce', 'Red hot sauce', 'Pickle x1', 'Pickle x1', 'Pickle x1', 'Chilli', 'Arugula', 'Cheese', 'Thicker'],
    ingredientsOnBottomRoll: ['Sandwich sauce', 'Red hot sauce'],
    alternativeIngredientsOnUpperRoll: ['Red hot sauce', 'Sandwich sauce', 'Pickle x1', 'Pickle x1', 'Pickle x1', 'Chilli', 'Arugula', 'Cheese', 'Thicker'],
    alternativeIngredientsOnBottomRoll: ['Red hot sauce', 'Sandwich sauce'],
    usedRolls: ['upperRoll', 'bottomRoll'],
  },
  {
    name: 'MaestroGrilledCheese',
    ingredientsOnUpperRoll: ['Ketchup', 'American mustard', 'Roasted onion', 'Pickle x1', 'Pickle x1', 'Pickle x1', 'Pickle x1', 'Pickle x1', 'Kotk', 'Thicker'],
    ingredientsOnBottomRoll: ['Cheese', 'Bacon x1', 'Bacon x1'],
    alternativeIngredientsOnUpperRoll: ['American mustard', 'Ketchup', 'Roasted onion', 'Pickle x1', 'Pickle x1', 'Pickle x1', 'Pickle x1', 'Pickle x1', 'Kotk', 'Thicker'],
    alternativeIngredientsOnBottomRoll: ['Cheese', 'Bacon x1', 'Bacon x1'],
    usedRolls: ['upperRoll', 'bottomRoll'],
  },
  {
    name: 'Sweet&Spicy burger',
    ingredients: ['Caramelized onion sauce', 'Caramelized onion sauce', 'Spicy sauce', 'Red onion x1', 'Red onion x1', 'Red onion x1', 'Batawia', 'Cheese', 'Supreme'],
    alternativeIngredients: ['Spicy sauce', 'Caramelized onion sauce', 'Caramelized onion sauce', 'Red onion x1', 'Red onion x1', 'Red onion x1', 'Batawia', 'Cheese', 'Supreme'],
    alternativeIngredientsTwo: ['Caramelized onion sauce', 'Spicy sauce', 'Caramelized onion sauce', 'Red onion x1', 'Red onion x1', 'Red onion x1', 'Batawia', 'Cheese', 'Supreme'],
    usedRolls: ['upperRoll'],
  },
];