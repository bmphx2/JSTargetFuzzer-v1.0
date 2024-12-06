function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -9007199254740990;
    this.c = -9007199254740990;
}
new F0();
const v4 = new F0();
new F0();
v4[128];
for (let v10 = 0; v10 < 32; v10++) {
    v4["p" + v10] = v10;
}
new Uint16Array(129);
const v20 = new BigInt64Array();
v20.keys();
new Int32Array(16);
new Float64Array(0);
new BigInt64Array(16);
new Uint8ClampedArray(363);
new Float32Array(6);
new Set([5.0,-Infinity,0.45285535896993423,-1.4180257666535735e+308,0.9733557260586729,0.41911273078751055,NaN]);
