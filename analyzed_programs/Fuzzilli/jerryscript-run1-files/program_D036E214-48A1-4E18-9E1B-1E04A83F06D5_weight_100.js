function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = true;
    t2.c = a6;
}
new F4(2123368016, -9223372036854775807);
new F4(-9223372036854775807, 536870912);
new F4(536870912, 2123368016);
new Float64Array(3120);
new Uint32Array(Uint32Array);
const v19 = new Int8Array(13);
const v20 = [4,1779685902,44948,10000];
const v21 = [257,-13,2,-58508,3,268435440];
const v22 = [-38172,-1323681202,2147483647,16,536870889,64,-1477752957,268435439,2,-65537];
const v23 = [v22,v22];
const v24 = [v23,v20,v22,v21];
let v25 = [v21,v20,v24,v24];
function F26(a28, a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a28;
}
new F26(v23, v21, v21, v24);
const v33 = new F26(v20, v23, v25, v23);
let v34 = new F26(v24, v19, v22, v22);
({"b":v34,"d":v25,} = v34);
if (v25) {
    try { v25(v21); } catch (e) {}
} else {
    v25 !== v33 ? v25 : v33;
}
let v38 = v25 + v24;
v38 = v25;
