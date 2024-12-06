function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
}
const v7 = new F3(8n, 8n);
const v8 = new F3(8n, -2046495396n);
new F3(-2046495396n, 65536n);
function f10(a11, a12) {
    const v14 = Symbol.iterator;
    const o23 = {
        [v14]() {
            let v16 = 10;
            const o22 = {
                next() {
                    v16--;
                    const v20 = v16 == 0;
                    const o21 = {
                        "done": v20,
                        "value": v16,
                    };
                    return o21;
                },
            };
            return o22;
        },
    };
    const o33 = {
        "h": a11,
        valueOf(a25, a26) {
            const v27 = [a11];
            [v27];
            [] = [v27];
            return -2147483649n;
        },
        "f": v7,
    };
    return a11;
}
f10(v7, 8n);
f10(v8, 65536n);
f10(v8, 65536n);
const v42 = new Uint32Array(181);
let v44 = BigUint64Array;
let v45 = new v44(1);
let v46 = 253;
[v46,,v44,v45] = v42;
try { v44["abs"](181, v46, v44); } catch (e) {}
new Uint16Array(v46);
for (let i59 = 0; i59 < 2; i59++) {
    const v65 = new Function("x");
    v65.name;
}
Function();
