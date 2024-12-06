function f3(a4) {
    const o17 = {
        set c(a6) {
            a6[this] >>= 49610;
            for (let v7 = 0; v7 < 32; v7++) {
                this["p" + v7] = v7;
            }
        },
        "h": a4,
        set g(a11) {
            a11.b = super.b;
            let v13 = super.a;
            ({"c":a11,...v13} = this);
            const o14 = {
            };
            new Proxy(a11, o14);
        },
    };
    return o17;
}
const v18 = f3(-25400);
const v19 = f3(49610);
f3(-25400);
function f21(a22, a23) {
    const o27 = {
        "e": v18,
        get g() {
            f3 = a23;
            !v19;
            a23 = v18;
            let v26;
            try { v26 = new f3(); } catch (e) {}
            v19.toString = f3;
            v26 = this;
            this.valueOf = f3;
            return a23;
        },
        ...v19,
        "h": -25400,
        "g": a23,
        "f": a23,
    };
    return o27;
}
f21(-25400, -25400);
f21(-25400, f21(-25400, 9007199254740991));
function f32() {
    return -25400;
}
new BigUint64Array(42);
new Float32Array(129);
new Float32Array(1);
function F43() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = false;
}
new F43();
const v48 = new f3(1000);
for (const v49 in v48) {
    const v51 = v49 * v49;
    v51 * (-7 & v51);
}
