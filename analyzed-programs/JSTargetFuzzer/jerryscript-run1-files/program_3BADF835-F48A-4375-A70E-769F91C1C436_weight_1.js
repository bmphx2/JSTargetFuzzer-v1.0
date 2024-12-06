function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4294967297;
    this.g = a5;
}
new F3(9);
const v7 = new F3(9);
new F3(4294967297);
new WeakMap();
const v14 = [9007199254740990];
v7.length = 13;
const o16 = {
    __proto__: v14,
};
o16.indexOf(13);
