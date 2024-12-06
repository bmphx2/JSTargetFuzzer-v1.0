function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.growable = 1073741824;
    this.a = 1073741824;
}
new F0(F0);
new F0();
new F0();
const t8 = RegExp.bind();
t8[5] = 5;
