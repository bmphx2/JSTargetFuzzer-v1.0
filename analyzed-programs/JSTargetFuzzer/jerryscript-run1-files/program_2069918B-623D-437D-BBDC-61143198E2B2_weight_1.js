class C3 {
    static get b() {
        function F5(a7) {
            if (!new.target) { throw 'must be called with new'; }
            this.c = this;
            this.b = a7;
            this.h = a7;
        }
        new F5(this);
        new F5(1.7976931348623157e+308);
        new F5(1.7976931348623157e+308);
        return 1.7976931348623157e+308;
    }
}
new C3();
new C3();
new C3();
const v19 = new Uint8Array(78);
v19.reduceRight(Number);
