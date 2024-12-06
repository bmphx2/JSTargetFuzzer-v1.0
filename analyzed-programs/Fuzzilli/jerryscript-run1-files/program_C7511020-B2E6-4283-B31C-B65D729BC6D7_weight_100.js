function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a6;
}
const v7 = new F4(255);
const v8 = new F4(255);
const v9 = new F4(255);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    a12.h = v8;
    this.g = a13;
}
new F10(v7, v8);
new F10(v9, v7);
new F10(v9, v7);
typeof 15n;
