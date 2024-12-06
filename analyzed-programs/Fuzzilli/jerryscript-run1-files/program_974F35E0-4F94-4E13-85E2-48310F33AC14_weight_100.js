function f0() {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -14;
}
new F4(9007199254740990, -128);
new F4(-128, 9007199254740990);
const v10 = new F4(-14, 9007199254740990);
f0();
for (let i19 = 0; i19 < 10; i19++) {
    v10[9007199254740990];
    try { ("2").includes(9007199254740990, i19); } catch (e) {}
}
