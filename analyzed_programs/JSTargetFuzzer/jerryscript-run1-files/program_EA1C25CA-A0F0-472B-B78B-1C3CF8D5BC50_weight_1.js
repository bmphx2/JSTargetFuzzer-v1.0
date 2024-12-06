const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
    this.c = v0;
    this.f = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
}
new F6(F1);
new F6(v4);
new F6(v3);
function f12() {
    return v5;
}
function f13() {
    return f12;
}
/(\u{12345}\u{23456})/yu;
/\111+/sm;
