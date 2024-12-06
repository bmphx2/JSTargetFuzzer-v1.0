function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
    this.a = a5;
    this.d = a5;
}
new F3(129);
new F3(3);
new F3(129);
new BigUint64Array(255);
new Int8Array(3);
new Uint8Array(1);
function f18(a19, a20) {
}
new Promise(f18);
