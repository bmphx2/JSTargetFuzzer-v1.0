function f3(a4, a5) {
    const o12 = {
        [a5](a7, a8) {
            return a8;
        },
        "f": a5,
        [1073741824]: 1679801936,
        10: 10,
        ...1073741824,
        "a": a5,
    };
    for (let v13 = 0; v13 < 32; v13++) {
        o12["p" + v13] = v13;
    }
    return o12;
}
f3(10, 1679801936);
const v17 = f3(1073741824, 1073741824);
const v18 = f3(1679801936, 1073741824);
function F19(a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a22;
    this.g = f3;
}
new F19(v17, 1679801936);
new F19(v18, 1679801936);
new F19(v18, 1073741824);
const v28 = new Uint8Array(1705);
const o34 = {
    m(a30, a31, a32) {
        v28.fill();
        return 1705;
    },
};
Reflect.apply(o34.m);
