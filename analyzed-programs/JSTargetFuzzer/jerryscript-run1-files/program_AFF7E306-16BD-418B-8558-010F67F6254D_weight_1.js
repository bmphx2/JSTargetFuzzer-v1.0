const v3 = -42507 / 11;
const v5 = Symbol.unscopables;
const t2 = -14;
t2[v5] = v5;
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
    this.b = -14;
    this.f = v5;
}
const v9 = new F6(-14);
new F6(-42507);
new F6(-14);
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a15(a15, F12, v9, 11); } catch (e) {}
    try { v5.unshift(v3, this); } catch (e) {}
    new Set();
    v5[a14] |= -14;
    this.g = a14;
}
new F12(-14, -14);
new F12(11, 11);
new F12(-14, -14);
new Set();
function f41() {
    return -42507;
}
const v45 = [127,-9223372036854775807];
const v46 = Set.bind("2147483647", v45, v45, "2147483647");
try { v46("o"); } catch (e) {}
