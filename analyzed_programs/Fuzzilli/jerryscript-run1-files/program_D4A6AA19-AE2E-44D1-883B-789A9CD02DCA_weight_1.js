const v0 = [];
function f1() {
    const o9 = {
        __proto__: v0,
        get g() {
            for (let v3 = 0; v3 < 32; v3++) {
                v0["p" + v3] = v3;
            }
            return v0;
        },
        [v0]: v0,
        "h": v0,
    };
    return o9;
}
f1();
const v11 = f1();
f1();
new Int8Array(10);
const v18 = new Int16Array(3);
const v21 = new Uint32Array(3);
const v22 = v21.__proto__;
let v23;
try { v23 = v22(v11, 3); } catch (e) {}
v23.valueOf = v23;
with (v11) {
    g = v18;
    new Uint16Array(12);
    new Float32Array(1024);
    new Int16Array(3493);
}
