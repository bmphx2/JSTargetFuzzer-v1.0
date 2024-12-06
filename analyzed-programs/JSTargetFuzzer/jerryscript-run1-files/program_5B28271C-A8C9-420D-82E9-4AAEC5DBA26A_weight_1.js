function f0() {
}
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a10;
    this.a = a11;
}
const v13 = new F7(5, 5, -1, 4294967296);
const v14 = new F7(-1, 5, 4294967296, 4294967296);
const v15 = new F7(4294967296, 5, v13, 11692);
function f16(a17, a18, a19, a20) {
    const o21 = {
        ...v15,
    };
    return v14;
}
new Promise(f16);
