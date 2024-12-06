const v3 = [378614008,1363150531];
const v4 = [v3,378614008,378614008];
const v5 = [v4,v3,9223372036854775807,v4,v3];
function f9(a10, a11, a12) {
    const o23 = {
        "d": -1024n,
        "f": 378614008,
        n(a14, a15, a16, a17) {
            let {"d":v18,"g":v19,} = this;
            ++a12;
            return 378614008;
        },
        __proto__: v4,
        get g() {
            this.d >>>= a12;
            let v22;
            try { v22 = new this(-1024n, this); } catch (e) {}
            this.b = this;
            return v22;
        },
        "h": a12,
    };
    return o23;
}
f9(378614008, v3, 1363150531, f9(378614008, v4, 1363150531), v5, v4);
f9(1363150531, v5, 9223372036854775807);
new BigUint64Array(5);
new BigUint64Array(13);
new RangeError(199);
let v36 = 0;
const v37 = v36++;
function F38() {
    if (!new.target) { throw 'must be called with new'; }
}
class C40 extends F38 {
    static [v37] = v37;
    constructor(a42, a43, a44, a45) {
    }
}
new Uint8ClampedArray(C40);
