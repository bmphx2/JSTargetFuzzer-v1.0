function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [4.0,0.6006936778844639,0.2234793388733144,Infinity,0.5447135459053191,0.6279004613834939,-1000000000000.0,0.0,455.73041605342814,-25.042850924882373];
let v7 = [-6.262869762021783,0.40458251078653695,-1000000000.0,-1.0];
const v8 = [8.975613953021082,NaN,1000.0,-2.0,-1000000.0,5.0,-9.666450090179342];
function f9(a10, a11, a12) {
    const o17 = {
        0: a11,
        "h": v7,
        1073741823: v7,
        [a12]: v4,
        "c": v3,
        ...v3,
        ...v4,
        "b": v7,
        "e": v5,
        "d": a12,
        p(a14, a15, a16) {
            v4.g >>= a10;
            v7 = a14;
            a16 >>>= a11;
            return a14;
        },
    };
    for (const v18 of v6) {
        o17 >> a12;
    }
    a11.a = a11;
    return o17;
}
f9(v3, v8, v8);
f9(v5, v8, v7);
f9(v5, v8, v8);
function f24() {
    arguments[2147483648];
    return arguments;
}
f24();
