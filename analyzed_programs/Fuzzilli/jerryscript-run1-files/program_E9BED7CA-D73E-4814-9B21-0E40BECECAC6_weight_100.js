const v1 = [false,false,false,false,false];
const v2 = [v1];
const v3 = [v2,v2,false];
class C4 {
    constructor(a6, a7) {
        this.length = 0;
        new Uint8ClampedArray(4);
        new Int16Array(4);
        new Uint32Array(6);
    }
}
const v18 = new C4(false, v2);
new C4(v3, v1);
new C4(v3, v3);
const v24 = new Uint32Array(1024);
const v27 = new Int16Array(52);
new Uint8ClampedArray(1);
delete v27[16];
const v32 = v18.b;
const t17 = 1024;
t17[6] = v27;
Object.defineProperty(v2, 56110074, { configurable: true, value: v27 });
for (const v33 of v2) {
    v3.length <<= 1;
    let v34;
    try { v34 = v32(v24, v27, v33); } catch (e) {}
    Object.defineProperty(C4, v34, { enumerable: true, value: v34 });
}
v2[Symbol.replace];
