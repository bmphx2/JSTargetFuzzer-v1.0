const v2 = new Uint8Array(4);
const v5 = new Uint16Array(16);
const v8 = new BigUint64Array(49);
function f12(a13, a14, a15) {
    const o19 = {
        __proto__: v2,
        [Uint8Array]: v5,
        [a13]: -10n,
        48: a14,
        [a15](a17, a18) {
            this[a17] = this;
            v2[a14] /= a14;
            super.g = a14;
            return a13;
        },
        "g": a13,
        "d": v8,
        [Uint16Array]: -4294967297n,
    };
    return o19;
}
f12(Uint8Array, 16, 49);
f12(129n, 4, 4);
f12(v8, 4, 4);
class C26 {
    static get a() {
        const o30 = {
            "maxByteLength": 268435439,
        };
        const v32 = new SharedArrayBuffer(1278, o30);
        v32.byteLength;
        o30[-622135.0466104625];
        const o36 = {
        };
        new Proxy(v32, o36);
        new Uint32Array(v32);
        return o30;
    }
}
const v40 = new C26();
const v41 = new C26();
const v42 = new C26();
class C43 extends C26 {
    static set c(a45) {
        let v46;
        try { v46 = a45(v41, v41, a45); } catch (e) {}
        Object.defineProperty(v42, this, { writable: true, configurable: true, value: v46 });
        new Float32Array(4096);
        new Float32Array(1);
        new BigUint64Array(8);
    }
}
new C43();
new C43();
new C43();
const v66 = [-16,4];
const v67 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
[-4294967295,14,219268071,1317141055,2];
delete v67[-9];
try { v66.slice(45103); } catch (e) {}
const o74 = {
    __proto__: v66,
    "d": -2,
    3943951267: 536870889,
    "a": true,
    [4]: 4294967297,
    "e": v66,
    "g": 26157,
    "c": v40,
    ...C26,
    "e": 45103,
};
