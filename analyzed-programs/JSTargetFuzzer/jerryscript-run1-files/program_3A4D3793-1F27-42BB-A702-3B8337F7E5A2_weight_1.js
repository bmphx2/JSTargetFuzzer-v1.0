class C5 extends Float64Array {
}
C5[2] = C5;
let v6 = 9007199254740991n;
++v6;
function f13(a14, a15) {
    const o21 = {
        o(a17, a18, a19) {
            let v20;
            try { v20 = a17.n(this); } catch (e) {}
            return v20;
        },
        "g": -5.0,
        "d": a15,
        "h": Infinity,
        4294967296: 763.2047927647543,
        "e": a15,
        "c": 64,
        [Infinity]: -5.0,
        __proto__: 1022193123,
        ...1022193123,
        "b": 1022193123,
        "f": 763.2047927647543,
    };
    return o21;
}
const v22 = f13(-5.960574084388755, Infinity);
v22.h -= 763.2047927647543;
let v23;
try { v23 = v22.o(); } catch (e) {}
v22["o"](-5.0, -5.0, -5.0, v22, -3.0177542197221866e+307);
f13(-5.960574084388755, Infinity);
const v30 = f13(763.2047927647543, -3.0177542197221866e+307);
function F31(a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -5.0;
}
const v35 = new F31(-1235705311, v22);
new F31(64, v35);
new F31(-1235705311, v30);
false == v23;
