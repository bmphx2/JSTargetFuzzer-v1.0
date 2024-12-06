function f6(a7, a8, a9, a10) {
    const o20 = {
        [a10](a12, a13, a14) {
            if (a14) {
                a12[3] = 5;
            } else {
                let [v15,v16] = a10;
                [a10,a8,v16,a14,65536];
                [a12,a7,-40646,a8,5];
                [a10];
            }
            return a12;
        },
        ...a10,
        __proto__: a10,
        638: a9,
        ...a10,
    };
    return o20;
}
const v21 = f6(3, 5, 65536, 3);
const v22 = f6(5, -40646, 2147483649, 3);
const v23 = f6(2147483649, -10, -40646, 3);
function F25(a27, a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v23;
    this.b = a30;
}
const v31 = new F25(v21, 65536, 3, 2147483649);
new F25(v22, -10, 3, 2147483649);
const v33 = new F25(v23, 3, -10, -40646);
for (let [v35,v36,v37] of 2147483649 >>> -10) {
    try { v33["o"]("o", v22, -40646, "o", 65536); } catch (e) {}
    v22[v31] = v36;
    new F25(v21, -10, 5, v37);
}
