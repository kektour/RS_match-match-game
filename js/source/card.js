class Card {
  constructor(type, suit) {
    this.type = type;
    this.suit = suit;
  }
}

export default class virtualCard extends Card {
  constructor(r, c, uniqueID, type, suit) {
    super(type, suit);
    this.r = r;
    this.c = c;
    this.uniqueID = uniqueID;
  }
}
