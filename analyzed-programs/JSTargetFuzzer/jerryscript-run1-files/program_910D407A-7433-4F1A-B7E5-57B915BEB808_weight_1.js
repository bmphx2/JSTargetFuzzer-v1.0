function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 914143206;
    this.f = 914143206;
}
new F0();
const v4 = new F0();
new F0();
const v8 = new Uint8ClampedArray(257);
new Uint32Array(4);
const v15 = `
    v4[Uint16Array] = Uint16Array;
    delete v8[-1];
`;
eval(v15);
const v19 = [943620025];
const v20 = [-4294967295];
const o24 = {
    valueOf() {
        this.d >>>= -1;
        return v19;
    },
};
Object.defineProperty(v20, "b", { enumerable: true, value: 14 });
v19.includes(1024);
new Uint16Array(2);
do {
} while (false)
