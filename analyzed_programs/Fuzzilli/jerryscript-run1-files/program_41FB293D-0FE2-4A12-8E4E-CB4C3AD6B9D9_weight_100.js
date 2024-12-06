class C3 {
    static #n(a5) {
        let v6;
        try { v6 = new a5(572004.4321659147, this); } catch (e) {}
        v6[9007199254740992] >>= 572004.4321659147;
        return a5;
    }
    constructor(a8, a9) {
        const v14 = Symbol.iterator;
        const o23 = {
            [v14]() {
                let v16 = 10;
                const o22 = {
                    next() {
                        v16--;
                        const v20 = v16 == 0;
                        const o21 = {
                            "done": v20,
                            "value": v16,
                        };
                        return o21;
                    },
                };
                return o22;
            },
        };
    }
}
const v24 = new C3(C3, 9007199254740992);
new C3(v24, C3);
const v26 = new C3(9007199254740992, 257);
const o39 = {
    valueOf() {
        try { this.m(v26, this, 9007199254740992, this); } catch (e) {}
        const o34 = {
            "maxByteLength": 1073741823,
        };
        const v36 = new SharedArrayBuffer(3481, o34);
        new Uint8ClampedArray(v36);
        return 572004.4321659147;
    },
};
