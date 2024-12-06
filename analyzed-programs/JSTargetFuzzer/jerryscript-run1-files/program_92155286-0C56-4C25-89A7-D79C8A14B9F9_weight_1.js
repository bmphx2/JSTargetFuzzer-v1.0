let v6;
try { v6 = WeakSet(); } catch (e) {}
typeof v6;
new Uint32Array(110);
new BigInt64Array(255);
new BigUint64Array(256);
async function* f18(a19, a20) {
    return a20;
}
const v21 = f18(f18, f18);
v21.next(f18);
v21.return();
