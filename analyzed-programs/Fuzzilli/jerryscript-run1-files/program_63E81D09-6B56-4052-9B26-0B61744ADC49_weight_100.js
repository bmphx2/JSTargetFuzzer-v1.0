new Int16Array(255);
new Uint8Array(257);
new Int8Array(4);
class C18 extends Int8Array {
    static n(a20, a21) {
        this[super.some(a21, a20)] -= 10;
        return a20;
    }
}
new C18();
new C18();
new C18();
