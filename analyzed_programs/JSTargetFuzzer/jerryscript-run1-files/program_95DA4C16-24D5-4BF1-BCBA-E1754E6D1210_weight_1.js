function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
[256,0,[v4,0,0,1073741824,0]];
[v5,v3,256];
new Uint16Array(9);
class C16 {
}
const v17 = new C16();
const v18 = [-1000.0,-Infinity,-3.0];
function* f19(a20, a21) {
    yield* v17;
    return f19;
}
const v22 = f19();
const v23 = [8,0,4294967297,-33048,6,1000,983207413];
try { v18["splice"](...v23, ...v22); } catch (e) {}
const v27 = new Float64Array(256);
const v30 = new Int8Array(4096);
const v33 = [9,v27,Uint16Array,Uint16Array,[256,9,f0,[v30,Float64Array,256]]];
new Array(127);
const v39 = new Uint32Array(181);
let v41 = BigUint64Array;
let v42 = new v41(1);
let v43 = 253;
[v43,,v41,v42] = v39;
try { v41["abs"](181, v43, v41); } catch (e) {}
new Uint16Array(v43);
for (let i56 = 0; 2 < 2; i56++) {
    new Function("x");
    v33.name;
}
v39 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
new Int8Array(255);
Function();
