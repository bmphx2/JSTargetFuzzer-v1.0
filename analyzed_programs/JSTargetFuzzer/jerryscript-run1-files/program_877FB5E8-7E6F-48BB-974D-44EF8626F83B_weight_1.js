function f3(a4) {
    const o5 = {
        [a4]: a4,
        ["string"]: a4,
        4154241021: "valueOf",
        "f": "string",
        "g": "valueOf",
        __proto__: a4,
        "h": "b",
        "a": "b",
        "b": "string",
        ..."b",
        536870889: "b",
    };
    return o5;
}
f3("string");
f3("b");
f3("valueOf");
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a12;
}
new F9("string", "b");
const v14 = new F9("valueOf", "valueOf");
new F9("string", "b");
new Uint16Array(9);
const v21 = new Float64Array(256);
const v24 = new Int8Array(4096);
[v24,Float64Array,v24];
let v27 = [9,v21,Uint16Array,Uint16Array,[256,9,4096,Uint16Array]];
new Array(127);
const v33 = new Uint32Array(181);
let v35 = BigUint64Array;
let v36 = new v35(1);
[v27,,v35,v36] = v33;
try { v14["abs"](181, 253, v35); } catch (e) {}
new Uint16Array(Uint16Array);
for (let i50 = 0; i50 < 2; i50++) {
    const v56 = new Function("x");
    v56.name;
}
638046528 + "x";
new Uint8ClampedArray(Uint16Array);
new Int32Array(16);
new Int8Array(255);
Function();
