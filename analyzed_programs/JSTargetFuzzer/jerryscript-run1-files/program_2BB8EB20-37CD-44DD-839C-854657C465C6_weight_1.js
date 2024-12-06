function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -1;
    this.byteLength = this;
    this.b = -1;
}
const v3 = new F0();
new F0();
new F0(v3);
536870889 === Function;
