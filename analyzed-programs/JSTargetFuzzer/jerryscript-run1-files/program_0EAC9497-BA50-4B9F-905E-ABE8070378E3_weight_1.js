function f0() {
}
new Uint8ClampedArray(2);
const o5 = {
    ...this,
};
new Int16Array(1);
new Int8Array(1000);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
}
class C14 extends F12 {
    constructor(a16, a17, a18) {
        super();
        this.__proto__ = F12;
    }
}
new C14(F12, F12, C14);
