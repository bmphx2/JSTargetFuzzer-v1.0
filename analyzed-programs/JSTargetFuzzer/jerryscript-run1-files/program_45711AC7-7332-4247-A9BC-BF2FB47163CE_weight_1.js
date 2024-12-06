function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 268435440;
}
const v3 = new F0();
new F0();
const v5 = new F0();
[0.008946354723019967];
[-295090.8858465769,0.9161695578265381,-1.7976931348623157e+308,7.709666617140677,-239.58888239052237,-457077.4059838137,-1000.0,-2.2250738585072014e-308,2.2250738585072014e-308,-923.2096559835481];
[5.601004881703579,-597786.4166427971,-466472.024063252];
const v10 = new Set();
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a14;
}
new F11(v10, v3);
new F11(v5, F11);
new F11(F11, v3);
const v20 = new Uint32Array(858);
const v22 = new Uint16Array(v20, 858, 858);
const o27 = {
    m(a24, a25, a26) {
        return a24;
    },
};
for (const v28 in v20) {
    const v36 = [858];
    Reflect.defineProperty(o27.m, v22, v36);
}
