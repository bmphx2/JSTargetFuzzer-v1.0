const v15 = new BigUint64Array(14);
const v16 = v15.fill(4294967297);
v16 << v16;
let v21;
try {
const t0 = 65535;
v21 = t0(6.276917783317641e+307, 255, 4294967297, 624124299);
} catch (e) {}
try { v21(165, BigUint64Array); } catch (e) {}
