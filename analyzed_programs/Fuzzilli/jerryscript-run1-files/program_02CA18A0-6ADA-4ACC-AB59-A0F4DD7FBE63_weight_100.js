new Int32Array(9);
new Float64Array(255);
new Float32Array(257);
const v12 = [-622588.8793300742,-2.0,601.0086440697828,Infinity,0.5066958046899047,-1000000000.0,-2.220446049250313e-16];
new Uint8ClampedArray(v12);
try { Float64Array(v12, Uint8ClampedArray, Float64Array); } catch (e) {}
