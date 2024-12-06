const v3 = [9007199254740991,4096,4096,4096];
const v4 = [v3,v3,9007199254740991,1024,9007199254740991,v3];
const v5 = [4096,v4,v4,v4,v4,1024];
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a11;
    this.e = a11;
    this.c = v5;
}
const v12 = new F6(v5, v5, 4096, v4, v5, v4);
const v13 = new F6(v5, v5, 4096, v12);
new F6(v3, v5, 9007199254740991, v13);
([[]]).every(parseFloat);
