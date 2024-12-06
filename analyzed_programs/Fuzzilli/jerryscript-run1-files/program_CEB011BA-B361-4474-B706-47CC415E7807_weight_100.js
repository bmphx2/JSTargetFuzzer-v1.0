function f7() {
    return 1000n;
}
const o13 = {
    valueOf(a12) {
        this[a12] = this;
        return this;
    },
};
