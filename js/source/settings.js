export default class Settings {
  constructor(
    skirt = '0',
    difficulty = {
      r: 2,
      c: 5
    }
  ) {
    this.skirt = skirt;
    this.difficulty = difficulty;
  }
}
