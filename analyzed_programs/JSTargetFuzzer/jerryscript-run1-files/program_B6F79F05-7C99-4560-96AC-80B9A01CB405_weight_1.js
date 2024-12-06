function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 127;
    let v4 = -9007199254740992n;
    v4 ^= 0n;
    const v5 = [0.0022314729560203306,-8.97359317719953,3.582168052563757,4.0,1.1399668351346765e+308,-6.951909067492055e+307];
    for (const v6 in v5) {
        v5.length = 0;
    }
}
const v8 = new F0();
new F0();
const v10 = new F0();
function F11(a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a13;
}
new F11(v10);
new F11(v10);
new F11(v8);
const v20 = new Uint16Array(173);
try { v20.map(Int16Array); } catch (e) {}
function f26(a27, a28, a29, a30) {
    const o32 = {
        get c() {
            return a30;
        },
    };
    return o32;
}
const v34 = new Uint8Array(4);
function f35(a36, a37) {
    const o38 = {
    };
    return o38;
}
v34.every(f35);
