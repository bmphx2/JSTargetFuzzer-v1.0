const v1 = new WeakMap();
function f2(a3, a4) {
    const o6 = {
        get g() {
            this.f = this;
            return a3;
        },
        [a3]: a3,
        "f": a4,
        "h": WeakMap,
        [WeakMap]: v1,
        [a4]: v1,
        "d": WeakMap,
        [v1]: a3,
        __proto__: v1,
    };
    return o6;
}
const v8 = f2(f2, f2(f2, f2));
f2(v8, v8);
[0.8964469742962325,NaN];
[8.130766660498436e+307,1.0,NaN,0.20765801602806067,2.0];
[4.396528434827115];
let v20 = -1173361328;
const v23 = --v20;
const v24 = v23 | -2095567306;
Math.sinh(v23);
Math.atan(v24 % -2095567306);
