let v0 = 1073741824;
class C3 {
    constructor(a5) {
        const v7 = Symbol.iterator;
        const o16 = {
            [v7]() {
                const o15 = {
                    next() {
                        v0--;
                        const v13 = 10 == 0;
                        const o14 = {
                            "done": v13,
                            "value": 10,
                        };
                        return o14;
                    },
                };
                return o15;
            },
        };
    }
}
const v17 = new C3(v0);
const v18 = new C3(C3);
new C3(v17);
const v20 = [-5,268435440,-59407,2,56468,4096,-9007199254740990,200151295,-4];
[1,4,-1658439732];
[-36180,257,4294967297];
new Uint16Array(14);
RegExp(v20);
const v28 = [];
const o29 = {
};
new Proxy(v28, C3);
try {
    new v18();
} catch(e33) {
} finally {
}
new Float32Array(2399);
new BigUint64Array(4);
new Uint8ClampedArray([16,-36818,14,256]);
