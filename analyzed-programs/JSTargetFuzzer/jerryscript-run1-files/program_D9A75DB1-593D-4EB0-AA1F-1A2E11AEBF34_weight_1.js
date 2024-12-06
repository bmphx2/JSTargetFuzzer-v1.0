const v0 = [652977.2637172348,-3.5374115954922445,-3.0];
const v1 = [3.997143942314941e+307];
const v2 = [7.512590142725507e+307,0.662723281205972,5.175866775294596,0.9403167209281557,2.2250738585072014e-308];
class C3 {
    o(a5, a6) {
        Object.defineProperty(this, a6, { configurable: true, value: v1 });
        a6 = v0;
        return true;
    }
    static set e(a9) {
        const v10 = [this,this,v1];
        [[v10,v1,v10,this,v10],this,v1,v2];
        +a9;
        a9 === v1 ? a9 : v1;
    }
}
const v16 = new C3();
const v17 = new C3();
const v18 = new C3();
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.isConcatSpreadable = a24;
}
const v25 = new F19(C3, v0, C3, v1);
const v26 = new F19(v17, v0, v18, v2);
const v27 = new F19(v16, v0, v18, v2);
function f28(a29, a30, a31) {
    const o34 = {
        "b": C3,
        2147483648: a30,
        "flags": C3,
        get h() {
            v18[268435441] **= v16;
            delete this[a29];
            return v25;
        },
        __proto__: v26,
        "h": F19,
        4: v27,
        "g": a31,
    };
    return o34;
}
f28(v26, v25, v25);
const v36 = f28(v26, v16, v26);
f28(v36, v36, v26);
function f38() {
    const v39 = -Infinity;
    const o47 = {
        "g": 255,
        valueOf(a43) {
            a43.valueOf = a43;
            for (const v44 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -1033928124, 255, v39);
                } catch(e46) {
                }
            }
            return 255;
        },
        [v39]: v39,
        "d": -1033928124,
    };
    return o47;
}
const v48 = f38();
const v49 = f38();
const v50 = f38(v49, v1, f28);
function f54(a55, a56, a57, a58) {
    const o72 = {
        ...v49,
        "g": 4.0,
        set a(a60) {
            a60[a55] = a60;
            try { a60(this); } catch (e) {}
            new BigUint64Array(3654);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o72;
}
const v73 = f54(v50, 1000000000000.0, 1000000000000.0, 1000000.0, f38);
f54(v49, 1000000000000.0, 1000000000000.0, 1000000.0);
const v75 = f54(v48, 4.0, 4.0, 1000000000000.0);
const o79 = {
    __proto__: v73,
    4037: v49,
    "e": v50,
};
const o80 = {
    "h": 1000000.0,
    ...v75,
    "f": f54,
    "c": f54,
    "b": v48,
};
