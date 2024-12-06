new Int32Array(256);
new Int8Array(1000);
new Float64Array(2032);
new Map();
class C14 {
    static [-5.0] = "undefined";
    constructor(a16, a17) {
        super.d;
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
const v33 = new C14(-5.0, "undefined");
const v34 = new C14("undefined", "isArray");
const v35 = new C14("isArray", v33);
new C14(927855.7743023566, -1.7976931348623157e+308, "undefined", Float64Array);
class C40 extends C14 {
    constructor(a42, a43, a44, a45) {
        super("undefined", a44);
        v34.arguments;
        Math.log(8);
        let v50 = +-5.0;
        --v50;
        ~-5.0;
        Math.acos(-5.0);
        Math.atan2(8 | v50, -5.0);
    }
}
const v56 = new C40(-5.0, -1.7976931348623157e+308, v35, -1.7976931348623157e+308);
new C40(-9.763538311497626, 927855.7743023566, v56, -1.7976931348623157e+308);
new C40(C14, 927855.7743023566, "undefined", -9.763538311497626);
