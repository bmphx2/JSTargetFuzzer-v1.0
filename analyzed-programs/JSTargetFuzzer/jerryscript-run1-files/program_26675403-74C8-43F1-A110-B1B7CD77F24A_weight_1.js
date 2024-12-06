function f0() {
}
function f1() {
    return f0;
}
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a4;
    this.c = a4;
}
const v5 = new F2(F2);
const v6 = new F2(f1);
new F2(v5, v6, f1);
function F14(a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = new F14(441965.89293240267);
async function f19(a20, a21) {
    return await v18;
}
f19();
