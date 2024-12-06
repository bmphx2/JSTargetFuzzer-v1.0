const v2 = new BigInt64Array(161);
const v5 = new BigUint64Array(97);
const v8 = new Int8Array(1024);
[BigUint64Array,v8];
const v10 = [1024];
const v11 = [v10,v5];
class C12 {
    [v5] = BigUint64Array;
    static [v5];
    static #g = 161;
    #o(a14, a15, a16) {
        -a16;
        const o18 = {
            "c": a14,
            ...this,
            53: v11,
        };
        return 161;
    }
    #f;
    #b = 161;
}
new C12();
new C12();
new C12();
function f22(a23, a24, a25) {
    c = a23;
    function F26(a28, a29, a30) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = v11;
        this.b = a25;
        this.d = v2;
    }
    new F26(v10, 161, a24);
    new F26(v10, a24, a25);
    new F26(a25, 1024, v5);
    return v2;
}
f22(v5, 97, f22);
