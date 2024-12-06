function f0() {
}
function f4() {
    return NaN;
}
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = NaN;
    this.d = a7;
    this.f = 0.4165206401918925;
}
const v8 = new F5(NaN);
const v9 = new F5(NaN);
const v10 = new F5(1000000000000.0);
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a17;
    this.b = f4;
    this.a = a17;
}
new F14(NaN, v9, v8);
new F14(1000000000000.0, v9, v8);
new F14(1000000000000.0, v10, v10);
("p").lastIndexOf();
