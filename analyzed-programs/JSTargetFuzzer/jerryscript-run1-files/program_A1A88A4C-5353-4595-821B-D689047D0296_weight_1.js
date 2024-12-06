function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 12;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v3;
}
new F6(v3);
new F6(v3);
new F6(v5);
new Set();
new Uint16Array(0);
new Float64Array(0);
const v25 = new Set();
function F26(a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    try { v25.forEach(a29, v25); } catch (e) {}
}
new Int8Array(1445);
function F33() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F33;
    this.valueOf = -65537 in this;
    for (let v37 = 0; v37 < 32; v37++) {
        this["p" + v37] = v37;
    }
    this.f = -65537;
}
let v40 = new F33();
new F33();
const v43 = new Float32Array(Float32Array, Float32Array, Float32Array);
function f44(a45, a46, a47) {
    Object.defineProperty(v43, "g", { configurable: true, get: f44 });
    return a45;
}
const v48 = new F33();
new Uint32Array(5);
new Int32Array(5);
const v57 = new Uint8Array(1445);
function f58() {
}
let v59 = 0;
do {
    v48 / v48;
    let v61 = 1073741824n;
    class C62 {
        constructor(a64, a65, a66, a67) {
            const v71 = new Float32Array(5);
            v61 >>= v71.lastIndexOf(-4294967297, -4294967297);
        }
    }
    v59++;
} while (v59 < 9)
new Uint8Array(0);
let v89 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v91 = new Int32Array(127);
const v92 = ("2147483647")[11];
v57 instanceof v89;
RegExp[8] = 4.0;
const t64 = "2147483647";
t64.__proto__ = v48;
Uint32Array < v92;
v89 /= v91;
const v96 = new WeakSet();
let v97 = 41365n;
for (;
    (() => {
        const v99 = (16).__proto__;
        delete v99[v99];
        let v101 = 0;
        v101++;
        v97--;
        return v97;
    })();
    ) {
}
const v109 = new BigInt64Array(2);
127 instanceof Int32Array;
function f112() {
    return v109;
}
v40 = v96;
([5]).reverse();
