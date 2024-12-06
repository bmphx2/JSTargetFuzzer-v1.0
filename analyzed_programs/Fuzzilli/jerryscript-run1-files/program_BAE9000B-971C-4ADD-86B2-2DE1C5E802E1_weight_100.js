function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -4;
}
new F0();
new F0();
new F0();
new Int16Array(218);
new Float32Array(127);
new Uint16Array(5);
[] % 24591;
