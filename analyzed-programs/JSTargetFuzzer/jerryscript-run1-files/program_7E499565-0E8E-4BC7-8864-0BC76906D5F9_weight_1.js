class C3 {
    static #m(a5, a6) {
        this.b |= a5;
        return this;
    }
    constructor(a8) {
        for (let v9 = 0; v9 < 32; v9++) {
            this["p" + v9] = v9;
        }
        let v12;
        try {
        const t0 = -4294967297;
        v12 = t0(512, 512);
        } catch (e) {}
        const v13 = [this,v12,this,512,v12];
        [v13,a8,v13,a8];
        [-12,-4294967297];
    }
}
new C3(512);
new C3(512);
new C3(512);
const v21 = new Float32Array(14);
new Uint32Array(8);
const v27 = new BigUint64Array(9);
const v29 = [Uint32Array,BigUint64Array];
Reflect.apply(v27.reduceRight, v27, v29);
const v32 = `
    const v36 = 1073741824 || 1.0;
    const v37 = v36 - v36;
    Math.sin(1073741824);
    Math.sin(v37);
    v21 * 1.0;
    Math.round(v36);
    v36 ^ v21;
`;
eval(v32);
