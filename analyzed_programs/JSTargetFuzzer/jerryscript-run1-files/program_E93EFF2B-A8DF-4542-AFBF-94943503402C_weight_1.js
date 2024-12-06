new Int16Array(4);
new Int16Array(1);
new Uint16Array(95);
new Uint8ClampedArray(6);
new Uint32Array(0);
new Int32Array(3);
new BigUint64Array(256);
try { Int16Array.set(BigUint64Array); } catch (e) {}
