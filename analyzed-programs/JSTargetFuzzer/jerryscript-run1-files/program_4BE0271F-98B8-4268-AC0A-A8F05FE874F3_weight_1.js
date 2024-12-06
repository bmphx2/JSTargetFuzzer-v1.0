class C3 {
    toString(a5, a6) {
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
                        return this;
                    },
                };
                return 4.0;
            },
        };
        return "number";
    }
}
const v18 = new C3();
const v19 = new C3();
const v20 = new C3();
let v23 = 980642.2508664951;
const v24 = [NaN,0.0,NaN,750.5387810981024,-2.220446049250313e-16,2.2250738585072014e-308];
[479.7712892863851,-3.404723381598529e+307,0.0,0.1316049793041536,134036.26178527577,1000000000.0,2.2250738585072014e-308,-3.3861457242272565e+307];
[1e-15,-1000.0,0.15292105611712037,0.20510683874064017,-1.0];
let v27 = 0;
while (v27 < 9) {
    v24[v18] = 5.0;
    new TypeError("-2");
    v27++;
}
const v35 = new Int32Array(2083);
const v38 = new Uint8Array(255);
const v41 = new Int16Array(7);
function f42(a43, a44, a45) {
    const o52 = {
        "h": Int32Array,
        set e(a47) {
            e = a44;
            [a45,a44];
            [v35];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v41,
        "b": Uint8Array,
        "c": a45,
        ...v24,
        1053877365: a43,
    };
    a45[-2] = o52;
    v24.length;
    v23++;
    C3.__proto__;
    a44 < v19 ? a44 : v19;
    return o52;
}
const v58 = f42(2083, 255, 7);
const v59 = f42(v58, 7, 2083);
f42(f42, 255, 7);
v58[-2] &= 2083;
v20[-1] -= 7;
let v61 = 10;
for (; v61--;) {
    v59[v59.h.toPrimitive] = v38;
}
