[];
new WeakMap();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a6;
}
const v7 = new F3(WeakMap, F3);
const v8 = new F3(v7, v7);
new F3(v8, WeakMap);
new Uint16Array(512);
new Float64Array(176);
new Int8Array(129);
const v27 = new Uint32Array(181);
let v29 = BigUint64Array;
let v30 = new v29(1);
let v31 = 253;
[v31,,v29,v30] = v27;
try { v29["abs"](181, v31, v29); } catch (e) {}
new Uint16Array(v31);
for (let i47 = (() => {
        function f43(a44) {
            return a44;
        }
        class C45 extends f43 {
            15;
        }
        return 0;
    })();
    i47 < 2;
    i47++) {
    const v53 = new Function("abs");
    v53.name;
}
Function();
