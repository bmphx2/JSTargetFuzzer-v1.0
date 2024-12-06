function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -3;
}
new F0();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F4();
async function f9(a10, a11) {
    return await v8;
}
f9();
new F0();
new F0(F0);
new Int8Array(7);
new Float64Array(6);
new Uint32Array(3736);
function f34() {
    return 1073741825;
}
function F35(a37, a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a38;
    F35.b = -348443835;
}
const v41 = new F35(1073741825, 9007199254740992, 1073741825, -64840);
const v42 = new F35(6, 6, 1073741825, -3);
new F35(-64840, 6, v42, v42);
try { v42["clear"](9007199254740990n); } catch (e) {}
const v54 = new Uint8Array(1);
const v57 = new Uint8Array(10);
const v60 = new RangeError(1024);
function f61() {
    return Uint8Array;
}
const v63 = [v60,[v57,RangeError,1024,1024,f61],Uint8Array];
switch (v54) {
    default:
        v60[Reflect.isConcatSpreadable];
        break;
}
[v63,1073741825];
function f71() {
    return RangeError;
}
v63["clear" << v57];
let {"b":v75,} = v42;
let v79 = -43723;
const v80 = v41 ** v79;
const v81 = ++v79;
-v80;
-10;
Math.asin(v81);
