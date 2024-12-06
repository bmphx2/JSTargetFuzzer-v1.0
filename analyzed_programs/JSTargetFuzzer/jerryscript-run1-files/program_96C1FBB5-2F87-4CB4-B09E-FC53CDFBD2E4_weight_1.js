function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5, a6, a7) {
        const o13 = {
            m(a9, a10, a11) {
                F0 = a5;
                this instanceof a7;
                return a5;
            },
        };
        return f3;
    }
    this.b = this;
}
const v14 = new F0();
new F0();
const v16 = new F0();
const v17 = [v16,v16];
const v18 = [v17,v14,v16,v17];
[v18,F0,v18];
new Number(3);
new Float32Array(129);
new Float64Array(6);
([5]).splice();
