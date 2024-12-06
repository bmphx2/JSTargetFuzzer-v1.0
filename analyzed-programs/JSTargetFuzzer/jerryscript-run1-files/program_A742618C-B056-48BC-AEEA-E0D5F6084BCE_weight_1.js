function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    a8.c = 257n;
}
const v10 = new F6(-3n, -32388n);
const v11 = new F6(-9223372036854775808n, v10);
new F6(10000n, v11);
new Uint8ClampedArray(1000);
new Float32Array(1000);
const v24 = [2147483648];
v24[536870889] <<= 0.7752261266777326;
function F25(a27) {
    if (!new.target) { throw 'must be called with new'; }
    a27.h = a27;
    v24.length %= 3355;
}
new F25(v24);
new Int16Array(233);
/(?:a{5,1000000}){3,1000000}/gsu;
