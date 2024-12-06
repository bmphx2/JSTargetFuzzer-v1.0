const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v0;
    this.d = v0;
    this.b = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
class C6 {
    static toString(a8, a9) {
        const v11 = Symbol.split;
        Object.defineProperty(v11, this[v11], { writable: true, configurable: true, enumerable: true, get: Object, set: Object });
        try {
            super.isSealed();
        } catch(e15) {
        }
        return Object;
    }
    h = v4;
    [v0] = v4;
    #b = v4;
}
const v16 = new C6();
new C6();
const v18 = new C6();
const v19 = [v18,v3,v0,v3,v3];
const v20 = [v19,v18,v19];
const v21 = [v0,v18,v20,v18,v20];
v19 == 64;
const v30 = v5.d;
v5.e = v21;
v16.length = 3;
try { v30(v18, v30, v18, v21, v0); } catch (e) {}
const o35 = {
    "maxByteLength": 2030,
};
const v37 = new SharedArrayBuffer(754, o35);
new BigInt64Array(v37);
