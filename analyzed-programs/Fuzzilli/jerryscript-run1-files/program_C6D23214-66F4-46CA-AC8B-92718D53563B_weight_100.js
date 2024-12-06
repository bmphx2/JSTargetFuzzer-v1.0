new Map();
let v7 = 1000.0;
class C8 extends Map {
    static #f;
    static [-3.765657995095779] = v7;
    static #m(a10, a11) {
        -2.2250738585072014e-308 + a10;
        v7++;
        return this;
    }
    static set g(a16) {
        let v17 = 0;
        do {
            try {
                a16.#f = this;
            } catch(e18) {
            }
            v17++;
        } while (v17 < 5)
    }
}
new C8();
const v23 = new C8();
const v24 = new C8();
function f25() {
    return v24;
}
const o26 = {
    1: v23,
    [f25]: f25,
    [Map]: 1024n,
    "f": -3.765657995095779,
};
o26[Symbol.species];
new C8();
