function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65535;
    this[a6];
    const v10 = a5 >>> 536870912;
    const v11 = 536870912 && v10;
    Math.round(v10);
    Math.atanh(v11);
    Math.sqrt(536870912);
    Math.sign(v11);
    const v18 = (-12n).toString();
    try { Array.from(9007199254740990, v18); } catch (e) {}
    this.d = 14423;
    this.f = a6;
}
const v21 = new F3(14423, -65535);
const v22 = new F3(-65535, v21);
const v23 = new F3(-546665426, v21);
function f24(a25, a26, a27, a28) {
    const o58 = {
        "e": a28,
        "b": f24,
        512: v21,
        [14423]: v22,
        "g": -546665426,
        ...v23,
        [v22](a30, a31, a32, a33) {
            try {
                super.fround();
            } catch(e35) {
            }
            return 14423;
        },
        [v23](a37, a38, a39) {
            let v41 = 0;
            while (v41 < 8) {
                const v45 = (a46, a47, a48, a49) => {
                    function F50(a52, a53, a54) {
                        if (!new.target) { throw 'must be called with new'; }
                        this.b = a48;
                    }
                    return v45;
                };
                let v55;
                try { v55 = this["m"](a27); } catch (e) {}
                this[v55];
                v41++;
            }
            return arguments;
        },
    };
    return o58;
}
const v59 = f24(v23, v21, 14423, -546665426);
const v60 = f24(v23, v23, -546665426, 14423);
f24(v23, v60, -546665426, 14423);
new Int8Array(10);
new Float64Array(128);
v59[2449] = -65535;
function F72(a74, a75, a76, a77) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a75;
    this.c = 128;
    this.a = a75;
}
const v78 = new F72(Int8Array, v60, 14423, 128);
const v79 = new F72(v78, v59, 128, -546665426);
new F72(v79, v59, 2449, 10);
new Uint8ClampedArray(2449);
-Infinity < -65537n;
