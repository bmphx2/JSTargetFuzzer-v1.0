const v0 = [-506389.2554192029,1000000000000.0,-2.2250738585072014e-308,6.459322189061062,-1.0,-628621.200582912];
const v1 = [1.4583412230711161,-2.8089336407558063,5.654308007437952e+307,82.81758602469245,4.505689735954563];
const v2 = [-5.0,-0.5231545434633045,5.896029379587368,-1.0,1.3663787040883478e+308,0.646589947738039,0.7333735811901965,-644.5081645599066];
const o3 = {
    __proto__: v2,
    "c": v2,
    "d": v1,
};
function f4(a5, a6) {
    const o17 = {
        get c() {
            function F8(a10, a11, a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = v0;
            }
            new F8(v0, v0, v0, v1);
            new F8(v2, this, v0, a5);
            new F8(v2, v2, a5, this);
            return v0;
        },
        1006: a5,
        "g": a5,
        "a": v2,
    };
    return o17;
}
const v18 = f4(v0, v2);
let v19 = f4(v2, f4);
const v20 = f4(v2, v2);
function f24(a25, a26) {
    const o33 = {
        [v20](a28, a29, a30) {
            v19 = a26;
            b = 2147483648n;
            v19.e = f4;
            Object.defineProperty(v18, "a", { writable: true, configurable: true, value: a26 });
            f4(a25, a29);
            let v32;
            try { v32 = v2.join(-2147483647n, a26, ...v19, v19); } catch (e) {}
            return v32;
        },
        130: 2147483648n,
        1073741825: v0,
        __proto__: v20,
    };
    return o33;
}
f4(f24(v0, v18), v19);
f24(v1, v19);
typeof Math.imul(Math, Math);
