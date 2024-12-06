function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
}
new F1(f0);
new F1();
new F1();
new Float64Array(10);
new Uint32Array(1000);
new Float32Array(11);
+null;
