function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1073741824;
    this.e = 1073741824;
    this.b = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o24 = {
        p(a10, a11) {
            let v12;
            try { v12 = a7(this, a11, a10, a11, a7); } catch (e) {}
            Reflect.apply(("object").charCodeAt, a11);
            a7[0] in v12;
            return a8;
        },
        __proto__: a8,
        ...v5,
        "e": a8,
        [v4]: a7,
        get h() {
            v5.b;
            return 0.1045784156758146;
        },
        "h": a8,
        "d": a8,
        [a7]: a7,
    };
    return o24;
}
f6(v3, v3);
f6(v5, v3);
function f28() {
    return "12";
}
f28();
f6(v4, v4);
new Int32Array(3556);
new Uint8ClampedArray(96);
new Uint32Array(0);
RegExp();
([2.360868945411882,491.5638408183961,-0.0]).lastIndexOf(536870887, -1024);
const v47 = new WeakSet();
function f51(a52, a53) {
    const o57 = {
        "e": WeakSet,
        "h": a52,
        get c() {
            let v55 = "delete";
            ({"e":v55,} = v47[v55](a52, a53, v55));
            return -4294967295;
        },
        [a52]: -13,
        [WeakSet]: -4294967295,
    };
    return o57;
}
f51(8, 8);
f51(-4294967295, -13);
const v60 = f51(-13, 8);
new BigInt64Array(5);
new Uint8Array(256);
new Int32Array(1355);
async function f70(a71, a72, a73, a74) {
    'use strict';
    const t67 = 5;
    t67[2] = a72;
    return a74;
}
f70(WeakSet, v60, 1355, -13);
