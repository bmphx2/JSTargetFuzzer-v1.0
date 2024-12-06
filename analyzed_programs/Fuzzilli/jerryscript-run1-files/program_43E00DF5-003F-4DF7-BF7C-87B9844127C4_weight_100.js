function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    a14.f = a12;
    a14.d = "boolean";
}
const v15 = new F9("R9F0", -268435456n, "boolean", "R9F0");
new F9(-268435456n, -268435456n, v15, "boolean");
new F9(10n, -268435456n, "R9F0", "-7392");
class C18 {
    static set c(a20) {
        (a20 = this).__proto__;
    }
}
