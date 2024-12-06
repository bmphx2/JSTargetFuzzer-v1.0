function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 29238;
}
const v3 = new F0();
new F0(F0, F0, v3);
new F0();
new Int8Array(8);
let v15 = 9223372036854775807n;
v15 &= -36134n;
9007199254740992n >> 16n;
new Uint8Array(6);
new Uint8Array(4);
const v25 = new Uint32Array(181);
let v27 = BigUint64Array;
let v28 = new v27(1);
let v29 = 253;
[v29,,v27,v28] = v25;
try { v27["abs"](181, v29, v27); } catch (e) {}
new Uint16Array(v29);
for (let i42 = 0;
    i42 < 2;
    (() => {
        i42++;
        const v48 = new Date();
        v48.getFullYear();
    })()) {
    const v51 = new Function("x");
    v51.name;
}
Function();
