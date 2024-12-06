function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
new Int32Array(6);
function F9() {
    if (!new.target) { throw 'must be called with new'; }
}
class C11 extends F9 {
}
new C11();
const v20 = Promise.resolve();
v20.finally(v20, v4, v3, v20);
try { Uint8ClampedArray(Uint8ClampedArray, Uint8ClampedArray); } catch (e) {}
Date(-3);
function f29() {
    return 58816;
}
const v31 = ("-1604200484").__proto__;
delete v31[v31];
("65537").match(([-16,4]).slice(45103));
