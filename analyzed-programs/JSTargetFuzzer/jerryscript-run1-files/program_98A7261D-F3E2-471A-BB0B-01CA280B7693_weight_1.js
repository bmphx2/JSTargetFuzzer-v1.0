function f0() {
    let v3 = "n";
    const o11 = {
        "f": v3,
        "e": 4096,
        valueOf(a5, a6) {
            this.length = 2;
            v3.length = 2147483648;
            v3 = this;
            super.d = -4294967297;
            try {
                super.setUTCMonth(this, v3);
            } catch(e10) {
            }
            return -4294967297;
        },
    };
    return o11;
}
f0();
f0();
const v14 = f0();
const v17 = new Float64Array(1934);
new Int8Array(4);
const v23 = new BigInt64Array(4096);
function f24(a25, a26) {
    const o42 = {
        5: Int8Array,
        ...v17,
        "d": v14,
        ...v14,
        "g": a25,
        valueOf(a28, a29) {
            const v30 = new Int8Array(a25, f0, a28, a29, 4);
            v17.__proto__ = v23;
            const v31 = [-1024,16,39141,129,-14,-39725,11,-14,-21153,-12];
            const v32 = [904535041,5,255,7,-13408637,30748,5,-2147483648,-8,-4096];
            [0,-14778,25906,127,9007199254740990];
            f0();
            const v36 = new f24(v32, v32);
            -v36;
            let v38;
            try { v38 = a28(a29, BigInt64Array); } catch (e) {}
            v30.buffer = v38;
            v31 * v30;
            return a28;
        },
    };
    return o42;
}
f24(4096, BigInt64Array);
f24(4, 1934);
f24(1934, v14);
const v47 = new BigUint64Array();
try { v47.set(); } catch (e) {}
