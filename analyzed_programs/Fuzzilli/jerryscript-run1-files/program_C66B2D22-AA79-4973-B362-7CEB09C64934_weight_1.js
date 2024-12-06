new Float32Array(0);
const v5 = new Uint32Array(7);
const v8 = new Uint8ClampedArray(3928);
function f9(a10, a11, a12, a13) {
    const o16 = {
        [7]: a11,
        __proto__: v5,
        "h": a10,
        "e": a10,
        "c": a11,
        996: a10,
        get b() {
            function f15() {
                return this;
            }
            return a12;
        },
    };
    return o16;
}
const v17 = f9(7, 7, 7, 0);
const v18 = f9(3928, 0, 7, 7);
const v19 = f9(3928, 7, 0, 0);
v19[4] = 3928;
new Uint8ClampedArray(v18, 3928);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v8;
}
new F24(v8, v18, v17, 3928);
new F24(64n, v18, v17, 3928);
new F24(7, v18, v19, 0);
