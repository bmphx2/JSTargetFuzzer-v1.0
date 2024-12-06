function f0() {
}
function f4() {
    return 1.2084499175824213e+308;
}
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1.2084499175824213e+308;
    a7.a = 1000000.0;
}
new F5(1000000.0);
const v9 = new F5(1000000.0);
new F5(v9);
new Uint16Array([[Uint16Array,Uint16Array,1000000.0,Uint16Array,Uint16Array]]);
