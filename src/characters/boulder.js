import Obstacle from './obstacle'
import { displayCoordinates } from '@/utility/graphics'

class Boulder extends Obstacle {
  draw ({ sketch, assets, board }) {
    let img = assets['rock']
    let coordinates = displayCoordinates(sketch, board, this.x, this.y)

    let changeFactor = this.size * coordinates.perspective / img.width
    sketch.image(img, coordinates.x - (this.size * coordinates.perspective / 2), coordinates.y -
            (img.height * changeFactor), img.width * changeFactor, img.height * changeFactor)
  }

  static image = 'assets/rock.svg'
}

export default Boulder
