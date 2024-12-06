function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 47360;
    this.e = 47360;
    this.b = 47360;
}
new F0();
new F0();
new F0();
const v13 = Symbol.iterator;
const o22 = {
    [v13]() {
        let v15 = 10;
        const o21 = {
            next() {
                v15--;
                const v19 = v15 == 0;
                const o20 = {
                    "done": v19,
                    "value": v15,
                };
                return o20;
            },
        };
        return o21;
    },
};
function f23() {
    return f23;
}
function f24() {
    return f24;
}
const v27 = new Uint8ClampedArray(6);
try {
    Object.defineProperty(v27, 2, { configurable: true, enumerable: true, get: f23, set: f24 });
} catch(e28) {
} finally {
}
