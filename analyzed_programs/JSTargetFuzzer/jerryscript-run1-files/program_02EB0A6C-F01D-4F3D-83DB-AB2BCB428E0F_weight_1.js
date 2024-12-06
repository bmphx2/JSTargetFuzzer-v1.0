let v12 = 0;
const v13 = v12++;
function F14() {
    if (!new.target) { throw 'must be called with new'; }
}
class C16 extends F14 {
    static [v13] = 9007199254740991;
    constructor(a18, a19, a20, a21) {
    }
}
new Uint8ClampedArray(C16);
