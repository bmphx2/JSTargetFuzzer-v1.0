class C3 {
    constructor(a5) {
        let v4 = this;
        v4 = a5;
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.e = v4;
            this.d = -1000000.0;
            this.g = a8;
        }
        new F6("e", a5);
        const v11 = new F6(a5, v4);
        new F6(v4, v11);
    }
}
const v13 = new C3(-1000000.0, -18680, -1000000.0, -1000000.0);
const v14 = new C3(-18680);
const v15 = new C3(v13);
[v14,"e"];
[C3,v13];
[v14,v15,C3];
const v24 = new Uint32Array(40957);
let v26 = BigUint64Array;
let v27 = new v26(1, "valueOf", "ab", "d");
let v28 = 253;
[v28,,v26,v27] = v24;
try { v26["abs"](40957, v28, v26); } catch (e) {}
new Uint16Array(v28, Uint16Array);
for (let i41 = 0; i41 < 2; i41++) {
    new Float32Array(Float32Array, Float32Array, Float32Array);
    const o52 = {
        set g(a50) {
            try { a50(); } catch (e) {}
        },
    };
    o52.g = C3;
    const v53 = new Function("x");
    v53.a;
}
Function();
