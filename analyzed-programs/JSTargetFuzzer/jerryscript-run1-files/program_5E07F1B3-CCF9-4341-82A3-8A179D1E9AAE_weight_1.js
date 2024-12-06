const v1 = new WeakMap();
function f2(a3, a4) {
    const o15 = {
        set c(a6) {
            a6 && WeakMap;
            const o10 = {
                "maxByteLength": 127,
            };
            const v12 = new ArrayBuffer(9, o10);
            new Uint16Array(v12);
        },
    };
    return o15;
}
const v17 = f2(f2(f2, f2), v1);
const v18 = f2(WeakMap, v17);
function f20(a21, a22) {
    const o29 = {
        o(a24, a25) {
            const v26 = typeof a25;
            v26 === "symbol";
            return v26;
        },
        "c": true,
        "h": v1,
        [WeakMap]: a22,
        3: true,
    };
    return o29;
}
const v31 = f20(v17, f20(v18, v18));
f20(v18, v31);
let v36 = 0;
while (v36 < 7) {
    v1[v31] = v36;
    v36++;
}
