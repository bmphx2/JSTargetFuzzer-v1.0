function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 10;
    this.a = 10;
    this.h = 10;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,F0,v5,v3,F0];
const v7 = [v6,v5,v4,v6];
const v8 = [v7,v3,v7];
new Date();
function f14(a15, a16, a17, a18) {
    const o32 = {
        255: a15,
        ...v5,
        __proto__: v4,
        [Date]: a17,
        "c": v7,
        ...v8,
        "d": a15,
        [a16]: Date,
        p(a20, a21, a22, a23) {
            let v24;
            try { v24 = a22.at(a20); } catch (e) {}
            new F0();
            (v24 = 3n)[Symbol.toStringTag];
            return a15;
        },
    };
    return o32;
}
f14(F0, -268435456n, 65215n, 65215n);
f14(v4, -268435456n, 65215n, 65215n);
f14(65215n, 3n, -268435456n, -268435456n);
const v36 = [];
function f37() {
    return v36;
}
function F38(a40, a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
}
const v43 = new F38(v36, v36, v36);
const o45 = {
    "defineProperty": f37,
};
const v47 = new Proxy(v43, o45);
function f48() {
    return v43;
}
function f49() {
    return Date;
}
Object.defineProperty(v47, -16, { configurable: true, get: f49, set: f48 });
