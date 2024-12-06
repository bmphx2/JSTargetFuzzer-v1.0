const v2 = new Int8Array(7);
v2[3630] = v2;
let [] = v2;
+"E";
new Uint32Array(123, 7);
new Uint8ClampedArray(1024);
function f14(a15, a16) {
    const o23 = {
        get b() {
            let v18 = 10;
            for (; v18--;) {
                try { a15(a15, a15); } catch (e) {}
                const v21 = super.b;
                try { new a15(v21, v21); } catch (e) {}
            }
            return Uint32Array;
        },
        15: v2,
        5: 7,
    };
    return o23;
}
f14(Int8Array, 7);
f14(f14, 123);
const v26 = f14(Uint32Array, 1024);
function f27() {
    return v26;
}
new Int16Array(7);
new BigUint64Array(8);
new Int8Array(18);
/d/i.exec("2147483647", v2, v2);
