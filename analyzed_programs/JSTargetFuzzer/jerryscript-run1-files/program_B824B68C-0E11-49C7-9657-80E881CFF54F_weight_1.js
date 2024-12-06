const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a4;
    this.b = a5;
}
new F2(v1, Map);
const v7 = new F2(F2, Map);
new F2(Map, Map);
new BigInt64Array(0);
new BigInt64Array(5);
new Uint32Array(129);
const v26 = new Uint32Array(181);
let v28 = BigUint64Array;
let v29 = new v28(1);
let v30 = 253;
[v30,,v28,v29] = v26;
let v32;
try { v32 = v28["abs"](181, v30, v28); } catch (e) {}
new Uint16Array(v30);
for (let i43 = 0;
    i43 < 2;
    (() => {
        i43++;
        for (let i49 = 0; i49 < 4; i49++) {
            ({"b":i43,} = v7);
            try { v32("abs"); } catch (e) {}
        }
    })()) {
    const v57 = new Function("x");
    v57.name;
}
Function();
