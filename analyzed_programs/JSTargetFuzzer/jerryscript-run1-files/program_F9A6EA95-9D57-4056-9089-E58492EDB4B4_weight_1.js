const v3 = new Float32Array(2919);
new BigInt64Array(4);
const v9 = new Float64Array(7);
function f10(a11, a12, a13, a14) {
    const o18 = {
        "f": a14,
        set c(a16) {
            const v17 = this.f;
            a11[536870889] -= 7;
            super.a = v3;
            super.g = v17;
        },
        "e": BigInt64Array,
        "h": a11,
        "b": Float32Array,
        "g": 4,
        "c": a14,
    };
    return a11;
}
const v19 = f10(2919, 4, 7, 7);
const v20 = f10(2919, 4, 4, 4);
f10(4, 4, 4, v19);
function F31(a33, a34, a35, a36) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4;
    this.f = -4294967296;
    function f37(a38, a39) {
        let [v40,...v41] = a36;
    }
    new Promise(f37);
}
new F31(-4294967296, 5n, "global", "-16");
new F31(-4294967296, -7n, "-16", "global");
const v49 = new F31(-4294967296, 5n, "global", "global");
"function" == v49;
if (v20) {
} else {
    function F54(a56, a57, a58) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a58;
    }
    const v59 = new F54(F54, "global", "function");
    const v60 = new F54(-1, "global", "function");
    Object.defineProperty(v59, "f", { enumerable: true, value: 255 });
    v59.e = "-16";
    new F54(5n, v9, v60);
    for (let v62 = 0; v62 < 32; v62++) {
        v59["p" + v62] = v62;
    }
    new F54(v59, "global", "function");
}
