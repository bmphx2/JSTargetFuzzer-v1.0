function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 10;
    this.b = -536707168;
}
new F9(F9, -268435456, 40419);
const v15 = new F9(268435440, 268435440, 40419);
new F9(v15, 257, -536707168);
const v21 = Symbol.toPrimitive;
const o25 = {
    [v21]() {
        this in this;
        this[4] = "split";
        delete v15?.b;
        return 10;
    },
};
