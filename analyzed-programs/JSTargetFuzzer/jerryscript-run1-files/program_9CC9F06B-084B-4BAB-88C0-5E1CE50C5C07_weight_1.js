function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
    this.c = f0;
}
const v3 = new f0();
const v4 = new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = F1;
    this.f = v5;
}
const v9 = new F6(v4);
const v10 = new F6(v3);
const v11 = new F6(v5);
function f12(a13, a14, a15) {
    const o24 = {
        [a14]: a14,
        __proto__: f0,
        "c": a13,
        "a": a14,
        [v11]: F6,
        set d(a17) {
            [[[56848,a17,a17]],-207272009,-207272009,-207272009,-207272009];
        },
        [F6]: v5,
    };
    return o24;
}
f12(v9, v9, v4);
f12(f0, v10, v4);
f12(v5, v11, v5);
[-2.2250738585072014e-308,NaN,-420072.7690909789,-6.648406221814645e+307,-9.65381742752362];
[519215.5746111616,5.29681439935974e+307,-5.501312020405633,8.56437208726123e+307];
[-8.783933324234816,5.111130783595371e+307,NaN,-1000000000000.0,2.220446049250313e-16];
let v32 = -2147483649n;
v32 /= v32;
-4294967295n | 18209n;
