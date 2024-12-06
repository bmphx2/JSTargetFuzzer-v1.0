function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a5;
}
new F3("bigint", "boolean");
new F3("object", "bigint");
const v9 = new F3("object", "object");
function f10() {
    return v9;
}
new Uint8Array(13);
const v19 = new BigUint64Array(7);
try { v19.every(BigUint64Array); } catch (e) {}
const v21 = [256,-14,536870912,1073741824,-9007199254740990,536870889,9,4294967296];
let v22 = 0;
while (v22 < 2) {
    for (let v25 = 0; v25 < 5; v25++) {
        v21["p" + v25] = v25;
    }
    v22++;
}
new Float64Array(7);
new Uint32Array(255);
const v36 = [Infinity];
const v37 = [-9.40814191403733];
class C38 extends Date {
    constructor(a40, a41) {
        super(a41);
    }
}
new C38(v36, v37);
