class C3 {
    set h(a5) {
        const t2 = "object";
        t2[15] = this;
        try { new a5(a5); } catch (e) {}
    }
    o(a11) {
        this >> this;
        return -1000000.0;
    }
}
const v16 = new C3();
const v17 = new C3();
const v18 = new C3();
class C19 extends C3 {
    constructor(a21, a22, a23, a24) {
        for (let i26 = 0; i26 < 0; i26++) {
            v17.__proto__;
        }
        super();
        const v34 = Symbol.iterator;
        const o43 = {
            [v34]() {
                let v36 = 10;
                const o42 = {
                    next() {
                        v36--;
                        const v40 = v36 == 0;
                        const o41 = {
                            "done": v40,
                            "value": v36,
                        };
                        return o41;
                    },
                };
                return o42;
            },
        };
    }
    static [C3] = C19;
    static 4 = C19;
}
new C19("getFullYear", v16, "object", v16);
new C19("object", C3, C19, v18);
new C19("object", v17, "getFullYear", v16);
new Array(3241);
-2n ^ 36564n;
