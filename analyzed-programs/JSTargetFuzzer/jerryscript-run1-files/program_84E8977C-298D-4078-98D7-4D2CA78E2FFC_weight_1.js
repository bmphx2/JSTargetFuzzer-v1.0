try { ("bigint").toLowerCase(); } catch (e) {}
const v7 = ("bigint")[Symbol.match];
+0;
const v10 = new Int16Array(0);
new BigInt64Array(255);
new Int32Array(128);
const v17 = [v10];
[v10,v17,v17,"symbol"];
const v21 = new BigInt64Array();
with (v21) {
    try {
    const t0 = -1903;
    t0(-1903, -1903, BigInt64Array);
    } catch (e) {}
}
[Int32Array,Int16Array,"bigint",Int32Array,v7,v21,Symbol];
const v25 = [0];
try { v25.sort(45103); } catch (e) {}
