function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.resizable = -2147483647;
    this.g = -2147483647;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a14;
    this.g = a13;
    this.b = v4;
}
new F9(1073741825, v5, -7, v5);
new F9(1073741825, v5, 1073741825, v5);
new F9(1073741825, v4, 34070, v3);
[-15,-1024,1836227153,-38330,-6,-55679];
[2,10900,-128,65536,1024,1062139853];
[-47594,65536];
const v23 = new Array(10);
let v25 = 4096;
function f27(a28, a29, a30, a31) {
    const o32 = {
        ...a31,
    };
    return o32;
}
let v33 = f27(v25, 481111932, 129, v23);
f27(10, 481111932, 10, f27);
f27(v33, v25, 481111932, v25);
v33.g;
try {
    let v37;
    try { v37 = v33.isSealed(); } catch (e) {}
    v33 = v37;
    v25 = v37;
} catch(e38) {
    e38[0] = e38;
    try { e38(Array); } catch (e) {}
}
