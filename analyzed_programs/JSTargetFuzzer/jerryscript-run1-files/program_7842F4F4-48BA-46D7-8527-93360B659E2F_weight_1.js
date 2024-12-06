function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a9;
    this.g = a9;
    this.h = a8;
}
const v11 = new F6(65536, 8, 65536);
const v12 = new F6(8, 8, v11);
const v13 = new F6(65536, 1106405937, 7);
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a17;
}
new F14(v12, v11, v12, v11);
new F14(v12, v11, v13, v12);
new F14(v11, v12, v12, v11);
const v25 = new Float64Array(3077, 3077, 3077);
const v26 = [3077,v25];
const v27 = v25[1510131433];
v26.concat(v27 << v25, v27);
