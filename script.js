const creatures = [];
counter = 1;

(() => {
  'use stick';
  console.log('I am loaded')
})()

function createMonster(event) {
  event.preventDefault()
  console.log('I was clicked')
  let name = document.getElementById('name').value;
  if (!name) {
    name = `Creature ${counter}`;
    counter += 1;
  }
  const hp = document.getElementById('hp').value;
  const newCreature = { name, hp }
  creatures.push(newCreature)
  const index = creatures.length - 1;
  displayCreature(newCreature, index);
}

function displayCreature(creature, index) {
  const container = document.getElementById('myCreatures');
  const li = document.createElement('li')
  li.innerText = `${creature.name}: ${creature.hp}`
  li.setAttribute('id', 'creature' + index)
  container.appendChild(li)
}