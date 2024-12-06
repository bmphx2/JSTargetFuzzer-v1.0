const v4 = new WeakMap();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    (1000n).toString(7);
}
new F5();
function f15(a16, a17) {
    const o21 = {
        "h": a17,
        __proto__: v4,
        get e() {
            let v19;
            try { v19 = v4.delete(this); } catch (e) {}
            try { v19(v19, a17, a16, a17, v19); } catch (e) {}
            return a17;
        },
        ...v4,
        [-782894965]: -782894965,
        [a16]: a17,
    };
    return o21;
}
const v22 = f15(-536870912, 2147483647);
f15(2147483647, 2147483647);
const v24 = f15(2147483647, 2147483647);
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -782894965;
    this.b = a29;
    this.g = a30;
}
new F25(2147483647, -536870912, v22, -536870912);
new F25(2147483647, -782894965, v24, -536870912);
new F25(-536870912, -782894965, v24, 2147483647);
let v35 = 536870912;
let v36 = 1073741824;
class C37 {
    constructor(a39) {
        let v40 = 127 + v36;
        v35 *= v40;
        v40++;
        127 && 31657;
        Math.atanh(31657);
        Math.log10(31657);
        v36 ^ 127;
        --v36;
    }
}
const v49 = new C37(v36);
const v50 = new C37(v36);
new C37(v36);
v50.d = v49;
let v59 = 1470252707;
const v60 = v59++;
Math.log1p(v60);
65536 << v60;
for (let v63 = 0; v63 < 32; v63++) {
    C37["p" + v63] = v63;
}
const v67 = Symbol.iterator;
const o76 = {
    [v67]() {
        let v69 = 10;
        const o75 = {
            next() {
                v69--;
                const v73 = v69 == 0;
                const o74 = {
                    "done": v73,
                    "value": v69,
                };
                return o74;
            },
        };
        return o75;
    },
};
