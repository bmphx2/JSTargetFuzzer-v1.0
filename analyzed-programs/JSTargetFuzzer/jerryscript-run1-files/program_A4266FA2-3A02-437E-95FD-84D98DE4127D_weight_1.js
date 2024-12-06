function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = this;
}
new F3(512, 512);
new F3(9, 129);
new F3(9, F3);
[-3.359988347600466e+307,1e-15];
[-1000000.0,665275.586933112,1.0949188435435675e+308,736.2800129536745,1000000000.0];
[-1000000000.0,1.0,Infinity];
new Array(9);
const v27 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v37 = `
    Uint32Array >= Uint32Array;
    let v39;
    try { v39 = v27.join(v37); } catch (e) {}
    (-4294967297)[v39];
`;
eval(v37);
