let v1 = Int32Array;
const v2 = new v1(240);
let v4 = -1e-15;
let v5 = -1000000000.0;
v2[-1000000000000.0] = v5;
({"buffer":v5,"byteLength":v4,"d":v1,} = v2);
new Int32Array(1024);
new Float64Array(1);
EvalError();
