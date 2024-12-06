function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 16;
    this.c = 16;
    this.f = 16;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a9;
    this.a = a9;
}
const v10 = new F6(v5, v3);
const v11 = new F6(v3, v10);
new F6(v3, F0);
[v5,v11,65537,v11];
[v3,65535,v4,v3,-4294967297];
[v4];
const t17 = (65537).constructor;
t17(6n);
