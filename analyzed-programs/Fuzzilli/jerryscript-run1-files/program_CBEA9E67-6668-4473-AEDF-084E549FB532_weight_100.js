function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1073741825;
    this.f = 1073741825;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v13 = new Map();
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v5;
    this.e = 49728n;
    this.b = a17;
}
const v19 = new F14(-14, 49728n, v5);
new F14(127, 536870889n, v4);
const v21 = new F14(-14, 536870889n, v4);
const v22 = delete v3?.f;
F0 >> v3;
const v24 = v19.h;
let v25;
try { v25 = v4.entries(v5, F0, v24, v24, Map); } catch (e) {}
try { v22(Map, 49728n, v13, 127); } catch (e) {}
let v27 = 0;
while (v27 < 9) {
    try { v21.fromCodePoint(v5, v3, v25, v22); } catch (e) {}
    v27++;
}
