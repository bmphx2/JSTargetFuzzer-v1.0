const v3 = [NaN,-4.7348138172936665];
const v4 = [-3.5542690226983575,-2.2250738585072014e-308,-0.0,-2.0];
const v5 = [4.0,475.06493074596233,-4.953789058954987e+307,1e-15,-1000000000000.0,5.0,-235580.54028686008,1e-15,1.7976931348623157e+308];
function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
    this.c = a9;
    this.d = v3;
}
new F6(v5, v3, 7n);
const v12 = new F6(v4, v5, 7n);
let v13 = new F6(v4, v3, 7n);
const v16 = new Int8Array(0);
const v19 = new Int8Array(1);
new Uint32Array(7);
const v25 = v12[Symbol.isConcatSpreadable];
v19[7] = --v13;
try { v25(Uint32Array, v4, -4n, v25, 7n); } catch (e) {}
try { v16.reverse(); } catch (e) {}
for (let v29 = 0; v29 < 32; v29++) {
    v16["p" + v29] = v29;
}
