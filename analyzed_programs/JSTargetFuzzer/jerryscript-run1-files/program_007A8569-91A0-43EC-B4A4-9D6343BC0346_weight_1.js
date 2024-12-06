function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 512;
    this.a = this;
    this.b = 512;
}
new F0();
new F0();
new F0();
536870889 === Uint8Array;
