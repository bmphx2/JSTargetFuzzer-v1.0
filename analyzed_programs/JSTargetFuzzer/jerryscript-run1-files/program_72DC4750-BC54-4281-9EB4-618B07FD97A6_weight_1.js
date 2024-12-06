class C3 {
    constructor(a5) {
        const v7 = Symbol.iterator;
        const o16 = {
            [v7]() {
                let v9 = 10;
                const o15 = {
                    next() {
                        v9--;
                        const v13 = v9 == this;
                        const o14 = {
                            "done": v13,
                            "value": v9,
                        };
                        return 9.956207872457728;
                    },
                };
                return o15;
            },
        };
    }
}
new C3(C3);
const v18 = new C3(1000.0);
new C3(v18);
new Int8Array(10);
new Uint8Array(178);
new Uint32Array(7);
/[\c1]?/m;
