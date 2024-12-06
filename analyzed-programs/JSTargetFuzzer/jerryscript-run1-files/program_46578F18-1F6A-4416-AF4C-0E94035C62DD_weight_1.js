function f0() {
    const o4 = {
        2: 10000,
        ...10000,
        "f": -268435456,
        [-268435456]: -4294967296,
        ...-4294967296,
        "a": -268435456,
        ...-4294967296,
        "e": -268435456,
        ...10000,
        "g": -268435456,
        ...-4294967296,
        ...-4294967296,
        "b": -4294967296,
        "h": 10000,
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    v6.a = a10;
    this.g = a11;
}
const v14 = new Int8Array(2);
const v17 = new BigUint64Array(300);
const o18 = {
    ...v17,
    [v14]: 2,
};
try { o18.getFloat32(); } catch (e) {}
new F8(v7, v5);
const v21 = new F8(v5, v6);
new F8(v6, v21);
function f29() {
}
new Uint8Array(0);
let v43 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v45 = new Int32Array(127);
v43 /= v45;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
