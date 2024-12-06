function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -12;
    this.g = -12;
    this.b = -12;
}
new F0();
new F0();
const v5 = new F0();
new WeakMap();
function f11() {
    return v5;
}
new Map();
const v17 = [];
v17.toLocaleString(v17, v17);
