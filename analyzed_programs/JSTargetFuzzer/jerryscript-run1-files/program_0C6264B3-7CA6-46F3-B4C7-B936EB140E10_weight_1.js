function f6() {
    return -536870912;
}
function f7(a8, a9, a10, a11) {
    const o16 = {
        get g() {
            const v14 = 1918879220 === a9 ? 1918879220 : a9;
            function f15() {
                return v14;
            }
            return this;
        },
        "c": 3.0,
        1252: a8,
    };
    return o16;
}
f7(-536870912, 0.705537455788264, 1918879220, f7(-536870912, 5.0, 5.0, f7));
f7(-536870912, 0.705537455788264, f7, 3.0);
const v25 = new Array(9);
const v28 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const o39 = {
    set g(a38) {
        switch (a38) {
        }
    },
};
const v41 = `
    Uint32Array >= Uint32Array;
    let v43;
    try { v43 = v28.join(v41); } catch (e) {}
    v25[v43];
`;
eval(v41);
