function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 52668822n;
}
new F3(4n, 4n);
new F3(52668822n, 4n);
new F3(1024n, 52668822n);
function f13(a14, a15, a16, a17) {
    const o24 = {
        m(a19, a20, a21) {
            try {
                super.deref(a21, a17);
            } catch(e23) {
            }
            return a15;
        },
    };
    return o24;
}
Reflect.apply(f13().m);
