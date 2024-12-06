class C4 {
    d;
    static toString(a6) {
        const v7 = this[a6];
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = this;
            this.c = v7;
            this.byteOffset = 2;
        }
        new F8(a6, 1722213483, a6, a6);
        new F8(2, v7, -2147483649, a6, a6, v7);
        new F8(a6, a6, a6, v7);
        return false;
    }
}
new C4();
const v18 = new C4(1722213483);
new C4();
const v20 = [v18,-2147483649,false];
[v20];
[v20,v18,2,-2147483649,1722213483];
const v28 = new Uint8Array();
with (v28) {
    [WeakMap,Uint8Array,buffer];
}
