function f0() {
    let v1 = -4294967295;
    let v3 = 2.694531554405584;
    const o17 = {
        ..."boolean",
        "f": "boolean",
        "g": "boolean",
        "c": v1,
        "a": v1,
        o(a5, a6) {
            ({"e":v1,"length":v3,} = "boolean");
            try { a5(this, v3, a6); } catch (e) {}
            new Uint8Array(7);
            new Float64Array(10);
            new Float64Array(1000);
            return 7;
        },
    };
    return o17;
}
const v18 = f0();
let v19 = f0();
const v20 = f0();
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 0;
    this.a = a28;
    this.c = f0;
}
new F24(v18, 6, 6, v18);
const v31 = new F24(v20, 50912, 6, v19);
new F24(v19, v31, 6, 50912);
new Float32Array(10);
const v38 = new Int32Array(5);
new Float64Array(13);
function f42(a43, a44, a45) {
    const o46 = {
    };
    return o46;
}
const v49 = new Int32Array(131);
let v51 = v49["find"](f42);
v19 = v51;
v51 = v38;
Object.defineProperty(v18, 3, { configurable: true, enumerable: true, get: f0, set: f42 });
for (let v52 = 0; v52 < 32; v52++) {
    v18["find" + v52] = v52;
}
