new Int16Array(2);
const v5 = new Int16Array(1105);
new BigUint64Array(6);
function f9(a10, a11) {
    const o38 = {
        valueOf(a13, a14) {
            super.a;
            function F16(a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = a10;
            }
            new F16(a11, v5, a14);
            new F16(a13, this, a13);
            const v23 = new F16(a14, a13, a13);
            return v23;
        },
        [a11](a25, a26) {
            const v28 = Symbol.iterator;
            const o37 = {
                [v28]() {
                    let v30 = 10;
                    const o36 = {
                        next() {
                            v30--;
                            const v34 = v30 == 0;
                            const o35 = {
                                "done": v34,
                                "value": a26,
                            };
                            return o35;
                        },
                    };
                    return o36;
                },
                [-2]: this,
                ...v5,
                "f": v5,
                __proto__: Symbol,
                "d": this,
            };
            return a25;
        },
    };
    return a10;
}
const v39 = f9(2, 6);
const v40 = f9(6, 6);
const v41 = f9(1105, 6);
function F42(a44, a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a44;
    this.e = 6;
    this.c = a46;
}
const v47 = new F42(v41, v40, v39);
const v48 = new F42(v47, v39, 6);
new F42(v41, v47, v48);
try { ArrayBuffer(); } catch (e) {}
