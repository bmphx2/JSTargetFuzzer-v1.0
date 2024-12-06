const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v0;
    this.a = v0;
}
const v3 = new F1();
const v4 = new F1(v3, v3, F1);
const v5 = new F1(F1, v4, v3);
const v6 = [F1,v4,v0,v5,v3];
const v7 = [F1,v6,v3,v4];
const v8 = [v7,F1];
[v3,v6,v6,[v8,v6,v8,v0,F1],v7];
[v7,v8,v7,v3];
("-1604200484").replaceAll(("-1604200484").e);
