new Map();
new Float64Array(1);
new BigInt64Array(7);
new BigInt64Array(9);
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a17;
    this.b = a16;
}
new F14(7, F14, 9);
new F14(9, 1, 1);
new F14(1, F14, 9);
let v23 = 459899416;
let v24 = 51733;
const v26 = ++v23;
const v29 = ((v26 * 7) ** v26) << v24;
v24--;
-v23;
Math.atan2(v29, v23);
