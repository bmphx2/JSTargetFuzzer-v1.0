function f0() {
    const o4 = {
        "d": 0.0,
        ..."number",
        "e": "number",
        "f": 0.0,
        "h": "e",
        __proto__: "e",
        "b": "number",
        "g": 0.0,
        "c": "number",
        ["number"]: "number",
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
function f11() {
    return v7;
}
function F16() {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = new F16();
class C19 extends F16 {
}
const v20 = new C19();
const v21 = [F16,F16,F16,F16];
const v22 = [v20,v20];
const v24 = v22[536870912];
let v25;
try { v25 = v24(); } catch (e) {}
const v27 = new Uint8Array(v22, v24, v25);
const v29 = new Uint8ClampedArray(C19, v25, v25);
v20[268435440] = v29;
v18[v20] = -58823;
v5[v6];
const v34 = 9007199254740990 || v22;
Math.tanh(0);
Math.floor(v34 >> 0);
9007199254740990 | v34;
9007199254740990 % 0;
const v40 = ("seal").replaceAll(v25, v25);
v29["set"](v18);
const v43 = v27[v21];
try { new Uint8Array(v40, v20, v43, v43, ...v25); } catch (e) {}
