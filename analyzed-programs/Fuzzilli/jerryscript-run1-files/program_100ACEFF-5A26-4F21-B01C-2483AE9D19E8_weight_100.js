function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
    this.d = f0;
}
new F1();
new F1();
const v5 = new F1();
new Float64Array(132);
const v11 = new Uint8Array(512);
new Float32Array(3867);
for (const v15 of v11) {
    let v18 = 696488539;
    let v19 = v5 >> v18;
    v19 | -61636;
    const v21 = --v18;
    Math.fround(v19);
    -61636 << v5;
    v19 - v21;
    v19++;
}
