function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740991;
    function f3(a4) {
        return F0;
    }
    f3(f3);
    this.f = 9007199254740991;
    this.a = 9007199254740991;
}
new F0();
const v10 = new F0();
const v11 = new F0();
function f12() {
    return v11;
}
new Int16Array(64);
const v18 = new Uint8Array(512);
const v21 = new Uint32Array(1000);
const v29 = [-16,4];
let v30 = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
const v31 = [-4294967295,14,219268071,1317141055,2];
try {
    v30 = v31;
    for (let v35 = 0; v35 < 32; v35++) {
        v31["p" + v35] = v35;
    }
} finally {
    v18[v10] = -1357402745;
}
delete v30[-9];
try { v29.slice(45103); } catch (e) {}
const o40 = {
    __proto__: v29,
    "d": -2,
    ...v21,
    "f": v10,
    "c": v30,
    "e": v18,
    "h": v30,
    3943951267: -2,
    "a": true,
    "e": 536870889,
};
