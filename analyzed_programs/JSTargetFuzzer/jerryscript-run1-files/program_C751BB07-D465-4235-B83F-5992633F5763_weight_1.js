function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 24676;
}
const v3 = new F0();
let v4 = new F0();
v4 = v3;
async function* f5(a6, a7) {
    for (let v8 = 0; v8 < 32; v8++) {
        a6["p" + v8] = v8;
    }
    await a6;
    yield* a6;
    return v4;
}
f5(v4, v3);
const v15 = ~F0;
v4--;
const v17 = Math.pow(v15, -16);
v3 ** -16;
-F0;
v3 || F0;
const v21 = Math.tan(v15);
const v22 = new F0();
let v24 = 11;
function f26(a27, a28) {
    const o40 = {
        __proto__: v4,
        [v4]: v4,
        get d() {
            a27.h += a28;
            Object.defineProperty(this, this, { configurable: true, enumerable: true, get: f5, set: f26 });
            typeof v17 === "boolean";
            try {
                super.toString();
            } catch(e37) {
            }
            return this;
        },
        get f() {
            v3[-4294967297] = a27;
            v21 >> this;
            return v24;
        },
    };
    return o40;
}
const v41 = f26(v4, f26, v17, v17, Math);
const v42 = f26(v3, f26);
f26(v22, v24);
function f44() {
    return v15;
}
let {"a":v45,"d":v46,"h":v47,} = v41;
try { new v45(v15, v42, f44, f44); } catch (e) {}
[1,5,2067532152,-1073741824,-4096];
[-415789373,-1073741824,-9007199254740992,2,10000,256,9007199254740990];
[-16];
v24 = v15;
f26(v41, -4294967297);
new f26(v4, f44);
const v61 = new Date();
v61.setMonth();
