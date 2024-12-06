function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 0;
    this.f = 0;
}
new F0();
const v4 = new F0();
const v5 = new F0();
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a14;
}
new F12(v5, "function");
new F12(v4, "asin");
new F12(v4, "Ax");
function f19(a20, a21, a22) {
    arguments.callee;
    return f19;
}
const v25 = f19(f19, f19, f19);
let v26 = [v25,v25,v25];
class C27 {
    valueOf(a29, a30) {
        let v31;
        try { v31 = a30(); } catch (e) {}
        ({"b":v26,"e":a29,} = v31);
    }
}
const t28 = (5).constructor;
t28(6n);
const v36 = new C27();
async function f37(a38, a39) {
    return a38 /= C27;
}
f37(v36);
