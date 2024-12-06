function f0() {
}
const v1 = [-5.0,12277.996811121935,-1.0,NaN,-1.654296475369796e+308,1000000.0,6.956093463038311,9.520077839207334e+307];
const v2 = [-1000.0,0.6997590730921865];
let v3 = [6.923902592531949,-1.4072575488752217e+308,-Infinity,-645.3132446914399,8.913719192876009,915.2561146116368,1000000000000.0,3.0];
let v6 = -65535;
function f11() {
    return v2;
}
function f12(a13, a14, a15) {
    const o38 = {
        set a(a17) {
            try { a17.n(); } catch (e) {}
            a17?.[3857];
        },
        p(a24, a25, a26) {
            v2[a14] = f0;
            const v28 = Symbol.iterator;
            const o37 = {
                [v28]() {
                    let v30 = 10;
                    const o36 = {
                        next() {
                            v30--;
                            const v34 = v30 == 0;
                            const o35 = {
                                "done": v34,
                                "value": v30,
                            };
                            return o35;
                        },
                    };
                    return o36;
                },
            };
            return 64;
        },
    };
    return o38;
}
const v39 = f12(268435440, v6, 4294967297);
const v40 = f12(164139641, v6, 4294967297);
let v41 = f12(64, v6, 4294967297);
v3 >>= v1;
const v42 = [v6,v41,f12,4294967297,9223372036854775807];
[v42,164139641,,v6,v3];
[v42,v39];
v41 = v40;
v6 &&= 164139641;
Object.defineProperty(v2, "g", { configurable: true, enumerable: true, set: f12 });
