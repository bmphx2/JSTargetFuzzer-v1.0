function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.length = 190;
    this.c = 11;
    this.a = 11;
}
new F0(F0, F0, F0);
new F0();
const v9 = new F0();
("symbol")["slice"]();
parseInt(0, v9);
