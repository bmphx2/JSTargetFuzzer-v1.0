function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 268435439;
}
const v3 = new F0();
let v6 = +-1.7976931348623157e+308 % -1.7976931348623157e+308;
++v6;
const v8 = new F0();
const v9 = new F0();
const v10 = [-57393];
const v11 = [-39941,15,-11,-2,51672];
const v12 = [-4294967295,-4294967297];
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a16;
}
new F13(v12, v11, v3, v8);
new F13(v12, v10, v3, v8);
new F13(v11, v11, v9, v9);
const v28 = new Uint8Array(2);
new Set(v28);
