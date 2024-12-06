function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const o6 = {
        "defineProperty": EvalError,
    };
    const v8 = new Proxy(EvalError, o6);
    Object.defineProperty(v8, 1203889623, { configurable: true, get: EvalError, set: EvalError });
    new Float64Array(4);
    new BigInt64Array(1024);
    new Float64Array(1024);
    this.e = -9007199254740991;
    this.a = -9007199254740991;
}
const v17 = new F0();
const v18 = new F0();
const v19 = new F0();
function f21(a22, a23) {
    const o24 = {
        "g": a22,
        536870887: a23,
        __proto__: v17,
    };
    return o24;
}
f21(v19, v17);
f21(v17, v19);
f21(v17, v18);
[-2.2250738585072014e-308,1.43673276373537e+308,-715.6230195735567,2.2250738585072014e-308,6.794119142177632,-2.220446049250313e-16,1.7976931348623157e+308,-2.2250738585072014e-308];
[-0.0,-2.2250738585072014e-308,0.1161955699433116,3.0,5.0,7.345500313828289,-1000000.0];
const v32 = [1.0093258042877837e+308,-2.2250738585072014e-308,-126157.19424573332,1000.0,0.6003820416516692,Infinity,-909.0635816386745,980223.8656810801,-4.0];
const v41 = new Uint32Array(181);
let v43 = BigUint64Array;
let v44 = new v43(1);
let v45 = 253;
[v45,,v43,v44] = v41;
try { v43["abs"](181, v45, v43); } catch (e) {}
new Uint16Array(v45);
for (let i58 = 0;
    i58 < 2;
    (() => {
        i58++;
        const v63 = "2147483648" - -35011;
        9 == v63;
        [] = v32;
        const t4 = -35011;
        t4[7] = v63;
        delete v43[Function];
    })()) {
    const v67 = new Function("x");
    v67.name;
}
Function();
