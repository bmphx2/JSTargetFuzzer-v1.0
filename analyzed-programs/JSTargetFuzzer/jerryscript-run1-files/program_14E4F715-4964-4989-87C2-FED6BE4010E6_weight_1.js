function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a9;
}
new F6("m", "g", "m", 1073741825);
new F6("g", "Rbzt", "g", 11308);
new F6("m", "m", "m", 1073741825);
function f15(a16, a17, a18) {
    return f15;
}
const v20 = new Uint32Array();
const o21 = {
};
const v23 = new Proxy(v20, o21);
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    v23.toString = f15;
}
new SyntaxError(SyntaxError);
const v32 = new F24();
new F24(Proxy, v32, v32, v20);
