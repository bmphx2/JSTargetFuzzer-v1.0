function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.h = 0.0;
}
const v6 = new F3(0.9382771596128627);
const v7 = new F3(0.0);
const v8 = new F3(0.0);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.length = 2;
    const v14 = v7.h;
    function f15() {
        return v14;
    }
    this.h = a11;
}
const v16 = new F9(v8, v6);
new F9(v16, v6);
for (let i19 = 0; i19 < 1; i19++) {
    function F25(a27, a28) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = a27;
    }
    const v29 = new F25(v6, -3.0);
    new F25(v29, 0.9382771596128627);
    new F25(v7, -3.0);
}
new F9(v6, v7);
new Array(1016);
const v36 = `
    function f37(a38, a39, a40, a41) {
        return v36;
    }
`;
let v42 = eval;
v42 = v42(v36);
