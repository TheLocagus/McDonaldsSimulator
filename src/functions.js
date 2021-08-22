export function setStartStyles(startTheGameBtn, cancelTheGameBtn, backdropBeforePickingRoll) {
  startTheGameBtn.style.display = 'none';
  cancelTheGameBtn.style.display = 'block';
  backdropBeforePickingRoll.style.zIndex = '1';
}

export function resetStyles(firstSandwich, gameUi, gameRoot, startTheGameBtn, cancelTheGameBtn, backdropBeforePickingRoll, playerSolution) {
  gameUi.style.display = 'block';
  gameRoot.style.display = 'none';
  startTheGameBtn.style.display = 'block';
  cancelTheGameBtn.style.display = 'none';
  backdropBeforePickingRoll.style.zIndex = '-9999';
  playerSolution.splice(0, playerSolution.length);
  firstSandwich = null;
}

export function removePreviousSandwichName(inGameOrder) {
  const h3SandwichName = document.querySelector('[data-id="h3SandwichName"]');
  inGameOrder.removeChild(h3SandwichName);
}

export function turnOffIngredientsButtons(gameButtons) {
  gameButtons.forEach((button) => {
    button.disabled = true;
  });
}

export function removeRollButtons(rollsPanel) {
  const rollButtons = [...document.querySelectorAll('[data-id="roll"]')];
  for (let i = 0; i < rollButtons.length; i++) {
    rollsPanel.removeChild(rollButtons[i]);
  }
}

export function removePlayerChoicesPanel(inGamePanel, inGamePanelTwo) {
  const divPanelWrap = document.querySelector('.div-panel-wrap');
  const divPanelTwoWrap = document.querySelector('.div-panel-two-wrap');
  const pPanel = document.querySelector('.p-panel');
  const pPanelTwo = document.querySelector('.p-panel-two');

  if (pPanelTwo && divPanelTwoWrap !== undefined) {
    inGamePanelTwo.removeChild(divPanelTwoWrap);
    inGamePanelTwo.removeChild(pPanelTwo);
  }
  inGamePanel.removeChild(divPanelWrap);
  inGamePanel.removeChild(pPanel);
}

export function showSandwichName(inGameOrder, firstSandwich) {
  const h3 = document.createElement('h3');
  h3.setAttribute('data-id', 'h3SandwichName');
  h3.classList.add('h3-sandwich-name');
  const h3SandwichName = inGameOrder.appendChild(h3);
  h3SandwichName.innerText = `${firstSandwich.name}`;
}

export function setButtonRollsForBigMac(rollsPanel) {
  for (let i = 0; i < 3; i++) {
    const button = document.createElement('button');
    button.setAttribute('data-id', 'roll');
    button.setAttribute('data-category', 'ingredient');
    if (i === 0) {
      button.setAttribute('data-name', 'upperRoll');
      const buttonRoll = rollsPanel.appendChild(button);
      buttonRoll.innerText = 'Górna bułka';
    } else if (i === 1) {
      button.setAttribute('data-name', 'middleRoll');
      const buttonRoll = rollsPanel.appendChild(button);
      buttonRoll.innerText = 'Środkowa bułka';
    } else {
      button.setAttribute('data-name', 'bottomRoll');
      const buttonRoll = rollsPanel.appendChild(button);
      buttonRoll.innerText = 'Dolna bułka';
    }
  }
}

export function setButtonRollsForOtherSandwiches(rollsPanel) {
  for (let i = 0; i < 2; i++) {
    const button = document.createElement('button');
    button.setAttribute('data-id', 'roll');
    button.setAttribute('data-category', 'ingredient');
    if (i === 0) {
      button.setAttribute('data-name', 'upperRoll');
      const buttonRoll = rollsPanel.appendChild(button);
      buttonRoll.innerText = 'Górna bułka';
    } else {
      button.setAttribute('data-name', 'bottomRoll');
      const buttonRoll = rollsPanel.appendChild(button);
      buttonRoll.innerText = 'Dolna bułka';
    }
  }
}

export function handleButtonRollClick(rollButtons, firstSandwich, backdropBeforePickingRoll, gameButtons, cancelGame, playerRollChoice) {
  rollButtons.forEach((button) => {
    button.addEventListener('click', function () {
      try {
        rollButtons.forEach((button) => {
          button.removeAttribute('id');
        });
        button.id = ('focusedBtn');
        playerRollChoice = this.dataset.name;
        if (firstSandwich.usedRolls.indexOf(playerRollChoice) === -1) {
          throw new Error('wybrałeś złą bułkę');
        } else {
          backdropBeforePickingRoll.style.zIndex = '-9999';
          gameButtons.forEach((button) => {
            button.disabled = false;
          });
        }
        if (firstSandwich.name === 'BigMac') {
          if (playerRollChoice === 'middleRoll') {
            const pPanel = document.querySelector('.p-panel');
            pPanel.innerText = 'Bułka środkowa';
          } else {
            const pPanelTwo = document.querySelector('.p-panel-two');
            pPanelTwo.innerText = 'Bułka dolna';
          }
        } else if (firstSandwich.usedRolls.length === 1 && (firstSandwich.name !== 'Chikker' && firstSandwich.name !== 'Red Chikker')) {
          const pPanel = document.querySelector('.p-panel');
          pPanel.innerText = 'Bułka górna';
        } else if ((firstSandwich.usedRolls.length === 1) && (firstSandwich.name === 'Chikker' || firstSandwich.name === 'Red Chikker')) {
          const pPanel = document.querySelector('.p-panel');
          pPanel.innerText = 'Bułka dolna';
        } else if (playerRollChoice === 'upperRoll') {
          const pPanel = document.querySelector('.p-panel');
          pPanel.innerText = 'Bułka górna';
        } else {
          const pPanelTwo = document.querySelector('.p-panel-two');
          pPanelTwo.innerText = 'Bułka dolna';
        }
      } catch (err) {
        alert(`Koniec gry - ${err.message}`);
        cancelGame();
      }
    });
  });
}

export function createPlayerChoicesPanelForCommonSandwiches(inGamePanel, firstSandwich) {
  const divPanelWrap = document.createElement('div');
  const pPanel = document.createElement('p');
  divPanelWrap.classList.add('div-panel-wrap');
  pPanel.classList.add('p-panel');
  inGamePanel.appendChild(pPanel);
  inGamePanel.appendChild(divPanelWrap);
  for (let i = 0; i < firstSandwich.ingredients.length; i++) {
    const divPanel = document.createElement('div');
    const widthDiv = `${100 / firstSandwich.ingredients.length}%`;
    divPanel.style.width = widthDiv;
    divPanelWrap.appendChild(divPanel);
    divPanel.setAttribute('data-id', `${i}`);
    divPanel.setAttribute('data-panel', 'panel');
  }
}

export function createPlayerChoicesPanelForBigMac(inGamePanel, inGamePanelTwo, firstSandwich) {
  const divPanelWrap = document.createElement('div');
  divPanelWrap.classList.add('div-panel-wrap');
  const divPanelTwoWrap = document.createElement('div');
  divPanelTwoWrap.classList.add('div-panel-two-wrap');
  const pPanel = document.createElement('p');
  pPanel.classList.add('p-panel');
  const pPanelTwo = document.createElement('p');
  pPanelTwo.classList.add('p-panel-two');
  inGamePanel.appendChild(pPanel);
  inGamePanel.appendChild(divPanelWrap);
  inGamePanelTwo.appendChild(pPanelTwo);
  inGamePanelTwo.appendChild(divPanelTwoWrap);
  for (let i = 0; i < firstSandwich.ingredientsOnMiddleRoll.length; i++) {
    const divPanel = document.createElement('div');
    const widthDiv = `${100 / (firstSandwich.ingredientsOnMiddleRoll.length > firstSandwich.ingredientsOnBottomRoll.length ? firstSandwich.ingredientsOnMiddleRoll.length : firstSandwich.ingredientsOnBottomRoll.length)}%`;
    divPanel.style.width = widthDiv;
    divPanelWrap.appendChild(divPanel);
    divPanel.setAttribute('data-id', `${i}`);
    divPanel.setAttribute('data-panel', 'panel');
  }
  for (let i = 0; i < firstSandwich.ingredientsOnBottomRoll.length; i++) {
    const divPanel = document.createElement('div');
    const widthDiv = `${100 / (firstSandwich.ingredientsOnMiddleRoll.length > firstSandwich.ingredientsOnBottomRoll.length ? firstSandwich.ingredientsOnMiddleRoll.length : firstSandwich.ingredientsOnBottomRoll.length)}%`;
    divPanel.style.width = widthDiv;
    divPanelTwoWrap.appendChild(divPanel);
    divPanel.setAttribute('data-id-two', `${i}`);
    divPanel.setAttribute('data-panel-two', 'panel-two');
  }
}

export function createPlayerChoicesPanelForSandwichesWithUpperAndBottomRolls(inGamePanel, inGamePanelTwo, firstSandwich) {
  const divPanelWrap = document.createElement('div');
  divPanelWrap.classList.add('div-panel-wrap');
  const divPanelTwoWrap = document.createElement('div');
  divPanelTwoWrap.classList.add('div-panel-two-wrap');
  const pPanel = document.createElement('p');
  pPanel.classList.add('p-panel');
  const pPanelTwo = document.createElement('p');
  pPanelTwo.classList.add('p-panel-two');
  inGamePanel.appendChild(pPanel);
  inGamePanel.appendChild(divPanelWrap);
  inGamePanelTwo.appendChild(pPanelTwo);
  inGamePanelTwo.appendChild(divPanelTwoWrap);
  for (let i = 0; i < firstSandwich.ingredientsOnUpperRoll.length; i++) {
    const widthDiv = `${100 / (firstSandwich.ingredientsOnUpperRoll.length > firstSandwich.ingredientsOnBottomRoll.length ? firstSandwich.ingredientsOnUpperRoll.length : firstSandwich.ingredientsOnBottomRoll.length)}%`;
    const divPanel = document.createElement('div');
    divPanel.style.width = widthDiv;
    divPanelWrap.appendChild(divPanel);
    divPanel.setAttribute('data-id', `${i}`);
    divPanel.setAttribute('data-panel', 'panel');
  }
  for (let i = 0; i < firstSandwich.ingredientsOnBottomRoll.length; i++) {
    const longerArray = (firstSandwich.ingredientsOnUpperRoll.length > firstSandwich.ingredientsOnBottomRoll.length ? firstSandwich.ingredientsOnUpperRoll.length : firstSandwich.ingredientsOnBottomRoll.length);
    const widthDiv = `${100 / longerArray}%`;
    const divPanel = document.createElement('div');
    divPanel.style.width = widthDiv;
    divPanelTwoWrap.appendChild(divPanel);
    divPanel.setAttribute('data-id-two', `${i}`);
    divPanel.setAttribute('data-panel-two', 'panel-two');
  }
}

export function showPlayerChoiceInFirstPanel(playerSolution) {
  const numberOfIngredient = playerSolution.length - 1;
  const appropriateDiv = document.querySelector(`[data-id='${numberOfIngredient}']`);
  const p = document.createElement('p');
  p.innerText = playerSolution[numberOfIngredient];
  appropriateDiv.appendChild(p);
}

export function showPlayerChoiceInSecondPanel(playerSolutionTwo) {
  const numberOfIngredient = playerSolutionTwo.length - 1;
  const appropriateDiv = document.querySelector(`[data-id-two='${numberOfIngredient}']`);
  const p = document.createElement('p');
  p.innerText = playerSolutionTwo[numberOfIngredient];
  appropriateDiv.appendChild(p);
}

export function handleCorrectCompletion(cancelGame) {
  setTimeout(() => {
    alert('Brawo, udało się!');
    cancelGame();
  }, 0);
}
