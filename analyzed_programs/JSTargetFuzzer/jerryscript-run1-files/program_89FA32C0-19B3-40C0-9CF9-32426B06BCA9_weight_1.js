function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1128514345;
    this.b = 1128514345;
    this.c = 1128514345;
    const o5 = {
        "maxByteLength": 2831,
    };
    const v7 = new ArrayBuffer(8, o5);
    new Float64Array(v7);
}
const v10 = new F0();
const v11 = new F0();
const v12 = new F0();
const v13 = [v12,v11,v10,F0,v11];
const v14 = [v13,v12,v11,v13,v10];
[v14,v14,v10];
new Map();
const v21 = [];
const v23 = new Int16Array();
function f24(a25, a26) {
    const v27 = v23[-1];
    Object.defineProperty(v27, v21, { writable: true, value: v27 });
    return Int16Array;
}
new Promise(f24);
