function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.a = a5;
}
new F3(1000000000.0);
new F3(1000000000.0);
new F3(1000000000.0);
try {
    new ArrayBuffer(-13n);
} catch(e15) {
} finally {
}
