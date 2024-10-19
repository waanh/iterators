import Character from './Character';
import Team from './Team';

const character1 = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const character2 = new Character('Мечник', 'Swordsman', 60, 1, 50, 20);
const character3 = new Character('Маг', 'Magician', 30, 1, 80, 5);

const team = new Team();
team.add(character1);
team.add(character2);
team.add(character3);

console.log('Итерация через обычный итератор:');
for (const member of team) {
  console.log(member);
}

console.log('Итерация через генератор:');
const generator = team.charactersGenerator();
for (const member of generator) {
  console.log(member);
}
