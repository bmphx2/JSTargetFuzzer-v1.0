const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v1;
    this.d = Set;
}
const v6 = new F2(Set, F2);
const v7 = new F2(v1, Set);
const v8 = new F2(v7, v7);
v7[v6];
v6.d >>= 1672702290;
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a20;
    this.g = v8;
    this.c = 0.0;
}
const v22 = new F16(v7, v1, v6, -1024);
new F16(v8, -2.2250738585072014e-308, v8, 1672702290);
new F16(v7, v22, v8, 536870888);
