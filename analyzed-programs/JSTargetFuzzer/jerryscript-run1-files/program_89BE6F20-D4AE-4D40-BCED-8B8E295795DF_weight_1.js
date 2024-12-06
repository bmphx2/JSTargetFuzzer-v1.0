class C3 {
    constructor(a5, a6) {
        const v8 = Symbol.iterator;
        const o17 = {
            [v8]() {
                let v10 = 10;
                const o16 = {
                    next() {
                        v10--;
                        const v14 = v10 == 0;
                        const o15 = {
                            "done": v14,
                            "value": v10,
                        };
                        return o15;
                    },
                };
                return o16;
            },
        };
    }
}
const v18 = new C3(536870888, C3);
const v19 = new C3(C3, "symbol");
const v20 = new C3(536870888, "symbol");
class C21 {
    static #e = 268435456;
    d;
    #g = 268435456;
    constructor(a23, a24, a25) {
        const v26 = v18;
    }
    static [268435456] = v19;
    1051637943 = v20;
    #h = "symbol";
    static a;
}
const v30 = new C21(v19, C21, "symbol");
new C21(v30, v30, v30);
new C21(v30, v20, v20);
for (let [v36] of "symbol") {
    [1.9432683248482778,1000000000.0,-1.5391638046681646e+308,-5.0,-739.1767565290834,558799.2482910298];
    [1.0,5.0,-5.0,1000.0];
    [77.77521110696102,-2.432327362767108,-1.7976931348623157e+308];
}
const o40 = {
};
new Proxy(v19, o40);
