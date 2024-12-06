const v0 = [508211843,-1696614911,127];
const v1 = [15,268435440,61825,1073741825,268435456,2139866572,9,-14583,10000];
const v2 = [2,1,-3,1000,-14,-2147483649,-5,-16632,65536];
const v3 = [-1000000.0,Infinity,2.3805698555549846,4.133927273806108e+307,798.3563636897491,-460849.46961437166];
const v4 = [2.0,1000000000000.0,1000000000.0,0.6483669477201041,-1e-15,5.0,1000000000.0,8.84507751486835e+307];
const v5 = [5.0,-869.8159591416181];
function f6(a7, a8, a9) {
    const o19 = {
        __proto__: v1,
        "e": a8,
        valueOf(a11, a12, a13, a14) {
            try { new a13(v3, a8, a7, a14); } catch (e) {}
            function f16(a17) {
                return v0;
            }
            class C18 extends f16 {
                static f;
            }
            return v4;
        },
        "h": v0,
        ...a9,
        "g": a8,
    };
    return o19;
}
const v21 = f6(v5, f6(v0, f6, v1), v0);
f6(v2, v3, v1);
Object.defineProperty(v5, 73, { configurable: true, enumerable: true, set: f6 });
new Float32Array(16);
new Int16Array(3055);
new Uint8ClampedArray(1307);
new Float32Array(4096);
new Uint32Array(2396);
new Float64Array(2472);
function F44() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v47 = new F44();
const v48 = new F44();
const v49 = new F44();
function f50() {
    return v47;
}
function f51(a52) {
    const o74 = {
        [a52]: v48,
        m(a54, a55, a56, a57) {
            if (a55) {
                const v61 = -a55;
                v61 & 4001;
                v4.length = a56;
                const v67 = [23482];
                Reflect.apply(Math.exp, v5, v67);
                4001 ^ v61;
            } else {
                for (let v71 = 0; v71 < 32; v71++) {
                    a56["p" + v71] = v71;
                }
            }
            return a54;
        },
    };
    return o74;
}
const v75 = f51(v49);
f51(v49);
const v77 = f51(v75);
const v78 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v80 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v84 = 0; v84 < 32; v84++) {
    v78["p" + v84] = v84;
}
v78[9223372036854775807];
let {"a":v89,"length":v90,} = v80;
if (f6 < v2) {
    try { v21.valueOf(...v78, 9223372036854775807, ...v47, 2472, ...v5); } catch (e) {}
    Object.defineProperty(v47, 217, { configurable: true, get: f50, set: f51 });
} else {
    v77 >> v1;
}
[f50,v49,v90,v89];
[v78];
[v78,v78];
