const v1 = new Date();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
function F7() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9;
    this.c = 9;
    const v13 = ([[]])["unshift"]();
    let v14 = 10;
    for (; v14--;) {
        with (v13) {
        }
    }
}
const v16 = new F3(v1, F3);
const v17 = new F3(v16, v16);
new F3(v17, Date);
new Int8Array(512);
new Uint32Array(10);
new BigInt64Array(407);
class C29 {
    h = 9;
}
