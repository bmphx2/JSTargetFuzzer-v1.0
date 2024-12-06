function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function f3(a4, a5, a6, a7) {
        const o13 = {
            m(a9, a10, a11) {
                this instanceof (a7 = a5);
                return a5;
            },
        };
        return f3;
    }
    this.b = 5;
}
const v14 = new F0();
const v15 = new F0();
const v16 = new F0();
const v18 = [v15,v14,v16,[v16,v16]];
[v18,v14,v18];
new Number(3);
new Float32Array(129);
new Float64Array(6);
([5]).splice();
