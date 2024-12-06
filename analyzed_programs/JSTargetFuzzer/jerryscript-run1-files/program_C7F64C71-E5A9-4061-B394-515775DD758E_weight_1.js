new Float32Array(256);
const v5 = new Uint8Array(3);
new Uint16Array(4);
v5.toString = SyntaxError;
const v10 = [-1.7920367119859458e+308,241.05986003714065,0.829356902266197,-1000.0,0.46921823136220475,NaN,-5.23129616700796,-1.0,-5.0,1000.0];
const v11 = [-2.0];
const v12 = [-952.6317698476041,7.459502710495457,0.24776571389331725,-53192.8341948929,-4.970218281483474,3.6631333799778396,-1.7976931348623157e+308,5.0,Infinity];
try {
    new ArrayBuffer(-13n);
} catch(e19) {
    ArrayBuffer[e19] = v5;
    v10 >> 20661;
    ArrayBuffer[7] = v11;
    20661 - e19;
    try { v12.findIndex(SyntaxError, v11); } catch (e) {}
} finally {
}
