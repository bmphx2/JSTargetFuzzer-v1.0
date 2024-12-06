function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = this;
    this.f = 39398;
}
new F0();
new F0();
new F0();
let v12 = 0n;
v12 /= 22230n;
