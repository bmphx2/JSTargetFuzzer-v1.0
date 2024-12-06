const v2 = new Int32Array(3);
const v5 = new Int32Array(2);
const v9 = [943620025];
const v10 = [-4294967295];
const o14 = {
    "f": 145,
    "c": v9,
    "b": 2,
    ...v9,
    ...14,
    valueOf() {
        this.d >>>= 3;
        return v9;
    },
};
Object.defineProperty(v10, "b", { enumerable: true, value: 14 });
v10.includes(1024);
const v16 = new Int32Array(145);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a19;
}
new F17(v5, v16);
new F17(v5, v2);
new F17(v2, v5);
("description")["repeat"]();
