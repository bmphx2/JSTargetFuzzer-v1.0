const v4 = new WeakMap();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    (1000n).toString(7);
}
const v14 = new F5();
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
[v14,v14,v14,v22];
("Zp")[6 >= 78];
f15(2147483647, 2147483647);
const v30 = f15(2147483647, 2147483647);
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -782894965;
    this.b = a35;
    this.g = a36;
}
new F31(2147483647, -536870912, v22, -536870912);
new F31(2147483647, -782894965, v30, -536870912);
new F31(-536870912, -782894965, v30, 2147483647);
let v41 = 536870912;
let v42 = 1073741824;
class C43 {
    constructor(a45) {
        let v46 = 127 + v42;
        v41 *= v46;
        v46++;
        v42 < 1;
        v42 && 31657;
        const o58 = {
            m(a55, a56, a57) {
                super.e = Uint16Array;
                return Uint16Array;
            },
        };
        127 && 31657;
        Math.atanh(31657);
        Math.log10(31657);
        v42 ^ 127;
        --v42;
    }
}
const v65 = new C43(v42);
const v66 = new C43(v42);
new C43(v42);
v66.d = v65;
let v75 = 1470252707;
const v76 = v75++;
Math.log1p(v76);
65536 << v76;
for (let v79 = 0; v79 < 32; v79++) {
    C43["p" + v79] = v79;
}
const v83 = Symbol.iterator;
const o95 = {
    [v83]() {
        let v85 = 10;
        const o94 = {
            next() {
                v85--;
                const v89 = v85 == 0;
                const o90 = {
                    __proto__: 127,
                    "done": v89,
                    "value": v85,
                };
                return o90;
            },
            [C43]() {
                try {
                    super.getUint16();
                } catch(e93) {
                }
                return this;
            },
        };
        return o94;
    },
};
