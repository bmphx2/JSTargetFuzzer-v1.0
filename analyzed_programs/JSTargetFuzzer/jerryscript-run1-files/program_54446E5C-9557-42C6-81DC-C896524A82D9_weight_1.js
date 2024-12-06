function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 257;
    this.d = 257;
    this.a = F0;
}
const v3 = new F0();
new F0();
new F0();
new Map();
function f8() {
    return v3;
}
new Array(2963);
new TypeError();
