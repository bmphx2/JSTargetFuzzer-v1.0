const v0 = [-506389.2554192029,1000000000000.0,-2.2250738585072014e-308,6.459322189061062,-1.0,-628621.200582912];
const v1 = [1.4583412230711161,-2.8089336407558063,5.654308007437952e+307,82.81758602469245,4.505689735954563];
const v2 = [-5.0,-0.5231545434633045,5.896029379587368,-1.0,1.3663787040883478e+308,0.646589947738039,0.7333735811901965,-644.5081645599066];
function f3(a4, a5) {
    const o16 = {
        get c() {
            function F7(a9, a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = v0;
            }
            new F7(v0, v0, v0, v1);
            new F7(v2, this, v0, a4);
            new F7(v2, v2, a4, this);
            return v0;
        },
        1006: a4,
        "g": a4,
        "a": v2,
    };
    return o16;
}
const v17 = f3(v0, v2);
let v18 = f3(v2, f3);
const v19 = f3(v2, v2);
function f23(a24, a25) {
    const o32 = {
        [v19](a27, a28, a29) {
            v18 = a25;
            b = 2147483648n;
            v18.e = f3;
            Object.defineProperty(v17, "a", { writable: true, configurable: true, value: a25 });
            f3(a24, a28);
            let v31;
            try { v31 = v2.join(-2147483647n, a25, ...v18, v18); } catch (e) {}
            return v31;
        },
        130: 2147483648n,
        1073741825: v0,
        __proto__: v19,
    };
    return o32;
}
f3(f23(v0, v17), v18);
f23(v1, v18);
typeof Math.imul(Math, Math);
