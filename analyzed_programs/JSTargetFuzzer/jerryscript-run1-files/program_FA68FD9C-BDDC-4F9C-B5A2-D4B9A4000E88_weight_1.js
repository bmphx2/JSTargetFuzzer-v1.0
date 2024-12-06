function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 8;
    this.e = 8;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v4,v4,F0,v5];
const v7 = [v3,v4,F0,F0];
const v8 = [v5,v7,v4];
function f9(a10, a11, a12, a13) {
    const o18 = {
        [v5]: v5,
        "b": a13,
        get f() {
            for (let v15 = 0; v15 < 32; v15++) {
                this["p" + v15] = v15;
            }
            return a13;
        },
        "length": v6,
    };
    return o18;
}
const v19 = f9(v6, v5, f9, v3);
f9(v8, v4, v7, v5);
f9(v6, v3, v19, v3);
function F22() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F22;
    this.valueOf = -65537 in this;
    for (let v26 = 0; v26 < 32; v26++) {
        this["p" + v26] = v26;
    }
    this.f = -65537;
}
let v29 = new F22();
new F22();
const v31 = new F22();
v19.length = 5;
v29.g;
new Uint32Array(5);
new Int32Array(5);
const v44 = new Number(150);
function f45() {
}
let v46 = 0;
do {
    v31 / v31;
    v46++;
} while (v46 < 9)
new Uint8Array(0);
let v64 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v66 = new Int32Array(127);
const v67 = ("2147483647")[11];
v44 instanceof v64;
RegExp[8] = 4.0;
const t59 = "2147483647";
t59.a = v31;
Uint32Array < v67;
v64 /= v66;
const v71 = new WeakSet();
const v77 = new BigInt64Array(2);
127 instanceof Int32Array;
function f80() {
    return v77;
}
v29 = v71;
([-9223372036854775808]).reverse();
