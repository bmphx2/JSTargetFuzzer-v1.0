new Int8Array(6);
new BigUint64Array(257, 257);
new Float64Array(11);
[1619954456,1284744196,6,2097731233,6123,-4294967297,536870889,9007199254740992];
[29520,-10,656680193,-11,-7036,-1997024914,5,-256,65535];
[-2147483649,-2029345];
const v18 = [65535n,0n,964329252n];
let v19 = [964329252n,964329252n,v18,65535n];
const v20 = [v19,v19,v18,964329252n,0n];
const v21 = [65535n,v19];
const v23 = [[v20,257]];
const t11 = "fdNr";
t11[6] = 65535n;
let v30;
try {
const t0 = "a";
v30 = new t0(Int8Array, v23, v23, 58270);
} catch (e) {}
async function* f31(a32, a33, a34) {
    ({"length":a32,...v19} = a33);
    yield v18;
    await a32;
    yield "fdNr";
    return a32;
}
f31(58270, v21, v30);
