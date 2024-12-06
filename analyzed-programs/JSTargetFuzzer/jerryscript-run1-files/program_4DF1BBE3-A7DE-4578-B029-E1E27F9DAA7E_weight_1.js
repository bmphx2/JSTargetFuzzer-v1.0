function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 536870912;
    this.f = 536870912;
    this.e = 536870912;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v8 = new BigInt64Array(4028);
new Float64Array(3319);
const v14 = new Uint8Array(1718);
function f18(a19, a20) {
    const o39 = {
        ...v5,
        ...v14,
        [255]: BigInt64Array,
        ...v14,
        "g": BigInt64Array,
        get h() {
            this[46667] = a19;
            try { a20(a20, a20); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a24) {
            this[a24] *= 46667;
            [] = 39946;
            v4[v8] = a20;
            super.h;
            const v27 = Symbol.iterator;
            const o36 = {
                [v27]() {
                    let v29 = 10;
                    const o35 = {
                        next() {
                            v29--;
                            const v33 = v29 == 0;
                            const o34 = {
                                "done": v33,
                                "value": v29,
                            };
                            return o34;
                        },
                    };
                    return o35;
                },
            };
            const v37 = super.a;
            let v38;
            try { v38 = new v37(v37, a24); } catch (e) {}
            v38[2147483648] = v27;
            return a24;
        },
    };
    return o39;
}
const v40 = f18(39946, 46667);
f18(255, 46667);
f18(255, 46667);
const v48 = new BigUint64Array(16);
const v51 = new Float32Array(3007);
const v54 = new Float32Array(3);
Object.defineProperty(v48, "byteOffset", { configurable: true, value: v54 });
v51[v54];
let v56 = v51[2936874794];
v40.g = -1024;
let v59 = --v56;
const v60 = v40 | F0;
const v61 = v40 ** v56;
!v60;
Math.clz32(v61);
--v59;
~v61;
