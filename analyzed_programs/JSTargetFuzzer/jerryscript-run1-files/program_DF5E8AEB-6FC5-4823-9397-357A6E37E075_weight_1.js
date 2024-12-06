function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
    this.b = Infinity;
    this.h = 0.6357595234520534;
}
const v13 = new F9("e", "undefined");
const v14 = new F9(v13, "e");
new F9(v14, "toString");
("toString").indexOf(5);
