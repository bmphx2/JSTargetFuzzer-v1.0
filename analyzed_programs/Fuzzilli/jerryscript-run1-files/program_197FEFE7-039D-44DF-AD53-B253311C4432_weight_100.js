[];
[-1e-15];
const v5 = [1.7976931348623157e+308,-1000000000000.0,1000.0];
const v6 = [2.33722733638632,1.8855781493726887e+307];
new Array(8);
try { Array.of(Array, "-256"); } catch (e) {}
const v17 = `
    Object.defineProperty("-256", "constructor", { writable: true, configurable: true, enumerable: true, value: 5 });
    v6["m"] = 4n;
    delete v5["constructor"];
`;
eval(v17);
v5[-256];
