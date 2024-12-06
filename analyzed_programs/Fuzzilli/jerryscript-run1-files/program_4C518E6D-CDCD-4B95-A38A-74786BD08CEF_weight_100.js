const v5 = new Int16Array(64);
const v8 = new Uint8Array(2);
const v11 = new Float64Array(6);
const v12 = [v5,-9223372036854775808,Uint8Array,v11,2];
const v13 = [1907070306,Float64Array,v12];
[6,6,64];
const v17 = v12[Symbol.isConcatSpreadable];
const v18 = v17.__proto__;
let v22;
try { v22 = v18(6); } catch (e) {}
try { v17(v13, v22, 6, v8, -9223372036854775807); } catch (e) {}
try { v8.values(); } catch (e) {}
