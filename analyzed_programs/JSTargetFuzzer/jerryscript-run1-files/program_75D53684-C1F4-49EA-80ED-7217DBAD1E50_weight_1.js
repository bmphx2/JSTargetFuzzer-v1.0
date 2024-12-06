function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.toPrimitive = a10;
    this.matchAll = 268435439n;
}
const v12 = new F6("number", "d", -256n, "alYF");
const v13 = new F6(-256n, "number", v12, "alYF");
new F6(v13, "alYF", v13, "alYF");
let v21 = -9007199254740990n;
v21 /= -1214296195n;
