const v5 = new Array(257);
const v6 = ["undefined"];
const v7 = ["undefined","random",v5];
const v8 = [v7,v7,v6,v6,"random"];
const v9 = [257,v8];
const o10 = {
};
const v12 = new Proxy(Array, o10);
v12(..."random", ...v7, Proxy, v12);
[257,v8,Array];
[v9,Array,"7",v5];
let v17 = -1;
const v19 = [v17,999197796,v17,999197796,999197796];
let v20 = [v17,v19,-1491302985,v19];
[v20,v20];
class C25 {
    valueOf(a27, a28) {
        let v29;
        try { v29 = new a28(a27, -1491302985, this); } catch (e) {}
        ({"b":v20,"e":a27,} = v29);
        this[512] = 512;
        return a27;
    }
    static n(a31, a32, a33, a34) {
        try {
            super.p();
        } catch(e36) {
        }
        return this;
    }
}
const v37 = new C25();
new C25();
const v39 = new C25();
v17 >>= -1491302985 >>> v17;
async function f41(a42, a43) {
    await 512;
    return C25;
}
const v46 = f41(v39, 1403512483);
delete v37[250];
v46[-1491302985];
