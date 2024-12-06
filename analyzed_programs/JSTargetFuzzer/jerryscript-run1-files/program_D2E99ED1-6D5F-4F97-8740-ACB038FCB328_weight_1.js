function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 10;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o12 = {
        [v5]: v5,
        "h": a7,
        ...a7,
        __proto__: a7,
        toString(a9) {
            return F0 === this ? F0 : this;
        },
        [-1]: v5,
        "d": v5,
    };
    return o12;
}
f6(v5);
f6(v4);
const v15 = f6(v5);
const v21 = new Uint32Array(181);
let v23 = BigUint64Array;
let v24 = new v23(1);
let v25 = 253;
[v25,,v23,v24] = v21;
try { v23["abs"](181, v25, v23); } catch (e) {}
new Uint16Array(v25);
for (let i49 = (() => {
        const v40 = new ArrayBuffer(129);
        new Uint8Array(v40);
        v15.h;
        new Set();
        return 0;
    })();
    i49 < 2;
    i49++) {
    const v55 = new Function("x");
    v55.name;
}
Function();
