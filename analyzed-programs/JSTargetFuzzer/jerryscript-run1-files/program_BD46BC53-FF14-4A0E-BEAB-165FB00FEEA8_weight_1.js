let v1 = 2147483649;
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v1;
}
new F3(-3);
const v7 = new F3(-9059);
new F3(-3);
function f10() {
    return F3;
}
class C12 extends f10 {
    static [v7] = -3;
}
new C12();
new C12();
new C12();
v1 = -3;
new Uint8ClampedArray(1188);
new BigUint64Array(75);
new Uint16Array(4);
new Uint8Array(2);
new Int32Array(7);
new Int8Array(1024);
const o36 = {
};
new Date(o36);
