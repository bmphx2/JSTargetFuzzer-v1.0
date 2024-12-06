function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 3;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o19 = {
        "c": F0,
        "h": v4,
        "f": F0,
        3: F0,
        "d": a7,
        ...v5,
        ...v4,
        get e() {
            for (let i11 = 0; i11 < 0; i11++) {
                try {
                    super.ceil(i11, v5, this, this, this);
                } catch(e18) {
                }
            }
            return a8;
        },
    };
    return o19;
}
f6(f6(v5, v4), v4);
const v22 = f6(v4, v3);
function f24() {
    const v26 = new BigInt64Array();
    with (v26) {
        try {
        const t0 = 282340487;
        t0();
        } catch (e) {}
    }
    return f24;
}
f24();
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v22;
    this.g = a38;
    this.e = a37;
}
const v39 = new F35(v5, v3);
const v40 = new F35(v39, v4);
new F35(-1e-15, v40);
const v45 = 12n && (-5534n >= -5534n);
try { v45.n(); } catch (e) {}
1 == 1;
