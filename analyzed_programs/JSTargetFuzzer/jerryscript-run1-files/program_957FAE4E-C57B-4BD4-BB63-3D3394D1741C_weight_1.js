function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -10;
}
new F0();
new F0();
new F0();
new Int32Array(5);
new Uint32Array(2807);
new Float64Array(64);
268435440 !== Symbol.search;
