function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
    a5.b = a5;
    this.a = a5;
}
const v6 = new F3(1);
new F3(-8);
new F3(v6);
new Array(3);
5 - 4294967297;
