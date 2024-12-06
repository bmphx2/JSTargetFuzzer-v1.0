function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6() {
    return v3;
}
let v9 = new Uint8Array(127);
const v12 = new Uint16Array(1901);
const v15 = new Int16Array(3);
let v16 = v15 + v12;
({"buffer":v16,"byteLength":v9,"length":v16,} = v12);
v5.h = v5 * f6;
for (const v18 in v15) {
    Object.defineProperty(v4, v18, { writable: true, configurable: true, enumerable: true, get: f6, set: f6 });
    function F19(a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a21;
    }
    new F19(v5, v16);
    new F19(v3, 3);
    new F19(v4, 127);
}
