function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
}
new F3("bigint", "boolean");
const v8 = new F3("object", "bigint");
new F3("object", "object");
function f10() {
    return v8;
}
new Uint8Array(13);
const v19 = new BigUint64Array(7);
let v20;
try { v20 = v19.every(BigUint64Array); } catch (e) {}
const v21 = [256,-14,536870912,1073741824,-9007199254740990,536870889,9,4294967296];
let v22 = 0;
while (v22 < 1024, v20) {
    for (let v25 = 0; v25 < 5; v25++) {
        v21["boolean" + v25] = v25;
    }
    v22++;
}
new Float64Array(7);
new Uint32Array(255);
[Infinity];
const v37 = [-9.40814191403733];
class C38 extends Date {
    constructor(a40, a41) {
        super(a41);
    }
}
new C38(v21, v37);
