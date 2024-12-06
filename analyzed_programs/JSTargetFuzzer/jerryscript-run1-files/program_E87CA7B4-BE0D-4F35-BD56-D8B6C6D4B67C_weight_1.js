function f0() {
}
let v1 = 51026;
function F7(a9, a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
}
function f13() {
    return f13;
}
const v16 = [];
function f17() {
    return v16;
}
function F18(a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
}
const v23 = new F18(v16, v16, v16);
const o25 = {
    "defineProperty": f17,
};
const v27 = new Proxy(v23, o25);
function f28() {
    return f28;
}
function f29() {
    return o25;
}
Object.defineProperty(v27, -16, { configurable: true, get: f29, set: f28 });
function f32() {
    return v1;
}
class C33 {
    valueOf(a35, a36) {
        a36();
    }
}
const v38 = new C33();
const v39 = v38 != C33;
v1 = -4096;
const v40 = ("max").toLowerCase(..."bigint", 1073741824n, v39, f32, C33, "max");
for (let v41 = 0; v41 < 32; v41++) {
    const t41 = "bigint";
    t41["p" + v41] = v41;
}
async function f44(a45, a46) {
    this | a45;
    return a46;
}
f44(v38);
-v39;
const t48 = v40["trimLeft"]();
t48[0n] >>>= 31380;
f44(v1, "bigint");
