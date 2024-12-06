let v0 = Map;
new v0();
new Int16Array(7);
new Float32Array(10);
new Int8Array(10);
let v11 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v12 = [6,17590];
const t7 = [-658853788,-256];
t7[8] /= 10;
10 || v12;
new WeakSet();
v0 *= v0;
let v21 = BigUint64Array;
const v22 = new v21(12);
const v25 = new Uint32Array(v12);
new Uint8Array(16);
let v30;
try { v30 = v11(-4294967295); } catch (e) {}
({"buffer":v11,"d":v21,"g":v30,...v30} = v22);
let o31 = {
};
new Proxy(v25, o31);
const v37 = Symbol.toPrimitive;
const o41 = {
    [v37]() {
        try {
            super.getUint16();
        } catch(e40) {
        }
        return this;
    },
};
function F48(a50, a51, a52, a53) {
    if (!new.target) { throw 'must be called with new'; }
    a52.d = a53;
    this.f = a50;
}
const v54 = new F48(-4294967296, 5n, "-16", "-16");
new F48(-1, -7n, "-16", "global");
const v56 = new F48(-4294967296, 5n, "global", "global");
"-16" == v56;
if (-1) {
} else {
    function F61(a63, a64, a65) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a65;
    }
    const v66 = new F61(F61, v54, "function");
    const t48 = "-16";
    t48.__proto__ = v66;
    o31 = v66;
    const t50 = -1;
    new t50(v66, "global", "function");
    new F61(v66, "global", "function");
}
