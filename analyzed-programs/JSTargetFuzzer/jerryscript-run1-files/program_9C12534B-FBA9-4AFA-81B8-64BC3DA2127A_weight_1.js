const v1 = new WeakMap();
function f2(a3, a4) {
    const o8 = {
        "h": a4,
        [a4]: a3,
        [v1](a6, a7) {
            this.h = a3;
            return a7;
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
    return o8;
}
const v9 = f2(WeakMap, v1);
const v10 = f2(WeakMap, WeakMap);
const v11 = f2(v9, v9);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v9;
    new Int8Array(2);
    new Uint16Array(102);
    new Uint8ClampedArray(29);
}
new F12(v10, v1, v11, v9);
new F12(v10, v9, v11, v10);
new F12(v11, v10, v11, v10);
[NaN];
[0.5792216338108576,-5.7479948957309945,-979.5375725308046,486463.802435681,-0.0];
[5.0,-7.286573568974495,4.0,1000000.0];
new Int32Array(255);
new Uint8ClampedArray(778);
new Int16Array(1635);
1 > Uint16Array;
Math.pow(Uint16Array, !Uint16Array);
