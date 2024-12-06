function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -1;
}
new F0();
new F0();
new F0();
let v14 = -1992735215;
function f15(a16, a17) {
    const o33 = {
        "d": a16,
        set b(a19) {
            let v20;
            try { v20 = a19(a19, this); } catch (e) {}
            const v22 = new Float32Array(Float32Array);
            function f23(a24, a25, a26, a27) {
                return a25;
            }
            v22.reduce(f23);
            v14 = a17;
            v20.valueOf = a19;
        },
        get c() {
            const v30 = [this];
            const v31 = [545904634,a16,v30,this,v30];
            [v31,a16,v31];
            return a17;
        },
    };
    return o33;
}
f15(638957980, v14);
f15(v14, 545904634);
f15(v14, v14);
new Int32Array(249);
new Int32Array(2380);
const v45 = new Float32Array(3269);
v45[v45] = v45;
class C47 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C47();
new C47();
new C47();
