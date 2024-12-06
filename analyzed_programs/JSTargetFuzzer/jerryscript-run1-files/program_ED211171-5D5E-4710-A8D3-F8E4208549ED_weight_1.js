function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -9223372036854775807;
}
new F0();
new F0();
new F0();
new Float32Array(129);
new Int16Array(129);
new Uint32Array(4);
"clear" << RangeError(1024);
