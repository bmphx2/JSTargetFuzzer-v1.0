function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1450671275;
}
new F0();
new F0();
new F0();
new Int32Array(3511);
new Uint8ClampedArray(1024);
const v17 = new Uint8ClampedArray(127);
const v20 = new Uint32Array(181);
let v22 = BigUint64Array;
let v23 = new v22(1);
let v24 = 253;
[v24,,v22,v23] = v20;
let v26;
try { v26 = v22["abs"](181, v24, v22); } catch (e) {}
const o29 = {
};
new Proxy(Uint8ClampedArray, o29);
const v37 = new Uint16Array(v24);
function f38() {
    return v37;
}
try { v17.join(v26); } catch (e) {}
[-0.0,NaN];
[5.0,-1e-15,-2.220446049250313e-16,2.220446049250313e-16,317.24730260064325];
[NaN,-0.0,1.8359860889621696e+306,-1000.0];
for (let i48 = 0; i48 < 2; i48++) {
    const v54 = new Function("x");
    v54.name;
}
Function();
