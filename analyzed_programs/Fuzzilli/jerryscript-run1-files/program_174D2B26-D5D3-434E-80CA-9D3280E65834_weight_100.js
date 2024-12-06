function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 8;
    this.h = 8;
}
new F0();
new F0();
new F0();
([[]])["unshift"]();
