const v1 = new Date();
const o6 = {
    valueOf() {
        v1[256];
        return -128;
    },
};
new Int32Array(8);
new BigUint64Array(115);
new Uint32Array(9);
class C17 {
}
const v18 = new Int32Array();
([v18,C17]).slice();
