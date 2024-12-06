[];
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
}
let v12 = new F8();
const v14 = new Map();
function f15() {
    return v12;
}
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
}
let v22 = new F16(f15, v12, v14, Map);
[f15,,v12,v22] = v14;
new Int32Array(5);
new Int8Array(6);
new Int8Array(4);
const v32 = ([])[-1];
Object.defineProperty([0.3963332363617482], "h", { enumerable: true, get: v32 });
