function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -10;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = F0;
    this.toStringTag = a9;
    v5[a9] = F0 ** a9;
    v3.length = 10;
    v5[v3] = v4;
}
const v12 = new F6(v5, v4);
const v13 = new F6(v5, v4);
const v14 = new F6(v4, v4);
const v15 = [v14,v14,v14,v12];
[F0,v15,[F6,v13],v15,v13,v3,F6];
const v21 = [-6,1,128,959659090,-1073741824];
const o27 = {
    set c(a23) {
        v12[Symbol.isConcatSpreadable];
    },
};
const v29 = new Proxy(v21, o27);
class C30 {
    n(a32, a33, a34, a35) {
        try { a34(v5, -65536); } catch (e) {}
        v12[268435440] = F6;
        return -1024;
    }
}
const v37 = new C30();
delete v29[v37];
