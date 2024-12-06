const v0 = [-7,1903349344];
const v1 = [885951020,6,536870889,-10,-65536,5860,268435440,-449099348,9007199254740991];
const v2 = [-15,-268435456,9,-16,1073741824,-5468,10];
function f3(a4) {
    const o8 = {
        "g": a4,
        "c": v0,
        get e() {
            try { a4(v0); } catch (e) {}
            Object.defineProperty(a4, "f", { enumerable: true, value: a4 });
            return v0;
        },
        "h": v2,
        "d": v0,
        105: v2,
        "a": v0,
    };
    return o8;
}
f3(v1);
f3(v2);
f3(f3);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    const v23 = new ArrayBuffer(10);
    new Int8Array(v23, 9);
}
class C26 extends F18 {
    constructor(a28, a29, a30) {
        super();
        this.__proto__ = F18;
    }
}
new C26(F18, F18, C26);
