function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.toPrimitive = a10;
    this.g = 268435439n;
}
const v12 = new F6("number", "d", -256n, "oh0C");
const v13 = new F6(-256n, "number", v12, "oh0C");
new F6(v13, "oh0C", v13, "oh0C");
let v21 = -9007199254740990n;
v21 /= -1214296195n;
