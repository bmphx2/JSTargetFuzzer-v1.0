const v0 = /a\fb\nc\rd\te\vf(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10+/gisu;
const v1 = /Nb(\xed\xb0\x80)\x01/dum;
const v2 = /3/gydisu;
[1,1681269093,-536870912,-1073741824,536870888,1324506266,13,65535];
const v4 = [9007199254740990,32681,-684613335,0,4294967295,8,-227033334];
const v5 = [127,-36910,-497729235,-47771,10];
class C6 {
    a = v1;
    constructor(a8, a9) {
        try { new a9(this, v4, a8, a9, v1); } catch (e) {}
        try {
            super.setUint16(this, v1);
        } catch(e12) {
        }
    }
    p(a14, a15, a16, a17) {
        v5[2] = v0;
        super.g = v2;
        this.a;
        return this;
    }
}
new C6(v1, v5);
const v20 = new C6(v5, v1);
new C6(C6, v20);
for (let v31 = 0; v31 < 32; v31++) {
    v20["p" + v31] = v31;
}
