let v2 = "string";
new Int32Array(4096);
new Float32Array(561);
new BigUint64Array(4096);
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
}
let v19 = new F15();
const v21 = new Map();
function f22() {
    return v19;
}
function F23(a25, a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
}
new F23(f22, v19, v21, Map);
[f22,,v19,v2] = v21;
