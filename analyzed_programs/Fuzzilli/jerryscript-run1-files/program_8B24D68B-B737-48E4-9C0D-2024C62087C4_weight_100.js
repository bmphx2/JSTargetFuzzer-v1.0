function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -256;
    this.h = -256;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
class C6 extends F0 {
    #o(a8, a9) {
        const v10 = [v3,this,this,a9,this];
        [v10,this,[a9,a8,v3],v10];
        return F0;
    }
    [v3] = v5;
    [v5] = v4;
    static 1;
    static #h = v4;
}
const v14 = new C6();
const v15 = new C6();
const v16 = new C6();
const v20 = C6 >> v15;
const v21 = (a22, a23, a24, a25) => {
    function f26(a27, a28, a29) {
        const o30 = {
            4294967296: a29,
        };
        return o30;
    }
    f26(v5, a25, v4);
    f26(f26(v14, a25, a22), a25, v16);
    return v20;
};
