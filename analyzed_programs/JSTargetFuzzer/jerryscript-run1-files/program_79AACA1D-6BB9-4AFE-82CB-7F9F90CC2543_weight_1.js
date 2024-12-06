function f0() {
    let v3 = "n";
    const o18 = {
        "f": v3,
        "e": 4096,
        valueOf(a5, a6) {
            this.length = 2;
            v3.length = 2147483648;
            v3 = this;
            let v10;
            try { v10 = a5["for"](); } catch (e) {}
            2 < v10;
            v3.f;
            super.d = -4294967297;
            try {
                super.setUTCMonth(this, v3);
            } catch(e17) {
            }
            return -4294967297;
        },
    };
    return o18;
}
f0();
const v20 = f0();
const v21 = f0();
const v24 = new Float64Array(1934);
const v27 = new Int8Array(4);
const v30 = new BigInt64Array(4096);
function f31(a32, a33) {
    const o53 = {
        5: Int8Array,
        ...v24,
        "c": a32,
        [a32]: a32,
        ...v20,
        __proto__: v30,
        "h": Int8Array,
        "d": v21,
        ...v21,
        o(a35, a36) {
            try { v24.set(v27); } catch (e) {}
            return a36;
        },
        [v21]: BigInt64Array,
        "g": a32,
        valueOf(a39, a40) {
            const v41 = new Int8Array(a32, f0, a39, a40, 4);
            v24.__proto__ = v30;
            const v42 = [-1024,16,39141,129,-14,-39725,11,-14,-21153,-12];
            const v43 = [904535041,5,255,7,-13408637,30748,5,-2147483648,-8,-4096];
            [0,-14778,25906,127,9007199254740990];
            f0();
            const v47 = new f31(v43, v43);
            -v47;
            let v49;
            try { v49 = a39(a40, BigInt64Array); } catch (e) {}
            v41.buffer = v49;
            v42 * v41;
            return a39;
        },
    };
    return o53;
}
f31(4096, BigInt64Array);
f31(4, 1934);
f31(1934, v21);
const v58 = new BigUint64Array();
try { v58.set(); } catch (e) {}
