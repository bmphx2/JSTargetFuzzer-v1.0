function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 4294967297;
    this.d = 4294967297;
    this.c = 4294967297;
}
let v3 = new F0();
const v4 = new F0();
function f6(a7, a8, a9) {
    const t9 = "valueOf";
    t9["valueOf"] = a7;
    const v10 = v3--;
    let v11;
    try { v11 = a9(a8, a9, v10); } catch (e) {}
    return v11;
}
f6(v4);
new F0();
async function f17(a18, a19) {
    a19 += a19;
    return await "valueOf";
}
new Uint8Array(2);
Number.MAX_SAFE_INTEGER;
new BigUint64Array(3);
Number.c = "1073741824";
function f35() {
    return f35;
}
new Int8Array(4096);
new Float32Array(135);
let v42 = +-8.850510404348032 % -5.0;
const o49 = {
    o(a44, a45, a46, a47) {
        /4[^+]/gyi;
        return a45;
    },
};
++v42;
