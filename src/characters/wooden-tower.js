import Tower from './tower'

export default class WoodenTower extends Tower {
  size = 200

  imageAnchor = {
    x: 0.5,
    y: 0.6,
  }

  /**
   * The range from the Wooden Tower within which other entities takes damage.
   * @type {number}
   */
  damageRange = 4

  /**
   * The damage made per second when dealing damage.
   * @type {number}
   */
  attackDamage = 10

  getAsset (assets) {
    return assets[WoodenTower.assetPaths[0]]
  }

  static assetPaths = [
    'assets/wooden-tower.svg',
  ]
}
