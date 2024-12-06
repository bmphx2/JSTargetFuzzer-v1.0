function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.f = this;
    this.e = f0;
}
new F1();
new F1();
new F1();
("unscopables")[2];
