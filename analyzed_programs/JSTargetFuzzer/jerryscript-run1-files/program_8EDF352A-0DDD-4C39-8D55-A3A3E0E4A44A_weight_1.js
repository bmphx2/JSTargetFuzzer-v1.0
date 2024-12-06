function f3() {
    return 4294967296;
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    a6.a = a6;
    this.b = a6;
}
const v7 = new F4(-4294967296);
const v8 = new F4(256);
const v9 = new F4(256);
const v10 = [4294967296,v8,v8,v7];
const v11 = [v7];
const v12 = [v7,v11,v8,v7,v11];
async function f16(a17, a18, a19) {
    let v23;
    try { v23 = a17(1073741824, a18); } catch (e) {}
    let v27 = ArrayBuffer;
    v27 = a18;
    function F28(a30, a31, a32, a33) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = -9;
        this.g = v10;
        this.d = 51606;
    }
    new F28(a19, f16, v9, a19);
    new F28(-2527, 256, v9, v12);
    new F28(a17, 36199, a18, v23);
    const v38 = new v27(-4294967296);
    new Int32Array(v38);
    return v27;
}
f16();
