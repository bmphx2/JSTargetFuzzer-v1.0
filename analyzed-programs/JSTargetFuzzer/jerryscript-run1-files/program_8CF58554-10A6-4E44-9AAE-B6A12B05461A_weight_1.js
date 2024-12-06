new Float64Array(2);
new Uint8Array(10);
new Int32Array(5);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a11;
    this.d = this;
    this.b = 10;
}
new F9(2, 2);
new F9(5, 2);
new F9(5, 5);
try {
    new Date(4087n);
} catch(e19) {
} finally {
}
