const v2 = new Uint8Array(11);
const v5 = new Int8Array(127);
const v8 = new Float32Array(3002);
function f9(a10, a11) {
    const o19 = {
        [v2](a13, a14, a15) {
            a10 > v2.buffer;
            let v18;
            try { v18 = v8.subarray(a15, 11); } catch (e) {}
            v18.b = v18;
            return a10;
        },
        "c": v8,
        "d": Int8Array,
        "a": Float32Array,
        ...v2,
        ...v5,
        "f": a11,
    };
    const v21 = Symbol.toStringTag;
    a10[v21] = v21;
    function f22() {
        return o19;
    }
    return o19;
}
const v23 = f9(11, 127);
f9(127, 11);
f9(3002, v23);
0n ^ 0n;
