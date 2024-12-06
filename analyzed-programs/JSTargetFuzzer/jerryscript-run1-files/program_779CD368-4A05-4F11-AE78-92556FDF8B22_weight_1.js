const v0 = [-715978752,268435441,46010,29516,-1350888472,2,-1232102534,-4294967297];
const v1 = [9223372036854775807,-11,536870912,131926848,46219,11,5246];
[-6493,-65537,369747334,-1024];
new Int16Array(163, v0, Int16Array);
const v8 = new Function(163);
const v11 = new Int8Array(48891);
function f12() {
}
const v13 = -Infinity;
let v14 = -807.6596022618603;
const v16 = [-1000000.0,f12,v14,-1000000.0];
[[v16,-1000000.0,v13,v16],f12,v14];
function* f22(a23, a24, a25, a26) {
    let v27;
    try { v27 = a25.padStart(a23, "object"); } catch (e) {}
    const o32 = {
        "construct": a24,
        [v27]() {
            try {
            } catch(e29) {
                return this;
                v14 = v13;
                try {
                    super.o(v8, this, "f", e29, v11);
                } catch(e31) {
                }
            }
        },
        "ownKeys": a25,
        "preventExtensions": v27,
    };
    new Proxy(a26, o32);
    yield* "object";
    return v16;
}
f22(v14, "f", "f", v1);
