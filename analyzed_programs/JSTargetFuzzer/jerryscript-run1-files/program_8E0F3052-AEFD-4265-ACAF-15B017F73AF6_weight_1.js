let v2 = 3n;
const v3 = [-2147483648n,v2];
const v4 = [2n];
const v5 = [v2,v3,2n];
let v8;
try { v8 = new v4(128); } catch (e) {}
-v5;
typeof -2147483648n === "symbol";
new Int8Array(5);
v2 = 2n;
let v19;
try { v19 = Int8Array(5); } catch (e) {}
new Uint16Array(3);
new Float32Array(3432);
new Uint8Array(11);
v5[16] = v4;
v3[128] = v2;
try { v19(536870887); } catch (e) {}
new BigInt64Array(16);
new Float64Array(291);
const v37 = new BigUint64Array(6, 6);
v37.valueOf = v19;
v8 = Int8Array;
const v43 = new Uint8Array(2789);
const v45 = [16,6,6];
Reflect.apply(v37.copyWithin, v43, v45);
