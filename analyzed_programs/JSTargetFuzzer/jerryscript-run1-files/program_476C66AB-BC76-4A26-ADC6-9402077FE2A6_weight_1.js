function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1073741824;
    this.e = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o14 = {
        __proto__: a7,
        get g() {
            this.e = F0;
            const v10 = new Map();
            return v10;
        },
        [a7]: v5,
    };
    return o14;
}
const v15 = f6(v5);
const v16 = f6(v5);
const v17 = f6(v4);
function f20(a21, a22, a23, a24) {
    a24[a24] = v16;
    v15[v15] = v4;
    return v3;
}
f20(v5, v16, -1e-15, v16);
const v27 = [];
function f28() {
    return v27;
}
try { new f20(f20, v17, -1e-15, f6, ...1.7976931348623157e+308); } catch (e) {}
F0++ / 9.68798047470841e+307;
!F0;
Math.fround(f28);
function F38(a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
}
const v43 = new F38(v27, v27, v27);
const o45 = {
    "defineProperty": f28,
};
const v47 = new Proxy(v43, o45);
function f48() {
    return f48;
}
function f49() {
    return o45;
}
Object.defineProperty(v47, -16, { configurable: true, get: f49, set: f48 });
