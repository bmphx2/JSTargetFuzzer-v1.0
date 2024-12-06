function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 65537;
    this.c = 65537;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    static c = v5;
    static toString(a8, a9) {
        const o10 = {
            ...v3,
            "g": a8,
            ...a9,
        };
        try { v4(); } catch (e) {}
        return v4;
    }
    g = v3;
    m(a13) {
        return F0;
    }
    3 = v5;
}
const v17 = new C6();
const v18 = new C6();
const v19 = new C6();
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v4;
    this.d = v18;
}
const v25 = new F20(v5, v4, v19);
new F20(v18, v17, C6);
new F20(v17, v4, v3);
function f28() {
    new BigUint64Array(2);
    new Uint8ClampedArray(8);
    new Uint8ClampedArray(4096);
}
const v41 = [-1000000.0,f28,-807.6596022618603,-1000000.0];
const v42 = [v41,-1000000.0,0.014069366437978514,v41];
const v43 = [v42,f28,-807.6596022618603];
function* f47(a48, a49, a50, a51) {
    try { a50.padStart(a48, "object"); } catch (e) {}
    const o53 = {
        "construct": f28,
        "ownKeys": f28,
        "preventExtensions": f28,
    };
    new Proxy(v43, o53);
    yield* "object";
    class C56 extends F0 {
        65 = v25;
    }
    new C56();
    new C56();
    new C56();
    return a48;
}
f47(-807.6596022618603, "U7O", "U7O", v42);
