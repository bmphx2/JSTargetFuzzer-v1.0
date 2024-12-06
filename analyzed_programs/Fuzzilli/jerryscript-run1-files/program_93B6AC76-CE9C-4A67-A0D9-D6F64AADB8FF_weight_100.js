function f3(a4, a5) {
    const o19 = {
        __proto__: a5,
        get e() {
            this[1];
            64 << this;
            Math.sign(a4);
            const v14 = -318507.42712522927;
            Math.log2(this);
            Math.ceil(64);
            64 >> v14;
            Math.atan(11);
            return "14";
        },
    };
    return o19;
}
const v20 = f3("14", "replace");
const v21 = f3("replace", "14");
const v22 = f3("symbol", "symbol");
function f23() {
    return f3;
}
function f24(a25, a26, a27) {
    const o36 = {
        "g": f23,
        "a": "14",
        "d": a27,
        m(a29, a30, a31) {
            try { ("symbol").trimRight(); } catch (e) {}
            return "replace";
        },
    };
    return o36;
}
const v37 = f24(v22, v20, v21);
f24(v37, v21, v21);
const v39 = f24(v37, v22, v20);
const o40 = {
    "apply": f24,
    "call": f3,
    "ownKeys": f23,
    "preventExtensions": f3,
};
new Proxy(v20, o40);
Object.defineProperty(v20, v39, { writable: true, configurable: true, enumerable: true, get: f24 });
