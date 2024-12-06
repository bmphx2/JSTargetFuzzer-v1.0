const v2 = new Uint8Array(222);
const v5 = new Uint16Array(7);
new Uint32Array(84);
function f9(a10, a11, a12) {
    const o17 = {
        get a() {
            function f14() {
                return Uint8Array;
            }
            return v5["fill"]("fill", a12, 84);
        },
        [a12]: a11,
        "f": v2,
    };
    return o17;
}
f9(84, 7, 84);
f9(7, 84, 7);
f9(84, 84, 222);
const v21 = [];
const v23 = new Int16Array();
function f24(a25, a26) {
    const v27 = v23[-1];
    Object.defineProperty(v27, v21, { writable: true, value: v27 });
    return Int16Array;
}
new Promise(f24);
