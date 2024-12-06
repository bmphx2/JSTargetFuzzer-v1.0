function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
}
new F3("-51843", "-51843");
new F3("valueOf", "valueOf");
const v9 = new F3("-51843", "-51843");
new Uint8ClampedArray(127);
const v15 = new Uint8ClampedArray(15);
new BigInt64Array(3);
function f19() {
    return BigInt64Array;
}
v15.length = 127;
v9[720] = v9;
function f20(a21, a22, a23, a24) {
    'use strict';
    var h = a22[9];
    const o26 = {
        "get": f19,
        "ownKeys": f19,
        "set": f19,
    };
    const v28 = new Proxy(a21, o26);
    return v28;
}
f20("-51843", "numEv", 3, 127);
