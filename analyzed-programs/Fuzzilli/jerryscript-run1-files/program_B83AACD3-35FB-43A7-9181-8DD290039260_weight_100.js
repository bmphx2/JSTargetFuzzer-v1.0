class C3 {
    static [-5.0] = "c";
    constructor(a5, a6) {
        super.d;
        const v12 = Symbol.iterator;
        const o21 = {
            [v12]() {
                let v14 = 10;
                const o20 = {
                    next() {
                        v14--;
                        const v18 = v14 == 0;
                        const o19 = {
                            "done": v18,
                            "value": v14,
                        };
                        return o19;
                    },
                };
                return o20;
            },
        };
    }
}
const v22 = new C3(-5.0, "c");
const v23 = new C3("c", "isArray");
const v24 = new C3("isArray", v22);
new C3(-1e-15, -1.7976931348623157e+308);
class C29 extends C3 {
    constructor(a31, a32, a33, a34) {
        super("c", a33);
        v23.__proto__;
        Math.log(8);
        let v39 = +-5.0;
        --v39;
        ~-5.0;
        Math.acos(-5.0);
        Math.atan2(8 | v39, -5.0);
    }
}
const v45 = new C29(-5.0, -1.7976931348623157e+308, v24, -1.7976931348623157e+308);
new C29(-9.763538311497626, -1e-15, v45, -1.7976931348623157e+308);
new C29(C3, -1e-15, "c", -9.763538311497626);
