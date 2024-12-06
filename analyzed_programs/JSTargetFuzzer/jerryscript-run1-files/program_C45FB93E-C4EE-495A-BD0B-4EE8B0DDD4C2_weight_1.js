const v2 = new Uint32Array(1000);
const v5 = new Uint8ClampedArray(v2);
const v8 = new Float64Array(3332);
v8[9] = v8;
let v9;
try { v9 = v2.values(); } catch (e) {}
const v11 = Symbol.iterator;
for (let i13 = 0; i13 < 10; i13++) {
    i13[9] = i13;
    Symbol[Symbol.toStringTag] = i13;
}
const o29 = {
    [v11]() {
        let v22 = 10;
        const o28 = {
            next() {
                v22--;
                const v26 = v22 == 0;
                const o27 = {
                    "done": v26,
                    "value": v22,
                };
                return o27;
            },
        };
        return o28;
    },
    "h": v11,
    6: v5,
    "g": v11,
    "e": 1000,
    __proto__: v5,
};
class C33 {
    o(a35, a36, a37, a38) {
        try {
            super.keyFor(this, v2, 0, v9, -2);
        } catch(e40) {
            const v42 = e40 > e40 ? e40 : e40;
            try { v11.test(a35, a36); } catch (e) {}
            v2[7] = v42;
            5 >> a36;
        }
        return Uint32Array;
    }
    constructor(a46) {
        this[1073741824] = a46 &= this;
    }
}
new Float64Array(C33);
