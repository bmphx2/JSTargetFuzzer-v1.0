class C3 {
    static set h(a5) {
        const v6 = ("object")[this];
        const o13 = {
            set a(a10) {
                let v11;
                try { v11 = v6(this); } catch (e) {}
                let v12;
                try { v12 = v6(v11, this); } catch (e) {}
                const t9 = "bigint";
                t9[256] = v12;
            },
            "maxByteLength": 256,
        };
        const v15 = new SharedArrayBuffer(15, o13);
        new BigInt64Array(v15);
    }
}
new C3();
const v19 = new C3();
const v20 = new C3();
class C22 {
    [v20] = "object";
    [-2] = v19;
}
new C22();
new C22();
new C22();
new Uint16Array(2573);
new Int32Array(5);
new Int8Array(0);
function F37(a39) {
    if (!new.target) { throw 'must be called with new'; }
}
const v40 = new F37(F37);
const v42 = v40[268435456];
switch (8) {
    case v42:
        function F43(a45, a46) {
            if (!new.target) { throw 'must be called with new'; }
            a46(F43);
        }
        break;
}
