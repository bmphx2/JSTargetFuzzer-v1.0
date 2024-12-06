const v5 = new Int8Array(2);
const v8 = new Uint8Array(3052);
const v11 = new BigInt64Array(1024);
const v12 = v8.buffer;
let v13;
try { v13 = Int8Array(v12); } catch (e) {}
try { v13.includes(v13, 1024, v12, v8, v12); } catch (e) {}
let v16;
try { v16 = g(v13, 13n, v5, g, Uint8Array); } catch (e) {}
v11[v16];
for (let v18 = 0; v18 < 32; v18++) {
    v5["p" + v18] = v18;
}
