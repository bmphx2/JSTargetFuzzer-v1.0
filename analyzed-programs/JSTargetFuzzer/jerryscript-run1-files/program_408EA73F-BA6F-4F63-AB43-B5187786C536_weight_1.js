function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
}
new F3(1024n);
new F3(1024n);
const v8 = new F3(1073741824n);
new Uint8Array(512);
new Float32Array(59);
const v17 = new Uint16Array(128);
let v18 = 0;
while (v18 < 4) {
    const v22 = v17["map"](59, "map", ..."map", ..."map", ..."map");
    const t12 = "map";
    t12.length += 128;
    v22.h = v8;
    v18++;
}
