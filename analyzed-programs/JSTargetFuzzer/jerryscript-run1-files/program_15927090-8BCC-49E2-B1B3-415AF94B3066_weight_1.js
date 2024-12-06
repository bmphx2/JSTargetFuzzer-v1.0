const v1 = new WeakSet();
let v2 = 32976n;
function f5(a6) {
    const o11 = {
        "d": v2,
        ...v1,
        __proto__: v1,
        ...v1,
        get h() {
            this.valueOf = -37626n;
            v1[9];
            v2 = -37626n;
            let {"b":v9,"d":v10,} = this;
            return v9;
        },
    };
    return o11;
}
f5(23294n);
f5(23294n);
f5(v2);
const v23 = new Int16Array(65535);
const v26 = new Uint32Array(64);
new Int8Array(1700, 65535);
const o30 = {
};
const v32 = new Proxy(v26, o30);
let v34;
try { v34 = v32["valueOf"](Uint32Array, Uint32Array, v32, v26); } catch (e) {}
const v35 = [v34,-36134n,v34,Uint32Array];
[v32,1700,v35,v23,v35];
const v37 = [-65536n];
try { v34(v37); } catch (e) {}
