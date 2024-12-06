function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 3;
    this.f = 3;
    this.h = F0;
}
new F0();
new F0();
new F0();
let v11 = new Int8Array(2165);
new Int16Array(128);
new Float64Array(0);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    ("description")["repeat"]()[-1];
}
const v24 = new F18();
const v26 = RegExp.bind(RegExp, F18, RegExp);
const v28 = new Int32Array();
v26.__proto__ = v24;
v11 /= v28;
