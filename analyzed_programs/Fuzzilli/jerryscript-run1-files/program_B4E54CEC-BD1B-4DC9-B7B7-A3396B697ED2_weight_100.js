const v5 = new Uint32Array(255);
new BigInt64Array(255);
const v11 = new BigInt64Array(584);
let v12;
try { v12 = v11.subarray(-14, -14); } catch (e) {}
const v13 = new Uint32Array(v12);
delete v5?.byteOffset;
const v16 = Symbol.toPrimitive;
const o24 = {
    [v16]() {
        v13.__proto__;
        let [v19,v20,v21,...v22] = v13;
        return -14;
    },
};
