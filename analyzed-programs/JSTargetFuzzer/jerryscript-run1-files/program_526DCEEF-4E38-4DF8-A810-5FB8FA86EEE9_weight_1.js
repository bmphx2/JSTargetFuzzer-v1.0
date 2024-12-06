function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F0;
}
new F0();
new F0();
new F0();
new Uint32Array(3064);
new F0(3301);
new Uint16Array(1);
4n | 268435439n;
