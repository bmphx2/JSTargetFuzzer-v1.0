function f0() {
}
function f2() {
    const v3 = [];
    function F4() {
        if (!new.target) { throw 'must be called with new'; }
        v3.reverse();
    }
    new F4();
    return f0;
}
function f8() {
    return f2;
}
let v12 = 0;
while (v12 < 3) {
    try { v12["test"]("test", "test"); } catch (e) {}
    v12++;
}
const v18 = new Int32Array(3);
new BigInt64Array(256);
new Float64Array(108);
const v27 = new Uint32Array(181);
let v29 = BigUint64Array;
let v30 = new v29(1);
let v31 = 253;
[v31,,v29,v30] = v27;
try { v29["abs"](181, v31, v29); } catch (e) {}
const v38 = new Uint16Array(v31);
for (let i49 = (() => {
        v38.__proto__;
        v18["xX7QN"];
        return 0;
    })();
    i49 < 2;
    i49++) {
    const v55 = new Function("x");
    v55.name;
}
Function();
