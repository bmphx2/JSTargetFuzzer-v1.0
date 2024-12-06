function f3() {
    return 9;
}
function f7(a8, a9) {
    const o10 = {
        "b": 13n,
        ...a9,
        5: 9,
        [9]: 13n,
        4: f3,
        "f": a8,
        "MIN_VALUE": 1000n,
        "g": a8,
        "a": f3,
        "c": 9,
        [-268435456n]: a8,
        __proto__: -268435456n,
    };
    return o10;
}
f7(56730, 56730, 9, 1000n);
f7(7, 56730);
f7(9, 7);
const v19 = new Uint32Array(181);
let v21 = BigInt64Array;
let v22 = new v21(1);
let v23 = 253;
[v23,,v21,v22] = v19;
try { v21["abs"](181, v23, v21); } catch (e) {}
new Uint16Array(v23, Uint32Array, -4294967295, v21);
for (let i36 = 0; i36 < 2; i36++) {
    const v42 = new Function("x");
    v42.name;
}
Function();
