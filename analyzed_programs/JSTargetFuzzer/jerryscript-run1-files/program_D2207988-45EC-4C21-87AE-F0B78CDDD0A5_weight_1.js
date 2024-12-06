function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.sticky = f0;
}
new F1();
new F1();
new F1();
let v16;
try {
const t0 = 37556;
v16 = t0(37556, 37556);
} catch (e) {}
(1000n).toString(v16);
