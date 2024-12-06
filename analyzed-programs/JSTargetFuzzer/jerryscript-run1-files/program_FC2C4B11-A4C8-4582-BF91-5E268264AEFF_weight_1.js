const v1 = new WeakSet();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a4;
}
const v6 = new F2(WeakSet, WeakSet);
const v7 = new F2(v1, v6);
const v8 = new F2(v1, v7);
function f12(a13, a14, a15) {
    const o23 = {
        "e": v8,
        "c": "-4294967297",
        __proto__: v1,
        "h": a13,
        n(a17, a18, a19, a20) {
            Object.defineProperty(v6, v6, { writable: true, configurable: true, enumerable: true, value: a14 });
            a14["2wJ9"](a15);
            return a20;
        },
        ...a13,
        ...v7,
    };
    return o23;
}
f12(f12(v6, "1365719848", "string"), "-4294967297", "string");
f12(v8, "-4294967297", f12);
const v29 = new Int32Array(2083);
new Uint8Array(255);
const v35 = new Int16Array(7);
function f36(a37, a38, a39) {
    const o46 = {
        "h": Int32Array,
        set e(a41) {
            e = a38;
            [a39,a38];
            [v29];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v35,
        "b": Uint8Array,
        "c": 255,
        ...a37,
        1053877365: a38,
    };
    return o46;
}
const v47 = f36(2083, 255, 7);
const v48 = f36(v47, 7, 2083);
f36(f36, 255, 7);
v47[-2] &= 2083;
v35[-1] -= 7;
let v50 = 10;
for (; v50--;) {
    v48.h;
    v48[Symbol.toPrimitive] = 7;
}
