const v1 = [,,,,];
const v2 = [v1,,,,,];
const v3 = [v1,v2,v2,,v2];
new WeakSet();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
    WeakSet.h = a11;
}
const v15 = new F9(v1, undefined, v3, "multiline");
new F9(v1, v2, "X9IX", undefined);
new F9(v1, v15, v15, v15);
let v19 = -57367n;
const v22 = new ArrayBuffer(9);
new Int8Array(v22);
v19 ^= -1855752468n;
