function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a8;
}
const v12 = new F6(-33072, 65535, 536870887, 65535);
new F6(65535, 536870887, 536870887, 65535);
const v14 = new F6(-703631116, -1673922104, 536870887, 65535);
v14.g;
let v16;
try { v16 = v14.o(-703631116, -5); } catch (e) {}
v16 == F6;
-1673922104 + F6;
for (let v19 = 0; v19 < 32; v19++) {
    v12["p" + v19] = v19;
}
try { v16.m(-5); } catch (e) {}
