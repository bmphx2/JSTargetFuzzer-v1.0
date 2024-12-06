function f0() {
    const o13 = {
        [2147483647](a5) {
            Object.defineProperty(this, 7, { writable: true, configurable: true, enumerable: true, value: 9239992 });
            function f6(a7, a8) {
                const o9 = {
                    "f": a8,
                    [a5]: 9239992,
                };
                return o9;
            }
            f6(f6(this, -34529), 9239992);
            return f6(a5, a5);
        },
    };
    return o13;
}
f0();
const v15 = f0();
const v16 = f0();
class C17 extends f0 {
    433 = v15;
    6 = v16;
    #toString(a19) {
        function f20(a21, a22) {
            a22 **= a21;
            return a19;
        }
        f20(this, a19);
        return v15;
    }
}
new C17();
new C17();
const v29 = new C17();
new Uint8Array(128);
new Uint16Array(2);
new BigInt64Array(3358);
const v39 = v29[168];
let v40 = 10;
for (; v40--;) {
    let v42;
    try { v42 = v39(Uint16Array); } catch (e) {}
    try { v42.o(v29, 128); } catch (e) {}
}
