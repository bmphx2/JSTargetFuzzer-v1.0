new Float32Array(0);
new Int8Array(4051);
new Int32Array(14);
function f15() {
}
new Uint8Array(0);
for (let v27 = 0; v27 < 5; v27++) {
    const v30 = gc(10000);
    const v31 = `
        function F32(a34, a35, a36, a37) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = a36;
            this.c = v27;
        }
        new F32(0.0, 63703n, 4.0, v30);
        const v39 = new F32(4.0, -2147483649n, -9.720861708692185, F32);
        new F32(0.0, 63703n, -9.720861708692185, v39);
    `;
    eval(v31);
}
let v45 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v47 = new Int32Array(127);
v45 /= v47;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
