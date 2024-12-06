function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 5;
    this.h = 5;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
v5[65535] = v5;
const v9 = delete v3[-256];
const v10 = [v4,v5,v3,v5,v4];
const t11 = [v10,v4,v10,v10];
t11.valueOf = v9;
v5[-9007199254740991];
[F0];
class C23 {
    static o(a25, a26, a27) {
        return eval;
    }
}
