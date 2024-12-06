const v10 = [11n,11n,11n,-1.0,[10000n]];
[10000n,v10,v10,-1.0];
const v16 = [-9223372036854775807];
function f18() {
    return f18;
}
const v19 = f18();
const o20 = {
    "defineProperty": v19,
};
const v22 = new Proxy(v16, o20);
for (let v23 = 0; v23 < 5; v23++) {
    Object.defineProperty(v22, v23, { writable: true, configurable: true, enumerable: true, value: 16 });
}
`multiline${7}bigint`;
async function f26(a27, a28) {
    const o30 = {
        p() {
            return this;
        },
    };
    return a28;
}
