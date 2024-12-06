class C1 {
    static get c() {
        this[6] += undefined;
        const v4 = Symbol.iterator;
        const o13 = {
            [v4]() {
                let v6 = 10;
                const o12 = {
                    next() {
                        v6--;
                        const v10 = v6 == 0;
                        const o11 = {
                            "done": v10,
                            "value": v6,
                        };
                        return o11;
                    },
                };
                return o12;
            },
        };
        return undefined;
    }
}
new C1();
new C1();
const v16 = new C1();
new Float32Array(255);
let v21 = BigUint64Array;
new v21(256);
new Uint16Array(128);
class C26 {
    get b() {
        let v27 = this;
        let v28 = --v27;
        let v30;
        try { v30 = h.o(v21); } catch (e) {}
        v16[2147483648];
        v21 = v30;
        v28--;
    }
}
const v34 = new C26();
let v36 = v34[536870889];
const v38 = 8 ^ 1073741824;
v36++ & v38;
