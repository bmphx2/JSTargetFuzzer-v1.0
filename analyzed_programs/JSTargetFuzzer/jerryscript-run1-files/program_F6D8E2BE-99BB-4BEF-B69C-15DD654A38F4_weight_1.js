new Uint8Array(9);
new BigInt64Array(107);
new Float32Array(9);
(-12n).toString();
try { Array.from(9007199254740990, BigInt64Array); } catch (e) {}
