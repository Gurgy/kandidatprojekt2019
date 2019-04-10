import Level from '@/levels/level'
import Log from '../characters/log'
import Boulder from '../characters/boulder'
import FireBat from '../characters/firebat'

export default new Level(
  7, // Id
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
    new FireBat(3, 0, 1, 1, 100),
    new FireBat(7, 0, 1, 1, 100),
  ],
  [ // Obstacles
    new Boulder(3, 6, 1, 1),
    new Log(7, 6, 1, 1),
  ]
)
