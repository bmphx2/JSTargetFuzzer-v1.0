function f0() {
}
function f1() {
    const o6 = {
        o() {
            this[21] = f0;
            return f0;
        },
        "f": f0,
        [f0]: f0,
        "a": f0,
    };
    return o6;
}
f1();
f1();
f1();
new Int8Array(1780);
new Float64Array(256);
new Uint16Array(1024);
const v21 = new Uint32Array(181);
const v23 = [2.220446049250313e-16,-5.0,4.0,374.98958739447244,1000000000.0,855063.1763904884,Infinity,-Infinity,0.7608961253408736,-1.0];
([1.7976931348623157e+308]).fill(v23, 257, 257);
try { Float32Array(Float32Array); } catch (e) {}
let v29 = BigUint64Array;
let v30 = new v29(1);
let v31 = 253;
[v31,,v29,v30] = v21;
try { v29["abs"](181, v31, v29); } catch (e) {}
new Uint16Array(v31);
for (let i44 = 0; i44 < 2; i44++) {
    const v50 = new Function("x");
    v50.name;
}
Function();
