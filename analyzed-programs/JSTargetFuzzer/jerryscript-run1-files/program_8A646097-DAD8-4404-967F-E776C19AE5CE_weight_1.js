function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.prototype = this;
}
new F4(F4);
const v8 = new F4(F4);
new F4(v8);
let v19 = 0;
const v20 = v19++;
function F21() {
    if (!new.target) { throw 'must be called with new'; }
}
class C23 extends F4 {
    static [v19] = v20;
    constructor(a25, a26, a27, a28) {
    }
}
new F21(C23);
