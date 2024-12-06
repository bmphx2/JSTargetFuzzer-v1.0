class C1 {
    get a() {
        return false;
    }
    p() {
        const v7 = this - this;
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
        return v7;
    }
}
new C1();
new C1();
const v21 = C1 == false;
try { v21(false, C1, C1); } catch (e) {}
const v27 = [1571794923,1571794923,1571794923,1571794923,1571794923];
for (let v28 = 0; v28 < 5; v28++) {
    const v29 = 1571794923;
    Object.defineProperty(v27, -2, { writable: true, value: v29 });
}
new C1();
[1000000.0,1000.0,4.767834716268213,Infinity,2.6781787703886156e+307,-2.2250738585072014e-308,-648.4711490121445,1.1296568855542131e+308,747.1262759085873,-1000000.0];
[-3.0,0.0];
[-1e-15,2.2250738585072014e-308,-2.220446049250313e-16,Infinity,0.08375422256019271,-814.5147294294643,449.3954666406353,-3.7188370871978886];
const v40 = `
`;
eval(v40);
