const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function getSpecials(obj) {
  const specials = obj.special; const
    newArrow = [];
  specials.forEach(({
    id, name, icon, description = 'Описание недоступно',
  }) => {
    newArrow.push({
      id, name, icon, description,
    });
  });
  return newArrow;
}

getSpecials(character);
