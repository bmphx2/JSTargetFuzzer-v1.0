const v1 = new WeakSet();
const v3 = new WeakMap();
[WeakSet,v3,v1,WeakMap,v3];
const v5 = [v1,WeakMap];
new Int8Array([WeakSet,v5,v5]);
new BigUint64Array(2);
new Uint8Array(Uint8Array);
let v17;
try { v17 = Uint32Array(); } catch (e) {}
try { new v5(...v17); } catch (e) {}
