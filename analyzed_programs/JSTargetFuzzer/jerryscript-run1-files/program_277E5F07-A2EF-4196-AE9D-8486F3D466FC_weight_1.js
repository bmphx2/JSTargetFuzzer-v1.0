function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -15;
    this.g = a7;
    this.a = -15;
}
const v8 = new F4(22032, -15);
const v9 = new F4(8, -15);
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
}
const v17 = new F11();
"function" == v17;
const v19 = new F4(8, 8);
function F20(a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = null;
}
new F20(v19, v9, v9);
const v26 = new F20(v9, v9, v9);
new F20(v19, v8, v26);
const v32 = new Uint32Array();
const v34 = 125563.20783278253 - v32;
const v35 = [1.7976931348623157e+308,-7.132348077024275,-55.152548489457104];
v35[65535n] = v34;
for (let v37 = 0; v37 < 5; v37++) {
    v35.splice(v37);
}
