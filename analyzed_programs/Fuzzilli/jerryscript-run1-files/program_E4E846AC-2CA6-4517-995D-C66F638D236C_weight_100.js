const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
    this.g = v0;
}
const v3 = new F1();
new F1();
const v5 = new F1();
function f6() {
    return v0;
}
function f10() {
    return v3;
}
let v16 = !(v5 && v5);
~30587n;
-4294967297 * v16++;
for (let v20 = 0; v20 < 32; v20++) {
    v0["p" + v20] = v20;
}
