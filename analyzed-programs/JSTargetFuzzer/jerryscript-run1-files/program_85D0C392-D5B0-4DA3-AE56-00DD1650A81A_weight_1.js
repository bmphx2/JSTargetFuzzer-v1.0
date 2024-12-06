const v2 = new Int32Array(128);
const v5 = new Int16Array(38);
const v8 = new Float32Array(1);
function f9(a10, a11) {
    const o20 = {
        __proto__: v8,
        "d": v2,
        "h": a11,
        ...v2,
        n(a13, a14, a15, a16) {
            let v17;
            try { v17 = this.p(a13, a15, this, a14, a11); } catch (e) {}
            v5[244] = 38;
            v8["every"](v17, v5);
            return a16;
        },
    };
    return o20;
}
f9(38, Int16Array);
f9(v5, 1);
f9(1, Float32Array);
function f24() {
    const v25 = -Infinity;
    const o33 = {
        "g": 255,
        valueOf(a29) {
            a29.valueOf = a29;
            for (const v30 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v25);
                } catch(e32) {
                }
            }
            return 255;
        },
        [v25]: v25,
        "d": -1033928124,
    };
    return o33;
}
const v34 = f24();
const v35 = f24();
const v36 = f24();
function f40(a41, a42, a43, a44) {
    const o58 = {
        ...v35,
        "g": 4.0,
        set a(a46) {
            a46[a41] = a46;
            try { a46(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o58;
}
const v59 = f40(v36, 1000000000000.0, 1000000000000.0, 1000000.0);
const v60 = f40(v35, 1000000000000.0, 1000000000000.0, 1000000.0);
f40(v34, 4.0, 4.0, 1000000000000.0);
const o65 = {
    __proto__: v59,
    4037: v35,
    "a": v36,
};
const o66 = {
    "h": 1000000.0,
    ...v60,
    "f": f40,
    "c": f40,
    "b": v34,
};
