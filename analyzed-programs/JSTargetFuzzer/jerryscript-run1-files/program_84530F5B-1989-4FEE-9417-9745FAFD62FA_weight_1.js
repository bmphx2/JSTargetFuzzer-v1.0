function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2;
    this.c = -2;
}
const v3 = new F0();
new F0();
new F0();
const v13 = [v3,"5",[-12,-65535],-12,257];
[F0,v13,v13,"5",F0];
let v15 = undefined;
const o18 = {
    get search() {
        return v15 = arguments;
    },
};
const o19 = {
    ...v3,
};
