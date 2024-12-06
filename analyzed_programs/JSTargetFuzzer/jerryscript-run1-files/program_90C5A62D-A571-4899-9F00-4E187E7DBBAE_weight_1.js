function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
}
new F3(6);
new F3(6);
new F3(512);
const v17 = -65536n >> -65536n;
let v18 = -1;
const v19 = ++v18;
function F20() {
    if (!new.target) { throw 'must be called with new'; }
}
const v22 = new F20();
const v25 = new Array(3565);
function f26(a27, a28, a29, a30) {
    const o37 = {
        "g": v25,
        [v19]: a27,
        __proto__: a27,
        valueOf(a32, a33) {
            const v34 = this != a32;
            try { a30(v34); } catch (e) {}
            a33.length += 6.387594296892118;
            return a27;
        },
        "c": a29,
    };
    return o37;
}
f26(v18, v22, v22);
35671n + v17;
const v42 = new Float32Array(192);
v42["indexOf"](-1024);
