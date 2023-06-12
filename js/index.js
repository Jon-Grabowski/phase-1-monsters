const monsterContainer = document.getElementById
('monster-container');
const nextButton = document.getElementById('forward');
const backButton = document.getElementById('back');
const form = document.getElementById('new-monster-form');

fetch('http://localhost:3000/monsters')
    .then(res => res.json())
    .then(monsterData => {
        displayMonsters(monsterData, 0, 10)
    }
);

function displayMonsters(monsterData, start, end) {
    monsterData.slice(start, end).forEach(monster => renderMonster(monster));
};

function renderMonster(monster) {
    const oneMonster = document.createElement('div');
    oneMonster.className = 'displayed-monster';
    const name = document.createElement('h2');
    name.innerText = monster.name;
    const age = document.createElement('p');
    age.innerText = `Age: ${Math.floor(monster.age)}`;
    age.style = 'font-weight: bold'
    const bio = document.createElement('p');
    bio.innerText = `Bio: ${monster.description}`;
    oneMonster.append(name, age, bio);
    monsterContainer.append(oneMonster);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const monsterName = form['monster-name'].value;
    const monsterAge = form['monster-age'].value;
    const monsterBio = form['monster-description'].value;
    const newMonster = {
        name: monsterName,
        age: monsterAge,
        description: monsterBio
    }
    renderMonster(newMonster);
    form.reset();
    alert(`${monsterName} has been addedto the monster list!`);
});