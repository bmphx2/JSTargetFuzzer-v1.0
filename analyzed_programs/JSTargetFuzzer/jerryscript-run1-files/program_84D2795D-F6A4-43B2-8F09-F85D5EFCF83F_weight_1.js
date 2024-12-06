function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.prototype = this;
}
const v7 = new F4(F4);
new F4(F4);
new F4(v7);
let v19 = 0;
const v20 = v19++;
function F21() {
    if (!new.target) { throw 'must be called with new'; }
}
class C23 extends F21 {
    static [v20] = v20;
    constructor(a25, a26, a27, a28) {
    }
}
new Uint8ClampedArray(C23);
