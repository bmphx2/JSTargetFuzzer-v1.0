const v1 = new Date();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v1;
    this.g = a4;
    this.e = Date;
}
const v5 = new F2(F2);
new F2(Date);
new F2(Date);
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a16;
    this.e = v5;
    v1.a = a16;
}
new F14(-256, 38179517);
const v19 = new F14(-2, -256);
new F14(38179517, -2);
function f21() {
    const v22 = -Infinity;
    const o30 = {
        "g": -2,
        valueOf(a26) {
            a26.valueOf = a26;
            for (const v27 in this) {
                try {
                    super.getOwnPropertyDescriptors(this, -2, 255, v22);
                } catch(e29) {
                }
            }
            return 255;
        },
        [v22]: v22,
        "d": -1033928124,
    };
    return o30;
}
const v31 = f21();
const v32 = f21();
const v33 = f21();
function f37(a38, a39, a40, a41) {
    const o55 = {
        ...v32,
        "a": 4.0,
        set a(a43) {
            a43[a38] = a43;
            try { a43(this); } catch (e) {}
            new BigUint64Array(-65536, v19, v1);
            new Uint8Array(28);
            new Int32Array(78);
        },
    };
    return o55;
}
const v56 = f37(v33, 1000000000000.0, 1000000000000.0, 1000000.0);
const v57 = f37(v32, 1000000000000.0, 1000000000000.0, 1000000.0);
f37(v31, 4.0, 4.0, 1000000000000.0);
3713 < 1696538912;
for (let i63 = 0; i63 < 6; i63++) {
    function f69() {
        return i63;
    }
}
const o83 = {
    __proto__: v56,
    4037: v32,
    "a": v33,
    get c() {
        return super.h;
    },
    [v33]() {
        let v76 = 10;
        const o82 = {
            next() {
                v76--;
                const v80 = v76 == 0;
                const o81 = {
                    "done": v80,
                    "value": v76,
                };
                return o81;
            },
        };
        return o82;
    },
};
const o84 = {
    "h": 1000000.0,
    ...v57,
    "f": f37,
    "c": f37,
    "b": v32,
};
