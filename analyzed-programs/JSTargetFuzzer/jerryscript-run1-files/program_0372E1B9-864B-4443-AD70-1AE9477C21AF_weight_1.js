new Uint32Array(128);
new Uint8ClampedArray(1024);
const o8 = {
};
const v10 = new Proxy(Uint8ClampedArray, o8);
const v11 = (128).b;
const v12 = new Uint8ClampedArray(3325);
const v15 = new Float32Array(81);
new Int16Array(12);
new BigInt64Array(129);
const v23 = -4294967297n < -4294967297n;
v12[1034] = o8 in v10;
let v25;
try { v25 = v12.forEach(v11, v15); } catch (e) {}
function F26(a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a28;
    this.e = 12;
    this.a = a28;
}
new F26(81, Int16Array, 1024);
const v32 = new F26(v25, v11, 128);
new F26(12, v32, 1024);
v23.toString;
try { v15(); } catch (e) {}
try { String.fromCodePoint(-4n); } catch (e) {}
