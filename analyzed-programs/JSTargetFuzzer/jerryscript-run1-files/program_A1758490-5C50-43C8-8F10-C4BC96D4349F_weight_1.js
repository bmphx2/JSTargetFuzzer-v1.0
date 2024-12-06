function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -960994661;
}
let v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = new WeakMap();
function f9(a10, a11, a12, a13) {
    const o27 = {
        "e": true,
        "g": F0,
        9: a10,
        0: v3,
        m(a15, a16, a17, a18) {
            ++v3;
            a11 %= a16;
            return a15;
        },
        o(a21, a22, a23, a24) {
            try { a24["m"](a11, a12, a22, "m", f9); } catch (e) {}
            return a13;
        },
        2728796353: v4,
        "c": v3,
        "a": WeakMap,
    };
    return o27;
}
const v29 = f9(f9(WeakMap, v4, v5, v4), v8, v4, v5);
f9(F0, v8, v8, v3);
function f34() {
}
new Uint8Array(0);
let v48 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v50 = new Int32Array(127);
v48 /= v50;
new WeakSet();
new BigInt64Array(2);
v29[1073741825];
v50[v3] = BigInt64Array;
([5]).reverse();
