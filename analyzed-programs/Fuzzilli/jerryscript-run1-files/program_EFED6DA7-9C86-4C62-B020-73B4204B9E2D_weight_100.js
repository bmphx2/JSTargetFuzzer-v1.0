new Int32Array(512);
new Uint8ClampedArray(3631);
new BigUint64Array(7);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a11;
    this.e = a11;
    this.g = Uint8ClampedArray;
}
new F9(3631, 3631);
new F9(512, 3631);
new F9(7, 512);
class C17 extends BigUint64Array {
    constructor(a19, a20) {
        super();
        const v21 = `
            v21[2257];
            function f23(a24, a25) {
                const o29 = {
                    toString(a27) {
                        function f28() {
                            return f28;
                        }
                        return v21;
                    },
                };
                return a25;
            }
        `;
        eval(v21);
    }
}
new C17();
