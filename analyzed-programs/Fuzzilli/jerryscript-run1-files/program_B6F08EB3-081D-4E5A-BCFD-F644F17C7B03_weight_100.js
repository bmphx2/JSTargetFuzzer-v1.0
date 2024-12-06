[];
new Float64Array(3399);
new Float32Array(0);
new Uint8ClampedArray(8);
[-2.829879596684035e+307,3.50703303208832e+307,1.7976931348623157e+308,-1.0];
[5.0,261660.91729812324,1.7127192179904172e+308,-6.735327748010887,-3.880845629525016,0.17677108212730397,-2.0,4.0,1000000.0,-4.49882729262872];
[99913.07964995783,990.6587188659596,0.9414219184126613,1.0,-1000000000.0,122.18669573147781,2.0,-6.116889282676976,-1e-15,753.1610921225083];
const v18 = new Uint16Array(15);
const v21 = new Int16Array(368);
let v22 = 4096;
new Int16Array(v22);
function f25(a26, a27, a28, a29) {
    const o34 = {
        get d() {
            return v18;
        },
        "g": Int16Array,
        "e": v21,
        "d": v18,
        "a": a28,
    };
    return o34;
}
f25(v22, v18, 15, v22);
f25(15, Uint16Array, v22, 368);
f25(v22, v18, 15, 368);
368 + v21;
for (let i40 = 0; i40 < 9; i40++) {
    v22 = v22;
    v22 <<= i40;
    const o46 = {
        "call": f25,
        "construct": f25,
        "deleteProperty": f25,
        "get": 3399,
        "getOwnPropertyDescriptor": f25,
        "has": f25,
        "isExtensible": f25,
        "ownKeys": f25,
        "preventExtensions": f25,
        "set": f25,
        "setPrototypeOf": f25,
    };
    new Proxy(v21, o46);
}
