const v0 = [];
class C1 {
    valueOf() {
        function F3(a5) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a5;
            this.g = this;
            this.f = v0;
        }
        const v6 = new F3(F3);
        new F3(v6);
        new F3(v6);
        return v0;
    }
}
new C1();
new C1();
new C1();
new Int32Array(0);
new Uint8ClampedArray(5);
new Float64Array(6);
const v24 = [2147483649];
const v25 = [-3,-8];
536870888 !== 1071332886;
function F29(a31) {
    if (!new.target) { throw 'must be called with new'; }
}
class C32 extends F29 {
    constructor(a34, a35, a36) {
        super();
        Math <= a36;
    }
}
const v39 = new C32();
new C32(v39, v25, v24);
