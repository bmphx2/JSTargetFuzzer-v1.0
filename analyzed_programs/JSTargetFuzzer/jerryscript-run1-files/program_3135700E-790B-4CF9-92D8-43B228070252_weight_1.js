function f5() {
    return arguments;
}
const v7 = f5();
for (let v8 = 0; v8 < 5; v8++) {
    v7["p" + v8] = v8;
}
new Float32Array(49);
new Int8Array(512);
new Uint32Array(0);
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a21;
}
new F18(49, 0);
new F18(12, 49);
new F18(12, 512);
async function f25(a26, a27) {
    class C28 extends a27 {
    }
    return a27;
}
const v29 = f25();
function f30() {
    return f30;
}
v29["catch"](f30);
