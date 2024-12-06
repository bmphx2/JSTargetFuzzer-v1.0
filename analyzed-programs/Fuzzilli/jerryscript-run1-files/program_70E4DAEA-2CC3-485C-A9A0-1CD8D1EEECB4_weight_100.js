const v2 = new Int16Array(7);
const v5 = new Int32Array(4);
const v8 = new Uint8ClampedArray(64);
class C9 extends Uint8ClampedArray {
    h;
    constructor(a11, a12, a13, a14) {
        super(v2, a11, a12);
        const v17 = v5[Symbol.species];
        typeof v5 === "symbol";
        try { v17(); } catch (e) {}
        const v23 = Symbol.iterator;
        const o32 = {
            [v23]() {
                let v25 = 10;
                const o31 = {
                    next() {
                        v25--;
                        const v29 = v25 == 0;
                        const o30 = {
                            "done": v29,
                            "value": v25,
                        };
                        return o30;
                    },
                };
                return o31;
            },
        };
    }
}
const v33 = new C9(64, 4, 7, 4);
const v34 = new C9(v8, 7, 64, 64);
new C9(v34, 4, 64, 4);
const v39 = (a40, a41, a42) => {
    if (a42 == -65537) {
        v33.__proto__;
    } else {
        try { a40.copyWithin(7, 7); } catch (e) {}
    }
    return v8;
};
function f46() {
    return C9;
}
