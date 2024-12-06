function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1073741823;
    this.a = 1073741823;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v4;
}
new F6(v4, v5);
new F6(v4, v3);
new F6(v4, v3);
new Uint8ClampedArray(10);
const o17 = {
    ..."1131340342",
};
new Float32Array(1000);
const v23 = `
`;
eval(v23);
new Uint8ClampedArray(512);
async function* f27(a28, a29) {
    return f27;
}
f27();
