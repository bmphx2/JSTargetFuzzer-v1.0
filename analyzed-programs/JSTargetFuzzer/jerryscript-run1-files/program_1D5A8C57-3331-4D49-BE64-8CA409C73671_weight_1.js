function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = false;
    this.f = false;
}
const v3 = new F1();
new F1();
const v5 = new F1();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a16;
    this.d = a17;
}
const v18 = new F12(127, -7, v3, v5);
const v19 = new F12(-9223372036854775807, -7, v3, v3);
const v20 = new F12(127, -9223372036854775807, v3, v5);
class C24 {
    static get a() {
        const o28 = {
            "maxByteLength": 268435439,
            ...v3,
            "b": 268435439,
            "a": this,
            536870887: -9223372036854775807,
            ...v18,
        };
        const v30 = new SharedArrayBuffer(1278, o28);
        v30.byteLength;
        o28[-622135.0466104625];
        const o34 = {
        };
        new Proxy(v30, o34, v5, o28, 268435439);
        new Uint32Array(v30);
        return o28;
    }
}
const v38 = new C24();
const v39 = new C24();
const v40 = new C24();
class C41 extends C24 {
    static set c(a43) {
        let v44;
        try { v44 = a43(v39, v39, a43, v3, false); } catch (e) {}
        Object.defineProperty(v40, this, { configurable: true, enumerable: true, value: v44 });
        new Float32Array(4096);
        new Float32Array(1, Float32Array, v38);
        new BigUint64Array(8);
    }
}
new C41();
new C41();
new C41();
v3.e = v18;
[-18395,-16,15];
[-65535,12,-4294967295];
const v64 = [536870889,-4096,65537,-11927,1073741824];
new C41();
const v68 = [-16,4];
const v69 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
[-4294967295,14,219268071,1317141055,2];
const v74 = delete v69[-9];
try { v68.slice(45103); } catch (e) {}
const o76 = {
    __proto__: v68,
    "d": -2,
    3943951267: 536870889,
    "a": true,
    [C41]: 32417,
    "e": v68,
    "g": 26157,
    "c": v38,
    ...C24,
    "e": 45103,
};
C41[1073741824] += 536870889;
v74 in o76;
function F78(a80, a81) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v64;
    this.b = a80;
    this.h = -1533687821;
}
new F78(v19, 9007199254740991n);
new F78(v18, 9n);
new F78(v20, 9n);
