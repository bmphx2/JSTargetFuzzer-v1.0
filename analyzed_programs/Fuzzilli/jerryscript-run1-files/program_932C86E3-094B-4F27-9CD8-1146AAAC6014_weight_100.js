const v1 = new WeakSet();
const v3 = new WeakMap();
[WeakSet,v3,v1,WeakMap,v3];
const v5 = [v1,WeakMap];
[WeakSet,v5,v5];
new Int8Array(2);
new BigUint64Array(2);
new Uint8Array(3244);
let v17;
try { v17 = Uint32Array(); } catch (e) {}
try { new v17(...v17); } catch (e) {}
