new Int8Array(3534);
new Uint8ClampedArray(3429);
new Uint16Array(4096);
const v12 = [536870912n];
const v13 = [536870912n,10n,4096,4096];
let v14;
try { v14 = v13.toLocaleString(); } catch (e) {}
const v16 = v13["keys"]();
v12[v16] = Uint8ClampedArray;
try { v16(v14, 536870912n, 10n, Int8Array, Uint8ClampedArray); } catch (e) {}
[v13];
const o24 = {
    set h(a20) {
        ([[]]).toLocaleString(a20, this);
    },
};
