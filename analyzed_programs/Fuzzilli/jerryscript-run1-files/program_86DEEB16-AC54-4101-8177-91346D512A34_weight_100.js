function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9007199254740992;
    const t3 = 9007199254740992;
    t3.b = 9007199254740992;
}
new F0();
new F0();
new F0();
new Uint16Array(4096);
new Uint8ClampedArray(10);
new Int8Array(256);
new Date();
/.a{,}[Ufoo(?=bar)baz]?/;
/a|bc1/uygs;
/2\x60/u;
new Map([]);
Math.max(0.0);
function f32() {
    return -1000.0;
}
function f37() {
    return 150763861;
}
const v39 = [[-1000000.0]];
const v40 = [v39,v39];
v39.findIndex(f37);
v40["pop"]();
