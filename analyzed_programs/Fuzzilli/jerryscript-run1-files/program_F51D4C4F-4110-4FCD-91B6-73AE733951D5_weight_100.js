class C8 {
    static {
        try { this.n("o", "o", "1073741825", this, this); } catch (e) {}
        new Float32Array(1);
        new Float64Array(4096);
        new Int8Array(2316);
    }
    static g;
}
const v20 = new C8();
new C8();
new C8();
function f26() {
    return 7n;
}
let v30;
try { v30 = ("1073741825").trimEnd(); } catch (e) {}
let v31;
try { v31 = new v30("undefined", "valueOf", false, v30); } catch (e) {}
const t19 = "o";
t19[v31] = v31;
C8[127] = v20;
