new Int32Array(1301);
const v5 = new Uint16Array(111);
new Int16Array(7);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a13;
    this.d = a13;
    this.a = 111;
}
new F9(7, 7, v5);
new F9(1301, 1301, 1301);
new F9(111, 1301, 7);
function f21(a22, a23, a24, a25) {
    const o28 = {
        set g(a27) {
        },
        ...a23,
    };
    return o28;
}
const v29 = f21();
f21(2, v29);
v29.g **= 2;
