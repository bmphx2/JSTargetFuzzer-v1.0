new Uint32Array(513);
new Uint8ClampedArray(513);
new Float64Array(512);
function f9(a10, a11, a12, a13) {
    const o22 = {
        "c": 513,
        ...a13,
        [512](a15, a16, a17, a18) {
            for (let v19 = 0; v19 < 32; v19++) {
                this["p" + v19] = v19;
            }
            return 513;
        },
        [a12]: a10,
        "h": a10,
        2: a11,
    };
    return a10;
}
const v23 = f9(513, 513, 513, 512);
f9(7, 513, 512, 7);
f9(512, 7, 513, 7);
class C26 {
    static set h(a28) {
    }
}
const v30 = new Uint8Array(C26, Uint8Array, Uint8Array);
new Uint16Array(7);
delete v30[v23];
