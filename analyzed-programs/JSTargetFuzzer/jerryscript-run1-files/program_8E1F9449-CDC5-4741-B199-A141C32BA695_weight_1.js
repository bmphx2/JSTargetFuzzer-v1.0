function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 5;
    this.h = 5;
    this.f = 5;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v6 = [v5,F0];
const v7 = [v5,v6,v6,v3];
[v7,v7,F0,F0,v6];
[-Infinity,-7.9336676211656005,3.0];
[-567349.5220828813];
[0.3071710185125984,684.267754308124,-1.1370060902472199e+308,-32.89989083780881,2.0,4.274751204481969,1.7976931348623157e+308,6.738194465443645e+307,2.220446049250313e-16];
new WeakSet();
function f14() {
    return v7;
}
const v17 = new Uint32Array(181);
let v19 = BigUint64Array;
let v20 = new v19(1);
let v21 = 253;
[v21,,v19,v20] = v17;
try { v19["abs"](181, v21, v19); } catch (e) {}
new Uint16Array(v21);
for (let i34 = 0;
    i34 < 2;
    (() => {
        i34++;
        const v41 = [[964329252n]];
        try { v41.toLocaleString(v41); } catch (e) {}
    })()) {
    const v44 = new Function("x");
    v44.name;
}
Function();
