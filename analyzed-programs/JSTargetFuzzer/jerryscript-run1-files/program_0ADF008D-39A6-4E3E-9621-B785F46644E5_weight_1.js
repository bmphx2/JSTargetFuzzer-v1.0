function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 127;
    this.a = 127;
}
const v3 = new F0();
new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v3;
    this.h = a9;
}
const v10 = new F6(v5, F6);
const v11 = new F6(v5, v10);
const v12 = new F6(v11, F6);
const v13 = [v11];
const v14 = [v12,v3,F6,F0];
const v15 = [v5,v3];
function F16(a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a18;
}
new F16(v15, v14);
new F16(v15, v14);
new F16(v14, v14);
new F6(v13, v11);
const o27 = {
};
new Proxy(F6, o27);
