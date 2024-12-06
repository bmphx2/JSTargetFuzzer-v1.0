function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
}
new F3(128);
new F3(-1073741824);
new F3(-1073741824);
const o16 = {
};
const o20 = {
    set g(a18) {
    },
    get g() {
        return this;
    },
};
const v22 = new Proxy(Date, o16);
new v22();
