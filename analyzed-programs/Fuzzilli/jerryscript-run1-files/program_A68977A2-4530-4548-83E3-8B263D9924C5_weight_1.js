const v3 = [-1024n,-1024n,-1024n];
const v4 = [v3,v3,v3,v3,1073741823n];
const v5 = [v3,v4,v4,2n];
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a8;
    this.a = a8;
    this.g = -1024n;
}
const v10 = new F6(2n, v5);
const v11 = new F6(-1024n, v3);
const v12 = new F6(1073741823n, v5);
function f13(a14, a15, a16) {
    const o26 = {
        "a": a14,
        set b(a18) {
            this[a14];
            v12 != this ? v12 : this;
        },
        get d() {
            const v23 = [this,v10,this,2n,a16];
            [[a16,v23,v4,v23,a16],F6,v11];
            return v11;
        },
        "b": a14,
        __proto__: v10,
    };
    return o26;
}
f13(v12, f13, v3);
const v28 = f13(v10, F6, v10);
f13(v10, v28, v28);
const o35 = {
    "maxByteLength": 3,
};
const v37 = new ArrayBuffer(3, o35);
new Int8Array(v37);
