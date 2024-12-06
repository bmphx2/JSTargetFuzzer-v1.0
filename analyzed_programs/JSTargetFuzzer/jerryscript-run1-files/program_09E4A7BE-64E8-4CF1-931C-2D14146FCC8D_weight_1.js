const v1 = new WeakMap();
function f2(a3, a4) {
    const o12 = {
        "h": a4,
        [a4]: a3,
        get f() {
            return WeakMap;
        },
        [v1](a10, a11) {
            this.h = a3;
            return a11;
        },
        9: a3,
        ...a3,
        [WeakMap]: v1,
        __proto__: a4,
        [v1]: a3,
        [a3]: a4,
        "e": a4,
        "b": a4,
        ...a4,
    };
    return o12;
}
const v13 = f2(WeakMap, v1);
const v14 = f2(WeakMap, WeakMap);
const v15 = f2(v13, v13);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v13;
    new Int8Array(2);
    new Uint16Array(102);
    new Uint8ClampedArray(29);
}
new F16(v14, v1, v15, v13);
new F16(v14, v13, v15, v14);
new F16(v15, v14, v15, v14);
[NaN];
const v35 = [0.5792216338108576,-5.7479948957309945,-979.5375725308046,486463.802435681,-0.0];
[5.0,-7.286573568974495,4.0,1000000.0];
let v39;
try { v39 = v35.at(255); } catch (e) {}
v39 = WeakMap - f2;
new Int32Array(255);
new Uint8ClampedArray(778);
new Int16Array(1635);
1 > Uint16Array;
Math.pow(Uint16Array, !Uint16Array);
