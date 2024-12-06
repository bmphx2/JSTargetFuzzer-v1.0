function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -1;
    this.e = -1;
    this.toPrimitive = -1;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v7 = -12;
function f9(a10, a11, a12, a13) {
    const o21 = {
        [F0](a15, a16) {
            a11[0] /= a15;
            return this;
        },
        ...v3,
        get c() {
            v7 = a10;
            this.valueOf = a11;
            return -9007199254740990;
        },
    };
    return o21;
}
f9(v7, v3, v5, v4);
f9(v7, f9, v5, v5);
f9(-1236924708, -1236924708, v4, v3);
class C31 {
    static get a() {
        const o35 = {
            "maxByteLength": 268435439,
        };
        const v37 = new SharedArrayBuffer(1278, o35);
        v37.a;
        o35[-622135.0466104625];
        const o41 = {
        };
        new Proxy(v37, o41);
        new Uint32Array(v37);
        return o35;
    }
}
const v45 = new C31();
const v46 = new C31();
const v47 = new C31();
class C48 extends C31 {
    static set e(a50) {
        let v51;
        try { v51 = a50(v46, v46, a50); } catch (e) {}
        Object.defineProperty(v47, this, { writable: true, configurable: true, value: v51 });
        new Float32Array(10);
        new Float32Array(1);
        new BigUint64Array(8);
    }
}
new C48();
new C48();
new C48();
const v71 = [-16,4];
const v72 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
[-4294967295,14,219268071,1317141055,2];
delete v72[-9];
try { v71.slice(45103); } catch (e) {}
const o79 = {
    __proto__: v71,
    "d": -2,
    3943951267: 536870889,
    "a": true,
    [C48]: 4294967297,
    "e": v71,
    "g": 0,
    "c": v45,
    ...C31,
    "e": 45103,
};
