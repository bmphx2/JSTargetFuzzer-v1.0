function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a5;
    a5.f = 9;
    this.d = 9;
}
const v6 = new F3(1429820563);
const v7 = new F3(13646);
const v8 = new F3(13646);
const v9 = v8[12];
delete v7[v9];
try { v9.valueOf(F3, 9, v7, v9); } catch (e) {}
function f15(a16, a17, a18) {
    const o30 = {
        [1429820563]: a17,
        get b() {
            let v20;
            try { v20 = a18(this, a18, 1429820563, this, this, this, v9); } catch (e) {}
            super.g = this;
            new Uint8Array(v20);
            new Float64Array(64);
            new Uint32Array(4096, Uint32Array, Uint32Array, Uint32Array);
            return a16;
        },
    };
    return -10;
}
const v31 = f15(1429820563, v8, v7);
f15(v31, v8, f15);
f15(13646, v6, v31);
/4(?:a?)?/gsu;
