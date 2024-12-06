const v1 = new WeakMap();
let v4;
try { v4 = v1.has(v1); } catch (e) {}
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a7;
}
const v8 = new F5(v4);
new F5(F5);
new F5(v8);
new Float64Array(16);
new Uint16Array(4068);
new Int16Array(1024);
+null;
