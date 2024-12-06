function f0() {
}
function f1() {
    return f0;
}
const v4 = new Uint32Array(5);
const v7 = new Uint8Array(256);
function f10(a11, a12, a13) {
    const o14 = {
        536870887: a12,
        [Uint32Array]: v7,
    };
    return o14;
}
const v15 = f10(Uint8Array, v4, 29);
f10(f0, f10(v15, v15, 256), 256);
new Uint8Array(29);
typeof Uint8Array === "function";
v15.length = 1;
const v27 = (16).__proto__;
delete v27[v27];
