function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 61100;
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a5;
    }
    const v6 = new F3(this);
    const v7 = new F3(F0);
    try { v6.valueOf(v7, 9223372036854775807, -12); } catch (e) {}
    v6.b = -4096;
    new F3(F0);
    this.g = 61100;
}
new F0();
new F0();
const v15 = new F0();
let v16 = undefined;
const o19 = {
    get c() {
        v16 = arguments;
        return this;
    },
};
const o20 = {
    ...o19,
};
Math.asinh(v16) ^ v16;
function f24() {
    return v15;
}
const v34 = [];
v34.toLocaleString(v34, v34);
