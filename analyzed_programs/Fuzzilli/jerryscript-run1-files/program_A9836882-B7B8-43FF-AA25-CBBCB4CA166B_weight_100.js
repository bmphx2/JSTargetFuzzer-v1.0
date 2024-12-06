new WeakMap();
function f2(a3) {
    const o12 = {
        10000: WeakMap,
        0: WeakMap,
        [a3]: a3,
        get c() {
            this instanceof WeakMap;
            for (let v6 = 0; v6 < 32; v6++) {
                this["p" + v6] = v6;
            }
            return this;
        },
    };
    return o12;
}
const v13 = f2(WeakMap);
const v15 = f2(f2(WeakMap));
[-1000000000.0,5.257933796851313,-287.08268324605353,-2.2250738585072014e-308,NaN,Infinity,NaN,-1000000000000.0,-5.010905134986478];
[-1.8875965830619972,1e-15,-1.7976931348623157e+308];
[1.7976931348623157e+308,-1000000000.0,727100.0935222828,4.915698117478193];
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a24;
    this.g = a25;
}
const v26 = new F22(0n, v15);
const v27 = new F22(1073741825n, v13);
new F22(1073741825n, v13);
v27[4265516548];
const v33 = 23979 | v26;
Math.clz32(v13);
Math.asinh(-490.5102753348671);
let v36 = 23979 >> 23979;
Math.min(v33);
++v36;
