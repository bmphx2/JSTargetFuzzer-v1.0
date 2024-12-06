function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 65537;
}
const v3 = new F0();
let v4 = new F0();
function f5(a6, a7) {
    return f5;
}
function f11(a12, a13) {
    const o14 = {
        "e": F0,
    };
    return o14;
}
const v15 = f11(v4, v4);
const v16 = f11(v4, v15);
const v17 = f11(v15, F0);
const v18 = f5(F0, F0);
const v19 = new F0();
function f22(a23, a24, a25, a26) {
    const o27 = {
        "h": v17,
        "c": a25,
    };
    return o27;
}
f22(v17, v16, v3, v3);
f22(v17, v17, v3, v19);
f22(v17, v15, v4, v19);
const v35 = [4294967296,4,-65536,4096,-1726937484,1007951977,1631794986,2,-9,1024];
const v36 = [-536870912,-4294967295,255,128,4,128,-2100011206];
const v37 = [-501425623,4294967296,16,-2,60469,-3,6,1928398607];
function f38() {
}
v3.__proto__ = v36;
Math.clz32(6);
6 >>> 14872;
v35 ** Math;
const v47 = Math.cosh(6);
Math.sinh(f38);
--F0;
const v52 = [v37,-1000000.0,0.014069366437978514,[-1000000.0,f38,-807.6596022618603,-1000000.0]];
const v53 = [v52,f38,-807.6596022618603];
function* f57(a58, a59, a60, a61) {
    try { a60.padStart(a58, "object"); } catch (e) {}
    const o63 = {
        "construct": v47,
        "ownKeys": f38,
        "preventExtensions": v3,
    };
    new Proxy(v53, o63);
    const v67 = new Map();
    v4.d;
    delete v67[8];
    v4 = a60;
    yield* "object";
    return a58;
}
f57(-807.6596022618603, "U7O", v18, v52);
