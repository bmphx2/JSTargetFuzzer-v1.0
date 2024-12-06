function f3() {
    let v4;
    try { v4 = f3(3, -10, ...f3, f3); } catch (e) {}
    let v5;
    try { v5 = v4(); } catch (e) {}
    function F6(a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = v5;
        this.e = 3;
        this.a = a9;
    }
    new F6(v5, F6, -7019);
    new F6(-7019, F6, -10);
    new F6(-10, F6, -10);
    return -7019;
}
function f14(a15, a16) {
    const o32 = {
        "h": a15,
        "c": a15,
        "g": -7019,
        p(a18, a19, a20) {
            [536870889];
            [-57988,10000,65537,9,-2147483649,-41564];
            [8,-256,128,6689373,1000];
            return a15;
        },
        5: a16,
        [a16](a26, a27) {
            for (const v28 in this) {
                [-1000000.0,2.2250738585072014e-308,-0.9879773634313676];
                [-463.88114240944935,7.960918965807552e+307,-1000.0];
                [1e-15,0.9053474121201022,68657.72615858959,-2.5107284995955315,1.9802901749770374,0.0,1.76265007519095e+308,-1.0,2.0];
            }
            this[f3] = a27;
            return a27;
        },
    };
    return o32;
}
f14(-10, 3);
const v34 = f14(3, -10);
const v35 = f14(3, -7019);
const v41 = new Float64Array(6);
new Int16Array(16);
new Uint32Array(3);
0 != (1073741823 < 2);
let v53 = 0 - 16;
v53 |= v53;
Object.defineProperty(v34, "g", { configurable: true, enumerable: true, value: 5n });
function F54(a56, a57, a58, a59) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a59;
}
const v60 = new F54(v41, 6n, 1073741823, v35);
new F54(v60, -12n, 3, v35);
new F54(v41, -12n, -10, v35);
