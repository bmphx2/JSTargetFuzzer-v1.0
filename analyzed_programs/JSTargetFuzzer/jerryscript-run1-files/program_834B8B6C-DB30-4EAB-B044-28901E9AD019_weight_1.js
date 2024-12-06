function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = true;
}
new F1();
new F1();
new F1();
const v8 = new Int32Array(3038);
new Float64Array(1024);
new BigUint64Array(12);
typeof v8;
