function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    f0.f = f0;
    this.g = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = this;
    this.e = v4;
}
new F6(v3);
new f0(v3);
const v11 = new F6(v5);
const v12 = [v5,v11];
[[v5,F1,v12],v12];
("min").trimEnd();
