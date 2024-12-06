function f0() {
    const o10 = {
        "a": -2.2250738585072014e-308,
        "f": -2.2250738585072014e-308,
        o(a5, a6) {
            a6 | a6;
            try {
                super.getYear(a5);
            } catch(e9) {
            }
            return -2.2250738585072014e-308;
        },
        __proto__: 1000000000.0,
    };
    return o10;
}
const v11 = f0();
f0();
const v13 = f0();
function f17(a18, a19) {
    const o28 = {
        "h": v11,
        o(a21, a22, a23, a24) {
            Object.defineProperty(a21, "f", { writable: true, get: f0 });
            let v25;
            try { v25 = a18(...a23, ...a23, ...a23, ...a23, ...a19); } catch (e) {}
            super.b = v25;
            let v26;
            try { v26 = a22.padStart(a18, a22); } catch (e) {}
            try { v26(v26, a22, v11, v26); } catch (e) {}
            return a22;
        },
        "a": "n",
        ["n"]: a19,
    };
    return o28;
}
f17(f17(f17("n", "QNe0"), "n"), "a");
function F32() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v35 = new F32();
const v36 = new F32();
const v37 = new F32();
let v43 = 1000000.0;
const v44 = [-1e-15,v43,-937546.0274885385,v37];
const v45 = [v43,-1e-15,v36,v44,-1e-15];
const v46 = [v13,-937546.0274885385,v37];
function f47(a48, a49) {
    const o63 = {
        "b": -1e-15,
        ...a49,
        [v45]: v36,
        __proto__: v36,
        "d": v37,
        "f": a49,
        [a48]: v44,
        set a(a51) {
            this.__proto__ = v45;
            v46[0.22410269410035233] = this;
            const v53 = Symbol.iterator;
            const o62 = {
                [v53]() {
                    let v55 = 10;
                    const o61 = {
                        next() {
                            v55--;
                            const v59 = v55 == 0;
                            const o60 = {
                                "done": v59,
                                "value": v55,
                            };
                            return o60;
                        },
                    };
                    return o61;
                },
            };
        },
    };
    return o63;
}
f47(v46, v35);
f0(v46, v36);
const v66 = f47(v45, v46);
with (v37) {
    let v67 = a;
    let v69 = `rizPp${0.22410269410035233}number${v66}sticky${426.7417148362349}-29565${F32 || v67}atan2`;
    ({"length":v67,} = v69);
    v43 |= 426.7417148362349;
    let v72 = -9;
    Math.round(v72);
    const v75 = v69++;
    v72++;
    Math.fround(v75);
    Math.sign(v72);
    -1487147530 || v69;
}
