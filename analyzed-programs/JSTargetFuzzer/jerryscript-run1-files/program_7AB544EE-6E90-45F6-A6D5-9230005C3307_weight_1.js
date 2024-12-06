function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
const v6 = new F3(3n);
new F3(v6);
new F3(3n);
new Map();
new Uint32Array(230);
new BigInt64Array(129);
new Float64Array(128);
const v22 = new Uint32Array(181);
let v24 = BigUint64Array;
let v25 = new v24(1);
let v26 = 253;
[v26,,v24,v25] = v22;
try { v24["abs"](181, v26, v24); } catch (e) {}
new Uint16Array(v26);
for (let i39 = 0;
    (() => {
        const v41 = i39 < 2;
        URIError.apply();
        const o48 = {
            valueOf(a45, a46) {
                this - a45;
                return a45;
            },
        };
        return v41;
    })();
    i39++) {
    const v52 = new Function("x");
    v52.name;
}
Function();
