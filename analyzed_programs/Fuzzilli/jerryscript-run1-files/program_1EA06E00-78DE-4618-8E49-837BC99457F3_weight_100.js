function f9(a10, a11, a12) {
    const o29 = {
        "g": a11,
        "e": a12,
        165: a12,
        "d": 24,
        "b": 6321,
        valueOf(a14, a15, a16, a17) {
            super.a >>= 65535;
            const v19 = Symbol.iterator;
            const o28 = {
                [v19]() {
                    let v21 = 10;
                    const o27 = {
                        next() {
                            v21--;
                            const v25 = v21 == 0;
                            const o26 = {
                                "done": v25,
                                "value": v21,
                            };
                            return o26;
                        },
                    };
                    return o27;
                },
            };
            return o28;
        },
    };
    return o29;
}
const v30 = f9(-12, -12, -2032120915);
const v32 = f9(12446, -37328, f9(24, f9, 6321));
function f33(a34, a35, a36, a37) {
    const o54 = {
        "a": a36,
        "b": v32,
        ...v30,
        3: f9,
        ...v32,
        "h": a34,
        "e": a36,
        "c": a35,
        set f(a39) {
            a37[this] = 12446;
            let v40 = 0;
            while (v40 < 6) {
                this | a39;
                new BigUint64Array(255);
                new Float64Array(2242);
                new Uint8Array(1986);
                v40++;
            }
        },
    };
    return o54;
}
const v56 = f33(-37328, f33(-12, 24, 65535, v30), 6321, v30);
const v57 = f33(-330103816, 128, 24, v30);
const v58 = f9(-37328, 65535, v56);
function F59(a61, a62) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a61;
    this.e = a61;
    this.a = a62;
}
const v63 = new F59(v58, v57);
new F59(v30, v57);
new F59(v58, v63);
