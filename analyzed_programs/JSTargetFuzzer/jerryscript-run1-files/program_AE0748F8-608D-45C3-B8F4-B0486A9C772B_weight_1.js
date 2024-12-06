function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 255;
    this.b = 255;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a9;
}
new F6(v3, v4);
new F6(v5, v4);
new F6(v4, v4);
const v18 = new Uint8ClampedArray(2634);
const v21 = new Uint32Array(3769);
function f22(a23, a24, a25, a26) {
    const o27 = {
        ...v21,
        ...v18,
    };
    return o27;
}
v5.b;
const t24 = "o";
delete t24[9];
const v30 = new F0();
v30["keys"] = v30;
const v32 = f22(Uint32Array, 2634, 3769, v21);
f22(v32, v32, v32, Uint8ClampedArray);
f22();
