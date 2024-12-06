const v0 = [];
const v4 = [1073741825];
const v5 = [-65535,64,1,-14];
const v6 = [-4096,-7953,9223372036854775807,256,1446378876,-15,7];
const v8 = new Error(Error);
const v11 = v8[v5.iterator];
try { v11(Error); } catch (e) {}
function f13(a14, a15, a16) {
    for (const v17 in a14) {
    }
    const o30 = {
        get c() {
            return a16;
            v4 != a15 ? v4 : a15;
            return v5;
        },
        toString(a25, a26, a27) {
            super.f = a15;
            a16 instanceof a27;
            try { a27(); } catch (e) {}
            a25[v5] = v6;
            return v4;
        },
        ...a14,
        "b": a14,
        "g": 2.2250738585072014e-308,
    };
    return o30;
}
f13(v6, v4, v5);
const v32 = f13(v0, v4, v6);
let v33;
try { v33 = f13(v32, ...v32, v32, v32, ...NaN, f13); } catch (e) {}
Object.defineProperty(v6, 4257604017, { enumerable: true, get: f13, set: f13 });
f13 - v33;
v32[this];
f13(v6, v5, v4);
([8.048710887091932,-2.2250738585072014e-308,2.220446049250313e-16,-1000.0,6.828082790414911,-Infinity,Infinity,1.6880399539526805e+308,Infinity]).copyWithin();
