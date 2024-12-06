new BigUint64Array(4096);
new Int32Array(9);
new Uint8Array(4096);
const v15 = [4294967297,128,55693,7146,15,64,1,9007199254740992,15,1024];
function f17(a18, a19, a20, a21) {
    const o22 = {
        "b": a20,
        "d": a18,
    };
    return o22;
}
f17(13608, 5.0, 13608, 6);
const v24 = f17(4096, 5.0, 13608, 4096);
f17(512, 5.0, 6, 512);
const o30 = {
    "apply": f17,
    "construct": f17,
    "has": f17,
    "isExtensible": f17,
    "preventExtensions": f17,
};
new Proxy(v24, o30);
const v33 = new Uint16Array(v15, v15);
v15["splice"](1.6056728270117627e+307, v33, "splice");
