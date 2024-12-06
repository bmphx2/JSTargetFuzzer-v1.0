function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -8.230294677598929;
}
new F3(1000000.0, 1000000.0, -8.230294677598929, F3, F3);
new F3(1.161001885967937e+308, -8.230294677598929);
new F3(-8.230294677598929, 1000000.0, 1000000.0, F3);
const v17 = new WeakSet();
try {
    new Date(-65536n, v17);
} catch(e21) {
} finally {
}
