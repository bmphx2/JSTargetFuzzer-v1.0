const v0 = [];
const v3 = new Uint8Array(4068);
const v6 = new BigUint64Array(1000);
const v9 = new Uint8ClampedArray(6);
const v10 = [4068];
const v11 = [4068,v6,v3];
const v12 = [1000,v11,BigUint64Array,v9];
function f13(a14, a15, a16) {
    const o26 = {
        "d": a15,
        __proto__: v9,
        3: a14,
        "f": v12,
        1000: a15,
        ...v9,
        /*
        __proto__: v11,
        */
        ...v10,
        "h": v10,
        get g() {
            const v18 = [v6,this,BigUint64Array,v3];
            [v18,a15,v10];
            ([v3,a14,BigUint64Array,a14])[Uint8ClampedArray];
            a16 = v18;
            Object.defineProperty(v0, v9.byteOffset, { configurable: true, enumerable: true, get: f13 });
            super.a;
            return v18;
        },
        set d(a25) {
            v10[1000] = 4068;
        },
        "d": v11,
        10: 4068,
    };
    return o26;
}
f13(v12, 6, Uint8Array);
f13(v10, 1000, f13(v11, 6, f13));
const v32 = [6.587821035819711e+307,4294967297n];
try { v32.toLocaleString(v32, v32); } catch (e) {}
