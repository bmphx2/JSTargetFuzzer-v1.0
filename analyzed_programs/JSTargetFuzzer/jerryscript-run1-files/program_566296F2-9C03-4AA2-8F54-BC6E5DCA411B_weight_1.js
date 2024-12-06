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
const v26 = new f6(v16);
function F27(a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = F0;
    this.g = a29;
    this.e = a30;
}
const v32 = new F27(v17, v26, v26);
const v33 = new F27(v15, v32, v16);
new F27(v33, v33, v26);
const v36 = [];
function f37() {
    return v36;
}
try { new f20(f20, v17, -1e-15, f6, ...1.7976931348623157e+308); } catch (e) {}
const v43 = F0++;
v43 / 9.68798047470841e+307;
!F0;
Math.fround(f37);
function F47(a49, a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
}
const v52 = new F47(v36, v36, v36);
const o54 = {
    ...v5,
    "g": f37,
    "e": v26,
    12: v43,
    "a": F47,
    "defineProperty": f37,
};
const v56 = new Proxy(v52, o54);
function f57() {
    return f57;
}
function f58() {
    return o54;
}
Object.defineProperty(v56, -16, { configurable: true, get: f58, set: f57 });
