function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 255;
}
const v3 = new F0();
new F0();
new F0(v3, F0);
[-1.7976931348623157e+308,0.5466774506280203,0.9519469158284759,-7.248926876828408e+307];
[885605.3136476206,-5.0];
[1.7976931348623157e+308,848494.3972963733];
new SyntaxError(F0);
new Uint16Array(1024);
new Float64Array(255, v3, Float64Array);
const o22 = {
    ...this,
};
