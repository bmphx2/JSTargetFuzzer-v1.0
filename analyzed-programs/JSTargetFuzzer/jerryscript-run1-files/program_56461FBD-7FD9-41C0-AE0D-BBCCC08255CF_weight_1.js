let v0 = WeakMap;
const v1 = new v0();
const v3 = new Set();
const v4 = [-1000000000000.0,NaN,-Infinity,3.0,-1.0,4.334175558724073,-0.7840821158246705,1000.0];
const v5 = [0.9716254926544451,171151.408793614,1.0,-2.220446049250313e-16,-1000.0,-46.22887996132579,-2.2250738585072014e-308,2.220446049250313e-16,-1.4825871617332084e+308,2.220446049250313e-16];
const v6 = [3.0,-4.0,-2.220446049250313e-16,262374.6728327768];
function f7(a8, a9) {
    const o14 = {
        get f() {
            class C12 extends v4.constructor {
                f;
                [a8];
                8 = a9;
            }
            const v13 = new C12();
            return v13;
        },
        [v3]: a9,
        __proto__: v1,
        256: Set,
        "g": a8,
        "d": v4,
        "e": f7,
        "b": v6,
        "h": a8,
        "h": v1,
    };
    const o20 = {
        "maxByteLength": 16,
    };
    const v22 = new ArrayBuffer(16, o20);
    new Float64Array(v22);
    return o14;
}
const v25 = f7(v6, v5);
f7(v4, v5);
f7(v6, v4);
let v29;
try { v29 = v1.delete(v3); } catch (e) {}
v0 = v29;
v4 && 14;
try { v25.getFloat32(v29); } catch (e) {}
new f7(14, v3);
const t43 = [BigInt64Array,BigInt64Array,BigInt64Array];
delete t43[[BigInt64Array]];
