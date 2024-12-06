new BigUint64Array(64);
new Float64Array(127);
new Int16Array(1000);
let v23;
try { v23 = new Int16Array(Float64Array, ...-4.0, ...10000, -1073741824, ..."268435440", -2.220446049250313e-16); } catch (e) {}
try { v23["getFloat64"](-33749); } catch (e) {}
function f27(a28, a29) {
    const o60 = {
        ...a29,
        "c": a29,
        "b": 1073741824,
        "e": a29,
        __proto__: a29,
        [3](a31, a32, a33) {
            function f34(a35, a36) {
                const v39 = Array.from(1);
                function F40(a42, a43, a44, a45) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                const v46 = new F40(a36, 1, a36, v39);
                with (v46) {
                    try { v39(Array); } catch (e) {}
                    function F48(a50, a51, a52) {
                        if (!new.target) { throw 'must be called with new'; }
                        this.d = a29;
                        this.c = a28;
                    }
                    new F48(a32, a29, 1);
                    new F48(a36, v46, a29);
                    new F48("268435440", "getFloat64", a33);
                }
                return v46;
            }
            f34(f34, f34);
            try {
                super.m(a29, a31, a33, a31);
            } catch(e58) {
            }
            const v59 = this[8];
            a28 **= -33749;
            return v59;
        },
    };
    return o60;
}
f27(10000, 512);
f27(-33749, f27);
for (let i64 = 0; i64 < 4; i64++) {
    i64 ^ i64;
}
f27(3, f27);
function F72(a74, a75) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a75;
}
new F72(10000, 3);
const v77 = new F72(512, 22165);
new F72(1073741824, 3);
delete v77[1509295508];
Math.sinh(F72);
Math.sinh(10000);
const v89 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v89);
