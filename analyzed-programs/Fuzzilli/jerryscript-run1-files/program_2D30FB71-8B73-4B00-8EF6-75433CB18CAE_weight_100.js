const v0 = [-9007199254740991,9,-536870912,-2147483649];
const v1 = [3,377131631,9,-65536];
const v2 = [-2,-4294967295,64,8,-65535,-4294967295,-256];
function f3(a4) {
    const o5 = {
        [v1]: v0,
        [v2]: a4,
        "a": a4,
        "g": v2,
        "e": v2,
        ...v2,
        __proto__: a4,
        ...a4,
        [v0]: v0,
        "b": v1,
    };
    return o5;
}
f3(v0);
const v7 = f3(v2);
f3(v0);
class C10 extends f3 {
    1607513313 = v2;
    [f3];
    #n(a12, a13, a14) {
        try {
            a12.#n();
        } catch(e16) {
        }
        a12 = v0;
        return v0;
    }
}
new C10();
const v18 = new C10();
const v19 = new C10();
v19 && v19;
try { v7.o(); } catch (e) {}
delete v18[null];
new BigUint64Array(16);
new BigUint64Array(3596);
new Uint16Array(127);
