const v1 = new WeakSet();
const v3 = new WeakMap();
const v4 = [WeakSet,v3,v1,WeakMap,v3];
const v5 = [v1,WeakMap];
new Int8Array([WeakSet,v5,v5]);
new BigUint64Array(2);
new Uint8Array(Uint8Array);
try { Uint32Array(); } catch (e) {}
try { new v5(...v4); } catch (e) {}
