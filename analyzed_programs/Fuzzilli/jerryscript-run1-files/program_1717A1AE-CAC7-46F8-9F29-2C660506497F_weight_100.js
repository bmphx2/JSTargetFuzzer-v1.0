const v0 = [-2147483648,268435440,-3199];
const v1 = [268435441,-2032319987];
const v2 = [1,-1543907161,2147483647,-1073741824,-1871781674];
function f3(a4, a5) {
    const o11 = {
        9: v1,
        [a4]: v1,
        n(a7, a8) {
            let v9;
            try { v9 = a8(); } catch (e) {}
            v9 & v1;
            Object.defineProperty(v0, v9, { writable: true, value: a4 });
            return a4;
        },
        "f": a5,
        [v2]: a5,
        "d": a5,
        "b": v0,
    };
    return o11;
}
let v12 = f3(v2, v2);
const v14 = f3(f3(v12, v2), v2);
let v17 = new Uint8ClampedArray(10);
let v19 = Uint32Array;
new v19(196);
const v23 = new Uint8Array(1969);
try { f3(...v0, 1969, ...v23, ...v0, v14, ...Uint8Array); } catch (e) {}
Object.defineProperty(v14, "d", { enumerable: true, get: f3 });
({"g":v12,"length":v17,...v12} = v0);
!Uint8ClampedArray;
v19 /= v19;
let v26 = 0;
while (v26 < 8) {
    const o29 = {
        "construct": f3,
    };
    new Proxy(v12, o29);
    v26++;
}
