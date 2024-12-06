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
    const o28 = {
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
            v24[Symbol.toStringTag];
            return a15;
        },
    };
    return o28;
}
f14(F0, -268435456n, 65215n, 65215n);
f14(v4, -268435456n, 65215n, 65215n);
f14(65215n, 3n, -268435456n, -268435456n);
const v32 = [];
function f33() {
    return v32;
}
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
}
const v39 = new F34(v32, v32, v32);
const o41 = {
    "defineProperty": f33,
};
const v43 = new Proxy(v39, o41);
function f44() {
    return v39;
}
function f45() {
    return Date;
}
Object.defineProperty(v43, -16, { configurable: true, get: f45, set: f44 });
