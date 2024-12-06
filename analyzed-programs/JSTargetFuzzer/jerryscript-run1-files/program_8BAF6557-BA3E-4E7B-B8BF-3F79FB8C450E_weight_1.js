function F0() {
    if (!new.target) { throw 'must be called with new'; }
    function F6(a8, a9, a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v12 = new F6(0.0, 1.966736164545426e+307, 0.3085697849422683, 0.3085697849422683);
    class C13 {
        static [0.0] = v12;
        static 2 = 1.966736164545426e+307;
        static 3224 = 0.3085697849422683;
        905;
        d;
        static 4096 = F6;
    }
    this.b = 1073741824;
}
new F0();
new F0();
new F0();
new Int16Array(5);
new Float32Array(64);
new Int32Array(10);
const v27 = [-1073741824,1014116506,2,-57460,-52570,416916837,-1633557183,13182];
try { v27.reduceRight(Symbol); } catch (e) {}
