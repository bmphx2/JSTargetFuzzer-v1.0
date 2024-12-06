const v0 = [-948824.4698456591,0.5830641453087376,-3.0];
const v1 = [1.0,-5.0,213.30107428214092];
const v2 = [-2.0253729040767805,-268.94300094222353,Infinity,5.0,960.4064151416078,2.220446049250313e-16,1e-15,1000000000.0];
function f6(a7, a8, a9, a10) {
    const o16 = {
        [a8]: a10,
        1073741824: a7,
        set h(a12) {
            let v13;
            try { v13 = a12.valueOf(); } catch (e) {}
            a9["flat"](v13);
        },
        [219]: a9,
        "e": 219,
        ...a9,
        "h": 9,
        "f": a8,
    };
    return o16;
}
const v17 = f6(9, v1, v1, v1);
f6(9, 1000, v0, v0);
f6(219, f6, v2, v2);
new Date();
f6(1000, Date, v1, v0);
const v24 = Symbol.toPrimitive;
v0[v24] = 219;
delete Date[v24];
let {"description":v26,} = v24;
Object.defineProperty(v26, "d", { enumerable: true, value: v17 });
new Int16Array(985);
new Uint8ClampedArray(3983);
new BigInt64Array(1350);
