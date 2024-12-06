const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v0;
    this.h = v0;
}
const v3 = new F1();
new F1();
new F1();
const v13 = new Uint32Array(1024);
const v15 = new Int16Array(v13, 1024, 1024);
v13[5] = 1024;
function f17(a18, a19, a20, a21) {
    return arguments;
}
f17(v15, 5);
new BigInt64Array(1024);
new Array(512);
try { v0.copyWithin(-1073741824, 268435440, 4294967295); } catch (e) {}
v3.length = 512;
this << Float32Array;
