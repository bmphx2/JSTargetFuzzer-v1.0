function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -12;
    this.d = a5;
    this.h = a5;
}
new F3(-12);
new F3(-12);
new F3(-54792);
const o23 = {
    n(a20, a21) {
        for (const v22 of a20) {
        }
        return this;
    },
};
try { o23.n(o23, o23); } catch (e) {}
const v28 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
try { v28("o"); } catch (e) {}
