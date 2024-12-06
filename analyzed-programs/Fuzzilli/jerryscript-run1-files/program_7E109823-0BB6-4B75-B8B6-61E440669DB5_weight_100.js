function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9007199254740992;
    const t3 = 9007199254740992;
    t3.b = 9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
let v6 = 4096;
const v8 = new Uint16Array(v6);
const v11 = v5.e;
for (let i14 = 0, i15 = 10; i14 < i15; i14++, i15--) {
    function F23(a25, a26) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = a25;
    }
    new F23(v4, v5);
    new F23(v3, v11);
    new F23(v5, v3);
}
try { v11(F0, v8); } catch (e) {}
const v35 = --v6;
Math.max(-1117045849);
Math.atan2(v35, -1117045849);
Math.hypot(v35);
new Uint8ClampedArray(10);
new Int8Array(256);
new Date();
/.a{,}[Ufoo(?=bar)baz]?/;
const v49 = /a|bc1/uygs;
/2\x60/u;
new Map([]);
Math.max(0.0);
function f60() {
    return -1000.0;
}
function f65() {
    return 150763861;
}
const v67 = [[-1000000.0]];
const v68 = [v67,v67];
v67.findIndex(f65);
const v71 = v68["pop"]();
function f73() {
    return "getOwnPropertySymbols";
}
v71.a = v49;
