const v0 = [-9007199254740992,0,1730448608,2,-536870912,65535,65536,-10,-30619,3];
const v1 = [-1415129915,1734033247,-1832238232,48324,-40599,-65536,-425834843,268435439,-4294967296];
const v2 = [2147483647,536870888,-11,268435456,-44347,624008281];
const v4 = new WeakSet();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = a7.__proto__;
    try { v8(v4, this, a7, v1, SharedArrayBuffer); } catch (e) {}
    this.d = a7;
}
new F5(v0);
new F5(v2);
new F5(v0);
new WeakSet();
new Uint8Array(4);
new Int32Array(2592);
new Uint32Array(2592, 2592);
new Uint32Array();
