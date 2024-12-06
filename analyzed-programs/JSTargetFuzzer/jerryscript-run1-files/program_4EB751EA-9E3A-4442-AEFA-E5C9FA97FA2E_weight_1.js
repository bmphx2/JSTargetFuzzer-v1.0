const v1 = new Set();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a4;
    this.e = v1;
    this.h = Set;
}
const v5 = new F2(F2);
new F2(v1);
const v7 = new F2(v5);
[65536n,F2,65536n,v5];
const v12 = [v7];
[F2,v12,v7];
const v14 = [];
const v15 = [v14,v14];
const v16 = [v15,Set];
[v15,v16,v15,v16,v15];
function* f27(a28, a29) {
    function f30(a31, a32, a33, a34) {
        Object.defineProperty(v15, 1, { enumerable: true, value: F2 });
        a34[8] |= 4.0;
        return v12;
    }
    f30();
    yield 45279;
    return 39366;
}
f27(v16, 39366);
