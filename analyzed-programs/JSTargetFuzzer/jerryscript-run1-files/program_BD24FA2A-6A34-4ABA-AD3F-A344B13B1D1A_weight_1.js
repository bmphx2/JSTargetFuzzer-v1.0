class C1 {
    static get c() {
        this[6] += undefined;
        const v4 = Symbol.iterator;
        const o19 = {
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
                o12 === this ? o12 : this;
                const v15 = this;
                return o12;
            },
        };
        return undefined;
    }
}
new C1();
new C1();
const v22 = new C1();
new Float32Array(255);
let v27 = BigUint64Array;
new v27(256);
new Uint16Array(128);
class C32 {
    get b() {
        let v33 = this;
        let v34 = --v33;
        let v36;
        try { v36 = h.o(v27); } catch (e) {}
        v22[2147483648];
        v27 = v36;
        v34--;
    }
}
const v40 = new C32();
let v42 = v40[536870889];
const v44 = 8 ^ 1073741824;
v42++ & v44;
