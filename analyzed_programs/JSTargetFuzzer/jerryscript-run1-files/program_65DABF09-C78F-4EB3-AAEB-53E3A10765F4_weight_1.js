function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 5n;
    this.f = 5n;
    this.g = a5;
}
const v6 = new F3(9007199254740991n);
const v7 = new F3(9007199254740991n);
const v8 = new F3(5n);
function f9(a10, a11, a12, a13) {
    const o26 = {
        __proto__: v8,
        n(a15, a16) {
            new Float64Array(129);
            new Float64Array(4005);
            new Uint16Array(5);
            return F3;
        },
    };
    return o26;
}
f9(9007199254740991n, v6, 9007199254740991n, v6);
const v29 = f9(-148982279n, f9(5n, v8, -148982279n, v7), 9007199254740991n, v8);
const v32 = new Int32Array(2083);
new Uint8Array(255);
const v38 = new Int16Array(7);
function f39(a40, a41, a42) {
    const o51 = {
        "c": 255,
        ...v8,
        [2083]: a42,
        ...a42,
        "e": 5n,
        "h": Int32Array,
        set e(a44) {
            e = a41;
            const v45 = [a42,a41];
            [v32];
            [Int16Array,Uint8Array];
            this.h;
            v38 >> v45;
            super.d = a44;
            Object.defineProperty(v29, "f", { enumerable: true, set: f9 });
            Object.defineProperty(v29, +a44, { writable: true, enumerable: true, value: v45 });
        },
        __proto__: v38,
        "b": Uint8Array,
        "c": 255,
        ...a40,
        1053877365: a41,
    };
    return o51;
}
const v52 = f39(2083, 255, 7);
const v53 = f39(v52, 7, 2083);
f39(f39, 255, 7);
v52[-2] &= 2083;
v38[-1] -= 7;
let v55 = 10;
for (; v55--;) {
    v53.h;
    v53[Symbol.toPrimitive] = 7;
}
