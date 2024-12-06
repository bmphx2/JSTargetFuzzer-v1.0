function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 4096;
}
new F0();
const v4 = new F0();
new F0();
new BigUint64Array(129);
new Int16Array(512);
new Uint16Array(871);
const v28 = new WeakSet();
delete v28[v28];
let v34 = -31239;
Math.atan(v34);
Math.atan(v4);
let v38 = v4 ^ -3.0;
const v39 = v34++;
Math.sqrt(v39);
--v38;
v38 * v39;
v28.d >>>= -4294967297;
let {"d":v43,"g":v44,...v45} = v28;
if (10901n === 9223372036854775807n) {
    let v48;
    try { v48 = v43["toString"](39766n, v43); } catch (e) {}
    try { v48.hypot("toString", v48); } catch (e) {}
} else {
}
