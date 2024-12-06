new Float64Array(1024);
new BigInt64Array(0);
new Float32Array(98);
const v12 = [-84.46348971197267,-1.0003693104187853e+307,4.0,0.8577449372678007,-1.5120140283830284e+308,0.7670572632452628,893393.6740614071];
const v13 = [466.67874085098015,1.7976931348623157e+308,1.0327161144802877e+308,131.37439598678225,1000000000.0,1.7976931348623157e+308,-8.455960780447906];
const v14 = [87053.61950218328,-1000000000.0,Infinity,0.8757808060147082,0.6114410338528338,-2.2250738585072014e-308,1000000000.0];
class C15 {
    get d() {
        const v17 = this.a;
        v17.acos();
        Math.tan(v17);
        v17.cosh(v17 + -4294967297);
        Math.sin(-4294967297);
        Math.hypot(v17);
        return v14;
    }
    [v12] = v13;
    static 8 = v12;
}
const v26 = new C15();
const v27 = new C15();
const v28 = new C15();
function F32(a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a34;
    this.b = a36;
}
new F32(v12, 12290n, v27);
new F32(v12, 9n, v28, C15, v26, v12);
new F32(v13, 9n, v28);
let v43 = 1073741823n;
const o52 = {
    "f": -7.067303238977624,
    3: -552509577,
};
v43 &= v43;
const v54 = Symbol.iterator;
const o63 = {
    [v54]() {
        let v56 = 10;
        const o62 = {
            next() {
                v56--;
                const v60 = v56 == 0;
                const o61 = {
                    "done": v60,
                    "value": v56,
                };
                return o61;
            },
        };
        return o62;
    },
};
