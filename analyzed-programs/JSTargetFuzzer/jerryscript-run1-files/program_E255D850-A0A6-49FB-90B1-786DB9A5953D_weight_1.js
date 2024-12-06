const v1 = new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a4;
}
const v6 = new F2(WeakSet, WeakSet);
const v7 = new F2(v1, v6);
const v8 = new F2(v1, v7);
const v10 = v1 instanceof F2;
for (let v11 = 0; v11 < 32; v11++) {
    v6["p" + v11] = v11;
}
function f16(a17, a18, a19) {
    const o27 = {
        "e": v8,
        "c": "-4294967297",
        __proto__: v1,
        "h": a17,
        n(a21, a22, a23, a24) {
            Object.defineProperty(v6, v6, { writable: true, configurable: true, enumerable: true, value: a18 });
            a18["2wJ9"](a19);
            return a24;
        },
        ...a17,
        ...v7,
    };
    return o27;
}
f16(f16(v6, "1365719848", "string"), "-4294967297", "string");
f16(v8, "-4294967297", f16);
const v33 = new Int32Array(2083);
v33.valueOf = f16;
f16(v7, v10, v33);
const v40 = !97.25229307350014;
v40 + 97.25229307350014;
~v6;
const v43 = Function & v6;
97.25229307350014 ^ 2147483647;
v40 && v43;
new Uint8Array(255);
const v50 = new Int16Array(7);
function f51(a52, a53, a54) {
    const o61 = {
        "h": Int32Array,
        set e(a56) {
            e = a53;
            [a54,a53];
            [v33];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v50,
        "b": Uint8Array,
        "c": 255,
        ...a52,
        1053877365: a53,
    };
    return o61;
}
const v62 = f51(2083, 255, 7);
const v63 = f51(v62, 7, 2083);
f51(f51, 255, 7);
v62[-2] &= 2083;
v50[-1] -= 7;
try { v7.bind(Int32Array); } catch (e) {}
v62[670238588];
let v70 = 10;
for (; v70--;) {
    v63.h;
    v63[Symbol.toPrimitive] = 7;
}
