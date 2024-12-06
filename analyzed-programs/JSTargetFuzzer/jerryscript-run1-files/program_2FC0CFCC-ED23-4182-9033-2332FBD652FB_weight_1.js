function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a10;
}
new F7("number", "As9");
const v12 = new F7("number", false, "number", -6);
new F7("number", false, v12, "1000");
const v19 = new Uint8Array(1000);
try { v19.reduceRight(Uint8Array, v19, -4294967296, false); } catch (e) {}
