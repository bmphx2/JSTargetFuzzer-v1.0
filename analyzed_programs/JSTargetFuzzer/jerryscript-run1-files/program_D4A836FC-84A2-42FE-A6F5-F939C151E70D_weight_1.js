const v2 = new Int32Array(3760);
const v5 = new Float64Array(172);
let v6;
try { v6 = v2.lastIndexOf(v5); } catch (e) {}
let v7;
try { v7 = v5.values(); } catch (e) {}
try { v2.map(v6, v7); } catch (e) {}
for (let v9 = 0; v9 < 32; v9++) {
    v2["p" + v9] = v9;
}
const v14 = new Float32Array(9);
function f15(a16, a17, a18, a19) {
    const o47 = {
        "a": Float64Array,
        valueOf(a21, a22) {
            v14[Symbol.species] = a21;
            return Int32Array;
        },
        "f": v5,
        __proto__: v14,
        toString(a26, a27, a28, a29) {
            function f30(a31, a32, a33, a34) {
                const o35 = {
                    ...this,
                    "a": 3760,
                };
                return o35;
            }
            const v36 = f30(3760, v2, a27, 172);
            v36[v36] = this;
            f15(172, v6, a18, Float64Array);
            Object.defineProperty(a26, "f", { get: f30 });
            const v39 = [3.0,1000.0,-2.2250738585072014e-308,-1e-15,-1000.0,-1000000000.0,-4.0,9.19648226074213];
            const o40 = {
            };
            const v42 = new Proxy(v39, o40);
            const o43 = {
                ...v42,
            };
            v14.__proto__;
            f30(9, a29, a17, a17);
            f30(9, Float64Array, a16, 9);
            return 3760;
        },
    };
    return o47;
}
f15(3760, 172, 172, 172);
f15(3760, 172, 3760, 172);
f15(9, 9, 3760, 172);
function f51() {
    return v14;
}
/d/i.exec("2147483647");
