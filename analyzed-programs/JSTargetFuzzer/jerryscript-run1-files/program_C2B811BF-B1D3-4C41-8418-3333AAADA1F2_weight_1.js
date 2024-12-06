function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 3;
    this.b = 3;
}
new F0();
new F0();
new F0();
new Int16Array(550);
new ReferenceError(7);
new Uint16Array(64);
new Boolean();
