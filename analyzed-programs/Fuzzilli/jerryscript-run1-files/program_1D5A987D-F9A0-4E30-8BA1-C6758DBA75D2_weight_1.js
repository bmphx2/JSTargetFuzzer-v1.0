let v1 = 1680011180;
let v5 = 487.41248808148885;
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a10;
    this.h = 5.0;
    this.f = 1000000.0;
}
const v11 = new F6(5.0, 65536, 4);
new F6(1000000.0, 4, v11);
const v13 = new F6(v11, 65536, F6);
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a18;
}
let v19 = new F14(v5, v13, 4);
new F14(v5, v11, v1);
new F14(5.0, v11, 65536);
({"d":v5,"f":v1,} = v11);
if (F6 <= v5) {
    v19 = v1;
} else {
}
