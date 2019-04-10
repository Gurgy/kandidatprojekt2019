import Level from '@/levels/level'
import Zombie from '@/characters/zombie'
import Log from '../characters/log'
import Boulder from '../characters/boulder'
import FireBat from '../characters/firebat'

export default new Level(
  10, // Id
  { // Hints
    move: [
      'The first hint',
      'The second hint',
    ],
  },
  [ // Helptexts
    'Välkommen till codeFront ...',
    '',
  ],
  [ // Entities
    new Zombie(2, 0, 1, 1, 100),
    new FireBat(8, 0, 1, 1, 100),
  ],
  [ // Obstacles
    new Log(2, 6, 1, 1),
    new Log(0, 8, 1, 1),
    new Log(4, 8, 1, 1),
    new Boulder(1, 10, 1, 1),
    new Boulder(3, 10, 1, 1),

    new Boulder(8, 6, 1, 1),
    new Boulder(6, 8, 1, 1),
    new Boulder(10, 8, 1, 1),
    new Log(7, 10, 1, 1),
    new Log(9, 10, 1, 1),
  ]
)
