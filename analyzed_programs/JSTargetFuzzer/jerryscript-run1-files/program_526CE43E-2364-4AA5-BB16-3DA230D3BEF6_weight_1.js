function f0() {
    let v2 = 8.699249962852335;
    const o11 = {
        1640875682: v2,
        n(a5, a6) {
            let v4 = this;
            v4 = a5;
            const t6 = "toString";
            t6.__proto__ = a6;
            return v2;
        },
        get g() {
            const v9 = ("toString")["lastIndexOf"]("lastIndexOf", 1000000.0);
            v2 = v9;
            const v10 = "toString" % v9;
            v2 **= v10;
            return v10;
        },
    };
    return o11;
}
const v12 = f0();
const v13 = f0();
const v14 = f0();
try { v14.n(v14, v12, v13); } catch (e) {}
f = Uint8Array;
const v19 = v14 * f0;
v19[10] **= 128;
const v21 = v19.iterator;
const o30 = {
    [v21]() {
        let v22 = this;
        const o29 = {
            next() {
                v22--;
                const v27 = 10 == 0;
                const o28 = {
                    "done": v27,
                    "value": 10,
                };
                return this;
            },
        };
        return o29;
    },
};
new Float32Array(128);
new Int32Array(3988);
new Uint8ClampedArray(128);
class C42 {
}
C42.bind();
