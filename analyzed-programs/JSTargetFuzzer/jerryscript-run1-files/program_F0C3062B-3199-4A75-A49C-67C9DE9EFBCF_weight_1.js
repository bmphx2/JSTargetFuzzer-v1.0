function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -9;
}
new F0();
new F0();
new F0();
const v17 = new Int8Array(63);
function f18(a19, a20) {
    v17["some"](a19);
    return Int8Array;
}
new Promise(f18);
let v25 = [];
let v26 = --v25;
++v26;
function F28() {
    if (!new.target) { throw 'must be called with new'; }
    JSON.parse(v26);
}
