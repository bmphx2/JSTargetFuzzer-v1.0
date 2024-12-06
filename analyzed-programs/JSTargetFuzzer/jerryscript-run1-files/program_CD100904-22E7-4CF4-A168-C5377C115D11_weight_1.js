const v2 = new Int32Array(16);
new Int32Array(2519);
const v8 = new Int32Array(128);
const v9 = [Int32Array,128,Int32Array,v8,v8];
const v10 = [v2,v9,Int32Array,v8,v9];
const v11 = [v10,128,16,v10,128];
class C12 extends Int32Array {
    set d(a14) {
        for (let i17 = 0, i18 = 10; i17 < i18; i17++, i18--) {
            function f26() {
                return i17;
            }
        }
    }
}
new C12();
new C12();
new Int32Array();
function F30() {
    if (!new.target) { throw 'must be called with new'; }
}
const v32 = new F30();
class C33 extends F30 {
}
const v34 = new Int32Array();
[F30,F30,F30,F30];
const v36 = [v34,v34];
const v38 = v36[536870912];
let v39;
try { v39 = v32(); } catch (e) {}
const v41 = new Uint8Array(v36, v38, v39);
const v43 = new Uint8ClampedArray(C33, v39, v39);
const v44 = ("seal").replaceAll(v39, v39);
v43["set"](v32);
const v47 = v41[v11];
try { new Uint8Array(v44, v34, v47, v47, ...v39); } catch (e) {}
