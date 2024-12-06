function f0() {
}
new Int32Array(3);
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a13;
    this.search = 2147483647;
    this.h = 10000;
}
new F10(-7, -7);
const v15 = new F10(2147483647, -7);
new F10(3, 2147483647);
function f17() {
}
const v21 = [-1000000.0,f17,853.5086754112776,-1000000.0,v15,F10,-1000000.0];
const v22 = [v21,-1000000.0,0.014069366437978514,v21,f17];
const v23 = [v22,f17,853.5086754112776,609.094272736188];
function* f27(a28, a29, a30, a31) {
    try { a30.padStart(a28, "object"); } catch (e) {}
    const o33 = {
        "construct": f17,
        "unicode": f0,
        "preventExtensions": f17,
    };
    new Proxy(v23, o33);
    yield* "object";
    return v15;
}
f27(853.5086754112776, "U7O", "U7O", v22);
