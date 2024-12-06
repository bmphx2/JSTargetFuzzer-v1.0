function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
}
new F1();
new F1();
new F1();
function f21() {
    return 1073741825;
}
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a25;
    F22.b = -348443835;
}
const v28 = new F22(1073741825, 9007199254740992, 1073741825, -64840);
const v29 = new F22(6, 6, 1073741825, -3);
new F22(-64840, 6, v29, v29);
try { v29["clear"](9007199254740990n); } catch (e) {}
const v41 = new Uint8Array(1);
const v44 = new Uint8Array(10);
const v47 = new RangeError(1024);
function f48() {
    return Uint8Array;
}
([])["concat"]();
const v53 = [v47,[v44,RangeError,1024,1024,f48],Uint8Array];
switch (v41) {
    default:
        v47[DataView.isConcatSpreadable];
        break;
}
[v53,1073741825];
function f61() {
    return RangeError;
}
v53["clear" << v44];
let {"b":v65,} = v29;
let v69 = -43723;
const v70 = v28 ** v69;
const v71 = ++v69;
-v70;
-10;
Math.asin(v71);
