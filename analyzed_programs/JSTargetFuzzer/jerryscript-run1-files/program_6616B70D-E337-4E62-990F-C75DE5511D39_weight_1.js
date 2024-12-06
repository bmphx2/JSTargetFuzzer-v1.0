function f0() {
}
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    a11.h = -1;
    this.g = 1073741823;
    this.e = 3;
}
new F7(3, "string", -1, F7);
const v14 = new F7(-1, "PI", F7, F7, f0);
new F7(-1, v14, v14, F7);
const v17 = new Map();
function f18() {
    return f18;
}
for (let v19 = 0; v19 < 5; v19++) {
    Object.defineProperty(v17, 536870888, { enumerable: true, set: f18 });
}
