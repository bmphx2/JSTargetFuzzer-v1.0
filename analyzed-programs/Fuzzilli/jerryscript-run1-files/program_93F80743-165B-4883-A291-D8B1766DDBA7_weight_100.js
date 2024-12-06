function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 268435456;
    this.f = 268435456;
    this.h = 268435456;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a11;
    this.f = a11;
}
new F9(v4, v5);
const v14 = new F9(v5, v4);
const v15 = new F9(v5, v14);
const v16 = [v5,v15,"GXncn",F9,v3];
[v16,"c",v5];
["GXncn",v16,v3];
function f22() {
}
function F23() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f22;
    this.h = f22;
}
new F23();
const v26 = new F23();
new F23();
new Int32Array(1);
new Int8Array(128);
new Uint16Array(4);
const v37 = `
    function F38(a40, a41) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = 4;
    }
    const v42 = new F38(F38, v26);
    const v43 = new F38(v42, Uint16Array);
    new F38(f22, v43);
`;
eval(v37);
