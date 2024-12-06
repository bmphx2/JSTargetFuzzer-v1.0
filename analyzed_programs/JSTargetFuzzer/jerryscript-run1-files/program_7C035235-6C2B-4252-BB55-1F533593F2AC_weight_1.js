function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 1;
}
new F0();
let v5 = ("toString").trimLeft;
const v7 = "p" + v5;
new F0();
new F0();
let v13 = 128;
let v14 = Uint8Array;
let v15 = new v14(v13);
const v18 = new Int32Array(7);
let v20;
try { v20 = ("p").charAt(10); } catch (e) {}
({"byteOffset":v15,"length":v20,...v13} = v18);
v5 = v14;
const t16 = "toString";
t16[v14] = v15;
const t19 = "toString";
t19[65535] = 7;
for (let [v22,,v23] of "p") {
    try { v13["setFloat32"](); } catch (e) {}
}
const v28 = v7 | v7;
const v29 = -63045 << v28;
Math.atan2(v29, v7);
Math.clz32(v29);
v28 + v29;
v7 << -63045;
new BigUint64Array(10);
const v36 = new Uint8Array(Uint8Array, Uint8Array);
const v38 = new Int8Array();
const v41 = new Float64Array();
function f42() {
    return v41;
}
function f43(a44, a45, a46) {
    const o54 = {
        get e() {
            function F48(a50, a51, a52) {
                if (!new.target) { throw 'must be called with new'; }
            }
            return F48(64, this, v36);
        },
        [f42]: v38,
    };
    return o54;
}
const v55 = f43(64, v38, v36);
const v56 = f43();
f43(v56, v38, v56);
v18[v56[Symbol.isConcatSpreadable]];
--v14;
("f")[Symbol.__proto__];
"f" >> v18;
for (let v66 = 0; v66 < 5; v66++) {
    v55["p" + v66] = v66;
}
