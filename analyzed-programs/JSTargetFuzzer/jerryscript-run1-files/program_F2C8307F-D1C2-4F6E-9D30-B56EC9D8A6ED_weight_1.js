function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    this.e = f0;
    try { this["m"](this, f0); } catch (e) {}
    const v6 = Symbol.iterator;
    const o15 = {
        [v6]() {
            let v8 = 10;
            const o14 = {
                next() {
                    v8--;
                    const v12 = v8 == 0;
                    const o13 = {
                        "done": v12,
                        "value": v8,
                    };
                    return o13;
                },
            };
            return o14;
        },
    };
}
new F1();
new F1();
const v18 = new F1();
const v21 = new Int16Array(2);
new Uint32Array(3447);
let v25 = 6;
new Uint16Array(v25);
function f28() {
    return 2;
}
function F29() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F29;
    this.valueOf = -65537 in this;
    for (let v33 = 0; v33 < 32; v33++) {
        this["p" + v33] = v33;
    }
    this.f = -65537;
}
let v36 = new F29();
F1 += F1;
typeof v18 === "bigint";
v25 = F1;
const v40 = new F29();
const v41 = new F29();
v21 * v40;
new Uint8ClampedArray(144);
new Int16Array(1024);
new Uint32Array(4);
new Uint32Array(5);
new Int32Array(5);
const v60 = new Uint8Array(150);
function f61() {
}
let v62 = 0;
do {
    v41 / v41;
    v62++;
} while (v62 < 9)
new Set();
let v76 = 255;
Math.log(v76);
Math.tan(Set);
const v79 = !v76;
v76 * v79;
v76++;
v76 && v79;
new Uint8Array(0);
let v93 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v95 = new Int32Array(127);
const v96 = ("2147483647")[11];
v60 instanceof v93;
RegExp[8] = 4.0;
const t80 = "2147483647";
t80.__proto__ = v41;
Uint32Array < v96;
v93 /= v95;
const v100 = new WeakSet();
const v106 = new BigInt64Array(2);
127 instanceof Int32Array;
function f109() {
    return v106;
}
v36 = v100;
([5]).reverse();
