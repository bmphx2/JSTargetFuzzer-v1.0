function f0() {
    const o20 = {
        9: "p",
        __proto__: "p",
        "c": "p",
        "b": "p",
        [-10]: -10,
        "d": 14,
        "f": "p",
        ..."p",
        [f0]() {
            let v5 = 10;
            const o9 = {
                next() {
                    v5--;
                    const o8 = {
                    };
                    return 14;
                },
            };
        },
        valueOf(a11, a12) {
            this[2008] *= a12;
            function f13(a14) {
                return arguments;
            }
            f13(a11);
            return a12;
        },
    };
    function f21() {
        return f21;
    }
    function f22(a23, a24) {
        return f21;
    }
    return o20;
}
f0();
f0();
f0();
new BigUint64Array(218);
new Int32Array(4);
const v36 = new Float32Array(127);
v36.sort;
Array(256);
new Int16Array(159);
const v49 = new Array(9);
const v52 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v62 = `
    Uint32Array >= Uint32Array;
    let v64;
    try { v64 = v52.join(v62); } catch (e) {}
    v49[v64];
`;
eval(v62);
