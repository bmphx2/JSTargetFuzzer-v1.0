let v0 = [];
function f1() {
    const o6 = {
        [v0]() {
            this[1] = v0;
            const v3 = this.f;
            v0 = this;
            try {
                super.stringify(this, v0);
            } catch(e5) {
            }
            return v3;
        },
        "f": v0,
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
[v8,v0,f1(),v7];
[v8,[v0,v7,v0,v0,v8]];
new Int16Array(242);
new Float64Array(1693);
new Uint16Array(4096);
const v24 = new Uint32Array(181);
const v27 = new Float32Array(1);
v27.sort();
let v30 = BigUint64Array;
let v31 = new v30(1);
let v32 = 253;
[v32,,v30,v31] = v24;
try { v30["abs"](181, v32, v30); } catch (e) {}
new Uint16Array(v32);
const v45 = new Date();
v45.getTimezoneOffset();
for (let i48 = 0; i48 < 2; i48++) {
    const v54 = new Function("x");
    v54.name;
}
Function();
