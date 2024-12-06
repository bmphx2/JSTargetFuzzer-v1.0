const t0 = 65537;
t0.f = 536870889;
[1613252431,-49238,536870888,-27114,268435456];
[65536,-10,11,1073741823,6026,1073741824];
const v10 = [-3,13798,-65536];
[1.0601780978949467e+308,-1000.0];
[0.3728299507899765,0.9281637020845991,-162.3852563895516,-1000000000000.0];
function f14(a15, a16, a17) {
    'use strict';
    const v18 = a16 in v10;
    let v20 = -2;
    Math.log10(v20);
    let v22 = v20--;
    Math.acosh(v22);
    const v24 = v20--;
    Math.log1p(v22);
    v22++;
    Math.fround(v24);
    return v18;
}
f14(65537, 1000000000.0, 1000000000.0);
const v29 = [-51.8712340264027,-1.7976931348623157e+308,390757.5891619206,9.032703040033509e+307];
const o37 = {
    "apply": f14,
    "call": Number,
    "construct": f14,
    "defineProperty": Number,
    "deleteProperty": Number,
    "get": Number,
    "getOwnPropertyDescriptor": Number,
    "getPrototypeOf": f14,
    "has": Number,
    "isExtensible": Number,
    "ownKeys": Number,
    "set": Number,
    "setPrototypeOf": f14,
};
new Proxy(v29, o37);
Number["isSafeInteger"]();
