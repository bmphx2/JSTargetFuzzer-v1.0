function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    this.b = f0;
    this.f = f0;
}
const v3 = new F1();
new f0();
new F1();
function f6() {
    return v3;
}
let v16 = 41365n;
-(v16--);
