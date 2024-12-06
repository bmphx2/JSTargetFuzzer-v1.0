function f0() {
}
class C4 extends f0 {
    static 65535 = 2147483648;
    constructor(a6) {
        super();
        this[1073741823] = a6;
        Object.defineProperty(this, "g", { value: 65535 });
    }
    static o(a8) {
        const o11 = {
            "maxByteLength": 536870912,
        };
        const v13 = new SharedArrayBuffer(219, o11);
        new BigUint64Array(v13);
        return this;
    }
}
const v16 = new C4(2147483648);
const v17 = new C4(257);
new C4(65535);
const v19 = [4,9];
const v20 = [128,43532];
const v21 = [9007199254740992,-4294967297,22060,-2147483649,-14,5,-3,64,1044170903,-988159289];
function f25(a26, a27, a28, a29) {
    const o30 = {
        268435456: a28,
        "g": a28,
        "f": 9,
        [257]: C4,
        __proto__: a28,
        "c": a29,
        8: C4,
        "e": 257,
        ...v19,
        "h": v16,
        ...v20,
        [a27]: a28,
        "b": a28,
        1: a26,
        ...v19,
    };
    return o30;
}
const v31 = f25(9, 2147483648, 65535, 4294967295);
f25(v19, 257, v21, v31);
const v33 = f25(v31, 9, 2147483648, C4);
v17.valueOf = f0;
const o34 = {
    ...v16,
    "f": C4,
    "d": 2147483648,
    "e": f25,
};
try { o34.some(257, v20, v21, v21); } catch (e) {}
let v36;
try { v36 = v33.setUTCFullYear(); } catch (e) {}
C4[4294967295] <<= v36;
