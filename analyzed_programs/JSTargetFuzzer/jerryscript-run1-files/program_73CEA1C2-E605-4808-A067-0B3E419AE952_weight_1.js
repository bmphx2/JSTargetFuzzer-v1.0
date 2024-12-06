let v0 = [];
function f1() {
    const o6 = {
        o() {
            ({"d":v0,"e":v0,} = this);
            const o3 = {
            };
            const v5 = new Proxy(v0, o3);
            v5[5] = v5;
            return this;
        },
        [v0]: v0,
        "f": v0,
    };
    return o6;
}
const v7 = f1();
f1();
const v9 = f1();
function f13() {
    return 2147483648;
}
function f14() {
    return v9;
}
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a17;
}
const v19 = new F15(-65536, v7);
new F15(2147483648, v7, v9, v19, F15);
new F15(2147483648, v7);
function f28() {
    return 1073741825;
}
function F29(a31, a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a32;
    F29.b = -348443835;
}
const v35 = new F29(1073741825, 9007199254740992, 1073741825, -64840);
const v36 = new F29(6, 6, 1073741825, -3);
new F29(-64840, 6, v36, v36);
try { v36["clear"](9007199254740990n); } catch (e) {}
const v48 = new String(1);
const v51 = new Uint8Array(10);
const v54 = new RangeError(1024);
function f55() {
    return String;
}
const v57 = [v54,[v51,RangeError,1024,1024,f55,f14,v36],Uint8Array];
switch (v48) {
    default:
        v54[DataView.isConcatSpreadable];
        break;
}
[v57,1073741825];
function f65() {
    return RangeError;
}
v57["clear" << v51];
let {"b":v69,} = v36;
let v73 = -43723;
const v74 = v35 ** v73;
const v75 = ++v73;
-v74;
-10;
Math.asin(v75);
