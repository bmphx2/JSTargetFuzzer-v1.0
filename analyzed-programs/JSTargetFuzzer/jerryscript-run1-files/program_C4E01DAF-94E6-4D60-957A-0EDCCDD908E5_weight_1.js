function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1073741824;
    this.g = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [5.0,5.354219245044426,-1000000.0,-72173.7018247617,-3.270821549274605,0.0,291.9924025994908,-2.0];
const v7 = [1.7976931348623157e+308,-Infinity,-1.0648363652785896e+308,-293.600281692924];
const v8 = [-203000.3953381416,4.0];
const v9 = [v4,F0,v6,v8,F0];
[F0];
const v11 = [v3];
function f12(a13, a14) {
    const o25 = {
        toString(a16, a17, a18, a19) {
            a18[a14] = a14;
            const v20 = a17 ** v7;
            try { a19(v20, v11, v11, a18, 2n); } catch (e) {}
            return a14;
        },
        "c": a13,
        [v7]: v7,
    };
    return o25;
}
f12(v9, v5);
f12(v8, v3, v11, v11, v8);
f12(v9, v5, v6, f12, v5);
function f29() {
    let v32 = "message";
    const o37 = {
        get a() {
            let v34;
            try { v34 = this("NEGATIVE_INFINITY", this, 5.662791040550411e+307); } catch (e) {}
            v32 = v34;
            try {
                super.charAt();
            } catch(e36) {
            }
            return 5.662791040550411e+307;
        },
        3207: 5.662791040550411e+307,
        268435440: v32,
    };
    return o37;
}
const v38 = f29();
const v39 = f29();
const v40 = f29();
function F44(a46, a47, a48) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a46;
    this.d = 1073741825;
}
const v49 = new F44(v40, v40, 3);
const v50 = new F44(v49, v38, 3);
new F44(v38, v50, -31282);
new RangeError(4050);
new Uint8ClampedArray(4055);
new Uint16Array(134, v40, v39);
