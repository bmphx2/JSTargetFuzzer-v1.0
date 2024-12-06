const v2 = new Int32Array(128, 128);
const v5 = new Int16Array(38);
const v8 = new Float32Array(1, Int32Array, v5, v5);
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
const v21 = v5[10];
v21[2] = v21;
[v8,v21,1,128,v2.byteLength];
[v5,f9,v21];
[Int16Array];
f9(38, Int16Array);
f9(v5, 1);
f9(1, Float32Array);
function f29() {
    const v30 = -Infinity;
    "-43937" / v5;
    const t29 = "1073741824";
    t29.c = -1033928124;
    const o42 = {
        "g": 255,
        valueOf(a38) {
            a38.valueOf = a38;
            for (const v39 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v30);
                } catch(e41) {
                }
            }
            return 255;
        },
        [v30]: v30,
        "d": -1033928124,
    };
    return o42;
}
const v43 = f29();
const v44 = f29();
const v45 = f29();
function f49(a50, a51, a52, a53) {
    const o67 = {
        ...v44,
        "g": 4.0,
        set NaN(a55) {
            a55[a50] = a55;
            try { a55(this); } catch (e) {}
            new BigUint64Array(3654);
            new EvalError(28, a50);
            new isNaN(78);
        },
    };
    return o67;
}
const v68 = f49(v45, 1000000000000.0, 1000000000000.0, 0.5473982427101329);
const v69 = f49(v44, 1000000000000.0, 1000000000000.0, 0.5473982427101329);
f49(v43, 4.0, 4.0, 1000000000000.0);
const o74 = {
    __proto__: v68,
    4037: v44,
    "a": v45,
};
const o75 = {
    "h": 0.5473982427101329,
    ...v69,
    "f": f49,
    "c": f49,
    "b": v43,
};
