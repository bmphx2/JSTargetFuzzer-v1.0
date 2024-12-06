const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v0;
    this.b = v0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
for (let i8 = 0, i9 = 10; i8 < i9; i8++, i9--) {
    try { new F1(v5, v3, F1, i8, ...i8); } catch (e) {}
}
v5.valueOf = v5;
const v19 = [v4];
new Date();
var e = 4;
v19[4];
const o31 = {
    "construct": Date,
    "getOwnPropertyDescriptor": Date,
};
new Proxy(Date, o31);
function f34(a35, a36) {
    const o44 = {
        [v3]: a35,
        212: -5,
        9: v4,
        set f(a38) {
            let v42;
            try { v42 = a35.hypot(Date, 613.4170699919223); } catch (e) {}
            try { v4.asUintN(a35, -8.977266204721378, a35, v42, a35); } catch (e) {}
        },
        "g": Date,
        ...v4,
        "c": 4,
        10: v3,
    };
    return o44;
}
f34(v4, 536870888);
f34(v3, -5);
f34(v5, 1501782685);
function f54() {
    return 1073741825;
}
function F55(a57, a58, a59, a60) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a58;
    F55.b = -348443835;
}
const v61 = new F55(1073741825, 9007199254740992, 1073741825, -64840);
const v62 = new F55(6, 6, 1073741825, -3);
new F55(-64840, 6, v62, v62);
try { v62["clear"](9007199254740990n); } catch (e) {}
const v74 = new Uint8Array(1);
const v77 = new Uint8Array(10);
const v80 = new RangeError(1024);
function f81() {
    return Uint8Array;
}
const v83 = [v80,[v77,RangeError,1024,1024,f81],Uint8Array];
switch (v74) {
    default:
        v80[DataView.isConcatSpreadable];
        break;
}
[v83,1073741825];
function f91() {
    return RangeError;
}
v83["clear" << v77];
let {"b":v95,} = v62;
let v99 = -43723;
const v100 = v61 ** v99;
const v101 = ++v99;
-v100;
-10;
Math.asin(v101);
