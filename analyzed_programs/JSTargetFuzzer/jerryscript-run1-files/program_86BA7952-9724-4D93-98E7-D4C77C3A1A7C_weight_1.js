const v2 = new Int32Array(1301);
for (let v5 = 0; v5 < 32; v5++) {
    v2["p" + v5] = v5;
}
const v8 = new Uint16Array(111);
new Int16Array(7);
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a16;
    this.d = a16;
    this.a = 111;
}
new F12(7, 7, v8);
new F12(1301, 1301, 1301);
new F12(111, 1301, 7);
function f24(a25, a26, a27, a28) {
    const o31 = {
        set g(a30) {
        },
        ...a26,
    };
    return o31;
}
const v32 = f24();
f24(2, v32);
v32.g **= 2;
