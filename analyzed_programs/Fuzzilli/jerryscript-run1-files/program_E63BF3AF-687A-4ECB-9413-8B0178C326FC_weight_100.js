function f0() {
}
class C1 extends f0 {
    static c = f0;
    d = f0;
    static get g() {
        new Uint32Array(2);
        new Float32Array(128);
        new Float64Array(131);
        return 2;
    }
    8;
}
const v12 = new C1();
const v13 = new C1();
const v14 = new C1();
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v14;
    this.b = a21;
}
new F18(v13, "string", "string");
const v24 = new F18(v13, "string", "string");
const v25 = new F18(v13, "p", "string");
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = F18;
    this.h = a28;
}
new F26("p", "p", "p", v25);
new F26("x7", "p", "p", v25);
new F26("string", "p", "p", v24);
const t32 = "string";
t32[f0] = "string";
function f35() {
    return F26;
}
function f36(a37, a38) {
    delete v12?.d;
}
new Promise(f36);
++C1;
