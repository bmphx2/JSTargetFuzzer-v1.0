class C3 {
    static get d() {
        const t2 = "name";
        t2[8] = this;
        return this;
    }
    static valueOf(a6, a7) {
        const v9 = Symbol.iterator;
        const o18 = {
            [v9]() {
                let v11 = 10;
                const o17 = {
                    next() {
                        v11--;
                        const v15 = v11 == 0;
                        const o16 = {
                            "done": v15,
                            "value": v11,
                        };
                        return o16;
                    },
                };
                return o17;
            },
        };
        return this;
    }
}
const v19 = new C3();
const v20 = new C3();
new C3();
const v23 = new Set();
const v24 = [v23,v23,"acosh",v23,v23];
const v25 = [v23,v24,v24,v19,"acosh"];
[v20,v25,v25];
for (let i29 = 0, i30 = 10; i29 < i30; i29++, i30--) {
    new Int16Array(512);
    new BigUint64Array(2);
    new Int32Array(255);
}
