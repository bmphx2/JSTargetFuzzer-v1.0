function f0() {
    const o4 = {
        [-4294967297]: 10,
        "d": -4294967297,
        "e": -4294967296,
        "f": -4294967297,
        "b": -4294967297,
        ...-4294967296,
        __proto__: 10,
        "c": -4294967297,
        "a": -4294967297,
        ...-4294967297,
        "h": -4294967297,
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v8 = Symbol.unscopables;
v6[v8] = v8;
v8.description = v8;
v6[7] = v8;
const v9 = f0();
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a12;
    this.a = a12;
    this.e = a12;
}
const v13 = new F10(v6);
const v14 = new F10(v6);
const v15 = new F10(v13);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a20;
}
const v22 = new F16(v14, v6, v13, v9);
new F16(v6, v5, v15, v14);
new F16(v6, v5, v15, v22);
new RegExp(-1625950444);
