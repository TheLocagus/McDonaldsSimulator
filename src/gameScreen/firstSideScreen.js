import {
  setButtonRollsForBigMac,
  setButtonRollsForOtherSandwiches,
  handleButtonRollClick,
  createPlayerChoicesPanelForCommonSandwiches,
  createPlayerChoicesPanelForBigMac,
  createPlayerChoicesPanelForSandwichesWithUpperAndBottomRolls,
  showSandwichName,
  setStartStyles,
  resetStyles,
  removePreviousSandwichName,
  turnOffIngredientsButtons,
  removeRollButtons,
  removePlayerChoicesPanel,
  showPlayerChoiceInFirstPanel,
  showPlayerChoiceInSecondPanel,
  handleCorrectCompletion,
} from '../functions.js';

const enterTheGameBtn = document.querySelector('button.start');
const startTheGameBtn = document.querySelector('button.start-game-by-first-side');
const cancelTheGameBtn = document.querySelector('button.cancel-game-by-first-side');
const backdropBeforePickingRoll = document.querySelector('.backdrop-before-picking-roll');
const inGamePanel = document.querySelector('.in-game-panel');
const inGamePanelTwo = document.querySelector('.in-game-panel-two');
const rollsPanel = document.querySelector('.rolls');
const gameRoot = document.querySelector('.game-root');
const gameUi = document.querySelector('.game-ui');
const inGameOrder = document.querySelector('.in-game-order');
const ingredientElements = [...document.querySelectorAll('[data-category="ingredient"]')];

let firstSandwich;
const gameButtons = ingredientElements;
let playerSolution = [];
let playerSolutionTwo = [];

const enterToGameUi = () => {
  gameUi.style.display = 'block';
  gameRoot.style.display = 'none';
  startTheGameBtn.style.display = 'block';
  cancelTheGameBtn.style.display = 'none';
};

const cancelGame = ()=>{
  resetStyles(firstSandwich, gameUi, gameRoot, startTheGameBtn, cancelTheGameBtn, backdropBeforePickingRoll, playerSolution);
  removePreviousSandwichName(inGameOrder);
  turnOffIngredientsButtons(gameButtons);
  removeRollButtons(rollsPanel);
  removePlayerChoicesPanel(inGamePanel, inGamePanelTwo);
};

function startGame(){
	firstSandwich = buildup[Math.floor(Math.random() * buildup.length)];
  let playerRollChoice = null;

  setStartStyles(startTheGameBtn, cancelTheGameBtn, backdropBeforePickingRoll);
  showSandwichName(inGameOrder, firstSandwich);

  if(firstSandwich.name === 'BigMac'){
    setButtonRollsForBigMac(rollsPanel);
  } else {
    setButtonRollsForOtherSandwiches(rollsPanel);
  }
  const rollButtons = [...document.querySelectorAll('[data-id="roll"]')];

  handleButtonRollClick(rollButtons, firstSandwich, backdropBeforePickingRoll, gameButtons, cancelGame, playerRollChoice);

  if(firstSandwich.usedRolls.length === 1 && firstSandwich.ingredients !== undefined){
    createPlayerChoicesPanelForCommonSandwiches(inGamePanel, firstSandwich);
  } else if (firstSandwich.name === 'BigMac'){
    createPlayerChoicesPanelForBigMac(inGamePanel, inGamePanelTwo, firstSandwich);
  } else {
    createPlayerChoicesPanelForSandwichesWithUpperAndBottomRolls(inGamePanel, inGamePanelTwo, firstSandwich);
  }
}

function getProduct (){
  try{
    let chosenProduct;
    for (const ingredient of ingredients) {
      if (ingredient.name === this.dataset.name) {
        chosenProduct = ingredient.name;
        const hasSandwichOneRollToUse = firstSandwich.usedRolls.length === 1;
        const isSandwichNameBigMac = firstSandwich.usedRolls.length !== 1 && firstSandwich.name === 'BigMac';
        const hasSandwichTwoRollsToUse = firstSandwich.usedRolls.length === 2 && firstSandwich.name !== 'BigMac';
        if(hasSandwichOneRollToUse){
          playerSolution.push(chosenProduct);
          const hasSandwichTwoWaysToBuild = firstSandwich.alternativeIngredients !== undefined && firstSandwich.alternativeIngredientsTwo === undefined;
          const hasSandwichOneWayToBuild = firstSandwich.alternativeIngredients === undefined && firstSandwich.alternativeIngredientsTwo === undefined;
          if(hasSandwichTwoWaysToBuild){
            const isAnyIngredientWrongOfTwoPossibleWays = (firstSandwich.ingredients[playerSolution.length-1] !== playerSolution[playerSolution.length-1] && firstSandwich.alternativeIngredients[playerSolution.length-1] !== playerSolution[playerSolution.length-1]);
            if(isAnyIngredientWrongOfTwoPossibleWays){
            throw new Error('Zły składnik!');
          } else {
            showPlayerChoiceInFirstPanel(playerSolution);
          }
            const areAllIngredientsOfTwoPossibilitiesFine = firstSandwich.ingredients.length === playerSolution.length || firstSandwich.alternativeIngredients.length === playerSolution.length;
          if(areAllIngredientsOfTwoPossibilitiesFine){
            handleCorrectCompletion(cancelGame)
          }
        } else if(hasSandwichOneWayToBuild){
           const isAnyIngredientWrongOfOnePossibleWay = firstSandwich.ingredients[playerSolution.length-1] !== playerSolution[playerSolution.length-1];
          if(isAnyIngredientWrongOfOnePossibleWay){
            throw new Error('Zły składnik!');
          } else {
            showPlayerChoiceInFirstPanel(playerSolution);
          }
          const areAllIngredientsOfOnePossibilityFine = firstSandwich.ingredients.length === playerSolution.length;
          if(areAllIngredientsOfOnePossibilityFine){
            handleCorrectCompletion(cancelGame)
          }
        } else{
            const isAnyIngredientWrongOfThreePossibleWays = firstSandwich.ingredients[playerSolution.length-1] !== playerSolution[playerSolution.length-1] && firstSandwich.alternativeIngredients[playerSolution.length-1] !== playerSolution[playerSolution.length-1] && firstSandwich.alternativeIngredientsTwo[playerSolution.length-1] !== playerSolution[playerSolution.length-1];
            if(isAnyIngredientWrongOfThreePossibleWays){
              throw new Error('Zły składnik!');
            } else {
              showPlayerChoiceInFirstPanel(playerSolution);
            }
            const areAllIngredientsOfThreePossibilitiesFine = firstSandwich.ingredients.length === playerSolution.length || firstSandwich.alternativeIngredients.length === playerSolution.length || firstSandwich.alternativeIngredientsTwo.length === playerSolution.length;
            if(areAllIngredientsOfThreePossibilitiesFine){
              handleCorrectCompletion(cancelGame);
            }
          }
        } else if(isSandwichNameBigMac){
            const activeRollBtn = document.querySelector('#focusedBtn');
            if(activeRollBtn.attributes[2].nodeValue === 'middleRoll'){
            playerSolution.push(chosenProduct);
            const isAnyIngredientWrongOfBigMacOnMiddleRoll = playerSolution[playerSolution.length - 1] !== firstSandwich.ingredientsOnMiddleRoll[playerSolution.length-1];
              if(isAnyIngredientWrongOfBigMacOnMiddleRoll){
                throw new Error('Zły składnik na środkowej bułce');
              } else {
                showPlayerChoiceInFirstPanel(playerSolution);
              }
          } else if (activeRollBtn.attributes[2].nodeValue === 'bottomRoll'){
              playerSolutionTwo.push(chosenProduct)
              const isAnyIngredientWrongOfBigMacOnBottomRoll = playerSolutionTwo[playerSolutionTwo.length - 1] !== firstSandwich.ingredientsOnBottomRoll[playerSolutionTwo.length-1];
              if(isAnyIngredientWrongOfBigMacOnBottomRoll){
                throw new Error('Zły składnik na dolnej bułce');
              } else{
                showPlayerChoiceInSecondPanel(playerSolutionTwo);
              }
            }
        const areAllIngredientsOfBigMacFine = playerSolution.length === firstSandwich.ingredientsOnMiddleRoll.length && playerSolutionTwo.length === firstSandwich.ingredientsOnBottomRoll.length;
          if(areAllIngredientsOfBigMacFine){
            handleCorrectCompletion(cancelGame)
          }
        } else if (hasSandwichTwoRollsToUse) {
          const activeRollBtn = document.querySelector('#focusedBtn')
          if(activeRollBtn.attributes[2].nodeValue === 'upperRoll'){
            playerSolution.push(chosenProduct);
            const isAnyIngredientWrongOfTwoPossibleWaysOnUpperRoll = playerSolution[playerSolution.length-1]!==firstSandwich.ingredientsOnUpperRoll[playerSolution.length-1] && playerSolution[playerSolution.length-1]!==firstSandwich.alternativeIngredientsOnUpperRoll[playerSolution.length-1];
            if(isAnyIngredientWrongOfTwoPossibleWaysOnUpperRoll){
              throw new Error('Zły składnik na górnej bułce');
            } else {
              showPlayerChoiceInFirstPanel(playerSolution);
            }
          } else if (activeRollBtn.attributes[2].nodeValue === 'bottomRoll'){
            playerSolutionTwo.push(chosenProduct);
            const isAnyIngredientWrongOfTwoPossibleWaysOnBottomRoll = playerSolutionTwo[playerSolutionTwo.length-1]!==firstSandwich.ingredientsOnBottomRoll[playerSolutionTwo.length-1] && playerSolutionTwo[playerSolutionTwo.length-1]!==firstSandwich.alternativeIngredientsOnBottomRoll[playerSolutionTwo.length-1];
            if(isAnyIngredientWrongOfTwoPossibleWaysOnBottomRoll){
              throw new Error('Zły składnik na dolnej bułce');
            } else{
              showPlayerChoiceInSecondPanel(playerSolutionTwo);
            }
          }
        const areAllIngredientsOfTwoPossibilitiesOnTwoRollsFine = (playerSolution.length === firstSandwich.ingredientsOnUpperRoll.length && playerSolutionTwo.length === firstSandwich.ingredientsOnBottomRoll.length) || (playerSolution.length === firstSandwich.alternativeIngredientsOnUpperRoll.length && playerSolutionTwo.length === firstSandwich.alternativeIngredientsOnBottomRoll.length);
          if(areAllIngredientsOfTwoPossibilitiesOnTwoRollsFine){
            handleCorrectCompletion(cancelGame)
          }
        }
      }
    }
  }catch(err){
    alert(err.message);
    cancelGame();
  }
}

for (const ingredientElement of ingredientElements) {
  ingredientElement.addEventListener('click', getProduct);
}

enterTheGameBtn.addEventListener('click', enterToGameUi);
startTheGameBtn.addEventListener('click', startGame);
cancelTheGameBtn.addEventListener('click', cancelGame);