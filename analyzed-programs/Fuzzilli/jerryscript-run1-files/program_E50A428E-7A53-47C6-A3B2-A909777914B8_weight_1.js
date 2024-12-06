class C6 {
    static p(a8, a9, a10) {
        const v11 = super.b;
        new Map();
        function F14(a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = v11;
        }
        new F14("b", a8, -2);
        new F14(this, a8, "b");
        new F14("b", a8, 4);
        return -2;
    }
}
new C6();
new C6();
const v24 = new C6();
class C25 extends C6 {
    #g;
    toString(a27, a28, a29, a30) {
        Object.defineProperty(C6, "b", { writable: true, configurable: true, value: -1073741824 });
        const o33 = {
            "maxByteLength": 12,
        };
        const v35 = new SharedArrayBuffer(12, o33);
        new Float64Array(v35);
        return C6;
    }
}
const v38 = new C25();
const v39 = new C25();
const v40 = new C25();
v40[3];
C25[v39];
const t32 = "e";
t32[v24] = v38;
function f43() {
    return -1073741824;
}
v39.f = C6;
const o46 = {
    "maxByteLength": 3544,
};
const v48 = new SharedArrayBuffer(127, o46);
new BigUint64Array(v48);
