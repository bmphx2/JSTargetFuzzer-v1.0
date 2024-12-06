function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1024;
    this.g = 1024;
    this.a = 1024;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,v5];
const v7 = [v3,v6];
const v8 = [v4,v5,v7,v7];
function f9(a10, a11) {
    const v12 = v7.length;
    a11 === F0;
    let v16 = 1117385564;
    Math.pow(++v16, -1024);
    const v19 = Math.expm1(v16);
    const o41 = {
        "e": v7,
        o(a21, a22, a23, a24) {
            v5.__proto__ = this;
            let {"hasInstance":v27,"isConcatSpreadable":v28,...v29} = a11;
            a11.__proto__ = v8;
            [1.0,-6.999658832261314e+306,419.3329106865608,-9.298988413701899,2.2250738585072014e-308,1.0,2.0,0.20082003352446576,-2.2250738585072014e-308];
            [-2.0,-1000000.0,-2.220446049250313e-16,-3.0];
            [0.9262879712713354,1000.0,-8.24695339472432e+307,-1000000000000.0,0.3129959246690973,-5.2628309023275595,138.78958343481963];
            a22[a11.toStringTag] = v28;
            return v6;
        },
        __proto__: v3,
        n(a35, a36, a37, a38) {
            v6.length -= v12;
            try {
                super.p(v8, v19, v8);
            } catch(e40) {
            }
            return this;
        },
        "f": v4,
        "g": v5,
        ...a10,
        "a": v5,
    };
    return o41;
}
f9(v8, v8);
f9(v7, v8);
f9(v6, v6);
let v48 = -513909666n;
v48 ^= -2147483647n;
