function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    this.g = "function";
    this.h = a8;
}
const v10 = new F6(662244047n, "function");
const v11 = new F6(2n, "boolean");
const v12 = new F6(-4n, "3");
const v17 = [];
const v18 = v10.g;
function f21() {
    return 62781;
}
let v23 = ("3")["search"](v18);
v23 = 10;
const o24 = {
    "e": -4n,
    ...v12,
    4294967295: v10,
    "d": f21,
    "f": v17,
    "construct": f21,
    "defineProperty": f21,
    "deleteProperty": f21,
    "getPrototypeOf": f21,
    "has": f21,
    "preventExtensions": f21,
};
new Proxy(v11, o24);
v11.h = v17;
const v28 = Symbol.iterator;
const o37 = {
    [v28]() {
        let v30 = 10;
        const o36 = {
            next() {
                v30--;
                const v34 = v30 == 0;
                const o35 = {
                    "done": v34,
                    "value": v30,
                };
                return o35;
            },
        };
        return o36;
    },
};
function f39(a40, a41) {
    throw 4.0;
    return a41;
}
new Promise(f39);
