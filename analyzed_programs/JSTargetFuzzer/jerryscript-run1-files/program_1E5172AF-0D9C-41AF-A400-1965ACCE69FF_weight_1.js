function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    this.a = f0;
    this.f = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function f9(a10, a11, a12) {
    const o21 = {
        ...a11,
        __proto__: v5,
        [F1](a14, a15, a16) {
            let v13 = this;
            v4[a14] -= 1.7976931348623157e+308;
            const v18 = [v13,f0,a16 / a14];
            const v19 = [v18,v4,a10,a11,a15];
            [v18,v13,v19,v19,a12];
            v13 = v5;
            return v5;
        },
        "g": a12,
        "c": a10,
    };
    return o21;
}
const v22 = f9(1.7976931348623157e+308, v5, 1.7976931348623157e+308);
const v23 = f9(-3.0410806280131393, v5, 1.7976931348623157e+308);
f9(-578477.768086427, v3, -578477.768086427);
[-578477.768086427,v22];
[v23,[v23],v5,f0];
function F28() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F28;
    this.valueOf = -65537 in this;
    for (let v32 = 0; v32 < 32; v32++) {
        this["p" + v32] = v32;
    }
    this.f = -65537;
}
let v35 = new F28();
new F28();
const v37 = new F28();
new Uint32Array(5);
new Int32Array(5);
const v46 = new Uint8Array(150);
function f47(a48, a49) {
    const o50 = {
    };
    return o50;
}
const v51 = f47(f47, f47);
Object.defineProperty(f47(v51, v51), 6, { configurable: true, get: f47 });
for (let i = 0; i < 5; i++) {
    for (let v53 = 0; v53 < 32; v53++) {
        v51["p" + v53] = v53;
    }
}
function f56() {
}
let v57 = 0;
do {
    v37 / v37;
    v57++;
} while (v57 < 9)
new Uint8Array(0);
let v75 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v77 = new Int32Array(127);
const v78 = ("2147483647")[11];
v46 instanceof v75;
RegExp[8] = 4.0;
const t75 = "2147483647";
t75.__proto__ = v37;
Uint32Array < v78;
v75 /= v77;
const v82 = new WeakSet();
const v88 = new BigInt64Array(2);
127 instanceof Int32Array;
function f91() {
    return v88;
}
v35 = v82;
([5]).reverse();
