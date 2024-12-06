function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -9007199254740992;
}
new F0();
const v4 = new F0();
const v5 = new F0();
async function* f7(a8, a9) {
    const v10 = v5.f;
    Object.defineProperty(a9, "f", { configurable: true, enumerable: true, value: v4 });
    await v10;
    yield a9;
    return v4;
}
f7(v4, v4);
const v18 = new Uint32Array(10);
new Uint32Array(4);
const v24 = new Int32Array(119);
function f26(a27, a28, a29, a30) {
    const o31 = {
    };
    return o31;
}
v24.buffer = v5[4294967296];
v24[Symbol.match] = v4;
const v35 = f26();
const v36 = f26(f26, v35, f26, "h");
let v38 = 5;
const v39 = ("h").length;
v18 | -9007199254740990;
Math.log(v18);
Math.tanh(v18);
257 + v36;
v35.g = v38 = v39;
