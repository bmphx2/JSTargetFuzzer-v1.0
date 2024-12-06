function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 296576193;
    this.b = a5;
    this.g = a5;
}
const v6 = new F3(F3);
const v7 = new F3(1804320935);
const v8 = new F3(296576193);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 1804320935;
}
const v15 = new F9(296576193, 296576193, 173462621, v8);
const v16 = new F9(173462621, 173462621, 296576193, v7);
const v17 = new F9(296576193, 173462621, 1804320935, v6);
const v18 = [v17,v15,v8,v6];
const v19 = [v8,1804320935,v18,v16];
const v20 = [v19,v19,173462621];
class C24 {
    static f;
    [v20] = v16;
}
new C24();
new C24();
new C24();
v18[Symbol.split] = v16;
