function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 8;
    this.g = 8;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v10 = new Set();
class C11 {
    8;
    static g;
    static valueOf(a13, a14, a15, a16) {
        const v17 = this[a16];
        v10[v17] *= v17;
        const o20 = {
            "NEGATIVE_INFINITY": 1073741823,
        };
        const v22 = new SharedArrayBuffer(1000, o20);
        const v25 = new Int32Array(6);
        new ArrayBuffer(v25);
        new Uint16Array(v22);
        return v3;
    }
}
new C11();
new C11();
new C11();
function f33() {
}
const v37 = [-1000000.0,f33,-807.6596022618603,-1000000.0,-1000000.0,F0,v5];
const v38 = [v37,-1000000.0,0.014069366437978514,v37];
const v39 = [v38,f33,-807.6596022618603];
function* f43(a44, a45, a46, a47) {
    try { a46.padStart(a44, "object"); } catch (e) {}
    const o49 = {
        "construct": f33,
        "ownKeys": f33,
        "preventExtensions": f33,
    };
    new Proxy(v39, o49, Proxy, a45, o49);
    yield* "object";
    return a44;
}
f43(-807.6596022618603, "U7O", "U7O", v38);
