function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.g = F1;
}
new F1();
new F1();
new F1();
function f15(a16, a17) {
    const o23 = {
        256: 3,
        set f(a19) {
            a19.d >>= 16906;
            let v21;
            try { v21 = a19(4, a17, a16); } catch (e) {}
            [a17,v21,v21,65536,v21];
        },
        "e": a17,
    };
    return o23;
}
let v24 = f15(65536);
const v25 = f15(4, 65536);
new Set();
new Float64Array(128);
const v33 = new Uint32Array();
const v36 = new Int16Array(1359);
const v37 = new Float64Array(1359, 4);
for (const v38 of v36) {
    3 > 8;
    v38 instanceof Set;
}
delete v25[f15];
v24 = v25;
v33[v37] = 1.0;
delete v33[6];
