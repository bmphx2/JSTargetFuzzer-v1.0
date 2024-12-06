const v3 = [-536870912,-536870912];
[[-11485,-11485,v3,v3,-11485],v3,v3,-11485];
function f6() {
    return 4;
}
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    class C15 {
    }
    function f16() {
        return C15;
    }
    const v17 = new C15();
    class C18 extends f16 {
        constructor(a20, a21, a22, a23) {
            try {
                return v17;
            } catch(e24) {
            }
        }
    }
    new C18();
    this.g = v3;
    this.b = "flags";
}
new F10(-536870912, "b", "flags");
new F10(4, "b", "flags");
new F10(-536870912, "function", "flags");
function F29() {
    if (!new.target) { throw 'must be called with new'; }
    function f31(a32) {
        try { new a32(); } catch (e) {}
        return a32;
    }
    f31(F29);
}
new F29();
