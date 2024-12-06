function f7() {
    return "function";
}
const v8 = [-1000000.0,"function",-1000000.0,"function","function"];
const v9 = [-1000000.0,"function","function",f7];
[v8,-1000000.0,f7,v9,v9];
new Date([1073741823,-9007199254740992,64,-65535]);
new Uint32Array(4);
new Uint8Array(3);
new BigUint64Array(1);
([]).reduceRight(Date, "number");
