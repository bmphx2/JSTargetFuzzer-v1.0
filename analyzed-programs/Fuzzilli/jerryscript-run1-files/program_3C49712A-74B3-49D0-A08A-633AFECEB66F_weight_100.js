const v2 = new Float32Array(129);
new Int8Array(8);
const v8 = new Uint8ClampedArray(8);
function f9(a10, a11, a12) {
    const o17 = {
        set e(a14) {
            const v16 = Symbol.search;
            a14[v16] = v16;
        },
        5: a12,
        ...a10,
        "h": Int8Array,
        __proto__: a10,
        "b": a10,
        ...v2,
        ...v2,
        536870888: v8,
    };
    return o17;
}
f9(8, 8, 8);
f9(Float32Array, 8, 8);
f9(v2, 129, 129);
class C24 {
    static [-5.0] = "c";
    constructor(a26, a27) {
        super.d;
        const v33 = Symbol.iterator;
        const o42 = {
            [v33]() {
                let v35 = 10;
                const o41 = {
                    next() {
                        v35--;
                        const v39 = v35 == 0;
                        const o40 = {
                            "done": v39,
                            "value": v35,
                        };
                        return o40;
                    },
                };
                return o41;
            },
        };
    }
}
const v43 = new C24(-5.0, "c");
const v44 = new C24("c", "isArray");
const v45 = new C24("isArray", v43);
new C24(-1e-15, -1.7976931348623157e+308);
class C50 extends C24 {
    constructor(a52, a53, a54, a55) {
        super(a52, a54);
        v44.__proto__;
        Math.log(129);
        let v60 = +-5.0;
        --v60;
        ~-5.0;
        Math.acos(-5.0);
        Math.atan2(8 | v60, -5.0);
    }
}
const v66 = new C50(-5.0, -1.7976931348623157e+308, v45, -1.7976931348623157e+308);
new C50(-9.763538311497626, -1e-15, v66, -1.7976931348623157e+308);
new C50(C24, -1e-15, "c", -9.763538311497626);
