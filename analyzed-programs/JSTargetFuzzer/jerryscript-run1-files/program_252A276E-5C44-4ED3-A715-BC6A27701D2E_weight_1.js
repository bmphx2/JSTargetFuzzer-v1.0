let v2 = 1000;
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
}
const v6 = new F3(v2);
const v7 = new F3(v2, 9, v6);
const v8 = new F3(v2);
function f10(a11, a12) {
    v7.d = a11;
    return v2 -= 9;
}
f10(F3, v2);
function F16(a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a18;
    this.g = 9;
    this.d = 16;
}
if (F3) {
    try { new F3(-9007199254740991, F16, ...v8, v6, 9, v2); } catch (e) {}
} else {
    v7[929249577];
}
const v23 = new F16(v7, v2, -1073741824);
const v24 = new F16(v8, 16, -9007199254740991);
const v25 = new F16(v6, -9007199254740991, 16);
const v30 = [F3,v23];
const v31 = [16,F16,-4294967295];
const v32 = [v31];
const v33 = v8.__proto__;
function F34(a36, a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a37;
    let v39;
    try { v39 = v25.toString(F3, v30); } catch (e) {}
    try { new v33(v39); } catch (e) {}
    const o43 = {
        "maxByteLength": 255,
    };
    const v45 = new ArrayBuffer(6, o43);
    new Uint16Array(v45);
    this.iterator = a36;
}
const v48 = new F34(v32, v6, v30);
const v49 = new F34(v31, v8, v31, v48);
new F34(v31, v49, v32, v25);
new F34(4096, v24, F3);
[1000000000000.0];
[-Infinity,1000000000000.0,369026.71281210426,5.668339234049737,0.8613547500265274,4.0,1000000000.0,-1000.0,52.550425865224724];
const v56 = [-3.279467614024663e+307,-971.9026418444112,-1.184550849361816e+308];
try { v56.at(9); } catch (e) {}
v24 + v48;
v48[2477578841];
("multiline")["x"];
const v74 = ("x").species;
const t56 = "x";
t56[v74] = 536870887n;
const t58 = 1000n;
t58[9] = 255;
let v75;
try { v75 = v74.toString(255, "x", 1073741824n); } catch (e) {}
v75 = v74;
