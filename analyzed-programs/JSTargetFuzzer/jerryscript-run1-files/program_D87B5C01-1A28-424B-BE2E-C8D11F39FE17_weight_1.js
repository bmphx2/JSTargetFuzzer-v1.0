function f0() {
}
new Uint16Array(4008);
new Uint32Array(110);
new Float32Array(3);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a13;
}
new F10(110, 110);
new F10(3, 110);
new F10(4008, 3);
new SyntaxError(SyntaxError);
