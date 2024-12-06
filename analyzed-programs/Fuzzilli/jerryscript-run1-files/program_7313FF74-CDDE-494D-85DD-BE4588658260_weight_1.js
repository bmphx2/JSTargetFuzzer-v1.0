function f0() {
    const o21 = {
        ["2x"](a5, a6) {
            a6.length;
            let v8;
            try {
            const t0 = "bigint";
            v8 = t0("2x", "bigint");
            } catch (e) {}
            return v8;
        },
        "b": "2x",
        "h": "bigint",
        "d": "bigint",
        3: "2x",
        ..."2x",
        get g() {
            let v10 = 0;
            do {
                const t19 = "o";
                t19.toString = v10;
                Math.acosh(1821335012);
                Math.cbrt(1821335012);
                Math.random();
                Math.abs(-12);
                v10++;
            } while (v10 < 3)
            return "o";
        },
    };
    return o21;
}
const v22 = f0();
const v23 = f0();
const v24 = f0();
function F25(a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v23;
    this.a = a27;
    this.d = v22;
}
const v28 = new F25(v24);
const v29 = new F25(v23);
const v30 = new F25(v23);
function F31(a33, a34, a35) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a33;
    this.c = a35;
}
const v36 = new F31(v23, F25, v23);
new F31(v22, v36, v22);
const v38 = new F31(v24, v28, v23);
const v40 = new WeakSet();
function f44(a45, a46, a47, a48) {
    const o49 = {
        "h": v29,
        131: v24,
        [v30]: a47,
        "d": a48,
    };
    return o49;
}
f44(v40, F25, v30, v38);
f44(v40, f0, v40, v38);
f44(v36, v38, v30, v38);
