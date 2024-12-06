function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -12;
    this.e = -12;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7) {
    const o16 = {
        [a7]: a7,
        [v5]: a7,
        __proto__: v5,
        valueOf(a9, a10) {
            var a = a9;
            try { v5["apply"](F0, a7, a10); } catch (e) {}
            return 1.6503061599874692e+307;
        },
        "a": v5,
        [F0]: v3,
    };
    return o16;
}
const v17 = f6(v4);
const v18 = f6(v3);
f6(v4);
function f20(a21, a22, a23) {
    const o33 = {
        get a() {
            return f6;
        },
        1371811319: f6,
        set f(a29) {
            if (v5 > a23) {
                try {
                    super.of();
                } catch(e32) {
                }
            } else {
                this.a *= a29;
            }
        },
    };
    return f20;
}
f20(v17, v17, v18);
f20(v18, v18, v18);
f20(v17, v17, v3);
function f43() {
    return 10000;
}
const v50 = -5534n >= -5534n;
const t51 = 10000;
t51[16] = 10000;
const v51 = 12n && v50;
try { v51.n(); } catch (e) {}
const v56 = -4294967295;
f43();
1 == 1 ? 1 : -5534n;
