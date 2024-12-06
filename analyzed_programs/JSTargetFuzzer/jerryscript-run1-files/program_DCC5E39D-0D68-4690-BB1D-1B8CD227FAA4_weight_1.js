const v0 = [1.1355748199509499];
const v1 = [Infinity,-1000000.0,270.0125531862418,-5.501676744785754e+307,684.3899159607508,-405.8755435686289,-1000000.0,7.340650727815632];
const v2 = [0.14838277559667656,-1.0,2.220446049250313e-16,0.43917480733733094];
let v6;
try { v6 = v1(v0, v0); } catch (e) {}
v2[v6] = 536870912;
function f7(a8, a9) {
    a9 % a8;
    const v12 = Symbol.isConcatSpreadable;
    v0[v12] = v12;
    const o20 = {
        valueOf(a17) {
            const v18 = delete this[5];
            throw this;
            v18[1] = v0;
            Object.defineProperty(v1, 65536, { writable: true, configurable: true, enumerable: true, value: a17 });
            a9.length = a9;
            return delete a9[11];
        },
        ...v1,
        "b": a9,
        __proto__: v0,
        "a": v2,
        "h": a9,
    };
    return o20;
}
f7(v1, v0);
f7(v2, v0);
f7(v2, v1);
function f24() {
    return v0;
}
const v33 = new Uint32Array(181);
let v35 = BigUint64Array;
let v36 = new v35(1);
let v37 = 253;
[v37,,v35,v36] = v33;
let v39;
try { v39 = v35["abs"](181, v37, v35); } catch (e) {}
new Uint16Array(v37, Uint32Array, v39);
for (let i50 = 0; i50 < 2; i50++) {
    const v56 = new Function("x");
    v56.name;
}
Function();
