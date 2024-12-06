function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -65537;
    this.b = -65537;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v11 = new Float32Array(4);
const v14 = new Uint8ClampedArray(1);
const v17 = new BigUint64Array(1000);
const v19 = v17["findIndex"](v5, "findIndex");
try { v19.padStart(1000, v19, "eG"); } catch (e) {}
("forEach").normalize("NFKD");
try { v19(v17, v11, "13", "forEach"); } catch (e) {}
h = 1;
[] = v14;
Object.defineProperty(v11, 4, { writable: true, value: v3 });
