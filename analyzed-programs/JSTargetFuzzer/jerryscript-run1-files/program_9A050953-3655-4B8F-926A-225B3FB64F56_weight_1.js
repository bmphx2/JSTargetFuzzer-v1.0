function f0() {
    const o26 = {
        toString(a5) {
            return a5;
        },
        ...8.384172685323676,
        [1e-15]: 1.7976931348623157e+308,
        get f() {
            const o25 = {
                valueOf() {
                    let v11 = super.d;
                    v11 = this;
                    function f12(a13, a14, a15) {
                        const o16 = {
                            "b": this,
                            ...this,
                        };
                        return o16;
                    }
                    f12(8.384172685323676, 8.384172685323676, f0);
                    f12(8.384172685323676, 1e-15, f12);
                    f12(1.7976931348623157e+308, 1e-15, this);
                    return 1e-15;
                },
                o(a21, a22) {
                    f0();
                    return 1e-15;
                },
                ...this,
                [8.384172685323676]: f0,
                [this]: f0,
                ...this,
                ...this,
            };
            return 1.7976931348623157e+308;
        },
    };
    return o26;
}
const v27 = f0();
const v28 = f0();
const v29 = f0();
function F30(a32) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a32;
    this.c = v27;
}
new F30(v28);
new F30(v29);
const v35 = new F30(v29);
new Uint8Array(1686);
new Float64Array(10);
new BigUint64Array(129);
function F54(a56) {
    if (!new.target) { throw 'must be called with new'; }
    let v57 = 0;
    do {
        try { v35.transfer(5, F30, v57); } catch (e) {}
        v57++;
    } while (v57 < 4)
}
const v62 = new Float64Array();
const v63 = new F54();
const v64 = new F54(F54);
const v65 = [1073741823,12,1024,-415807476,268435456,-1,-4,2,9,-1];
class C66 {
}
v63 < v64;
let v68 = delete v65[v62];
v68 %= v68;
Object.defineProperty(C66, 255, { writable: true, enumerable: true, value: v65 });
