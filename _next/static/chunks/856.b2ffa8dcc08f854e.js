(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [856],
  {
    98099: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      var v = l(97117);
      function writeUint16BE(i, c, l) {
        return (
          void 0 === c && (c = new Uint8Array(2)),
          void 0 === l && (l = 0),
          (c[l + 0] = i >>> 8),
          (c[l + 1] = i >>> 0),
          c
        );
      }
      function writeUint16LE(i, c, l) {
        return (
          void 0 === c && (c = new Uint8Array(2)),
          void 0 === l && (l = 0),
          (c[l + 0] = i >>> 0),
          (c[l + 1] = i >>> 8),
          c
        );
      }
      function readInt32BE(i, c) {
        return (
          void 0 === c && (c = 0),
          (i[c] << 24) | (i[c + 1] << 16) | (i[c + 2] << 8) | i[c + 3]
        );
      }
      function readUint32BE(i, c) {
        return (
          void 0 === c && (c = 0),
          ((i[c] << 24) | (i[c + 1] << 16) | (i[c + 2] << 8) | i[c + 3]) >>> 0
        );
      }
      function readInt32LE(i, c) {
        return (
          void 0 === c && (c = 0),
          (i[c + 3] << 24) | (i[c + 2] << 16) | (i[c + 1] << 8) | i[c]
        );
      }
      function readUint32LE(i, c) {
        return (
          void 0 === c && (c = 0),
          ((i[c + 3] << 24) | (i[c + 2] << 16) | (i[c + 1] << 8) | i[c]) >>> 0
        );
      }
      function writeUint32BE(i, c, l) {
        return (
          void 0 === c && (c = new Uint8Array(4)),
          void 0 === l && (l = 0),
          (c[l + 0] = i >>> 24),
          (c[l + 1] = i >>> 16),
          (c[l + 2] = i >>> 8),
          (c[l + 3] = i >>> 0),
          c
        );
      }
      function writeUint32LE(i, c, l) {
        return (
          void 0 === c && (c = new Uint8Array(4)),
          void 0 === l && (l = 0),
          (c[l + 0] = i >>> 0),
          (c[l + 1] = i >>> 8),
          (c[l + 2] = i >>> 16),
          (c[l + 3] = i >>> 24),
          c
        );
      }
      function writeUint64BE(i, c, l) {
        return (
          void 0 === c && (c = new Uint8Array(8)),
          void 0 === l && (l = 0),
          writeUint32BE((i / 4294967296) >>> 0, c, l),
          writeUint32BE(i >>> 0, c, l + 4),
          c
        );
      }
      function writeUint64LE(i, c, l) {
        return (
          void 0 === c && (c = new Uint8Array(8)),
          void 0 === l && (l = 0),
          writeUint32LE(i >>> 0, c, l),
          writeUint32LE((i / 4294967296) >>> 0, c, l + 4),
          c
        );
      }
      (c.readInt16BE = function (i, c) {
        return (
          void 0 === c && (c = 0), (((i[c + 0] << 8) | i[c + 1]) << 16) >> 16
        );
      }),
        (c.readUint16BE = function (i, c) {
          return void 0 === c && (c = 0), ((i[c + 0] << 8) | i[c + 1]) >>> 0;
        }),
        (c.readInt16LE = function (i, c) {
          return (
            void 0 === c && (c = 0), (((i[c + 1] << 8) | i[c]) << 16) >> 16
          );
        }),
        (c.readUint16LE = function (i, c) {
          return void 0 === c && (c = 0), ((i[c + 1] << 8) | i[c]) >>> 0;
        }),
        (c.writeUint16BE = writeUint16BE),
        (c.writeInt16BE = writeUint16BE),
        (c.writeUint16LE = writeUint16LE),
        (c.writeInt16LE = writeUint16LE),
        (c.readInt32BE = readInt32BE),
        (c.readUint32BE = readUint32BE),
        (c.readInt32LE = readInt32LE),
        (c.readUint32LE = readUint32LE),
        (c.writeUint32BE = writeUint32BE),
        (c.writeInt32BE = writeUint32BE),
        (c.writeUint32LE = writeUint32LE),
        (c.writeInt32LE = writeUint32LE),
        (c.readInt64BE = function (i, c) {
          void 0 === c && (c = 0);
          var l = readInt32BE(i, c),
            v = readInt32BE(i, c + 4);
          return 4294967296 * l + v - (v >> 31) * 4294967296;
        }),
        (c.readUint64BE = function (i, c) {
          return (
            void 0 === c && (c = 0),
            4294967296 * readUint32BE(i, c) + readUint32BE(i, c + 4)
          );
        }),
        (c.readInt64LE = function (i, c) {
          void 0 === c && (c = 0);
          var l = readInt32LE(i, c);
          return (
            4294967296 * readInt32LE(i, c + 4) + l - (l >> 31) * 4294967296
          );
        }),
        (c.readUint64LE = function (i, c) {
          void 0 === c && (c = 0);
          var l = readUint32LE(i, c);
          return 4294967296 * readUint32LE(i, c + 4) + l;
        }),
        (c.writeUint64BE = writeUint64BE),
        (c.writeInt64BE = writeUint64BE),
        (c.writeUint64LE = writeUint64LE),
        (c.writeInt64LE = writeUint64LE),
        (c.readUintBE = function (i, c, l) {
          if ((void 0 === l && (l = 0), i % 8 != 0))
            throw Error("readUintBE supports only bitLengths divisible by 8");
          if (i / 8 > c.length - l)
            throw Error(
              "readUintBE: array is too short for the given bitLength"
            );
          for (var v = 0, E = 1, C = i / 8 + l - 1; C >= l; C--)
            (v += c[C] * E), (E *= 256);
          return v;
        }),
        (c.readUintLE = function (i, c, l) {
          if ((void 0 === l && (l = 0), i % 8 != 0))
            throw Error("readUintLE supports only bitLengths divisible by 8");
          if (i / 8 > c.length - l)
            throw Error(
              "readUintLE: array is too short for the given bitLength"
            );
          for (var v = 0, E = 1, C = l; C < l + i / 8; C++)
            (v += c[C] * E), (E *= 256);
          return v;
        }),
        (c.writeUintBE = function (i, c, l, E) {
          if (
            (void 0 === l && (l = new Uint8Array(i / 8)),
            void 0 === E && (E = 0),
            i % 8 != 0)
          )
            throw Error("writeUintBE supports only bitLengths divisible by 8");
          if (!v.isSafeInteger(c))
            throw Error("writeUintBE value must be an integer");
          for (var C = 1, P = i / 8 + E - 1; P >= E; P--)
            (l[P] = (c / C) & 255), (C *= 256);
          return l;
        }),
        (c.writeUintLE = function (i, c, l, E) {
          if (
            (void 0 === l && (l = new Uint8Array(i / 8)),
            void 0 === E && (E = 0),
            i % 8 != 0)
          )
            throw Error("writeUintLE supports only bitLengths divisible by 8");
          if (!v.isSafeInteger(c))
            throw Error("writeUintLE value must be an integer");
          for (var C = 1, P = E; P < E + i / 8; P++)
            (l[P] = (c / C) & 255), (C *= 256);
          return l;
        }),
        (c.readFloat32BE = function (i, c) {
          return (
            void 0 === c && (c = 0),
            new DataView(i.buffer, i.byteOffset, i.byteLength).getFloat32(c)
          );
        }),
        (c.readFloat32LE = function (i, c) {
          return (
            void 0 === c && (c = 0),
            new DataView(i.buffer, i.byteOffset, i.byteLength).getFloat32(c, !0)
          );
        }),
        (c.readFloat64BE = function (i, c) {
          return (
            void 0 === c && (c = 0),
            new DataView(i.buffer, i.byteOffset, i.byteLength).getFloat64(c)
          );
        }),
        (c.readFloat64LE = function (i, c) {
          return (
            void 0 === c && (c = 0),
            new DataView(i.buffer, i.byteOffset, i.byteLength).getFloat64(c, !0)
          );
        }),
        (c.writeFloat32BE = function (i, c, l) {
          return (
            void 0 === c && (c = new Uint8Array(4)),
            void 0 === l && (l = 0),
            new DataView(c.buffer, c.byteOffset, c.byteLength).setFloat32(l, i),
            c
          );
        }),
        (c.writeFloat32LE = function (i, c, l) {
          return (
            void 0 === c && (c = new Uint8Array(4)),
            void 0 === l && (l = 0),
            new DataView(c.buffer, c.byteOffset, c.byteLength).setFloat32(
              l,
              i,
              !0
            ),
            c
          );
        }),
        (c.writeFloat64BE = function (i, c, l) {
          return (
            void 0 === c && (c = new Uint8Array(8)),
            void 0 === l && (l = 0),
            new DataView(c.buffer, c.byteOffset, c.byteLength).setFloat64(l, i),
            c
          );
        }),
        (c.writeFloat64LE = function (i, c, l) {
          return (
            void 0 === c && (c = new Uint8Array(8)),
            void 0 === l && (l = 0),
            new DataView(c.buffer, c.byteOffset, c.byteLength).setFloat64(
              l,
              i,
              !0
            ),
            c
          );
        });
    },
    25439: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      var v = l(98099),
        E = l(17309);
      function streamXOR(i, c, l, C, P) {
        if ((void 0 === P && (P = 0), 32 !== i.length))
          throw Error("ChaCha: key size must be 32 bytes");
        if (C.length < l.length)
          throw Error("ChaCha: destination is shorter than source");
        if (0 === P) {
          if (8 !== c.length && 12 !== c.length)
            throw Error("ChaCha nonce must be 8 or 12 bytes");
          (B = (M = new Uint8Array(16)).length - c.length), M.set(c, B);
        } else {
          if (16 !== c.length)
            throw Error("ChaCha nonce with counter must be 16 bytes");
          (M = c), (B = P);
        }
        for (var M, B, W = new Uint8Array(64), J = 0; J < l.length; J += 64) {
          !(function (i, c, l) {
            for (
              var E = (l[3] << 24) | (l[2] << 16) | (l[1] << 8) | l[0],
                C = (l[7] << 24) | (l[6] << 16) | (l[5] << 8) | l[4],
                P = (l[11] << 24) | (l[10] << 16) | (l[9] << 8) | l[8],
                M = (l[15] << 24) | (l[14] << 16) | (l[13] << 8) | l[12],
                B = (l[19] << 24) | (l[18] << 16) | (l[17] << 8) | l[16],
                W = (l[23] << 24) | (l[22] << 16) | (l[21] << 8) | l[20],
                J = (l[27] << 24) | (l[26] << 16) | (l[25] << 8) | l[24],
                X = (l[31] << 24) | (l[30] << 16) | (l[29] << 8) | l[28],
                Q = (c[3] << 24) | (c[2] << 16) | (c[1] << 8) | c[0],
                er = (c[7] << 24) | (c[6] << 16) | (c[5] << 8) | c[4],
                es = (c[11] << 24) | (c[10] << 16) | (c[9] << 8) | c[8],
                eo = (c[15] << 24) | (c[14] << 16) | (c[13] << 8) | c[12],
                ea = 1634760805,
                ec = 857760878,
                el = 2036477234,
                eh = 1797285236,
                ed = E,
                ep = C,
                eg = P,
                e_ = M,
                ey = B,
                ev = W,
                em = J,
                eb = X,
                ew = Q,
                eE = er,
                eD = es,
                eS = eo,
                eI = 0;
              eI < 20;
              eI += 2
            )
              (ew ^= ea = (ea + ed) | 0),
                (ed ^= ey = (ey + (ew = (ew >>> 16) | (ew << 16))) | 0),
                (ed = (ed >>> 20) | (ed << 12)),
                (eE ^= ec = (ec + ep) | 0),
                (ep ^= ev = (ev + (eE = (eE >>> 16) | (eE << 16))) | 0),
                (ep = (ep >>> 20) | (ep << 12)),
                (eD ^= el = (el + eg) | 0),
                (eg ^= em = (em + (eD = (eD >>> 16) | (eD << 16))) | 0),
                (eg = (eg >>> 20) | (eg << 12)),
                (eS ^= eh = (eh + e_) | 0),
                (e_ ^= eb = (eb + (eS = (eS >>> 16) | (eS << 16))) | 0),
                (e_ = (e_ >>> 20) | (e_ << 12)),
                (eD ^= el = (el + eg) | 0),
                (eg ^= em = (em + (eD = (eD >>> 24) | (eD << 8))) | 0),
                (eg = (eg >>> 25) | (eg << 7)),
                (eS ^= eh = (eh + e_) | 0),
                (e_ ^= eb = (eb + (eS = (eS >>> 24) | (eS << 8))) | 0),
                (e_ = (e_ >>> 25) | (e_ << 7)),
                (eE ^= ec = (ec + ep) | 0),
                (ep ^= ev = (ev + (eE = (eE >>> 24) | (eE << 8))) | 0),
                (ep = (ep >>> 25) | (ep << 7)),
                (ew ^= ea = (ea + ed) | 0),
                (ed ^= ey = (ey + (ew = (ew >>> 24) | (ew << 8))) | 0),
                (ed = (ed >>> 25) | (ed << 7)),
                (eS ^= ea = (ea + ep) | 0),
                (ep ^= em = (em + (eS = (eS >>> 16) | (eS << 16))) | 0),
                (ep = (ep >>> 20) | (ep << 12)),
                (ew ^= ec = (ec + eg) | 0),
                (eg ^= eb = (eb + (ew = (ew >>> 16) | (ew << 16))) | 0),
                (eg = (eg >>> 20) | (eg << 12)),
                (eE ^= el = (el + e_) | 0),
                (e_ ^= ey = (ey + (eE = (eE >>> 16) | (eE << 16))) | 0),
                (e_ = (e_ >>> 20) | (e_ << 12)),
                (eD ^= eh = (eh + ed) | 0),
                (ed ^= ev = (ev + (eD = (eD >>> 16) | (eD << 16))) | 0),
                (ed = (ed >>> 20) | (ed << 12)),
                (eE ^= el = (el + e_) | 0),
                (e_ ^= ey = (ey + (eE = (eE >>> 24) | (eE << 8))) | 0),
                (e_ = (e_ >>> 25) | (e_ << 7)),
                (eD ^= eh = (eh + ed) | 0),
                (ed ^= ev = (ev + (eD = (eD >>> 24) | (eD << 8))) | 0),
                (ed = (ed >>> 25) | (ed << 7)),
                (ew ^= ec = (ec + eg) | 0),
                (eg ^= eb = (eb + (ew = (ew >>> 24) | (ew << 8))) | 0),
                (eg = (eg >>> 25) | (eg << 7)),
                (eS ^= ea = (ea + ep) | 0),
                (ep ^= em = (em + (eS = (eS >>> 24) | (eS << 8))) | 0),
                (ep = (ep >>> 25) | (ep << 7));
            v.writeUint32LE((ea + 1634760805) | 0, i, 0),
              v.writeUint32LE((ec + 857760878) | 0, i, 4),
              v.writeUint32LE((el + 2036477234) | 0, i, 8),
              v.writeUint32LE((eh + 1797285236) | 0, i, 12),
              v.writeUint32LE((ed + E) | 0, i, 16),
              v.writeUint32LE((ep + C) | 0, i, 20),
              v.writeUint32LE((eg + P) | 0, i, 24),
              v.writeUint32LE((e_ + M) | 0, i, 28),
              v.writeUint32LE((ey + B) | 0, i, 32),
              v.writeUint32LE((ev + W) | 0, i, 36),
              v.writeUint32LE((em + J) | 0, i, 40),
              v.writeUint32LE((eb + X) | 0, i, 44),
              v.writeUint32LE((ew + Q) | 0, i, 48),
              v.writeUint32LE((eE + er) | 0, i, 52),
              v.writeUint32LE((eD + es) | 0, i, 56),
              v.writeUint32LE((eS + eo) | 0, i, 60);
          })(W, M, i);
          for (var X = J; X < J + 64 && X < l.length; X++)
            C[X] = l[X] ^ W[X - J];
          !(function (i, c, l) {
            for (var v = 1; l--; )
              (v = (v + (255 & i[c])) | 0), (i[c] = 255 & v), (v >>>= 8), c++;
            if (v > 0) throw Error("ChaCha: counter overflow");
          })(M, 0, B);
        }
        return E.wipe(W), 0 === P && E.wipe(M), C;
      }
      (c.streamXOR = streamXOR),
        (c.stream = function (i, c, l, v) {
          return void 0 === v && (v = 0), E.wipe(l), streamXOR(i, c, l, l, v);
        });
    },
    15501: function (i, c, l) {
      "use strict";
      var v = l(25439),
        E = l(63027),
        C = l(17309),
        P = l(98099),
        M = l(4153);
      (c.Cv = 32), (c.WH = 12), (c.pg = 16);
      var B = new Uint8Array(16),
        W = (function () {
          function ChaCha20Poly1305(i) {
            if (
              ((this.nonceLength = c.WH),
              (this.tagLength = c.pg),
              i.length !== c.Cv)
            )
              throw Error("ChaCha20Poly1305 needs 32-byte key");
            this._key = new Uint8Array(i);
          }
          return (
            (ChaCha20Poly1305.prototype.seal = function (i, c, l, E) {
              if (i.length > 16)
                throw Error("ChaCha20Poly1305: incorrect nonce length");
              var P,
                M = new Uint8Array(16);
              M.set(i, M.length - i.length);
              var B = new Uint8Array(32);
              v.stream(this._key, M, B, 4);
              var W = c.length + this.tagLength;
              if (E) {
                if (E.length !== W)
                  throw Error("ChaCha20Poly1305: incorrect destination length");
                P = E;
              } else P = new Uint8Array(W);
              return (
                v.streamXOR(this._key, M, c, P, 4),
                this._authenticate(
                  P.subarray(P.length - this.tagLength, P.length),
                  B,
                  P.subarray(0, P.length - this.tagLength),
                  l
                ),
                C.wipe(M),
                P
              );
            }),
            (ChaCha20Poly1305.prototype.open = function (i, c, l, E) {
              if (i.length > 16)
                throw Error("ChaCha20Poly1305: incorrect nonce length");
              if (c.length < this.tagLength) return null;
              var P,
                B = new Uint8Array(16);
              B.set(i, B.length - i.length);
              var W = new Uint8Array(32);
              v.stream(this._key, B, W, 4);
              var J = new Uint8Array(this.tagLength);
              if (
                (this._authenticate(
                  J,
                  W,
                  c.subarray(0, c.length - this.tagLength),
                  l
                ),
                !M.equal(J, c.subarray(c.length - this.tagLength, c.length)))
              )
                return null;
              var X = c.length - this.tagLength;
              if (E) {
                if (E.length !== X)
                  throw Error("ChaCha20Poly1305: incorrect destination length");
                P = E;
              } else P = new Uint8Array(X);
              return (
                v.streamXOR(
                  this._key,
                  B,
                  c.subarray(0, c.length - this.tagLength),
                  P,
                  4
                ),
                C.wipe(B),
                P
              );
            }),
            (ChaCha20Poly1305.prototype.clean = function () {
              return C.wipe(this._key), this;
            }),
            (ChaCha20Poly1305.prototype._authenticate = function (i, c, l, v) {
              var M = new E.Poly1305(c);
              v &&
                (M.update(v),
                v.length % 16 > 0 && M.update(B.subarray(v.length % 16))),
                M.update(l),
                l.length % 16 > 0 && M.update(B.subarray(l.length % 16));
              var W = new Uint8Array(8);
              v && P.writeUint64LE(v.length, W),
                M.update(W),
                P.writeUint64LE(l.length, W),
                M.update(W);
              for (var J = M.digest(), X = 0; X < J.length; X++) i[X] = J[X];
              M.clean(), C.wipe(J), C.wipe(W);
            }),
            ChaCha20Poly1305
          );
        })();
      c.OK = W;
    },
    4153: function (i, c) {
      "use strict";
      function compare(i, c) {
        if (i.length !== c.length) return 0;
        for (var l = 0, v = 0; v < i.length; v++) l |= i[v] ^ c[v];
        return 1 & ((l - 1) >>> 8);
      }
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.select = function (i, c, l) {
          return (~(i - 1) & c) | ((i - 1) & l);
        }),
        (c.lessOrEqual = function (i, c) {
          return (((0 | i) - (0 | c) - 1) >>> 31) & 1;
        }),
        (c.compare = compare),
        (c.equal = function (i, c) {
          return 0 !== i.length && 0 !== c.length && 0 !== compare(i, c);
        });
    },
    31050: function (i, c, l) {
      "use strict";
      (c.Xx = c._w = c.aP = c.KS = c.jQ = void 0), l(31416);
      let v = l(93350);
      function gf(i) {
        let c = new Float64Array(16);
        if (i) for (let l = 0; l < i.length; l++) c[l] = i[l];
        return c;
      }
      l(17309), (c.jQ = 64), (c.KS = 64), (c.aP = 32);
      let E = new Uint8Array(32);
      E[0] = 9;
      let C = gf(),
        P = gf([1]),
        M =
          (gf([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          gf([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ])),
        B = gf([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        W = gf([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]);
      function set25519(i, c) {
        for (let l = 0; l < 16; l++) i[l] = 0 | c[l];
      }
      function car25519(i) {
        let c = 1;
        for (let l = 0; l < 16; l++) {
          let v = i[l] + c + 65535;
          (c = Math.floor(v / 65536)), (i[l] = v - 65536 * c);
        }
        i[0] += c - 1 + 37 * (c - 1);
      }
      function sel25519(i, c, l) {
        let v = ~(l - 1);
        for (let l = 0; l < 16; l++) {
          let E = v & (i[l] ^ c[l]);
          (i[l] ^= E), (c[l] ^= E);
        }
      }
      function pack25519(i, c) {
        let l = gf(),
          v = gf();
        for (let i = 0; i < 16; i++) v[i] = c[i];
        car25519(v), car25519(v), car25519(v);
        for (let i = 0; i < 2; i++) {
          l[0] = v[0] - 65517;
          for (let i = 1; i < 15; i++)
            (l[i] = v[i] - 65535 - ((l[i - 1] >> 16) & 1)), (l[i - 1] &= 65535);
          l[15] = v[15] - 32767 - ((l[14] >> 16) & 1);
          let i = (l[15] >> 16) & 1;
          (l[14] &= 65535), sel25519(v, l, 1 - i);
        }
        for (let c = 0; c < 16; c++)
          (i[2 * c] = 255 & v[c]), (i[2 * c + 1] = v[c] >> 8);
      }
      gf([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
      function add(i, c, l) {
        for (let v = 0; v < 16; v++) i[v] = c[v] + l[v];
      }
      function sub(i, c, l) {
        for (let v = 0; v < 16; v++) i[v] = c[v] - l[v];
      }
      function mul(i, c, l) {
        let v,
          E,
          C = 0,
          P = 0,
          M = 0,
          B = 0,
          W = 0,
          J = 0,
          X = 0,
          Q = 0,
          er = 0,
          es = 0,
          eo = 0,
          ea = 0,
          ec = 0,
          el = 0,
          eh = 0,
          ed = 0,
          ep = 0,
          eg = 0,
          e_ = 0,
          ey = 0,
          ev = 0,
          em = 0,
          eb = 0,
          ew = 0,
          eE = 0,
          eD = 0,
          eS = 0,
          eI = 0,
          ex = 0,
          eC = 0,
          eO = 0,
          eP = l[0],
          eA = l[1],
          eR = l[2],
          eN = l[3],
          eT = l[4],
          eU = l[5],
          ej = l[6],
          eL = l[7],
          eM = l[8],
          ek = l[9],
          ez = l[10],
          e$ = l[11],
          eH = l[12],
          eB = l[13],
          eF = l[14],
          eK = l[15];
        (C += (v = c[0]) * eP),
          (P += v * eA),
          (M += v * eR),
          (B += v * eN),
          (W += v * eT),
          (J += v * eU),
          (X += v * ej),
          (Q += v * eL),
          (er += v * eM),
          (es += v * ek),
          (eo += v * ez),
          (ea += v * e$),
          (ec += v * eH),
          (el += v * eB),
          (eh += v * eF),
          (ed += v * eK),
          (P += (v = c[1]) * eP),
          (M += v * eA),
          (B += v * eR),
          (W += v * eN),
          (J += v * eT),
          (X += v * eU),
          (Q += v * ej),
          (er += v * eL),
          (es += v * eM),
          (eo += v * ek),
          (ea += v * ez),
          (ec += v * e$),
          (el += v * eH),
          (eh += v * eB),
          (ed += v * eF),
          (ep += v * eK),
          (M += (v = c[2]) * eP),
          (B += v * eA),
          (W += v * eR),
          (J += v * eN),
          (X += v * eT),
          (Q += v * eU),
          (er += v * ej),
          (es += v * eL),
          (eo += v * eM),
          (ea += v * ek),
          (ec += v * ez),
          (el += v * e$),
          (eh += v * eH),
          (ed += v * eB),
          (ep += v * eF),
          (eg += v * eK),
          (B += (v = c[3]) * eP),
          (W += v * eA),
          (J += v * eR),
          (X += v * eN),
          (Q += v * eT),
          (er += v * eU),
          (es += v * ej),
          (eo += v * eL),
          (ea += v * eM),
          (ec += v * ek),
          (el += v * ez),
          (eh += v * e$),
          (ed += v * eH),
          (ep += v * eB),
          (eg += v * eF),
          (e_ += v * eK),
          (W += (v = c[4]) * eP),
          (J += v * eA),
          (X += v * eR),
          (Q += v * eN),
          (er += v * eT),
          (es += v * eU),
          (eo += v * ej),
          (ea += v * eL),
          (ec += v * eM),
          (el += v * ek),
          (eh += v * ez),
          (ed += v * e$),
          (ep += v * eH),
          (eg += v * eB),
          (e_ += v * eF),
          (ey += v * eK),
          (J += (v = c[5]) * eP),
          (X += v * eA),
          (Q += v * eR),
          (er += v * eN),
          (es += v * eT),
          (eo += v * eU),
          (ea += v * ej),
          (ec += v * eL),
          (el += v * eM),
          (eh += v * ek),
          (ed += v * ez),
          (ep += v * e$),
          (eg += v * eH),
          (e_ += v * eB),
          (ey += v * eF),
          (ev += v * eK),
          (X += (v = c[6]) * eP),
          (Q += v * eA),
          (er += v * eR),
          (es += v * eN),
          (eo += v * eT),
          (ea += v * eU),
          (ec += v * ej),
          (el += v * eL),
          (eh += v * eM),
          (ed += v * ek),
          (ep += v * ez),
          (eg += v * e$),
          (e_ += v * eH),
          (ey += v * eB),
          (ev += v * eF),
          (em += v * eK),
          (Q += (v = c[7]) * eP),
          (er += v * eA),
          (es += v * eR),
          (eo += v * eN),
          (ea += v * eT),
          (ec += v * eU),
          (el += v * ej),
          (eh += v * eL),
          (ed += v * eM),
          (ep += v * ek),
          (eg += v * ez),
          (e_ += v * e$),
          (ey += v * eH),
          (ev += v * eB),
          (em += v * eF),
          (eb += v * eK),
          (er += (v = c[8]) * eP),
          (es += v * eA),
          (eo += v * eR),
          (ea += v * eN),
          (ec += v * eT),
          (el += v * eU),
          (eh += v * ej),
          (ed += v * eL),
          (ep += v * eM),
          (eg += v * ek),
          (e_ += v * ez),
          (ey += v * e$),
          (ev += v * eH),
          (em += v * eB),
          (eb += v * eF),
          (ew += v * eK),
          (es += (v = c[9]) * eP),
          (eo += v * eA),
          (ea += v * eR),
          (ec += v * eN),
          (el += v * eT),
          (eh += v * eU),
          (ed += v * ej),
          (ep += v * eL),
          (eg += v * eM),
          (e_ += v * ek),
          (ey += v * ez),
          (ev += v * e$),
          (em += v * eH),
          (eb += v * eB),
          (ew += v * eF),
          (eE += v * eK),
          (eo += (v = c[10]) * eP),
          (ea += v * eA),
          (ec += v * eR),
          (el += v * eN),
          (eh += v * eT),
          (ed += v * eU),
          (ep += v * ej),
          (eg += v * eL),
          (e_ += v * eM),
          (ey += v * ek),
          (ev += v * ez),
          (em += v * e$),
          (eb += v * eH),
          (ew += v * eB),
          (eE += v * eF),
          (eD += v * eK),
          (ea += (v = c[11]) * eP),
          (ec += v * eA),
          (el += v * eR),
          (eh += v * eN),
          (ed += v * eT),
          (ep += v * eU),
          (eg += v * ej),
          (e_ += v * eL),
          (ey += v * eM),
          (ev += v * ek),
          (em += v * ez),
          (eb += v * e$),
          (ew += v * eH),
          (eE += v * eB),
          (eD += v * eF),
          (eS += v * eK),
          (ec += (v = c[12]) * eP),
          (el += v * eA),
          (eh += v * eR),
          (ed += v * eN),
          (ep += v * eT),
          (eg += v * eU),
          (e_ += v * ej),
          (ey += v * eL),
          (ev += v * eM),
          (em += v * ek),
          (eb += v * ez),
          (ew += v * e$),
          (eE += v * eH),
          (eD += v * eB),
          (eS += v * eF),
          (eI += v * eK),
          (el += (v = c[13]) * eP),
          (eh += v * eA),
          (ed += v * eR),
          (ep += v * eN),
          (eg += v * eT),
          (e_ += v * eU),
          (ey += v * ej),
          (ev += v * eL),
          (em += v * eM),
          (eb += v * ek),
          (ew += v * ez),
          (eE += v * e$),
          (eD += v * eH),
          (eS += v * eB),
          (eI += v * eF),
          (ex += v * eK),
          (eh += (v = c[14]) * eP),
          (ed += v * eA),
          (ep += v * eR),
          (eg += v * eN),
          (e_ += v * eT),
          (ey += v * eU),
          (ev += v * ej),
          (em += v * eL),
          (eb += v * eM),
          (ew += v * ek),
          (eE += v * ez),
          (eD += v * e$),
          (eS += v * eH),
          (eI += v * eB),
          (ex += v * eF),
          (eC += v * eK),
          (ed += (v = c[15]) * eP),
          (ep += v * eA),
          (eg += v * eR),
          (e_ += v * eN),
          (ey += v * eT),
          (ev += v * eU),
          (em += v * ej),
          (eb += v * eL),
          (ew += v * eM),
          (eE += v * ek),
          (eD += v * ez),
          (eS += v * e$),
          (eI += v * eH),
          (ex += v * eB),
          (eC += v * eF),
          (eO += v * eK),
          (C += 38 * ep),
          (P += 38 * eg),
          (M += 38 * e_),
          (B += 38 * ey),
          (W += 38 * ev),
          (J += 38 * em),
          (X += 38 * eb),
          (Q += 38 * ew),
          (er += 38 * eE),
          (es += 38 * eD),
          (eo += 38 * eS),
          (ea += 38 * eI),
          (ec += 38 * ex),
          (el += 38 * eC),
          (eh += 38 * eO),
          (E = Math.floor((v = C + (E = 1) + 65535) / 65536)),
          (C = v - 65536 * E),
          (E = Math.floor((v = P + E + 65535) / 65536)),
          (P = v - 65536 * E),
          (E = Math.floor((v = M + E + 65535) / 65536)),
          (M = v - 65536 * E),
          (E = Math.floor((v = B + E + 65535) / 65536)),
          (B = v - 65536 * E),
          (E = Math.floor((v = W + E + 65535) / 65536)),
          (W = v - 65536 * E),
          (E = Math.floor((v = J + E + 65535) / 65536)),
          (J = v - 65536 * E),
          (E = Math.floor((v = X + E + 65535) / 65536)),
          (X = v - 65536 * E),
          (E = Math.floor((v = Q + E + 65535) / 65536)),
          (Q = v - 65536 * E),
          (E = Math.floor((v = er + E + 65535) / 65536)),
          (er = v - 65536 * E),
          (E = Math.floor((v = es + E + 65535) / 65536)),
          (es = v - 65536 * E),
          (E = Math.floor((v = eo + E + 65535) / 65536)),
          (eo = v - 65536 * E),
          (E = Math.floor((v = ea + E + 65535) / 65536)),
          (ea = v - 65536 * E),
          (E = Math.floor((v = ec + E + 65535) / 65536)),
          (ec = v - 65536 * E),
          (E = Math.floor((v = el + E + 65535) / 65536)),
          (el = v - 65536 * E),
          (E = Math.floor((v = eh + E + 65535) / 65536)),
          (eh = v - 65536 * E),
          (E = Math.floor((v = ed + E + 65535) / 65536)),
          (ed = v - 65536 * E),
          (C += E - 1 + 37 * (E - 1)),
          (E = Math.floor((v = C + (E = 1) + 65535) / 65536)),
          (C = v - 65536 * E),
          (E = Math.floor((v = P + E + 65535) / 65536)),
          (P = v - 65536 * E),
          (E = Math.floor((v = M + E + 65535) / 65536)),
          (M = v - 65536 * E),
          (E = Math.floor((v = B + E + 65535) / 65536)),
          (B = v - 65536 * E),
          (E = Math.floor((v = W + E + 65535) / 65536)),
          (W = v - 65536 * E),
          (E = Math.floor((v = J + E + 65535) / 65536)),
          (J = v - 65536 * E),
          (E = Math.floor((v = X + E + 65535) / 65536)),
          (X = v - 65536 * E),
          (E = Math.floor((v = Q + E + 65535) / 65536)),
          (Q = v - 65536 * E),
          (E = Math.floor((v = er + E + 65535) / 65536)),
          (er = v - 65536 * E),
          (E = Math.floor((v = es + E + 65535) / 65536)),
          (es = v - 65536 * E),
          (E = Math.floor((v = eo + E + 65535) / 65536)),
          (eo = v - 65536 * E),
          (E = Math.floor((v = ea + E + 65535) / 65536)),
          (ea = v - 65536 * E),
          (E = Math.floor((v = ec + E + 65535) / 65536)),
          (ec = v - 65536 * E),
          (E = Math.floor((v = el + E + 65535) / 65536)),
          (el = v - 65536 * E),
          (E = Math.floor((v = eh + E + 65535) / 65536)),
          (eh = v - 65536 * E),
          (E = Math.floor((v = ed + E + 65535) / 65536)),
          (ed = v - 65536 * E),
          (C += E - 1 + 37 * (E - 1)),
          (i[0] = C),
          (i[1] = P),
          (i[2] = M),
          (i[3] = B),
          (i[4] = W),
          (i[5] = J),
          (i[6] = X),
          (i[7] = Q),
          (i[8] = er),
          (i[9] = es),
          (i[10] = eo),
          (i[11] = ea),
          (i[12] = ec),
          (i[13] = el),
          (i[14] = eh),
          (i[15] = ed);
      }
      function edadd(i, c) {
        let l = gf(),
          v = gf(),
          E = gf(),
          C = gf(),
          P = gf(),
          B = gf(),
          W = gf(),
          J = gf(),
          X = gf();
        sub(l, i[1], i[0]),
          sub(X, c[1], c[0]),
          mul(l, l, X),
          add(v, i[0], i[1]),
          add(X, c[0], c[1]),
          mul(v, v, X),
          mul(E, i[3], c[3]),
          mul(E, E, M),
          mul(C, i[2], c[2]),
          add(C, C, C),
          sub(P, v, l),
          sub(B, C, E),
          add(W, C, E),
          add(J, v, l),
          mul(i[0], P, B),
          mul(i[1], J, W),
          mul(i[2], W, B),
          mul(i[3], P, J);
      }
      function cswap(i, c, l) {
        for (let v = 0; v < 4; v++) sel25519(i[v], c[v], l);
      }
      function pack(i, c) {
        let l = gf(),
          v = gf(),
          E = gf();
        (function (i, c) {
          let l;
          let v = gf();
          for (l = 0; l < 16; l++) v[l] = c[l];
          for (l = 253; l >= 0; l--)
            mul(v, v, v), 2 !== l && 4 !== l && mul(v, v, c);
          for (l = 0; l < 16; l++) i[l] = v[l];
        })(E, c[2]),
          mul(l, c[0], E),
          mul(v, c[1], E),
          pack25519(i, v),
          (i[31] ^=
            (function (i) {
              let c = new Uint8Array(32);
              return pack25519(c, i), 1 & c[0];
            })(l) << 7);
      }
      function scalarbase(i, c) {
        let l = [gf(), gf(), gf(), gf()];
        set25519(l[0], B),
          set25519(l[1], W),
          set25519(l[2], P),
          mul(l[3], B, W),
          (function (i, c, l) {
            set25519(i[0], C),
              set25519(i[1], P),
              set25519(i[2], P),
              set25519(i[3], C);
            for (let v = 255; v >= 0; --v) {
              let E = (l[(v / 8) | 0] >> (7 & v)) & 1;
              cswap(i, c, E), edadd(c, i), edadd(i, i), cswap(i, c, E);
            }
          })(i, l, c);
      }
      c._w = function (i) {
        if (i.length !== c.aP)
          throw Error(`ed25519: seed must be ${c.aP} bytes`);
        let l = (0, v.hash)(i);
        (l[0] &= 248), (l[31] &= 127), (l[31] |= 64);
        let E = new Uint8Array(32),
          C = [gf(), gf(), gf(), gf()];
        scalarbase(C, l), pack(E, C);
        let P = new Uint8Array(64);
        return P.set(i), P.set(E, 32), { publicKey: E, secretKey: P };
      };
      let J = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function modL(i, c) {
        let l, v, E, C;
        for (v = 63; v >= 32; --v) {
          for (l = 0, E = v - 32, C = v - 12; E < C; ++E)
            (c[E] += l - 16 * c[v] * J[E - (v - 32)]),
              (l = Math.floor((c[E] + 128) / 256)),
              (c[E] -= 256 * l);
          (c[E] += l), (c[v] = 0);
        }
        for (E = 0, l = 0; E < 32; E++)
          (c[E] += l - (c[31] >> 4) * J[E]), (l = c[E] >> 8), (c[E] &= 255);
        for (E = 0; E < 32; E++) c[E] -= l * J[E];
        for (v = 0; v < 32; v++) (c[v + 1] += c[v] >> 8), (i[v] = 255 & c[v]);
      }
      function reduce(i) {
        let c = new Float64Array(64);
        for (let l = 0; l < 64; l++) c[l] = i[l];
        for (let c = 0; c < 64; c++) i[c] = 0;
        modL(i, c);
      }
      c.Xx = function (i, c) {
        let l = new Float64Array(64),
          E = [gf(), gf(), gf(), gf()],
          C = (0, v.hash)(i.subarray(0, 32));
        (C[0] &= 248), (C[31] &= 127), (C[31] |= 64);
        let P = new Uint8Array(64);
        P.set(C.subarray(32), 32);
        let M = new v.SHA512();
        M.update(P.subarray(32)), M.update(c);
        let B = M.digest();
        M.clean(),
          reduce(B),
          scalarbase(E, B),
          pack(P, E),
          M.reset(),
          M.update(P.subarray(0, 32)),
          M.update(i.subarray(32)),
          M.update(c);
        let W = M.digest();
        reduce(W);
        for (let i = 0; i < 32; i++) l[i] = B[i];
        for (let i = 0; i < 32; i++)
          for (let c = 0; c < 32; c++) l[i + c] += W[i] * C[c];
        return modL(P.subarray(32), l), P;
      };
    },
    79984: function (i, c) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.isSerializableHash = function (i) {
          return (
            void 0 !== i.saveState &&
            void 0 !== i.restoreState &&
            void 0 !== i.cleanSavedState
          );
        });
    },
    512: function (i, c, l) {
      "use strict";
      var v = l(25629),
        E = l(17309),
        C = (function () {
          function HKDF(i, c, l, E) {
            void 0 === l && (l = new Uint8Array(0)),
              (this._counter = new Uint8Array(1)),
              (this._hash = i),
              (this._info = E);
            var C = v.hmac(this._hash, l, c);
            (this._hmac = new v.HMAC(i, C)),
              (this._buffer = new Uint8Array(this._hmac.digestLength)),
              (this._bufpos = this._buffer.length);
          }
          return (
            (HKDF.prototype._fillBuffer = function () {
              this._counter[0]++;
              var i = this._counter[0];
              if (0 === i) throw Error("hkdf: cannot expand more");
              this._hmac.reset(),
                i > 1 && this._hmac.update(this._buffer),
                this._info && this._hmac.update(this._info),
                this._hmac.update(this._counter),
                this._hmac.finish(this._buffer),
                (this._bufpos = 0);
            }),
            (HKDF.prototype.expand = function (i) {
              for (var c = new Uint8Array(i), l = 0; l < c.length; l++)
                this._bufpos === this._buffer.length && this._fillBuffer(),
                  (c[l] = this._buffer[this._bufpos++]);
              return c;
            }),
            (HKDF.prototype.clean = function () {
              this._hmac.clean(),
                E.wipe(this._buffer),
                E.wipe(this._counter),
                (this._bufpos = 0);
            }),
            HKDF
          );
        })();
      c.t = C;
    },
    25629: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      var v = l(79984),
        E = l(4153),
        C = l(17309),
        P = (function () {
          function HMAC(i, c) {
            (this._finished = !1),
              (this._inner = new i()),
              (this._outer = new i()),
              (this.blockSize = this._outer.blockSize),
              (this.digestLength = this._outer.digestLength);
            var l = new Uint8Array(this.blockSize);
            c.length > this.blockSize
              ? this._inner.update(c).finish(l).clean()
              : l.set(c);
            for (var E = 0; E < l.length; E++) l[E] ^= 54;
            this._inner.update(l);
            for (var E = 0; E < l.length; E++) l[E] ^= 106;
            this._outer.update(l),
              v.isSerializableHash(this._inner) &&
                v.isSerializableHash(this._outer) &&
                ((this._innerKeyedState = this._inner.saveState()),
                (this._outerKeyedState = this._outer.saveState())),
              C.wipe(l);
          }
          return (
            (HMAC.prototype.reset = function () {
              if (
                !v.isSerializableHash(this._inner) ||
                !v.isSerializableHash(this._outer)
              )
                throw Error(
                  "hmac: can't reset() because hash doesn't implement restoreState()"
                );
              return (
                this._inner.restoreState(this._innerKeyedState),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (HMAC.prototype.clean = function () {
              v.isSerializableHash(this._inner) &&
                this._inner.cleanSavedState(this._innerKeyedState),
                v.isSerializableHash(this._outer) &&
                  this._outer.cleanSavedState(this._outerKeyedState),
                this._inner.clean(),
                this._outer.clean();
            }),
            (HMAC.prototype.update = function (i) {
              return this._inner.update(i), this;
            }),
            (HMAC.prototype.finish = function (i) {
              return (
                this._finished
                  ? this._outer.finish(i)
                  : (this._inner.finish(i),
                    this._outer
                      .update(i.subarray(0, this.digestLength))
                      .finish(i),
                    (this._finished = !0)),
                this
              );
            }),
            (HMAC.prototype.digest = function () {
              var i = new Uint8Array(this.digestLength);
              return this.finish(i), i;
            }),
            (HMAC.prototype.saveState = function () {
              if (!v.isSerializableHash(this._inner))
                throw Error(
                  "hmac: can't saveState() because hash doesn't implement it"
                );
              return this._inner.saveState();
            }),
            (HMAC.prototype.restoreState = function (i) {
              if (
                !v.isSerializableHash(this._inner) ||
                !v.isSerializableHash(this._outer)
              )
                throw Error(
                  "hmac: can't restoreState() because hash doesn't implement it"
                );
              return (
                this._inner.restoreState(i),
                this._outer.restoreState(this._outerKeyedState),
                (this._finished = !1),
                this
              );
            }),
            (HMAC.prototype.cleanSavedState = function (i) {
              if (!v.isSerializableHash(this._inner))
                throw Error(
                  "hmac: can't cleanSavedState() because hash doesn't implement it"
                );
              this._inner.cleanSavedState(i);
            }),
            HMAC
          );
        })();
      (c.HMAC = P),
        (c.hmac = function (i, c, l) {
          var v = new P(i, c);
          v.update(l);
          var E = v.digest();
          return v.clean(), E;
        }),
        (c.equal = E.equal);
    },
    97117: function (i, c) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.mul =
          Math.imul ||
          function (i, c) {
            var l = 65535 & i,
              v = 65535 & c;
            return (
              (l * v +
                (((((i >>> 16) & 65535) * v + l * ((c >>> 16) & 65535)) <<
                  16) >>>
                  0)) |
              0
            );
          }),
        (c.add = function (i, c) {
          return (i + c) | 0;
        }),
        (c.sub = function (i, c) {
          return (i - c) | 0;
        }),
        (c.rotl = function (i, c) {
          return (i << c) | (i >>> (32 - c));
        }),
        (c.rotr = function (i, c) {
          return (i << (32 - c)) | (i >>> c);
        }),
        (c.isInteger =
          Number.isInteger ||
          function (i) {
            return "number" == typeof i && isFinite(i) && Math.floor(i) === i;
          }),
        (c.MAX_SAFE_INTEGER = 9007199254740991),
        (c.isSafeInteger = function (i) {
          return (
            c.isInteger(i) &&
            i >= -c.MAX_SAFE_INTEGER &&
            i <= c.MAX_SAFE_INTEGER
          );
        });
    },
    63027: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      var v = l(4153),
        E = l(17309);
      c.DIGEST_LENGTH = 16;
      var C = (function () {
        function Poly1305(i) {
          (this.digestLength = c.DIGEST_LENGTH),
            (this._buffer = new Uint8Array(16)),
            (this._r = new Uint16Array(10)),
            (this._h = new Uint16Array(10)),
            (this._pad = new Uint16Array(8)),
            (this._leftover = 0),
            (this._fin = 0),
            (this._finished = !1);
          var l = i[0] | (i[1] << 8);
          this._r[0] = 8191 & l;
          var v = i[2] | (i[3] << 8);
          this._r[1] = ((l >>> 13) | (v << 3)) & 8191;
          var E = i[4] | (i[5] << 8);
          this._r[2] = ((v >>> 10) | (E << 6)) & 7939;
          var C = i[6] | (i[7] << 8);
          this._r[3] = ((E >>> 7) | (C << 9)) & 8191;
          var P = i[8] | (i[9] << 8);
          (this._r[4] = ((C >>> 4) | (P << 12)) & 255),
            (this._r[5] = (P >>> 1) & 8190);
          var M = i[10] | (i[11] << 8);
          this._r[6] = ((P >>> 14) | (M << 2)) & 8191;
          var B = i[12] | (i[13] << 8);
          this._r[7] = ((M >>> 11) | (B << 5)) & 8065;
          var W = i[14] | (i[15] << 8);
          (this._r[8] = ((B >>> 8) | (W << 8)) & 8191),
            (this._r[9] = (W >>> 5) & 127),
            (this._pad[0] = i[16] | (i[17] << 8)),
            (this._pad[1] = i[18] | (i[19] << 8)),
            (this._pad[2] = i[20] | (i[21] << 8)),
            (this._pad[3] = i[22] | (i[23] << 8)),
            (this._pad[4] = i[24] | (i[25] << 8)),
            (this._pad[5] = i[26] | (i[27] << 8)),
            (this._pad[6] = i[28] | (i[29] << 8)),
            (this._pad[7] = i[30] | (i[31] << 8));
        }
        return (
          (Poly1305.prototype._blocks = function (i, c, l) {
            for (
              var v = this._fin ? 0 : 2048,
                E = this._h[0],
                C = this._h[1],
                P = this._h[2],
                M = this._h[3],
                B = this._h[4],
                W = this._h[5],
                J = this._h[6],
                X = this._h[7],
                Q = this._h[8],
                er = this._h[9],
                es = this._r[0],
                eo = this._r[1],
                ea = this._r[2],
                ec = this._r[3],
                el = this._r[4],
                eh = this._r[5],
                ed = this._r[6],
                ep = this._r[7],
                eg = this._r[8],
                e_ = this._r[9];
              l >= 16;

            ) {
              var ey,
                ev = i[c + 0] | (i[c + 1] << 8);
              E += 8191 & ev;
              var em = i[c + 2] | (i[c + 3] << 8);
              C += ((ev >>> 13) | (em << 3)) & 8191;
              var eb = i[c + 4] | (i[c + 5] << 8);
              P += ((em >>> 10) | (eb << 6)) & 8191;
              var ew = i[c + 6] | (i[c + 7] << 8);
              M += ((eb >>> 7) | (ew << 9)) & 8191;
              var eE = i[c + 8] | (i[c + 9] << 8);
              (B += ((ew >>> 4) | (eE << 12)) & 8191), (W += (eE >>> 1) & 8191);
              var eD = i[c + 10] | (i[c + 11] << 8);
              J += ((eE >>> 14) | (eD << 2)) & 8191;
              var eS = i[c + 12] | (i[c + 13] << 8);
              X += ((eD >>> 11) | (eS << 5)) & 8191;
              var eI = i[c + 14] | (i[c + 15] << 8);
              (Q += ((eS >>> 8) | (eI << 8)) & 8191), (er += (eI >>> 5) | v);
              var ex = 0;
              (ex =
                (ey =
                  0 +
                  E * es +
                  C * (5 * e_) +
                  P * (5 * eg) +
                  M * (5 * ep) +
                  B * (5 * ed)) >>> 13),
                (ey &= 8191),
                (ey +=
                  W * (5 * eh) +
                  J * (5 * el) +
                  X * (5 * ec) +
                  Q * (5 * ea) +
                  er * (5 * eo)),
                (ex += ey >>> 13),
                (ey &= 8191);
              var eC = ex;
              (eC +=
                E * eo + C * es + P * (5 * e_) + M * (5 * eg) + B * (5 * ep)),
                (ex = eC >>> 13),
                (eC &= 8191),
                (eC +=
                  W * (5 * ed) +
                  J * (5 * eh) +
                  X * (5 * el) +
                  Q * (5 * ec) +
                  er * (5 * ea)),
                (ex += eC >>> 13),
                (eC &= 8191);
              var eO = ex;
              (eO += E * ea + C * eo + P * es + M * (5 * e_) + B * (5 * eg)),
                (ex = eO >>> 13),
                (eO &= 8191),
                (eO +=
                  W * (5 * ep) +
                  J * (5 * ed) +
                  X * (5 * eh) +
                  Q * (5 * el) +
                  er * (5 * ec)),
                (ex += eO >>> 13),
                (eO &= 8191);
              var eP = ex;
              (eP += E * ec + C * ea + P * eo + M * es + B * (5 * e_)),
                (ex = eP >>> 13),
                (eP &= 8191),
                (eP +=
                  W * (5 * eg) +
                  J * (5 * ep) +
                  X * (5 * ed) +
                  Q * (5 * eh) +
                  er * (5 * el)),
                (ex += eP >>> 13),
                (eP &= 8191);
              var eA = ex;
              (eA += E * el + C * ec + P * ea + M * eo + B * es),
                (ex = eA >>> 13),
                (eA &= 8191),
                (eA +=
                  W * (5 * e_) +
                  J * (5 * eg) +
                  X * (5 * ep) +
                  Q * (5 * ed) +
                  er * (5 * eh)),
                (ex += eA >>> 13),
                (eA &= 8191);
              var eR = ex;
              (eR += E * eh + C * el + P * ec + M * ea + B * eo),
                (ex = eR >>> 13),
                (eR &= 8191),
                (eR +=
                  W * es +
                  J * (5 * e_) +
                  X * (5 * eg) +
                  Q * (5 * ep) +
                  er * (5 * ed)),
                (ex += eR >>> 13),
                (eR &= 8191);
              var eN = ex;
              (eN += E * ed + C * eh + P * el + M * ec + B * ea),
                (ex = eN >>> 13),
                (eN &= 8191),
                (eN +=
                  W * eo +
                  J * es +
                  X * (5 * e_) +
                  Q * (5 * eg) +
                  er * (5 * ep)),
                (ex += eN >>> 13),
                (eN &= 8191);
              var eT = ex;
              (eT += E * ep + C * ed + P * eh + M * el + B * ec),
                (ex = eT >>> 13),
                (eT &= 8191),
                (eT += W * ea + J * eo + X * es + Q * (5 * e_) + er * (5 * eg)),
                (ex += eT >>> 13),
                (eT &= 8191);
              var eU = ex;
              (eU += E * eg + C * ep + P * ed + M * eh + B * el),
                (ex = eU >>> 13),
                (eU &= 8191),
                (eU += W * ec + J * ea + X * eo + Q * es + er * (5 * e_)),
                (ex += eU >>> 13),
                (eU &= 8191);
              var ej = ex;
              (ej += E * e_ + C * eg + P * ep + M * ed + B * eh),
                (ex = ej >>> 13),
                (ej &= 8191),
                (ej += W * el + J * ec + X * ea + Q * eo + er * es),
                (ex += ej >>> 13),
                (ej &= 8191),
                (ey = 8191 & (ex = ((ex = ((ex << 2) + ex) | 0) + ey) | 0)),
                (ex >>>= 13),
                (eC += ex),
                (E = ey),
                (C = eC),
                (P = eO),
                (M = eP),
                (B = eA),
                (W = eR),
                (J = eN),
                (X = eT),
                (Q = eU),
                (er = ej),
                (c += 16),
                (l -= 16);
            }
            (this._h[0] = E),
              (this._h[1] = C),
              (this._h[2] = P),
              (this._h[3] = M),
              (this._h[4] = B),
              (this._h[5] = W),
              (this._h[6] = J),
              (this._h[7] = X),
              (this._h[8] = Q),
              (this._h[9] = er);
          }),
          (Poly1305.prototype.finish = function (i, c) {
            void 0 === c && (c = 0);
            var l,
              v,
              E,
              C,
              P = new Uint16Array(10);
            if (this._leftover) {
              for (C = this._leftover, this._buffer[C++] = 1; C < 16; C++)
                this._buffer[C] = 0;
              (this._fin = 1), this._blocks(this._buffer, 0, 16);
            }
            for (l = this._h[1] >>> 13, this._h[1] &= 8191, C = 2; C < 10; C++)
              (this._h[C] += l), (l = this._h[C] >>> 13), (this._h[C] &= 8191);
            for (
              this._h[0] += 5 * l,
                l = this._h[0] >>> 13,
                this._h[0] &= 8191,
                this._h[1] += l,
                l = this._h[1] >>> 13,
                this._h[1] &= 8191,
                this._h[2] += l,
                P[0] = this._h[0] + 5,
                l = P[0] >>> 13,
                P[0] &= 8191,
                C = 1;
              C < 10;
              C++
            )
              (P[C] = this._h[C] + l), (l = P[C] >>> 13), (P[C] &= 8191);
            for (P[9] -= 8192, v = (1 ^ l) - 1, C = 0; C < 10; C++) P[C] &= v;
            for (C = 0, v = ~v; C < 10; C++)
              this._h[C] = (this._h[C] & v) | P[C];
            for (
              C = 1,
                this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
                this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
                this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
                this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
                this._h[4] =
                  ((this._h[4] >>> 12) |
                    (this._h[5] << 1) |
                    (this._h[6] << 14)) &
                  65535,
                this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
                this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
                this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
                E = this._h[0] + this._pad[0],
                this._h[0] = 65535 & E;
              C < 8;
              C++
            )
              (E = (((this._h[C] + this._pad[C]) | 0) + (E >>> 16)) | 0),
                (this._h[C] = 65535 & E);
            return (
              (i[c + 0] = this._h[0] >>> 0),
              (i[c + 1] = this._h[0] >>> 8),
              (i[c + 2] = this._h[1] >>> 0),
              (i[c + 3] = this._h[1] >>> 8),
              (i[c + 4] = this._h[2] >>> 0),
              (i[c + 5] = this._h[2] >>> 8),
              (i[c + 6] = this._h[3] >>> 0),
              (i[c + 7] = this._h[3] >>> 8),
              (i[c + 8] = this._h[4] >>> 0),
              (i[c + 9] = this._h[4] >>> 8),
              (i[c + 10] = this._h[5] >>> 0),
              (i[c + 11] = this._h[5] >>> 8),
              (i[c + 12] = this._h[6] >>> 0),
              (i[c + 13] = this._h[6] >>> 8),
              (i[c + 14] = this._h[7] >>> 0),
              (i[c + 15] = this._h[7] >>> 8),
              (this._finished = !0),
              this
            );
          }),
          (Poly1305.prototype.update = function (i) {
            var c,
              l = 0,
              v = i.length;
            if (this._leftover) {
              (c = 16 - this._leftover) > v && (c = v);
              for (var E = 0; E < c; E++)
                this._buffer[this._leftover + E] = i[l + E];
              if (
                ((v -= c), (l += c), (this._leftover += c), this._leftover < 16)
              )
                return this;
              this._blocks(this._buffer, 0, 16), (this._leftover = 0);
            }
            if (
              (v >= 16 &&
                ((c = v - (v % 16)), this._blocks(i, l, c), (l += c), (v -= c)),
              v)
            ) {
              for (var E = 0; E < v; E++)
                this._buffer[this._leftover + E] = i[l + E];
              this._leftover += v;
            }
            return this;
          }),
          (Poly1305.prototype.digest = function () {
            if (this._finished) throw Error("Poly1305 was finished");
            var i = new Uint8Array(16);
            return this.finish(i), i;
          }),
          (Poly1305.prototype.clean = function () {
            return (
              E.wipe(this._buffer),
              E.wipe(this._r),
              E.wipe(this._h),
              E.wipe(this._pad),
              (this._leftover = 0),
              (this._fin = 0),
              (this._finished = !0),
              this
            );
          }),
          Poly1305
        );
      })();
      (c.Poly1305 = C),
        (c.oneTimeAuth = function (i, c) {
          var l = new C(i);
          l.update(c);
          var v = l.digest();
          return l.clean(), v;
        }),
        (c.equal = function (i, l) {
          return (
            i.length === c.DIGEST_LENGTH &&
            l.length === c.DIGEST_LENGTH &&
            v.equal(i, l)
          );
        });
    },
    31416: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.randomStringForEntropy =
          c.randomString =
          c.randomUint32 =
          c.randomBytes =
          c.defaultRandomSource =
            void 0);
      let v = l(46008),
        E = l(98099),
        C = l(17309);
      function randomBytes(i, l = c.defaultRandomSource) {
        return l.randomBytes(i);
      }
      (c.defaultRandomSource = new v.SystemRandomSource()),
        (c.randomBytes = randomBytes),
        (c.randomUint32 = function (i = c.defaultRandomSource) {
          let l = randomBytes(4, i),
            v = (0, E.readUint32LE)(l);
          return (0, C.wipe)(l), v;
        });
      let P = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      function randomString(i, l = P, v = c.defaultRandomSource) {
        if (l.length < 2) throw Error("randomString charset is too short");
        if (l.length > 256) throw Error("randomString charset is too long");
        let E = "",
          M = l.length,
          B = 256 - (256 % M);
        for (; i > 0; ) {
          let c = randomBytes(Math.ceil((256 * i) / B), v);
          for (let v = 0; v < c.length && i > 0; v++) {
            let C = c[v];
            C < B && ((E += l.charAt(C % M)), i--);
          }
          (0, C.wipe)(c);
        }
        return E;
      }
      (c.randomString = randomString),
        (c.randomStringForEntropy = function (
          i,
          l = P,
          v = c.defaultRandomSource
        ) {
          let E = Math.ceil(i / (Math.log(l.length) / Math.LN2));
          return randomString(E, l, v);
        });
    },
    75455: function (i, c) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.BrowserRandomSource = void 0),
        (c.BrowserRandomSource = class {
          constructor() {
            (this.isAvailable = !1), (this.isInstantiated = !1);
            let i =
              "undefined" != typeof self ? self.crypto || self.msCrypto : null;
            i &&
              void 0 !== i.getRandomValues &&
              ((this._crypto = i),
              (this.isAvailable = !0),
              (this.isInstantiated = !0));
          }
          randomBytes(i) {
            if (!this.isAvailable || !this._crypto)
              throw Error("Browser random byte generator is not available.");
            let c = new Uint8Array(i);
            for (let i = 0; i < c.length; i += 65536)
              this._crypto.getRandomValues(
                c.subarray(i, i + Math.min(c.length - i, 65536))
              );
            return c;
          }
        });
    },
    58871: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.NodeRandomSource = void 0);
      let v = l(17309);
      c.NodeRandomSource = class {
        constructor() {
          (this.isAvailable = !1), (this.isInstantiated = !1);
          {
            let i = l(35883);
            i &&
              i.randomBytes &&
              ((this._crypto = i),
              (this.isAvailable = !0),
              (this.isInstantiated = !0));
          }
        }
        randomBytes(i) {
          if (!this.isAvailable || !this._crypto)
            throw Error("Node.js random byte generator is not available.");
          let c = this._crypto.randomBytes(i);
          if (c.length !== i)
            throw Error("NodeRandomSource: got fewer bytes than requested");
          let l = new Uint8Array(i);
          for (let i = 0; i < l.length; i++) l[i] = c[i];
          return (0, v.wipe)(c), l;
        }
      };
    },
    46008: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.SystemRandomSource = void 0);
      let v = l(75455),
        E = l(58871);
      c.SystemRandomSource = class {
        constructor() {
          if (
            ((this.isAvailable = !1),
            (this.name = ""),
            (this._source = new v.BrowserRandomSource()),
            this._source.isAvailable)
          ) {
            (this.isAvailable = !0), (this.name = "Browser");
            return;
          }
          if (
            ((this._source = new E.NodeRandomSource()),
            this._source.isAvailable)
          ) {
            (this.isAvailable = !0), (this.name = "Node");
            return;
          }
        }
        randomBytes(i) {
          if (!this.isAvailable)
            throw Error("System random byte generator is not available.");
          return this._source.randomBytes(i);
        }
      };
    },
    73294: function (i, c, l) {
      "use strict";
      var v = l(98099),
        E = l(17309);
      (c.k = 32), (c.cn = 64);
      var C = (function () {
        function SHA256() {
          (this.digestLength = c.k),
            (this.blockSize = c.cn),
            (this._state = new Int32Array(8)),
            (this._temp = new Int32Array(64)),
            (this._buffer = new Uint8Array(128)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (SHA256.prototype._initState = function () {
            (this._state[0] = 1779033703),
              (this._state[1] = 3144134277),
              (this._state[2] = 1013904242),
              (this._state[3] = 2773480762),
              (this._state[4] = 1359893119),
              (this._state[5] = 2600822924),
              (this._state[6] = 528734635),
              (this._state[7] = 1541459225);
          }),
          (SHA256.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (SHA256.prototype.clean = function () {
            E.wipe(this._buffer), E.wipe(this._temp), this.reset();
          }),
          (SHA256.prototype.update = function (i, c) {
            if ((void 0 === c && (c = i.length), this._finished))
              throw Error("SHA256: can't update because hash was finished.");
            var l = 0;
            if (((this._bytesHashed += c), this._bufferLength > 0)) {
              for (; this._bufferLength < this.blockSize && c > 0; )
                (this._buffer[this._bufferLength++] = i[l++]), c--;
              this._bufferLength === this.blockSize &&
                (hashBlocks(
                  this._temp,
                  this._state,
                  this._buffer,
                  0,
                  this.blockSize
                ),
                (this._bufferLength = 0));
            }
            for (
              c >= this.blockSize &&
              ((l = hashBlocks(this._temp, this._state, i, l, c)),
              (c %= this.blockSize));
              c > 0;

            )
              (this._buffer[this._bufferLength++] = i[l++]), c--;
            return this;
          }),
          (SHA256.prototype.finish = function (i) {
            if (!this._finished) {
              var c = this._bytesHashed,
                l = this._bufferLength,
                E = c % 64 < 56 ? 64 : 128;
              this._buffer[l] = 128;
              for (var C = l + 1; C < E - 8; C++) this._buffer[C] = 0;
              v.writeUint32BE((c / 536870912) | 0, this._buffer, E - 8),
                v.writeUint32BE(c << 3, this._buffer, E - 4),
                hashBlocks(this._temp, this._state, this._buffer, 0, E),
                (this._finished = !0);
            }
            for (var C = 0; C < this.digestLength / 4; C++)
              v.writeUint32BE(this._state[C], i, 4 * C);
            return this;
          }),
          (SHA256.prototype.digest = function () {
            var i = new Uint8Array(this.digestLength);
            return this.finish(i), i;
          }),
          (SHA256.prototype.saveState = function () {
            if (this._finished)
              throw Error("SHA256: cannot save finished state");
            return {
              state: new Int32Array(this._state),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (SHA256.prototype.restoreState = function (i) {
            return (
              this._state.set(i.state),
              (this._bufferLength = i.bufferLength),
              i.buffer && this._buffer.set(i.buffer),
              (this._bytesHashed = i.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (SHA256.prototype.cleanSavedState = function (i) {
            E.wipe(i.state),
              i.buffer && E.wipe(i.buffer),
              (i.bufferLength = 0),
              (i.bytesHashed = 0);
          }),
          SHA256
        );
      })();
      c.mE = C;
      var P = new Int32Array([
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
        2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
        1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
        264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
        2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
        113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
        1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
        3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
        430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
        1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
        2428436474, 2756734187, 3204031479, 3329325298,
      ]);
      function hashBlocks(i, c, l, E, C) {
        for (; C >= 64; ) {
          for (
            var M = c[0],
              B = c[1],
              W = c[2],
              J = c[3],
              X = c[4],
              Q = c[5],
              er = c[6],
              es = c[7],
              eo = 0;
            eo < 16;
            eo++
          ) {
            var ea = E + 4 * eo;
            i[eo] = v.readUint32BE(l, ea);
          }
          for (var eo = 16; eo < 64; eo++) {
            var ec = i[eo - 2],
              el =
                ((ec >>> 17) | (ec << 15)) ^
                ((ec >>> 19) | (ec << 13)) ^
                (ec >>> 10),
              eh =
                (((ec = i[eo - 15]) >>> 7) | (ec << 25)) ^
                ((ec >>> 18) | (ec << 14)) ^
                (ec >>> 3);
            i[eo] = ((el + i[eo - 7]) | 0) + ((eh + i[eo - 16]) | 0);
          }
          for (var eo = 0; eo < 64; eo++) {
            var el =
                ((((((X >>> 6) | (X << 26)) ^
                  ((X >>> 11) | (X << 21)) ^
                  ((X >>> 25) | (X << 7))) +
                  ((X & Q) ^ (~X & er))) |
                  0) +
                  ((es + ((P[eo] + i[eo]) | 0)) | 0)) |
                0,
              eh =
                ((((M >>> 2) | (M << 30)) ^
                  ((M >>> 13) | (M << 19)) ^
                  ((M >>> 22) | (M << 10))) +
                  ((M & B) ^ (M & W) ^ (B & W))) |
                0;
            (es = er),
              (er = Q),
              (Q = X),
              (X = (J + el) | 0),
              (J = W),
              (W = B),
              (B = M),
              (M = (el + eh) | 0);
          }
          (c[0] += M),
            (c[1] += B),
            (c[2] += W),
            (c[3] += J),
            (c[4] += X),
            (c[5] += Q),
            (c[6] += er),
            (c[7] += es),
            (E += 64),
            (C -= 64);
        }
        return E;
      }
      c.vp = function (i) {
        var c = new C();
        c.update(i);
        var l = c.digest();
        return c.clean(), l;
      };
    },
    93350: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      var v = l(98099),
        E = l(17309);
      (c.DIGEST_LENGTH = 64), (c.BLOCK_SIZE = 128);
      var C = (function () {
        function SHA512() {
          (this.digestLength = c.DIGEST_LENGTH),
            (this.blockSize = c.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (SHA512.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (SHA512.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (SHA512.prototype.clean = function () {
            E.wipe(this._buffer),
              E.wipe(this._tempHi),
              E.wipe(this._tempLo),
              this.reset();
          }),
          (SHA512.prototype.update = function (i, l) {
            if ((void 0 === l && (l = i.length), this._finished))
              throw Error("SHA512: can't update because hash was finished.");
            var v = 0;
            if (((this._bytesHashed += l), this._bufferLength > 0)) {
              for (; this._bufferLength < c.BLOCK_SIZE && l > 0; )
                (this._buffer[this._bufferLength++] = i[v++]), l--;
              this._bufferLength === this.blockSize &&
                (hashBlocks(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize
                ),
                (this._bufferLength = 0));
            }
            for (
              l >= this.blockSize &&
              ((v = hashBlocks(
                this._tempHi,
                this._tempLo,
                this._stateHi,
                this._stateLo,
                i,
                v,
                l
              )),
              (l %= this.blockSize));
              l > 0;

            )
              (this._buffer[this._bufferLength++] = i[v++]), l--;
            return this;
          }),
          (SHA512.prototype.finish = function (i) {
            if (!this._finished) {
              var c = this._bytesHashed,
                l = this._bufferLength,
                E = c % 128 < 112 ? 128 : 256;
              this._buffer[l] = 128;
              for (var C = l + 1; C < E - 8; C++) this._buffer[C] = 0;
              v.writeUint32BE((c / 536870912) | 0, this._buffer, E - 8),
                v.writeUint32BE(c << 3, this._buffer, E - 4),
                hashBlocks(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  E
                ),
                (this._finished = !0);
            }
            for (var C = 0; C < this.digestLength / 8; C++)
              v.writeUint32BE(this._stateHi[C], i, 8 * C),
                v.writeUint32BE(this._stateLo[C], i, 8 * C + 4);
            return this;
          }),
          (SHA512.prototype.digest = function () {
            var i = new Uint8Array(this.digestLength);
            return this.finish(i), i;
          }),
          (SHA512.prototype.saveState = function () {
            if (this._finished)
              throw Error("SHA256: cannot save finished state");
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (SHA512.prototype.restoreState = function (i) {
            return (
              this._stateHi.set(i.stateHi),
              this._stateLo.set(i.stateLo),
              (this._bufferLength = i.bufferLength),
              i.buffer && this._buffer.set(i.buffer),
              (this._bytesHashed = i.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (SHA512.prototype.cleanSavedState = function (i) {
            E.wipe(i.stateHi),
              E.wipe(i.stateLo),
              i.buffer && E.wipe(i.buffer),
              (i.bufferLength = 0),
              (i.bytesHashed = 0);
          }),
          SHA512
        );
      })();
      c.SHA512 = C;
      var P = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function hashBlocks(i, c, l, E, C, M, B) {
        for (
          var W,
            J,
            X,
            Q,
            er,
            es,
            eo,
            ea,
            ec = l[0],
            el = l[1],
            eh = l[2],
            ed = l[3],
            ep = l[4],
            eg = l[5],
            e_ = l[6],
            ey = l[7],
            ev = E[0],
            em = E[1],
            eb = E[2],
            ew = E[3],
            eE = E[4],
            eD = E[5],
            eS = E[6],
            eI = E[7];
          B >= 128;

        ) {
          for (var ex = 0; ex < 16; ex++) {
            var eC = 8 * ex + M;
            (i[ex] = v.readUint32BE(C, eC)),
              (c[ex] = v.readUint32BE(C, eC + 4));
          }
          for (var ex = 0; ex < 80; ex++) {
            var eO = ec,
              eP = el,
              eA = eh,
              eR = ed,
              eN = ep,
              eT = eg,
              eU = e_,
              ej = ey,
              eL = ev,
              eM = em,
              ek = eb,
              ez = ew,
              e$ = eE,
              eH = eD,
              eB = eS,
              eF = eI;
            if (
              ((W = ey),
              (er = 65535 & (J = eI)),
              (es = J >>> 16),
              (eo = 65535 & W),
              (ea = W >>> 16),
              (W =
                ((ep >>> 14) | (eE << 18)) ^
                ((ep >>> 18) | (eE << 14)) ^
                ((eE >>> 9) | (ep << 23))),
              (er +=
                65535 &
                (J =
                  ((eE >>> 14) | (ep << 18)) ^
                  ((eE >>> 18) | (ep << 14)) ^
                  ((ep >>> 9) | (eE << 23)))),
              (es += J >>> 16),
              (eo += 65535 & W),
              (ea += W >>> 16),
              (W = (ep & eg) ^ (~ep & e_)),
              (er += 65535 & (J = (eE & eD) ^ (~eE & eS))),
              (es += J >>> 16),
              (eo += 65535 & W),
              (ea += W >>> 16),
              (W = P[2 * ex]),
              (er += 65535 & (J = P[2 * ex + 1])),
              (es += J >>> 16),
              (eo += 65535 & W),
              (ea += W >>> 16),
              (W = i[ex % 16]),
              (er += 65535 & (J = c[ex % 16])),
              (es += J >>> 16),
              (eo += 65535 & W),
              (ea += W >>> 16),
              (es += er >>> 16),
              (eo += es >>> 16),
              (ea += eo >>> 16),
              (X = (65535 & eo) | (ea << 16)),
              (Q = (65535 & er) | (es << 16)),
              (W = X),
              (er = 65535 & (J = Q)),
              (es = J >>> 16),
              (eo = 65535 & W),
              (ea = W >>> 16),
              (W =
                ((ec >>> 28) | (ev << 4)) ^
                ((ev >>> 2) | (ec << 30)) ^
                ((ev >>> 7) | (ec << 25))),
              (er +=
                65535 &
                (J =
                  ((ev >>> 28) | (ec << 4)) ^
                  ((ec >>> 2) | (ev << 30)) ^
                  ((ec >>> 7) | (ev << 25)))),
              (es += J >>> 16),
              (eo += 65535 & W),
              (ea += W >>> 16),
              (W = (ec & el) ^ (ec & eh) ^ (el & eh)),
              (er += 65535 & (J = (ev & em) ^ (ev & eb) ^ (em & eb))),
              (es += J >>> 16),
              (eo += 65535 & W),
              (ea += W >>> 16),
              (es += er >>> 16),
              (eo += es >>> 16),
              (ea += eo >>> 16),
              (ej = (65535 & eo) | (ea << 16)),
              (eF = (65535 & er) | (es << 16)),
              (W = eR),
              (er = 65535 & (J = ez)),
              (es = J >>> 16),
              (eo = 65535 & W),
              (ea = W >>> 16),
              (W = X),
              (er += 65535 & (J = Q)),
              (es += J >>> 16),
              (eo += 65535 & W),
              (ea += W >>> 16),
              (es += er >>> 16),
              (eo += es >>> 16),
              (ea += eo >>> 16),
              (eR = (65535 & eo) | (ea << 16)),
              (ez = (65535 & er) | (es << 16)),
              (el = eO),
              (eh = eP),
              (ed = eA),
              (ep = eR),
              (eg = eN),
              (e_ = eT),
              (ey = eU),
              (ec = ej),
              (em = eL),
              (eb = eM),
              (ew = ek),
              (eE = ez),
              (eD = e$),
              (eS = eH),
              (eI = eB),
              (ev = eF),
              ex % 16 == 15)
            )
              for (var eC = 0; eC < 16; eC++)
                (W = i[eC]),
                  (er = 65535 & (J = c[eC])),
                  (es = J >>> 16),
                  (eo = 65535 & W),
                  (ea = W >>> 16),
                  (W = i[(eC + 9) % 16]),
                  (er += 65535 & (J = c[(eC + 9) % 16])),
                  (es += J >>> 16),
                  (eo += 65535 & W),
                  (ea += W >>> 16),
                  (W =
                    (((X = i[(eC + 1) % 16]) >>> 1) |
                      ((Q = c[(eC + 1) % 16]) << 31)) ^
                    ((X >>> 8) | (Q << 24)) ^
                    (X >>> 7)),
                  (er +=
                    65535 &
                    (J =
                      ((Q >>> 1) | (X << 31)) ^
                      ((Q >>> 8) | (X << 24)) ^
                      ((Q >>> 7) | (X << 25)))),
                  (es += J >>> 16),
                  (eo += 65535 & W),
                  (ea += W >>> 16),
                  (W =
                    (((X = i[(eC + 14) % 16]) >>> 19) |
                      ((Q = c[(eC + 14) % 16]) << 13)) ^
                    ((Q >>> 29) | (X << 3)) ^
                    (X >>> 6)),
                  (er +=
                    65535 &
                    (J =
                      ((Q >>> 19) | (X << 13)) ^
                      ((X >>> 29) | (Q << 3)) ^
                      ((Q >>> 6) | (X << 26)))),
                  (es += J >>> 16),
                  (eo += 65535 & W),
                  (ea += W >>> 16),
                  (es += er >>> 16),
                  (eo += es >>> 16),
                  (ea += eo >>> 16),
                  (i[eC] = (65535 & eo) | (ea << 16)),
                  (c[eC] = (65535 & er) | (es << 16));
          }
          (W = ec),
            (er = 65535 & (J = ev)),
            (es = J >>> 16),
            (eo = 65535 & W),
            (ea = W >>> 16),
            (W = l[0]),
            (er += 65535 & (J = E[0])),
            (es += J >>> 16),
            (eo += 65535 & W),
            (ea += W >>> 16),
            (es += er >>> 16),
            (eo += es >>> 16),
            (ea += eo >>> 16),
            (l[0] = ec = (65535 & eo) | (ea << 16)),
            (E[0] = ev = (65535 & er) | (es << 16)),
            (W = el),
            (er = 65535 & (J = em)),
            (es = J >>> 16),
            (eo = 65535 & W),
            (ea = W >>> 16),
            (W = l[1]),
            (er += 65535 & (J = E[1])),
            (es += J >>> 16),
            (eo += 65535 & W),
            (ea += W >>> 16),
            (es += er >>> 16),
            (eo += es >>> 16),
            (ea += eo >>> 16),
            (l[1] = el = (65535 & eo) | (ea << 16)),
            (E[1] = em = (65535 & er) | (es << 16)),
            (W = eh),
            (er = 65535 & (J = eb)),
            (es = J >>> 16),
            (eo = 65535 & W),
            (ea = W >>> 16),
            (W = l[2]),
            (er += 65535 & (J = E[2])),
            (es += J >>> 16),
            (eo += 65535 & W),
            (ea += W >>> 16),
            (es += er >>> 16),
            (eo += es >>> 16),
            (ea += eo >>> 16),
            (l[2] = eh = (65535 & eo) | (ea << 16)),
            (E[2] = eb = (65535 & er) | (es << 16)),
            (W = ed),
            (er = 65535 & (J = ew)),
            (es = J >>> 16),
            (eo = 65535 & W),
            (ea = W >>> 16),
            (W = l[3]),
            (er += 65535 & (J = E[3])),
            (es += J >>> 16),
            (eo += 65535 & W),
            (ea += W >>> 16),
            (es += er >>> 16),
            (eo += es >>> 16),
            (ea += eo >>> 16),
            (l[3] = ed = (65535 & eo) | (ea << 16)),
            (E[3] = ew = (65535 & er) | (es << 16)),
            (W = ep),
            (er = 65535 & (J = eE)),
            (es = J >>> 16),
            (eo = 65535 & W),
            (ea = W >>> 16),
            (W = l[4]),
            (er += 65535 & (J = E[4])),
            (es += J >>> 16),
            (eo += 65535 & W),
            (ea += W >>> 16),
            (es += er >>> 16),
            (eo += es >>> 16),
            (ea += eo >>> 16),
            (l[4] = ep = (65535 & eo) | (ea << 16)),
            (E[4] = eE = (65535 & er) | (es << 16)),
            (W = eg),
            (er = 65535 & (J = eD)),
            (es = J >>> 16),
            (eo = 65535 & W),
            (ea = W >>> 16),
            (W = l[5]),
            (er += 65535 & (J = E[5])),
            (es += J >>> 16),
            (eo += 65535 & W),
            (ea += W >>> 16),
            (es += er >>> 16),
            (eo += es >>> 16),
            (ea += eo >>> 16),
            (l[5] = eg = (65535 & eo) | (ea << 16)),
            (E[5] = eD = (65535 & er) | (es << 16)),
            (W = e_),
            (er = 65535 & (J = eS)),
            (es = J >>> 16),
            (eo = 65535 & W),
            (ea = W >>> 16),
            (W = l[6]),
            (er += 65535 & (J = E[6])),
            (es += J >>> 16),
            (eo += 65535 & W),
            (ea += W >>> 16),
            (es += er >>> 16),
            (eo += es >>> 16),
            (ea += eo >>> 16),
            (l[6] = e_ = (65535 & eo) | (ea << 16)),
            (E[6] = eS = (65535 & er) | (es << 16)),
            (W = ey),
            (er = 65535 & (J = eI)),
            (es = J >>> 16),
            (eo = 65535 & W),
            (ea = W >>> 16),
            (W = l[7]),
            (er += 65535 & (J = E[7])),
            (es += J >>> 16),
            (eo += 65535 & W),
            (ea += W >>> 16),
            (es += er >>> 16),
            (eo += es >>> 16),
            (ea += eo >>> 16),
            (l[7] = ey = (65535 & eo) | (ea << 16)),
            (E[7] = eI = (65535 & er) | (es << 16)),
            (M += 128),
            (B -= 128);
        }
        return M;
      }
      c.hash = function (i) {
        var c = new C();
        c.update(i);
        var l = c.digest();
        return c.clean(), l;
      };
    },
    17309: function (i, c) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.wipe = function (i) {
          for (var c = 0; c < i.length; c++) i[c] = 0;
          return i;
        });
    },
    57664: function (i, c, l) {
      "use strict";
      c.gi = c.Au = c.KS = c.kz = void 0;
      let v = l(31416),
        E = l(17309);
      function gf(i) {
        let c = new Float64Array(16);
        if (i) for (let l = 0; l < i.length; l++) c[l] = i[l];
        return c;
      }
      (c.kz = 32), (c.KS = 32);
      let C = new Uint8Array(32);
      C[0] = 9;
      let P = gf([56129, 1]);
      function car25519(i) {
        let c = 1;
        for (let l = 0; l < 16; l++) {
          let v = i[l] + c + 65535;
          (c = Math.floor(v / 65536)), (i[l] = v - 65536 * c);
        }
        i[0] += c - 1 + 37 * (c - 1);
      }
      function sel25519(i, c, l) {
        let v = ~(l - 1);
        for (let l = 0; l < 16; l++) {
          let E = v & (i[l] ^ c[l]);
          (i[l] ^= E), (c[l] ^= E);
        }
      }
      function add(i, c, l) {
        for (let v = 0; v < 16; v++) i[v] = c[v] + l[v];
      }
      function sub(i, c, l) {
        for (let v = 0; v < 16; v++) i[v] = c[v] - l[v];
      }
      function mul(i, c, l) {
        let v,
          E,
          C = 0,
          P = 0,
          M = 0,
          B = 0,
          W = 0,
          J = 0,
          X = 0,
          Q = 0,
          er = 0,
          es = 0,
          eo = 0,
          ea = 0,
          ec = 0,
          el = 0,
          eh = 0,
          ed = 0,
          ep = 0,
          eg = 0,
          e_ = 0,
          ey = 0,
          ev = 0,
          em = 0,
          eb = 0,
          ew = 0,
          eE = 0,
          eD = 0,
          eS = 0,
          eI = 0,
          ex = 0,
          eC = 0,
          eO = 0,
          eP = l[0],
          eA = l[1],
          eR = l[2],
          eN = l[3],
          eT = l[4],
          eU = l[5],
          ej = l[6],
          eL = l[7],
          eM = l[8],
          ek = l[9],
          ez = l[10],
          e$ = l[11],
          eH = l[12],
          eB = l[13],
          eF = l[14],
          eK = l[15];
        (C += (v = c[0]) * eP),
          (P += v * eA),
          (M += v * eR),
          (B += v * eN),
          (W += v * eT),
          (J += v * eU),
          (X += v * ej),
          (Q += v * eL),
          (er += v * eM),
          (es += v * ek),
          (eo += v * ez),
          (ea += v * e$),
          (ec += v * eH),
          (el += v * eB),
          (eh += v * eF),
          (ed += v * eK),
          (P += (v = c[1]) * eP),
          (M += v * eA),
          (B += v * eR),
          (W += v * eN),
          (J += v * eT),
          (X += v * eU),
          (Q += v * ej),
          (er += v * eL),
          (es += v * eM),
          (eo += v * ek),
          (ea += v * ez),
          (ec += v * e$),
          (el += v * eH),
          (eh += v * eB),
          (ed += v * eF),
          (ep += v * eK),
          (M += (v = c[2]) * eP),
          (B += v * eA),
          (W += v * eR),
          (J += v * eN),
          (X += v * eT),
          (Q += v * eU),
          (er += v * ej),
          (es += v * eL),
          (eo += v * eM),
          (ea += v * ek),
          (ec += v * ez),
          (el += v * e$),
          (eh += v * eH),
          (ed += v * eB),
          (ep += v * eF),
          (eg += v * eK),
          (B += (v = c[3]) * eP),
          (W += v * eA),
          (J += v * eR),
          (X += v * eN),
          (Q += v * eT),
          (er += v * eU),
          (es += v * ej),
          (eo += v * eL),
          (ea += v * eM),
          (ec += v * ek),
          (el += v * ez),
          (eh += v * e$),
          (ed += v * eH),
          (ep += v * eB),
          (eg += v * eF),
          (e_ += v * eK),
          (W += (v = c[4]) * eP),
          (J += v * eA),
          (X += v * eR),
          (Q += v * eN),
          (er += v * eT),
          (es += v * eU),
          (eo += v * ej),
          (ea += v * eL),
          (ec += v * eM),
          (el += v * ek),
          (eh += v * ez),
          (ed += v * e$),
          (ep += v * eH),
          (eg += v * eB),
          (e_ += v * eF),
          (ey += v * eK),
          (J += (v = c[5]) * eP),
          (X += v * eA),
          (Q += v * eR),
          (er += v * eN),
          (es += v * eT),
          (eo += v * eU),
          (ea += v * ej),
          (ec += v * eL),
          (el += v * eM),
          (eh += v * ek),
          (ed += v * ez),
          (ep += v * e$),
          (eg += v * eH),
          (e_ += v * eB),
          (ey += v * eF),
          (ev += v * eK),
          (X += (v = c[6]) * eP),
          (Q += v * eA),
          (er += v * eR),
          (es += v * eN),
          (eo += v * eT),
          (ea += v * eU),
          (ec += v * ej),
          (el += v * eL),
          (eh += v * eM),
          (ed += v * ek),
          (ep += v * ez),
          (eg += v * e$),
          (e_ += v * eH),
          (ey += v * eB),
          (ev += v * eF),
          (em += v * eK),
          (Q += (v = c[7]) * eP),
          (er += v * eA),
          (es += v * eR),
          (eo += v * eN),
          (ea += v * eT),
          (ec += v * eU),
          (el += v * ej),
          (eh += v * eL),
          (ed += v * eM),
          (ep += v * ek),
          (eg += v * ez),
          (e_ += v * e$),
          (ey += v * eH),
          (ev += v * eB),
          (em += v * eF),
          (eb += v * eK),
          (er += (v = c[8]) * eP),
          (es += v * eA),
          (eo += v * eR),
          (ea += v * eN),
          (ec += v * eT),
          (el += v * eU),
          (eh += v * ej),
          (ed += v * eL),
          (ep += v * eM),
          (eg += v * ek),
          (e_ += v * ez),
          (ey += v * e$),
          (ev += v * eH),
          (em += v * eB),
          (eb += v * eF),
          (ew += v * eK),
          (es += (v = c[9]) * eP),
          (eo += v * eA),
          (ea += v * eR),
          (ec += v * eN),
          (el += v * eT),
          (eh += v * eU),
          (ed += v * ej),
          (ep += v * eL),
          (eg += v * eM),
          (e_ += v * ek),
          (ey += v * ez),
          (ev += v * e$),
          (em += v * eH),
          (eb += v * eB),
          (ew += v * eF),
          (eE += v * eK),
          (eo += (v = c[10]) * eP),
          (ea += v * eA),
          (ec += v * eR),
          (el += v * eN),
          (eh += v * eT),
          (ed += v * eU),
          (ep += v * ej),
          (eg += v * eL),
          (e_ += v * eM),
          (ey += v * ek),
          (ev += v * ez),
          (em += v * e$),
          (eb += v * eH),
          (ew += v * eB),
          (eE += v * eF),
          (eD += v * eK),
          (ea += (v = c[11]) * eP),
          (ec += v * eA),
          (el += v * eR),
          (eh += v * eN),
          (ed += v * eT),
          (ep += v * eU),
          (eg += v * ej),
          (e_ += v * eL),
          (ey += v * eM),
          (ev += v * ek),
          (em += v * ez),
          (eb += v * e$),
          (ew += v * eH),
          (eE += v * eB),
          (eD += v * eF),
          (eS += v * eK),
          (ec += (v = c[12]) * eP),
          (el += v * eA),
          (eh += v * eR),
          (ed += v * eN),
          (ep += v * eT),
          (eg += v * eU),
          (e_ += v * ej),
          (ey += v * eL),
          (ev += v * eM),
          (em += v * ek),
          (eb += v * ez),
          (ew += v * e$),
          (eE += v * eH),
          (eD += v * eB),
          (eS += v * eF),
          (eI += v * eK),
          (el += (v = c[13]) * eP),
          (eh += v * eA),
          (ed += v * eR),
          (ep += v * eN),
          (eg += v * eT),
          (e_ += v * eU),
          (ey += v * ej),
          (ev += v * eL),
          (em += v * eM),
          (eb += v * ek),
          (ew += v * ez),
          (eE += v * e$),
          (eD += v * eH),
          (eS += v * eB),
          (eI += v * eF),
          (ex += v * eK),
          (eh += (v = c[14]) * eP),
          (ed += v * eA),
          (ep += v * eR),
          (eg += v * eN),
          (e_ += v * eT),
          (ey += v * eU),
          (ev += v * ej),
          (em += v * eL),
          (eb += v * eM),
          (ew += v * ek),
          (eE += v * ez),
          (eD += v * e$),
          (eS += v * eH),
          (eI += v * eB),
          (ex += v * eF),
          (eC += v * eK),
          (ed += (v = c[15]) * eP),
          (ep += v * eA),
          (eg += v * eR),
          (e_ += v * eN),
          (ey += v * eT),
          (ev += v * eU),
          (em += v * ej),
          (eb += v * eL),
          (ew += v * eM),
          (eE += v * ek),
          (eD += v * ez),
          (eS += v * e$),
          (eI += v * eH),
          (ex += v * eB),
          (eC += v * eF),
          (eO += v * eK),
          (C += 38 * ep),
          (P += 38 * eg),
          (M += 38 * e_),
          (B += 38 * ey),
          (W += 38 * ev),
          (J += 38 * em),
          (X += 38 * eb),
          (Q += 38 * ew),
          (er += 38 * eE),
          (es += 38 * eD),
          (eo += 38 * eS),
          (ea += 38 * eI),
          (ec += 38 * ex),
          (el += 38 * eC),
          (eh += 38 * eO),
          (E = Math.floor((v = C + (E = 1) + 65535) / 65536)),
          (C = v - 65536 * E),
          (E = Math.floor((v = P + E + 65535) / 65536)),
          (P = v - 65536 * E),
          (E = Math.floor((v = M + E + 65535) / 65536)),
          (M = v - 65536 * E),
          (E = Math.floor((v = B + E + 65535) / 65536)),
          (B = v - 65536 * E),
          (E = Math.floor((v = W + E + 65535) / 65536)),
          (W = v - 65536 * E),
          (E = Math.floor((v = J + E + 65535) / 65536)),
          (J = v - 65536 * E),
          (E = Math.floor((v = X + E + 65535) / 65536)),
          (X = v - 65536 * E),
          (E = Math.floor((v = Q + E + 65535) / 65536)),
          (Q = v - 65536 * E),
          (E = Math.floor((v = er + E + 65535) / 65536)),
          (er = v - 65536 * E),
          (E = Math.floor((v = es + E + 65535) / 65536)),
          (es = v - 65536 * E),
          (E = Math.floor((v = eo + E + 65535) / 65536)),
          (eo = v - 65536 * E),
          (E = Math.floor((v = ea + E + 65535) / 65536)),
          (ea = v - 65536 * E),
          (E = Math.floor((v = ec + E + 65535) / 65536)),
          (ec = v - 65536 * E),
          (E = Math.floor((v = el + E + 65535) / 65536)),
          (el = v - 65536 * E),
          (E = Math.floor((v = eh + E + 65535) / 65536)),
          (eh = v - 65536 * E),
          (E = Math.floor((v = ed + E + 65535) / 65536)),
          (ed = v - 65536 * E),
          (C += E - 1 + 37 * (E - 1)),
          (E = Math.floor((v = C + (E = 1) + 65535) / 65536)),
          (C = v - 65536 * E),
          (E = Math.floor((v = P + E + 65535) / 65536)),
          (P = v - 65536 * E),
          (E = Math.floor((v = M + E + 65535) / 65536)),
          (M = v - 65536 * E),
          (E = Math.floor((v = B + E + 65535) / 65536)),
          (B = v - 65536 * E),
          (E = Math.floor((v = W + E + 65535) / 65536)),
          (W = v - 65536 * E),
          (E = Math.floor((v = J + E + 65535) / 65536)),
          (J = v - 65536 * E),
          (E = Math.floor((v = X + E + 65535) / 65536)),
          (X = v - 65536 * E),
          (E = Math.floor((v = Q + E + 65535) / 65536)),
          (Q = v - 65536 * E),
          (E = Math.floor((v = er + E + 65535) / 65536)),
          (er = v - 65536 * E),
          (E = Math.floor((v = es + E + 65535) / 65536)),
          (es = v - 65536 * E),
          (E = Math.floor((v = eo + E + 65535) / 65536)),
          (eo = v - 65536 * E),
          (E = Math.floor((v = ea + E + 65535) / 65536)),
          (ea = v - 65536 * E),
          (E = Math.floor((v = ec + E + 65535) / 65536)),
          (ec = v - 65536 * E),
          (E = Math.floor((v = el + E + 65535) / 65536)),
          (el = v - 65536 * E),
          (E = Math.floor((v = eh + E + 65535) / 65536)),
          (eh = v - 65536 * E),
          (E = Math.floor((v = ed + E + 65535) / 65536)),
          (ed = v - 65536 * E),
          (C += E - 1 + 37 * (E - 1)),
          (i[0] = C),
          (i[1] = P),
          (i[2] = M),
          (i[3] = B),
          (i[4] = W),
          (i[5] = J),
          (i[6] = X),
          (i[7] = Q),
          (i[8] = er),
          (i[9] = es),
          (i[10] = eo),
          (i[11] = ea),
          (i[12] = ec),
          (i[13] = el),
          (i[14] = eh),
          (i[15] = ed);
      }
      function scalarMult(i, c) {
        let l = new Uint8Array(32),
          v = new Float64Array(80),
          E = gf(),
          C = gf(),
          M = gf(),
          B = gf(),
          W = gf(),
          J = gf();
        for (let c = 0; c < 31; c++) l[c] = i[c];
        (l[31] = (127 & i[31]) | 64),
          (l[0] &= 248),
          (function (i, c) {
            for (let l = 0; l < 16; l++) i[l] = c[2 * l] + (c[2 * l + 1] << 8);
            i[15] &= 32767;
          })(v, c);
        for (let i = 0; i < 16; i++) C[i] = v[i];
        E[0] = B[0] = 1;
        for (let i = 254; i >= 0; --i) {
          let c = (l[i >>> 3] >>> (7 & i)) & 1;
          sel25519(E, C, c),
            sel25519(M, B, c),
            add(W, E, M),
            sub(E, E, M),
            add(M, C, B),
            sub(C, C, B),
            mul(B, W, W),
            mul(J, E, E),
            mul(E, M, E),
            mul(M, C, W),
            add(W, E, M),
            sub(E, E, M),
            mul(C, E, E),
            sub(M, B, J),
            mul(E, M, P),
            add(E, E, B),
            mul(M, M, E),
            mul(E, B, J),
            mul(B, C, v),
            mul(C, W, W),
            sel25519(E, C, c),
            sel25519(M, B, c);
        }
        for (let i = 0; i < 16; i++)
          (v[i + 16] = E[i]),
            (v[i + 32] = M[i]),
            (v[i + 48] = C[i]),
            (v[i + 64] = B[i]);
        let X = v.subarray(32),
          Q = v.subarray(16);
        !(function (i, c) {
          let l = gf();
          for (let i = 0; i < 16; i++) l[i] = c[i];
          for (let i = 253; i >= 0; i--)
            mul(l, l, l), 2 !== i && 4 !== i && mul(l, l, c);
          for (let c = 0; c < 16; c++) i[c] = l[c];
        })(X, X),
          mul(Q, Q, X);
        let er = new Uint8Array(32);
        return (
          !(function (i, c) {
            let l = gf(),
              v = gf();
            for (let i = 0; i < 16; i++) v[i] = c[i];
            car25519(v), car25519(v), car25519(v);
            for (let i = 0; i < 2; i++) {
              l[0] = v[0] - 65517;
              for (let i = 1; i < 15; i++)
                (l[i] = v[i] - 65535 - ((l[i - 1] >> 16) & 1)),
                  (l[i - 1] &= 65535);
              l[15] = v[15] - 32767 - ((l[14] >> 16) & 1);
              let i = (l[15] >> 16) & 1;
              (l[14] &= 65535), sel25519(v, l, 1 - i);
            }
            for (let c = 0; c < 16; c++)
              (i[2 * c] = 255 & v[c]), (i[2 * c + 1] = v[c] >> 8);
          })(er, Q),
          er
        );
      }
      (c.Au = function (i) {
        let l = (0, v.randomBytes)(32, i),
          P = (function (i) {
            if (i.length !== c.KS)
              throw Error(`x25519: seed must be ${c.KS} bytes`);
            let l = new Uint8Array(i),
              v = scalarMult(l, C);
            return { publicKey: v, secretKey: l };
          })(l);
        return (0, E.wipe)(l), P;
      }),
        (c.gi = function (i, l, v = !1) {
          if (i.length !== c.kz)
            throw Error("X25519: incorrect secret key length");
          if (l.length !== c.kz)
            throw Error("X25519: incorrect public key length");
          let E = scalarMult(i, l);
          if (v) {
            let i = 0;
            for (let c = 0; c < E.length; c++) i |= E[c];
            if (0 === i) throw Error("X25519: invalid shared key");
          }
          return E;
        });
    },
    40926: function (i, c, l) {
      "use strict";
      function getBrowerCrypto() {
        return (
          (null === l.g || void 0 === l.g ? void 0 : l.g.crypto) ||
          (null === l.g || void 0 === l.g ? void 0 : l.g.msCrypto) ||
          {}
        );
      }
      function getSubtleCrypto() {
        let i = getBrowerCrypto();
        return i.subtle || i.webkitSubtle;
      }
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.isBrowserCryptoAvailable =
          c.getSubtleCrypto =
          c.getBrowerCrypto =
            void 0),
        (c.getBrowerCrypto = getBrowerCrypto),
        (c.getSubtleCrypto = getSubtleCrypto),
        (c.isBrowserCryptoAvailable = function () {
          return !!getBrowerCrypto() && !!getSubtleCrypto();
        });
    },
    88618: function (i, c, l) {
      "use strict";
      var v = l(34155);
      function isReactNative() {
        return (
          "undefined" == typeof document &&
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function isNode() {
        return (
          void 0 !== v && void 0 !== v.versions && void 0 !== v.versions.node
        );
      }
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.isBrowser = c.isNode = c.isReactNative = void 0),
        (c.isReactNative = isReactNative),
        (c.isNode = isNode),
        (c.isBrowser = function () {
          return !isReactNative() && !isNode();
        });
    },
    1468: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      let v = l(70655);
      v.__exportStar(l(40926), c), v.__exportStar(l(88618), c);
    },
    33856: function (i, c, l) {
      "use strict";
      let v;
      l.d(c, {
        OPTIONAL_EVENTS: function () {
          return i9;
        },
        OPTIONAL_METHODS: function () {
          return i8;
        },
        default: function () {
          return index_es_v;
        },
      });
      var E = {};
      l.r(E),
        l.d(E, {
          identity: function () {
            return ev;
          },
        });
      var C = {};
      l.r(C),
        l.d(C, {
          base2: function () {
            return em;
          },
        });
      var P = {};
      l.r(P),
        l.d(P, {
          base8: function () {
            return eb;
          },
        });
      var M = {};
      l.r(M),
        l.d(M, {
          base10: function () {
            return ew;
          },
        });
      var B = {};
      l.r(B),
        l.d(B, {
          base16: function () {
            return eE;
          },
          base16upper: function () {
            return eD;
          },
        });
      var W = {};
      l.r(W),
        l.d(W, {
          base32: function () {
            return eS;
          },
          base32hex: function () {
            return eO;
          },
          base32hexpad: function () {
            return eA;
          },
          base32hexpadupper: function () {
            return eR;
          },
          base32hexupper: function () {
            return eP;
          },
          base32pad: function () {
            return ex;
          },
          base32padupper: function () {
            return eC;
          },
          base32upper: function () {
            return eI;
          },
          base32z: function () {
            return eN;
          },
        });
      var J = {};
      l.r(J),
        l.d(J, {
          base36: function () {
            return eT;
          },
          base36upper: function () {
            return eU;
          },
        });
      var X = {};
      l.r(X),
        l.d(X, {
          base58btc: function () {
            return ej;
          },
          base58flickr: function () {
            return eL;
          },
        });
      var Q = {};
      l.r(Q),
        l.d(Q, {
          base64: function () {
            return eM;
          },
          base64pad: function () {
            return ek;
          },
          base64url: function () {
            return ez;
          },
          base64urlpad: function () {
            return e$;
          },
        });
      var er = {};
      l.r(er),
        l.d(er, {
          base256emoji: function () {
            return eK;
          },
        });
      var es = {};
      l.r(es),
        l.d(es, {
          sha256: function () {
            return eW;
          },
          sha512: function () {
            return eJ;
          },
        });
      var eo = {};
      l.r(eo),
        l.d(eo, {
          identity: function () {
            return eG;
          },
        });
      var ea = {};
      l.r(ea),
        l.d(ea, {
          code: function () {
            return eX;
          },
          decode: function () {
            return raw_decode;
          },
          encode: function () {
            return raw_encode;
          },
          name: function () {
            return eY;
          },
        });
      var ec = {};
      l.r(ec),
        l.d(ec, {
          code: function () {
            return e1;
          },
          decode: function () {
            return json_decode;
          },
          encode: function () {
            return json_encode;
          },
          name: function () {
            return e0;
          },
        });
      var el = l(17187),
        eh = l.n(el),
        ed = l(15501),
        ep = l(512),
        eg = l(31416),
        e_ = l(73294),
        ey = l(57664);
      function as_uint8array_asUint8Array(i) {
        return null != globalThis.Buffer
          ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
          : i;
      }
      function allocUnsafe(i = 0) {
        return null != globalThis.Buffer &&
          null != globalThis.Buffer.allocUnsafe
          ? as_uint8array_asUint8Array(globalThis.Buffer.allocUnsafe(i))
          : new Uint8Array(i);
      }
      function concat(i, c) {
        c || (c = i.reduce((i, c) => i + c.length, 0));
        let l = allocUnsafe(c),
          v = 0;
        for (let c of i) l.set(c, v), (v += c.length);
        return as_uint8array_asUint8Array(l);
      }
      var base_x = function (i, c) {
        if (i.length >= 255) throw TypeError("Alphabet too long");
        for (var l = new Uint8Array(256), v = 0; v < l.length; v++) l[v] = 255;
        for (var E = 0; E < i.length; E++) {
          var C = i.charAt(E),
            P = C.charCodeAt(0);
          if (255 !== l[P]) throw TypeError(C + " is ambiguous");
          l[P] = E;
        }
        var M = i.length,
          B = i.charAt(0),
          W = Math.log(M) / Math.log(256),
          J = Math.log(256) / Math.log(M);
        function decodeUnsafe(i) {
          if ("string" != typeof i) throw TypeError("Expected String");
          if (0 === i.length) return new Uint8Array();
          var c = 0;
          if (" " !== i[0]) {
            for (var v = 0, E = 0; i[c] === B; ) v++, c++;
            for (
              var C = ((i.length - c) * W + 1) >>> 0, P = new Uint8Array(C);
              i[c];

            ) {
              var J = l[i.charCodeAt(c)];
              if (255 === J) return;
              for (
                var X = 0, Q = C - 1;
                (0 !== J || X < E) && -1 !== Q;
                Q--, X++
              )
                (J += (M * P[Q]) >>> 0),
                  (P[Q] = J % 256 >>> 0),
                  (J = (J / 256) >>> 0);
              if (0 !== J) throw Error("Non-zero carry");
              (E = X), c++;
            }
            if (" " !== i[c]) {
              for (var er = C - E; er !== C && 0 === P[er]; ) er++;
              for (var es = new Uint8Array(v + (C - er)), eo = v; er !== C; )
                es[eo++] = P[er++];
              return es;
            }
          }
        }
        return {
          encode: function (c) {
            if (
              (c instanceof Uint8Array ||
                (ArrayBuffer.isView(c)
                  ? (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength))
                  : Array.isArray(c) && (c = Uint8Array.from(c))),
              !(c instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === c.length) return "";
            for (var l = 0, v = 0, E = 0, C = c.length; E !== C && 0 === c[E]; )
              E++, l++;
            for (
              var P = ((C - E) * J + 1) >>> 0, W = new Uint8Array(P);
              E !== C;

            ) {
              for (
                var X = c[E], Q = 0, er = P - 1;
                (0 !== X || Q < v) && -1 !== er;
                er--, Q++
              )
                (X += (256 * W[er]) >>> 0),
                  (W[er] = X % M >>> 0),
                  (X = (X / M) >>> 0);
              if (0 !== X) throw Error("Non-zero carry");
              (v = Q), E++;
            }
            for (var es = P - v; es !== P && 0 === W[es]; ) es++;
            for (var eo = B.repeat(l); es < P; ++es) eo += i.charAt(W[es]);
            return eo;
          },
          decodeUnsafe: decodeUnsafe,
          decode: function (i) {
            var l = decodeUnsafe(i);
            if (l) return l;
            throw Error(`Non-${c} character`);
          },
        };
      };
      new Uint8Array(0);
      let equals = (i, c) => {
          if (i === c) return !0;
          if (i.byteLength !== c.byteLength) return !1;
          for (let l = 0; l < i.byteLength; l++) if (i[l] !== c[l]) return !1;
          return !0;
        },
        coerce = (i) => {
          if (i instanceof Uint8Array && "Uint8Array" === i.constructor.name)
            return i;
          if (i instanceof ArrayBuffer) return new Uint8Array(i);
          if (ArrayBuffer.isView(i))
            return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        bytes_fromString = (i) => new TextEncoder().encode(i),
        bytes_toString = (i) => new TextDecoder().decode(i);
      let Encoder = class Encoder {
        constructor(i, c, l) {
          (this.name = i), (this.prefix = c), (this.baseEncode = l);
        }
        encode(i) {
          if (i instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(i)}`;
          throw Error("Unknown type, must be binary type");
        }
      };
      let Decoder = class Decoder {
        constructor(i, c, l) {
          if (((this.name = i), (this.prefix = c), void 0 === c.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = c.codePointAt(0)), (this.baseDecode = l);
        }
        decode(i) {
          if ("string" == typeof i) {
            if (i.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(i)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(i.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(i) {
          return or(this, i);
        }
      };
      let ComposedDecoder = class ComposedDecoder {
        constructor(i) {
          this.decoders = i;
        }
        or(i) {
          return or(this, i);
        }
        decode(i) {
          let c = i[0],
            l = this.decoders[c];
          if (l) return l.decode(i);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              i
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      };
      let or = (i, c) =>
        new ComposedDecoder({
          ...(i.decoders || { [i.prefix]: i }),
          ...(c.decoders || { [c.prefix]: c }),
        });
      let Codec = class Codec {
        constructor(i, c, l, v) {
          (this.name = i),
            (this.prefix = c),
            (this.baseEncode = l),
            (this.baseDecode = v),
            (this.encoder = new Encoder(i, c, l)),
            (this.decoder = new Decoder(i, c, v));
        }
        encode(i) {
          return this.encoder.encode(i);
        }
        decode(i) {
          return this.decoder.decode(i);
        }
      };
      let from = ({ name: i, prefix: c, encode: l, decode: v }) =>
          new Codec(i, c, l, v),
        baseX = ({ prefix: i, name: c, alphabet: l }) => {
          let { encode: v, decode: E } = base_x(l, c);
          return from({
            prefix: i,
            name: c,
            encode: v,
            decode: (i) => coerce(E(i)),
          });
        },
        decode = (i, c, l, v) => {
          let E = {};
          for (let i = 0; i < c.length; ++i) E[c[i]] = i;
          let C = i.length;
          for (; "=" === i[C - 1]; ) --C;
          let P = new Uint8Array(((C * l) / 8) | 0),
            M = 0,
            B = 0,
            W = 0;
          for (let c = 0; c < C; ++c) {
            let C = E[i[c]];
            if (void 0 === C) throw SyntaxError(`Non-${v} character`);
            (B = (B << l) | C),
              (M += l) >= 8 && ((M -= 8), (P[W++] = 255 & (B >> M)));
          }
          if (M >= l || 255 & (B << (8 - M)))
            throw SyntaxError("Unexpected end of data");
          return P;
        },
        encode = (i, c, l) => {
          let v = "=" === c[c.length - 1],
            E = (1 << l) - 1,
            C = "",
            P = 0,
            M = 0;
          for (let v = 0; v < i.length; ++v)
            for (M = (M << 8) | i[v], P += 8; P > l; )
              (P -= l), (C += c[E & (M >> P)]);
          if ((P && (C += c[E & (M << (l - P))]), v))
            for (; (C.length * l) & 7; ) C += "=";
          return C;
        },
        rfc4648 = ({ name: i, prefix: c, bitsPerChar: l, alphabet: v }) =>
          from({
            prefix: c,
            name: i,
            encode: (i) => encode(i, v, l),
            decode: (c) => decode(c, v, l, i),
          }),
        ev = from({
          prefix: "\x00",
          name: "identity",
          encode: (i) => bytes_toString(i),
          decode: (i) => bytes_fromString(i),
        }),
        em = rfc4648({
          prefix: "0",
          name: "base2",
          alphabet: "01",
          bitsPerChar: 1,
        }),
        eb = rfc4648({
          prefix: "7",
          name: "base8",
          alphabet: "01234567",
          bitsPerChar: 3,
        }),
        ew = baseX({ prefix: "9", name: "base10", alphabet: "0123456789" }),
        eE = rfc4648({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        eD = rfc4648({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        }),
        eS = rfc4648({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        eI = rfc4648({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        ex = rfc4648({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        eC = rfc4648({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        eO = rfc4648({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        eP = rfc4648({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        eA = rfc4648({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        eR = rfc4648({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        eN = rfc4648({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        }),
        eT = baseX({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        eU = baseX({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }),
        ej = baseX({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        eL = baseX({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        }),
        eM = rfc4648({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        ek = rfc4648({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        ez = rfc4648({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        e$ = rfc4648({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        }),
        eH = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        eB = eH.reduce((i, c, l) => ((i[l] = c), i), []),
        eF = eH.reduce((i, c, l) => ((i[c.codePointAt(0)] = l), i), []),
        eK = from({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (i) {
            return i.reduce((i, c) => (i += eB[c]), "");
          },
          decode: function (i) {
            let c = [];
            for (let l of i) {
              let i = eF[l.codePointAt(0)];
              if (void 0 === i) throw Error(`Non-base256emoji character: ${l}`);
              c.push(i);
            }
            return new Uint8Array(c);
          },
        });
      function varint_encode(i, c, l) {
        c = c || [];
        for (var v = (l = l || 0); i >= 2147483648; )
          (c[l++] = (255 & i) | 128), (i /= 128);
        for (; -128 & i; ) (c[l++] = (255 & i) | 128), (i >>>= 7);
        return (c[l] = 0 | i), (varint_encode.bytes = l - v + 1), c;
      }
      function read(i, c) {
        var l,
          v = 0,
          c = c || 0,
          E = 0,
          C = c,
          P = i.length;
        do {
          if (C >= P)
            throw ((read.bytes = 0), RangeError("Could not decode varint"));
          (l = i[C++]),
            (v += E < 28 ? (127 & l) << E : (127 & l) * Math.pow(2, E)),
            (E += 7);
        } while (l >= 128);
        return (read.bytes = C - c), v;
      }
      var eV = {
        encode: varint_encode,
        decode: read,
        encodingLength: function (i) {
          return i < 128
            ? 1
            : i < 16384
            ? 2
            : i < 2097152
            ? 3
            : i < 268435456
            ? 4
            : i < 34359738368
            ? 5
            : i < 4398046511104
            ? 6
            : i < 562949953421312
            ? 7
            : i < 72057594037927940
            ? 8
            : i < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let src_varint_decode = (i, c = 0) => {
          let l = eV.decode(i, c);
          return [l, eV.decode.bytes];
        },
        encodeTo = (i, c, l = 0) => (eV.encode(i, c, l), c),
        encodingLength = (i) => eV.encodingLength(i),
        create = (i, c) => {
          let l = c.byteLength,
            v = encodingLength(i),
            E = v + encodingLength(l),
            C = new Uint8Array(E + l);
          return (
            encodeTo(i, C, 0),
            encodeTo(l, C, v),
            C.set(c, E),
            new Digest(i, l, c, C)
          );
        },
        digest_decode = (i) => {
          let c = coerce(i),
            [l, v] = src_varint_decode(c),
            [E, C] = src_varint_decode(c.subarray(v)),
            P = c.subarray(v + C);
          if (P.byteLength !== E) throw Error("Incorrect length");
          return new Digest(l, E, P, c);
        },
        digest_equals = (i, c) =>
          i === c ||
          (i.code === c.code && i.size === c.size && equals(i.bytes, c.bytes));
      let Digest = class Digest {
        constructor(i, c, l, v) {
          (this.code = i), (this.size = c), (this.digest = l), (this.bytes = v);
        }
      };
      let hasher_from = ({ name: i, code: c, encode: l }) =>
        new Hasher(i, c, l);
      let Hasher = class Hasher {
        constructor(i, c, l) {
          (this.name = i), (this.code = c), (this.encode = l);
        }
        digest(i) {
          if (i instanceof Uint8Array) {
            let c = this.encode(i);
            return c instanceof Uint8Array
              ? create(this.code, c)
              : c.then((i) => create(this.code, i));
          }
          throw Error("Unknown type, must be binary type");
        }
      };
      let sha = (i) => async (c) =>
          new Uint8Array(await crypto.subtle.digest(i, c)),
        eW = hasher_from({
          name: "sha2-256",
          code: 18,
          encode: sha("SHA-256"),
        }),
        eJ = hasher_from({
          name: "sha2-512",
          code: 19,
          encode: sha("SHA-512"),
        }),
        eG = {
          code: 0,
          name: "identity",
          encode: coerce,
          digest: (i) => create(0, coerce(i)),
        },
        eY = "raw",
        eX = 85,
        raw_encode = (i) => coerce(i),
        raw_decode = (i) => coerce(i),
        eZ = new TextEncoder(),
        eQ = new TextDecoder(),
        e0 = "json",
        e1 = 512,
        json_encode = (i) => eZ.encode(JSON.stringify(i)),
        json_decode = (i) => JSON.parse(eQ.decode(i));
      let CID = class CID {
        constructor(i, c, l, v) {
          (this.code = c),
            (this.version = i),
            (this.multihash = l),
            (this.bytes = v),
            (this.byteOffset = v.byteOffset),
            (this.byteLength = v.byteLength),
            (this.asCID = this),
            (this._baseCache = new Map()),
            Object.defineProperties(this, {
              byteOffset: e8,
              byteLength: e8,
              code: e2,
              version: e2,
              multihash: e2,
              bytes: e2,
              _baseCache: e8,
              asCID: e8,
            });
        }
        toV0() {
          if (0 === this.version) return this;
          {
            let { code: i, multihash: c } = this;
            if (i !== e5)
              throw Error("Cannot convert a non dag-pb CID to CIDv0");
            if (c.code !== e3)
              throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
            return CID.createV0(c);
          }
        }
        toV1() {
          switch (this.version) {
            case 0: {
              let { code: i, digest: c } = this.multihash,
                l = create(i, c);
              return CID.createV1(this.code, l);
            }
            case 1:
              return this;
            default:
              throw Error(
                `Can not convert CID version ${this.version} to version 0. This is a bug please report`
              );
          }
        }
        equals(i) {
          return (
            i &&
            this.code === i.code &&
            this.version === i.version &&
            digest_equals(this.multihash, i.multihash)
          );
        }
        toString(i) {
          let { bytes: c, version: l, _baseCache: v } = this;
          return 0 === l
            ? toStringV0(c, v, i || ej.encoder)
            : toStringV1(c, v, i || eS.encoder);
        }
        toJSON() {
          return {
            code: this.code,
            version: this.version,
            hash: this.multihash.bytes,
          };
        }
        get [Symbol.toStringTag]() {
          return "CID";
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return "CID(" + this.toString() + ")";
        }
        static isCID(i) {
          return deprecate(/^0\.0/, e4), !!(i && (i[e6] || i.asCID === i));
        }
        get toBaseEncodedString() {
          throw Error("Deprecated, use .toString()");
        }
        get codec() {
          throw Error(
            '"codec" property is deprecated, use integer "code" property instead'
          );
        }
        get buffer() {
          throw Error(
            "Deprecated .buffer property, use .bytes to get Uint8Array instead"
          );
        }
        get multibaseName() {
          throw Error('"multibaseName" property is deprecated');
        }
        get prefix() {
          throw Error('"prefix" property is deprecated');
        }
        static asCID(i) {
          if (i instanceof CID) return i;
          if (null != i && i.asCID === i) {
            let { version: c, code: l, multihash: v, bytes: E } = i;
            return new CID(c, l, v, E || encodeCID(c, l, v.bytes));
          }
          if (null == i || !0 !== i[e6]) return null;
          {
            let { version: c, multihash: l, code: v } = i,
              E = digest_decode(l);
            return CID.create(c, v, E);
          }
        }
        static create(i, c, l) {
          if ("number" != typeof c)
            throw Error("String codecs are no longer supported");
          switch (i) {
            case 0:
              if (c === e5) return new CID(i, c, l, l.bytes);
              throw Error(
                `Version 0 CID must use dag-pb (code: ${e5}) block encoding`
              );
            case 1: {
              let v = encodeCID(i, c, l.bytes);
              return new CID(i, c, l, v);
            }
            default:
              throw Error("Invalid version");
          }
        }
        static createV0(i) {
          return CID.create(0, e5, i);
        }
        static createV1(i, c) {
          return CID.create(1, i, c);
        }
        static decode(i) {
          let [c, l] = CID.decodeFirst(i);
          if (l.length) throw Error("Incorrect length");
          return c;
        }
        static decodeFirst(i) {
          let c = CID.inspectBytes(i),
            l = c.size - c.multihashSize,
            v = coerce(i.subarray(l, l + c.multihashSize));
          if (v.byteLength !== c.multihashSize) throw Error("Incorrect length");
          let E = v.subarray(c.multihashSize - c.digestSize),
            C = new Digest(c.multihashCode, c.digestSize, E, v),
            P = 0 === c.version ? CID.createV0(C) : CID.createV1(c.codec, C);
          return [P, i.subarray(c.size)];
        }
        static inspectBytes(i) {
          let c = 0,
            next = () => {
              let [l, v] = src_varint_decode(i.subarray(c));
              return (c += v), l;
            },
            l = next(),
            v = e5;
          if (
            (18 === l ? ((l = 0), (c = 0)) : 1 === l && (v = next()),
            0 !== l && 1 !== l)
          )
            throw RangeError(`Invalid CID version ${l}`);
          let E = c,
            C = next(),
            P = next(),
            M = c + P;
          return {
            version: l,
            codec: v,
            multihashCode: C,
            digestSize: P,
            multihashSize: M - E,
            size: M,
          };
        }
        static parse(i, c) {
          let [l, v] = parseCIDtoBytes(i, c),
            E = CID.decode(v);
          return E._baseCache.set(l, i), E;
        }
      };
      let parseCIDtoBytes = (i, c) => {
          switch (i[0]) {
            case "Q":
              return [ej.prefix, (c || ej).decode(`${ej.prefix}${i}`)];
            case ej.prefix:
              return [ej.prefix, (c || ej).decode(i)];
            case eS.prefix:
              return [eS.prefix, (c || eS).decode(i)];
            default:
              if (null == c)
                throw Error(
                  "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
                );
              return [i[0], c.decode(i)];
          }
        },
        toStringV0 = (i, c, l) => {
          let { prefix: v } = l;
          if (v !== ej.prefix)
            throw Error(`Cannot string encode V0 in ${l.name} encoding`);
          let E = c.get(v);
          if (null != E) return E;
          {
            let E = l.encode(i).slice(1);
            return c.set(v, E), E;
          }
        },
        toStringV1 = (i, c, l) => {
          let { prefix: v } = l,
            E = c.get(v);
          if (null != E) return E;
          {
            let E = l.encode(i);
            return c.set(v, E), E;
          }
        },
        e5 = 112,
        e3 = 18,
        encodeCID = (i, c, l) => {
          let v = encodingLength(i),
            E = v + encodingLength(c),
            C = new Uint8Array(E + l.byteLength);
          return encodeTo(i, C, 0), encodeTo(c, C, v), C.set(l, E), C;
        },
        e6 = Symbol.for("@ipld/js-cid/CID"),
        e2 = { writable: !1, configurable: !1, enumerable: !0 },
        e8 = { writable: !1, enumerable: !1, configurable: !1 },
        deprecate = (i, c) => {
          if (i.test("0.0.0-dev")) console.warn(c);
          else throw Error(c);
        },
        e4 = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
        e9 = { ...E, ...C, ...P, ...M, ...B, ...W, ...J, ...X, ...Q, ...er };
      function createCodec(i, c, l, v) {
        return {
          name: i,
          prefix: c,
          encoder: { name: i, prefix: c, encode: l },
          decoder: { decode: v },
        };
      }
      ({ ...es, ...eo });
      let e7 = createCodec(
          "utf8",
          "u",
          (i) => {
            let c = new TextDecoder("utf8");
            return "u" + c.decode(i);
          },
          (i) => {
            let c = new TextEncoder();
            return c.encode(i.substring(1));
          }
        ),
        tn = createCodec(
          "ascii",
          "a",
          (i) => {
            let c = "a";
            for (let l = 0; l < i.length; l++) c += String.fromCharCode(i[l]);
            return c;
          },
          (i) => {
            i = i.substring(1);
            let c = allocUnsafe(i.length);
            for (let l = 0; l < i.length; l++) c[l] = i.charCodeAt(l);
            return c;
          }
        ),
        ts = {
          utf8: e7,
          "utf-8": e7,
          hex: e9.base16,
          latin1: tn,
          ascii: tn,
          binary: tn,
          ...e9,
        };
      function from_string_fromString(i, c = "utf8") {
        let l = ts[c];
        if (!l) throw Error(`Unsupported encoding "${c}"`);
        return ("utf8" === c || "utf-8" === c) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? as_uint8array_asUint8Array(globalThis.Buffer.from(i, "utf-8"))
          : l.decoder.decode(`${l.prefix}${i}`);
      }
      function to_string_toString(i, c = "utf8") {
        let l = ts[c];
        if (!l) throw Error(`Unsupported encoding "${c}"`);
        return ("utf8" === c || "utf-8" === c) &&
          null != globalThis.Buffer &&
          null != globalThis.Buffer.from
          ? globalThis.Buffer.from(
              i.buffer,
              i.byteOffset,
              i.byteLength
            ).toString("utf8")
          : l.encoder.encode(i).substring(1);
      }
      var to = l(34155),
        __spreadArray = function (i, c, l) {
          if (l || 2 == arguments.length)
            for (var v, E = 0, C = c.length; E < C; E++)
              (!v && E in c) ||
                (v || (v = Array.prototype.slice.call(c, 0, E)), (v[E] = c[E]));
          return i.concat(v || Array.prototype.slice.call(c));
        },
        BrowserInfo = function (i, c, l) {
          (this.name = i),
            (this.version = c),
            (this.os = l),
            (this.type = "browser");
        },
        NodeInfo = function (i) {
          (this.version = i),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = to.platform);
        },
        SearchBotDeviceInfo = function (i, c, l, v) {
          (this.name = i),
            (this.version = c),
            (this.os = l),
            (this.bot = v),
            (this.type = "bot-device");
        },
        BotInfo = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        ReactNativeInfo = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        tc =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        tl = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        th = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function parseUserAgent(i) {
        var c =
          "" !== i &&
          tl.reduce(function (c, l) {
            var v = l[0],
              E = l[1];
            if (c) return c;
            var C = E.exec(i);
            return !!C && [v, C];
          }, !1);
        if (!c) return null;
        var l = c[0],
          v = c[1];
        if ("searchbot" === l) return new BotInfo();
        var E = v[1] && v[1].split(".").join("_").split("_").slice(0, 3);
        E
          ? E.length < 3 &&
            (E = __spreadArray(
              __spreadArray([], E, !0),
              (function (i) {
                for (var c = [], l = 0; l < i; l++) c.push("0");
                return c;
              })(3 - E.length),
              !0
            ))
          : (E = []);
        var C = E.join("."),
          P = (function (i) {
            for (var c = 0, l = th.length; c < l; c++) {
              var v = th[c],
                E = v[0];
              if (v[1].exec(i)) return E;
            }
            return null;
          })(i),
          M = tc.exec(i);
        return M && M[1]
          ? new SearchBotDeviceInfo(l, C, P, M[1])
          : new BrowserInfo(l, C, P);
      }
      var tf = l(66736),
        td = l(62873),
        tp = l(65755),
        tg = l(66151);
      l(61882);
      let t_ = {
        waku: {
          publish: "waku_publish",
          batchPublish: "waku_batchPublish",
          subscribe: "waku_subscribe",
          batchSubscribe: "waku_batchSubscribe",
          subscription: "waku_subscription",
          unsubscribe: "waku_unsubscribe",
          batchUnsubscribe: "waku_batchUnsubscribe",
        },
        irn: {
          publish: "irn_publish",
          batchPublish: "irn_batchPublish",
          subscribe: "irn_subscribe",
          batchSubscribe: "irn_batchSubscribe",
          subscription: "irn_subscription",
          unsubscribe: "irn_unsubscribe",
          batchUnsubscribe: "irn_batchUnsubscribe",
        },
        iridium: {
          publish: "iridium_publish",
          batchPublish: "iridium_batchPublish",
          subscribe: "iridium_subscribe",
          batchSubscribe: "iridium_batchSubscribe",
          subscription: "iridium_subscription",
          unsubscribe: "iridium_unsubscribe",
          batchUnsubscribe: "iridium_batchUnsubscribe",
        },
      };
      var ty = l(34155);
      function k(i, c) {
        return i.includes(":") ? [i] : c.chains || [];
      }
      let tm = "base10",
        tb = "base16",
        tw = "base64pad",
        tE = "utf8";
      function An() {
        let i = (0, eg.randomBytes)(32);
        return to_string_toString(i, tb);
      }
      function $n(i) {
        let c = (0, e_.vp)(from_string_fromString(i, tE));
        return to_string_toString(c, tb);
      }
      function $(i) {
        return Number(to_string_toString(i, tm));
      }
      function Z(i) {
        let c = from_string_fromString(i, tw),
          l = c.slice(0, 1);
        if (1 === $(l)) {
          let i = c.slice(1, 33),
            v = c.slice(33, 45),
            E = c.slice(45);
          return { type: l, sealed: E, iv: v, senderPublicKey: i };
        }
        let v = c.slice(1, 13),
          E = c.slice(13);
        return { type: l, sealed: E, iv: v };
      }
      function Pe(i) {
        let c = i?.type || 0;
        if (1 === c) {
          if (typeof i?.senderPublicKey > "u")
            throw Error("missing sender public key");
          if (typeof i?.receiverPublicKey > "u")
            throw Error("missing receiver public key");
        }
        return {
          type: c,
          senderPublicKey: i?.senderPublicKey,
          receiverPublicKey: i?.receiverPublicKey,
        };
      }
      function Vn(i) {
        return (
          1 === i.type &&
          "string" == typeof i.senderPublicKey &&
          "string" == typeof i.receiverPublicKey
        );
      }
      var tD = Object.defineProperty,
        tS = Object.getOwnPropertySymbols,
        tI = Object.prototype.hasOwnProperty,
        tx = Object.prototype.propertyIsEnumerable,
        Re = (i, c, l) =>
          c in i
            ? tD(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (i[c] = l),
        we = (i, c) => {
          for (var l in c || (c = {})) tI.call(c, l) && Re(i, l, c[l]);
          if (tS) for (var l of tS(c)) tx.call(c, l) && Re(i, l, c[l]);
          return i;
        };
      let tC = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown",
      };
      function ee() {
        return (
          "u" > typeof ty &&
          "u" > typeof ty.versions &&
          "u" > typeof ty.versions.node
        );
      }
      function $e() {
        return (
          !(0, td.getDocument)() &&
          !!(0, td.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function je() {
        return !ee() && !!(0, td.getNavigator)();
      }
      function j() {
        return $e()
          ? tC.reactNative
          : ee()
          ? tC.node
          : je()
          ? tC.browser
          : tC.unknown;
      }
      function O(i, c) {
        return i.filter((i) => c.includes(i)).length === i.length;
      }
      function Bn(i) {
        return Object.fromEntries(i.entries());
      }
      function Yn(i) {
        return new Map(Object.entries(i));
      }
      function Xn(i = tf.FIVE_MINUTES, c) {
        let l, v, E;
        let C = (0, tf.toMiliseconds)(i || tf.FIVE_MINUTES);
        return {
          resolve: (i) => {
            E && l && (clearTimeout(E), l(i));
          },
          reject: (i) => {
            E && v && (clearTimeout(E), v(i));
          },
          done: () =>
            new Promise((i, P) => {
              (E = setTimeout(() => {
                P(Error(c));
              }, C)),
                (l = i),
                (v = P);
            }),
        };
      }
      function et(i, c, l) {
        return new Promise(async (v, E) => {
          let C = setTimeout(() => E(Error(l)), c);
          try {
            let c = await i;
            v(c);
          } catch (i) {
            E(i);
          }
          clearTimeout(C);
        });
      }
      function ne(i, c) {
        if ("string" == typeof c && c.startsWith(`${i}:`)) return c;
        if ("topic" === i.toLowerCase()) {
          if ("string" != typeof c)
            throw Error(
              'Value must be "string" for expirer target type: topic'
            );
          return `topic:${c}`;
        }
        if ("id" === i.toLowerCase()) {
          if ("number" != typeof c)
            throw Error('Value must be "number" for expirer target type: id');
          return `id:${c}`;
        }
        throw Error(`Unknown expirer target type: ${i}`);
      }
      function rt(i) {
        let [c, l] = i.split(":"),
          v = { id: void 0, topic: void 0 };
        if ("topic" === c && "string" == typeof l) v.topic = l;
        else if ("id" === c && Number.isInteger(Number(l))) v.id = Number(l);
        else
          throw Error(
            `Invalid target, expected id:number or topic:string, got ${c}:${l}`
          );
        return v;
      }
      function ot(i, c) {
        return (0, tf.fromMiliseconds)(
          (c || Date.now()) + (0, tf.toMiliseconds)(i)
        );
      }
      function st(i) {
        return Date.now() >= (0, tf.toMiliseconds)(i);
      }
      function it(i, c) {
        return `${i}${c ? `:${c}` : ""}`;
      }
      function S(i = [], c = []) {
        return [...new Set([...i, ...c])];
      }
      async function ct({ id: i, topic: c, wcDeepLink: v }) {
        try {
          if (!v) return;
          let E = "string" == typeof v ? JSON.parse(v) : v,
            C = E?.href;
          if ("string" != typeof C) return;
          C.endsWith("/") && (C = C.slice(0, -1));
          let P = `${C}/wc?requestId=${i}&sessionTopic=${c}`,
            M = j();
          M === tC.browser
            ? P.startsWith("https://")
              ? window.open(P, "_blank", "noreferrer noopener")
              : window.open(P, "_self", "noreferrer noopener")
            : M === tC.reactNative &&
              "u" > typeof (null == l.g ? void 0 : l.g.Linking) &&
              (await l.g.Linking.openURL(P));
        } catch (i) {
          console.error(i);
        }
      }
      function at(i) {
        return i?.relay || { protocol: "irn" };
      }
      function ut(i) {
        let c = t_[i];
        if (typeof c > "u") throw Error(`Relay Protocol not supported: ${i}`);
        return c;
      }
      var tO = Object.defineProperty,
        tP = Object.getOwnPropertySymbols,
        tA = Object.prototype.hasOwnProperty,
        tR = Object.prototype.propertyIsEnumerable,
        He = (i, c, l) =>
          c in i
            ? tO(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (i[c] = l),
        pt = (i, c) => {
          for (var l in c || (c = {})) tA.call(c, l) && He(i, l, c[l]);
          if (tP) for (var l of tP(c)) tR.call(c, l) && He(i, l, c[l]);
          return i;
        };
      function R(i) {
        let c = [];
        return (
          i.forEach((i) => {
            let [l, v] = i.split(":");
            c.push(`${l}:${v}`);
          }),
          c
        );
      }
      function te(i) {
        return i.includes(":");
      }
      function Ze(i) {
        return te(i) ? i.split(":")[0] : i;
      }
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      let tN = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        tT = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function b(i, c) {
        let { message: l, code: v } = tT[i];
        return { message: c ? `${l} ${c}` : l, code: v };
      }
      function w(i, c) {
        let { message: l, code: v } = tN[i];
        return { message: c ? `${l} ${c}` : l, code: v };
      }
      function index_es_C(i, c) {
        return (
          !!Array.isArray(i) && (!("u" > typeof c) || !i.length || i.every(c))
        );
      }
      function H(i) {
        return (
          Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length
        );
      }
      function I(i) {
        return typeof i > "u";
      }
      function m(i, c) {
        return !!(c && I(i)) || ("string" == typeof i && !!i.trim().length);
      }
      function q(i, c) {
        return !!(c && I(i)) || ("number" == typeof i && !isNaN(i));
      }
      function D(i) {
        return !!(m(i, !1) && i.includes(":")) && 2 === i.split(":").length;
      }
      function oe(i) {
        let c = !0;
        return (
          index_es_C(i) ? i.length && (c = i.every((i) => m(i, !1))) : (c = !1),
          c
        );
      }
      function se(i, c) {
        let l = null;
        return (
          Object.values(i).forEach((i) => {
            var v;
            let E;
            if (l) return;
            let C =
              ((v = `${c}, namespace`),
              (E = null),
              oe(i?.methods)
                ? oe(i?.events) ||
                  (E = w(
                    "UNSUPPORTED_EVENTS",
                    `${v}, events should be an array of strings or empty array for no events`
                  ))
                : (E = w(
                    "UNSUPPORTED_METHODS",
                    `${v}, methods should be an array of strings or empty array for no methods`
                  )),
              E);
            C && (l = C);
          }),
          l
        );
      }
      function sn(i, c) {
        let l = null;
        if (i && H(i)) {
          let v;
          let E = se(i, c);
          E && (l = E);
          let C =
            ((v = null),
            Object.values(i).forEach((i) => {
              var l, E;
              let C;
              if (v) return;
              let P =
                ((l = i?.accounts),
                (E = `${c} namespace`),
                (C = null),
                index_es_C(l)
                  ? l.forEach((i) => {
                      C ||
                        (function (i) {
                          if (m(i, !1) && i.includes(":")) {
                            let c = i.split(":");
                            if (3 === c.length) {
                              let i = c[0] + ":" + c[1];
                              return !!c[2] && D(i);
                            }
                          }
                          return !1;
                        })(i) ||
                        (C = w(
                          "UNSUPPORTED_ACCOUNTS",
                          `${E}, account ${i} should be a string and conform to "namespace:chainId:address" format`
                        ));
                    })
                  : (C = w(
                      "UNSUPPORTED_ACCOUNTS",
                      `${E}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
                    )),
                C);
              P && (v = P);
            }),
            v);
          C && (l = C);
        } else
          l = b(
            "MISSING_OR_INVALID",
            `${c}, namespaces should be an object with data`
          );
        return l;
      }
      function cn(i) {
        return m(i.protocol, !0);
      }
      function Dt(i) {
        return "u" > typeof i;
      }
      function Lt(i, c) {
        return !(
          !D(c) ||
          !(function (i) {
            let c = [];
            return (
              Object.values(i).forEach((i) => {
                c.push(...R(i.accounts));
              }),
              c
            );
          })(i).includes(c)
        );
      }
      function an(i, c, l) {
        let v = null,
          E = (function (i) {
            let c = {};
            return (
              Object.keys(i).forEach((l) => {
                var v;
                l.includes(":")
                  ? (c[l] = i[l])
                  : null == (v = i[l].chains) ||
                    v.forEach((v) => {
                      c[v] = { methods: i[l].methods, events: i[l].events };
                    });
              }),
              c
            );
          })(i),
          C = (function (i) {
            let c = {};
            return (
              Object.keys(i).forEach((l) => {
                if (l.includes(":")) c[l] = i[l];
                else {
                  let v = R(i[l].accounts);
                  v?.forEach((v) => {
                    c[v] = {
                      accounts: i[l].accounts.filter((i) =>
                        i.includes(`${v}:`)
                      ),
                      methods: i[l].methods,
                      events: i[l].events,
                    };
                  });
                }
              }),
              c
            );
          })(c),
          P = Object.keys(E),
          M = Object.keys(C),
          B = un(Object.keys(i)),
          W = un(Object.keys(c)),
          J = B.filter((i) => !W.includes(i));
        return (
          J.length &&
            (v = b(
              "NON_CONFORMING_NAMESPACES",
              `${l} namespaces keys don't satisfy requiredNamespaces.
      Required: ${J.toString()}
      Received: ${Object.keys(c).toString()}`
            )),
          O(P, M) ||
            (v = b(
              "NON_CONFORMING_NAMESPACES",
              `${l} namespaces chains don't satisfy required namespaces.
      Required: ${P.toString()}
      Approved: ${M.toString()}`
            )),
          Object.keys(c).forEach((i) => {
            if (!i.includes(":") || v) return;
            let E = R(c[i].accounts);
            E.includes(i) ||
              (v = b(
                "NON_CONFORMING_NAMESPACES",
                `${l} namespaces accounts don't satisfy namespace accounts for ${i}
        Required: ${i}
        Approved: ${E.toString()}`
              ));
          }),
          P.forEach((i) => {
            v ||
              (O(E[i].methods, C[i].methods)
                ? O(E[i].events, C[i].events) ||
                  (v = b(
                    "NON_CONFORMING_NAMESPACES",
                    `${l} namespaces events don't satisfy namespace events for ${i}`
                  ))
                : (v = b(
                    "NON_CONFORMING_NAMESPACES",
                    `${l} namespaces methods don't satisfy namespace methods for ${i}`
                  )));
          }),
          v
        );
      }
      function un(i) {
        return [
          ...new Set(i.map((i) => (i.includes(":") ? i.split(":")[0] : i))),
        ];
      }
      let tU =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        tj =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        tL = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function jsonParseTransform(i, c) {
        if (
          "__proto__" === i ||
          ("constructor" === i && c && "object" == typeof c && "prototype" in c)
        ) {
          console.warn(
            `[destr] Dropping "${i}" key to prevent prototype pollution.`
          );
          return;
        }
        return c;
      }
      function destr(i, c = {}) {
        if ("string" != typeof i) return i;
        let l = i.trim();
        if ('"' === i[0] && '"' === i.at(-1) && !i.includes("\\"))
          return l.slice(1, -1);
        if (l.length <= 9) {
          let i = l.toLowerCase();
          if ("true" === i) return !0;
          if ("false" === i) return !1;
          if ("undefined" === i) return;
          if ("null" === i) return null;
          if ("nan" === i) return Number.NaN;
          if ("infinity" === i) return Number.POSITIVE_INFINITY;
          if ("-infinity" === i) return Number.NEGATIVE_INFINITY;
        }
        if (!tL.test(i)) {
          if (c.strict) throw SyntaxError("[destr] Invalid JSON");
          return i;
        }
        try {
          if (tU.test(i) || tj.test(i)) {
            if (c.strict) throw Error("[destr] Possible prototype pollution");
            return JSON.parse(i, jsonParseTransform);
          }
          return JSON.parse(i);
        } catch (l) {
          if (c.strict) throw l;
          return i;
        }
      }
      var tM = l(48764).Buffer;
      function asyncCall(i, ...c) {
        try {
          var l;
          return (l = i(...c)) && "function" == typeof l.then
            ? l
            : Promise.resolve(l);
        } catch (i) {
          return Promise.reject(i);
        }
      }
      function stringify(i) {
        if (
          (function (i) {
            let c = typeof i;
            return null === i || ("object" !== c && "function" !== c);
          })(i)
        )
          return String(i);
        if (
          (function (i) {
            let c = Object.getPrototypeOf(i);
            return !c || c.isPrototypeOf(Object);
          })(i) ||
          Array.isArray(i)
        )
          return JSON.stringify(i);
        if ("function" == typeof i.toJSON) return stringify(i.toJSON());
        throw Error("[unstorage] Cannot stringify value!");
      }
      let tk = "base64:";
      function normalizeKey(i) {
        return i
          ? i
              .split("?")[0]
              .replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")
          : "";
      }
      function unstorage_8581f561_normalizeBaseKey(i) {
        return (i = normalizeKey(i)) ? i + ":" : "";
      }
      let memory = () => {
        let i = new Map();
        return {
          name: "memory",
          options: {},
          hasItem: (c) => i.has(c),
          getItem: (c) => i.get(c) ?? null,
          getItemRaw: (c) => i.get(c) ?? null,
          setItem(c, l) {
            i.set(c, l);
          },
          setItemRaw(c, l) {
            i.set(c, l);
          },
          removeItem(c) {
            i.delete(c);
          },
          getKeys: () => Array.from(i.keys()),
          clear() {
            i.clear();
          },
          dispose() {
            i.clear();
          },
        };
      };
      function watch(i, c, l) {
        return i.watch ? i.watch((i, v) => c(i, l + v)) : () => {};
      }
      async function dispose(i) {
        "function" == typeof i.dispose && (await asyncCall(i.dispose));
      }
      function promisifyRequest(i) {
        return new Promise((c, l) => {
          (i.oncomplete = i.onsuccess = () => c(i.result)),
            (i.onabort = i.onerror = () => l(i.error));
        });
      }
      function createStore(i, c) {
        let l = indexedDB.open(i);
        l.onupgradeneeded = () => l.result.createObjectStore(c);
        let v = promisifyRequest(l);
        return (i, l) => v.then((v) => l(v.transaction(c, i).objectStore(c)));
      }
      function defaultGetStore() {
        return v || (v = createStore("keyval-store", "keyval")), v;
      }
      function get(i, c = defaultGetStore()) {
        return c("readonly", (c) => promisifyRequest(c.get(i)));
      }
      let JSONStringify = (i) =>
          JSON.stringify(i, (i, c) =>
            "bigint" == typeof c ? c.toString() + "n" : c
          ),
        JSONParse = (i) => {
          let c = i.replace(
            /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            '$1"$2n"$3'
          );
          return JSON.parse(c, (i, c) => {
            let l = "string" == typeof c && c.match(/^\d+n$/);
            return l ? BigInt(c.substring(0, c.length - 1)) : c;
          });
        };
      function esm_safeJsonParse(i) {
        if ("string" != typeof i)
          throw Error(`Cannot safe json parse value of type ${typeof i}`);
        try {
          return JSONParse(i);
        } catch (c) {
          return i;
        }
      }
      function safeJsonStringify(i) {
        return "string" == typeof i ? i : JSONStringify(i) || "";
      }
      var z = (i = {}) => {
        let c;
        let l = i.base && i.base.length > 0 ? `${i.base}:` : "",
          e = (i) => l + i;
        return (
          i.dbName && i.storeName && (c = createStore(i.dbName, i.storeName)),
          {
            name: "idb-keyval",
            options: i,
            hasItem: async (i) => !(typeof (await get(e(i), c)) > "u"),
            getItem: async (i) => (await get(e(i), c)) ?? null,
            setItem: (i, l) =>
              (function (i, c, l = defaultGetStore()) {
                return l(
                  "readwrite",
                  (l) => (l.put(c, i), promisifyRequest(l.transaction))
                );
              })(e(i), l, c),
            removeItem: (i) =>
              (function (i, c = defaultGetStore()) {
                return c(
                  "readwrite",
                  (c) => (c.delete(i), promisifyRequest(c.transaction))
                );
              })(e(i), c),
            getKeys: () =>
              (function (i = defaultGetStore()) {
                return i("readonly", (i) => {
                  var c;
                  if (i.getAllKeys) return promisifyRequest(i.getAllKeys());
                  let l = [];
                  return ((c = (i) => l.push(i.key)),
                  (i.openCursor().onsuccess = function () {
                    this.result && (c(this.result), this.result.continue());
                  }),
                  promisifyRequest(i.transaction)).then(() => l);
                });
              })(c),
            clear: () =>
              (function (i = defaultGetStore()) {
                return i(
                  "readwrite",
                  (i) => (i.clear(), promisifyRequest(i.transaction))
                );
              })(c),
          }
        );
      };
      let _ = class _ {
        constructor() {
          this.indexedDb = (function (i = {}) {
            let c = {
                mounts: { "": i.driver || memory() },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              getMount = (i) => {
                for (let l of c.mountpoints)
                  if (i.startsWith(l))
                    return {
                      base: l,
                      relativeKey: i.slice(l.length),
                      driver: c.mounts[l],
                    };
                return { base: "", relativeKey: i, driver: c.mounts[""] };
              },
              getMounts = (i, l) =>
                c.mountpoints
                  .filter((c) => c.startsWith(i) || (l && i.startsWith(c)))
                  .map((l) => ({
                    relativeBase:
                      i.length > l.length ? i.slice(l.length) : void 0,
                    mountpoint: l,
                    driver: c.mounts[l],
                  })),
              onChange = (i, l) => {
                if (c.watching)
                  for (let v of ((l = normalizeKey(l)), c.watchListeners))
                    v(i, l);
              },
              startWatch = async () => {
                if (!c.watching)
                  for (let i in ((c.watching = !0), c.mounts))
                    c.unwatch[i] = await watch(c.mounts[i], onChange, i);
              },
              stopWatch = async () => {
                if (c.watching) {
                  for (let i in c.unwatch) await c.unwatch[i]();
                  (c.unwatch = {}), (c.watching = !1);
                }
              },
              runBatch = (i, c, l) => {
                let v = new Map(),
                  getBatch = (i) => {
                    let c = v.get(i.base);
                    return (
                      c ||
                        ((c = { driver: i.driver, base: i.base, items: [] }),
                        v.set(i.base, c)),
                      c
                    );
                  };
                for (let l of i) {
                  let i = "string" == typeof l,
                    v = normalizeKey(i ? l : l.key),
                    E = i ? void 0 : l.value,
                    C = i || !l.options ? c : { ...c, ...l.options },
                    P = getMount(v);
                  getBatch(P).items.push({
                    key: v,
                    value: E,
                    relativeKey: P.relativeKey,
                    options: C,
                  });
                }
                return Promise.all([...v.values()].map((i) => l(i))).then((i) =>
                  i.flat()
                );
              },
              l = {
                hasItem(i, c = {}) {
                  i = normalizeKey(i);
                  let { relativeKey: l, driver: v } = getMount(i);
                  return asyncCall(v.hasItem, l, c);
                },
                getItem(i, c = {}) {
                  i = normalizeKey(i);
                  let { relativeKey: l, driver: v } = getMount(i);
                  return asyncCall(v.getItem, l, c).then((i) => destr(i));
                },
                getItems: (i, c) =>
                  runBatch(i, c, (i) =>
                    i.driver.getItems
                      ? asyncCall(
                          i.driver.getItems,
                          i.items.map((i) => ({
                            key: i.relativeKey,
                            options: i.options,
                          })),
                          c
                        ).then((c) =>
                          c.map((c) => ({
                            key: (function (...i) {
                              return normalizeKey(i.join(":"));
                            })(i.base, c.key),
                            value: destr(c.value),
                          }))
                        )
                      : Promise.all(
                          i.items.map((c) =>
                            asyncCall(
                              i.driver.getItem,
                              c.relativeKey,
                              c.options
                            ).then((i) => ({ key: c.key, value: destr(i) }))
                          )
                        )
                  ),
                getItemRaw(i, c = {}) {
                  i = normalizeKey(i);
                  let { relativeKey: l, driver: v } = getMount(i);
                  return v.getItemRaw
                    ? asyncCall(v.getItemRaw, l, c)
                    : asyncCall(v.getItem, l, c).then((i) =>
                        "string" == typeof i && i.startsWith(tk)
                          ? tM.from(i.slice(tk.length), "base64")
                          : i
                      );
                },
                async setItem(i, c, v = {}) {
                  if (void 0 === c) return l.removeItem(i);
                  i = normalizeKey(i);
                  let { relativeKey: E, driver: C } = getMount(i);
                  C.setItem &&
                    (await asyncCall(C.setItem, E, stringify(c), v),
                    C.watch || onChange("update", i));
                },
                async setItems(i, c) {
                  await runBatch(i, c, async (i) => {
                    i.driver.setItems &&
                      (await asyncCall(
                        i.driver.setItems,
                        i.items.map((i) => ({
                          key: i.relativeKey,
                          value: stringify(i.value),
                          options: i.options,
                        })),
                        c
                      )),
                      i.driver.setItem &&
                        (await Promise.all(
                          i.items.map((c) =>
                            asyncCall(
                              i.driver.setItem,
                              c.relativeKey,
                              stringify(c.value),
                              c.options
                            )
                          )
                        ));
                  });
                },
                async setItemRaw(i, c, v = {}) {
                  if (void 0 === c) return l.removeItem(i, v);
                  i = normalizeKey(i);
                  let { relativeKey: E, driver: C } = getMount(i);
                  if (C.setItemRaw) await asyncCall(C.setItemRaw, E, c, v);
                  else {
                    if (!C.setItem) return;
                    await asyncCall(
                      C.setItem,
                      E,
                      (function (i) {
                        if ("string" == typeof i) return i;
                        let c = tM.from(i).toString("base64");
                        return tk + c;
                      })(c),
                      v
                    );
                  }
                  C.watch || onChange("update", i);
                },
                async removeItem(i, c = {}) {
                  "boolean" == typeof c && (c = { removeMeta: c }),
                    (i = normalizeKey(i));
                  let { relativeKey: l, driver: v } = getMount(i);
                  v.removeItem &&
                    (await asyncCall(v.removeItem, l, c),
                    (c.removeMeta || c.removeMata) &&
                      (await asyncCall(v.removeItem, l + "$", c)),
                    v.watch || onChange("remove", i));
                },
                async getMeta(i, c = {}) {
                  "boolean" == typeof c && (c = { nativeOnly: c }),
                    (i = normalizeKey(i));
                  let { relativeKey: l, driver: v } = getMount(i),
                    E = Object.create(null);
                  if (
                    (v.getMeta &&
                      Object.assign(E, await asyncCall(v.getMeta, l, c)),
                    !c.nativeOnly)
                  ) {
                    let i = await asyncCall(v.getItem, l + "$", c).then((i) =>
                      destr(i)
                    );
                    i &&
                      "object" == typeof i &&
                      ("string" == typeof i.atime &&
                        (i.atime = new Date(i.atime)),
                      "string" == typeof i.mtime &&
                        (i.mtime = new Date(i.mtime)),
                      Object.assign(E, i));
                  }
                  return E;
                },
                setMeta(i, c, l = {}) {
                  return this.setItem(i + "$", c, l);
                },
                removeMeta(i, c = {}) {
                  return this.removeItem(i + "$", c);
                },
                async getKeys(i, c = {}) {
                  i = unstorage_8581f561_normalizeBaseKey(i);
                  let l = getMounts(i, !0),
                    v = [],
                    E = [];
                  for (let i of l) {
                    let l = await asyncCall(
                        i.driver.getKeys,
                        i.relativeBase,
                        c
                      ),
                      C = l
                        .map((c) => i.mountpoint + normalizeKey(c))
                        .filter((i) => !v.some((c) => i.startsWith(c)));
                    E.push(...C),
                      (v = [
                        i.mountpoint,
                        ...v.filter((c) => !c.startsWith(i.mountpoint)),
                      ]);
                  }
                  return i
                    ? E.filter((c) => c.startsWith(i) && !c.endsWith("$"))
                    : E.filter((i) => !i.endsWith("$"));
                },
                async clear(i, c = {}) {
                  (i = unstorage_8581f561_normalizeBaseKey(i)),
                    await Promise.all(
                      getMounts(i, !1).map(async (i) => {
                        if (i.driver.clear)
                          return asyncCall(i.driver.clear, i.relativeBase, c);
                        if (i.driver.removeItem) {
                          let l = await i.driver.getKeys(
                            i.relativeBase || "",
                            c
                          );
                          return Promise.all(
                            l.map((l) => i.driver.removeItem(l, c))
                          );
                        }
                      })
                    );
                },
                async dispose() {
                  await Promise.all(
                    Object.values(c.mounts).map((i) => dispose(i))
                  );
                },
                watch: async (i) => (
                  await startWatch(),
                  c.watchListeners.push(i),
                  async () => {
                    (c.watchListeners = c.watchListeners.filter(
                      (c) => c !== i
                    )),
                      0 === c.watchListeners.length && (await stopWatch());
                  }
                ),
                async unwatch() {
                  (c.watchListeners = []), await stopWatch();
                },
                mount(i, v) {
                  if (
                    (i = unstorage_8581f561_normalizeBaseKey(i)) &&
                    c.mounts[i]
                  )
                    throw Error(`already mounted at ${i}`);
                  return (
                    i &&
                      (c.mountpoints.push(i),
                      c.mountpoints.sort((i, c) => c.length - i.length)),
                    (c.mounts[i] = v),
                    c.watching &&
                      Promise.resolve(watch(v, onChange, i))
                        .then((l) => {
                          c.unwatch[i] = l;
                        })
                        .catch(console.error),
                    l
                  );
                },
                async unmount(i, l = !0) {
                  (i = unstorage_8581f561_normalizeBaseKey(i)) &&
                    c.mounts[i] &&
                    (c.watching &&
                      i in c.unwatch &&
                      (c.unwatch[i](), delete c.unwatch[i]),
                    l && (await dispose(c.mounts[i])),
                    (c.mountpoints = c.mountpoints.filter((c) => c !== i)),
                    delete c.mounts[i]);
                },
                getMount(i = "") {
                  i = normalizeKey(i) + ":";
                  let c = getMount(i);
                  return { driver: c.driver, base: c.base };
                },
                getMounts(i = "", c = {}) {
                  i = normalizeKey(i);
                  let l = getMounts(i, c.parents);
                  return l.map((i) => ({
                    driver: i.driver,
                    base: i.mountpoint,
                  }));
                },
              };
            return l;
          })({
            driver: z({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((i) => [i.key, i.value]);
        }
        async getItem(i) {
          let c = await this.indexedDb.getItem(i);
          if (null !== c) return c;
        }
        async setItem(i, c) {
          await this.indexedDb.setItem(i, safeJsonStringify(c));
        }
        async removeItem(i) {
          await this.indexedDb.removeItem(i);
        }
      };
      var tz =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof l.g
            ? l.g
            : "u" > typeof self
            ? self
            : {},
        t$ = { exports: {} };
      function index_es_k(i) {
        var c;
        return [i[0], esm_safeJsonParse(null != (c = i[1]) ? c : "")];
      }
      !(function () {
        function t() {}
        (t.prototype.getItem = function (i) {
          return this.hasOwnProperty(i) ? String(this[i]) : null;
        }),
          (t.prototype.setItem = function (i, c) {
            this[i] = String(c);
          }),
          (t.prototype.removeItem = function (i) {
            delete this[i];
          }),
          (t.prototype.clear = function () {
            let i = this;
            Object.keys(i).forEach(function (c) {
              (i[c] = void 0), delete i[c];
            });
          }),
          (t.prototype.key = function (i) {
            return (i = i || 0), Object.keys(this)[i];
          }),
          t.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          "u" > typeof tz && tz.localStorage
            ? (t$.exports = tz.localStorage)
            : "u" > typeof window && window.localStorage
            ? (t$.exports = window.localStorage)
            : (t$.exports = new t());
      })();
      let index_es_K = class index_es_K {
        constructor() {
          this.localStorage = t$.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(index_es_k);
        }
        async getItem(i) {
          let c = this.localStorage.getItem(i);
          if (null !== c) return esm_safeJsonParse(c);
        }
        async setItem(i, c) {
          this.localStorage.setItem(i, safeJsonStringify(c));
        }
        async removeItem(i) {
          this.localStorage.removeItem(i);
        }
      };
      let index_es_O = async (i, c, l) => {
          let v = "wc_storage_version",
            E = await c.getItem(v);
          if (E && E >= 1) {
            l(c);
            return;
          }
          let C = await i.getKeys();
          if (!C.length) {
            l(c);
            return;
          }
          let P = [];
          for (; C.length; ) {
            let l = C.shift();
            if (!l) continue;
            let v = l.toLowerCase();
            if (
              v.includes("wc@") ||
              v.includes("walletconnect") ||
              v.includes("wc_") ||
              v.includes("wallet_connect")
            ) {
              let v = await i.getItem(l);
              await c.setItem(l, v), P.push(l);
            }
          }
          await c.setItem(v, 1), l(c), index_es_j(i, P);
        },
        index_es_j = async (i, c) => {
          c.length &&
            c.forEach(async (c) => {
              await i.removeItem(c);
            });
        };
      let h = class h {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (i) => {
              (this.storage = i), (this.initialized = !0);
            });
          let i = new index_es_K();
          this.storage = i;
          try {
            let c = new _();
            index_es_O(i, c, this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(i) {
          return await this.initialize(), this.storage.getItem(i);
        }
        async setItem(i, c) {
          return await this.initialize(), this.storage.setItem(i, c);
        }
        async removeItem(i) {
          return await this.initialize(), this.storage.removeItem(i);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((i) => {
              let c = setInterval(() => {
                this.initialized && (clearInterval(c), i());
              }, 20);
            }));
        }
      };
      var tH = l(90772),
        tq = l(9107),
        tB = l(38200);
      let n = class n extends tB.q {
        constructor(i) {
          super(), (this.opts = i), (this.protocol = "wc"), (this.version = 2);
        }
      };
      let index_es_h = class index_es_h extends tB.q {
        constructor(i, c) {
          super(),
            (this.core = i),
            (this.logger = c),
            (this.records = new Map());
        }
      };
      let a = class a {
        constructor(i, c) {
          (this.logger = i), (this.core = c);
        }
      };
      let u = class u extends tB.q {
        constructor(i, c) {
          super(), (this.relayer = i), (this.logger = c);
        }
      };
      let g = class g extends tB.q {
        constructor(i) {
          super();
        }
      };
      let p = class p {
        constructor(i, c, l, v) {
          (this.core = i), (this.logger = c), (this.name = l);
        }
      };
      let d = class d extends tB.q {
        constructor(i, c) {
          super(), (this.relayer = i), (this.logger = c);
        }
      };
      let index_es_E = class index_es_E extends tB.q {
        constructor(i, c) {
          super(), (this.core = i), (this.logger = c);
        }
      };
      let index_es_y = class index_es_y {
        constructor(i, c) {
          (this.projectId = i), (this.logger = c);
        }
      };
      let index_es_b = class index_es_b {
        constructor(i) {
          (this.opts = i), (this.protocol = "wc"), (this.version = 2);
        }
      };
      let index_es_S = class index_es_S {
        constructor(i) {
          this.client = i;
        }
      };
      var tF = l(31050);
      let tK = "base64url",
        tV = "base58btc";
      function encodeJSON(i) {
        return to_string_toString(
          from_string_fromString(safeJsonStringify(i), "utf8"),
          tK
        );
      }
      function encodeIss(i) {
        let c = from_string_fromString("K36", tV),
          l = "z" + to_string_toString(concat([c, i]), tV);
        return ["did", "key", l].join(":");
      }
      function generateKeyPair(i = (0, eg.randomBytes)(32)) {
        return tF._w(i);
      }
      async function signJWT(
        i,
        c,
        l,
        v,
        E = (0, tf.fromMiliseconds)(Date.now())
      ) {
        var C, P;
        let M = { alg: "EdDSA", typ: "JWT" },
          B = encodeIss(v.publicKey),
          W = { iss: B, sub: i, aud: c, iat: E, exp: E + l },
          J = from_string_fromString(
            [
              encodeJSON((C = { header: M, payload: W }).header),
              encodeJSON(C.payload),
            ].join("."),
            "utf8"
          ),
          X = tF.Xx(v.secretKey, J);
        return [
          encodeJSON((P = { header: M, payload: W, signature: X }).header),
          encodeJSON(P.payload),
          to_string_toString(P.signature, tK),
        ].join(".");
      }
      l(43014);
      let tW = "INTERNAL_ERROR",
        tJ = "SERVER_ERROR",
        tG = [-32700, -32600, -32601, -32602, -32603],
        tY = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [tW]: { code: -32603, message: "Internal error" },
          [tJ]: { code: -32e3, message: "Server error" },
        };
      function getError(i) {
        return Object.keys(tY).includes(i) ? tY[i] : tY[tJ];
      }
      function parseConnectionError(i, c, l) {
        return i.message.includes("getaddrinfo ENOTFOUND") ||
          i.message.includes("connect ECONNREFUSED")
          ? Error(`Unavailable ${l} RPC url at ${c}`)
          : i;
      }
      var tX = l(1468);
      function payloadId(i = 3) {
        let c = Date.now() * Math.pow(10, i);
        return c + Math.floor(Math.random() * Math.pow(10, i));
      }
      function getBigIntRpcId(i = 6) {
        return BigInt(payloadId(i));
      }
      function formatJsonRpcRequest(i, c, l) {
        return { id: l || payloadId(), jsonrpc: "2.0", method: i, params: c };
      }
      function formatJsonRpcResult(i, c) {
        return { id: i, jsonrpc: "2.0", result: c };
      }
      function formatJsonRpcError(i, c, l) {
        var v, E;
        return {
          id: i,
          jsonrpc: "2.0",
          error:
            void 0 === (v = c)
              ? getError(tW)
              : ("string" == typeof v &&
                  (v = Object.assign(Object.assign({}, getError(tJ)), {
                    message: v,
                  })),
                void 0 !== l && (v.data = l),
                (E = v.code),
                tG.includes(E) &&
                  (v = (function (i) {
                    let c = Object.values(tY).find((c) => c.code === i);
                    return c || tY[tJ];
                  })(v.code)),
                v),
        };
      }
      let misc_IEvents = class misc_IEvents {};
      let IBaseJsonRpcProvider = class IBaseJsonRpcProvider extends misc_IEvents {
        constructor() {
          super();
        }
      };
      let IJsonRpcProvider = class IJsonRpcProvider extends IBaseJsonRpcProvider {
        constructor(i) {
          super();
        }
      };
      function matchRegexProtocol(i, c) {
        let l = (function (i) {
          let c = i.match(RegExp(/^\w+:/, "gi"));
          if (c && c.length) return c[0];
        })(i);
        return void 0 !== l && new RegExp(c).test(l);
      }
      function isHttpUrl(i) {
        return matchRegexProtocol(i, "^https?:");
      }
      function isWsUrl(i) {
        return matchRegexProtocol(i, "^wss?:");
      }
      function isJsonRpcPayload(i) {
        return (
          "object" == typeof i &&
          "id" in i &&
          "jsonrpc" in i &&
          "2.0" === i.jsonrpc
        );
      }
      function isJsonRpcRequest(i) {
        return isJsonRpcPayload(i) && "method" in i;
      }
      function isJsonRpcResponse(i) {
        return isJsonRpcPayload(i) && (isJsonRpcResult(i) || isJsonRpcError(i));
      }
      function isJsonRpcResult(i) {
        return "result" in i;
      }
      function isJsonRpcError(i) {
        return "error" in i;
      }
      let JsonRpcProvider = class JsonRpcProvider extends IJsonRpcProvider {
        constructor(i) {
          super(i),
            (this.events = new el.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(i)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect(i = this.connection) {
          await this.open(i);
        }
        async disconnect() {
          await this.close();
        }
        on(i, c) {
          this.events.on(i, c);
        }
        once(i, c) {
          this.events.once(i, c);
        }
        off(i, c) {
          this.events.off(i, c);
        }
        removeListener(i, c) {
          this.events.removeListener(i, c);
        }
        async request(i, c) {
          return this.requestStrict(
            formatJsonRpcRequest(
              i.method,
              i.params || [],
              i.id || getBigIntRpcId().toString()
            ),
            c
          );
        }
        async requestStrict(i, c) {
          return new Promise(async (l, v) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (i) {
                v(i);
              }
            this.events.on(`${i.id}`, (i) => {
              isJsonRpcError(i) ? v(i.error) : l(i.result);
            });
            try {
              await this.connection.send(i, c);
            } catch (i) {
              v(i);
            }
          });
        }
        setConnection(i = this.connection) {
          return i;
        }
        onPayload(i) {
          this.events.emit("payload", i),
            isJsonRpcResponse(i)
              ? this.events.emit(`${i.id}`, i)
              : this.events.emit("message", { type: i.method, data: i.params });
        }
        onClose(i) {
          i &&
            3e3 === i.code &&
            this.events.emit(
              "error",
              Error(
                `WebSocket connection closed abnormally with code: ${i.code} ${
                  i.reason ? `(${i.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        async open(i = this.connection) {
          (this.connection === i && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" == typeof i &&
              (await this.connection.open(i), (i = this.connection)),
            (this.connection = this.setConnection(i)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (i) => this.onPayload(i)),
            this.connection.on("close", (i) => this.onClose(i)),
            this.connection.on("error", (i) => this.events.emit("error", i)),
            this.connection.on("register_error", (i) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      };
      let isBrowser = () => "undefined" != typeof window,
        truncateQuery = (i) => i.split("?")[0],
        tZ =
          void 0 !== l.g && void 0 !== l.g.WebSocket
            ? l.g.WebSocket
            : "undefined" != typeof window && void 0 !== window.WebSocket
            ? window.WebSocket
            : l(57026);
      var tQ = class {
          constructor(i) {
            if (
              ((this.url = i),
              (this.events = new el.EventEmitter()),
              (this.registering = !1),
              !isWsUrl(i))
            )
              throw Error(
                `Provided URL is not compatible with WebSocket connection: ${i}`
              );
            this.url = i;
          }
          get connected() {
            return void 0 !== this.socket;
          }
          get connecting() {
            return this.registering;
          }
          on(i, c) {
            this.events.on(i, c);
          }
          once(i, c) {
            this.events.once(i, c);
          }
          off(i, c) {
            this.events.off(i, c);
          }
          removeListener(i, c) {
            this.events.removeListener(i, c);
          }
          async open(i = this.url) {
            await this.register(i);
          }
          async close() {
            return new Promise((i, c) => {
              if (void 0 === this.socket) {
                c(Error("Connection already closed"));
                return;
              }
              (this.socket.onclose = (c) => {
                this.onClose(c), i();
              }),
                this.socket.close();
            });
          }
          async send(i, c) {
            void 0 === this.socket && (this.socket = await this.register());
            try {
              this.socket.send(safeJsonStringify(i));
            } catch (c) {
              this.onError(i.id, c);
            }
          }
          register(i = this.url) {
            if (!isWsUrl(i))
              throw Error(
                `Provided URL is not compatible with WebSocket connection: ${i}`
              );
            if (this.registering) {
              let i = this.events.getMaxListeners();
              return (
                (this.events.listenerCount("register_error") >= i ||
                  this.events.listenerCount("open") >= i) &&
                  this.events.setMaxListeners(i + 1),
                new Promise((i, c) => {
                  this.events.once("register_error", (i) => {
                    this.resetMaxListeners(), c(i);
                  }),
                    this.events.once("open", () => {
                      if ((this.resetMaxListeners(), void 0 === this.socket))
                        return c(
                          Error("WebSocket connection is missing or invalid")
                        );
                      i(this.socket);
                    });
                })
              );
            }
            return (
              (this.url = i),
              (this.registering = !0),
              new Promise((c, l) => {
                let v = (0, tX.isReactNative)()
                    ? void 0
                    : {
                        rejectUnauthorized: !RegExp(
                          "wss?://localhost(:d{2,5})?"
                        ).test(i),
                      },
                  E = new tZ(i, [], v);
                isBrowser()
                  ? (E.onerror = (i) => {
                      l(this.emitError(i.error));
                    })
                  : E.on("error", (i) => {
                      l(this.emitError(i));
                    }),
                  (E.onopen = () => {
                    this.onOpen(E), c(E);
                  });
              })
            );
          }
          onOpen(i) {
            (i.onmessage = (i) => this.onPayload(i)),
              (i.onclose = (i) => this.onClose(i)),
              (this.socket = i),
              (this.registering = !1),
              this.events.emit("open");
          }
          onClose(i) {
            (this.socket = void 0),
              (this.registering = !1),
              this.events.emit("close", i);
          }
          onPayload(i) {
            if (void 0 === i.data) return;
            let c =
              "string" == typeof i.data ? esm_safeJsonParse(i.data) : i.data;
            this.events.emit("payload", c);
          }
          onError(i, c) {
            let l = this.parseError(c),
              v = l.message || l.toString(),
              E = formatJsonRpcError(i, v);
            this.events.emit("payload", E);
          }
          parseError(i, c = this.url) {
            return parseConnectionError(i, truncateQuery(c), "WS");
          }
          resetMaxListeners() {
            this.events.getMaxListeners() > 10 &&
              this.events.setMaxListeners(10);
          }
          emitError(i) {
            let c = this.parseError(
              Error(
                (null == i ? void 0 : i.message) ||
                  `WebSocket connection failed for host: ${truncateQuery(
                    this.url
                  )}`
              )
            );
            return this.events.emit("register_error", c), c;
          }
        },
        t0 = l(72307),
        t1 = l.n(t0),
        t5 = l(34155),
        Mi = function (i, c) {
          if (i.length >= 255) throw TypeError("Alphabet too long");
          for (var l = new Uint8Array(256), v = 0; v < l.length; v++)
            l[v] = 255;
          for (var E = 0; E < i.length; E++) {
            var C = i.charAt(E),
              P = C.charCodeAt(0);
            if (255 !== l[P]) throw TypeError(C + " is ambiguous");
            l[P] = E;
          }
          var M = i.length,
            B = i.charAt(0),
            W = Math.log(M) / Math.log(256),
            J = Math.log(256) / Math.log(M);
          function b(i) {
            if ("string" != typeof i) throw TypeError("Expected String");
            if (0 === i.length) return new Uint8Array();
            var c = 0;
            if (" " !== i[0]) {
              for (var v = 0, E = 0; i[c] === B; ) v++, c++;
              for (
                var C = ((i.length - c) * W + 1) >>> 0, P = new Uint8Array(C);
                i[c];

              ) {
                var J = l[i.charCodeAt(c)];
                if (255 === J) return;
                for (
                  var X = 0, Q = C - 1;
                  (0 !== J || X < E) && -1 !== Q;
                  Q--, X++
                )
                  (J += (M * P[Q]) >>> 0),
                    (P[Q] = J % 256 >>> 0),
                    (J = (J / 256) >>> 0);
                if (0 !== J) throw Error("Non-zero carry");
                (E = X), c++;
              }
              if (" " !== i[c]) {
                for (var er = C - E; er !== C && 0 === P[er]; ) er++;
                for (var es = new Uint8Array(v + (C - er)), eo = v; er !== C; )
                  es[eo++] = P[er++];
                return es;
              }
            }
          }
          return {
            encode: function (c) {
              if (
                (c instanceof Uint8Array ||
                  (ArrayBuffer.isView(c)
                    ? (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength))
                    : Array.isArray(c) && (c = Uint8Array.from(c))),
                !(c instanceof Uint8Array))
              )
                throw TypeError("Expected Uint8Array");
              if (0 === c.length) return "";
              for (
                var l = 0, v = 0, E = 0, C = c.length;
                E !== C && 0 === c[E];

              )
                E++, l++;
              for (
                var P = ((C - E) * J + 1) >>> 0, W = new Uint8Array(P);
                E !== C;

              ) {
                for (
                  var X = c[E], Q = 0, er = P - 1;
                  (0 !== X || Q < v) && -1 !== er;
                  er--, Q++
                )
                  (X += (256 * W[er]) >>> 0),
                    (W[er] = X % M >>> 0),
                    (X = (X / M) >>> 0);
                if (0 !== X) throw Error("Non-zero carry");
                (v = Q), E++;
              }
              for (var es = P - v; es !== P && 0 === W[es]; ) es++;
              for (var eo = B.repeat(l); es < P; ++es) eo += i.charAt(W[es]);
              return eo;
            },
            decodeUnsafe: b,
            decode: function (i) {
              var l = b(i);
              if (l) return l;
              throw Error(`Non-${c} character`);
            },
          };
        };
      let index_es_Oe = (i) => {
          if (i instanceof Uint8Array && "Uint8Array" === i.constructor.name)
            return i;
          if (i instanceof ArrayBuffer) return new Uint8Array(i);
          if (ArrayBuffer.isView(i))
            return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
          throw Error("Unknown type, must be binary type");
        },
        Ki = (i) => new TextEncoder().encode(i),
        ki = (i) => new TextDecoder().decode(i);
      let Bi = class Bi {
        constructor(i, c, l) {
          (this.name = i), (this.prefix = c), (this.baseEncode = l);
        }
        encode(i) {
          if (i instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(i)}`;
          throw Error("Unknown type, must be binary type");
        }
      };
      let ji = class ji {
        constructor(i, c, l) {
          if (((this.name = i), (this.prefix = c), void 0 === c.codePointAt(0)))
            throw Error("Invalid prefix character");
          (this.prefixCodePoint = c.codePointAt(0)), (this.baseDecode = l);
        }
        decode(i) {
          if ("string" == typeof i) {
            if (i.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(i)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(i.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(i) {
          return index_es_xe(this, i);
        }
      };
      let Vi = class Vi {
        constructor(i) {
          this.decoders = i;
        }
        or(i) {
          return index_es_xe(this, i);
        }
        decode(i) {
          let c = i[0],
            l = this.decoders[c];
          if (l) return l.decode(i);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              i
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      };
      let index_es_xe = (i, c) =>
        new Vi({
          ...(i.decoders || { [i.prefix]: i }),
          ...(c.decoders || { [c.prefix]: c }),
        });
      let qi = class qi {
        constructor(i, c, l, v) {
          (this.name = i),
            (this.prefix = c),
            (this.baseEncode = l),
            (this.baseDecode = v),
            (this.encoder = new Bi(i, c, l)),
            (this.decoder = new ji(i, c, v));
        }
        encode(i) {
          return this.encoder.encode(i);
        }
        decode(i) {
          return this.decoder.decode(i);
        }
      };
      let index_es_H = ({ name: i, prefix: c, encode: l, decode: v }) =>
          new qi(i, c, l, v),
        index_es_M = ({ prefix: i, name: c, alphabet: l }) => {
          let { encode: v, decode: E } = Mi(l, c);
          return index_es_H({
            prefix: i,
            name: c,
            encode: v,
            decode: (i) => index_es_Oe(E(i)),
          });
        },
        Yi = (i, c, l, v) => {
          let E = {};
          for (let i = 0; i < c.length; ++i) E[c[i]] = i;
          let C = i.length;
          for (; "=" === i[C - 1]; ) --C;
          let P = new Uint8Array(((C * l) / 8) | 0),
            M = 0,
            B = 0,
            W = 0;
          for (let c = 0; c < C; ++c) {
            let C = E[i[c]];
            if (void 0 === C) throw SyntaxError(`Non-${v} character`);
            (B = (B << l) | C),
              (M += l) >= 8 && ((M -= 8), (P[W++] = 255 & (B >> M)));
          }
          if (M >= l || 255 & (B << (8 - M)))
            throw SyntaxError("Unexpected end of data");
          return P;
        },
        Gi = (i, c, l) => {
          let v = "=" === c[c.length - 1],
            E = (1 << l) - 1,
            C = "",
            P = 0,
            M = 0;
          for (let v = 0; v < i.length; ++v)
            for (M = (M << 8) | i[v], P += 8; P > l; )
              (P -= l), (C += c[E & (M >> P)]);
          if ((P && (C += c[E & (M << (l - P))]), v))
            for (; (C.length * l) & 7; ) C += "=";
          return C;
        },
        index_es_p = ({ name: i, prefix: c, bitsPerChar: l, alphabet: v }) =>
          index_es_H({
            prefix: c,
            name: i,
            encode: (i) => Gi(i, v, l),
            decode: (c) => Yi(c, v, l, i),
          }),
        t3 = index_es_H({
          prefix: "\x00",
          name: "identity",
          encode: (i) => ki(i),
          decode: (i) => Ki(i),
        });
      var t6 = Object.freeze({ __proto__: null, identity: t3 });
      let t2 = index_es_p({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var t8 = Object.freeze({ __proto__: null, base2: t2 });
      let t4 = index_es_p({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var t9 = Object.freeze({ __proto__: null, base8: t4 });
      let t7 = index_es_M({
        prefix: "9",
        name: "base10",
        alphabet: "0123456789",
      });
      var re = Object.freeze({ __proto__: null, base10: t7 });
      let rs = index_es_p({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        ro = index_es_p({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var rc = Object.freeze({ __proto__: null, base16: rs, base16upper: ro });
      let ru = index_es_p({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        rl = index_es_p({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        rh = index_es_p({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        rf = index_es_p({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        rd = index_es_p({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        rp = index_es_p({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        rg = index_es_p({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        r_ = index_es_p({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        ry = index_es_p({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var rv = Object.freeze({
        __proto__: null,
        base32: ru,
        base32upper: rl,
        base32pad: rh,
        base32padupper: rf,
        base32hex: rd,
        base32hexupper: rp,
        base32hexpad: rg,
        base32hexpadupper: r_,
        base32z: ry,
      });
      let rm = index_es_M({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        rb = index_es_M({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var rw = Object.freeze({ __proto__: null, base36: rm, base36upper: rb });
      let rE = index_es_M({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        rD = index_es_M({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var rS = Object.freeze({
        __proto__: null,
        base58btc: rE,
        base58flickr: rD,
      });
      let rI = index_es_p({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        rx = index_es_p({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        rC = index_es_p({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        rO = index_es_p({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var rP = Object.freeze({
        __proto__: null,
        base64: rI,
        base64pad: rx,
        base64url: rC,
        base64urlpad: rO,
      });
      let rA = Array.from(
          "\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"
        ),
        rR = rA.reduce((i, c, l) => ((i[l] = c), i), []),
        rN = rA.reduce((i, c, l) => ((i[c.codePointAt(0)] = l), i), []),
        rT = index_es_H({
          prefix: "\uD83D\uDE80",
          name: "base256emoji",
          encode: function (i) {
            return i.reduce((i, c) => (i += rR[c]), "");
          },
          decode: function (i) {
            let c = [];
            for (let l of i) {
              let i = rN[l.codePointAt(0)];
              if (void 0 === i) throw Error(`Non-base256emoji character: ${l}`);
              c.push(i);
            }
            return new Uint8Array(c);
          },
        });
      var rU = Object.freeze({ __proto__: null, base256emoji: rT });
      function index_es_Ne(i, c, l) {
        (c = c || []), (l = l || 0);
        for (var v = l; i >= 2147483648; )
          (c[l++] = (255 & i) | 128), (i /= 128);
        for (; -128 & i; ) (c[l++] = (255 & i) | 128), (i >>>= 7);
        return (c[l] = 0 | i), (index_es_Ne.bytes = l - v + 1), c;
      }
      function ae(i, c) {
        var l,
          v = 0,
          c = c || 0,
          E = 0,
          C = c,
          P = i.length;
        do {
          if (C >= P)
            throw ((ae.bytes = 0), RangeError("Could not decode varint"));
          (l = i[C++]),
            (v += E < 28 ? (127 & l) << E : (127 & l) * Math.pow(2, E)),
            (E += 7);
        } while (l >= 128);
        return (ae.bytes = C - c), v;
      }
      var rj = {
        encode: index_es_Ne,
        decode: ae,
        encodingLength: function (i) {
          return i < 128
            ? 1
            : i < 16384
            ? 2
            : i < 2097152
            ? 3
            : i < 268435456
            ? 4
            : i < 34359738368
            ? 5
            : i < 4398046511104
            ? 6
            : i < 562949953421312
            ? 7
            : i < 72057594037927940
            ? 8
            : i < 0x7fffffffffffffff
            ? 9
            : 10;
        },
      };
      let index_es_Fe = (i, c, l = 0) => (rj.encode(i, c, l), c),
        index_es_$e = (i) => rj.encodingLength(i),
        index_es_oe = (i, c) => {
          let l = c.byteLength,
            v = index_es_$e(i),
            E = v + index_es_$e(l),
            C = new Uint8Array(E + l);
          return (
            index_es_Fe(i, C, 0),
            index_es_Fe(l, C, v),
            C.set(c, E),
            new Hs(i, l, c, C)
          );
        };
      let Hs = class Hs {
        constructor(i, c, l, v) {
          (this.code = i), (this.size = c), (this.digest = l), (this.bytes = v);
        }
      };
      let index_es_Me = ({ name: i, code: c, encode: l }) => new Ws(i, c, l);
      let Ws = class Ws {
        constructor(i, c, l) {
          (this.name = i), (this.code = c), (this.encode = l);
        }
        digest(i) {
          if (i instanceof Uint8Array) {
            let c = this.encode(i);
            return c instanceof Uint8Array
              ? index_es_oe(this.code, c)
              : c.then((i) => index_es_oe(this.code, i));
          }
          throw Error("Unknown type, must be binary type");
        }
      };
      let index_es_Ke = (i) => async (c) =>
          new Uint8Array(await crypto.subtle.digest(i, c)),
        rL = index_es_Me({
          name: "sha2-256",
          code: 18,
          encode: index_es_Ke("SHA-256"),
        }),
        rM = index_es_Me({
          name: "sha2-512",
          code: 19,
          encode: index_es_Ke("SHA-512"),
        });
      var rk = Object.freeze({ __proto__: null, sha256: rL, sha512: rM }),
        rz = Object.freeze({
          __proto__: null,
          identity: {
            code: 0,
            name: "identity",
            encode: index_es_Oe,
            digest: (i) => index_es_oe(0, index_es_Oe(i)),
          },
        });
      new TextEncoder(), new TextDecoder();
      let r$ = {
        ...t6,
        ...t8,
        ...t9,
        ...re,
        ...rc,
        ...rv,
        ...rw,
        ...rS,
        ...rP,
        ...rU,
      };
      function index_es_Ve(i) {
        return null != globalThis.Buffer
          ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength)
          : i;
      }
      function index_es_qe(i, c, l, v) {
        return {
          name: i,
          prefix: c,
          encoder: { name: i, prefix: c, encode: l },
          decoder: { decode: v },
        };
      }
      ({ ...rk, ...rz });
      let rH = index_es_qe(
          "utf8",
          "u",
          (i) => "u" + new TextDecoder("utf8").decode(i),
          (i) => new TextEncoder().encode(i.substring(1))
        ),
        rq = index_es_qe(
          "ascii",
          "a",
          (i) => {
            let c = "a";
            for (let l = 0; l < i.length; l++) c += String.fromCharCode(i[l]);
            return c;
          },
          (i) => {
            i = i.substring(1);
            let c = (function (i = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? index_es_Ve(globalThis.Buffer.allocUnsafe(i))
                : new Uint8Array(i);
            })(i.length);
            for (let l = 0; l < i.length; l++) c[l] = i.charCodeAt(l);
            return c;
          }
        ),
        rB = {
          utf8: rH,
          "utf-8": rH,
          hex: r$.base16,
          latin1: rq,
          ascii: rq,
          binary: rq,
          ...r$,
        },
        rF = "core",
        rK = `wc@2:${rF}:`,
        rV = { logger: "error" },
        rW = { database: ":memory:" },
        rJ = "client_ed25519_seed",
        rG = tf.ONE_DAY,
        rY = tf.SIX_HOURS,
        rX = "wss://relay.walletconnect.com",
        rZ = "wss://relay.walletconnect.org",
        rQ = {
          message: "relayer_message",
          message_ack: "relayer_message_ack",
          connect: "relayer_connect",
          disconnect: "relayer_disconnect",
          error: "relayer_error",
          connection_stalled: "relayer_connection_stalled",
          transport_closed: "relayer_transport_closed",
          publish: "relayer_publish",
        },
        r0 = {
          payload: "payload",
          connect: "connect",
          disconnect: "disconnect",
          error: "error",
        },
        r1 = tf.ONE_SECOND / 2,
        r5 = {
          created: "subscription_created",
          deleted: "subscription_deleted",
          sync: "subscription_sync",
          resubscribed: "subscription_resubscribed",
        },
        r3 = 1e3 * tf.FIVE_SECONDS,
        r6 = {
          wc_pairingDelete: {
            req: { ttl: tf.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: tf.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: tf.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: tf.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: tf.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: tf.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        r2 = {
          created: "history_created",
          updated: "history_updated",
          deleted: "history_deleted",
          sync: "history_sync",
        },
        r8 = {
          created: "expirer_created",
          deleted: "expirer_deleted",
          expired: "expirer_expired",
          sync: "expirer_sync",
        },
        r4 = "verify-api",
        r9 = "https://verify.walletconnect.com";
      let index_es_vt = class index_es_vt {
        constructor(i, c) {
          (this.core = i),
            (this.logger = c),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = rK),
            (this.init = async () => {
              if (!this.initialized) {
                let i = await this.getKeyChain();
                "u" > typeof i && (this.keychain = i), (this.initialized = !0);
              }
            }),
            (this.has = (i) => (this.isInitialized(), this.keychain.has(i))),
            (this.set = async (i, c) => {
              this.isInitialized(),
                this.keychain.set(i, c),
                await this.persist();
            }),
            (this.get = (i) => {
              this.isInitialized();
              let c = this.keychain.get(i);
              if (typeof c > "u") {
                let { message: c } = b("NO_MATCHING_KEY", `${this.name}: ${i}`);
                throw Error(c);
              }
              return c;
            }),
            (this.del = async (i) => {
              this.isInitialized(),
                this.keychain.delete(i),
                await this.persist();
            }),
            (this.core = i),
            (this.logger = (0, tq.generateChildLogger)(c, this.name));
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        async setKeyChain(i) {
          await this.core.storage.setItem(this.storageKey, Bn(i));
        }
        async getKeyChain() {
          let i = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof i ? Yn(i) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: i } = b("NOT_INITIALIZED", this.name);
            throw Error(i);
          }
        }
      };
      let index_es_It = class index_es_It {
        constructor(i, c, l) {
          (this.core = i),
            (this.logger = c),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (i) => (
              this.isInitialized(), this.keychain.has(i)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              let i = await this.getClientSeed(),
                c = generateKeyPair(i);
              return encodeIss(c.publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              let i = (function () {
                let i = ey.Au();
                return {
                  privateKey: to_string_toString(i.secretKey, tb),
                  publicKey: to_string_toString(i.publicKey, tb),
                };
              })();
              return this.setPrivateKey(i.publicKey, i.privateKey);
            }),
            (this.signJWT = async (i) => {
              this.isInitialized();
              let c = await this.getClientSeed(),
                l = generateKeyPair(c),
                v = An();
              return await signJWT(v, i, rG, l);
            }),
            (this.generateSharedKey = (i, c, l) => {
              this.isInitialized();
              let v = this.getPrivateKey(i),
                E = (function (i, c) {
                  let l = ey.gi(
                      from_string_fromString(i, tb),
                      from_string_fromString(c, tb)
                    ),
                    v = new ep.t(e_.mE, l).expand(32);
                  return to_string_toString(v, tb);
                })(v, c);
              return this.setSymKey(E, l);
            }),
            (this.setSymKey = async (i, c) => {
              this.isInitialized();
              let l =
                c ||
                (function (i) {
                  let c = (0, e_.vp)(from_string_fromString(i, tb));
                  return to_string_toString(c, tb);
                })(i);
              return await this.keychain.set(l, i), l;
            }),
            (this.deleteKeyPair = async (i) => {
              this.isInitialized(), await this.keychain.del(i);
            }),
            (this.deleteSymKey = async (i) => {
              this.isInitialized(), await this.keychain.del(i);
            }),
            (this.encode = async (i, c, l) => {
              this.isInitialized();
              let v = Pe(l),
                E = safeJsonStringify(c);
              if (Vn(v)) {
                let c = v.senderPublicKey,
                  l = v.receiverPublicKey;
                i = await this.generateSharedKey(c, l);
              }
              let C = this.getSymKey(i),
                { type: P, senderPublicKey: M } = v;
              return (function (i) {
                var c;
                let l =
                  ((c = "u" > typeof i.type ? i.type : 0),
                  from_string_fromString(`${c}`, tm));
                if (1 === $(l) && typeof i.senderPublicKey > "u")
                  throw Error("Missing sender public key for type 1 envelope");
                let v =
                    "u" > typeof i.senderPublicKey
                      ? from_string_fromString(i.senderPublicKey, tb)
                      : void 0,
                  E =
                    "u" > typeof i.iv
                      ? from_string_fromString(i.iv, tb)
                      : (0, eg.randomBytes)(12),
                  C = new ed.OK(from_string_fromString(i.symKey, tb)).seal(
                    E,
                    from_string_fromString(i.message, tE)
                  );
                return (function (i) {
                  if (1 === $(i.type)) {
                    if (typeof i.senderPublicKey > "u")
                      throw Error(
                        "Missing sender public key for type 1 envelope"
                      );
                    return to_string_toString(
                      concat([i.type, i.senderPublicKey, i.iv, i.sealed]),
                      tw
                    );
                  }
                  return to_string_toString(
                    concat([i.type, i.iv, i.sealed]),
                    tw
                  );
                })({ type: l, sealed: C, iv: E, senderPublicKey: v });
              })({ type: P, symKey: C, message: E, senderPublicKey: M });
            }),
            (this.decode = async (i, c, l) => {
              this.isInitialized();
              let v = (function (i, c) {
                let l = Z(i);
                return Pe({
                  type: $(l.type),
                  senderPublicKey:
                    "u" > typeof l.senderPublicKey
                      ? to_string_toString(l.senderPublicKey, tb)
                      : void 0,
                  receiverPublicKey: c?.receiverPublicKey,
                });
              })(c, l);
              if (Vn(v)) {
                let c = v.receiverPublicKey,
                  l = v.senderPublicKey;
                i = await this.generateSharedKey(c, l);
              }
              let E = this.getSymKey(i),
                C = (function (i) {
                  let c = new ed.OK(from_string_fromString(i.symKey, tb)),
                    { sealed: l, iv: v } = Z(i.encoded),
                    E = c.open(v, l);
                  if (null === E) throw Error("Failed to decrypt");
                  return to_string_toString(E, tE);
                })({ symKey: E, encoded: c });
              return esm_safeJsonParse(C);
            }),
            (this.getPayloadType = (i) => {
              let c = Z(i);
              return $(c.type);
            }),
            (this.getPayloadSenderPublicKey = (i) => {
              let c = Z(i);
              return c.senderPublicKey
                ? to_string_toString(c.senderPublicKey, tb)
                : void 0;
            }),
            (this.core = i),
            (this.logger = (0, tq.generateChildLogger)(c, this.name)),
            (this.keychain = l || new index_es_vt(this.core, this.logger));
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        async setPrivateKey(i, c) {
          return await this.keychain.set(i, c), i;
        }
        getPrivateKey(i) {
          return this.keychain.get(i);
        }
        async getClientSeed() {
          let i = "";
          try {
            i = this.keychain.get(rJ);
          } catch {
            (i = An()), await this.keychain.set(rJ, i);
          }
          return (function (i, c = "utf8") {
            let l = rB[c];
            if (!l) throw Error(`Unsupported encoding "${c}"`);
            return ("utf8" === c || "utf-8" === c) &&
              null != globalThis.Buffer &&
              null != globalThis.Buffer.from
              ? index_es_Ve(globalThis.Buffer.from(i, "utf-8"))
              : l.decoder.decode(`${l.prefix}${i}`);
          })(i, "base16");
        }
        getSymKey(i) {
          return this.keychain.get(i);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: i } = b("NOT_INITIALIZED", this.name);
            throw Error(i);
          }
        }
      };
      let index_es_Ct = class index_es_Ct extends a {
        constructor(i, c) {
          super(i, c),
            (this.logger = i),
            (this.core = c),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = rK),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  let i = await this.getRelayerMessages();
                  "u" > typeof i && (this.messages = i),
                    this.logger.debug(
                      `Successfully Restored records for ${this.name}`
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (i) {
                  this.logger.debug(
                    `Failed to Restore records for ${this.name}`
                  ),
                    this.logger.error(i);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (i, c) => {
              this.isInitialized();
              let l = $n(c),
                v = this.messages.get(i);
              return (
                typeof v > "u" && (v = {}),
                "u" > typeof v[l] ||
                  ((v[l] = c), this.messages.set(i, v), await this.persist()),
                l
              );
            }),
            (this.get = (i) => {
              this.isInitialized();
              let c = this.messages.get(i);
              return typeof c > "u" && (c = {}), c;
            }),
            (this.has = (i, c) => {
              this.isInitialized();
              let l = this.get(i),
                v = $n(c);
              return "u" > typeof l[v];
            }),
            (this.del = async (i) => {
              this.isInitialized(),
                this.messages.delete(i),
                await this.persist();
            }),
            (this.logger = (0, tq.generateChildLogger)(i, this.name)),
            (this.core = c);
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        async setRelayerMessages(i) {
          await this.core.storage.setItem(this.storageKey, Bn(i));
        }
        async getRelayerMessages() {
          let i = await this.core.storage.getItem(this.storageKey);
          return "u" > typeof i ? Yn(i) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: i } = b("NOT_INITIALIZED", this.name);
            throw Error(i);
          }
        }
      };
      let lr = class lr extends u {
        constructor(i, c) {
          super(i, c),
            (this.relayer = i),
            (this.logger = c),
            (this.events = new el.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, tf.toMiliseconds)(tf.TEN_SECONDS)),
            (this.queueTimeout = (0, tf.toMiliseconds)(tf.FIVE_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (i, c, l) => {
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: i, message: c, opts: l },
                });
              try {
                let v = l?.ttl || rY,
                  E = at(l),
                  C = l?.prompt || !1,
                  P = l?.tag || 0,
                  M = l?.id || getBigIntRpcId().toString(),
                  B = {
                    topic: i,
                    message: c,
                    opts: { ttl: v, relay: E, prompt: C, tag: P, id: M },
                  },
                  W = setTimeout(() => this.queue.set(M, B), this.queueTimeout);
                try {
                  await await et(
                    this.rpcPublish(i, c, v, E, C, P, M),
                    this.publishTimeout
                  ),
                    clearTimeout(W),
                    this.relayer.events.emit(rQ.publish, B);
                } catch {
                  this.logger.debug("Publishing Payload stalled"),
                    (this.needsTransportRestart = !0);
                  return;
                }
                this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: i, message: c, opts: l },
                  });
              } catch (i) {
                throw (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(i),
                  i)
                );
              }
            }),
            (this.on = (i, c) => {
              this.events.on(i, c);
            }),
            (this.once = (i, c) => {
              this.events.once(i, c);
            }),
            (this.off = (i, c) => {
              this.events.off(i, c);
            }),
            (this.removeListener = (i, c) => {
              this.events.removeListener(i, c);
            }),
            (this.relayer = i),
            (this.logger = (0, tq.generateChildLogger)(c, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        rpcPublish(i, c, l, v, E, C, P) {
          var M, B, W, J;
          let X = {
            method: ut(v.protocol).publish,
            params: { topic: i, message: c, ttl: l, prompt: E, tag: C },
            id: P,
          };
          return (
            I(null == (M = X.params) ? void 0 : M.prompt) &&
              (null == (B = X.params) || delete B.prompt),
            I(null == (W = X.params) ? void 0 : W.tag) &&
              (null == (J = X.params) || delete J.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: X,
            }),
            this.relayer.request(X)
          );
        }
        onPublish(i) {
          this.queue.delete(i);
        }
        checkQueue() {
          this.queue.forEach(async (i) => {
            let { topic: c, message: l, opts: v } = i;
            await this.publish(c, l, v);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(tH.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart) {
              (this.needsTransportRestart = !1),
                this.relayer.events.emit(rQ.connection_stalled);
              return;
            }
            this.checkQueue();
          }),
            this.relayer.on(rQ.message_ack, (i) => {
              this.onPublish(i.id.toString());
            });
        }
      };
      let dr = class dr {
        constructor() {
          (this.map = new Map()),
            (this.set = (i, c) => {
              let l = this.get(i);
              this.exists(i, c) || this.map.set(i, [...l, c]);
            }),
            (this.get = (i) => this.map.get(i) || []),
            (this.exists = (i, c) => this.get(i).includes(c)),
            (this.delete = (i, c) => {
              if (typeof c > "u") {
                this.map.delete(i);
                return;
              }
              if (!this.map.has(i)) return;
              let l = this.get(i);
              if (!this.exists(i, c)) return;
              let v = l.filter((i) => i !== c);
              if (!v.length) {
                this.map.delete(i);
                return;
              }
              this.map.set(i, v);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      };
      var r7 = Object.defineProperty,
        is = Object.defineProperties,
        io = Object.getOwnPropertyDescriptors,
        ia = Object.getOwnPropertySymbols,
        ic = Object.prototype.hasOwnProperty,
        il = Object.prototype.propertyIsEnumerable,
        index_es_Rt = (i, c, l) =>
          c in i
            ? r7(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (i[c] = l),
        dist_index_es_K = (i, c) => {
          for (var l in c || (c = {})) ic.call(c, l) && index_es_Rt(i, l, c[l]);
          if (ia) for (var l of ia(c)) il.call(c, l) && index_es_Rt(i, l, c[l]);
          return i;
        },
        index_es_pe = (i, c) => is(i, io(c));
      let index_es_Tt = class index_es_Tt extends d {
        constructor(i, c) {
          super(i, c),
            (this.relayer = i),
            (this.logger = c),
            (this.subscriptions = new Map()),
            (this.topicMap = new dr()),
            (this.events = new el.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = rK),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restart(),
                this.registerEventListeners(),
                this.onEnable(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (i, c) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: i, opts: c },
                });
              try {
                let l = at(c),
                  v = { topic: i, relay: l };
                this.pending.set(i, v);
                let E = await this.rpcSubscribe(i, l);
                return (
                  this.onSubscribe(E, v),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: i, opts: c },
                  }),
                  E
                );
              } catch (i) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(i),
                  i)
                );
              }
            }),
            (this.unsubscribe = async (i, c) => {
              await this.restartToComplete(),
                this.isInitialized(),
                "u" > typeof c?.id
                  ? await this.unsubscribeById(i, c.id, c)
                  : await this.unsubscribeByTopic(i, c);
            }),
            (this.isSubscribed = async (i) =>
              !!this.topics.includes(i) ||
              (await new Promise((c, l) => {
                let v = new tf.Watch();
                v.start(this.pendingSubscriptionWatchLabel);
                let E = setInterval(() => {
                  !this.pending.has(i) &&
                    this.topics.includes(i) &&
                    (clearInterval(E),
                    v.stop(this.pendingSubscriptionWatchLabel),
                    c(!0)),
                    v.elapsed(this.pendingSubscriptionWatchLabel) >= r3 &&
                      (clearInterval(E),
                      v.stop(this.pendingSubscriptionWatchLabel),
                      l(Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1))),
            (this.on = (i, c) => {
              this.events.on(i, c);
            }),
            (this.once = (i, c) => {
              this.events.once(i, c);
            }),
            (this.off = (i, c) => {
              this.events.off(i, c);
            }),
            (this.removeListener = (i, c) => {
              this.events.removeListener(i, c);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = i),
            (this.logger = (0, tq.generateChildLogger)(c, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(i, c) {
          let l = !1;
          try {
            l = this.getSubscription(i).topic === c;
          } catch {}
          return l;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(i, c) {
          let l = this.topicMap.get(i);
          await Promise.all(
            l.map(async (l) => await this.unsubscribeById(i, l, c))
          );
        }
        async unsubscribeById(i, c, l) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: i, id: c, opts: l },
            });
          try {
            let v = at(l);
            await this.rpcUnsubscribe(i, c, v);
            let E = w("USER_DISCONNECTED", `${this.name}, ${i}`);
            await this.onUnsubscribe(i, c, E),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: i, id: c, opts: l },
              });
          } catch (i) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(i),
              i)
            );
          }
        }
        async rpcSubscribe(i, c) {
          let l = { method: ut(c.protocol).subscribe, params: { topic: i } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: l,
            });
          try {
            await await et(this.relayer.request(l), this.subscribeTimeout);
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(rQ.connection_stalled);
          }
          return $n(i + this.clientId);
        }
        async rpcBatchSubscribe(i) {
          if (!i.length) return;
          let c = i[0].relay,
            l = {
              method: ut(c.protocol).batchSubscribe,
              params: { topics: i.map((i) => i.topic) },
            };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: l,
            });
          try {
            return await await et(
              this.relayer.request(l),
              this.subscribeTimeout
            );
          } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
              this.relayer.events.emit(rQ.connection_stalled);
          }
        }
        rpcUnsubscribe(i, c, l) {
          let v = {
            method: ut(l.protocol).unsubscribe,
            params: { topic: i, id: c },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: v,
            }),
            this.relayer.request(v)
          );
        }
        onSubscribe(i, c) {
          this.setSubscription(
            i,
            index_es_pe(dist_index_es_K({}, c), { id: i })
          ),
            this.pending.delete(c.topic);
        }
        onBatchSubscribe(i) {
          i.length &&
            i.forEach((i) => {
              this.setSubscription(i.id, dist_index_es_K({}, i)),
                this.pending.delete(i.topic);
            });
        }
        async onUnsubscribe(i, c, l) {
          this.events.removeAllListeners(c),
            this.hasSubscription(c, i) && this.deleteSubscription(c, l),
            await this.relayer.messages.del(i);
        }
        async setRelayerSubscriptions(i) {
          await this.relayer.core.storage.setItem(this.storageKey, i);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(i, c) {
          this.subscriptions.has(i) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: i,
              subscription: c,
            }),
            this.addSubscription(i, c));
        }
        addSubscription(i, c) {
          this.subscriptions.set(i, dist_index_es_K({}, c)),
            this.topicMap.set(c.topic, i),
            this.events.emit(r5.created, c);
        }
        getSubscription(i) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: i,
            });
          let c = this.subscriptions.get(i);
          if (!c) {
            let { message: c } = b("NO_MATCHING_KEY", `${this.name}: ${i}`);
            throw Error(c);
          }
          return c;
        }
        deleteSubscription(i, c) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: i,
              reason: c,
            });
          let l = this.getSubscription(i);
          this.subscriptions.delete(i),
            this.topicMap.delete(l.topic, i),
            this.events.emit(
              r5.deleted,
              index_es_pe(dist_index_es_K({}, l), { reason: c })
            );
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values),
            this.events.emit(r5.sync);
        }
        async reset() {
          if (this.cached.length) {
            let i = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let c = 0; c < i; c++) {
              let i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(i);
            }
          }
          this.events.emit(r5.resubscribed);
        }
        async restore() {
          try {
            let i = await this.getRelayerSubscriptions();
            if (typeof i > "u" || !i.length) return;
            if (this.subscriptions.size) {
              let { message: i } = b("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(i),
                this.logger.error(
                  `${this.name}: ${JSON.stringify(this.values)}`
                ),
                Error(i))
              );
            }
            (this.cached = i),
              this.logger.debug(
                `Successfully Restored subscriptions for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (i) {
            this.logger.debug(
              `Failed to Restore subscriptions for ${this.name}`
            ),
              this.logger.error(i);
          }
        }
        async batchSubscribe(i) {
          if (!i.length) return;
          let c = await this.rpcBatchSubscribe(i);
          index_es_C(c) &&
            this.onBatchSubscribe(
              c.map((c, l) => index_es_pe(dist_index_es_K({}, i[l]), { id: c }))
            );
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (this.relayer.transportExplicitlyClosed) return;
          let i = [];
          this.pending.forEach((c) => {
            i.push(c);
          }),
            await this.batchSubscribe(i);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(
            tH.HEARTBEAT_EVENTS.pulse,
            async () => {
              await this.checkPending();
            }
          ),
            this.relayer.on(rQ.connect, async () => {
              await this.onConnect();
            }),
            this.relayer.on(rQ.disconnect, () => {
              this.onDisconnect();
            }),
            this.events.on(r5.created, async (i) => {
              let c = r5.created;
              this.logger.info(`Emitting ${c}`),
                this.logger.debug({ type: "event", event: c, data: i }),
                await this.persist();
            }),
            this.events.on(r5.deleted, async (i) => {
              let c = r5.deleted;
              this.logger.info(`Emitting ${c}`),
                this.logger.debug({ type: "event", event: c, data: i }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: i } = b("NOT_INITIALIZED", this.name);
            throw Error(i);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((i) => {
              let c = setInterval(() => {
                this.restartInProgress || (clearInterval(c), i());
              }, this.pollingInterval);
            }));
        }
      };
      var ih = Object.defineProperty,
        id = Object.getOwnPropertySymbols,
        ip = Object.prototype.hasOwnProperty,
        ig = Object.prototype.propertyIsEnumerable,
        index_es_Pt = (i, c, l) =>
          c in i
            ? ih(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (i[c] = l),
        wr = (i, c) => {
          for (var l in c || (c = {})) ip.call(c, l) && index_es_Pt(i, l, c[l]);
          if (id) for (var l of id(c)) ig.call(c, l) && index_es_Pt(i, l, c[l]);
          return i;
        };
      let index_es_Ot = class index_es_Ot extends g {
        constructor(i) {
          super(i),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new el.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.reconnecting = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.request = async (i) => {
              this.logger.debug("Publishing Request Payload");
              try {
                return (
                  await this.toEstablishConnection(),
                  await this.provider.request(i)
                );
              } catch (i) {
                throw (
                  (this.logger.debug("Failed to Publish Request"),
                  this.logger.error(i),
                  i)
                );
              }
            }),
            (this.core = i.core),
            (this.logger =
              "u" > typeof i.logger && "string" != typeof i.logger
                ? (0, tq.generateChildLogger)(i.logger, this.name)
                : (0, tq.pino)(
                    (0, tq.getDefaultLoggerOptions)({
                      level: i.logger || "error",
                    })
                  )),
            (this.messages = new index_es_Ct(this.logger, i.core)),
            (this.subscriber = new index_es_Tt(this, this.logger)),
            (this.publisher = new lr(this, this.logger)),
            (this.relayUrl = i?.relayUrl || rX),
            (this.projectId = i.projectId),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${rZ}...`
            ),
              await this.restartTransport(rZ);
          }
          this.registerEventListeners(),
            (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport"
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(i, c, l) {
          this.isInitialized(),
            await this.publisher.publish(i, c, l),
            await this.recordMessageEvent({
              topic: i,
              message: c,
              publishedAt: Date.now(),
            });
        }
        async subscribe(i, c) {
          var l;
          this.isInitialized();
          let v =
            (null == (l = this.subscriber.topicMap.get(i)) ? void 0 : l[0]) ||
            "";
          return (
            v ||
            (await Promise.all([
              new Promise((c) => {
                this.subscriber.once(r5.created, (l) => {
                  l.topic === i && c();
                });
              }),
              new Promise(async (l) => {
                (v = await this.subscriber.subscribe(i, c)), l();
              }),
            ]),
            v)
          );
        }
        async unsubscribe(i, c) {
          this.isInitialized(), await this.subscriber.unsubscribe(i, c);
        }
        on(i, c) {
          this.events.on(i, c);
        }
        once(i, c) {
          this.events.once(i, c);
        }
        off(i, c) {
          this.events.off(i, c);
        }
        removeListener(i, c) {
          this.events.removeListener(i, c);
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            this.connected &&
              (await this.provider.disconnect(),
              this.events.emit(rQ.transport_closed));
        }
        async transportOpen(i) {
          if (((this.transportExplicitlyClosed = !1), !this.reconnecting)) {
            (this.relayUrl = i || this.relayUrl), (this.reconnecting = !0);
            try {
              await Promise.all([
                new Promise((i) => {
                  this.initialized || i(),
                    this.subscriber.once(r5.resubscribed, () => {
                      i();
                    });
                }),
                await Promise.race([
                  new Promise(async (i, c) => {
                    await et(
                      this.provider.connect(),
                      5e3,
                      `Socket stalled when trying to connect to ${this.relayUrl}`
                    )
                      .catch((i) => c(i))
                      .then(() => i())
                      .finally(() =>
                        this.removeListener(
                          rQ.transport_closed,
                          this.rejectTransportOpen
                        )
                      );
                  }),
                  new Promise((i) =>
                    this.once(rQ.transport_closed, this.rejectTransportOpen)
                  ),
                ]),
              ]);
            } catch (i) {
              if ((this.logger.error(i), !this.isConnectionStalled(i.message)))
                throw i;
              this.events.emit(rQ.transport_closed);
            } finally {
              this.reconnecting = !1;
            }
          }
        }
        async restartTransport(i) {
          this.transportExplicitlyClosed ||
            this.reconnecting ||
            ((this.relayUrl = i || this.relayUrl),
            this.connected &&
              (await Promise.all([
                new Promise((i) => {
                  this.provider.once(r0.disconnect, () => {
                    i();
                  });
                }),
                this.transportClose(),
              ])),
            await this.createProvider(),
            await this.transportOpen());
        }
        isConnectionStalled(i) {
          return this.staleConnectionErrors.some((c) => i.includes(c));
        }
        rejectTransportOpen() {
          throw Error(
            "Attempt to connect to relay via `transportOpen` has stalled. Retrying..."
          );
        }
        async createProvider() {
          let i = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new JsonRpcProvider(
            new tQ(
              (function ({
                protocol: i,
                version: c,
                relayUrl: v,
                sdkVersion: E,
                auth: C,
                projectId: P,
                useOnCloseEvent: M,
              }) {
                var B;
                let W;
                let J = v.split("?"),
                  X = (function (i, c, v) {
                    let E = (function () {
                        var i;
                        if (
                          j() === tC.reactNative &&
                          "u" > typeof l.g &&
                          "u" > typeof (null == l.g ? void 0 : l.g.Platform)
                        ) {
                          let { OS: i, Version: c } = l.g.Platform;
                          return [i, c].join("-");
                        }
                        let c = i
                          ? parseUserAgent(i)
                          : "undefined" == typeof document &&
                            "undefined" != typeof navigator &&
                            "ReactNative" === navigator.product
                          ? new ReactNativeInfo()
                          : "undefined" != typeof navigator
                          ? parseUserAgent(navigator.userAgent)
                          : void 0 !== to && to.version
                          ? new NodeInfo(to.version.slice(1))
                          : null;
                        if (null === c) return "unknown";
                        let v = c.os
                          ? c.os.replace(" ", "").toLowerCase()
                          : "unknown";
                        return "browser" === c.type
                          ? [v, c.name, c.version].join("-")
                          : [v, c.version].join("-");
                      })(),
                      C = (function () {
                        var i;
                        let c = j();
                        return c === tC.browser
                          ? [
                              c,
                              (null == (i = (0, td.getLocation)())
                                ? void 0
                                : i.host) || "unknown",
                            ].join(":")
                          : c;
                      })();
                    return [[i, c].join("-"), ["js", v].join("-"), E, C].join(
                      "/"
                    );
                  })(i, c, E),
                  Q =
                    ((B = J[1] || ""),
                    (W = we(we({}, (W = tg.parse(B))), {
                      auth: C,
                      ua: X,
                      projectId: P,
                      useOnCloseEvent: M || void 0,
                    })),
                    (B = tg.stringify(W)));
                return J[0] + "?" + Q;
              })({
                sdkVersion: "2.9.0",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: i,
                useOnCloseEvent: !0,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(i) {
          let { topic: c, message: l } = i;
          await this.messages.set(c, l);
        }
        async shouldIgnoreMessageEvent(i) {
          let { topic: c, message: l } = i;
          return (
            !(await this.subscriber.isSubscribed(c)) || this.messages.has(c, l)
          );
        }
        async onProviderPayload(i) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: i,
            }),
            isJsonRpcRequest(i))
          ) {
            if (!i.method.endsWith("_subscription")) return;
            let c = i.params,
              { topic: l, message: v, publishedAt: E } = c.data,
              C = { topic: l, message: v, publishedAt: E };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(wr({ type: "event", event: c.id }, C)),
              this.events.emit(c.id, C),
              await this.acknowledgePayload(i),
              await this.onMessageEvent(C);
          } else isJsonRpcResponse(i) && this.events.emit(rQ.message_ack, i);
        }
        async onMessageEvent(i) {
          (await this.shouldIgnoreMessageEvent(i)) ||
            (this.events.emit(rQ.message, i), await this.recordMessageEvent(i));
        }
        async acknowledgePayload(i) {
          let c = formatJsonRpcResult(i.id, !0);
          await this.provider.connection.send(c);
        }
        registerProviderListeners() {
          this.provider.on(r0.payload, (i) => this.onProviderPayload(i)),
            this.provider.on(r0.connect, () => {
              this.events.emit(rQ.connect);
            }),
            this.provider.on(r0.disconnect, () => {
              this.onProviderDisconnect();
            }),
            this.provider.on(r0.error, (i) => {
              this.logger.error(i), this.events.emit(rQ.error, i);
            });
        }
        registerEventListeners() {
          this.events.on(rQ.connection_stalled, async () => {
            await this.restartTransport();
          });
        }
        onProviderDisconnect() {
          this.events.emit(rQ.disconnect), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            setTimeout(async () => {
              await this.restartTransport();
            }, (0, tf.toMiliseconds)(r1));
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: i } = b("NOT_INITIALIZED", this.name);
            throw Error(i);
          }
        }
        async toEstablishConnection() {
          if (!this.connected) {
            if (this.connecting)
              return await new Promise((i) => {
                let c = setInterval(() => {
                  this.connected && (clearInterval(c), i());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      };
      var i_ = Object.defineProperty,
        iy = Object.getOwnPropertySymbols,
        iv = Object.prototype.hasOwnProperty,
        im = Object.prototype.propertyIsEnumerable,
        index_es_At = (i, c, l) =>
          c in i
            ? i_(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (i[c] = l),
        index_es_zt = (i, c) => {
          for (var l in c || (c = {})) iv.call(c, l) && index_es_At(i, l, c[l]);
          if (iy) for (var l of iy(c)) im.call(c, l) && index_es_At(i, l, c[l]);
          return i;
        };
      let index_es_Nt = class index_es_Nt extends p {
        constructor(i, c, l, v = rK, E) {
          super(i, c, l, v),
            (this.core = i),
            (this.logger = c),
            (this.name = l),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = rK),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((i) => {
                  var c;
                  this.getKey && null !== i && !I(i)
                    ? this.map.set(this.getKey(i), i)
                    : (null == (c = i?.proposer) ? void 0 : c.publicKey)
                    ? this.map.set(i.id, i)
                    : i?.topic && this.map.set(i.topic, i);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (i, c) => {
              this.isInitialized(),
                this.map.has(i)
                  ? await this.update(i, c)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: i,
                      value: c,
                    }),
                    this.map.set(i, c),
                    await this.persist());
            }),
            (this.get = (i) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: i }),
              this.getData(i)
            )),
            (this.getAll = (i) => (
              this.isInitialized(),
              i
                ? this.values.filter((c) =>
                    Object.keys(i).every((l) => t1()(c[l], i[l]))
                  )
                : this.values
            )),
            (this.update = async (i, c) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: i,
                  update: c,
                });
              let l = index_es_zt(index_es_zt({}, this.getData(i)), c);
              this.map.set(i, l), await this.persist();
            }),
            (this.delete = async (i, c) => {
              this.isInitialized(),
                this.map.has(i) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: i,
                    reason: c,
                  }),
                  this.map.delete(i),
                  await this.persist());
            }),
            (this.logger = (0, tq.generateChildLogger)(c, this.name)),
            (this.storagePrefix = v),
            (this.getKey = E);
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(i) {
          await this.core.storage.setItem(this.storageKey, i);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(i) {
          let c = this.map.get(i);
          if (!c) {
            let { message: c } = b("NO_MATCHING_KEY", `${this.name}: ${i}`);
            throw (this.logger.error(c), Error(c));
          }
          return c;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            let i = await this.getDataStore();
            if (typeof i > "u" || !i.length) return;
            if (this.map.size) {
              let { message: i } = b("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(i), Error(i));
            }
            (this.cached = i),
              this.logger.debug(`Successfully Restored value for ${this.name}`),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (i) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
              this.logger.error(i);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: i } = b("NOT_INITIALIZED", this.name);
            throw Error(i);
          }
        }
      };
      let index_es_Ut = class index_es_Ut {
        constructor(i, c) {
          (this.core = i),
            (this.logger = c),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (eh())()),
            (this.initialized = !1),
            (this.storagePrefix = rK),
            (this.ignoredPayloadTypes = [1]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = ({ methods: i }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...i]),
                ]);
            }),
            (this.create = async () => {
              var i;
              this.isInitialized();
              let c = An(),
                l = await this.core.crypto.setSymKey(c),
                v = ot(tf.FIVE_MINUTES),
                E = { protocol: "irn" },
                C =
                  ((i = {
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: l,
                    symKey: c,
                    relay: E,
                  }),
                  `${i.protocol}:${i.topic}@${i.version}?` +
                    tg.stringify(
                      pt(
                        { symKey: i.symKey },
                        (function (i, c = "-") {
                          let l = {};
                          return (
                            Object.keys(i).forEach((v) => {
                              i[v] && (l["relay" + c + v] = i[v]);
                            }),
                            l
                          );
                        })(i.relay)
                      )
                    ));
              return (
                await this.pairings.set(l, {
                  topic: l,
                  expiry: v,
                  relay: E,
                  active: !1,
                }),
                await this.core.relayer.subscribe(l),
                this.core.expirer.set(l, v),
                { topic: l, uri: C }
              );
            }),
            (this.pair = async (i) => {
              this.isInitialized(), this.isValidPair(i);
              let {
                topic: c,
                symKey: l,
                relay: v,
              } = (function (i) {
                var c;
                let l = i.indexOf(":"),
                  v = -1 !== i.indexOf("?") ? i.indexOf("?") : void 0,
                  E = i.substring(0, l),
                  C = i.substring(l + 1, v).split("@"),
                  P = "u" > typeof v ? i.substring(v) : "",
                  M = tg.parse(P);
                return {
                  protocol: E,
                  topic: (c = C[0]).startsWith("//") ? c.substring(2) : c,
                  version: parseInt(C[1], 10),
                  symKey: M.symKey,
                  relay: (function (i, c = "-") {
                    let l = {},
                      v = "relay" + c;
                    return (
                      Object.keys(i).forEach((c) => {
                        if (c.startsWith(v)) {
                          let E = c.replace(v, ""),
                            C = i[c];
                          l[E] = C;
                        }
                      }),
                      l
                    );
                  })(M),
                };
              })(i.uri);
              if (this.pairings.keys.includes(c))
                throw Error(`Pairing already exists: ${c}`);
              if (this.core.crypto.hasKeys(c))
                throw Error(`Keychain already exists: ${c}`);
              let E = ot(tf.FIVE_MINUTES),
                C = { topic: c, relay: v, expiry: E, active: !1 };
              return (
                await this.pairings.set(c, C),
                await this.core.crypto.setSymKey(l, c),
                await this.core.relayer.subscribe(c, { relay: v }),
                this.core.expirer.set(c, E),
                i.activatePairing && (await this.activate({ topic: c })),
                C
              );
            }),
            (this.activate = async ({ topic: i }) => {
              this.isInitialized();
              let c = ot(tf.THIRTY_DAYS);
              await this.pairings.update(i, { active: !0, expiry: c }),
                this.core.expirer.set(i, c);
            }),
            (this.ping = async (i) => {
              this.isInitialized(), await this.isValidPing(i);
              let { topic: c } = i;
              if (this.pairings.keys.includes(c)) {
                let i = await this.sendRequest(c, "wc_pairingPing", {}),
                  { done: l, resolve: v, reject: E } = Xn();
                this.events.once(it("pairing_ping", i), ({ error: i }) => {
                  i ? E(i) : v();
                }),
                  await l();
              }
            }),
            (this.updateExpiry = async ({ topic: i, expiry: c }) => {
              this.isInitialized(),
                await this.pairings.update(i, { expiry: c });
            }),
            (this.updateMetadata = async ({ topic: i, metadata: c }) => {
              this.isInitialized(),
                await this.pairings.update(i, { peerMetadata: c });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (i) => {
              this.isInitialized(), await this.isValidDisconnect(i);
              let { topic: c } = i;
              this.pairings.keys.includes(c) &&
                (await this.sendRequest(
                  c,
                  "wc_pairingDelete",
                  w("USER_DISCONNECTED")
                ),
                await this.deletePairing(c));
            }),
            (this.sendRequest = async (i, c, l) => {
              let v = formatJsonRpcRequest(c, l),
                E = await this.core.crypto.encode(i, v),
                C = r6[c].req;
              return (
                this.core.history.set(i, v),
                this.core.relayer.publish(i, E, C),
                v.id
              );
            }),
            (this.sendResult = async (i, c, l) => {
              let v = formatJsonRpcResult(i, l),
                E = await this.core.crypto.encode(c, v),
                C = await this.core.history.get(c, i),
                P = r6[C.request.method].res;
              await this.core.relayer.publish(c, E, P),
                await this.core.history.resolve(v);
            }),
            (this.sendError = async (i, c, l) => {
              let v = formatJsonRpcError(i, l),
                E = await this.core.crypto.encode(c, v),
                C = await this.core.history.get(c, i),
                P = r6[C.request.method]
                  ? r6[C.request.method].res
                  : r6.unregistered_method.res;
              await this.core.relayer.publish(c, E, P),
                await this.core.history.resolve(v);
            }),
            (this.deletePairing = async (i, c) => {
              await this.core.relayer.unsubscribe(i),
                await Promise.all([
                  this.pairings.delete(i, w("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(i),
                  c ? Promise.resolve() : this.core.expirer.del(i),
                ]);
            }),
            (this.cleanup = async () => {
              let i = this.pairings.getAll().filter((i) => st(i.expiry));
              await Promise.all(i.map((i) => this.deletePairing(i.topic)));
            }),
            (this.onRelayEventRequest = (i) => {
              let { topic: c, payload: l } = i,
                v = l.method;
              if (this.pairings.keys.includes(c))
                switch (v) {
                  case "wc_pairingPing":
                    return this.onPairingPingRequest(c, l);
                  case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(c, l);
                  default:
                    return this.onUnknownRpcMethodRequest(c, l);
                }
            }),
            (this.onRelayEventResponse = async (i) => {
              let { topic: c, payload: l } = i,
                v = (await this.core.history.get(c, l.id)).request.method;
              if (this.pairings.keys.includes(c))
                return "wc_pairingPing" === v
                  ? this.onPairingPingResponse(c, l)
                  : this.onUnknownRpcMethodResponse(v);
            }),
            (this.onPairingPingRequest = async (i, c) => {
              let { id: l } = c;
              try {
                this.isValidPing({ topic: i }),
                  await this.sendResult(l, i, !0),
                  this.events.emit("pairing_ping", { id: l, topic: i });
              } catch (c) {
                await this.sendError(l, i, c), this.logger.error(c);
              }
            }),
            (this.onPairingPingResponse = (i, c) => {
              let { id: l } = c;
              setTimeout(() => {
                isJsonRpcResult(c)
                  ? this.events.emit(it("pairing_ping", l), {})
                  : isJsonRpcError(c) &&
                    this.events.emit(it("pairing_ping", l), { error: c.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (i, c) => {
              let { id: l } = c;
              try {
                this.isValidDisconnect({ topic: i }),
                  await this.deletePairing(i),
                  this.events.emit("pairing_delete", { id: l, topic: i });
              } catch (c) {
                await this.sendError(l, i, c), this.logger.error(c);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (i, c) => {
              let { id: l, method: v } = c;
              try {
                if (this.registeredMethods.includes(v)) return;
                let c = w("WC_METHOD_UNSUPPORTED", v);
                await this.sendError(l, i, c), this.logger.error(c);
              } catch (c) {
                await this.sendError(l, i, c), this.logger.error(c);
              }
            }),
            (this.onUnknownRpcMethodResponse = (i) => {
              this.registeredMethods.includes(i) ||
                this.logger.error(w("WC_METHOD_UNSUPPORTED", i));
            }),
            (this.isValidPair = (i) => {
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `pair() params: ${i}`
                );
                throw Error(c);
              }
              if (
                !(function (i) {
                  if (m(i, !1))
                    try {
                      return "u" > typeof new URL(i);
                    } catch {}
                  return !1;
                })(i.uri)
              ) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${i.uri}`
                );
                throw Error(c);
              }
            }),
            (this.isValidPing = async (i) => {
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `ping() params: ${i}`
                );
                throw Error(c);
              }
              let { topic: c } = i;
              await this.isValidPairingTopic(c);
            }),
            (this.isValidDisconnect = async (i) => {
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${i}`
                );
                throw Error(c);
              }
              let { topic: c } = i;
              await this.isValidPairingTopic(c);
            }),
            (this.isValidPairingTopic = async (i) => {
              if (!m(i, !1)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `pairing topic should be a string: ${i}`
                );
                throw Error(c);
              }
              if (!this.pairings.keys.includes(i)) {
                let { message: c } = b(
                  "NO_MATCHING_KEY",
                  `pairing topic doesn't exist: ${i}`
                );
                throw Error(c);
              }
              if (st(this.pairings.get(i).expiry)) {
                await this.deletePairing(i);
                let { message: c } = b("EXPIRED", `pairing topic: ${i}`);
                throw Error(c);
              }
            }),
            (this.core = i),
            (this.logger = (0, tq.generateChildLogger)(c, this.name)),
            (this.pairings = new index_es_Nt(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: i } = b("NOT_INITIALIZED", this.name);
            throw Error(i);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(rQ.message, async (i) => {
            let { topic: c, message: l } = i;
            if (
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(l)
              )
            )
              return;
            let v = await this.core.crypto.decode(c, l);
            isJsonRpcRequest(v)
              ? (this.core.history.set(c, v),
                this.onRelayEventRequest({ topic: c, payload: v }))
              : isJsonRpcResponse(v) &&
                (await this.core.history.resolve(v),
                await this.onRelayEventResponse({ topic: c, payload: v }),
                this.core.history.delete(c, v.id));
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(r8.expired, async (i) => {
            let { topic: c } = rt(i.target);
            c &&
              this.pairings.keys.includes(c) &&
              (await this.deletePairing(c, !0),
              this.events.emit("pairing_expire", { topic: c }));
          });
        }
      };
      let index_es_Lt = class index_es_Lt extends index_es_h {
        constructor(i, c) {
          super(i, c),
            (this.core = i),
            (this.logger = c),
            (this.records = new Map()),
            (this.events = new el.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = rK),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((i) => this.records.set(i.id, i)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (i, c, l) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: i,
                  request: c,
                  chainId: l,
                }),
                this.records.has(c.id))
              )
                return;
              let v = {
                id: c.id,
                topic: i,
                request: { method: c.method, params: c.params || null },
                chainId: l,
                expiry: ot(tf.THIRTY_DAYS),
              };
              this.records.set(v.id, v), this.events.emit(r2.created, v);
            }),
            (this.resolve = async (i) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: i,
                }),
                !this.records.has(i.id))
              )
                return;
              let c = await this.getRecord(i.id);
              typeof c.response > "u" &&
                ((c.response = isJsonRpcError(i)
                  ? { error: i.error }
                  : { result: i.result }),
                this.records.set(c.id, c),
                this.events.emit(r2.updated, c));
            }),
            (this.get = async (i, c) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: i,
                id: c,
              }),
              await this.getRecord(c)
            )),
            (this.delete = (i, c) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: c }),
                this.values.forEach((l) => {
                  l.topic !== i ||
                    ("u" > typeof c && l.id !== c) ||
                    (this.records.delete(l.id),
                    this.events.emit(r2.deleted, l));
                });
            }),
            (this.exists = async (i, c) => (
              this.isInitialized(),
              !!this.records.has(c) && (await this.getRecord(c)).topic === i
            )),
            (this.on = (i, c) => {
              this.events.on(i, c);
            }),
            (this.once = (i, c) => {
              this.events.once(i, c);
            }),
            (this.off = (i, c) => {
              this.events.off(i, c);
            }),
            (this.removeListener = (i, c) => {
              this.events.removeListener(i, c);
            }),
            (this.logger = (0, tq.generateChildLogger)(c, this.name));
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          let i = [];
          return (
            this.values.forEach((c) => {
              if ("u" > typeof c.response) return;
              let l = {
                topic: c.topic,
                request: formatJsonRpcRequest(
                  c.request.method,
                  c.request.params,
                  c.id
                ),
                chainId: c.chainId,
              };
              return i.push(l);
            }),
            i
          );
        }
        async setJsonRpcRecords(i) {
          await this.core.storage.setItem(this.storageKey, i);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(i) {
          this.isInitialized();
          let c = this.records.get(i);
          if (!c) {
            let { message: c } = b("NO_MATCHING_KEY", `${this.name}: ${i}`);
            throw Error(c);
          }
          return c;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(r2.sync);
        }
        async restore() {
          try {
            let i = await this.getJsonRpcRecords();
            if (typeof i > "u" || !i.length) return;
            if (this.records.size) {
              let { message: i } = b("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(i), Error(i));
            }
            (this.cached = i),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (i) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(i);
          }
        }
        registerEventListeners() {
          this.events.on(r2.created, (i) => {
            let c = r2.created;
            this.logger.info(`Emitting ${c}`),
              this.logger.debug({ type: "event", event: c, record: i }),
              this.persist();
          }),
            this.events.on(r2.updated, (i) => {
              let c = r2.updated;
              this.logger.info(`Emitting ${c}`),
                this.logger.debug({ type: "event", event: c, record: i }),
                this.persist();
            }),
            this.events.on(r2.deleted, (i) => {
              let c = r2.deleted;
              this.logger.info(`Emitting ${c}`),
                this.logger.debug({ type: "event", event: c, record: i }),
                this.persist();
            }),
            this.core.heartbeat.on(tH.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((i) => {
              (0, tf.toMiliseconds)(i.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${i.id}`),
                this.delete(i.topic, i.id));
            });
          } catch (i) {
            this.logger.warn(i);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: i } = b("NOT_INITIALIZED", this.name);
            throw Error(i);
          }
        }
      };
      let index_es_Ft = class index_es_Ft extends index_es_E {
        constructor(i, c) {
          super(i, c),
            (this.core = i),
            (this.logger = c),
            (this.expirations = new Map()),
            (this.events = new el.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = rK),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((i) => this.expirations.set(i.target, i)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (i) => {
              try {
                let c = this.formatTarget(i);
                return "u" > typeof this.getExpiration(c);
              } catch {
                return !1;
              }
            }),
            (this.set = (i, c) => {
              this.isInitialized();
              let l = this.formatTarget(i),
                v = { target: l, expiry: c };
              this.expirations.set(l, v),
                this.checkExpiry(l, v),
                this.events.emit(r8.created, { target: l, expiration: v });
            }),
            (this.get = (i) => {
              this.isInitialized();
              let c = this.formatTarget(i);
              return this.getExpiration(c);
            }),
            (this.del = (i) => {
              if ((this.isInitialized(), this.has(i))) {
                let c = this.formatTarget(i),
                  l = this.getExpiration(c);
                this.expirations.delete(c),
                  this.events.emit(r8.deleted, { target: c, expiration: l });
              }
            }),
            (this.on = (i, c) => {
              this.events.on(i, c);
            }),
            (this.once = (i, c) => {
              this.events.once(i, c);
            }),
            (this.off = (i, c) => {
              this.events.off(i, c);
            }),
            (this.removeListener = (i, c) => {
              this.events.removeListener(i, c);
            }),
            (this.logger = (0, tq.generateChildLogger)(c, this.name));
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(i) {
          if ("string" == typeof i) return ne("topic", i);
          if ("number" == typeof i) return ne("id", i);
          let { message: c } = b("UNKNOWN_TYPE", `Target type: ${typeof i}`);
          throw Error(c);
        }
        async setExpirations(i) {
          await this.core.storage.setItem(this.storageKey, i);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(r8.sync);
        }
        async restore() {
          try {
            let i = await this.getExpirations();
            if (typeof i > "u" || !i.length) return;
            if (this.expirations.size) {
              let { message: i } = b("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(i), Error(i));
            }
            (this.cached = i),
              this.logger.debug(
                `Successfully Restored expirations for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (i) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
              this.logger.error(i);
          }
        }
        getExpiration(i) {
          let c = this.expirations.get(i);
          if (!c) {
            let { message: c } = b("NO_MATCHING_KEY", `${this.name}: ${i}`);
            throw (this.logger.error(c), Error(c));
          }
          return c;
        }
        checkExpiry(i, c) {
          let { expiry: l } = c;
          (0, tf.toMiliseconds)(l) - Date.now() <= 0 && this.expire(i, c);
        }
        expire(i, c) {
          this.expirations.delete(i),
            this.events.emit(r8.expired, { target: i, expiration: c });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((i, c) => this.checkExpiry(c, i));
        }
        registerEventListeners() {
          this.core.heartbeat.on(tH.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations()
          ),
            this.events.on(r8.created, (i) => {
              let c = r8.created;
              this.logger.info(`Emitting ${c}`),
                this.logger.debug({ type: "event", event: c, data: i }),
                this.persist();
            }),
            this.events.on(r8.expired, (i) => {
              let c = r8.expired;
              this.logger.info(`Emitting ${c}`),
                this.logger.debug({ type: "event", event: c, data: i }),
                this.persist();
            }),
            this.events.on(r8.deleted, (i) => {
              let c = r8.deleted;
              this.logger.info(`Emitting ${c}`),
                this.logger.debug({ type: "event", event: c, data: i }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: i } = b("NOT_INITIALIZED", this.name);
            throw Error(i);
          }
        }
      };
      let index_es_$t = class index_es_$t extends index_es_y {
        constructor(i, c) {
          super(i, c),
            (this.projectId = i),
            (this.logger = c),
            (this.name = r4),
            (this.initialized = !1),
            (this.init = async (i) => {
              $e() ||
                !je() ||
                ((this.verifyUrl = i?.verifyUrl || r9),
                await this.createIframe());
            }),
            (this.register = async (i) => {
              var c;
              if ((this.initialized || (await this.init()), this.iframe))
                try {
                  null == (c = this.iframe.contentWindow) ||
                    c.postMessage(i.attestationId, this.verifyUrl),
                    this.logger.info(
                      `postMessage sent: ${i.attestationId} ${this.verifyUrl}`
                    );
                } catch {}
            }),
            (this.resolve = async (i) => {
              var c;
              if (this.isDevEnv) return "";
              this.logger.info(`resolving attestation: ${i.attestationId}`);
              let l = this.startAbortTimer(tf.FIVE_SECONDS),
                v = await fetch(
                  `${this.verifyUrl}/attestation/${i.attestationId}`,
                  { signal: this.abortController.signal }
                );
              return (
                clearTimeout(l),
                200 === v.status
                  ? null == (c = await v.json())
                    ? void 0
                    : c.origin
                  : ""
              );
            }),
            (this.createIframe = async () => {
              try {
                await Promise.race([
                  new Promise((i, c) => {
                    if (document.getElementById(r4)) return i();
                    let l = document.createElement("iframe");
                    l.setAttribute("id", r4),
                      l.setAttribute(
                        "src",
                        `${this.verifyUrl}/${this.projectId}`
                      ),
                      (l.style.display = "none"),
                      l.addEventListener("load", () => {
                        (this.initialized = !0), i();
                      }),
                      l.addEventListener("error", (i) => {
                        c(i);
                      }),
                      document.body.append(l),
                      (this.iframe = l);
                  }),
                  new Promise((i) => {
                    setTimeout(
                      () => i("iframe load timeout"),
                      (0, tf.toMiliseconds)(tf.ONE_SECOND / 2)
                    );
                  }),
                ]);
              } catch (i) {
                this.logger.error(
                  `Verify iframe failed to load: ${this.verifyUrl}`
                ),
                  this.logger.error(i);
              }
            }),
            (this.logger = (0, tq.generateChildLogger)(c, this.name)),
            (this.verifyUrl = r9),
            (this.abortController = new AbortController()),
            (this.isDevEnv = ee() && t5.env.IS_VITEST);
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        startAbortTimer(i) {
          return setTimeout(
            () => this.abortController.abort(),
            (0, tf.toMiliseconds)(i)
          );
        }
      };
      var ib = Object.defineProperty,
        iw = Object.getOwnPropertySymbols,
        iE = Object.prototype.hasOwnProperty,
        iD = Object.prototype.propertyIsEnumerable,
        index_es_Kt = (i, c, l) =>
          c in i
            ? ib(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (i[c] = l),
        index_es_kt = (i, c) => {
          for (var l in c || (c = {})) iE.call(c, l) && index_es_Kt(i, l, c[l]);
          if (iw) for (var l of iw(c)) iD.call(c, l) && index_es_Kt(i, l, c[l]);
          return i;
        };
      let index_es_Z = class index_es_Z extends n {
        constructor(i) {
          super(i),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = rF),
            (this.events = new el.EventEmitter()),
            (this.initialized = !1),
            (this.on = (i, c) => this.events.on(i, c)),
            (this.once = (i, c) => this.events.once(i, c)),
            (this.off = (i, c) => this.events.off(i, c)),
            (this.removeListener = (i, c) => this.events.removeListener(i, c)),
            (this.projectId = i?.projectId),
            (this.relayUrl = i?.relayUrl || rX);
          let c =
            "u" > typeof i?.logger && "string" != typeof i?.logger
              ? i.logger
              : (0, tq.pino)(
                  (0, tq.getDefaultLoggerOptions)({
                    level: i?.logger || rV.logger,
                  })
                );
          (this.logger = (0, tq.generateChildLogger)(c, this.name)),
            (this.heartbeat = new tH.HeartBeat()),
            (this.crypto = new index_es_It(this, this.logger, i?.keychain)),
            (this.history = new index_es_Lt(this, this.logger)),
            (this.expirer = new index_es_Ft(this, this.logger)),
            (this.storage =
              null != i && i.storage
                ? i.storage
                : new h(index_es_kt(index_es_kt({}, rW), i?.storageOptions))),
            (this.relayer = new index_es_Ot({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new index_es_Ut(this, this.logger)),
            (this.verify = new index_es_$t(this.projectId || "", this.logger));
        }
        static async init(i) {
          let c = new index_es_Z(i);
          await c.initialize();
          let l = await c.crypto.getClientId();
          return await c.storage.setItem("WALLETCONNECT_CLIENT_ID", l), c;
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (i) {
            throw (
              (this.logger.warn(
                `Core Initialization Failure at epoch ${Date.now()}`,
                i
              ),
              this.logger.error(i.message),
              i)
            );
          }
        }
      };
      let iS = "client",
        iI = `wc@2:${iS}:`,
        ix = { name: iS, logger: "error" },
        iC = "Proposal expired",
        iO = tf.SEVEN_DAYS,
        iP = {
          wc_sessionPropose: {
            req: { ttl: tf.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: tf.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: tf.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: tf.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: tf.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: tf.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: tf.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: tf.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: tf.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: tf.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: tf.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: tf.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: tf.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: tf.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: tf.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: tf.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        iA = { min: tf.FIVE_MINUTES, max: tf.SEVEN_DAYS },
        iR = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var iN = Object.defineProperty,
        iT = Object.defineProperties,
        iU = Object.getOwnPropertyDescriptors,
        ij = Object.getOwnPropertySymbols,
        iL = Object.prototype.hasOwnProperty,
        iM = Object.prototype.propertyIsEnumerable,
        index_es_ce = (i, c, l) =>
          c in i
            ? iN(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (i[c] = l),
        dist_index_es_w = (i, c) => {
          for (var l in c || (c = {})) iL.call(c, l) && index_es_ce(i, l, c[l]);
          if (ij) for (var l of ij(c)) iM.call(c, l) && index_es_ce(i, l, c[l]);
          return i;
        },
        dist_index_es_H = (i, c) => iT(i, iU(c));
      let index_es_ns = class index_es_ns extends index_es_S {
        constructor(i) {
          super(i),
            (this.name = "engine"),
            (this.events = new (eh())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [1]),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.client.core.pairing.register({ methods: Object.keys(iP) }),
                (this.initialized = !0));
            }),
            (this.connect = async (i) => {
              this.isInitialized();
              let c = dist_index_es_H(dist_index_es_w({}, i), {
                requiredNamespaces: i.requiredNamespaces || {},
                optionalNamespaces: i.optionalNamespaces || {},
              });
              await this.isValidConnect(c);
              let {
                  pairingTopic: l,
                  requiredNamespaces: v,
                  optionalNamespaces: E,
                  sessionProperties: C,
                  relays: P,
                } = c,
                M = l,
                B,
                W = !1;
              if (
                (M && (W = this.client.core.pairing.pairings.get(M).active),
                !M || !W)
              ) {
                let { topic: i, uri: c } =
                  await this.client.core.pairing.create();
                (M = i), (B = c);
              }
              let J = await this.client.core.crypto.generateKeyPair(),
                X = dist_index_es_w(
                  {
                    requiredNamespaces: v,
                    optionalNamespaces: E,
                    relays: P ?? [{ protocol: "irn" }],
                    proposer: { publicKey: J, metadata: this.client.metadata },
                  },
                  C && { sessionProperties: C }
                ),
                { reject: Q, resolve: er, done: es } = Xn(tf.FIVE_MINUTES, iC);
              if (
                (this.events.once(
                  it("session_connect"),
                  async ({ error: i, session: c }) => {
                    if (i) Q(i);
                    else if (c) {
                      c.self.publicKey = J;
                      let i = dist_index_es_H(dist_index_es_w({}, c), {
                        requiredNamespaces: c.requiredNamespaces,
                        optionalNamespaces: c.optionalNamespaces,
                      });
                      await this.client.session.set(c.topic, i),
                        await this.setExpiry(c.topic, c.expiry),
                        M &&
                          (await this.client.core.pairing.updateMetadata({
                            topic: M,
                            metadata: c.peer.metadata,
                          })),
                        er(i);
                    }
                  }
                ),
                !M)
              ) {
                let { message: i } = b(
                  "NO_MATCHING_KEY",
                  `connect() pairing topic: ${M}`
                );
                throw Error(i);
              }
              let eo = await this.sendRequest(M, "wc_sessionPropose", X),
                ea = ot(tf.FIVE_MINUTES);
              return (
                await this.setProposal(
                  eo,
                  dist_index_es_w({ id: eo, expiry: ea }, X)
                ),
                { uri: B, approval: es }
              );
            }),
            (this.pair = async (i) => (
              this.isInitialized(), await this.client.core.pairing.pair(i)
            )),
            (this.approve = async (i) => {
              this.isInitialized(), await this.isValidApprove(i);
              let {
                  id: c,
                  relayProtocol: l,
                  namespaces: v,
                  sessionProperties: E,
                } = i,
                C = this.client.proposal.get(c),
                {
                  pairingTopic: P,
                  proposer: M,
                  requiredNamespaces: B,
                  optionalNamespaces: W,
                } = C;
              (P = P || ""),
                H(B) ||
                  (B = (function (i, c) {
                    let l = sn(i, c);
                    if (l) throw Error(l.message);
                    let v = {};
                    for (let [c, l] of Object.entries(i))
                      v[c] = {
                        methods: l.methods,
                        events: l.events,
                        chains: l.accounts.map(
                          (i) => `${i.split(":")[0]}:${i.split(":")[1]}`
                        ),
                      };
                    return v;
                  })(v, "approve()"));
              let J = await this.client.core.crypto.generateKeyPair(),
                X = M.publicKey,
                Q = await this.client.core.crypto.generateSharedKey(J, X);
              P &&
                c &&
                (await this.client.core.pairing.updateMetadata({
                  topic: P,
                  metadata: M.metadata,
                }),
                await this.sendResult(c, P, {
                  relay: { protocol: l ?? "irn" },
                  responderPublicKey: J,
                }),
                await this.client.proposal.delete(c, w("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: P }));
              let er = dist_index_es_w(
                {
                  relay: { protocol: l ?? "irn" },
                  namespaces: v,
                  requiredNamespaces: B,
                  optionalNamespaces: W,
                  pairingTopic: P,
                  controller: { publicKey: J, metadata: this.client.metadata },
                  expiry: ot(iO),
                },
                E && { sessionProperties: E }
              );
              await this.client.core.relayer.subscribe(Q),
                await this.sendRequest(Q, "wc_sessionSettle", er);
              let es = dist_index_es_H(dist_index_es_w({}, er), {
                topic: Q,
                pairingTopic: P,
                acknowledged: !1,
                self: er.controller,
                peer: { publicKey: M.publicKey, metadata: M.metadata },
                controller: J,
              });
              return (
                await this.client.session.set(Q, es),
                await this.setExpiry(Q, ot(iO)),
                {
                  topic: Q,
                  acknowledged: () =>
                    new Promise((i) =>
                      setTimeout(() => i(this.client.session.get(Q)), 500)
                    ),
                }
              );
            }),
            (this.reject = async (i) => {
              this.isInitialized(), await this.isValidReject(i);
              let { id: c, reason: l } = i,
                { pairingTopic: v } = this.client.proposal.get(c);
              v &&
                (await this.sendError(c, v, l),
                await this.client.proposal.delete(c, w("USER_DISCONNECTED")));
            }),
            (this.update = async (i) => {
              this.isInitialized(), await this.isValidUpdate(i);
              let { topic: c, namespaces: l } = i,
                v = await this.sendRequest(c, "wc_sessionUpdate", {
                  namespaces: l,
                }),
                { done: E, resolve: C, reject: P } = Xn();
              return (
                this.events.once(it("session_update", v), ({ error: i }) => {
                  i ? P(i) : C();
                }),
                await this.client.session.update(c, { namespaces: l }),
                { acknowledged: E }
              );
            }),
            (this.extend = async (i) => {
              this.isInitialized(), await this.isValidExtend(i);
              let { topic: c } = i,
                l = await this.sendRequest(c, "wc_sessionExtend", {}),
                { done: v, resolve: E, reject: C } = Xn();
              return (
                this.events.once(it("session_extend", l), ({ error: i }) => {
                  i ? C(i) : E();
                }),
                await this.setExpiry(c, ot(iO)),
                { acknowledged: v }
              );
            }),
            (this.request = async (i) => {
              this.isInitialized(), await this.isValidRequest(i);
              let { chainId: c, request: l, topic: v, expiry: E } = i,
                C = await this.sendRequest(
                  v,
                  "wc_sessionRequest",
                  { request: l, chainId: c },
                  E
                ),
                { done: P, resolve: M, reject: B } = Xn(E);
              this.events.once(
                it("session_request", C),
                ({ error: i, result: c }) => {
                  i ? B(i) : M(c);
                }
              ),
                this.client.events.emit("session_request_sent", {
                  topic: v,
                  request: l,
                  chainId: c,
                  id: C,
                });
              let W = await this.client.core.storage.getItem(
                "WALLETCONNECT_DEEPLINK_CHOICE"
              );
              return ct({ id: C, topic: v, wcDeepLink: W }), await P();
            }),
            (this.respond = async (i) => {
              this.isInitialized(), await this.isValidRespond(i);
              let { topic: c, response: l } = i,
                { id: v } = l;
              isJsonRpcResult(l)
                ? await this.sendResult(v, c, l.result)
                : isJsonRpcError(l) && (await this.sendError(v, c, l.error)),
                this.deletePendingSessionRequest(i.response.id, {
                  message: "fulfilled",
                  code: 0,
                });
            }),
            (this.ping = async (i) => {
              this.isInitialized(), await this.isValidPing(i);
              let { topic: c } = i;
              if (this.client.session.keys.includes(c)) {
                let i = await this.sendRequest(c, "wc_sessionPing", {}),
                  { done: l, resolve: v, reject: E } = Xn();
                this.events.once(it("session_ping", i), ({ error: i }) => {
                  i ? E(i) : v();
                }),
                  await l();
              } else
                this.client.core.pairing.pairings.keys.includes(c) &&
                  (await this.client.core.pairing.ping({ topic: c }));
            }),
            (this.emit = async (i) => {
              this.isInitialized(), await this.isValidEmit(i);
              let { topic: c, event: l, chainId: v } = i;
              await this.sendRequest(c, "wc_sessionEvent", {
                event: l,
                chainId: v,
              });
            }),
            (this.disconnect = async (i) => {
              this.isInitialized(), await this.isValidDisconnect(i);
              let { topic: c } = i;
              if (this.client.session.keys.includes(c)) {
                let i;
                let l = getBigIntRpcId().toString(),
                  r = (c) => {
                    c?.id.toString() === l &&
                      (this.client.core.relayer.events.removeListener(
                        rQ.message_ack,
                        r
                      ),
                      i());
                  };
                await Promise.all([
                  new Promise((c) => {
                    (i = c), this.client.core.relayer.on(rQ.message_ack, r);
                  }),
                  this.sendRequest(
                    c,
                    "wc_sessionDelete",
                    w("USER_DISCONNECTED"),
                    void 0,
                    l
                  ),
                ]),
                  await this.deleteSession(c);
              } else await this.client.core.pairing.disconnect({ topic: c });
            }),
            (this.find = (i) => (
              this.isInitialized(),
              this.client.session.getAll().filter((c) =>
                (function (i, c) {
                  let { requiredNamespaces: l } = c,
                    v = Object.keys(i.namespaces),
                    E = Object.keys(l),
                    C = !0;
                  return (
                    !!O(E, v) &&
                    (v.forEach((c) => {
                      let {
                          accounts: v,
                          methods: E,
                          events: P,
                        } = i.namespaces[c],
                        M = R(v),
                        B = l[c];
                      (O(k(c, B), M) && O(B.methods, E) && O(B.events, P)) ||
                        (C = !1);
                    }),
                    C)
                  );
                })(c, i)
              )
            )),
            (this.getPendingSessionRequests = () => (
              this.isInitialized(), this.client.pendingRequest.getAll()
            )),
            (this.cleanupDuplicatePairings = async (i) => {
              if (i.pairingTopic)
                try {
                  let c = this.client.core.pairing.pairings.get(i.pairingTopic),
                    l = this.client.core.pairing.pairings
                      .getAll()
                      .filter((l) => {
                        var v, E;
                        return (
                          (null == (v = l.peerMetadata) ? void 0 : v.url) &&
                          (null == (E = l.peerMetadata) ? void 0 : E.url) ===
                            i.peer.metadata.url &&
                          l.topic &&
                          l.topic !== c.topic
                        );
                      });
                  if (0 === l.length) return;
                  this.client.logger.info(
                    `Cleaning up ${l.length} duplicate pairing(s)`
                  ),
                    await Promise.all(
                      l.map((i) =>
                        this.client.core.pairing.disconnect({ topic: i.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (i) {
                  this.client.logger.error(i);
                }
            }),
            (this.deleteSession = async (i, c) => {
              let { self: l } = this.client.session.get(i);
              await this.client.core.relayer.unsubscribe(i),
                this.client.session.delete(i, w("USER_DISCONNECTED")),
                this.client.core.crypto.keychain.has(l.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(l.publicKey)),
                this.client.core.crypto.keychain.has(i) &&
                  (await this.client.core.crypto.deleteSymKey(i)),
                c || this.client.core.expirer.del(i);
            }),
            (this.deleteProposal = async (i, c) => {
              await Promise.all([
                this.client.proposal.delete(i, w("USER_DISCONNECTED")),
                c ? Promise.resolve() : this.client.core.expirer.del(i),
              ]);
            }),
            (this.deletePendingSessionRequest = async (i, c, l = !1) => {
              await Promise.all([
                this.client.pendingRequest.delete(i, c),
                l ? Promise.resolve() : this.client.core.expirer.del(i),
              ]);
            }),
            (this.setExpiry = async (i, c) => {
              this.client.session.keys.includes(i) &&
                (await this.client.session.update(i, { expiry: c })),
                this.client.core.expirer.set(i, c);
            }),
            (this.setProposal = async (i, c) => {
              await this.client.proposal.set(i, c),
                this.client.core.expirer.set(i, c.expiry);
            }),
            (this.setPendingSessionRequest = async (i) => {
              let c = iP.wc_sessionRequest.req.ttl,
                { id: l, topic: v, params: E } = i;
              await this.client.pendingRequest.set(l, {
                id: l,
                topic: v,
                params: E,
              }),
                c && this.client.core.expirer.set(l, ot(c));
            }),
            (this.sendRequest = async (i, c, l, v, E) => {
              let C = formatJsonRpcRequest(c, l);
              if (je() && iR.includes(c)) {
                let i = $n(JSON.stringify(C));
                await this.client.core.verify.register({ attestationId: i });
              }
              let P = await this.client.core.crypto.encode(i, C),
                M = iP[c].req;
              return (
                v && (M.ttl = v),
                E && (M.id = E),
                this.client.core.history.set(i, C),
                this.client.core.relayer.publish(i, P, M),
                C.id
              );
            }),
            (this.sendResult = async (i, c, l) => {
              let v = formatJsonRpcResult(i, l),
                E = await this.client.core.crypto.encode(c, v),
                C = await this.client.core.history.get(c, i),
                P = iP[C.request.method].res;
              this.client.core.relayer.publish(c, E, P),
                await this.client.core.history.resolve(v);
            }),
            (this.sendError = async (i, c, l) => {
              let v = formatJsonRpcError(i, l),
                E = await this.client.core.crypto.encode(c, v),
                C = await this.client.core.history.get(c, i),
                P = iP[C.request.method].res;
              this.client.core.relayer.publish(c, E, P),
                await this.client.core.history.resolve(v);
            }),
            (this.cleanup = async () => {
              let i = [],
                c = [];
              this.client.session.getAll().forEach((c) => {
                st(c.expiry) && i.push(c.topic);
              }),
                this.client.proposal.getAll().forEach((i) => {
                  st(i.expiry) && c.push(i.id);
                }),
                await Promise.all([
                  ...i.map((i) => this.deleteSession(i)),
                  ...c.map((i) => this.deleteProposal(i)),
                ]);
            }),
            (this.onRelayEventRequest = (i) => {
              let { topic: c, payload: l } = i,
                v = l.method;
              switch (v) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(c, l);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(c, l);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(c, l);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(c, l);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(c, l);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(c, l);
                case "wc_sessionRequest":
                  return this.onSessionRequest(c, l);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(c, l);
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${v}`
                  );
              }
            }),
            (this.onRelayEventResponse = async (i) => {
              let { topic: c, payload: l } = i,
                v = (await this.client.core.history.get(c, l.id)).request
                  .method;
              switch (v) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(c, l);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(c, l);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(c, l);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(c, l);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(c, l);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(c, l);
                default:
                  return this.client.logger.info(
                    `Unsupported response method ${v}`
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (i) => {
              let { topic: c } = i,
                { message: l } = b(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${c} is not identifiable as a JSON-RPC request or a response.`
                );
              throw Error(l);
            }),
            (this.onSessionProposeRequest = async (i, c) => {
              let { params: l, id: v } = c;
              try {
                this.isValidConnect(dist_index_es_w({}, c.params));
                let E = ot(tf.FIVE_MINUTES),
                  C = dist_index_es_w({ id: v, pairingTopic: i, expiry: E }, l);
                await this.setProposal(v, C);
                let P = $n(JSON.stringify(c)),
                  M = await this.getVerifyContext(P, C.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: v,
                  params: C,
                  verifyContext: M,
                });
              } catch (c) {
                await this.sendError(v, i, c), this.client.logger.error(c);
              }
            }),
            (this.onSessionProposeResponse = async (i, c) => {
              let { id: l } = c;
              if (isJsonRpcResult(c)) {
                let { result: v } = c;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: v,
                });
                let E = this.client.proposal.get(l);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: E,
                });
                let C = E.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: C,
                });
                let P = v.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: P,
                });
                let M = await this.client.core.crypto.generateSharedKey(C, P);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: M,
                });
                let B = await this.client.core.relayer.subscribe(M);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: B,
                }),
                  await this.client.core.pairing.activate({ topic: i });
              } else
                isJsonRpcError(c) &&
                  (await this.client.proposal.delete(l, w("USER_DISCONNECTED")),
                  this.events.emit(it("session_connect"), { error: c.error }));
            }),
            (this.onSessionSettleRequest = async (i, c) => {
              let { id: l, params: v } = c;
              try {
                this.isValidSessionSettleRequest(v);
                let {
                    relay: l,
                    controller: E,
                    expiry: C,
                    namespaces: P,
                    requiredNamespaces: M,
                    optionalNamespaces: B,
                    sessionProperties: W,
                    pairingTopic: J,
                  } = c.params,
                  X = dist_index_es_w(
                    {
                      topic: i,
                      relay: l,
                      expiry: C,
                      namespaces: P,
                      acknowledged: !0,
                      pairingTopic: J,
                      requiredNamespaces: M,
                      optionalNamespaces: B,
                      controller: E.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: E.publicKey, metadata: E.metadata },
                    },
                    W && { sessionProperties: W }
                  );
                await this.sendResult(c.id, i, !0),
                  this.events.emit(it("session_connect"), { session: X }),
                  this.cleanupDuplicatePairings(X);
              } catch (c) {
                await this.sendError(l, i, c), this.client.logger.error(c);
              }
            }),
            (this.onSessionSettleResponse = async (i, c) => {
              let { id: l } = c;
              isJsonRpcResult(c)
                ? (await this.client.session.update(i, { acknowledged: !0 }),
                  this.events.emit(it("session_approve", l), {}))
                : isJsonRpcError(c) &&
                  (await this.client.session.delete(i, w("USER_DISCONNECTED")),
                  this.events.emit(it("session_approve", l), {
                    error: c.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (i, c) => {
              let { params: l, id: v } = c;
              try {
                this.isValidUpdate(dist_index_es_w({ topic: i }, l)),
                  await this.client.session.update(i, {
                    namespaces: l.namespaces,
                  }),
                  await this.sendResult(v, i, !0),
                  this.client.events.emit("session_update", {
                    id: v,
                    topic: i,
                    params: l,
                  });
              } catch (c) {
                await this.sendError(v, i, c), this.client.logger.error(c);
              }
            }),
            (this.onSessionUpdateResponse = (i, c) => {
              let { id: l } = c;
              isJsonRpcResult(c)
                ? this.events.emit(it("session_update", l), {})
                : isJsonRpcError(c) &&
                  this.events.emit(it("session_update", l), { error: c.error });
            }),
            (this.onSessionExtendRequest = async (i, c) => {
              let { id: l } = c;
              try {
                this.isValidExtend({ topic: i }),
                  await this.setExpiry(i, ot(iO)),
                  await this.sendResult(l, i, !0),
                  this.client.events.emit("session_extend", {
                    id: l,
                    topic: i,
                  });
              } catch (c) {
                await this.sendError(l, i, c), this.client.logger.error(c);
              }
            }),
            (this.onSessionExtendResponse = (i, c) => {
              let { id: l } = c;
              isJsonRpcResult(c)
                ? this.events.emit(it("session_extend", l), {})
                : isJsonRpcError(c) &&
                  this.events.emit(it("session_extend", l), { error: c.error });
            }),
            (this.onSessionPingRequest = async (i, c) => {
              let { id: l } = c;
              try {
                this.isValidPing({ topic: i }),
                  await this.sendResult(l, i, !0),
                  this.client.events.emit("session_ping", { id: l, topic: i });
              } catch (c) {
                await this.sendError(l, i, c), this.client.logger.error(c);
              }
            }),
            (this.onSessionPingResponse = (i, c) => {
              let { id: l } = c;
              setTimeout(() => {
                isJsonRpcResult(c)
                  ? this.events.emit(it("session_ping", l), {})
                  : isJsonRpcError(c) &&
                    this.events.emit(it("session_ping", l), { error: c.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (i, c) => {
              let { id: l } = c;
              try {
                this.isValidDisconnect({ topic: i, reason: c.params }),
                  await Promise.all([
                    new Promise((c) => {
                      this.client.core.relayer.once(rQ.publish, async () => {
                        c(await this.deleteSession(i));
                      });
                    }),
                    this.sendResult(l, i, !0),
                  ]),
                  this.client.events.emit("session_delete", {
                    id: l,
                    topic: i,
                  });
              } catch (i) {
                this.client.logger.error(i);
              }
            }),
            (this.onSessionRequest = async (i, c) => {
              let { id: l, params: v } = c;
              try {
                this.isValidRequest(dist_index_es_w({ topic: i }, v)),
                  await this.setPendingSessionRequest({
                    id: l,
                    topic: i,
                    params: v,
                  });
                let E = $n(JSON.stringify(c)),
                  C = this.client.session.get(i),
                  P = await this.getVerifyContext(E, C.peer.metadata);
                this.client.events.emit("session_request", {
                  id: l,
                  topic: i,
                  params: v,
                  verifyContext: P,
                });
              } catch (c) {
                await this.sendError(l, i, c), this.client.logger.error(c);
              }
            }),
            (this.onSessionRequestResponse = (i, c) => {
              let { id: l } = c;
              isJsonRpcResult(c)
                ? this.events.emit(it("session_request", l), {
                    result: c.result,
                  })
                : isJsonRpcError(c) &&
                  this.events.emit(it("session_request", l), {
                    error: c.error,
                  });
            }),
            (this.onSessionEventRequest = async (i, c) => {
              let { id: l, params: v } = c;
              try {
                this.isValidEmit(dist_index_es_w({ topic: i }, v)),
                  this.client.events.emit("session_event", {
                    id: l,
                    topic: i,
                    params: v,
                  });
              } catch (c) {
                await this.sendError(l, i, c), this.client.logger.error(c);
              }
            }),
            (this.isValidConnect = async (i) => {
              let c;
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `connect() params: ${JSON.stringify(i)}`
                );
                throw Error(c);
              }
              let {
                pairingTopic: l,
                requiredNamespaces: v,
                optionalNamespaces: E,
                sessionProperties: C,
                relays: P,
              } = i;
              if (
                (I(l) || (await this.isValidPairingTopic(l)),
                (c = !1),
                P
                  ? P &&
                    index_es_C(P) &&
                    P.length &&
                    P.forEach((i) => {
                      c = cn(i);
                    })
                  : (c = !0),
                !c)
              ) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `connect() relays: ${P}`
                );
                throw Error(i);
              }
              I(v) ||
                0 === H(v) ||
                this.validateNamespaces(v, "requiredNamespaces"),
                I(E) ||
                  0 === H(E) ||
                  this.validateNamespaces(E, "optionalNamespaces"),
                I(C) || this.validateSessionProps(C, "sessionProperties");
            }),
            (this.validateNamespaces = (i, c) => {
              let l = (function (i, c, l) {
                let v = null;
                if (i && H(i)) {
                  let E;
                  let C = se(i, c);
                  C && (v = C);
                  let P =
                    ((E = null),
                    Object.entries(i).forEach(([i, v]) => {
                      var C, P;
                      let M;
                      if (E) return;
                      let B =
                        ((C = k(i, v)),
                        (P = `${c} ${l}`),
                        (M = null),
                        index_es_C(C) && C.length
                          ? C.forEach((i) => {
                              M ||
                                D(i) ||
                                (M = w(
                                  "UNSUPPORTED_CHAINS",
                                  `${P}, chain ${i} should be a string and conform to "namespace:chainId" format`
                                ));
                            })
                          : D(i) ||
                            (M = w(
                              "UNSUPPORTED_CHAINS",
                              `${P}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
                            )),
                        M);
                      B && (E = B);
                    }),
                    E);
                  P && (v = P);
                } else
                  v = b(
                    "MISSING_OR_INVALID",
                    `${c}, ${l} should be an object with data`
                  );
                return v;
              })(i, "connect()", c);
              if (l) throw Error(l.message);
            }),
            (this.isValidApprove = async (i) => {
              if (!Dt(i))
                throw Error(
                  b("MISSING_OR_INVALID", `approve() params: ${i}`).message
                );
              let {
                id: c,
                namespaces: l,
                relayProtocol: v,
                sessionProperties: E,
              } = i;
              await this.isValidProposalId(c);
              let C = this.client.proposal.get(c),
                P = sn(l, "approve()");
              if (P) throw Error(P.message);
              let M = an(C.requiredNamespaces, l, "approve()");
              if (M) throw Error(M.message);
              if (!m(v, !0)) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `approve() relayProtocol: ${v}`
                );
                throw Error(i);
              }
              I(E) || this.validateSessionProps(E, "sessionProperties");
            }),
            (this.isValidReject = async (i) => {
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `reject() params: ${i}`
                );
                throw Error(c);
              }
              let { id: c, reason: l } = i;
              if (
                (await this.isValidProposalId(c),
                !l ||
                  "object" != typeof l ||
                  !l.code ||
                  !q(l.code, !1) ||
                  !l.message ||
                  !m(l.message, !1))
              ) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `reject() reason: ${JSON.stringify(l)}`
                );
                throw Error(i);
              }
            }),
            (this.isValidSessionSettleRequest = (i) => {
              let c;
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${i}`
                );
                throw Error(c);
              }
              let { relay: l, controller: v, namespaces: E, expiry: C } = i;
              if (!cn(l)) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw Error(i);
              }
              let P =
                ((c = null),
                m(v?.publicKey, !1) ||
                  (c = b(
                    "MISSING_OR_INVALID",
                    "onSessionSettleRequest() controller public key should be a string"
                  )),
                c);
              if (P) throw Error(P.message);
              let M = sn(E, "onSessionSettleRequest()");
              if (M) throw Error(M.message);
              if (st(C)) {
                let { message: i } = b("EXPIRED", "onSessionSettleRequest()");
                throw Error(i);
              }
            }),
            (this.isValidUpdate = async (i) => {
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `update() params: ${i}`
                );
                throw Error(c);
              }
              let { topic: c, namespaces: l } = i;
              await this.isValidSessionTopic(c);
              let v = this.client.session.get(c),
                E = sn(l, "update()");
              if (E) throw Error(E.message);
              let C = an(v.requiredNamespaces, l, "update()");
              if (C) throw Error(C.message);
            }),
            (this.isValidExtend = async (i) => {
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `extend() params: ${i}`
                );
                throw Error(c);
              }
              let { topic: c } = i;
              await this.isValidSessionTopic(c);
            }),
            (this.isValidRequest = async (i) => {
              var c;
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `request() params: ${i}`
                );
                throw Error(c);
              }
              let { topic: l, request: v, chainId: E, expiry: C } = i;
              await this.isValidSessionTopic(l);
              let { namespaces: P } = this.client.session.get(l);
              if (!Lt(P, E)) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `request() chainId: ${E}`
                );
                throw Error(i);
              }
              if (I(v) || !m(v.method, !1)) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `request() ${JSON.stringify(v)}`
                );
                throw Error(i);
              }
              if (
                !(
                  m((c = v.method), !1) &&
                  (function (i, c) {
                    let l = [];
                    return (
                      Object.values(i).forEach((i) => {
                        R(i.accounts).includes(c) && l.push(...i.methods);
                      }),
                      l
                    );
                  })(P, E).includes(c)
                )
              ) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `request() method: ${v.method}`
                );
                throw Error(i);
              }
              if (C && (!q(C, !1) || !(C <= iA.max) || !(C >= iA.min))) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `request() expiry: ${C}. Expiry must be a number (in seconds) between ${iA.min} and ${iA.max}`
                );
                throw Error(i);
              }
            }),
            (this.isValidRespond = async (i) => {
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `respond() params: ${i}`
                );
                throw Error(c);
              }
              let { topic: c, response: l } = i;
              if (
                (await this.isValidSessionTopic(c),
                I(l) ||
                  (I(l.result) && I(l.error)) ||
                  !q(l.id, !1) ||
                  !m(l.jsonrpc, !1))
              ) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `respond() response: ${JSON.stringify(l)}`
                );
                throw Error(i);
              }
            }),
            (this.isValidPing = async (i) => {
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `ping() params: ${i}`
                );
                throw Error(c);
              }
              let { topic: c } = i;
              await this.isValidSessionOrPairingTopic(c);
            }),
            (this.isValidEmit = async (i) => {
              var c;
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `emit() params: ${i}`
                );
                throw Error(c);
              }
              let { topic: l, event: v, chainId: E } = i;
              await this.isValidSessionTopic(l);
              let { namespaces: C } = this.client.session.get(l);
              if (!Lt(C, E)) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `emit() chainId: ${E}`
                );
                throw Error(i);
              }
              if (I(v) || !m(v.name, !1)) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(v)}`
                );
                throw Error(i);
              }
              if (
                !(
                  m((c = v.name), !1) &&
                  (function (i, c) {
                    let l = [];
                    return (
                      Object.values(i).forEach((i) => {
                        R(i.accounts).includes(c) && l.push(...i.events);
                      }),
                      l
                    );
                  })(C, E).includes(c)
                )
              ) {
                let { message: i } = b(
                  "MISSING_OR_INVALID",
                  `emit() event: ${JSON.stringify(v)}`
                );
                throw Error(i);
              }
            }),
            (this.isValidDisconnect = async (i) => {
              if (!Dt(i)) {
                let { message: c } = b(
                  "MISSING_OR_INVALID",
                  `disconnect() params: ${i}`
                );
                throw Error(c);
              }
              let { topic: c } = i;
              await this.isValidSessionOrPairingTopic(c);
            }),
            (this.getVerifyContext = async (i, c) => {
              let l = {
                verified: {
                  verifyUrl: c.verifyUrl || "",
                  validation: "UNKNOWN",
                  origin: c.url || "",
                },
              };
              try {
                let v = await this.client.core.verify.resolve({
                  attestationId: i,
                  verifyUrl: c.verifyUrl,
                });
                v &&
                  ((l.verified.origin = v),
                  (l.verified.validation = v === c.url ? "VALID" : "INVALID"));
              } catch (i) {
                this.client.logger.error(i);
              }
              return (
                this.client.logger.info(`Verify context: ${JSON.stringify(l)}`),
                l
              );
            }),
            (this.validateSessionProps = (i, c) => {
              Object.values(i).forEach((i) => {
                if (!m(i, !1)) {
                  let { message: l } = b(
                    "MISSING_OR_INVALID",
                    `${c} must be in Record<string, string> format. Received: ${JSON.stringify(
                      i
                    )}`
                  );
                  throw Error(l);
                }
              });
            });
        }
        isInitialized() {
          if (!this.initialized) {
            let { message: i } = b("NOT_INITIALIZED", this.name);
            throw Error(i);
          }
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(rQ.message, async (i) => {
            let { topic: c, message: l } = i;
            if (
              this.ignoredPayloadTypes.includes(
                this.client.core.crypto.getPayloadType(l)
              )
            )
              return;
            let v = await this.client.core.crypto.decode(c, l);
            isJsonRpcRequest(v)
              ? (this.client.core.history.set(c, v),
                this.onRelayEventRequest({ topic: c, payload: v }))
              : isJsonRpcResponse(v)
              ? (await this.client.core.history.resolve(v),
                await this.onRelayEventResponse({ topic: c, payload: v }),
                this.client.core.history.delete(c, v.id))
              : this.onRelayEventUnknownPayload({ topic: c, payload: v });
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(r8.expired, async (i) => {
            let { topic: c, id: l } = rt(i.target);
            if (l && this.client.pendingRequest.keys.includes(l))
              return await this.deletePendingSessionRequest(
                l,
                b("EXPIRED"),
                !0
              );
            c
              ? this.client.session.keys.includes(c) &&
                (await this.deleteSession(c, !0),
                this.client.events.emit("session_expire", { topic: c }))
              : l &&
                (await this.deleteProposal(l, !0),
                this.client.events.emit("proposal_expire", { id: l }));
          });
        }
        isValidPairingTopic(i) {
          if (!m(i, !1)) {
            let { message: c } = b(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${i}`
            );
            throw Error(c);
          }
          if (!this.client.core.pairing.pairings.keys.includes(i)) {
            let { message: c } = b(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${i}`
            );
            throw Error(c);
          }
          if (st(this.client.core.pairing.pairings.get(i).expiry)) {
            let { message: c } = b("EXPIRED", `pairing topic: ${i}`);
            throw Error(c);
          }
        }
        async isValidSessionTopic(i) {
          if (!m(i, !1)) {
            let { message: c } = b(
              "MISSING_OR_INVALID",
              `session topic should be a string: ${i}`
            );
            throw Error(c);
          }
          if (!this.client.session.keys.includes(i)) {
            let { message: c } = b(
              "NO_MATCHING_KEY",
              `session topic doesn't exist: ${i}`
            );
            throw Error(c);
          }
          if (st(this.client.session.get(i).expiry)) {
            await this.deleteSession(i);
            let { message: c } = b("EXPIRED", `session topic: ${i}`);
            throw Error(c);
          }
        }
        async isValidSessionOrPairingTopic(i) {
          if (this.client.session.keys.includes(i))
            await this.isValidSessionTopic(i);
          else if (this.client.core.pairing.pairings.keys.includes(i))
            this.isValidPairingTopic(i);
          else if (m(i, !1)) {
            let { message: c } = b(
              "NO_MATCHING_KEY",
              `session or pairing topic doesn't exist: ${i}`
            );
            throw Error(c);
          } else {
            let { message: c } = b(
              "MISSING_OR_INVALID",
              `session or pairing topic should be a string: ${i}`
            );
            throw Error(c);
          }
        }
        async isValidProposalId(i) {
          if ("number" != typeof i) {
            let { message: c } = b(
              "MISSING_OR_INVALID",
              `proposal id should be a number: ${i}`
            );
            throw Error(c);
          }
          if (!this.client.proposal.keys.includes(i)) {
            let { message: c } = b(
              "NO_MATCHING_KEY",
              `proposal id doesn't exist: ${i}`
            );
            throw Error(c);
          }
          if (st(this.client.proposal.get(i).expiry)) {
            await this.deleteProposal(i);
            let { message: c } = b("EXPIRED", `proposal id: ${i}`);
            throw Error(c);
          }
        }
      };
      let index_es_rs = class index_es_rs extends index_es_Nt {
        constructor(i, c) {
          super(i, c, "proposal", iI), (this.core = i), (this.logger = c);
        }
      };
      let index_es_os = class index_es_os extends index_es_Nt {
        constructor(i, c) {
          super(i, c, "session", iI), (this.core = i), (this.logger = c);
        }
      };
      let index_es_as = class index_es_as extends index_es_Nt {
        constructor(i, c) {
          super(i, c, "request", iI, (i) => i.id),
            (this.core = i),
            (this.logger = c);
        }
      };
      let dist_index_es_M = class dist_index_es_M extends index_es_b {
        constructor(i) {
          super(i),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = ix.name),
            (this.events = new el.EventEmitter()),
            (this.on = (i, c) => this.events.on(i, c)),
            (this.once = (i, c) => this.events.once(i, c)),
            (this.off = (i, c) => this.events.off(i, c)),
            (this.removeListener = (i, c) => this.events.removeListener(i, c)),
            (this.removeAllListeners = (i) =>
              this.events.removeAllListeners(i)),
            (this.connect = async (i) => {
              try {
                return await this.engine.connect(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.pair = async (i) => {
              try {
                return await this.engine.pair(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.approve = async (i) => {
              try {
                return await this.engine.approve(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.reject = async (i) => {
              try {
                return await this.engine.reject(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.update = async (i) => {
              try {
                return await this.engine.update(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.extend = async (i) => {
              try {
                return await this.engine.extend(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.request = async (i) => {
              try {
                return await this.engine.request(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.respond = async (i) => {
              try {
                return await this.engine.respond(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.ping = async (i) => {
              try {
                return await this.engine.ping(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.emit = async (i) => {
              try {
                return await this.engine.emit(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.disconnect = async (i) => {
              try {
                return await this.engine.disconnect(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.find = (i) => {
              try {
                return this.engine.find(i);
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (i) {
                throw (this.logger.error(i.message), i);
              }
            }),
            (this.name = i?.name || ix.name),
            (this.metadata = i?.metadata ||
              (0, tp.D)() || {
                name: "",
                description: "",
                url: "",
                icons: [""],
              });
          let c =
            "u" > typeof i?.logger && "string" != typeof i?.logger
              ? i.logger
              : (0, tq.pino)(
                  (0, tq.getDefaultLoggerOptions)({
                    level: i?.logger || ix.logger,
                  })
                );
          (this.core = i?.core || new index_es_Z(i)),
            (this.logger = (0, tq.generateChildLogger)(c, this.name)),
            (this.session = new index_es_os(this.core, this.logger)),
            (this.proposal = new index_es_rs(this.core, this.logger)),
            (this.pendingRequest = new index_es_as(this.core, this.logger)),
            (this.engine = new index_es_ns(this));
        }
        static async init(i) {
          let c = new dist_index_es_M(i);
          return await c.initialize(), c;
        }
        get context() {
          return (0, tq.getLoggerContext)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (i) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(i.message),
              i)
            );
          }
        }
      };
      var ik = l(54098),
        iz = l.n(ik);
      let i$ = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      let HttpConnection = class HttpConnection {
        constructor(i, c = !1) {
          if (
            ((this.url = i),
            (this.disableProviderPing = c),
            (this.events = new el.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !isHttpUrl(i))
          )
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${i}`
            );
          (this.url = i), (this.disableProviderPing = c);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(i, c) {
          this.events.on(i, c);
        }
        once(i, c) {
          this.events.once(i, c);
        }
        off(i, c) {
          this.events.off(i, c);
        }
        removeListener(i, c) {
          this.events.removeListener(i, c);
        }
        async open(i = this.url) {
          await this.register(i);
        }
        async close() {
          if (!this.isAvailable) throw Error("Connection already closed");
          this.onClose();
        }
        async send(i, c) {
          this.isAvailable || (await this.register());
          try {
            let c = safeJsonStringify(i),
              l = await iz()(
                this.url,
                Object.assign(Object.assign({}, i$), { body: c })
              ),
              v = await l.json();
            this.onPayload({ data: v });
          } catch (c) {
            this.onError(i.id, c);
          }
        }
        async register(i = this.url) {
          if (!isHttpUrl(i))
            throw Error(
              `Provided URL is not compatible with HTTP connection: ${i}`
            );
          if (this.registering) {
            let i = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= i ||
                this.events.listenerCount("open") >= i) &&
                this.events.setMaxListeners(i + 1),
              new Promise((i, c) => {
                this.events.once("register_error", (i) => {
                  this.resetMaxListeners(), c(i);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), void 0 === this.isAvailable))
                      return c(Error("HTTP connection is missing or invalid"));
                    i();
                  });
              })
            );
          }
          (this.url = i), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              let c = safeJsonStringify({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await iz()(i, Object.assign(Object.assign({}, i$), { body: c }));
            }
            this.onOpen();
          } catch (c) {
            let i = this.parseError(c);
            throw (this.events.emit("register_error", i), this.onClose(), i);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(i) {
          if (void 0 === i.data) return;
          let c =
            "string" == typeof i.data ? esm_safeJsonParse(i.data) : i.data;
          this.events.emit("payload", c);
        }
        onError(i, c) {
          let l = this.parseError(c),
            v = l.message || l.toString(),
            E = formatJsonRpcError(i, v);
          this.events.emit("payload", E);
        }
        parseError(i, c = this.url) {
          return parseConnectionError(i, c, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      };
      let iH = "error",
        iq = "wc@2:universal_provider:",
        iB = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
      var iF =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
            ? window
            : "u" > typeof l.g
            ? l.g
            : "u" > typeof self
            ? self
            : {},
        iK = { exports: {} };
      !(function (i, c) {
        (function () {
          var l,
            v = "Expected a function",
            E = "__lodash_hash_undefined__",
            C = "__lodash_placeholder__",
            P = 1 / 0,
            M = 0 / 0,
            B = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            W = "[object Arguments]",
            J = "[object Array]",
            X = "[object Boolean]",
            Q = "[object Date]",
            er = "[object Error]",
            es = "[object Function]",
            eo = "[object GeneratorFunction]",
            ea = "[object Map]",
            ec = "[object Number]",
            el = "[object Object]",
            eh = "[object Promise]",
            ed = "[object RegExp]",
            ep = "[object Set]",
            eg = "[object String]",
            e_ = "[object Symbol]",
            ey = "[object WeakMap]",
            ev = "[object ArrayBuffer]",
            em = "[object DataView]",
            eb = "[object Float32Array]",
            ew = "[object Float64Array]",
            eE = "[object Int8Array]",
            eD = "[object Int16Array]",
            eS = "[object Int32Array]",
            eI = "[object Uint8Array]",
            ex = "[object Uint8ClampedArray]",
            eC = "[object Uint16Array]",
            eO = "[object Uint32Array]",
            eP = /\b__p \+= '';/g,
            eA = /\b(__p \+=) '' \+/g,
            eR = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            eN = /&(?:amp|lt|gt|quot|#39);/g,
            eT = /[&<>"']/g,
            eU = RegExp(eN.source),
            ej = RegExp(eT.source),
            eL = /<%-([\s\S]+?)%>/g,
            eM = /<%([\s\S]+?)%>/g,
            ek = /<%=([\s\S]+?)%>/g,
            ez = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            e$ = /^\w*$/,
            eH =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            eB = /[\\^$.*+?()[\]{}|]/g,
            eF = RegExp(eB.source),
            eK = /^\s+/,
            eV = /\s/,
            eW = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            eJ = /\{\n\/\* \[wrapped with (.+)\] \*/,
            eG = /,? & /,
            eY = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            eX = /[()=,{}\[\]\/\s]/,
            eZ = /\\(\\)?/g,
            eQ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            e0 = /\w*$/,
            e1 = /^[-+]0x[0-9a-f]+$/i,
            e5 = /^0b[01]+$/i,
            e3 = /^\[object .+?Constructor\]$/,
            e6 = /^0o[0-7]+$/i,
            e2 = /^(?:0|[1-9]\d*)$/,
            e8 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            e4 = /($^)/,
            e9 = /['\n\r\u2028\u2029\\]/g,
            e7 = "\ud800-\udfff",
            tn = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            ts = "\\u2700-\\u27bf",
            to = "a-z\\xdf-\\xf6\\xf8-\\xff",
            tc = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            tl = "\\ufe0e\\ufe0f",
            th =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            tf = "['’]",
            td = "[" + th + "]",
            tp = "[" + tn + "]",
            tg = "[" + to + "]",
            t_ = "[^" + e7 + th + "\\d+" + ts + to + tc + "]",
            ty = "\ud83c[\udffb-\udfff]",
            tm = "[^" + e7 + "]",
            tb = "(?:\ud83c[\udde6-\uddff]){2}",
            tw = "[\ud800-\udbff][\udc00-\udfff]",
            tE = "[" + tc + "]",
            tD = "\\u200d",
            tS = "(?:" + tg + "|" + t_ + ")",
            tI = "(?:" + tf + "(?:d|ll|m|re|s|t|ve))?",
            tx = "(?:" + tf + "(?:D|LL|M|RE|S|T|VE))?",
            tC = "(?:" + tp + "|" + ty + ")?",
            tO = "[" + tl + "]?",
            tP =
              "(?:" +
              tD +
              "(?:" +
              [tm, tb, tw].join("|") +
              ")" +
              tO +
              tC +
              ")*",
            tA = tO + tC + tP,
            tR = "(?:" + ["[" + ts + "]", tb, tw].join("|") + ")" + tA,
            tN =
              "(?:" +
              [tm + tp + "?", tp, tb, tw, "[" + e7 + "]"].join("|") +
              ")",
            tT = RegExp(tf, "g"),
            tU = RegExp(tp, "g"),
            tj = RegExp(ty + "(?=" + ty + ")|" + tN + tA, "g"),
            tL = RegExp(
              [
                tE +
                  "?" +
                  tg +
                  "+" +
                  tI +
                  "(?=" +
                  [td, tE, "$"].join("|") +
                  ")",
                "(?:" +
                  tE +
                  "|" +
                  t_ +
                  ")+" +
                  tx +
                  "(?=" +
                  [td, tE + tS, "$"].join("|") +
                  ")",
                tE + "?" + tS + "+" + tI,
                tE + "+" + tx,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                "\\d+",
                tR,
              ].join("|"),
              "g"
            ),
            tM = RegExp("[" + tD + e7 + tn + tl + "]"),
            tk =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            tz = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            t$ = -1,
            tH = {};
          (tH[eb] =
            tH[ew] =
            tH[eE] =
            tH[eD] =
            tH[eS] =
            tH[eI] =
            tH[ex] =
            tH[eC] =
            tH[eO] =
              !0),
            (tH[W] =
              tH[J] =
              tH[ev] =
              tH[X] =
              tH[em] =
              tH[Q] =
              tH[er] =
              tH[es] =
              tH[ea] =
              tH[ec] =
              tH[el] =
              tH[ed] =
              tH[ep] =
              tH[eg] =
              tH[ey] =
                !1);
          var tq = {};
          (tq[W] =
            tq[J] =
            tq[ev] =
            tq[em] =
            tq[X] =
            tq[Q] =
            tq[eb] =
            tq[ew] =
            tq[eE] =
            tq[eD] =
            tq[eS] =
            tq[ea] =
            tq[ec] =
            tq[el] =
            tq[ed] =
            tq[ep] =
            tq[eg] =
            tq[e_] =
            tq[eI] =
            tq[ex] =
            tq[eC] =
            tq[eO] =
              !0),
            (tq[er] = tq[es] = tq[ey] = !1);
          var tB = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            tF = parseFloat,
            tK = parseInt,
            tV = "object" == typeof iF && iF && iF.Object === Object && iF,
            tW =
              "object" == typeof self && self && self.Object === Object && self,
            tJ = tV || tW || Function("return this")(),
            tG = c && !c.nodeType && c,
            tY = tG && i && !i.nodeType && i,
            tX = tY && tY.exports === tG,
            tZ = tX && tV.process,
            tQ = (function () {
              try {
                return (
                  (tY && tY.require && tY.require("util").types) ||
                  (tZ && tZ.binding && tZ.binding("util"))
                );
              } catch {}
            })(),
            t0 = tQ && tQ.isArrayBuffer,
            t1 = tQ && tQ.isDate,
            t5 = tQ && tQ.isMap,
            t3 = tQ && tQ.isRegExp,
            t6 = tQ && tQ.isSet,
            t2 = tQ && tQ.isTypedArray;
          function cn(i, c, l) {
            switch (l.length) {
              case 0:
                return i.call(c);
              case 1:
                return i.call(c, l[0]);
              case 2:
                return i.call(c, l[0], l[1]);
              case 3:
                return i.call(c, l[0], l[1], l[2]);
            }
            return i.apply(c, l);
          }
          function Qo(i, c, l, v) {
            for (var E = -1, C = null == i ? 0 : i.length; ++E < C; ) {
              var P = i[E];
              c(v, P, l(P), i);
            }
            return v;
          }
          function mn(i, c) {
            for (
              var l = -1, v = null == i ? 0 : i.length;
              ++l < v && !1 !== c(i[l], l, i);

            );
            return i;
          }
          function Ps(i, c) {
            for (var l = -1, v = null == i ? 0 : i.length; ++l < v; )
              if (!c(i[l], l, i)) return !1;
            return !0;
          }
          function jn(i, c) {
            for (
              var l = -1, v = null == i ? 0 : i.length, E = 0, C = [];
              ++l < v;

            ) {
              var P = i[l];
              c(P, l, i) && (C[E++] = P);
            }
            return C;
          }
          function Ie(i, c) {
            return !!(null == i ? 0 : i.length) && Rt(i, c, 0) > -1;
          }
          function Lr(i, c, l) {
            for (var v = -1, E = null == i ? 0 : i.length; ++v < E; )
              if (l(c, i[v])) return !0;
            return !1;
          }
          function G(i, c) {
            for (
              var l = -1, v = null == i ? 0 : i.length, E = Array(v);
              ++l < v;

            )
              E[l] = c(i[l], l, i);
            return E;
          }
          function nt(i, c) {
            for (var l = -1, v = c.length, E = i.length; ++l < v; )
              i[E + l] = c[l];
            return i;
          }
          function Dr(i, c, l, v) {
            var E = -1,
              C = null == i ? 0 : i.length;
            for (v && C && (l = i[++E]); ++E < C; ) l = c(l, i[E], E, i);
            return l;
          }
          function ko(i, c, l, v) {
            var E = null == i ? 0 : i.length;
            for (v && E && (l = i[--E]); E--; ) l = c(l, i[E], E, i);
            return l;
          }
          function Nr(i, c) {
            for (var l = -1, v = null == i ? 0 : i.length; ++l < v; )
              if (c(i[l], l, i)) return !0;
            return !1;
          }
          var t8 = Hr("length");
          function As(i, c, l) {
            var v;
            return (
              l(i, function (i, l, E) {
                if (c(i, l, E)) return (v = l), !1;
              }),
              v
            );
          }
          function xe(i, c, l, v) {
            for (var E = i.length, C = l + (v ? 1 : -1); v ? C-- : ++C < E; )
              if (c(i[C], C, i)) return C;
            return -1;
          }
          function Rt(i, c, l) {
            return c == c
              ? (function (i, c, l) {
                  for (var v = l - 1, E = i.length; ++v < E; )
                    if (i[v] === c) return v;
                  return -1;
                })(i, c, l)
              : xe(i, Cs, l);
          }
          function ef(i, c, l, v) {
            for (var E = l - 1, C = i.length; ++E < C; )
              if (v(i[E], c)) return E;
            return -1;
          }
          function Cs(i) {
            return i != i;
          }
          function Is(i, c) {
            var l = null == i ? 0 : i.length;
            return l ? Ur(i, c) / l : M;
          }
          function Hr(i) {
            return function (c) {
              return null == c ? l : c[i];
            };
          }
          function $r(i) {
            return function (c) {
              return null == i ? l : i[c];
            };
          }
          function xs(i, c, l, v, E) {
            return (
              E(i, function (i, E, C) {
                l = v ? ((v = !1), i) : c(l, i, E, C);
              }),
              l
            );
          }
          function Ur(i, c) {
            for (var v, E = -1, C = i.length; ++E < C; ) {
              var P = c(i[E]);
              P !== l && (v = v === l ? P : v + P);
            }
            return v;
          }
          function Wr(i, c) {
            for (var l = -1, v = Array(i); ++l < i; ) v[l] = c(l);
            return v;
          }
          function Es(i) {
            return i && i.slice(0, Rs(i) + 1).replace(eK, "");
          }
          function hn(i) {
            return function (c) {
              return i(c);
            };
          }
          function Fr(i, c) {
            return G(c, function (c) {
              return i[c];
            });
          }
          function kt(i, c) {
            return i.has(c);
          }
          function ys(i, c) {
            for (var l = -1, v = i.length; ++l < v && Rt(c, i[l], 0) > -1; );
            return l;
          }
          function Ss(i, c) {
            for (var l = i.length; l-- && Rt(c, i[l], 0) > -1; );
            return l;
          }
          var t4 = $r({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            t9 = $r({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function ff(i) {
            return "\\" + tB[i];
          }
          function bt(i) {
            return tM.test(i);
          }
          function Mr(i) {
            var c = -1,
              l = Array(i.size);
            return (
              i.forEach(function (i, v) {
                l[++c] = [v, i];
              }),
              l
            );
          }
          function Os(i, c) {
            return function (l) {
              return i(c(l));
            };
          }
          function tt(i, c) {
            for (var l = -1, v = i.length, E = 0, P = []; ++l < v; ) {
              var M = i[l];
              (M === c || M === C) && ((i[l] = C), (P[E++] = l));
            }
            return P;
          }
          function Ee(i) {
            var c = -1,
              l = Array(i.size);
            return (
              i.forEach(function (i) {
                l[++c] = i;
              }),
              l
            );
          }
          function Tt(i) {
            return bt(i)
              ? (function (i) {
                  for (var c = (tj.lastIndex = 0); tj.test(i); ) ++c;
                  return c;
                })(i)
              : t8(i);
          }
          function On(i) {
            return bt(i) ? i.match(tj) || [] : i.split("");
          }
          function Rs(i) {
            for (var c = i.length; c-- && eV.test(i.charAt(c)); );
            return c;
          }
          var t7 = $r({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            re = (function h(i) {
              var c,
                eV,
                e7,
                tn,
                ts = (i =
                  null == i ? tJ : re.defaults(tJ.Object(), i, re.pick(tJ, tz)))
                  .Array,
                to = i.Date,
                tc = i.Error,
                tl = i.Function,
                th = i.Math,
                tf = i.Object,
                td = i.RegExp,
                tp = i.String,
                tg = i.TypeError,
                t_ = ts.prototype,
                ty = tl.prototype,
                tm = tf.prototype,
                tb = i["__core-js_shared__"],
                tw = ty.toString,
                tE = tm.hasOwnProperty,
                tD = 0,
                tS = (c = /[^.]+$/.exec(
                  (tb && tb.keys && tb.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + c
                  : "",
                tI = tm.toString,
                tx = tw.call(tf),
                tC = tJ._,
                tO = td(
                  "^" +
                    tw
                      .call(tE)
                      .replace(eB, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                tP = tX ? i.Buffer : l,
                tA = i.Symbol,
                tR = i.Uint8Array,
                tN = tP ? tP.allocUnsafe : l,
                tj = Os(tf.getPrototypeOf, tf),
                tM = tf.create,
                tB = tm.propertyIsEnumerable,
                tV = t_.splice,
                tW = tA ? tA.isConcatSpreadable : l,
                tG = tA ? tA.iterator : l,
                tY = tA ? tA.toStringTag : l,
                tZ = (function () {
                  try {
                    var i = _t(tf, "defineProperty");
                    return i({}, "", {}), i;
                  } catch {}
                })(),
                tQ = i.clearTimeout !== tJ.clearTimeout && i.clearTimeout,
                t8 = to && to.now !== tJ.Date.now && to.now,
                rs = i.setTimeout !== tJ.setTimeout && i.setTimeout,
                ro = th.ceil,
                rc = th.floor,
                ru = tf.getOwnPropertySymbols,
                rl = tP ? tP.isBuffer : l,
                rh = i.isFinite,
                rf = t_.join,
                rd = Os(tf.keys, tf),
                rp = th.max,
                rg = th.min,
                r_ = to.now,
                ry = i.parseInt,
                rv = th.random,
                rm = t_.reverse,
                rb = _t(i, "DataView"),
                rw = _t(i, "Map"),
                rE = _t(i, "Promise"),
                rD = _t(i, "Set"),
                rS = _t(i, "WeakMap"),
                rI = _t(tf, "create"),
                rx = rS && new rS(),
                rC = {},
                rO = mt(rb),
                rP = mt(rw),
                rA = mt(rE),
                rR = mt(rD),
                rN = mt(rS),
                rT = tA ? tA.prototype : l,
                rU = rT ? rT.valueOf : l,
                rj = rT ? rT.toString : l;
              function a(i) {
                if (K(i) && !ij(i) && !(i instanceof N)) {
                  if (i instanceof Pn) return i;
                  if (tE.call(i, "__wrapped__")) return Wu(i);
                }
                return new Pn(i);
              }
              var rL = (function () {
                function n() {}
                return function (i) {
                  if (!z(i)) return {};
                  if (tM) return tM(i);
                  n.prototype = i;
                  var c = new n();
                  return (n.prototype = l), c;
                };
              })();
              function Fe() {}
              function Pn(i, c) {
                (this.__wrapped__ = i),
                  (this.__actions__ = []),
                  (this.__chain__ = !!c),
                  (this.__index__ = 0),
                  (this.__values__ = l);
              }
              function N(i) {
                (this.__wrapped__ = i),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = 4294967295),
                  (this.__views__ = []);
              }
              function pt(i) {
                var c = -1,
                  l = null == i ? 0 : i.length;
                for (this.clear(); ++c < l; ) {
                  var v = i[c];
                  this.set(v[0], v[1]);
                }
              }
              function Gn(i) {
                var c = -1,
                  l = null == i ? 0 : i.length;
                for (this.clear(); ++c < l; ) {
                  var v = i[c];
                  this.set(v[0], v[1]);
                }
              }
              function zn(i) {
                var c = -1,
                  l = null == i ? 0 : i.length;
                for (this.clear(); ++c < l; ) {
                  var v = i[c];
                  this.set(v[0], v[1]);
                }
              }
              function dt(i) {
                var c = -1,
                  l = null == i ? 0 : i.length;
                for (this.__data__ = new zn(); ++c < l; ) this.add(i[c]);
              }
              function Rn(i) {
                var c = (this.__data__ = new Gn(i));
                this.size = c.size;
              }
              function Ws(i, c) {
                var l = ij(i),
                  v = !l && iU(i),
                  E = !l && !v && iM(i),
                  C = !l && !v && !E && iq(i),
                  P = l || v || E || C,
                  M = P ? Wr(i.length, tp) : [],
                  B = M.length;
                for (var W in i)
                  (c || tE.call(i, W)) &&
                    !(
                      P &&
                      ("length" == W ||
                        (E && ("offset" == W || "parent" == W)) ||
                        (C &&
                          ("buffer" == W ||
                            "byteLength" == W ||
                            "byteOffset" == W)) ||
                        Jn(W, B))
                    ) &&
                    M.push(W);
                return M;
              }
              function Fs(i) {
                var c = i.length;
                return c ? i[ti(0, c - 1)] : l;
              }
              function Kr(i, c, v) {
                ((v === l || bn(i[c], v)) && (v !== l || c in i)) ||
                  Kn(i, c, v);
              }
              function ie(i, c, v) {
                var E = i[c];
                (tE.call(i, c) && bn(E, v) && (v !== l || c in i)) ||
                  Kn(i, c, v);
              }
              function Me(i, c) {
                for (var l = i.length; l--; ) if (bn(i[l][0], c)) return l;
                return -1;
              }
              function dc(i, c, l, v) {
                return (
                  rM(i, function (i, E, C) {
                    c(v, i, l(i), C);
                  }),
                  v
                );
              }
              function Ms(i, c) {
                return i && Un(c, V(c), i);
              }
              function Kn(i, c, l) {
                "__proto__" == c && tZ
                  ? tZ(i, c, {
                      configurable: !0,
                      enumerable: !0,
                      value: l,
                      writable: !0,
                    })
                  : (i[c] = l);
              }
              function Yr(i, c) {
                for (
                  var v = -1, E = c.length, C = ts(E), P = null == i;
                  ++v < E;

                )
                  C[v] = P ? l : yi(i, c[v]);
                return C;
              }
              function gt(i, c, v) {
                return (
                  i == i &&
                    (v !== l && (i = i <= v ? i : v),
                    c !== l && (i = i >= c ? i : c)),
                  i
                );
              }
              function An(i, c, v, E, C, P) {
                var M,
                  B = 1 & c,
                  J = 2 & c,
                  er = 4 & c;
                if ((v && (M = C ? v(i, E, C, P) : v(i)), M !== l)) return M;
                if (!z(i)) return i;
                var eh = ij(i);
                if (eh) {
                  if (
                    ((ey = i.length),
                    (eP = new i.constructor(ey)),
                    ey &&
                      "string" == typeof i[0] &&
                      tE.call(i, "index") &&
                      ((eP.index = i.index), (eP.input = i.input)),
                    (M = eP),
                    !B)
                  )
                    return un(i, M);
                } else {
                  var ey,
                    eP,
                    eA,
                    eR,
                    eN,
                    eT = rJ(i),
                    eU = eT == es || eT == eo;
                  if (iM(i)) return cu(i, B);
                  if (eT == el || eT == W || (eU && !C)) {
                    if (((M = J || eU ? {} : Ru(i)), !B))
                      return J
                        ? ((eA = (eN = M) && Un(i, on(i), eN)),
                          Un(i, rW(i), eA))
                        : ((eR = Ms(M, i)), Un(i, rV(i), eR));
                  } else {
                    if (!tq[eT]) return C ? i : {};
                    M = (function (i, c, l) {
                      var v,
                        E,
                        C = i.constructor;
                      switch (c) {
                        case ev:
                          return oi(i);
                        case X:
                        case Q:
                          return new C(+i);
                        case em:
                          return (
                            (v = l ? oi(i.buffer) : i.buffer),
                            new i.constructor(v, i.byteOffset, i.byteLength)
                          );
                        case eb:
                        case ew:
                        case eE:
                        case eD:
                        case eS:
                        case eI:
                        case ex:
                        case eC:
                        case eO:
                          return hu(i, l);
                        case ea:
                          return new C();
                        case ec:
                        case eg:
                          return new C(i);
                        case ed:
                          return (
                            ((E = new i.constructor(
                              i.source,
                              e0.exec(i)
                            )).lastIndex = i.lastIndex),
                            E
                          );
                        case ep:
                          return new C();
                        case e_:
                          return rU ? tf(rU.call(i)) : {};
                      }
                    })(i, eT, B);
                  }
                }
                P || (P = new Rn());
                var ej = P.get(i);
                if (ej) return ej;
                P.set(i, M),
                  iH(i)
                    ? i.forEach(function (l) {
                        M.add(An(l, c, v, l, i, P));
                      })
                    : iz(i) &&
                      i.forEach(function (l, E) {
                        M.set(E, An(l, c, v, E, i, P));
                      });
                var eL = er ? (J ? li : hi) : J ? on : V,
                  eM = eh ? l : eL(i);
                return (
                  mn(eM || i, function (l, E) {
                    eM && (l = i[(E = l)]), ie(M, E, An(l, c, v, E, i, P));
                  }),
                  M
                );
              }
              function qs(i, c, v) {
                var E = v.length;
                if (null == i) return !E;
                for (i = tf(i); E--; ) {
                  var C = v[E],
                    P = c[C],
                    M = i[C];
                  if ((M === l && !(C in i)) || !P(M)) return !1;
                }
                return !0;
              }
              function Bs(i, c, E) {
                if ("function" != typeof i) throw new tg(v);
                return rX(function () {
                  i.apply(l, E);
                }, c);
              }
              function se(i, c, l, v) {
                var E = -1,
                  C = Ie,
                  P = !0,
                  M = i.length,
                  B = [],
                  W = c.length;
                if (!M) return B;
                l && (c = G(c, hn(l))),
                  v
                    ? ((C = Lr), (P = !1))
                    : c.length >= 200 && ((C = kt), (P = !1), (c = new dt(c)));
                e: for (; ++E < M; ) {
                  var J = i[E],
                    X = null == l ? J : l(J);
                  if (((J = v || 0 !== J ? J : 0), P && X == X)) {
                    for (var Q = W; Q--; ) if (c[Q] === X) continue e;
                    B.push(J);
                  } else C(c, X, v) || B.push(J);
                }
                return B;
              }
              (a.templateSettings = {
                escape: eL,
                evaluate: eM,
                interpolate: ek,
                variable: "",
                imports: { _: a },
              }),
                (a.prototype = Fe.prototype),
                (a.prototype.constructor = a),
                (Pn.prototype = rL(Fe.prototype)),
                (Pn.prototype.constructor = Pn),
                (N.prototype = rL(Fe.prototype)),
                (N.prototype.constructor = N),
                (pt.prototype.clear = function () {
                  (this.__data__ = rI ? rI(null) : {}), (this.size = 0);
                }),
                (pt.prototype.delete = function (i) {
                  var c = this.has(i) && delete this.__data__[i];
                  return (this.size -= c ? 1 : 0), c;
                }),
                (pt.prototype.get = function (i) {
                  var c = this.__data__;
                  if (rI) {
                    var v = c[i];
                    return v === E ? l : v;
                  }
                  return tE.call(c, i) ? c[i] : l;
                }),
                (pt.prototype.has = function (i) {
                  var c = this.__data__;
                  return rI ? c[i] !== l : tE.call(c, i);
                }),
                (pt.prototype.set = function (i, c) {
                  var v = this.__data__;
                  return (
                    (this.size += this.has(i) ? 0 : 1),
                    (v[i] = rI && c === l ? E : c),
                    this
                  );
                }),
                (Gn.prototype.clear = function () {
                  (this.__data__ = []), (this.size = 0);
                }),
                (Gn.prototype.delete = function (i) {
                  var c = this.__data__,
                    l = Me(c, i);
                  return (
                    !(l < 0) &&
                    (l == c.length - 1 ? c.pop() : tV.call(c, l, 1),
                    --this.size,
                    !0)
                  );
                }),
                (Gn.prototype.get = function (i) {
                  var c = this.__data__,
                    v = Me(c, i);
                  return v < 0 ? l : c[v][1];
                }),
                (Gn.prototype.has = function (i) {
                  return Me(this.__data__, i) > -1;
                }),
                (Gn.prototype.set = function (i, c) {
                  var l = this.__data__,
                    v = Me(l, i);
                  return (
                    v < 0 ? (++this.size, l.push([i, c])) : (l[v][1] = c), this
                  );
                }),
                (zn.prototype.clear = function () {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new pt(),
                      map: new (rw || Gn)(),
                      string: new pt(),
                    });
                }),
                (zn.prototype.delete = function (i) {
                  var c = ke(this, i).delete(i);
                  return (this.size -= c ? 1 : 0), c;
                }),
                (zn.prototype.get = function (i) {
                  return ke(this, i).get(i);
                }),
                (zn.prototype.has = function (i) {
                  return ke(this, i).has(i);
                }),
                (zn.prototype.set = function (i, c) {
                  var l = ke(this, i),
                    v = l.size;
                  return l.set(i, c), (this.size += l.size == v ? 0 : 1), this;
                }),
                (dt.prototype.add = dt.prototype.push =
                  function (i) {
                    return this.__data__.set(i, E), this;
                  }),
                (dt.prototype.has = function (i) {
                  return this.__data__.has(i);
                }),
                (Rn.prototype.clear = function () {
                  (this.__data__ = new Gn()), (this.size = 0);
                }),
                (Rn.prototype.delete = function (i) {
                  var c = this.__data__,
                    l = c.delete(i);
                  return (this.size = c.size), l;
                }),
                (Rn.prototype.get = function (i) {
                  return this.__data__.get(i);
                }),
                (Rn.prototype.has = function (i) {
                  return this.__data__.has(i);
                }),
                (Rn.prototype.set = function (i, c) {
                  var l = this.__data__;
                  if (l instanceof Gn) {
                    var v = l.__data__;
                    if (!rw || v.length < 199)
                      return v.push([i, c]), (this.size = ++l.size), this;
                    l = this.__data__ = new zn(v);
                  }
                  return l.set(i, c), (this.size = l.size), this;
                });
              var rM = gu($n),
                rk = gu(Jr, !0);
              function _c(i, c) {
                var l = !0;
                return (
                  rM(i, function (i, v, E) {
                    return (l = !!c(i, v, E));
                  }),
                  l
                );
              }
              function qe(i, c, v) {
                for (var E = -1, C = i.length; ++E < C; ) {
                  var P = i[E],
                    M = c(P);
                  if (null != M && (B === l ? M == M && !pn(M) : v(M, B)))
                    var B = M,
                      W = P;
                }
                return W;
              }
              function zs(i, c) {
                var l = [];
                return (
                  rM(i, function (i, v, E) {
                    c(i, v, E) && l.push(i);
                  }),
                  l
                );
              }
              function j(i, c, l, v, E) {
                var C = -1,
                  P = i.length;
                for (l || (l = uh), E || (E = []); ++C < P; ) {
                  var M = i[C];
                  c > 0 && l(M)
                    ? c > 1
                      ? j(M, c - 1, l, v, E)
                      : nt(E, M)
                    : v || (E[E.length] = M);
                }
                return E;
              }
              var rz = vu(),
                r$ = vu(!0);
              function $n(i, c) {
                return i && rz(i, c, V);
              }
              function Jr(i, c) {
                return i && r$(i, c, V);
              }
              function Be(i, c) {
                return jn(c, function (c) {
                  return Xn(i[c]);
                });
              }
              function vt(i, c) {
                c = st(c, i);
                for (var v = 0, E = c.length; null != i && v < E; )
                  i = i[Wn(c[v++])];
                return v && v == E ? i : l;
              }
              function Ys(i, c, l) {
                var v = c(i);
                return ij(i) ? v : nt(v, l(i));
              }
              function en(i) {
                return null == i
                  ? i === l
                    ? "[object Undefined]"
                    : "[object Null]"
                  : tY && tY in tf(i)
                  ? (function (i) {
                      var c = tE.call(i, tY),
                        v = i[tY];
                      try {
                        i[tY] = l;
                        var E = !0;
                      } catch {}
                      var C = tI.call(i);
                      return E && (c ? (i[tY] = v) : delete i[tY]), C;
                    })(i)
                  : tI.call(i);
              }
              function Xr(i, c) {
                return i > c;
              }
              function wc(i, c) {
                return null != i && tE.call(i, c);
              }
              function Pc(i, c) {
                return null != i && c in tf(i);
              }
              function Qr(i, c, v) {
                for (
                  var E = v ? Lr : Ie,
                    C = i[0].length,
                    P = i.length,
                    M = P,
                    B = ts(P),
                    W = 1 / 0,
                    J = [];
                  M--;

                ) {
                  var X = i[M];
                  M && c && (X = G(X, hn(c))),
                    (W = rg(X.length, W)),
                    (B[M] =
                      !v && (c || (C >= 120 && X.length >= 120))
                        ? new dt(M && X)
                        : l);
                }
                X = i[0];
                var Q = -1,
                  er = B[0];
                e: for (; ++Q < C && J.length < W; ) {
                  var es = X[Q],
                    eo = c ? c(es) : es;
                  if (
                    ((es = v || 0 !== es ? es : 0),
                    !(er ? kt(er, eo) : E(J, eo, v)))
                  ) {
                    for (M = P; --M; ) {
                      var ea = B[M];
                      if (!(ea ? kt(ea, eo) : E(i[M], eo, v))) continue e;
                    }
                    er && er.push(eo), J.push(es);
                  }
                }
                return J;
              }
              function ue(i, c, v) {
                c = st(c, i);
                var E = null == (i = Du(i, c)) ? i : i[Wn(In(c))];
                return null == E ? l : cn(E, i, v);
              }
              function Zs(i) {
                return K(i) && en(i) == W;
              }
              function ae(i, c, v, E, C) {
                return (
                  i === c ||
                  (null != i && null != c && (K(i) || K(c))
                    ? (function (i, c, v, E, C, P) {
                        var M = ij(i),
                          B = ij(c),
                          es = M ? J : rJ(i),
                          eo = B ? J : rJ(c);
                        (es = es == W ? el : es), (eo = eo == W ? el : eo);
                        var eh = es == el,
                          ey = eo == el,
                          eb = es == eo;
                        if (eb && iM(i)) {
                          if (!iM(c)) return !1;
                          (M = !0), (eh = !1);
                        }
                        if (eb && !eh)
                          return (
                            P || (P = new Rn()),
                            M || iq(i)
                              ? yu(i, c, v, E, C, P)
                              : (function (i, c, l, v, E, C, P) {
                                  switch (l) {
                                    case em:
                                      if (
                                        i.byteLength != c.byteLength ||
                                        i.byteOffset != c.byteOffset
                                      )
                                        break;
                                      (i = i.buffer), (c = c.buffer);
                                    case ev:
                                      return !(
                                        i.byteLength != c.byteLength ||
                                        !C(new tR(i), new tR(c))
                                      );
                                    case X:
                                    case Q:
                                    case ec:
                                      return bn(+i, +c);
                                    case er:
                                      return (
                                        i.name == c.name &&
                                        i.message == c.message
                                      );
                                    case ed:
                                    case eg:
                                      return i == c + "";
                                    case ea:
                                      var M = Mr;
                                    case ep:
                                      var B = 1 & v;
                                      if (
                                        (M || (M = Ee), i.size != c.size && !B)
                                      )
                                        break;
                                      var W = P.get(i);
                                      if (W) return W == c;
                                      (v |= 2), P.set(i, c);
                                      var J = yu(M(i), M(c), v, E, C, P);
                                      return P.delete(i), J;
                                    case e_:
                                      if (rU) return rU.call(i) == rU.call(c);
                                  }
                                  return !1;
                                })(i, c, es, v, E, C, P)
                          );
                        if (!(1 & v)) {
                          var ew = eh && tE.call(i, "__wrapped__"),
                            eE = ey && tE.call(c, "__wrapped__");
                          if (ew || eE) {
                            var eD = ew ? i.value() : i,
                              eS = eE ? c.value() : c;
                            return P || (P = new Rn()), C(eD, eS, v, E, P);
                          }
                        }
                        return (
                          !!eb &&
                          (P || (P = new Rn()),
                          (function (i, c, v, E, C, P) {
                            var M = 1 & v,
                              B = hi(i),
                              W = B.length;
                            if (W != hi(c).length && !M) return !1;
                            for (var J = W; J--; ) {
                              var X = B[J];
                              if (!(M ? X in c : tE.call(c, X))) return !1;
                            }
                            var Q = P.get(i),
                              er = P.get(c);
                            if (Q && er) return Q == c && er == i;
                            var es = !0;
                            P.set(i, c), P.set(c, i);
                            for (var eo = M; ++J < W; ) {
                              var ea = i[(X = B[J])],
                                ec = c[X];
                              if (E)
                                var el = M
                                  ? E(ec, ea, X, c, i, P)
                                  : E(ea, ec, X, i, c, P);
                              if (
                                !(el === l
                                  ? ea === ec || C(ea, ec, v, E, P)
                                  : el)
                              ) {
                                es = !1;
                                break;
                              }
                              eo || (eo = "constructor" == X);
                            }
                            if (es && !eo) {
                              var eh = i.constructor,
                                ed = c.constructor;
                              eh != ed &&
                                "constructor" in i &&
                                "constructor" in c &&
                                !(
                                  "function" == typeof eh &&
                                  eh instanceof eh &&
                                  "function" == typeof ed &&
                                  ed instanceof ed
                                ) &&
                                (es = !1);
                            }
                            return P.delete(i), P.delete(c), es;
                          })(i, c, v, E, C, P))
                        );
                      })(i, c, v, E, ae, C)
                    : i != i && c != c)
                );
              }
              function Vr(i, c, v, E) {
                var C = v.length,
                  P = C,
                  M = !E;
                if (null == i) return !P;
                for (i = tf(i); C--; ) {
                  var B = v[C];
                  if (M && B[2] ? B[1] !== i[B[0]] : !(B[0] in i)) return !1;
                }
                for (; ++C < P; ) {
                  var W = (B = v[C])[0],
                    J = i[W],
                    X = B[1];
                  if (M && B[2]) {
                    if (J === l && !(W in i)) return !1;
                  } else {
                    var Q = new Rn();
                    if (E) var er = E(J, X, W, i, c, Q);
                    if (!(er === l ? ae(X, J, 3, E, Q) : er)) return !1;
                  }
                }
                return !0;
              }
              function Js(i) {
                return (
                  !(!z(i) || (tS && tS in i)) && (Xn(i) ? tO : e3).test(mt(i))
                );
              }
              function Xs(i) {
                return "function" == typeof i
                  ? i
                  : null == i
                  ? fn
                  : "object" == typeof i
                  ? ij(i)
                    ? ks(i[0], i[1])
                    : Vs(i)
                  : _a(i);
              }
              function kr(i) {
                if (!ce(i)) return rd(i);
                var c = [];
                for (var l in tf(i))
                  tE.call(i, l) && "constructor" != l && c.push(l);
                return c;
              }
              function jr(i, c) {
                return i < c;
              }
              function Qs(i, c) {
                var l = -1,
                  v = an(i) ? ts(i.length) : [];
                return (
                  rM(i, function (i, E, C) {
                    v[++l] = c(i, E, C);
                  }),
                  v
                );
              }
              function Vs(i) {
                var c = di(i);
                return 1 == c.length && c[0][2]
                  ? Tu(c[0][0], c[0][1])
                  : function (l) {
                      return l === i || Vr(l, i, c);
                    };
              }
              function ks(i, c) {
                var v;
                return vi(i) && (v = c) == v && !z(v)
                  ? Tu(Wn(i), c)
                  : function (v) {
                      var E = yi(v, i);
                      return E === l && E === c ? Si(v, i) : ae(c, E, 3);
                    };
              }
              function Ge(i, c, v, E, C) {
                i !== c &&
                  rz(
                    c,
                    function (P, M) {
                      if ((C || (C = new Rn()), z(P)))
                        !(function (i, c, v, E, C, P, M) {
                          var B = mi(i, v),
                            W = mi(c, v),
                            J = M.get(W);
                          if (J) {
                            Kr(i, v, J);
                            return;
                          }
                          var X = P ? P(B, W, v + "", i, c, M) : l,
                            Q = X === l;
                          if (Q) {
                            var er = ij(W),
                              es = !er && iM(W),
                              eo = !er && !es && iq(W);
                            (X = W),
                              er || es || eo
                                ? ij(B)
                                  ? (X = B)
                                  : Y(B)
                                  ? (X = un(B))
                                  : es
                                  ? ((Q = !1), (X = cu(W, !0)))
                                  : eo
                                  ? ((Q = !1), (X = hu(W, !0)))
                                  : (X = [])
                                : le(W) || iU(W)
                                ? ((X = B),
                                  iU(B)
                                    ? (X = aa(B))
                                    : (!z(B) || Xn(B)) && (X = Ru(W)))
                                : (Q = !1);
                          }
                          Q && (M.set(W, X), C(X, W, E, P, M), M.delete(W)),
                            Kr(i, v, X);
                        })(i, c, M, v, Ge, E, C);
                      else {
                        var B = E ? E(mi(i, M), P, M + "", i, c, C) : l;
                        B === l && (B = P), Kr(i, M, B);
                      }
                    },
                    on
                  );
              }
              function js(i, c) {
                var v = i.length;
                if (v) return Jn((c += c < 0 ? v : 0), v) ? i[c] : l;
              }
              function nu(i, c, l) {
                c = c.length
                  ? G(c, function (i) {
                      return ij(i)
                        ? function (c) {
                            return vt(c, 1 === i.length ? i[0] : i);
                          }
                        : i;
                    })
                  : [fn];
                var v = -1;
                return (
                  (c = G(c, hn(x()))),
                  (function (i, c) {
                    var l = i.length;
                    for (i.sort(c); l--; ) i[l] = i[l].value;
                    return i;
                  })(
                    Qs(i, function (i, l, E) {
                      return {
                        criteria: G(c, function (c) {
                          return c(i);
                        }),
                        index: ++v,
                        value: i,
                      };
                    }),
                    function (i, c) {
                      return (function (i, c, l) {
                        for (
                          var v = -1,
                            E = i.criteria,
                            C = c.criteria,
                            P = E.length,
                            M = l.length;
                          ++v < P;

                        ) {
                          var B = lu(E[v], C[v]);
                          if (B) {
                            if (v >= M) return B;
                            return B * ("desc" == l[v] ? -1 : 1);
                          }
                        }
                        return i.index - c.index;
                      })(i, c, l);
                    }
                  )
                );
              }
              function tu(i, c, l) {
                for (var v = -1, E = c.length, C = {}; ++v < E; ) {
                  var P = c[v],
                    M = vt(i, P);
                  l(M, P) && oe(C, st(P, i), M);
                }
                return C;
              }
              function ni(i, c, l, v) {
                var E = v ? ef : Rt,
                  C = -1,
                  P = c.length,
                  M = i;
                for (i === c && (c = un(c)), l && (M = G(i, hn(l))); ++C < P; )
                  for (
                    var B = 0, W = c[C], J = l ? l(W) : W;
                    (B = E(M, J, B, v)) > -1;

                  )
                    M !== i && tV.call(M, B, 1), tV.call(i, B, 1);
                return i;
              }
              function eu(i, c) {
                for (var l = i ? c.length : 0, v = l - 1; l--; ) {
                  var E = c[l];
                  if (l == v || E !== C) {
                    var C = E;
                    Jn(E) ? tV.call(i, E, 1) : ii(i, E);
                  }
                }
                return i;
              }
              function ti(i, c) {
                return i + rc(rv() * (c - i + 1));
              }
              function ei(i, c) {
                var l = "";
                if (!i || c < 1 || c > 9007199254740991) return l;
                do c % 2 && (l += i), (c = rc(c / 2)) && (i += i);
                while (c);
                return l;
              }
              function T(i, c) {
                return rZ(Lu(i, c, fn), i + "");
              }
              function oe(i, c, v, E) {
                if (!z(i)) return i;
                c = st(c, i);
                for (
                  var C = -1, P = c.length, M = P - 1, B = i;
                  null != B && ++C < P;

                ) {
                  var W = Wn(c[C]),
                    J = v;
                  if (
                    "__proto__" === W ||
                    "constructor" === W ||
                    "prototype" === W
                  )
                    break;
                  if (C != M) {
                    var X = B[W];
                    (J = E ? E(X, W, B) : l) === l &&
                      (J = z(X) ? X : Jn(c[C + 1]) ? [] : {});
                  }
                  ie(B, W, J), (B = B[W]);
                }
                return i;
              }
              var rH = rx
                  ? function (i, c) {
                      return rx.set(i, c), i;
                    }
                  : fn,
                rq = tZ
                  ? function (i, c) {
                      return tZ(i, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Ri(c),
                        writable: !0,
                      });
                    }
                  : fn;
              function Cn(i, c, l) {
                var v = -1,
                  E = i.length;
                c < 0 && (c = -c > E ? 0 : E + c),
                  (l = l > E ? E : l) < 0 && (l += E),
                  (E = c > l ? 0 : (l - c) >>> 0),
                  (c >>>= 0);
                for (var C = ts(E); ++v < E; ) C[v] = i[v + c];
                return C;
              }
              function Fc(i, c) {
                var l;
                return (
                  rM(i, function (i, v, E) {
                    return !(l = c(i, v, E));
                  }),
                  !!l
                );
              }
              function ze(i, c, l) {
                var v = 0,
                  E = null == i ? v : i.length;
                if ("number" == typeof c && c == c && E <= 2147483647) {
                  for (; v < E; ) {
                    var C = (v + E) >>> 1,
                      P = i[C];
                    null !== P && !pn(P) && (l ? P <= c : P < c)
                      ? (v = C + 1)
                      : (E = C);
                  }
                  return E;
                }
                return ri(i, c, fn, l);
              }
              function ri(i, c, v, E) {
                var C = 0,
                  P = null == i ? 0 : i.length;
                if (0 === P) return 0;
                c = v(c);
                for (
                  var M = c != c, B = null === c, W = pn(c), J = c === l;
                  C < P;

                ) {
                  var X = rc((C + P) / 2),
                    Q = v(i[X]),
                    er = Q !== l,
                    es = null === Q,
                    eo = Q == Q,
                    ea = pn(Q);
                  if (M) var ec = E || eo;
                  else
                    ec = J
                      ? eo && (E || er)
                      : B
                      ? eo && er && (E || !es)
                      : W
                      ? eo && er && !es && (E || !ea)
                      : !es && !ea && (E ? Q <= c : Q < c);
                  ec ? (C = X + 1) : (P = X);
                }
                return rg(P, 4294967294);
              }
              function iu(i, c) {
                for (var l = -1, v = i.length, E = 0, C = []; ++l < v; ) {
                  var P = i[l],
                    M = c ? c(P) : P;
                  if (!l || !bn(M, B)) {
                    var B = M;
                    C[E++] = 0 === P ? 0 : P;
                  }
                }
                return C;
              }
              function su(i) {
                return "number" == typeof i ? i : pn(i) ? M : +i;
              }
              function ln(i) {
                if ("string" == typeof i) return i;
                if (ij(i)) return G(i, ln) + "";
                if (pn(i)) return rj ? rj.call(i) : "";
                var c = i + "";
                return "0" == c && 1 / i == -P ? "-0" : c;
              }
              function it(i, c, l) {
                var v = -1,
                  E = Ie,
                  C = i.length,
                  P = !0,
                  M = [],
                  B = M;
                if (l) (P = !1), (E = Lr);
                else if (C >= 200) {
                  var W = c ? null : rF(i);
                  if (W) return Ee(W);
                  (P = !1), (E = kt), (B = new dt());
                } else B = c ? [] : M;
                e: for (; ++v < C; ) {
                  var J = i[v],
                    X = c ? c(J) : J;
                  if (((J = l || 0 !== J ? J : 0), P && X == X)) {
                    for (var Q = B.length; Q--; ) if (B[Q] === X) continue e;
                    c && B.push(X), M.push(J);
                  } else E(B, X, l) || (B !== M && B.push(X), M.push(J));
                }
                return M;
              }
              function ii(i, c) {
                return (
                  (c = st(c, i)), null == (i = Du(i, c)) || delete i[Wn(In(c))]
                );
              }
              function uu(i, c, l, v) {
                return oe(i, c, l(vt(i, c)), v);
              }
              function Ke(i, c, l, v) {
                for (
                  var E = i.length, C = v ? E : -1;
                  (v ? C-- : ++C < E) && c(i[C], C, i);

                );
                return l
                  ? Cn(i, v ? 0 : C, v ? C + 1 : E)
                  : Cn(i, v ? C + 1 : 0, v ? E : C);
              }
              function au(i, c) {
                var l = i;
                return (
                  l instanceof N && (l = l.value()),
                  Dr(
                    c,
                    function (i, c) {
                      return c.func.apply(c.thisArg, nt([i], c.args));
                    },
                    l
                  )
                );
              }
              function si(i, c, l) {
                var v = i.length;
                if (v < 2) return v ? it(i[0]) : [];
                for (var E = -1, C = ts(v); ++E < v; )
                  for (var P = i[E], M = -1; ++M < v; )
                    M != E && (C[E] = se(C[E] || P, i[M], c, l));
                return it(j(C, 1), c, l);
              }
              function ou(i, c, v) {
                for (
                  var E = -1, C = i.length, P = c.length, M = {};
                  ++E < C;

                ) {
                  var B = E < P ? c[E] : l;
                  v(M, i[E], B);
                }
                return M;
              }
              function ui(i) {
                return Y(i) ? i : [];
              }
              function ai(i) {
                return "function" == typeof i ? i : fn;
              }
              function st(i, c) {
                return ij(i) ? i : vi(i, c) ? [i] : rQ(U(i));
              }
              function ut(i, c, v) {
                var E = i.length;
                return (v = v === l ? E : v), !c && v >= E ? i : Cn(i, c, v);
              }
              var rB =
                tQ ||
                function (i) {
                  return tJ.clearTimeout(i);
                };
              function cu(i, c) {
                if (c) return i.slice();
                var l = i.length,
                  v = tN ? tN(l) : new i.constructor(l);
                return i.copy(v), v;
              }
              function oi(i) {
                var c = new i.constructor(i.byteLength);
                return new tR(c).set(new tR(i)), c;
              }
              function hu(i, c) {
                var l = c ? oi(i.buffer) : i.buffer;
                return new i.constructor(l, i.byteOffset, i.length);
              }
              function lu(i, c) {
                if (i !== c) {
                  var v = i !== l,
                    E = null === i,
                    C = i == i,
                    P = pn(i),
                    M = c !== l,
                    B = null === c,
                    W = c == c,
                    J = pn(c);
                  if (
                    (!B && !J && !P && i > c) ||
                    (P && M && W && !B && !J) ||
                    (E && M && W) ||
                    (!v && W) ||
                    !C
                  )
                    return 1;
                  if (
                    (!E && !P && !J && i < c) ||
                    (J && v && C && !E && !P) ||
                    (B && v && C) ||
                    (!M && C) ||
                    !W
                  )
                    return -1;
                }
                return 0;
              }
              function pu(i, c, l, v) {
                for (
                  var E = -1,
                    C = i.length,
                    P = l.length,
                    M = -1,
                    B = c.length,
                    W = rp(C - P, 0),
                    J = ts(B + W),
                    X = !v;
                  ++M < B;

                )
                  J[M] = c[M];
                for (; ++E < P; ) (X || E < C) && (J[l[E]] = i[E]);
                for (; W--; ) J[M++] = i[E++];
                return J;
              }
              function du(i, c, l, v) {
                for (
                  var E = -1,
                    C = i.length,
                    P = -1,
                    M = l.length,
                    B = -1,
                    W = c.length,
                    J = rp(C - M, 0),
                    X = ts(J + W),
                    Q = !v;
                  ++E < J;

                )
                  X[E] = i[E];
                for (var er = E; ++B < W; ) X[er + B] = c[B];
                for (; ++P < M; ) (Q || E < C) && (X[er + l[P]] = i[E++]);
                return X;
              }
              function un(i, c) {
                var l = -1,
                  v = i.length;
                for (c || (c = ts(v)); ++l < v; ) c[l] = i[l];
                return c;
              }
              function Un(i, c, v, E) {
                var C = !v;
                v || (v = {});
                for (var P = -1, M = c.length; ++P < M; ) {
                  var B = c[P],
                    W = E ? E(v[B], i[B], B, v, i) : l;
                  W === l && (W = i[B]), C ? Kn(v, B, W) : ie(v, B, W);
                }
                return v;
              }
              function Ye(i, c) {
                return function (l, v) {
                  var E = ij(l) ? Qo : dc,
                    C = c ? c() : {};
                  return E(l, i, x(v, 2), C);
                };
              }
              function Ut(i) {
                return T(function (c, v) {
                  var E = -1,
                    C = v.length,
                    P = C > 1 ? v[C - 1] : l,
                    M = C > 2 ? v[2] : l;
                  for (
                    P = i.length > 3 && "function" == typeof P ? (C--, P) : l,
                      M && rn(v[0], v[1], M) && ((P = C < 3 ? l : P), (C = 1)),
                      c = tf(c);
                    ++E < C;

                  ) {
                    var B = v[E];
                    B && i(c, B, E, P);
                  }
                  return c;
                });
              }
              function gu(i, c) {
                return function (l, v) {
                  if (null == l) return l;
                  if (!an(l)) return i(l, v);
                  for (
                    var E = l.length, C = c ? E : -1, P = tf(l);
                    (c ? C-- : ++C < E) && !1 !== v(P[C], C, P);

                  );
                  return l;
                };
              }
              function vu(i) {
                return function (c, l, v) {
                  for (var E = -1, C = tf(c), P = v(c), M = P.length; M--; ) {
                    var B = P[i ? M : ++E];
                    if (!1 === l(C[B], B, C)) break;
                  }
                  return c;
                };
              }
              function _u(i) {
                return function (c) {
                  var v = bt((c = U(c))) ? On(c) : l,
                    E = v ? v[0] : c.charAt(0),
                    C = v ? ut(v, 1).join("") : c.slice(1);
                  return E[i]() + C;
                };
              }
              function Wt(i) {
                return function (c) {
                  return Dr(ga(da(c).replace(tT, "")), i, "");
                };
              }
              function fe(i) {
                return function () {
                  var c = arguments;
                  switch (c.length) {
                    case 0:
                      return new i();
                    case 1:
                      return new i(c[0]);
                    case 2:
                      return new i(c[0], c[1]);
                    case 3:
                      return new i(c[0], c[1], c[2]);
                    case 4:
                      return new i(c[0], c[1], c[2], c[3]);
                    case 5:
                      return new i(c[0], c[1], c[2], c[3], c[4]);
                    case 6:
                      return new i(c[0], c[1], c[2], c[3], c[4], c[5]);
                    case 7:
                      return new i(c[0], c[1], c[2], c[3], c[4], c[5], c[6]);
                  }
                  var l = rL(i.prototype),
                    v = i.apply(l, c);
                  return z(v) ? v : l;
                };
              }
              function mu(i) {
                return function (c, v, E) {
                  var C = tf(c);
                  if (!an(c)) {
                    var P = x(v, 3);
                    (c = V(c)),
                      (v = function (i) {
                        return P(C[i], i, C);
                      });
                  }
                  var M = i(c, v, E);
                  return M > -1 ? C[P ? c[M] : M] : l;
                };
              }
              function wu(i) {
                return Zn(function (c) {
                  var E = c.length,
                    C = E,
                    P = Pn.prototype.thru;
                  for (i && c.reverse(); C--; ) {
                    var M = c[C];
                    if ("function" != typeof M) throw new tg(v);
                    if (P && !B && "wrapper" == Ve(M)) var B = new Pn([], !0);
                  }
                  for (C = B ? C : E; ++C < E; ) {
                    var W = Ve((M = c[C])),
                      J = "wrapper" == W ? rK(M) : l;
                    B =
                      J && _i(J[0]) && 424 == J[1] && !J[4].length && 1 == J[9]
                        ? B[Ve(J[0])].apply(B, J[3])
                        : 1 == M.length && _i(M)
                        ? B[W]()
                        : B.thru(M);
                  }
                  return function () {
                    var i = arguments,
                      l = i[0];
                    if (B && 1 == i.length && ij(l)) return B.plant(l).value();
                    for (var v = 0, C = E ? c[v].apply(this, i) : l; ++v < E; )
                      C = c[v].call(this, C);
                    return C;
                  };
                });
              }
              function Ze(i, c, v, E, C, P, M, B, W, J) {
                var X = 128 & c,
                  Q = 1 & c,
                  er = 2 & c,
                  es = 24 & c,
                  eo = 512 & c,
                  ea = er ? l : fe(i);
                return function y() {
                  for (var ec = arguments.length, el = ts(ec), eh = ec; eh--; )
                    el[eh] = arguments[eh];
                  if (es)
                    var ed = Ft(y),
                      ep = (function (i, c) {
                        for (var l = i.length, v = 0; l--; ) i[l] === c && ++v;
                        return v;
                      })(el, ed);
                  if (
                    (E && (el = pu(el, E, C, es)),
                    P && (el = du(el, P, M, es)),
                    (ec -= ep),
                    es && ec < J)
                  ) {
                    var eg = tt(el, ed);
                    return Cu(i, c, Ze, y.placeholder, v, el, eg, B, W, J - ec);
                  }
                  var e_ = Q ? v : this,
                    ey = er ? e_[i] : i;
                  return (
                    (ec = el.length),
                    B
                      ? (el = (function (i, c) {
                          for (
                            var v = i.length, E = rg(c.length, v), C = un(i);
                            E--;

                          ) {
                            var P = c[E];
                            i[E] = Jn(P, v) ? C[P] : l;
                          }
                          return i;
                        })(el, B))
                      : eo && ec > 1 && el.reverse(),
                    X && W < ec && (el.length = W),
                    this &&
                      this !== tJ &&
                      this instanceof y &&
                      (ey = ea || fe(ey)),
                    ey.apply(e_, el)
                  );
                };
              }
              function Pu(i, c) {
                return function (l, v) {
                  var E, C;
                  return (
                    (E = c(v)),
                    (C = {}),
                    $n(l, function (c, l, v) {
                      i(C, E(c), l, v);
                    }),
                    C
                  );
                };
              }
              function Je(i, c) {
                return function (v, E) {
                  var C;
                  if (v === l && E === l) return c;
                  if ((v !== l && (C = v), E !== l)) {
                    if (C === l) return E;
                    "string" == typeof v || "string" == typeof E
                      ? ((v = ln(v)), (E = ln(E)))
                      : ((v = su(v)), (E = su(E))),
                      (C = i(v, E));
                  }
                  return C;
                };
              }
              function fi(i) {
                return Zn(function (c) {
                  return (
                    (c = G(c, hn(x()))),
                    T(function (l) {
                      var v = this;
                      return i(c, function (i) {
                        return cn(i, v, l);
                      });
                    })
                  );
                });
              }
              function Xe(i, c) {
                var v = (c = c === l ? " " : ln(c)).length;
                if (v < 2) return v ? ei(c, i) : c;
                var E = ei(c, ro(i / Tt(c)));
                return bt(c) ? ut(On(E), 0, i).join("") : E.slice(0, i);
              }
              function Au(i) {
                return function (c, v, E) {
                  return (
                    E && "number" != typeof E && rn(c, v, E) && (v = E = l),
                    (c = Qn(c)),
                    v === l ? ((v = c), (c = 0)) : (v = Qn(v)),
                    (E = E === l ? (c < v ? 1 : -1) : Qn(E)),
                    (function (i, c, l, v) {
                      for (
                        var E = -1,
                          C = rp(ro((c - i) / (l || 1)), 0),
                          P = ts(C);
                        C--;

                      )
                        (P[v ? C : ++E] = i), (i += l);
                      return P;
                    })(c, v, E, i)
                  );
                };
              }
              function Qe(i) {
                return function (c, l) {
                  return (
                    ("string" == typeof c && "string" == typeof l) ||
                      ((c = xn(c)), (l = xn(l))),
                    i(c, l)
                  );
                };
              }
              function Cu(i, c, v, E, C, P, M, B, W, J) {
                var X = 8 & c,
                  Q = X ? M : l,
                  er = X ? l : M,
                  es = X ? P : l,
                  eo = X ? l : P;
                (c |= X ? 32 : 64), 4 & (c &= ~(X ? 64 : 32)) || (c &= -4);
                var ea = [i, c, C, es, Q, eo, er, B, W, J],
                  ec = v.apply(l, ea);
                return _i(i) && rY(ec, ea), (ec.placeholder = E), Hu(ec, i, c);
              }
              function ci(i) {
                var c = th[i];
                return function (i, l) {
                  if (
                    ((i = xn(i)), (l = null == l ? 0 : rg(R(l), 292)) && rh(i))
                  ) {
                    var v = (U(i) + "e").split("e");
                    return +(
                      (v = (U(c(v[0] + "e" + (+v[1] + l))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+v[1] - l)
                    );
                  }
                  return c(i);
                };
              }
              var rF =
                rD && 1 / Ee(new rD([, -0]))[1] == P
                  ? function (i) {
                      return new rD(i);
                    }
                  : Li;
              function Iu(i) {
                return function (c) {
                  var l,
                    v,
                    E = rJ(c);
                  return E == ea
                    ? Mr(c)
                    : E == ep
                    ? ((l = -1),
                      (v = Array(c.size)),
                      c.forEach(function (i) {
                        v[++l] = [i, i];
                      }),
                      v)
                    : G(i(c), function (i) {
                        return [i, c[i]];
                      });
                };
              }
              function Yn(i, c, E, P, M, B, W, J) {
                var X = 2 & c;
                if (!X && "function" != typeof i) throw new tg(v);
                var Q = P ? P.length : 0;
                if (
                  (Q || ((c &= -97), (P = M = l)),
                  (W = W === l ? W : rp(R(W), 0)),
                  (J = J === l ? J : R(J)),
                  (Q -= M ? M.length : 0),
                  64 & c)
                ) {
                  var er = P,
                    es = M;
                  P = M = l;
                }
                var eo = X ? l : rK(i),
                  ea = [i, c, E, P, M, er, es, B, W, J];
                if (
                  (eo &&
                    (function (i, c) {
                      var l = i[1],
                        v = c[1],
                        E = l | v,
                        P = E < 131,
                        M =
                          (128 == v && 8 == l) ||
                          (128 == v && 256 == l && i[7].length <= c[8]) ||
                          (384 == v && c[7].length <= c[8] && 8 == l);
                      if (P || M) {
                        1 & v && ((i[2] = c[2]), (E |= 1 & l ? 0 : 4));
                        var B = c[3];
                        if (B) {
                          var W = i[3];
                          (i[3] = W ? pu(W, B, c[4]) : B),
                            (i[4] = W ? tt(i[3], C) : c[4]);
                        }
                        (B = c[5]) &&
                          ((W = i[5]),
                          (i[5] = W ? du(W, B, c[6]) : B),
                          (i[6] = W ? tt(i[5], C) : c[6])),
                          (B = c[7]) && (i[7] = B),
                          128 & v &&
                            (i[8] = null == i[8] ? c[8] : rg(i[8], c[8])),
                          null == i[9] && (i[9] = c[9]),
                          (i[0] = c[0]),
                          (i[1] = E);
                      }
                    })(ea, eo),
                  (i = ea[0]),
                  (c = ea[1]),
                  (E = ea[2]),
                  (P = ea[3]),
                  (M = ea[4]),
                  (J = ea[9] =
                    ea[9] === l ? (X ? 0 : i.length) : rp(ea[9] - Q, 0)) ||
                    !(24 & c) ||
                    (c &= -25),
                  c && 1 != c)
                )
                  8 == c || 16 == c
                    ? ((ec = i),
                      (el = c),
                      (eh = J),
                      (ed = fe(ec)),
                      (eI = function s() {
                        for (
                          var i = arguments.length, c = ts(i), v = i, E = Ft(s);
                          v--;

                        )
                          c[v] = arguments[v];
                        var C =
                          i < 3 && c[0] !== E && c[i - 1] !== E ? [] : tt(c, E);
                        return (i -= C.length) < eh
                          ? Cu(ec, el, Ze, s.placeholder, l, c, C, l, l, eh - i)
                          : cn(
                              this && this !== tJ && this instanceof s
                                ? ed
                                : ec,
                              this,
                              c
                            );
                      }))
                    : (32 != c && 33 != c) || M.length
                    ? (eI = Ze.apply(l, ea))
                    : ((ep = i),
                      (eg = c),
                      (e_ = E),
                      (ey = P),
                      (ev = 1 & eg),
                      (em = fe(ep)),
                      (eI = function f() {
                        for (
                          var i = -1,
                            c = arguments.length,
                            l = -1,
                            v = ey.length,
                            E = ts(v + c),
                            C =
                              this && this !== tJ && this instanceof f
                                ? em
                                : ep;
                          ++l < v;

                        )
                          E[l] = ey[l];
                        for (; c--; ) E[l++] = arguments[++i];
                        return cn(C, ev ? e_ : this, E);
                      }));
                else
                  var ec,
                    el,
                    eh,
                    ed,
                    ep,
                    eg,
                    e_,
                    ey,
                    ev,
                    em,
                    eb,
                    ew,
                    eE,
                    eD,
                    eS,
                    eI =
                      ((eb = i),
                      (ew = c),
                      (eE = E),
                      (eD = 1 & ew),
                      (eS = fe(eb)),
                      function o() {
                        return (
                          this && this !== tJ && this instanceof o ? eS : eb
                        ).apply(eD ? eE : this, arguments);
                      });
                return Hu((eo ? rH : rY)(eI, ea), i, c);
              }
              function xu(i, c, v, E) {
                return i === l || (bn(i, tm[v]) && !tE.call(E, v)) ? c : i;
              }
              function Eu(i, c, v, E, C, P) {
                return (
                  z(i) &&
                    z(c) &&
                    (P.set(c, i), Ge(i, c, l, Eu, P), P.delete(c)),
                  i
                );
              }
              function Vc(i) {
                return le(i) ? l : i;
              }
              function yu(i, c, v, E, C, P) {
                var M = 1 & v,
                  B = i.length,
                  W = c.length;
                if (B != W && !(M && W > B)) return !1;
                var J = P.get(i),
                  X = P.get(c);
                if (J && X) return J == c && X == i;
                var Q = -1,
                  er = !0,
                  es = 2 & v ? new dt() : l;
                for (P.set(i, c), P.set(c, i); ++Q < B; ) {
                  var eo = i[Q],
                    ea = c[Q];
                  if (E)
                    var ec = M ? E(ea, eo, Q, c, i, P) : E(eo, ea, Q, i, c, P);
                  if (ec !== l) {
                    if (ec) continue;
                    er = !1;
                    break;
                  }
                  if (es) {
                    if (
                      !Nr(c, function (i, c) {
                        if (!kt(es, c) && (eo === i || C(eo, i, v, E, P)))
                          return es.push(c);
                      })
                    ) {
                      er = !1;
                      break;
                    }
                  } else if (!(eo === ea || C(eo, ea, v, E, P))) {
                    er = !1;
                    break;
                  }
                }
                return P.delete(i), P.delete(c), er;
              }
              function Zn(i) {
                return rZ(Lu(i, l, qu), i + "");
              }
              function hi(i) {
                return Ys(i, V, rV);
              }
              function li(i) {
                return Ys(i, on, rW);
              }
              var rK = rx
                ? function (i) {
                    return rx.get(i);
                  }
                : Li;
              function Ve(i) {
                for (
                  var c = i.name + "",
                    l = rC[c],
                    v = tE.call(rC, c) ? l.length : 0;
                  v--;

                ) {
                  var E = l[v],
                    C = E.func;
                  if (null == C || C == i) return E.name;
                }
                return c;
              }
              function Ft(i) {
                return (tE.call(a, "placeholder") ? a : i).placeholder;
              }
              function x() {
                var i = a.iteratee || bi;
                return (
                  (i = i === bi ? Xs : i),
                  arguments.length ? i(arguments[0], arguments[1]) : i
                );
              }
              function ke(i, c) {
                var l,
                  v = i.__data__;
                return (
                  "string" == (l = typeof c) ||
                  "number" == l ||
                  "symbol" == l ||
                  "boolean" == l
                    ? "__proto__" !== c
                    : null === c
                )
                  ? v["string" == typeof c ? "string" : "hash"]
                  : v.map;
              }
              function di(i) {
                for (var c = V(i), l = c.length; l--; ) {
                  var v = c[l],
                    E = i[v];
                  c[l] = [v, E, E == E && !z(E)];
                }
                return c;
              }
              function _t(i, c) {
                var v = null == i ? l : i[c];
                return Js(v) ? v : l;
              }
              var rV = ru
                  ? function (i) {
                      return null == i
                        ? []
                        : jn(ru((i = tf(i))), function (c) {
                            return tB.call(i, c);
                          });
                    }
                  : Di,
                rW = ru
                  ? function (i) {
                      for (var c = []; i; ) nt(c, rV(i)), (i = tj(i));
                      return c;
                    }
                  : Di,
                rJ = en;
              function Ou(i, c, l) {
                c = st(c, i);
                for (var v = -1, E = c.length, C = !1; ++v < E; ) {
                  var P = Wn(c[v]);
                  if (!(C = null != i && l(i, P))) break;
                  i = i[P];
                }
                return C || ++v != E
                  ? C
                  : !!(E = null == i ? 0 : i.length) &&
                      sr(E) &&
                      Jn(P, E) &&
                      (ij(i) || iU(i));
              }
              function Ru(i) {
                return "function" != typeof i.constructor || ce(i)
                  ? {}
                  : rL(tj(i));
              }
              function uh(i) {
                return ij(i) || iU(i) || !!(tW && i && i[tW]);
              }
              function Jn(i, c) {
                var l = typeof i;
                return (
                  !!(c = c ?? 9007199254740991) &&
                  ("number" == l || ("symbol" != l && e2.test(i))) &&
                  i > -1 &&
                  i % 1 == 0 &&
                  i < c
                );
              }
              function rn(i, c, l) {
                if (!z(l)) return !1;
                var v = typeof c;
                return (
                  ("number" == v
                    ? !!(an(l) && Jn(c, l.length))
                    : "string" == v && c in l) && bn(l[c], i)
                );
              }
              function vi(i, c) {
                if (ij(i)) return !1;
                var l = typeof i;
                return (
                  !!(
                    "number" == l ||
                    "symbol" == l ||
                    "boolean" == l ||
                    null == i ||
                    pn(i)
                  ) ||
                  e$.test(i) ||
                  !ez.test(i) ||
                  (null != c && i in tf(c))
                );
              }
              function _i(i) {
                var c = Ve(i),
                  l = a[c];
                if ("function" != typeof l || !(c in N.prototype)) return !1;
                if (i === l) return !0;
                var v = rK(l);
                return !!v && i === v[0];
              }
              ((rb && rJ(new rb(new ArrayBuffer(1))) != em) ||
                (rw && rJ(new rw()) != ea) ||
                (rE && rJ(rE.resolve()) != eh) ||
                (rD && rJ(new rD()) != ep) ||
                (rS && rJ(new rS()) != ey)) &&
                (rJ = function (i) {
                  var c = en(i),
                    v = c == el ? i.constructor : l,
                    E = v ? mt(v) : "";
                  if (E)
                    switch (E) {
                      case rO:
                        return em;
                      case rP:
                        return ea;
                      case rA:
                        return eh;
                      case rR:
                        return ep;
                      case rN:
                        return ey;
                    }
                  return c;
                });
              var rG = tb ? Xn : Ni;
              function ce(i) {
                var c = i && i.constructor;
                return i === (("function" == typeof c && c.prototype) || tm);
              }
              function Tu(i, c) {
                return function (v) {
                  return null != v && v[i] === c && (c !== l || i in tf(v));
                };
              }
              function Lu(i, c, v) {
                return (
                  (c = rp(c === l ? i.length - 1 : c, 0)),
                  function () {
                    for (
                      var l = arguments,
                        E = -1,
                        C = rp(l.length - c, 0),
                        P = ts(C);
                      ++E < C;

                    )
                      P[E] = l[c + E];
                    E = -1;
                    for (var M = ts(c + 1); ++E < c; ) M[E] = l[E];
                    return (M[c] = v(P)), cn(i, this, M);
                  }
                );
              }
              function Du(i, c) {
                return c.length < 2 ? i : vt(i, Cn(c, 0, -1));
              }
              function mi(i, c) {
                if (
                  !("constructor" === c && "function" == typeof i[c]) &&
                  "__proto__" != c
                )
                  return i[c];
              }
              var rY = $u(rH),
                rX =
                  rs ||
                  function (i, c) {
                    return tJ.setTimeout(i, c);
                  },
                rZ = $u(rq);
              function Hu(i, c, l) {
                var v,
                  E,
                  C = c + "";
                return rZ(
                  i,
                  (function (i, c) {
                    var l = c.length;
                    if (!l) return i;
                    var v = l - 1;
                    return (
                      (c[v] = (l > 1 ? "& " : "") + c[v]),
                      (c = c.join(l > 2 ? ", " : " ")),
                      i.replace(
                        eW,
                        `{
/* [wrapped with ` +
                          c +
                          `] */
`
                      )
                    );
                  })(
                    C,
                    ((v = (E = C.match(eJ)) ? E[1].split(eG) : []),
                    mn(B, function (i) {
                      var c = "_." + i[0];
                      l & i[1] && !Ie(v, c) && v.push(c);
                    }),
                    v.sort())
                  )
                );
              }
              function $u(i) {
                var c = 0,
                  v = 0;
                return function () {
                  var E = r_(),
                    C = 16 - (E - v);
                  if (((v = E), C > 0)) {
                    if (++c >= 800) return arguments[0];
                  } else c = 0;
                  return i.apply(l, arguments);
                };
              }
              function je(i, c) {
                var v = -1,
                  E = i.length,
                  C = E - 1;
                for (c = c === l ? E : c; ++v < c; ) {
                  var P = ti(v, C),
                    M = i[P];
                  (i[P] = i[v]), (i[v] = M);
                }
                return (i.length = c), i;
              }
              var rQ =
                ((e7 = (eV = rr(
                  function (i) {
                    var c = [];
                    return (
                      46 === i.charCodeAt(0) && c.push(""),
                      i.replace(eH, function (i, l, v, E) {
                        c.push(v ? E.replace(eZ, "$1") : l || i);
                      }),
                      c
                    );
                  },
                  function (i) {
                    return 500 === e7.size && e7.clear(), i;
                  }
                )).cache),
                eV);
              function Wn(i) {
                if ("string" == typeof i || pn(i)) return i;
                var c = i + "";
                return "0" == c && 1 / i == -P ? "-0" : c;
              }
              function mt(i) {
                if (null != i) {
                  try {
                    return tw.call(i);
                  } catch {}
                  try {
                    return i + "";
                  } catch {}
                }
                return "";
              }
              function Wu(i) {
                if (i instanceof N) return i.clone();
                var c = new Pn(i.__wrapped__, i.__chain__);
                return (
                  (c.__actions__ = un(i.__actions__)),
                  (c.__index__ = i.__index__),
                  (c.__values__ = i.__values__),
                  c
                );
              }
              var r0 = T(function (i, c) {
                  return Y(i) ? se(i, j(c, 1, Y, !0)) : [];
                }),
                r1 = T(function (i, c) {
                  var v = In(c);
                  return (
                    Y(v) && (v = l), Y(i) ? se(i, j(c, 1, Y, !0), x(v, 2)) : []
                  );
                }),
                r5 = T(function (i, c) {
                  var v = In(c);
                  return (
                    Y(v) && (v = l), Y(i) ? se(i, j(c, 1, Y, !0), l, v) : []
                  );
                });
              function Fu(i, c, l) {
                var v = null == i ? 0 : i.length;
                if (!v) return -1;
                var E = null == l ? 0 : R(l);
                return E < 0 && (E = rp(v + E, 0)), xe(i, x(c, 3), E);
              }
              function Mu(i, c, v) {
                var E = null == i ? 0 : i.length;
                if (!E) return -1;
                var C = E - 1;
                return (
                  v !== l &&
                    ((C = R(v)), (C = v < 0 ? rp(E + C, 0) : rg(C, E - 1))),
                  xe(i, x(c, 3), C, !0)
                );
              }
              function qu(i) {
                return (null == i ? 0 : i.length) ? j(i, 1) : [];
              }
              function Bu(i) {
                return i && i.length ? i[0] : l;
              }
              var r3 = T(function (i) {
                  var c = G(i, ui);
                  return c.length && c[0] === i[0] ? Qr(c) : [];
                }),
                r6 = T(function (i) {
                  var c = In(i),
                    v = G(i, ui);
                  return (
                    c === In(v) ? (c = l) : v.pop(),
                    v.length && v[0] === i[0] ? Qr(v, x(c, 2)) : []
                  );
                }),
                r2 = T(function (i) {
                  var c = In(i),
                    v = G(i, ui);
                  return (
                    (c = "function" == typeof c ? c : l) && v.pop(),
                    v.length && v[0] === i[0] ? Qr(v, l, c) : []
                  );
                });
              function In(i) {
                var c = null == i ? 0 : i.length;
                return c ? i[c - 1] : l;
              }
              var r8 = T(Gu);
              function Gu(i, c) {
                return i && i.length && c && c.length ? ni(i, c) : i;
              }
              var r4 = Zn(function (i, c) {
                var l = null == i ? 0 : i.length,
                  v = Yr(i, c);
                return (
                  eu(
                    i,
                    G(c, function (i) {
                      return Jn(i, l) ? +i : i;
                    }).sort(lu)
                  ),
                  v
                );
              });
              function Pi(i) {
                return null == i ? i : rm.call(i);
              }
              var r9 = T(function (i) {
                  return it(j(i, 1, Y, !0));
                }),
                r7 = T(function (i) {
                  var c = In(i);
                  return Y(c) && (c = l), it(j(i, 1, Y, !0), x(c, 2));
                }),
                is = T(function (i) {
                  var c = In(i);
                  return (
                    (c = "function" == typeof c ? c : l),
                    it(j(i, 1, Y, !0), l, c)
                  );
                });
              function Ai(i) {
                if (!(i && i.length)) return [];
                var c = 0;
                return (
                  (i = jn(i, function (i) {
                    if (Y(i)) return (c = rp(i.length, c)), !0;
                  })),
                  Wr(c, function (c) {
                    return G(i, Hr(c));
                  })
                );
              }
              function zu(i, c) {
                if (!(i && i.length)) return [];
                var v = Ai(i);
                return null == c
                  ? v
                  : G(v, function (i) {
                      return cn(c, l, i);
                    });
              }
              var io = T(function (i, c) {
                  return Y(i) ? se(i, c) : [];
                }),
                ia = T(function (i) {
                  return si(jn(i, Y));
                }),
                ic = T(function (i) {
                  var c = In(i);
                  return Y(c) && (c = l), si(jn(i, Y), x(c, 2));
                }),
                il = T(function (i) {
                  var c = In(i);
                  return (
                    (c = "function" == typeof c ? c : l), si(jn(i, Y), l, c)
                  );
                }),
                ih = T(Ai),
                id = T(function (i) {
                  var c = i.length,
                    v = c > 1 ? i[c - 1] : l;
                  return (
                    (v = "function" == typeof v ? (i.pop(), v) : l), zu(i, v)
                  );
                });
              function Ku(i) {
                var c = a(i);
                return (c.__chain__ = !0), c;
              }
              function nr(i, c) {
                return c(i);
              }
              var ip = Zn(function (i) {
                  var c = i.length,
                    v = c ? i[0] : 0,
                    E = this.__wrapped__,
                    s = function (c) {
                      return Yr(c, i);
                    };
                  return !(c > 1) &&
                    !this.__actions__.length &&
                    E instanceof N &&
                    Jn(v)
                    ? ((E = E.slice(v, +v + (c ? 1 : 0))).__actions__.push({
                        func: nr,
                        args: [s],
                        thisArg: l,
                      }),
                      new Pn(E, this.__chain__).thru(function (i) {
                        return c && !i.length && i.push(l), i;
                      }))
                    : this.thru(s);
                }),
                ig = Ye(function (i, c, l) {
                  tE.call(i, l) ? ++i[l] : Kn(i, l, 1);
                }),
                i_ = mu(Fu),
                iy = mu(Mu);
              function Yu(i, c) {
                return (ij(i) ? mn : rM)(i, x(c, 3));
              }
              function Zu(i, c) {
                return (
                  ij(i)
                    ? function (i, c) {
                        for (
                          var l = null == i ? 0 : i.length;
                          l-- && !1 !== c(i[l], l, i);

                        );
                        return i;
                      }
                    : rk
                )(i, x(c, 3));
              }
              var iv = Ye(function (i, c, l) {
                  tE.call(i, l) ? i[l].push(c) : Kn(i, l, [c]);
                }),
                im = T(function (i, c, l) {
                  var v = -1,
                    E = "function" == typeof c,
                    C = an(i) ? ts(i.length) : [];
                  return (
                    rM(i, function (i) {
                      C[++v] = E ? cn(c, i, l) : ue(i, c, l);
                    }),
                    C
                  );
                }),
                ib = Ye(function (i, c, l) {
                  Kn(i, l, c);
                });
              function tr(i, c) {
                return (ij(i) ? G : Qs)(i, x(c, 3));
              }
              var iw = Ye(
                  function (i, c, l) {
                    i[l ? 0 : 1].push(c);
                  },
                  function () {
                    return [[], []];
                  }
                ),
                iE = T(function (i, c) {
                  if (null == i) return [];
                  var l = c.length;
                  return (
                    l > 1 && rn(i, c[0], c[1])
                      ? (c = [])
                      : l > 2 && rn(c[0], c[1], c[2]) && (c = [c[0]]),
                    nu(i, j(c, 1), [])
                  );
                }),
                iD =
                  t8 ||
                  function () {
                    return tJ.Date.now();
                  };
              function Ju(i, c, v) {
                return (
                  (c = v ? l : c),
                  (c = i && null == c ? i.length : c),
                  Yn(i, 128, l, l, l, l, c)
                );
              }
              function Xu(i, c) {
                var E;
                if ("function" != typeof c) throw new tg(v);
                return (
                  (i = R(i)),
                  function () {
                    return (
                      --i > 0 && (E = c.apply(this, arguments)),
                      i <= 1 && (c = l),
                      E
                    );
                  }
                );
              }
              var iS = T(function (i, c, l) {
                  var v = 1;
                  if (l.length) {
                    var E = tt(l, Ft(iS));
                    v |= 32;
                  }
                  return Yn(i, v, c, l, E);
                }),
                iI = T(function (i, c, l) {
                  var v = 3;
                  if (l.length) {
                    var E = tt(l, Ft(iI));
                    v |= 32;
                  }
                  return Yn(c, v, i, l, E);
                });
              function ju(i, c, E) {
                var C,
                  P,
                  M,
                  B,
                  W,
                  J,
                  X = 0,
                  Q = !1,
                  er = !1,
                  es = !0;
                if ("function" != typeof i) throw new tg(v);
                function A(c) {
                  var v = C,
                    E = P;
                  return (C = P = l), (X = c), (B = i.apply(E, v));
                }
                function y(i) {
                  var v = i - J,
                    E = i - X;
                  return J === l || v >= c || v < 0 || (er && E >= M);
                }
                function L() {
                  var i,
                    l,
                    v,
                    E = iD();
                  if (y(E)) return H(E);
                  W = rX(
                    L,
                    ((i = E - J),
                    (l = E - X),
                    (v = c - i),
                    er ? rg(v, M - l) : v)
                  );
                }
                function H(i) {
                  return (W = l), es && C ? A(i) : ((C = P = l), B);
                }
                function gn() {
                  var i,
                    v = iD(),
                    E = y(v);
                  if (((C = arguments), (P = this), (J = v), E)) {
                    if (W === l)
                      return (X = i = J), (W = rX(L, c)), Q ? A(i) : B;
                    if (er) return rB(W), (W = rX(L, c)), A(J);
                  }
                  return W === l && (W = rX(L, c)), B;
                }
                return (
                  (c = xn(c) || 0),
                  z(E) &&
                    ((Q = !!E.leading),
                    (M = (er = "maxWait" in E) ? rp(xn(E.maxWait) || 0, c) : M),
                    (es = "trailing" in E ? !!E.trailing : es)),
                  (gn.cancel = function () {
                    W !== l && rB(W), (X = 0), (C = J = P = W = l);
                  }),
                  (gn.flush = function () {
                    return W === l ? B : H(iD());
                  }),
                  gn
                );
              }
              var ix = T(function (i, c) {
                  return Bs(i, 1, c);
                }),
                iC = T(function (i, c, l) {
                  return Bs(i, xn(c) || 0, l);
                });
              function rr(i, c) {
                if (
                  "function" != typeof i ||
                  (null != c && "function" != typeof c)
                )
                  throw new tg(v);
                var e = function () {
                  var l = arguments,
                    v = c ? c.apply(this, l) : l[0],
                    E = e.cache;
                  if (E.has(v)) return E.get(v);
                  var C = i.apply(this, l);
                  return (e.cache = E.set(v, C) || E), C;
                };
                return (e.cache = new (rr.Cache || zn)()), e;
              }
              function ir(i) {
                if ("function" != typeof i) throw new tg(v);
                return function () {
                  var c = arguments;
                  switch (c.length) {
                    case 0:
                      return !i.call(this);
                    case 1:
                      return !i.call(this, c[0]);
                    case 2:
                      return !i.call(this, c[0], c[1]);
                    case 3:
                      return !i.call(this, c[0], c[1], c[2]);
                  }
                  return !i.apply(this, c);
                };
              }
              rr.Cache = zn;
              var iO = T(function (i, c) {
                  var l = (c =
                    1 == c.length && ij(c[0])
                      ? G(c[0], hn(x()))
                      : G(j(c, 1), hn(x()))).length;
                  return T(function (v) {
                    for (var E = -1, C = rg(v.length, l); ++E < C; )
                      v[E] = c[E].call(this, v[E]);
                    return cn(i, this, v);
                  });
                }),
                iP = T(function (i, c) {
                  var v = tt(c, Ft(iP));
                  return Yn(i, 32, l, c, v);
                }),
                iA = T(function (i, c) {
                  var v = tt(c, Ft(iA));
                  return Yn(i, 64, l, c, v);
                }),
                iR = Zn(function (i, c) {
                  return Yn(i, 256, l, l, l, c);
                });
              function bn(i, c) {
                return i === c || (i != i && c != c);
              }
              var iN = Qe(Xr),
                iT = Qe(function (i, c) {
                  return i >= c;
                }),
                iU = Zs(
                  (function () {
                    return arguments;
                  })()
                )
                  ? Zs
                  : function (i) {
                      return (
                        K(i) && tE.call(i, "callee") && !tB.call(i, "callee")
                      );
                    },
                ij = ts.isArray,
                iL = t0
                  ? hn(t0)
                  : function (i) {
                      return K(i) && en(i) == ev;
                    };
              function an(i) {
                return null != i && sr(i.length) && !Xn(i);
              }
              function Y(i) {
                return K(i) && an(i);
              }
              var iM = rl || Ni,
                ik = t1
                  ? hn(t1)
                  : function (i) {
                      return K(i) && en(i) == Q;
                    };
              function xi(i) {
                if (!K(i)) return !1;
                var c = en(i);
                return (
                  c == er ||
                  "[object DOMException]" == c ||
                  ("string" == typeof i.message &&
                    "string" == typeof i.name &&
                    !le(i))
                );
              }
              function Xn(i) {
                if (!z(i)) return !1;
                var c = en(i);
                return (
                  c == es ||
                  c == eo ||
                  "[object AsyncFunction]" == c ||
                  "[object Proxy]" == c
                );
              }
              function ta(i) {
                return "number" == typeof i && i == R(i);
              }
              function sr(i) {
                return (
                  "number" == typeof i &&
                  i > -1 &&
                  i % 1 == 0 &&
                  i <= 9007199254740991
                );
              }
              function z(i) {
                var c = typeof i;
                return null != i && ("object" == c || "function" == c);
              }
              function K(i) {
                return null != i && "object" == typeof i;
              }
              var iz = t5
                ? hn(t5)
                : function (i) {
                    return K(i) && rJ(i) == ea;
                  };
              function ra(i) {
                return "number" == typeof i || (K(i) && en(i) == ec);
              }
              function le(i) {
                if (!K(i) || en(i) != el) return !1;
                var c = tj(i);
                if (null === c) return !0;
                var l = tE.call(c, "constructor") && c.constructor;
                return (
                  "function" == typeof l && l instanceof l && tw.call(l) == tx
                );
              }
              var i$ = t3
                  ? hn(t3)
                  : function (i) {
                      return K(i) && en(i) == ed;
                    },
                iH = t6
                  ? hn(t6)
                  : function (i) {
                      return K(i) && rJ(i) == ep;
                    };
              function ur(i) {
                return "string" == typeof i || (!ij(i) && K(i) && en(i) == eg);
              }
              function pn(i) {
                return "symbol" == typeof i || (K(i) && en(i) == e_);
              }
              var iq = t2
                  ? hn(t2)
                  : function (i) {
                      return K(i) && sr(i.length) && !!tH[en(i)];
                    },
                iB = Qe(jr),
                iF = Qe(function (i, c) {
                  return i <= c;
                });
              function sa(i) {
                if (!i) return [];
                if (an(i)) return ur(i) ? On(i) : un(i);
                if (tG && i[tG])
                  return (function (i) {
                    for (var c, l = []; !(c = i.next()).done; ) l.push(c.value);
                    return l;
                  })(i[tG]());
                var c = rJ(i);
                return (c == ea ? Mr : c == ep ? Ee : qt)(i);
              }
              function Qn(i) {
                return i
                  ? (i = xn(i)) === P || i === -P
                    ? (i < 0 ? -1 : 1) * 17976931348623157e292
                    : i == i
                    ? i
                    : 0
                  : 0 === i
                  ? i
                  : 0;
              }
              function R(i) {
                var c = Qn(i),
                  l = c % 1;
                return c == c ? (l ? c - l : c) : 0;
              }
              function ua(i) {
                return i ? gt(R(i), 0, 4294967295) : 0;
              }
              function xn(i) {
                if ("number" == typeof i) return i;
                if (pn(i)) return M;
                if (z(i)) {
                  var c = "function" == typeof i.valueOf ? i.valueOf() : i;
                  i = z(c) ? c + "" : c;
                }
                if ("string" != typeof i) return 0 === i ? i : +i;
                i = Es(i);
                var l = e5.test(i);
                return l || e6.test(i)
                  ? tK(i.slice(2), l ? 2 : 8)
                  : e1.test(i)
                  ? M
                  : +i;
              }
              function aa(i) {
                return Un(i, on(i));
              }
              function U(i) {
                return null == i ? "" : ln(i);
              }
              var iK = Ut(function (i, c) {
                  if (ce(c) || an(c)) {
                    Un(c, V(c), i);
                    return;
                  }
                  for (var l in c) tE.call(c, l) && ie(i, l, c[l]);
                }),
                iV = Ut(function (i, c) {
                  Un(c, on(c), i);
                }),
                iW = Ut(function (i, c, l, v) {
                  Un(c, on(c), i, v);
                }),
                iJ = Ut(function (i, c, l, v) {
                  Un(c, V(c), i, v);
                }),
                iG = Zn(Yr),
                iY = T(function (i, c) {
                  i = tf(i);
                  var v = -1,
                    E = c.length,
                    C = E > 2 ? c[2] : l;
                  for (C && rn(c[0], c[1], C) && (E = 1); ++v < E; )
                    for (
                      var P = c[v], M = on(P), B = -1, W = M.length;
                      ++B < W;

                    ) {
                      var J = M[B],
                        X = i[J];
                      (X === l || (bn(X, tm[J]) && !tE.call(i, J))) &&
                        (i[J] = P[J]);
                    }
                  return i;
                }),
                iX = T(function (i) {
                  return i.push(l, Eu), cn(i5, l, i);
                });
              function yi(i, c, v) {
                var E = null == i ? l : vt(i, c);
                return E === l ? v : E;
              }
              function Si(i, c) {
                return null != i && Ou(i, c, Pc);
              }
              var iZ = Pu(function (i, c, l) {
                  null != c &&
                    "function" != typeof c.toString &&
                    (c = tI.call(c)),
                    (i[c] = l);
                }, Ri(fn)),
                iQ = Pu(function (i, c, l) {
                  null != c &&
                    "function" != typeof c.toString &&
                    (c = tI.call(c)),
                    tE.call(i, c) ? i[c].push(l) : (i[c] = [l]);
                }, x),
                i0 = T(ue);
              function V(i) {
                return an(i) ? Ws(i) : kr(i);
              }
              function on(i) {
                return an(i)
                  ? Ws(i, !0)
                  : (function (i) {
                      if (!z(i))
                        return (function (i) {
                          var c = [];
                          if (null != i) for (var l in tf(i)) c.push(l);
                          return c;
                        })(i);
                      var c = ce(i),
                        l = [];
                      for (var v in i)
                        ("constructor" == v && (c || !tE.call(i, v))) ||
                          l.push(v);
                      return l;
                    })(i);
              }
              var i1 = Ut(function (i, c, l) {
                  Ge(i, c, l);
                }),
                i5 = Ut(function (i, c, l, v) {
                  Ge(i, c, l, v);
                }),
                i3 = Zn(function (i, c) {
                  var l = {};
                  if (null == i) return l;
                  var v = !1;
                  (c = G(c, function (c) {
                    return (c = st(c, i)), v || (v = c.length > 1), c;
                  })),
                    Un(i, li(i), l),
                    v && (l = An(l, 7, Vc));
                  for (var E = c.length; E--; ) ii(l, c[E]);
                  return l;
                }),
                i6 = Zn(function (i, c) {
                  return null == i
                    ? {}
                    : tu(i, c, function (c, l) {
                        return Si(i, l);
                      });
                });
              function ca(i, c) {
                if (null == i) return {};
                var l = G(li(i), function (i) {
                  return [i];
                });
                return (
                  (c = x(c)),
                  tu(i, l, function (i, l) {
                    return c(i, l[0]);
                  })
                );
              }
              var i2 = Iu(V),
                i8 = Iu(on);
              function qt(i) {
                return null == i ? [] : Fr(i, V(i));
              }
              var i4 = Wt(function (i, c, l) {
                return (c = c.toLowerCase()), i + (l ? pa(c) : c);
              });
              function pa(i) {
                return nc(U(i).toLowerCase());
              }
              function da(i) {
                return (i = U(i)) && i.replace(e8, t4).replace(tU, "");
              }
              var i9 = Wt(function (i, c, l) {
                  return i + (l ? "-" : "") + c.toLowerCase();
                }),
                i7 = Wt(function (i, c, l) {
                  return i + (l ? " " : "") + c.toLowerCase();
                }),
                nn = _u("toLowerCase"),
                ns = Wt(function (i, c, l) {
                  return i + (l ? "_" : "") + c.toLowerCase();
                }),
                no = Wt(function (i, c, l) {
                  return i + (l ? " " : "") + nc(c);
                }),
                na = Wt(function (i, c, l) {
                  return i + (l ? " " : "") + c.toUpperCase();
                }),
                nc = _u("toUpperCase");
              function ga(i, c, v) {
                var E;
                return (
                  (i = U(i)),
                  (c = v ? l : c) === l
                    ? ((E = i), tk.test(E))
                      ? i.match(tL) || []
                      : i.match(eY) || []
                    : i.match(c) || []
                );
              }
              var nl = T(function (i, c) {
                  try {
                    return cn(i, l, c);
                  } catch (i) {
                    return xi(i) ? i : new tc(i);
                  }
                }),
                nh = Zn(function (i, c) {
                  return (
                    mn(c, function (c) {
                      Kn(i, (c = Wn(c)), iS(i[c], i));
                    }),
                    i
                  );
                });
              function Ri(i) {
                return function () {
                  return i;
                };
              }
              var nf = wu(),
                nd = wu(!0);
              function fn(i) {
                return i;
              }
              function bi(i) {
                return Xs("function" == typeof i ? i : An(i, 1));
              }
              var np = T(function (i, c) {
                  return function (l) {
                    return ue(l, i, c);
                  };
                }),
                ng = T(function (i, c) {
                  return function (l) {
                    return ue(i, l, c);
                  };
                });
              function Ti(i, c, l) {
                var v = V(c),
                  E = Be(c, v);
                null != l ||
                  (z(c) && (E.length || !v.length)) ||
                  ((l = c), (c = i), (i = this), (E = Be(c, V(c))));
                var C = !(z(l) && "chain" in l) || !!l.chain,
                  P = Xn(i);
                return (
                  mn(E, function (l) {
                    var v = c[l];
                    (i[l] = v),
                      P &&
                        (i.prototype[l] = function () {
                          var c = this.__chain__;
                          if (C || c) {
                            var l = i(this.__wrapped__);
                            return (
                              (l.__actions__ = un(this.__actions__)).push({
                                func: v,
                                args: arguments,
                                thisArg: i,
                              }),
                              (l.__chain__ = c),
                              l
                            );
                          }
                          return v.apply(i, nt([this.value()], arguments));
                        });
                  }),
                  i
                );
              }
              function Li() {}
              var n_ = fi(G),
                ny = fi(Ps),
                nm = fi(Nr);
              function _a(i) {
                return vi(i)
                  ? Hr(Wn(i))
                  : function (c) {
                      return vt(c, i);
                    };
              }
              var nb = Au(),
                nw = Au(!0);
              function Di() {
                return [];
              }
              function Ni() {
                return !1;
              }
              var nE = Je(function (i, c) {
                  return i + c;
                }, 0),
                nD = ci("ceil"),
                nS = Je(function (i, c) {
                  return i / c;
                }, 1),
                nI = ci("floor"),
                nx = Je(function (i, c) {
                  return i * c;
                }, 1),
                nC = ci("round"),
                nO = Je(function (i, c) {
                  return i - c;
                }, 0);
              return (
                (a.after = function (i, c) {
                  if ("function" != typeof c) throw new tg(v);
                  return (
                    (i = R(i)),
                    function () {
                      if (--i < 1) return c.apply(this, arguments);
                    }
                  );
                }),
                (a.ary = Ju),
                (a.assign = iK),
                (a.assignIn = iV),
                (a.assignInWith = iW),
                (a.assignWith = iJ),
                (a.at = iG),
                (a.before = Xu),
                (a.bind = iS),
                (a.bindAll = nh),
                (a.bindKey = iI),
                (a.castArray = function () {
                  if (!arguments.length) return [];
                  var i = arguments[0];
                  return ij(i) ? i : [i];
                }),
                (a.chain = Ku),
                (a.chunk = function (i, c, v) {
                  c = (v ? rn(i, c, v) : c === l) ? 1 : rp(R(c), 0);
                  var E = null == i ? 0 : i.length;
                  if (!E || c < 1) return [];
                  for (var C = 0, P = 0, M = ts(ro(E / c)); C < E; )
                    M[P++] = Cn(i, C, (C += c));
                  return M;
                }),
                (a.compact = function (i) {
                  for (
                    var c = -1, l = null == i ? 0 : i.length, v = 0, E = [];
                    ++c < l;

                  ) {
                    var C = i[c];
                    C && (E[v++] = C);
                  }
                  return E;
                }),
                (a.concat = function () {
                  var i = arguments.length;
                  if (!i) return [];
                  for (var c = ts(i - 1), l = arguments[0], v = i; v--; )
                    c[v - 1] = arguments[v];
                  return nt(ij(l) ? un(l) : [l], j(c, 1));
                }),
                (a.cond = function (i) {
                  var c = null == i ? 0 : i.length,
                    l = x();
                  return (
                    (i = c
                      ? G(i, function (i) {
                          if ("function" != typeof i[1]) throw new tg(v);
                          return [l(i[0]), i[1]];
                        })
                      : []),
                    T(function (l) {
                      for (var v = -1; ++v < c; ) {
                        var E = i[v];
                        if (cn(E[0], this, l)) return cn(E[1], this, l);
                      }
                    })
                  );
                }),
                (a.conforms = function (i) {
                  var c, l;
                  return (
                    (l = V((c = An(i, 1)))),
                    function (i) {
                      return qs(i, c, l);
                    }
                  );
                }),
                (a.constant = Ri),
                (a.countBy = ig),
                (a.create = function (i, c) {
                  var l = rL(i);
                  return null == c ? l : Ms(l, c);
                }),
                (a.curry = function Vu(i, c, v) {
                  c = v ? l : c;
                  var E = Yn(i, 8, l, l, l, l, l, c);
                  return (E.placeholder = Vu.placeholder), E;
                }),
                (a.curryRight = function ku(i, c, v) {
                  c = v ? l : c;
                  var E = Yn(i, 16, l, l, l, l, l, c);
                  return (E.placeholder = ku.placeholder), E;
                }),
                (a.debounce = ju),
                (a.defaults = iY),
                (a.defaultsDeep = iX),
                (a.defer = ix),
                (a.delay = iC),
                (a.difference = r0),
                (a.differenceBy = r1),
                (a.differenceWith = r5),
                (a.drop = function (i, c, v) {
                  var E = null == i ? 0 : i.length;
                  return E
                    ? Cn(i, (c = v || c === l ? 1 : R(c)) < 0 ? 0 : c, E)
                    : [];
                }),
                (a.dropRight = function (i, c, v) {
                  var E = null == i ? 0 : i.length;
                  return E
                    ? Cn(
                        i,
                        0,
                        (c = E - (c = v || c === l ? 1 : R(c))) < 0 ? 0 : c
                      )
                    : [];
                }),
                (a.dropRightWhile = function (i, c) {
                  return i && i.length ? Ke(i, x(c, 3), !0, !0) : [];
                }),
                (a.dropWhile = function (i, c) {
                  return i && i.length ? Ke(i, x(c, 3), !0) : [];
                }),
                (a.fill = function (i, c, v, E) {
                  var C = null == i ? 0 : i.length;
                  return C
                    ? (v &&
                        "number" != typeof v &&
                        rn(i, c, v) &&
                        ((v = 0), (E = C)),
                      (function (i, c, v, E) {
                        var C = i.length;
                        for (
                          (v = R(v)) < 0 && (v = -v > C ? 0 : C + v),
                            (E = E === l || E > C ? C : R(E)) < 0 && (E += C),
                            E = v > E ? 0 : ua(E);
                          v < E;

                        )
                          i[v++] = c;
                        return i;
                      })(i, c, v, E))
                    : [];
                }),
                (a.filter = function (i, c) {
                  return (ij(i) ? jn : zs)(i, x(c, 3));
                }),
                (a.flatMap = function (i, c) {
                  return j(tr(i, c), 1);
                }),
                (a.flatMapDeep = function (i, c) {
                  return j(tr(i, c), P);
                }),
                (a.flatMapDepth = function (i, c, v) {
                  return (v = v === l ? 1 : R(v)), j(tr(i, c), v);
                }),
                (a.flatten = qu),
                (a.flattenDeep = function (i) {
                  return (null == i ? 0 : i.length) ? j(i, P) : [];
                }),
                (a.flattenDepth = function (i, c) {
                  return (null == i ? 0 : i.length)
                    ? j(i, (c = c === l ? 1 : R(c)))
                    : [];
                }),
                (a.flip = function (i) {
                  return Yn(i, 512);
                }),
                (a.flow = nf),
                (a.flowRight = nd),
                (a.fromPairs = function (i) {
                  for (
                    var c = -1, l = null == i ? 0 : i.length, v = {};
                    ++c < l;

                  ) {
                    var E = i[c];
                    v[E[0]] = E[1];
                  }
                  return v;
                }),
                (a.functions = function (i) {
                  return null == i ? [] : Be(i, V(i));
                }),
                (a.functionsIn = function (i) {
                  return null == i ? [] : Be(i, on(i));
                }),
                (a.groupBy = iv),
                (a.initial = function (i) {
                  return (null == i ? 0 : i.length) ? Cn(i, 0, -1) : [];
                }),
                (a.intersection = r3),
                (a.intersectionBy = r6),
                (a.intersectionWith = r2),
                (a.invert = iZ),
                (a.invertBy = iQ),
                (a.invokeMap = im),
                (a.iteratee = bi),
                (a.keyBy = ib),
                (a.keys = V),
                (a.keysIn = on),
                (a.map = tr),
                (a.mapKeys = function (i, c) {
                  var l = {};
                  return (
                    (c = x(c, 3)),
                    $n(i, function (i, v, E) {
                      Kn(l, c(i, v, E), i);
                    }),
                    l
                  );
                }),
                (a.mapValues = function (i, c) {
                  var l = {};
                  return (
                    (c = x(c, 3)),
                    $n(i, function (i, v, E) {
                      Kn(l, v, c(i, v, E));
                    }),
                    l
                  );
                }),
                (a.matches = function (i) {
                  return Vs(An(i, 1));
                }),
                (a.matchesProperty = function (i, c) {
                  return ks(i, An(c, 1));
                }),
                (a.memoize = rr),
                (a.merge = i1),
                (a.mergeWith = i5),
                (a.method = np),
                (a.methodOf = ng),
                (a.mixin = Ti),
                (a.negate = ir),
                (a.nthArg = function (i) {
                  return (
                    (i = R(i)),
                    T(function (c) {
                      return js(c, i);
                    })
                  );
                }),
                (a.omit = i3),
                (a.omitBy = function (i, c) {
                  return ca(i, ir(x(c)));
                }),
                (a.once = function (i) {
                  return Xu(2, i);
                }),
                (a.orderBy = function (i, c, v, E) {
                  return null == i
                    ? []
                    : (ij(c) || (c = null == c ? [] : [c]),
                      ij((v = E ? l : v)) || (v = null == v ? [] : [v]),
                      nu(i, c, v));
                }),
                (a.over = n_),
                (a.overArgs = iO),
                (a.overEvery = ny),
                (a.overSome = nm),
                (a.partial = iP),
                (a.partialRight = iA),
                (a.partition = iw),
                (a.pick = i6),
                (a.pickBy = ca),
                (a.property = _a),
                (a.propertyOf = function (i) {
                  return function (c) {
                    return null == i ? l : vt(i, c);
                  };
                }),
                (a.pull = r8),
                (a.pullAll = Gu),
                (a.pullAllBy = function (i, c, l) {
                  return i && i.length && c && c.length ? ni(i, c, x(l, 2)) : i;
                }),
                (a.pullAllWith = function (i, c, v) {
                  return i && i.length && c && c.length ? ni(i, c, l, v) : i;
                }),
                (a.pullAt = r4),
                (a.range = nb),
                (a.rangeRight = nw),
                (a.rearg = iR),
                (a.reject = function (i, c) {
                  return (ij(i) ? jn : zs)(i, ir(x(c, 3)));
                }),
                (a.remove = function (i, c) {
                  var l = [];
                  if (!(i && i.length)) return l;
                  var v = -1,
                    E = [],
                    C = i.length;
                  for (c = x(c, 3); ++v < C; ) {
                    var P = i[v];
                    c(P, v, i) && (l.push(P), E.push(v));
                  }
                  return eu(i, E), l;
                }),
                (a.rest = function (i, c) {
                  if ("function" != typeof i) throw new tg(v);
                  return T(i, (c = c === l ? c : R(c)));
                }),
                (a.reverse = Pi),
                (a.sampleSize = function (i, c, v) {
                  return (
                    (c = (v ? rn(i, c, v) : c === l) ? 1 : R(c)),
                    (ij(i)
                      ? function (i, c) {
                          return je(un(i), gt(c, 0, i.length));
                        }
                      : function (i, c) {
                          var l = qt(i);
                          return je(l, gt(c, 0, l.length));
                        })(i, c)
                  );
                }),
                (a.set = function (i, c, l) {
                  return null == i ? i : oe(i, c, l);
                }),
                (a.setWith = function (i, c, v, E) {
                  return (
                    (E = "function" == typeof E ? E : l),
                    null == i ? i : oe(i, c, v, E)
                  );
                }),
                (a.shuffle = function (i) {
                  return (
                    ij(i)
                      ? function (i) {
                          return je(un(i));
                        }
                      : function (i) {
                          return je(qt(i));
                        }
                  )(i);
                }),
                (a.slice = function (i, c, v) {
                  var E = null == i ? 0 : i.length;
                  return E
                    ? (v && "number" != typeof v && rn(i, c, v)
                        ? ((c = 0), (v = E))
                        : ((c = null == c ? 0 : R(c)),
                          (v = v === l ? E : R(v))),
                      Cn(i, c, v))
                    : [];
                }),
                (a.sortBy = iE),
                (a.sortedUniq = function (i) {
                  return i && i.length ? iu(i) : [];
                }),
                (a.sortedUniqBy = function (i, c) {
                  return i && i.length ? iu(i, x(c, 2)) : [];
                }),
                (a.split = function (i, c, v) {
                  return (
                    v && "number" != typeof v && rn(i, c, v) && (c = v = l),
                    (v = v === l ? 4294967295 : v >>> 0)
                      ? (i = U(i)) &&
                        ("string" == typeof c || (null != c && !i$(c))) &&
                        !(c = ln(c)) &&
                        bt(i)
                        ? ut(On(i), 0, v)
                        : i.split(c, v)
                      : []
                  );
                }),
                (a.spread = function (i, c) {
                  if ("function" != typeof i) throw new tg(v);
                  return (
                    (c = null == c ? 0 : rp(R(c), 0)),
                    T(function (l) {
                      var v = l[c],
                        E = ut(l, 0, c);
                      return v && nt(E, v), cn(i, this, E);
                    })
                  );
                }),
                (a.tail = function (i) {
                  var c = null == i ? 0 : i.length;
                  return c ? Cn(i, 1, c) : [];
                }),
                (a.take = function (i, c, v) {
                  return i && i.length
                    ? Cn(i, 0, (c = v || c === l ? 1 : R(c)) < 0 ? 0 : c)
                    : [];
                }),
                (a.takeRight = function (i, c, v) {
                  var E = null == i ? 0 : i.length;
                  return E
                    ? Cn(
                        i,
                        (c = E - (c = v || c === l ? 1 : R(c))) < 0 ? 0 : c,
                        E
                      )
                    : [];
                }),
                (a.takeRightWhile = function (i, c) {
                  return i && i.length ? Ke(i, x(c, 3), !1, !0) : [];
                }),
                (a.takeWhile = function (i, c) {
                  return i && i.length ? Ke(i, x(c, 3)) : [];
                }),
                (a.tap = function (i, c) {
                  return c(i), i;
                }),
                (a.throttle = function (i, c, l) {
                  var E = !0,
                    C = !0;
                  if ("function" != typeof i) throw new tg(v);
                  return (
                    z(l) &&
                      ((E = "leading" in l ? !!l.leading : E),
                      (C = "trailing" in l ? !!l.trailing : C)),
                    ju(i, c, { leading: E, maxWait: c, trailing: C })
                  );
                }),
                (a.thru = nr),
                (a.toArray = sa),
                (a.toPairs = i2),
                (a.toPairsIn = i8),
                (a.toPath = function (i) {
                  return ij(i) ? G(i, Wn) : pn(i) ? [i] : un(rQ(U(i)));
                }),
                (a.toPlainObject = aa),
                (a.transform = function (i, c, l) {
                  var v = ij(i),
                    E = v || iM(i) || iq(i);
                  if (((c = x(c, 4)), null == l)) {
                    var C = i && i.constructor;
                    l = E ? (v ? new C() : []) : z(i) && Xn(C) ? rL(tj(i)) : {};
                  }
                  return (
                    (E ? mn : $n)(i, function (i, v, E) {
                      return c(l, i, v, E);
                    }),
                    l
                  );
                }),
                (a.unary = function (i) {
                  return Ju(i, 1);
                }),
                (a.union = r9),
                (a.unionBy = r7),
                (a.unionWith = is),
                (a.uniq = function (i) {
                  return i && i.length ? it(i) : [];
                }),
                (a.uniqBy = function (i, c) {
                  return i && i.length ? it(i, x(c, 2)) : [];
                }),
                (a.uniqWith = function (i, c) {
                  return (
                    (c = "function" == typeof c ? c : l),
                    i && i.length ? it(i, l, c) : []
                  );
                }),
                (a.unset = function (i, c) {
                  return null == i || ii(i, c);
                }),
                (a.unzip = Ai),
                (a.unzipWith = zu),
                (a.update = function (i, c, l) {
                  return null == i ? i : uu(i, c, ai(l));
                }),
                (a.updateWith = function (i, c, v, E) {
                  return (
                    (E = "function" == typeof E ? E : l),
                    null == i ? i : uu(i, c, ai(v), E)
                  );
                }),
                (a.values = qt),
                (a.valuesIn = function (i) {
                  return null == i ? [] : Fr(i, on(i));
                }),
                (a.without = io),
                (a.words = ga),
                (a.wrap = function (i, c) {
                  return iP(ai(c), i);
                }),
                (a.xor = ia),
                (a.xorBy = ic),
                (a.xorWith = il),
                (a.zip = ih),
                (a.zipObject = function (i, c) {
                  return ou(i || [], c || [], ie);
                }),
                (a.zipObjectDeep = function (i, c) {
                  return ou(i || [], c || [], oe);
                }),
                (a.zipWith = id),
                (a.entries = i2),
                (a.entriesIn = i8),
                (a.extend = iV),
                (a.extendWith = iW),
                Ti(a, a),
                (a.add = nE),
                (a.attempt = nl),
                (a.camelCase = i4),
                (a.capitalize = pa),
                (a.ceil = nD),
                (a.clamp = function (i, c, v) {
                  return (
                    v === l && ((v = c), (c = l)),
                    v !== l && (v = (v = xn(v)) == v ? v : 0),
                    c !== l && (c = (c = xn(c)) == c ? c : 0),
                    gt(xn(i), c, v)
                  );
                }),
                (a.clone = function (i) {
                  return An(i, 4);
                }),
                (a.cloneDeep = function (i) {
                  return An(i, 5);
                }),
                (a.cloneDeepWith = function (i, c) {
                  return An(i, 5, (c = "function" == typeof c ? c : l));
                }),
                (a.cloneWith = function (i, c) {
                  return An(i, 4, (c = "function" == typeof c ? c : l));
                }),
                (a.conformsTo = function (i, c) {
                  return null == c || qs(i, c, V(c));
                }),
                (a.deburr = da),
                (a.defaultTo = function (i, c) {
                  return null == i || i != i ? c : i;
                }),
                (a.divide = nS),
                (a.endsWith = function (i, c, v) {
                  (i = U(i)), (c = ln(c));
                  var E = i.length,
                    C = (v = v === l ? E : gt(R(v), 0, E));
                  return (v -= c.length) >= 0 && i.slice(v, C) == c;
                }),
                (a.eq = bn),
                (a.escape = function (i) {
                  return (i = U(i)) && ej.test(i) ? i.replace(eT, t9) : i;
                }),
                (a.escapeRegExp = function (i) {
                  return (i = U(i)) && eF.test(i) ? i.replace(eB, "\\$&") : i;
                }),
                (a.every = function (i, c, v) {
                  var E = ij(i) ? Ps : _c;
                  return v && rn(i, c, v) && (c = l), E(i, x(c, 3));
                }),
                (a.find = i_),
                (a.findIndex = Fu),
                (a.findKey = function (i, c) {
                  return As(i, x(c, 3), $n);
                }),
                (a.findLast = iy),
                (a.findLastIndex = Mu),
                (a.findLastKey = function (i, c) {
                  return As(i, x(c, 3), Jr);
                }),
                (a.floor = nI),
                (a.forEach = Yu),
                (a.forEachRight = Zu),
                (a.forIn = function (i, c) {
                  return null == i ? i : rz(i, x(c, 3), on);
                }),
                (a.forInRight = function (i, c) {
                  return null == i ? i : r$(i, x(c, 3), on);
                }),
                (a.forOwn = function (i, c) {
                  return i && $n(i, x(c, 3));
                }),
                (a.forOwnRight = function (i, c) {
                  return i && Jr(i, x(c, 3));
                }),
                (a.get = yi),
                (a.gt = iN),
                (a.gte = iT),
                (a.has = function (i, c) {
                  return null != i && Ou(i, c, wc);
                }),
                (a.hasIn = Si),
                (a.head = Bu),
                (a.identity = fn),
                (a.includes = function (i, c, l, v) {
                  (i = an(i) ? i : qt(i)), (l = l && !v ? R(l) : 0);
                  var E = i.length;
                  return (
                    l < 0 && (l = rp(E + l, 0)),
                    ur(i)
                      ? l <= E && i.indexOf(c, l) > -1
                      : !!E && Rt(i, c, l) > -1
                  );
                }),
                (a.indexOf = function (i, c, l) {
                  var v = null == i ? 0 : i.length;
                  if (!v) return -1;
                  var E = null == l ? 0 : R(l);
                  return E < 0 && (E = rp(v + E, 0)), Rt(i, c, E);
                }),
                (a.inRange = function (i, c, v) {
                  var E, C, P;
                  return (
                    (c = Qn(c)),
                    v === l ? ((v = c), (c = 0)) : (v = Qn(v)),
                    (E = i = xn(i)) >= rg((C = c), (P = v)) && E < rp(C, P)
                  );
                }),
                (a.invoke = i0),
                (a.isArguments = iU),
                (a.isArray = ij),
                (a.isArrayBuffer = iL),
                (a.isArrayLike = an),
                (a.isArrayLikeObject = Y),
                (a.isBoolean = function (i) {
                  return !0 === i || !1 === i || (K(i) && en(i) == X);
                }),
                (a.isBuffer = iM),
                (a.isDate = ik),
                (a.isElement = function (i) {
                  return K(i) && 1 === i.nodeType && !le(i);
                }),
                (a.isEmpty = function (i) {
                  if (null == i) return !0;
                  if (
                    an(i) &&
                    (ij(i) ||
                      "string" == typeof i ||
                      "function" == typeof i.splice ||
                      iM(i) ||
                      iq(i) ||
                      iU(i))
                  )
                    return !i.length;
                  var c = rJ(i);
                  if (c == ea || c == ep) return !i.size;
                  if (ce(i)) return !kr(i).length;
                  for (var l in i) if (tE.call(i, l)) return !1;
                  return !0;
                }),
                (a.isEqual = function (i, c) {
                  return ae(i, c);
                }),
                (a.isEqualWith = function (i, c, v) {
                  var E = (v = "function" == typeof v ? v : l) ? v(i, c) : l;
                  return E === l ? ae(i, c, l, v) : !!E;
                }),
                (a.isError = xi),
                (a.isFinite = function (i) {
                  return "number" == typeof i && rh(i);
                }),
                (a.isFunction = Xn),
                (a.isInteger = ta),
                (a.isLength = sr),
                (a.isMap = iz),
                (a.isMatch = function (i, c) {
                  return i === c || Vr(i, c, di(c));
                }),
                (a.isMatchWith = function (i, c, v) {
                  return (
                    (v = "function" == typeof v ? v : l), Vr(i, c, di(c), v)
                  );
                }),
                (a.isNaN = function (i) {
                  return ra(i) && i != +i;
                }),
                (a.isNative = function (i) {
                  if (rG(i))
                    throw new tc(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                    );
                  return Js(i);
                }),
                (a.isNil = function (i) {
                  return null == i;
                }),
                (a.isNull = function (i) {
                  return null === i;
                }),
                (a.isNumber = ra),
                (a.isObject = z),
                (a.isObjectLike = K),
                (a.isPlainObject = le),
                (a.isRegExp = i$),
                (a.isSafeInteger = function (i) {
                  return (
                    ta(i) && i >= -9007199254740991 && i <= 9007199254740991
                  );
                }),
                (a.isSet = iH),
                (a.isString = ur),
                (a.isSymbol = pn),
                (a.isTypedArray = iq),
                (a.isUndefined = function (i) {
                  return i === l;
                }),
                (a.isWeakMap = function (i) {
                  return K(i) && rJ(i) == ey;
                }),
                (a.isWeakSet = function (i) {
                  return K(i) && "[object WeakSet]" == en(i);
                }),
                (a.join = function (i, c) {
                  return null == i ? "" : rf.call(i, c);
                }),
                (a.kebabCase = i9),
                (a.last = In),
                (a.lastIndexOf = function (i, c, v) {
                  var E = null == i ? 0 : i.length;
                  if (!E) return -1;
                  var C = E;
                  return (
                    v !== l &&
                      (C = (C = R(v)) < 0 ? rp(E + C, 0) : rg(C, E - 1)),
                    c == c
                      ? (function (i, c, l) {
                          for (var v = l + 1; v-- && i[v] !== c; );
                          return v;
                        })(i, c, C)
                      : xe(i, Cs, C, !0)
                  );
                }),
                (a.lowerCase = i7),
                (a.lowerFirst = nn),
                (a.lt = iB),
                (a.lte = iF),
                (a.max = function (i) {
                  return i && i.length ? qe(i, fn, Xr) : l;
                }),
                (a.maxBy = function (i, c) {
                  return i && i.length ? qe(i, x(c, 2), Xr) : l;
                }),
                (a.mean = function (i) {
                  return Is(i, fn);
                }),
                (a.meanBy = function (i, c) {
                  return Is(i, x(c, 2));
                }),
                (a.min = function (i) {
                  return i && i.length ? qe(i, fn, jr) : l;
                }),
                (a.minBy = function (i, c) {
                  return i && i.length ? qe(i, x(c, 2), jr) : l;
                }),
                (a.stubArray = Di),
                (a.stubFalse = Ni),
                (a.stubObject = function () {
                  return {};
                }),
                (a.stubString = function () {
                  return "";
                }),
                (a.stubTrue = function () {
                  return !0;
                }),
                (a.multiply = nx),
                (a.nth = function (i, c) {
                  return i && i.length ? js(i, R(c)) : l;
                }),
                (a.noConflict = function () {
                  return tJ._ === this && (tJ._ = tC), this;
                }),
                (a.noop = Li),
                (a.now = iD),
                (a.pad = function (i, c, l) {
                  i = U(i);
                  var v = (c = R(c)) ? Tt(i) : 0;
                  if (!c || v >= c) return i;
                  var E = (c - v) / 2;
                  return Xe(rc(E), l) + i + Xe(ro(E), l);
                }),
                (a.padEnd = function (i, c, l) {
                  i = U(i);
                  var v = (c = R(c)) ? Tt(i) : 0;
                  return c && v < c ? i + Xe(c - v, l) : i;
                }),
                (a.padStart = function (i, c, l) {
                  i = U(i);
                  var v = (c = R(c)) ? Tt(i) : 0;
                  return c && v < c ? Xe(c - v, l) + i : i;
                }),
                (a.parseInt = function (i, c, l) {
                  return (
                    l || null == c ? (c = 0) : c && (c = +c),
                    ry(U(i).replace(eK, ""), c || 0)
                  );
                }),
                (a.random = function (i, c, v) {
                  if (
                    (v && "boolean" != typeof v && rn(i, c, v) && (c = v = l),
                    v === l &&
                      ("boolean" == typeof c
                        ? ((v = c), (c = l))
                        : "boolean" == typeof i && ((v = i), (i = l))),
                    i === l && c === l
                      ? ((i = 0), (c = 1))
                      : ((i = Qn(i)),
                        c === l ? ((c = i), (i = 0)) : (c = Qn(c))),
                    i > c)
                  ) {
                    var E = i;
                    (i = c), (c = E);
                  }
                  if (v || i % 1 || c % 1) {
                    var C = rv();
                    return rg(
                      i + C * (c - i + tF("1e-" + ((C + "").length - 1))),
                      c
                    );
                  }
                  return ti(i, c);
                }),
                (a.reduce = function (i, c, l) {
                  var v = ij(i) ? Dr : xs,
                    E = arguments.length < 3;
                  return v(i, x(c, 4), l, E, rM);
                }),
                (a.reduceRight = function (i, c, l) {
                  var v = ij(i) ? ko : xs,
                    E = arguments.length < 3;
                  return v(i, x(c, 4), l, E, rk);
                }),
                (a.repeat = function (i, c, v) {
                  return (
                    (c = (v ? rn(i, c, v) : c === l) ? 1 : R(c)), ei(U(i), c)
                  );
                }),
                (a.replace = function () {
                  var i = arguments,
                    c = U(i[0]);
                  return i.length < 3 ? c : c.replace(i[1], i[2]);
                }),
                (a.result = function (i, c, v) {
                  c = st(c, i);
                  var E = -1,
                    C = c.length;
                  for (C || ((C = 1), (i = l)); ++E < C; ) {
                    var P = null == i ? l : i[Wn(c[E])];
                    P === l && ((E = C), (P = v)), (i = Xn(P) ? P.call(i) : P);
                  }
                  return i;
                }),
                (a.round = nC),
                (a.runInContext = h),
                (a.sample = function (i) {
                  return (
                    ij(i)
                      ? Fs
                      : function (i) {
                          return Fs(qt(i));
                        }
                  )(i);
                }),
                (a.size = function (i) {
                  if (null == i) return 0;
                  if (an(i)) return ur(i) ? Tt(i) : i.length;
                  var c = rJ(i);
                  return c == ea || c == ep ? i.size : kr(i).length;
                }),
                (a.snakeCase = ns),
                (a.some = function (i, c, v) {
                  var E = ij(i) ? Nr : Fc;
                  return v && rn(i, c, v) && (c = l), E(i, x(c, 3));
                }),
                (a.sortedIndex = function (i, c) {
                  return ze(i, c);
                }),
                (a.sortedIndexBy = function (i, c, l) {
                  return ri(i, c, x(l, 2));
                }),
                (a.sortedIndexOf = function (i, c) {
                  var l = null == i ? 0 : i.length;
                  if (l) {
                    var v = ze(i, c);
                    if (v < l && bn(i[v], c)) return v;
                  }
                  return -1;
                }),
                (a.sortedLastIndex = function (i, c) {
                  return ze(i, c, !0);
                }),
                (a.sortedLastIndexBy = function (i, c, l) {
                  return ri(i, c, x(l, 2), !0);
                }),
                (a.sortedLastIndexOf = function (i, c) {
                  if (null == i ? 0 : i.length) {
                    var l = ze(i, c, !0) - 1;
                    if (bn(i[l], c)) return l;
                  }
                  return -1;
                }),
                (a.startCase = no),
                (a.startsWith = function (i, c, l) {
                  return (
                    (i = U(i)),
                    (l = null == l ? 0 : gt(R(l), 0, i.length)),
                    (c = ln(c)),
                    i.slice(l, l + c.length) == c
                  );
                }),
                (a.subtract = nO),
                (a.sum = function (i) {
                  return i && i.length ? Ur(i, fn) : 0;
                }),
                (a.sumBy = function (i, c) {
                  return i && i.length ? Ur(i, x(c, 2)) : 0;
                }),
                (a.template = function (i, c, v) {
                  var E = a.templateSettings;
                  v && rn(i, c, v) && (c = l),
                    (i = U(i)),
                    (c = iW({}, c, E, xu));
                  var C,
                    P,
                    M = iW({}, c.imports, E.imports, xu),
                    B = V(M),
                    W = Fr(M, B),
                    J = 0,
                    X = c.interpolate || e4,
                    Q = "__p += '",
                    er = td(
                      (c.escape || e4).source +
                        "|" +
                        X.source +
                        "|" +
                        (X === ek ? eQ : e4).source +
                        "|" +
                        (c.evaluate || e4).source +
                        "|$",
                      "g"
                    ),
                    es =
                      "//# sourceURL=" +
                      (tE.call(c, "sourceURL")
                        ? (c.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++t$ + "]") +
                      `
`;
                  i.replace(er, function (c, l, v, E, M, B) {
                    return (
                      v || (v = E),
                      (Q += i.slice(J, B).replace(e9, ff)),
                      l &&
                        ((C = !0),
                        (Q +=
                          `' +
__e(` +
                          l +
                          `) +
'`)),
                      M &&
                        ((P = !0),
                        (Q +=
                          `';
` +
                          M +
                          `;
__p += '`)),
                      v &&
                        (Q +=
                          `' +
((__t = (` +
                          v +
                          `)) == null ? '' : __t) +
'`),
                      (J = B + c.length),
                      c
                    );
                  }),
                    (Q += `';
`);
                  var eo = tE.call(c, "variable") && c.variable;
                  if (eo) {
                    if (eX.test(eo))
                      throw new tc(
                        "Invalid `variable` option passed into `_.template`"
                      );
                  } else
                    Q =
                      `with (obj) {
` +
                      Q +
                      `
}
`;
                  (Q = (P ? Q.replace(eP, "") : Q)
                    .replace(eA, "$1")
                    .replace(eR, "$1;")),
                    (Q =
                      "function(" +
                      (eo || "obj") +
                      `) {
` +
                      (eo
                        ? ""
                        : `obj || (obj = {});
`) +
                      "var __t, __p = ''" +
                      (C ? ", __e = _.escape" : "") +
                      (P
                        ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                        : `;
`) +
                      Q +
                      `return __p
}`);
                  var ea = nl(function () {
                    return tl(B, es + "return " + Q).apply(l, W);
                  });
                  if (((ea.source = Q), xi(ea))) throw ea;
                  return ea;
                }),
                (a.times = function (i, c) {
                  if ((i = R(i)) < 1 || i > 9007199254740991) return [];
                  var l = 4294967295,
                    v = rg(i, 4294967295);
                  (c = x(c)), (i -= 4294967295);
                  for (var E = Wr(v, c); ++l < i; ) c(l);
                  return E;
                }),
                (a.toFinite = Qn),
                (a.toInteger = R),
                (a.toLength = ua),
                (a.toLower = function (i) {
                  return U(i).toLowerCase();
                }),
                (a.toNumber = xn),
                (a.toSafeInteger = function (i) {
                  return i
                    ? gt(R(i), -9007199254740991, 9007199254740991)
                    : 0 === i
                    ? i
                    : 0;
                }),
                (a.toString = U),
                (a.toUpper = function (i) {
                  return U(i).toUpperCase();
                }),
                (a.trim = function (i, c, v) {
                  if ((i = U(i)) && (v || c === l)) return Es(i);
                  if (!i || !(c = ln(c))) return i;
                  var E = On(i),
                    C = On(c),
                    P = ys(E, C),
                    M = Ss(E, C) + 1;
                  return ut(E, P, M).join("");
                }),
                (a.trimEnd = function (i, c, v) {
                  if ((i = U(i)) && (v || c === l))
                    return i.slice(0, Rs(i) + 1);
                  if (!i || !(c = ln(c))) return i;
                  var E = On(i),
                    C = Ss(E, On(c)) + 1;
                  return ut(E, 0, C).join("");
                }),
                (a.trimStart = function (i, c, v) {
                  if ((i = U(i)) && (v || c === l)) return i.replace(eK, "");
                  if (!i || !(c = ln(c))) return i;
                  var E = On(i),
                    C = ys(E, On(c));
                  return ut(E, C).join("");
                }),
                (a.truncate = function (i, c) {
                  var v = 30,
                    E = "...";
                  if (z(c)) {
                    var C = "separator" in c ? c.separator : C;
                    (v = "length" in c ? R(c.length) : v),
                      (E = "omission" in c ? ln(c.omission) : E);
                  }
                  var P = (i = U(i)).length;
                  if (bt(i)) {
                    var M = On(i);
                    P = M.length;
                  }
                  if (v >= P) return i;
                  var B = v - Tt(E);
                  if (B < 1) return E;
                  var W = M ? ut(M, 0, B).join("") : i.slice(0, B);
                  if (C === l) return W + E;
                  if ((M && (B += W.length - B), i$(C))) {
                    if (i.slice(B).search(C)) {
                      var J,
                        X = W;
                      for (
                        C.global || (C = td(C.source, U(e0.exec(C)) + "g")),
                          C.lastIndex = 0;
                        (J = C.exec(X));

                      )
                        var Q = J.index;
                      W = W.slice(0, Q === l ? B : Q);
                    }
                  } else if (i.indexOf(ln(C), B) != B) {
                    var er = W.lastIndexOf(C);
                    er > -1 && (W = W.slice(0, er));
                  }
                  return W + E;
                }),
                (a.unescape = function (i) {
                  return (i = U(i)) && eU.test(i) ? i.replace(eN, t7) : i;
                }),
                (a.uniqueId = function (i) {
                  var c = ++tD;
                  return U(i) + c;
                }),
                (a.upperCase = na),
                (a.upperFirst = nc),
                (a.each = Yu),
                (a.eachRight = Zu),
                (a.first = Bu),
                Ti(
                  a,
                  ((tn = {}),
                  $n(a, function (i, c) {
                    tE.call(a.prototype, c) || (tn[c] = i);
                  }),
                  tn),
                  { chain: !1 }
                ),
                (a.VERSION = "4.17.21"),
                mn(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (i) {
                    a[i].placeholder = a;
                  }
                ),
                mn(["drop", "take"], function (i, c) {
                  (N.prototype[i] = function (v) {
                    v = v === l ? 1 : rp(R(v), 0);
                    var E =
                      this.__filtered__ && !c ? new N(this) : this.clone();
                    return (
                      E.__filtered__
                        ? (E.__takeCount__ = rg(v, E.__takeCount__))
                        : E.__views__.push({
                            size: rg(v, 4294967295),
                            type: i + (E.__dir__ < 0 ? "Right" : ""),
                          }),
                      E
                    );
                  }),
                    (N.prototype[i + "Right"] = function (c) {
                      return this.reverse()[i](c).reverse();
                    });
                }),
                mn(["filter", "map", "takeWhile"], function (i, c) {
                  var l = c + 1,
                    v = 1 == l || 3 == l;
                  N.prototype[i] = function (i) {
                    var c = this.clone();
                    return (
                      c.__iteratees__.push({ iteratee: x(i, 3), type: l }),
                      (c.__filtered__ = c.__filtered__ || v),
                      c
                    );
                  };
                }),
                mn(["head", "last"], function (i, c) {
                  var l = "take" + (c ? "Right" : "");
                  N.prototype[i] = function () {
                    return this[l](1).value()[0];
                  };
                }),
                mn(["initial", "tail"], function (i, c) {
                  var l = "drop" + (c ? "" : "Right");
                  N.prototype[i] = function () {
                    return this.__filtered__ ? new N(this) : this[l](1);
                  };
                }),
                (N.prototype.compact = function () {
                  return this.filter(fn);
                }),
                (N.prototype.find = function (i) {
                  return this.filter(i).head();
                }),
                (N.prototype.findLast = function (i) {
                  return this.reverse().find(i);
                }),
                (N.prototype.invokeMap = T(function (i, c) {
                  return "function" == typeof i
                    ? new N(this)
                    : this.map(function (l) {
                        return ue(l, i, c);
                      });
                })),
                (N.prototype.reject = function (i) {
                  return this.filter(ir(x(i)));
                }),
                (N.prototype.slice = function (i, c) {
                  i = R(i);
                  var v = this;
                  return v.__filtered__ && (i > 0 || c < 0)
                    ? new N(v)
                    : (i < 0 ? (v = v.takeRight(-i)) : i && (v = v.drop(i)),
                      c !== l &&
                        (v = (c = R(c)) < 0 ? v.dropRight(-c) : v.take(c - i)),
                      v);
                }),
                (N.prototype.takeRightWhile = function (i) {
                  return this.reverse().takeWhile(i).reverse();
                }),
                (N.prototype.toArray = function () {
                  return this.take(4294967295);
                }),
                $n(N.prototype, function (i, c) {
                  var v = /^(?:filter|find|map|reject)|While$/.test(c),
                    E = /^(?:head|last)$/.test(c),
                    C = a[E ? "take" + ("last" == c ? "Right" : "") : c],
                    P = E || /^find/.test(c);
                  C &&
                    (a.prototype[c] = function () {
                      var c = this.__wrapped__,
                        M = E ? [1] : arguments,
                        B = c instanceof N,
                        W = M[0],
                        J = B || ij(c),
                        m = function (i) {
                          var c = C.apply(a, nt([i], M));
                          return E && X ? c[0] : c;
                        };
                      J &&
                        v &&
                        "function" == typeof W &&
                        1 != W.length &&
                        (B = J = !1);
                      var X = this.__chain__,
                        Q = !!this.__actions__.length,
                        er = P && !X,
                        es = B && !Q;
                      if (!P && J) {
                        c = es ? c : new N(this);
                        var eo = i.apply(c, M);
                        return (
                          eo.__actions__.push({
                            func: nr,
                            args: [m],
                            thisArg: l,
                          }),
                          new Pn(eo, X)
                        );
                      }
                      return er && es
                        ? i.apply(this, M)
                        : ((eo = this.thru(m)),
                          er ? (E ? eo.value()[0] : eo.value()) : eo);
                    });
                }),
                mn(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (i) {
                    var c = t_[i],
                      l = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                      v = /^(?:pop|shift)$/.test(i);
                    a.prototype[i] = function () {
                      var i = arguments;
                      if (v && !this.__chain__) {
                        var E = this.value();
                        return c.apply(ij(E) ? E : [], i);
                      }
                      return this[l](function (l) {
                        return c.apply(ij(l) ? l : [], i);
                      });
                    };
                  }
                ),
                $n(N.prototype, function (i, c) {
                  var l = a[c];
                  if (l) {
                    var v = l.name + "";
                    tE.call(rC, v) || (rC[v] = []),
                      rC[v].push({ name: c, func: l });
                  }
                }),
                (rC[Ze(l, 2).name] = [{ name: "wrapper", func: l }]),
                (N.prototype.clone = function () {
                  var i = new N(this.__wrapped__);
                  return (
                    (i.__actions__ = un(this.__actions__)),
                    (i.__dir__ = this.__dir__),
                    (i.__filtered__ = this.__filtered__),
                    (i.__iteratees__ = un(this.__iteratees__)),
                    (i.__takeCount__ = this.__takeCount__),
                    (i.__views__ = un(this.__views__)),
                    i
                  );
                }),
                (N.prototype.reverse = function () {
                  if (this.__filtered__) {
                    var i = new N(this);
                    (i.__dir__ = -1), (i.__filtered__ = !0);
                  } else (i = this.clone()), (i.__dir__ *= -1);
                  return i;
                }),
                (N.prototype.value = function () {
                  var i = this.__wrapped__.value(),
                    c = this.__dir__,
                    l = ij(i),
                    v = c < 0,
                    E = l ? i.length : 0,
                    C = (function (i, c, l) {
                      for (var v = -1, E = l.length; ++v < E; ) {
                        var C = l[v],
                          P = C.size;
                        switch (C.type) {
                          case "drop":
                            i += P;
                            break;
                          case "dropRight":
                            c -= P;
                            break;
                          case "take":
                            c = rg(c, i + P);
                            break;
                          case "takeRight":
                            i = rp(i, c - P);
                        }
                      }
                      return { start: i, end: c };
                    })(0, E, this.__views__),
                    P = C.start,
                    M = C.end,
                    B = M - P,
                    W = v ? M : P - 1,
                    J = this.__iteratees__,
                    X = J.length,
                    Q = 0,
                    er = rg(B, this.__takeCount__);
                  if (!l || (!v && E == B && er == B))
                    return au(i, this.__actions__);
                  var es = [];
                  e: for (; B-- && Q < er; ) {
                    W += c;
                    for (var eo = -1, ea = i[W]; ++eo < X; ) {
                      var ec = J[eo],
                        el = ec.iteratee,
                        eh = ec.type,
                        ed = el(ea);
                      if (2 == eh) ea = ed;
                      else if (!ed) {
                        if (1 == eh) continue e;
                        break e;
                      }
                    }
                    es[Q++] = ea;
                  }
                  return es;
                }),
                (a.prototype.at = ip),
                (a.prototype.chain = function () {
                  return Ku(this);
                }),
                (a.prototype.commit = function () {
                  return new Pn(this.value(), this.__chain__);
                }),
                (a.prototype.next = function () {
                  this.__values__ === l && (this.__values__ = sa(this.value()));
                  var i = this.__index__ >= this.__values__.length,
                    c = i ? l : this.__values__[this.__index__++];
                  return { done: i, value: c };
                }),
                (a.prototype.plant = function (i) {
                  for (var c, v = this; v instanceof Fe; ) {
                    var E = Wu(v);
                    (E.__index__ = 0),
                      (E.__values__ = l),
                      c ? (C.__wrapped__ = E) : (c = E);
                    var C = E;
                    v = v.__wrapped__;
                  }
                  return (C.__wrapped__ = i), c;
                }),
                (a.prototype.reverse = function () {
                  var i = this.__wrapped__;
                  if (i instanceof N) {
                    var c = i;
                    return (
                      this.__actions__.length && (c = new N(this)),
                      (c = c.reverse()).__actions__.push({
                        func: nr,
                        args: [Pi],
                        thisArg: l,
                      }),
                      new Pn(c, this.__chain__)
                    );
                  }
                  return this.thru(Pi);
                }),
                (a.prototype.toJSON =
                  a.prototype.valueOf =
                  a.prototype.value =
                    function () {
                      return au(this.__wrapped__, this.__actions__);
                    }),
                (a.prototype.first = a.prototype.head),
                tG &&
                  (a.prototype[tG] = function () {
                    return this;
                  }),
                a
              );
            })();
          tY ? (((tY.exports = re)._ = re), (tG._ = re)) : (tJ._ = re);
        }.call(iF));
      })(iK, iK.exports);
      var iV = Object.defineProperty,
        iW = Object.defineProperties,
        iJ = Object.getOwnPropertyDescriptors,
        iG = Object.getOwnPropertySymbols,
        iY = Object.prototype.hasOwnProperty,
        iX = Object.prototype.propertyIsEnumerable,
        Ea = (i, c, l) =>
          c in i
            ? iV(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (i[c] = l),
        index_es_fr = (i, c) => {
          for (var l in c || (c = {})) iY.call(c, l) && Ea(i, l, c[l]);
          if (iG) for (var l of iG(c)) iX.call(c, l) && Ea(i, l, c[l]);
          return i;
        },
        zg = (i, c) => iW(i, iJ(c));
      function En(i, c, l) {
        let v;
        let E = Ui(i);
        return (
          c.rpcMap && (v = c.rpcMap[E]),
          v ||
            (v = `https://rpc.walletconnect.com/v1?chainId=eip155:${E}&projectId=${l}`),
          v
        );
      }
      function Ui(i) {
        return i.includes("eip155") ? Number(i.split(":")[1]) : Number(i);
      }
      function ya(i) {
        return i.map((i) => `${i.split(":")[0]}:${i.split(":")[1]}`);
      }
      function Sa(i) {
        var c, l, v, E;
        let C = {};
        if (!H(i)) return C;
        for (let [P, M] of Object.entries(i)) {
          let i = te(P) ? [P] : M.chains,
            B = M.methods || [],
            W = M.events || [],
            J = M.rpcMap || {},
            X = Ze(P);
          C[X] = zg(index_es_fr(index_es_fr({}, C[X]), M), {
            chains: S(i, null == (c = C[X]) ? void 0 : c.chains),
            methods: S(B, null == (l = C[X]) ? void 0 : l.methods),
            events: S(W, null == (v = C[X]) ? void 0 : v.events),
            rpcMap: index_es_fr(
              index_es_fr({}, J),
              null == (E = C[X]) ? void 0 : E.rpcMap
            ),
          });
        }
        return C;
      }
      function Zg(i) {
        return i.includes(":") ? i.split(":")[2] : i;
      }
      let iZ = {},
        universal_provider_dist_index_es_J = (i) => iZ[i],
        index_es_Wi = (i, c) => {
          iZ[i] = c;
        };
      let Xg = class Xg {
        constructor(i) {
          (this.name = "polkadot"),
            (this.namespace = i.namespace),
            (this.events = universal_provider_dist_index_es_J("events")),
            (this.client = universal_provider_dist_index_es_J("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(i) {
          this.namespace = Object.assign(this.namespace, i);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let i = this.namespace.chains[0];
          if (!i) throw Error("ChainId not found");
          return i.split(":")[1];
        }
        request(i) {
          return this.namespace.methods.includes(i.request.method)
            ? this.client.request(i)
            : this.getHttpProvider().request(i.request);
        }
        setDefaultChain(i, c) {
          if (((this.chainId = i), !this.httpProviders[i])) {
            let l = c || En(`${this.name}:${i}`, this.namespace);
            if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
            this.setHttpProvider(i, l);
          }
          this.events.emit(
            iB.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let i = this.namespace.accounts;
          return (
            (i &&
              i
                .filter((i) => i.split(":")[1] === this.chainId.toString())
                .map((i) => i.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          let i = {};
          return (
            this.namespace.chains.forEach((c) => {
              var l;
              i[c] = this.createHttpProvider(
                c,
                null == (l = this.namespace.rpcMap) ? void 0 : l[c]
              );
            }),
            i
          );
        }
        getHttpProvider() {
          let i = `${this.name}:${this.chainId}`,
            c = this.httpProviders[i];
          if (typeof c > "u")
            throw Error(`JSON-RPC provider for ${i} not found`);
          return c;
        }
        setHttpProvider(i, c) {
          let l = this.createHttpProvider(i, c);
          l && (this.httpProviders[i] = l);
        }
        createHttpProvider(i, c) {
          let l = c || En(i, this.namespace);
          return typeof l > "u"
            ? void 0
            : new JsonRpcProvider(
                new HttpConnection(
                  l,
                  universal_provider_dist_index_es_J("disableProviderPing")
                )
              );
        }
      };
      let Qg = class Qg {
        constructor(i) {
          (this.name = "eip155"),
            (this.namespace = i.namespace),
            (this.events = universal_provider_dist_index_es_J("events")),
            (this.client = universal_provider_dist_index_es_J("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(i) {
          switch (i.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(i);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(i.request.method)
            ? await this.client.request(i)
            : this.getHttpProvider().request(i.request);
        }
        updateNamespace(i) {
          this.namespace = Object.assign(this.namespace, i);
        }
        setDefaultChain(i, c) {
          let l = Ui(i);
          if (!this.httpProviders[l]) {
            let i =
              c ||
              En(
                `${this.name}:${l}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!i) throw Error(`No RPC url provided for chainId: ${l}`);
            this.setHttpProvider(l, i);
          }
          (this.chainId = l),
            this.events.emit(iB.DEFAULT_CHAIN_CHANGED, `${this.name}:${l}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let i = this.namespace.chains[0];
          if (!i) throw Error("ChainId not found");
          return i.split(":")[1];
        }
        createHttpProvider(i, c) {
          let l =
            c ||
            En(`${this.name}:${i}`, this.namespace, this.client.core.projectId);
          return typeof l > "u"
            ? void 0
            : new JsonRpcProvider(
                new HttpConnection(
                  l,
                  universal_provider_dist_index_es_J("disableProviderPing")
                )
              );
        }
        setHttpProvider(i, c) {
          let l = this.createHttpProvider(i, c);
          l && (this.httpProviders[i] = l);
        }
        createHttpProviders() {
          let i = {};
          return (
            this.namespace.chains.forEach((c) => {
              var l;
              let v = Ui(c);
              i[v] = this.createHttpProvider(
                v,
                null == (l = this.namespace.rpcMap) ? void 0 : l[c]
              );
            }),
            i
          );
        }
        getAccounts() {
          let i = this.namespace.accounts;
          return i
            ? [
                ...new Set(
                  i
                    .filter((i) => i.split(":")[1] === this.chainId.toString())
                    .map((i) => i.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          let i = this.chainId,
            c = this.httpProviders[i];
          if (typeof c > "u")
            throw Error(`JSON-RPC provider for ${i} not found`);
          return c;
        }
        async handleSwitchChain(i) {
          var c, l;
          let v = i.request.params
            ? null == (c = i.request.params[0])
              ? void 0
              : c.chainId
            : "0x0";
          v = v.startsWith("0x") ? v : `0x${v}`;
          let E = parseInt(v, 16);
          if (this.isChainApproved(E)) this.setDefaultChain(`${E}`);
          else if (
            this.namespace.methods.includes("wallet_switchEthereumChain")
          )
            await this.client.request({
              topic: i.topic,
              request: { method: i.request.method, params: [{ chainId: v }] },
              chainId: null == (l = this.namespace.chains) ? void 0 : l[0],
            }),
              this.setDefaultChain(`${E}`);
          else
            throw Error(
              `Failed to switch to chain 'eip155:${E}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
            );
          return null;
        }
        isChainApproved(i) {
          return this.namespace.chains.includes(`${this.name}:${i}`);
        }
      };
      let Vg = class Vg {
        constructor(i) {
          (this.name = "solana"),
            (this.namespace = i.namespace),
            (this.events = universal_provider_dist_index_es_J("events")),
            (this.client = universal_provider_dist_index_es_J("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(i) {
          this.namespace = Object.assign(this.namespace, i);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(i) {
          return this.namespace.methods.includes(i.request.method)
            ? this.client.request(i)
            : this.getHttpProvider().request(i.request);
        }
        setDefaultChain(i, c) {
          if (!this.httpProviders[i]) {
            let l =
              c ||
              En(
                `${this.name}:${i}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
            this.setHttpProvider(i, l);
          }
          (this.chainId = i),
            this.events.emit(
              iB.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let i = this.namespace.chains[0];
          if (!i) throw Error("ChainId not found");
          return i.split(":")[1];
        }
        getAccounts() {
          let i = this.namespace.accounts;
          return i
            ? [
                ...new Set(
                  i
                    .filter((i) => i.split(":")[1] === this.chainId.toString())
                    .map((i) => i.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let i = {};
          return (
            this.namespace.chains.forEach((c) => {
              var l;
              i[c] = this.createHttpProvider(
                c,
                null == (l = this.namespace.rpcMap) ? void 0 : l[c]
              );
            }),
            i
          );
        }
        getHttpProvider() {
          let i = `${this.name}:${this.chainId}`,
            c = this.httpProviders[i];
          if (typeof c > "u")
            throw Error(`JSON-RPC provider for ${i} not found`);
          return c;
        }
        setHttpProvider(i, c) {
          let l = this.createHttpProvider(i, c);
          l && (this.httpProviders[i] = l);
        }
        createHttpProvider(i, c) {
          let l = c || En(i, this.namespace, this.client.core.projectId);
          return typeof l > "u"
            ? void 0
            : new JsonRpcProvider(
                new HttpConnection(
                  l,
                  universal_provider_dist_index_es_J("disableProviderPing")
                )
              );
        }
      };
      let kg = class kg {
        constructor(i) {
          (this.name = "cosmos"),
            (this.namespace = i.namespace),
            (this.events = universal_provider_dist_index_es_J("events")),
            (this.client = universal_provider_dist_index_es_J("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(i) {
          this.namespace = Object.assign(this.namespace, i);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let i = this.namespace.chains[0];
          if (!i) throw Error("ChainId not found");
          return i.split(":")[1];
        }
        request(i) {
          return this.namespace.methods.includes(i.request.method)
            ? this.client.request(i)
            : this.getHttpProvider().request(i.request);
        }
        setDefaultChain(i, c) {
          if (((this.chainId = i), !this.httpProviders[i])) {
            let l =
              c ||
              En(
                `${this.name}:${i}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
            this.setHttpProvider(i, l);
          }
          this.events.emit(
            iB.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let i = this.namespace.accounts;
          return i
            ? [
                ...new Set(
                  i
                    .filter((i) => i.split(":")[1] === this.chainId.toString())
                    .map((i) => i.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let i = {};
          return (
            this.namespace.chains.forEach((c) => {
              var l;
              i[c] = this.createHttpProvider(
                c,
                null == (l = this.namespace.rpcMap) ? void 0 : l[c]
              );
            }),
            i
          );
        }
        getHttpProvider() {
          let i = `${this.name}:${this.chainId}`,
            c = this.httpProviders[i];
          if (typeof c > "u")
            throw Error(`JSON-RPC provider for ${i} not found`);
          return c;
        }
        setHttpProvider(i, c) {
          let l = this.createHttpProvider(i, c);
          l && (this.httpProviders[i] = l);
        }
        createHttpProvider(i, c) {
          let l = c || En(i, this.namespace, this.client.core.projectId);
          return typeof l > "u"
            ? void 0
            : new JsonRpcProvider(
                new HttpConnection(
                  l,
                  universal_provider_dist_index_es_J("disableProviderPing")
                )
              );
        }
      };
      let jg = class jg {
        constructor(i) {
          (this.name = "cip34"),
            (this.namespace = i.namespace),
            (this.events = universal_provider_dist_index_es_J("events")),
            (this.client = universal_provider_dist_index_es_J("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(i) {
          this.namespace = Object.assign(this.namespace, i);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let i = this.namespace.chains[0];
          if (!i) throw Error("ChainId not found");
          return i.split(":")[1];
        }
        request(i) {
          return this.namespace.methods.includes(i.request.method)
            ? this.client.request(i)
            : this.getHttpProvider().request(i.request);
        }
        setDefaultChain(i, c) {
          if (((this.chainId = i), !this.httpProviders[i])) {
            let l = c || this.getCardanoRPCUrl(i);
            if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
            this.setHttpProvider(i, l);
          }
          this.events.emit(
            iB.DEFAULT_CHAIN_CHANGED,
            `${this.name}:${this.chainId}`
          );
        }
        getAccounts() {
          let i = this.namespace.accounts;
          return i
            ? [
                ...new Set(
                  i
                    .filter((i) => i.split(":")[1] === this.chainId.toString())
                    .map((i) => i.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let i = {};
          return (
            this.namespace.chains.forEach((c) => {
              let l = this.getCardanoRPCUrl(c);
              i[c] = this.createHttpProvider(c, l);
            }),
            i
          );
        }
        getHttpProvider() {
          let i = `${this.name}:${this.chainId}`,
            c = this.httpProviders[i];
          if (typeof c > "u")
            throw Error(`JSON-RPC provider for ${i} not found`);
          return c;
        }
        getCardanoRPCUrl(i) {
          let c = this.namespace.rpcMap;
          if (c) return c[i];
        }
        setHttpProvider(i, c) {
          let l = this.createHttpProvider(i, c);
          l && (this.httpProviders[i] = l);
        }
        createHttpProvider(i, c) {
          let l = c || this.getCardanoRPCUrl(i);
          return typeof l > "u"
            ? void 0
            : new JsonRpcProvider(
                new HttpConnection(
                  l,
                  universal_provider_dist_index_es_J("disableProviderPing")
                )
              );
        }
      };
      let nv = class nv {
        constructor(i) {
          (this.name = "elrond"),
            (this.namespace = i.namespace),
            (this.events = universal_provider_dist_index_es_J("events")),
            (this.client = universal_provider_dist_index_es_J("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(i) {
          this.namespace = Object.assign(this.namespace, i);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(i) {
          return this.namespace.methods.includes(i.request.method)
            ? this.client.request(i)
            : this.getHttpProvider().request(i.request);
        }
        setDefaultChain(i, c) {
          if (!this.httpProviders[i]) {
            let l =
              c ||
              En(
                `${this.name}:${i}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
            this.setHttpProvider(i, l);
          }
          (this.chainId = i),
            this.events.emit(
              iB.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let i = this.namespace.chains[0];
          if (!i) throw Error("ChainId not found");
          return i.split(":")[1];
        }
        getAccounts() {
          let i = this.namespace.accounts;
          return i
            ? [
                ...new Set(
                  i
                    .filter((i) => i.split(":")[1] === this.chainId.toString())
                    .map((i) => i.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let i = {};
          return (
            this.namespace.chains.forEach((c) => {
              var l;
              i[c] = this.createHttpProvider(
                c,
                null == (l = this.namespace.rpcMap) ? void 0 : l[c]
              );
            }),
            i
          );
        }
        getHttpProvider() {
          let i = `${this.name}:${this.chainId}`,
            c = this.httpProviders[i];
          if (typeof c > "u")
            throw Error(`JSON-RPC provider for ${i} not found`);
          return c;
        }
        setHttpProvider(i, c) {
          let l = this.createHttpProvider(i, c);
          l && (this.httpProviders[i] = l);
        }
        createHttpProvider(i, c) {
          let l = c || En(i, this.namespace, this.client.core.projectId);
          return typeof l > "u"
            ? void 0
            : new JsonRpcProvider(
                new HttpConnection(
                  l,
                  universal_provider_dist_index_es_J("disableProviderPing")
                )
              );
        }
      };
      let tv = class tv {
        constructor(i) {
          (this.name = "multiversx"),
            (this.namespace = i.namespace),
            (this.events = universal_provider_dist_index_es_J("events")),
            (this.client = universal_provider_dist_index_es_J("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(i) {
          this.namespace = Object.assign(this.namespace, i);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(i) {
          return this.namespace.methods.includes(i.request.method)
            ? this.client.request(i)
            : this.getHttpProvider().request(i.request);
        }
        setDefaultChain(i, c) {
          if (!this.httpProviders[i]) {
            let l =
              c ||
              En(
                `${this.name}:${i}`,
                this.namespace,
                this.client.core.projectId
              );
            if (!l) throw Error(`No RPC url provided for chainId: ${i}`);
            this.setHttpProvider(i, l);
          }
          (this.chainId = i),
            this.events.emit(
              iB.DEFAULT_CHAIN_CHANGED,
              `${this.name}:${this.chainId}`
            );
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          let i = this.namespace.chains[0];
          if (!i) throw Error("ChainId not found");
          return i.split(":")[1];
        }
        getAccounts() {
          let i = this.namespace.accounts;
          return i
            ? [
                ...new Set(
                  i
                    .filter((i) => i.split(":")[1] === this.chainId.toString())
                    .map((i) => i.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          let i = {};
          return (
            this.namespace.chains.forEach((c) => {
              var l;
              i[c] = this.createHttpProvider(
                c,
                null == (l = this.namespace.rpcMap) ? void 0 : l[c]
              );
            }),
            i
          );
        }
        getHttpProvider() {
          let i = `${this.name}:${this.chainId}`,
            c = this.httpProviders[i];
          if (typeof c > "u")
            throw Error(`JSON-RPC provider for ${i} not found`);
          return c;
        }
        setHttpProvider(i, c) {
          let l = this.createHttpProvider(i, c);
          l && (this.httpProviders[i] = l);
        }
        createHttpProvider(i, c) {
          let l = c || En(i, this.namespace, this.client.core.projectId);
          return typeof l > "u"
            ? void 0
            : new JsonRpcProvider(
                new HttpConnection(
                  l,
                  universal_provider_dist_index_es_J("disableProviderPing")
                )
              );
        }
      };
      var iQ = Object.defineProperty,
        i0 = Object.defineProperties,
        i1 = Object.getOwnPropertyDescriptors,
        i5 = Object.getOwnPropertySymbols,
        i3 = Object.prototype.hasOwnProperty,
        i6 = Object.prototype.propertyIsEnumerable,
        ba = (i, c, l) =>
          c in i
            ? iQ(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (i[c] = l),
        index_es_cr = (i, c) => {
          for (var l in c || (c = {})) i3.call(c, l) && ba(i, l, c[l]);
          if (i5) for (var l of i5(c)) i6.call(c, l) && ba(i, l, c[l]);
          return i;
        },
        index_es_Fi = (i, c) => i0(i, i1(c));
      let index_es_hr = class index_es_hr {
        constructor(i) {
          (this.events = new (eh())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = i),
            (this.logger =
              "u" > typeof i?.logger && "string" != typeof i?.logger
                ? i.logger
                : (0, tq.pino)(
                    (0, tq.getDefaultLoggerOptions)({ level: i?.logger || iH })
                  )),
            (this.disableProviderPing = i?.disableProviderPing || !1);
        }
        static async init(i) {
          let c = new index_es_hr(i);
          return await c.initialize(), c;
        }
        async request(i, c) {
          let [l, v] = this.validateChain(c);
          if (!this.session)
            throw Error("Please call connect() before request()");
          return await this.getProvider(l).request({
            request: index_es_cr({}, i),
            chainId: `${l}:${v}`,
            topic: this.session.topic,
          });
        }
        sendAsync(i, c, l) {
          this.request(i, l)
            .then((i) => c(null, i))
            .catch((i) => c(i, void 0));
        }
        async enable() {
          if (!this.client) throw Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var i;
          if (!this.session)
            throw Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (i = this.session) ? void 0 : i.topic,
            reason: w("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(i) {
          if (!this.client) throw Error("Sign Client not initialized");
          if (
            (this.setNamespaces(i),
            await this.cleanupPendingPairings(),
            !i.skipPairing)
          )
            return await this.pair(i.pairingTopic);
        }
        on(i, c) {
          this.events.on(i, c);
        }
        once(i, c) {
          this.events.once(i, c);
        }
        removeListener(i, c) {
          this.events.removeListener(i, c);
        }
        off(i, c) {
          this.events.off(i, c);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(i) {
          this.shouldAbortPairingAttempt = !1;
          let c = 0;
          do {
            if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
            if (c >= this.maxPairingAttempts)
              throw Error("Max auto pairing attempts reached");
            let { uri: l, approval: v } = await this.client.connect({
              pairingTopic: i,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            l && ((this.uri = l), this.events.emit("display_uri", l)),
              await v()
                .then((i) => {
                  (this.session = i),
                    this.namespaces ||
                      ((this.namespaces = (function (i) {
                        let c = {};
                        for (let [l, v] of Object.entries(i)) {
                          let i = v.methods || [],
                            E = v.events || [],
                            C = v.accounts || [],
                            P = te(l)
                              ? [l]
                              : v.chains
                              ? v.chains
                              : ya(v.accounts);
                          c[l] = {
                            chains: P,
                            methods: i,
                            events: E,
                            accounts: C,
                          };
                        }
                        return c;
                      })(i.namespaces)),
                      this.persist("namespaces", this.namespaces));
                })
                .catch((i) => {
                  if (i.message !== iC) throw i;
                  c++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(i, c) {
          try {
            if (!this.session) return;
            let [l, v] = this.validateChain(i);
            this.getProvider(l).setDefaultChain(v, c);
          } catch (i) {
            if (!/Please call connect/.test(i.message)) throw i;
          }
        }
        async cleanupPendingPairings(i = {}) {
          this.logger.info("Cleaning up inactive pairings...");
          let c = this.client.pairing.getAll();
          if (index_es_C(c)) {
            for (let l of c)
              i.deletePairings
                ? this.client.core.expirer.set(l.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    l.topic
                  );
            this.logger.info(`Inactive pairings cleared: ${c.length}`);
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            let i = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[i]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await dist_index_es_M.init({
              logger: this.providerOpts.logger || iH,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              name: this.providerOpts.name,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw Error("Sign Client not initialized");
          if (!this.session)
            throw Error(
              "Session not initialized. Please call connect() before enable()"
            );
          let i = [
            ...new Set(Object.keys(this.session.namespaces).map((i) => Ze(i))),
          ];
          index_es_Wi("client", this.client),
            index_es_Wi("events", this.events),
            index_es_Wi("disableProviderPing", this.disableProviderPing),
            i.forEach((i) => {
              if (!this.session) return;
              let c = (function (i, c) {
                  let l = Object.keys(c.namespaces).filter((c) =>
                    c.includes(i)
                  );
                  if (!l.length) return [];
                  let v = [];
                  return (
                    l.forEach((i) => {
                      let l = c.namespaces[i].accounts;
                      v.push(...l);
                    }),
                    v
                  );
                })(i, this.session),
                l = ya(c),
                v = (function (i = {}, c = {}) {
                  let l = Sa(i),
                    v = Sa(c);
                  return iK.exports.merge(l, v);
                })(this.namespaces, this.optionalNamespaces),
                E = index_es_Fi(index_es_cr({}, v[i]), {
                  accounts: c,
                  chains: l,
                });
              switch (i) {
                case "eip155":
                  this.rpcProviders[i] = new Qg({ namespace: E });
                  break;
                case "solana":
                  this.rpcProviders[i] = new Vg({ namespace: E });
                  break;
                case "cosmos":
                  this.rpcProviders[i] = new kg({ namespace: E });
                  break;
                case "polkadot":
                  this.rpcProviders[i] = new Xg({ namespace: E });
                  break;
                case "cip34":
                  this.rpcProviders[i] = new jg({ namespace: E });
                  break;
                case "elrond":
                  this.rpcProviders[i] = new nv({ namespace: E });
                  break;
                case "multiversx":
                  this.rpcProviders[i] = new tv({ namespace: E });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw Error("Sign Client is not initialized");
          this.client.on("session_ping", (i) => {
            this.events.emit("session_ping", i);
          }),
            this.client.on("session_event", (i) => {
              let { params: c } = i,
                { event: l } = c;
              if ("accountsChanged" === l.name) {
                let i = l.data;
                i &&
                  index_es_C(i) &&
                  this.events.emit("accountsChanged", i.map(Zg));
              } else
                "chainChanged" === l.name
                  ? this.onChainChanged(c.chainId)
                  : this.events.emit(l.name, l.data);
              this.events.emit("session_event", i);
            }),
            this.client.on("session_update", ({ topic: i, params: c }) => {
              var l;
              let { namespaces: v } = c,
                E = null == (l = this.client) ? void 0 : l.session.get(i);
              (this.session = index_es_Fi(index_es_cr({}, E), {
                namespaces: v,
              })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: i, params: c });
            }),
            this.client.on("session_delete", async (i) => {
              await this.cleanup(),
                this.events.emit("session_delete", i),
                this.events.emit(
                  "disconnect",
                  index_es_Fi(index_es_cr({}, w("USER_DISCONNECTED")), {
                    data: i.topic,
                  })
                );
            }),
            this.on(iB.DEFAULT_CHAIN_CHANGED, (i) => {
              this.onChainChanged(i, !0);
            });
        }
        getProvider(i) {
          if (!this.rpcProviders[i]) throw Error(`Provider not found: ${i}`);
          return this.rpcProviders[i];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((i) => {
            var c;
            this.getProvider(i).updateNamespace(
              null == (c = this.session) ? void 0 : c.namespaces[i]
            );
          });
        }
        setNamespaces(i) {
          let {
            namespaces: c,
            optionalNamespaces: l,
            sessionProperties: v,
          } = i;
          c && Object.keys(c).length && (this.namespaces = c),
            l && Object.keys(l).length && (this.optionalNamespaces = l),
            (this.sessionProperties = v),
            this.persist("namespaces", c),
            this.persist("optionalNamespaces", l);
        }
        validateChain(i) {
          let [c, l] = i?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [c, l];
          if (
            c &&
            !Object.keys(this.namespaces || {})
              .map((i) => Ze(i))
              .includes(c)
          )
            throw Error(
              `Namespace '${c}' is not configured. Please call connect() first with namespace config.`
            );
          if (c && l) return [c, l];
          let v = Ze(Object.keys(this.namespaces)[0]),
            E = this.rpcProviders[v].getDefaultChain();
          return [v, E];
        }
        async requestAccounts() {
          let [i] = this.validateChain();
          return await this.getProvider(i).requestAccounts();
        }
        onChainChanged(i, c = !1) {
          var l;
          if (!this.namespaces) return;
          let [v, E] = this.validateChain(i);
          c || this.getProvider(v).setDefaultChain(E),
            ((null != (l = this.namespaces[v])
              ? l
              : this.namespaces[`${v}:${E}`]
            ).defaultChain = E),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", E);
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(i, c) {
          this.client.core.storage.setItem(`${iq}/${i}`, c);
        }
        async getFromStore(i) {
          return await this.client.core.storage.getItem(`${iq}/${i}`);
        }
      };
      let i2 = ["eth_sendTransaction", "personal_sign"],
        i8 = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        i4 = ["chainChanged", "accountsChanged"],
        i9 = ["message", "disconnect", "connect"];
      var i7 = Object.defineProperty,
        nn = Object.defineProperties,
        ns = Object.getOwnPropertyDescriptors,
        no = Object.getOwnPropertySymbols,
        na = Object.prototype.hasOwnProperty,
        nc = Object.prototype.propertyIsEnumerable,
        ethereum_provider_dist_index_es_O = (i, c, l) =>
          c in i
            ? i7(i, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: l,
              })
            : (i[c] = l),
        dist_index_es_p = (i, c) => {
          for (var l in c || (c = {}))
            na.call(c, l) && ethereum_provider_dist_index_es_O(i, l, c[l]);
          if (no)
            for (var l of no(c))
              nc.call(c, l) && ethereum_provider_dist_index_es_O(i, l, c[l]);
          return i;
        },
        ethereum_provider_dist_index_es_M = (i, c) => nn(i, ns(c));
      function dist_index_es_g(i) {
        return Number(i[0].split(":")[1]);
      }
      function index_es_f(i) {
        return `0x${i.toString(16)}`;
      }
      let index_es_v = class index_es_v {
        constructor() {
          (this.events = new el.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (i, c) => (this.events.on(i, c), this)),
            (this.once = (i, c) => (this.events.once(i, c), this)),
            (this.removeListener = (i, c) => (
              this.events.removeListener(i, c), this
            )),
            (this.off = (i, c) => (this.events.off(i, c), this)),
            (this.parseAccount = (i) =>
              this.isCompatibleChainId(i) ? this.parseAccountId(i).address : i),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(i) {
          let c = new index_es_v();
          return await c.initialize(i), c;
        }
        async request(i) {
          return await this.signer.request(i, this.formatChainId(this.chainId));
        }
        sendAsync(i, c) {
          this.signer.sendAsync(i, c, this.formatChainId(this.chainId));
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(i) {
          if (!this.signer.client)
            throw Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(i);
          let { required: c, optional: l } = (function (i) {
            let {
              chains: c,
              optionalChains: l,
              methods: v,
              optionalMethods: E,
              events: C,
              optionalEvents: P,
              rpcMap: M,
            } = i;
            if (!index_es_C(c)) throw Error("Invalid chains");
            let B = {
                chains: c,
                methods: v || i2,
                events: C || i4,
                rpcMap: dist_index_es_p(
                  {},
                  c.length
                    ? { [dist_index_es_g(c)]: M[dist_index_es_g(c)] }
                    : {}
                ),
              },
              W = C?.filter((i) => !i4.includes(i)),
              J = v?.filter((i) => !i2.includes(i));
            if (
              !l &&
              !P &&
              !E &&
              !(null != W && W.length) &&
              !(null != J && J.length)
            )
              return { required: c.length ? B : void 0 };
            let X = (W?.length && J?.length) || !l,
              Q = {
                chains: [...new Set(X ? B.chains.concat(l || []) : l)],
                methods: [
                  ...new Set(B.methods.concat(null != E && E.length ? E : i8)),
                ],
                events: [...new Set(B.events.concat(P || i9))],
                rpcMap: M,
              };
            return {
              required: c.length ? B : void 0,
              optional: l.length ? Q : void 0,
            };
          })(this.rpc);
          try {
            let v = await new Promise(async (v, E) => {
              var C;
              this.rpc.showQrModal &&
                (null == (C = this.modal) ||
                  C.subscribeModal((i) => {
                    i.open ||
                      this.signer.session ||
                      (this.signer.abortPairingAttempt(),
                      E(Error("Connection request reset. Please try again.")));
                  })),
                await this.signer
                  .connect(
                    ethereum_provider_dist_index_es_M(
                      dist_index_es_p(
                        {
                          namespaces: dist_index_es_p(
                            {},
                            c && { [this.namespace]: c }
                          ),
                        },
                        l && { optionalNamespaces: { [this.namespace]: l } }
                      ),
                      { pairingTopic: i?.pairingTopic }
                    )
                  )
                  .then((i) => {
                    v(i);
                  })
                  .catch((i) => {
                    E(Error(i.message));
                  });
            });
            if (!v) return;
            this.setChainIds(this.rpc.chains);
            let E = (function (i, c = []) {
              let l = [];
              return (
                Object.keys(i).forEach((v) => {
                  if (c.length && !c.includes(v)) return;
                  let E = i[v];
                  l.push(...E.accounts);
                }),
                l
              );
            })(v.namespaces, [this.namespace]);
            this.setAccounts(E),
              this.events.emit("connect", {
                chainId: index_es_f(this.chainId),
              });
          } catch (i) {
            throw (this.signer.logger.error(i), i);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (i) => {
            let { params: c } = i,
              { event: l } = c;
            "accountsChanged" === l.name
              ? ((this.accounts = this.parseAccounts(l.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === l.name
              ? this.setChainId(this.formatChainId(l.data))
              : this.events.emit(l.name, l.data),
              this.events.emit("session_event", i);
          }),
            this.signer.on("chainChanged", (i) => {
              let c = parseInt(i);
              (this.chainId = c),
                this.events.emit("chainChanged", index_es_f(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (i) => {
              this.events.emit("session_update", i);
            }),
            this.signer.on("session_delete", (i) => {
              this.reset(),
                this.events.emit("session_delete", i),
                this.events.emit(
                  "disconnect",
                  ethereum_provider_dist_index_es_M(
                    dist_index_es_p({}, w("USER_DISCONNECTED")),
                    { data: i.topic, name: "USER_DISCONNECTED" }
                  )
                );
            }),
            this.signer.on("display_uri", (i) => {
              var c, l;
              this.rpc.showQrModal &&
                (null == (c = this.modal) || c.closeModal(),
                null == (l = this.modal) || l.openModal({ uri: i })),
                this.events.emit("display_uri", i);
            });
        }
        switchEthereumChain(i) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: i.toString(16) }],
          });
        }
        isCompatibleChainId(i) {
          return "string" == typeof i && i.startsWith(`${this.namespace}:`);
        }
        formatChainId(i) {
          return `${this.namespace}:${i}`;
        }
        parseChainId(i) {
          return Number(i.split(":")[1]);
        }
        setChainIds(i) {
          let c = i
            .filter((i) => this.isCompatibleChainId(i))
            .map((i) => this.parseChainId(i));
          c.length &&
            ((this.chainId = c[0]),
            this.events.emit("chainChanged", index_es_f(this.chainId)),
            this.persist());
        }
        setChainId(i) {
          if (this.isCompatibleChainId(i)) {
            let c = this.parseChainId(i);
            (this.chainId = c), this.switchEthereumChain(c);
          }
        }
        parseAccountId(i) {
          let [c, l, v] = i.split(":");
          return { chainId: `${c}:${l}`, address: v };
        }
        setAccounts(i) {
          (this.accounts = i
            .filter(
              (i) =>
                this.parseChainId(this.parseAccountId(i).chainId) ===
                this.chainId
            )
            .map((i) => this.parseAccountId(i).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(i) {
          var c, l;
          let v = null != (c = i?.chains) ? c : [],
            E = null != (l = i?.optionalChains) ? l : [],
            C = v.concat(E);
          if (!C.length)
            throw Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          let P = v.length ? i?.methods || i2 : [],
            M = v.length ? i?.events || i4 : [],
            B = i?.optionalMethods || [],
            W = i?.optionalEvents || [],
            J = i?.rpcMap || this.buildRpcMap(C, i.projectId),
            X = i?.qrModalOptions || void 0;
          return {
            chains: v?.map((i) => this.formatChainId(i)),
            optionalChains: E.map((i) => this.formatChainId(i)),
            methods: P,
            events: M,
            optionalMethods: B,
            optionalEvents: W,
            rpcMap: J,
            showQrModal: !!(null != i && i.showQrModal),
            qrModalOptions: X,
            projectId: i.projectId,
            metadata: i.metadata,
          };
        }
        buildRpcMap(i, c) {
          let l = {};
          return (
            i.forEach((i) => {
              l[i] = this.getRpcUrl(i, c);
            }),
            l
          );
        }
        async initialize(i) {
          if (
            ((this.rpc = this.getRpcConfig(i)),
            (this.chainId = this.rpc.chains.length
              ? dist_index_es_g(this.rpc.chains)
              : dist_index_es_g(this.rpc.optionalChains)),
            (this.signer = await index_es_hr.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: i.disableProviderPing,
              relayUrl: i.relayUrl,
              storageOptions: i.storageOptions,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let i;
            try {
              let { WalletConnectModal: c } = await l
                .e(343)
                .then(l.bind(l, 59343));
              i = c;
            } catch {
              throw Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (i)
              try {
                this.modal = new i(
                  dist_index_es_p(
                    {
                      walletConnectVersion: 2,
                      projectId: this.rpc.projectId,
                      standaloneChains: this.rpc.chains,
                    },
                    this.rpc.qrModalOptions
                  )
                );
              } catch (i) {
                throw (
                  (this.signer.logger.error(i),
                  Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(i) {
          if (!i) return;
          let { chains: c, optionalChains: l, rpcMap: v } = i;
          c &&
            index_es_C(c) &&
            ((this.rpc.chains = c.map((i) => this.formatChainId(i))),
            c.forEach((i) => {
              this.rpc.rpcMap[i] = v?.[i] || this.getRpcUrl(i);
            })),
            l &&
              index_es_C(l) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = l?.map((i) => this.formatChainId(i))),
              l.forEach((i) => {
                this.rpc.rpcMap[i] = v?.[i] || this.getRpcUrl(i);
              }));
        }
        getRpcUrl(i, c) {
          var l;
          return (
            (null == (l = this.rpc.rpcMap) ? void 0 : l[i]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${i}&projectId=${
              c || this.rpc.projectId
            }`
          );
        }
        async loadPersistedSession() {
          if (!this.session) return;
          let i = await this.signer.client.core.storage.getItem(
              `${this.STORAGE_KEY}/chainId`
            ),
            c = this.session.namespaces[`${this.namespace}:${i}`]
              ? this.session.namespaces[`${this.namespace}:${i}`]
              : this.session.namespaces[this.namespace];
          this.setChainIds(i ? [this.formatChainId(i)] : c?.accounts),
            this.setAccounts(c?.accounts);
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(i) {
          return "string" == typeof i || i instanceof String
            ? [this.parseAccount(i)]
            : i.map((i) => this.parseAccount(i));
        }
      };
    },
    38200: function (i, c, l) {
      "use strict";
      l.d(c, {
        q: function () {
          return IEvents;
        },
      });
      let IEvents = class IEvents {};
    },
    30997: function (i, c, l) {
      "use strict";
      l.r(c),
        l.d(c, {
          IEvents: function () {
            return v.q;
          },
        });
      var v = l(38200);
    },
    32568: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.HEARTBEAT_EVENTS = c.HEARTBEAT_INTERVAL = void 0);
      let v = l(66736);
      (c.HEARTBEAT_INTERVAL = v.FIVE_SECONDS),
        (c.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    53401: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      let v = l(70655);
      v.__exportStar(l(32568), c);
    },
    38969: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.HeartBeat = void 0);
      let v = l(70655),
        E = l(17187),
        C = l(66736),
        P = l(1614),
        M = l(53401);
      let HeartBeat = class HeartBeat extends P.IHeartBeat {
        constructor(i) {
          super(i),
            (this.events = new E.EventEmitter()),
            (this.interval = M.HEARTBEAT_INTERVAL),
            (this.interval =
              (null == i ? void 0 : i.interval) || M.HEARTBEAT_INTERVAL);
        }
        static init(i) {
          return v.__awaiter(this, void 0, void 0, function* () {
            let c = new HeartBeat(i);
            return yield c.init(), c;
          });
        }
        init() {
          return v.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(i, c) {
          this.events.on(i, c);
        }
        once(i, c) {
          this.events.once(i, c);
        }
        off(i, c) {
          this.events.off(i, c);
        }
        removeListener(i, c) {
          this.events.removeListener(i, c);
        }
        initialize() {
          return v.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(
              () => this.pulse(),
              C.toMiliseconds(this.interval)
            );
          });
        }
        pulse() {
          this.events.emit(M.HEARTBEAT_EVENTS.pulse);
        }
      };
      c.HeartBeat = HeartBeat;
    },
    90772: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      let v = l(70655);
      v.__exportStar(l(38969), c),
        v.__exportStar(l(1614), c),
        v.__exportStar(l(53401), c);
    },
    44174: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.IHeartBeat = void 0);
      let v = l(30997);
      let IHeartBeat = class IHeartBeat extends v.IEvents {
        constructor(i) {
          super();
        }
      };
      c.IHeartBeat = IHeartBeat;
    },
    1614: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      let v = l(70655);
      v.__exportStar(l(44174), c);
    },
    65727: function (i, c) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.PINO_CUSTOM_CONTEXT_KEY = c.PINO_LOGGER_DEFAULTS = void 0),
        (c.PINO_LOGGER_DEFAULTS = { level: "info" }),
        (c.PINO_CUSTOM_CONTEXT_KEY = "custom_context");
    },
    9107: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }), (c.pino = void 0);
      let v = l(70655),
        E = v.__importDefault(l(67686));
      Object.defineProperty(c, "pino", {
        enumerable: !0,
        get: function () {
          return E.default;
        },
      }),
        v.__exportStar(l(65727), c),
        v.__exportStar(l(58048), c);
    },
    58048: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.generateChildLogger =
          c.formatChildLoggerContext =
          c.getLoggerContext =
          c.setBrowserLoggerContext =
          c.getBrowserLoggerContext =
          c.getDefaultLoggerOptions =
            void 0);
      let v = l(65727);
      function getBrowserLoggerContext(i, c = v.PINO_CUSTOM_CONTEXT_KEY) {
        return i[c] || "";
      }
      function setBrowserLoggerContext(i, c, l = v.PINO_CUSTOM_CONTEXT_KEY) {
        return (i[l] = c), i;
      }
      function getLoggerContext(i, c = v.PINO_CUSTOM_CONTEXT_KEY) {
        return void 0 === i.bindings
          ? getBrowserLoggerContext(i, c)
          : i.bindings().context || "";
      }
      function formatChildLoggerContext(i, c, l = v.PINO_CUSTOM_CONTEXT_KEY) {
        let E = getLoggerContext(i, l),
          C = E.trim() ? `${E}/${c}` : c;
        return C;
      }
      (c.getDefaultLoggerOptions = function (i) {
        return Object.assign(Object.assign({}, i), {
          level: (null == i ? void 0 : i.level) || v.PINO_LOGGER_DEFAULTS.level,
        });
      }),
        (c.getBrowserLoggerContext = getBrowserLoggerContext),
        (c.setBrowserLoggerContext = setBrowserLoggerContext),
        (c.getLoggerContext = getLoggerContext),
        (c.formatChildLoggerContext = formatChildLoggerContext),
        (c.generateChildLogger = function (
          i,
          c,
          l = v.PINO_CUSTOM_CONTEXT_KEY
        ) {
          let E = formatChildLoggerContext(i, c, l),
            C = i.child({ context: E });
          return setBrowserLoggerContext(C, E, l);
        });
    },
    61882: function () {},
    43014: function () {},
    36900: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      let v = l(70655);
      v.__exportStar(l(46869), c), v.__exportStar(l(88033), c);
    },
    46869: function (i, c) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.ONE_THOUSAND = c.ONE_HUNDRED = void 0),
        (c.ONE_HUNDRED = 100),
        (c.ONE_THOUSAND = 1e3);
    },
    88033: function (i, c) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.ONE_YEAR =
          c.FOUR_WEEKS =
          c.THREE_WEEKS =
          c.TWO_WEEKS =
          c.ONE_WEEK =
          c.THIRTY_DAYS =
          c.SEVEN_DAYS =
          c.FIVE_DAYS =
          c.THREE_DAYS =
          c.ONE_DAY =
          c.TWENTY_FOUR_HOURS =
          c.TWELVE_HOURS =
          c.SIX_HOURS =
          c.THREE_HOURS =
          c.ONE_HOUR =
          c.SIXTY_MINUTES =
          c.THIRTY_MINUTES =
          c.TEN_MINUTES =
          c.FIVE_MINUTES =
          c.ONE_MINUTE =
          c.SIXTY_SECONDS =
          c.THIRTY_SECONDS =
          c.TEN_SECONDS =
          c.FIVE_SECONDS =
          c.ONE_SECOND =
            void 0),
        (c.ONE_SECOND = 1),
        (c.FIVE_SECONDS = 5),
        (c.TEN_SECONDS = 10),
        (c.THIRTY_SECONDS = 30),
        (c.SIXTY_SECONDS = 60),
        (c.ONE_MINUTE = c.SIXTY_SECONDS),
        (c.FIVE_MINUTES = 5 * c.ONE_MINUTE),
        (c.TEN_MINUTES = 10 * c.ONE_MINUTE),
        (c.THIRTY_MINUTES = 30 * c.ONE_MINUTE),
        (c.SIXTY_MINUTES = 60 * c.ONE_MINUTE),
        (c.ONE_HOUR = c.SIXTY_MINUTES),
        (c.THREE_HOURS = 3 * c.ONE_HOUR),
        (c.SIX_HOURS = 6 * c.ONE_HOUR),
        (c.TWELVE_HOURS = 12 * c.ONE_HOUR),
        (c.TWENTY_FOUR_HOURS = 24 * c.ONE_HOUR),
        (c.ONE_DAY = c.TWENTY_FOUR_HOURS),
        (c.THREE_DAYS = 3 * c.ONE_DAY),
        (c.FIVE_DAYS = 5 * c.ONE_DAY),
        (c.SEVEN_DAYS = 7 * c.ONE_DAY),
        (c.THIRTY_DAYS = 30 * c.ONE_DAY),
        (c.ONE_WEEK = c.SEVEN_DAYS),
        (c.TWO_WEEKS = 2 * c.ONE_WEEK),
        (c.THREE_WEEKS = 3 * c.ONE_WEEK),
        (c.FOUR_WEEKS = 4 * c.ONE_WEEK),
        (c.ONE_YEAR = 365 * c.ONE_DAY);
    },
    66736: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      let v = l(70655);
      v.__exportStar(l(44273), c),
        v.__exportStar(l(69027), c),
        v.__exportStar(l(52939), c),
        v.__exportStar(l(36900), c);
    },
    52939: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      let v = l(70655);
      v.__exportStar(l(88766), c);
    },
    88766: function (i, c) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.IWatch = void 0),
        (c.IWatch = class {});
    },
    83207: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.fromMiliseconds = c.toMiliseconds = void 0);
      let v = l(36900);
      (c.toMiliseconds = function (i) {
        return i * v.ONE_THOUSAND;
      }),
        (c.fromMiliseconds = function (i) {
          return Math.floor(i / v.ONE_THOUSAND);
        });
    },
    83873: function (i, c) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.delay = void 0),
        (c.delay = function (i) {
          return new Promise((c) => {
            setTimeout(() => {
              c(!0);
            }, i);
          });
        });
    },
    44273: function (i, c, l) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 });
      let v = l(70655);
      v.__exportStar(l(83873), c), v.__exportStar(l(83207), c);
    },
    69027: function (i, c) {
      "use strict";
      Object.defineProperty(c, "__esModule", { value: !0 }), (c.Watch = void 0);
      let Watch = class Watch {
        constructor() {
          this.timestamps = new Map();
        }
        start(i) {
          if (this.timestamps.has(i))
            throw Error(`Watch already started for label: ${i}`);
          this.timestamps.set(i, { started: Date.now() });
        }
        stop(i) {
          let c = this.get(i);
          if (void 0 !== c.elapsed)
            throw Error(`Watch already stopped for label: ${i}`);
          let l = Date.now() - c.started;
          this.timestamps.set(i, { started: c.started, elapsed: l });
        }
        get(i) {
          let c = this.timestamps.get(i);
          if (void 0 === c) throw Error(`No timestamp found for label: ${i}`);
          return c;
        }
        elapsed(i) {
          let c = this.get(i),
            l = c.elapsed || Date.now() - c.started;
          return l;
        }
      };
      (c.Watch = Watch), (c.default = Watch);
    },
    66151: function (i, c, l) {
      "use strict";
      let v = l(70610),
        E = l(16791),
        C = l(80500),
        P = l(92806),
        isNullOrUndefined = (i) => null == i,
        M = Symbol("encodeFragmentIdentifier");
      function validateArrayFormatSeparator(i) {
        if ("string" != typeof i || 1 !== i.length)
          throw TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function encode(i, c) {
        return c.encode ? (c.strict ? v(i) : encodeURIComponent(i)) : i;
      }
      function decode(i, c) {
        return c.decode ? E(i) : i;
      }
      function removeHash(i) {
        let c = i.indexOf("#");
        return -1 !== c && (i = i.slice(0, c)), i;
      }
      function extract(i) {
        i = removeHash(i);
        let c = i.indexOf("?");
        return -1 === c ? "" : i.slice(c + 1);
      }
      function parseValue(i, c) {
        return (
          c.parseNumbers &&
          !Number.isNaN(Number(i)) &&
          "string" == typeof i &&
          "" !== i.trim()
            ? (i = Number(i))
            : c.parseBooleans &&
              null !== i &&
              ("true" === i.toLowerCase() || "false" === i.toLowerCase()) &&
              (i = "true" === i.toLowerCase()),
          i
        );
      }
      function parse(i, c) {
        validateArrayFormatSeparator(
          (c = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            c
          )).arrayFormatSeparator
        );
        let l = (function (i) {
            let c;
            switch (i.arrayFormat) {
              case "index":
                return (i, l, v) => {
                  if (
                    ((c = /\[(\d*)\]$/.exec(i)),
                    (i = i.replace(/\[\d*\]$/, "")),
                    !c)
                  ) {
                    v[i] = l;
                    return;
                  }
                  void 0 === v[i] && (v[i] = {}), (v[i][c[1]] = l);
                };
              case "bracket":
                return (i, l, v) => {
                  if (
                    ((c = /(\[\])$/.exec(i)), (i = i.replace(/\[\]$/, "")), !c)
                  ) {
                    v[i] = l;
                    return;
                  }
                  if (void 0 === v[i]) {
                    v[i] = [l];
                    return;
                  }
                  v[i] = [].concat(v[i], l);
                };
              case "colon-list-separator":
                return (i, l, v) => {
                  if (
                    ((c = /(:list)$/.exec(i)),
                    (i = i.replace(/:list$/, "")),
                    !c)
                  ) {
                    v[i] = l;
                    return;
                  }
                  if (void 0 === v[i]) {
                    v[i] = [l];
                    return;
                  }
                  v[i] = [].concat(v[i], l);
                };
              case "comma":
              case "separator":
                return (c, l, v) => {
                  let E =
                      "string" == typeof l &&
                      l.includes(i.arrayFormatSeparator),
                    C =
                      "string" == typeof l &&
                      !E &&
                      decode(l, i).includes(i.arrayFormatSeparator);
                  l = C ? decode(l, i) : l;
                  let P =
                    E || C
                      ? l.split(i.arrayFormatSeparator).map((c) => decode(c, i))
                      : null === l
                      ? l
                      : decode(l, i);
                  v[c] = P;
                };
              case "bracket-separator":
                return (c, l, v) => {
                  let E = /(\[\])$/.test(c);
                  if (((c = c.replace(/\[\]$/, "")), !E)) {
                    v[c] = l ? decode(l, i) : l;
                    return;
                  }
                  let C =
                    null === l
                      ? []
                      : l
                          .split(i.arrayFormatSeparator)
                          .map((c) => decode(c, i));
                  if (void 0 === v[c]) {
                    v[c] = C;
                    return;
                  }
                  v[c] = [].concat(v[c], C);
                };
              default:
                return (i, c, l) => {
                  if (void 0 === l[i]) {
                    l[i] = c;
                    return;
                  }
                  l[i] = [].concat(l[i], c);
                };
            }
          })(c),
          v = Object.create(null);
        if ("string" != typeof i || !(i = i.trim().replace(/^[?#&]/, "")))
          return v;
        for (let E of i.split("&")) {
          if ("" === E) continue;
          let [i, P] = C(c.decode ? E.replace(/\+/g, " ") : E, "=");
          (P =
            void 0 === P
              ? null
              : ["comma", "separator", "bracket-separator"].includes(
                  c.arrayFormat
                )
              ? P
              : decode(P, c)),
            l(decode(i, c), P, v);
        }
        for (let i of Object.keys(v)) {
          let l = v[i];
          if ("object" == typeof l && null !== l)
            for (let i of Object.keys(l)) l[i] = parseValue(l[i], c);
          else v[i] = parseValue(l, c);
        }
        return !1 === c.sort
          ? v
          : (!0 === c.sort
              ? Object.keys(v).sort()
              : Object.keys(v).sort(c.sort)
            ).reduce((i, c) => {
              let l = v[c];
              return (
                l && "object" == typeof l && !Array.isArray(l)
                  ? (i[c] = (function keysSorter(i) {
                      return Array.isArray(i)
                        ? i.sort()
                        : "object" == typeof i
                        ? keysSorter(Object.keys(i))
                            .sort((i, c) => Number(i) - Number(c))
                            .map((c) => i[c])
                        : i;
                    })(l))
                  : (i[c] = l),
                i
              );
            }, Object.create(null));
      }
      (c.extract = extract),
        (c.parse = parse),
        (c.stringify = (i, c) => {
          if (!i) return "";
          validateArrayFormatSeparator(
            (c = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              c
            )).arrayFormatSeparator
          );
          let shouldFilter = (l) =>
              (c.skipNull && isNullOrUndefined(i[l])) ||
              (c.skipEmptyString && "" === i[l]),
            l = (function (i) {
              switch (i.arrayFormat) {
                case "index":
                  return (c) => (l, v) => {
                    let E = l.length;
                    return void 0 === v ||
                      (i.skipNull && null === v) ||
                      (i.skipEmptyString && "" === v)
                      ? l
                      : null === v
                      ? [...l, [encode(c, i), "[", E, "]"].join("")]
                      : [
                          ...l,
                          [
                            encode(c, i),
                            "[",
                            encode(E, i),
                            "]=",
                            encode(v, i),
                          ].join(""),
                        ];
                  };
                case "bracket":
                  return (c) => (l, v) =>
                    void 0 === v ||
                    (i.skipNull && null === v) ||
                    (i.skipEmptyString && "" === v)
                      ? l
                      : null === v
                      ? [...l, [encode(c, i), "[]"].join("")]
                      : [...l, [encode(c, i), "[]=", encode(v, i)].join("")];
                case "colon-list-separator":
                  return (c) => (l, v) =>
                    void 0 === v ||
                    (i.skipNull && null === v) ||
                    (i.skipEmptyString && "" === v)
                      ? l
                      : null === v
                      ? [...l, [encode(c, i), ":list="].join("")]
                      : [...l, [encode(c, i), ":list=", encode(v, i)].join("")];
                case "comma":
                case "separator":
                case "bracket-separator": {
                  let c = "bracket-separator" === i.arrayFormat ? "[]=" : "=";
                  return (l) => (v, E) =>
                    void 0 === E ||
                    (i.skipNull && null === E) ||
                    (i.skipEmptyString && "" === E)
                      ? v
                      : ((E = null === E ? "" : E), 0 === v.length)
                      ? [[encode(l, i), c, encode(E, i)].join("")]
                      : [[v, encode(E, i)].join(i.arrayFormatSeparator)];
                }
                default:
                  return (c) => (l, v) =>
                    void 0 === v ||
                    (i.skipNull && null === v) ||
                    (i.skipEmptyString && "" === v)
                      ? l
                      : null === v
                      ? [...l, encode(c, i)]
                      : [...l, [encode(c, i), "=", encode(v, i)].join("")];
              }
            })(c),
            v = {};
          for (let c of Object.keys(i)) shouldFilter(c) || (v[c] = i[c]);
          let E = Object.keys(v);
          return (
            !1 !== c.sort && E.sort(c.sort),
            E.map((v) => {
              let E = i[v];
              return void 0 === E
                ? ""
                : null === E
                ? encode(v, c)
                : Array.isArray(E)
                ? 0 === E.length && "bracket-separator" === c.arrayFormat
                  ? encode(v, c) + "[]"
                  : E.reduce(l(v), []).join("&")
                : encode(v, c) + "=" + encode(E, c);
            })
              .filter((i) => i.length > 0)
              .join("&")
          );
        }),
        (c.parseUrl = (i, c) => {
          c = Object.assign({ decode: !0 }, c);
          let [l, v] = C(i, "#");
          return Object.assign(
            { url: l.split("?")[0] || "", query: parse(extract(i), c) },
            c && c.parseFragmentIdentifier && v
              ? { fragmentIdentifier: decode(v, c) }
              : {}
          );
        }),
        (c.stringifyUrl = (i, l) => {
          l = Object.assign({ encode: !0, strict: !0, [M]: !0 }, l);
          let v = removeHash(i.url).split("?")[0] || "",
            E = c.extract(i.url),
            C = c.parse(E, { sort: !1 }),
            P = Object.assign(C, i.query),
            B = c.stringify(P, l);
          B && (B = `?${B}`);
          let W = (function (i) {
            let c = "",
              l = i.indexOf("#");
            return -1 !== l && (c = i.slice(l)), c;
          })(i.url);
          return (
            i.fragmentIdentifier &&
              (W = `#${
                l[M] ? encode(i.fragmentIdentifier, l) : i.fragmentIdentifier
              }`),
            `${v}${B}${W}`
          );
        }),
        (c.pick = (i, l, v) => {
          v = Object.assign({ parseFragmentIdentifier: !0, [M]: !1 }, v);
          let { url: E, query: C, fragmentIdentifier: B } = c.parseUrl(i, v);
          return c.stringifyUrl(
            { url: E, query: P(C, l), fragmentIdentifier: B },
            v
          );
        }),
        (c.exclude = (i, l, v) => {
          let E = Array.isArray(l) ? (i) => !l.includes(i) : (i, c) => !l(i, c);
          return c.pick(i, E, v);
        });
    },
    62873: function (i, c) {
      "use strict";
      function getFromWindow(i) {
        let c;
        return (
          "undefined" != typeof window &&
            void 0 !== window[i] &&
            (c = window[i]),
          c
        );
      }
      function getFromWindowOrThrow(i) {
        let c = getFromWindow(i);
        if (!c) throw Error(`${i} is not defined in Window`);
        return c;
      }
      Object.defineProperty(c, "__esModule", { value: !0 }),
        (c.getLocalStorage =
          c.getLocalStorageOrThrow =
          c.getCrypto =
          c.getCryptoOrThrow =
          c.getLocation =
          c.getLocationOrThrow =
          c.getNavigator =
          c.getNavigatorOrThrow =
          c.getDocument =
          c.getDocumentOrThrow =
          c.getFromWindowOrThrow =
          c.getFromWindow =
            void 0),
        (c.getFromWindow = getFromWindow),
        (c.getFromWindowOrThrow = getFromWindowOrThrow),
        (c.getDocumentOrThrow = function () {
          return getFromWindowOrThrow("document");
        }),
        (c.getDocument = function () {
          return getFromWindow("document");
        }),
        (c.getNavigatorOrThrow = function () {
          return getFromWindowOrThrow("navigator");
        }),
        (c.getNavigator = function () {
          return getFromWindow("navigator");
        }),
        (c.getLocationOrThrow = function () {
          return getFromWindowOrThrow("location");
        }),
        (c.getLocation = function () {
          return getFromWindow("location");
        }),
        (c.getCryptoOrThrow = function () {
          return getFromWindowOrThrow("crypto");
        }),
        (c.getCrypto = function () {
          return getFromWindow("crypto");
        }),
        (c.getLocalStorageOrThrow = function () {
          return getFromWindowOrThrow("localStorage");
        }),
        (c.getLocalStorage = function () {
          return getFromWindow("localStorage");
        });
    },
    65755: function (i, c, l) {
      "use strict";
      c.D = void 0;
      let v = l(62873);
      c.D = function () {
        let i, c, l;
        try {
          (i = v.getDocumentOrThrow()), (c = v.getLocationOrThrow());
        } catch (i) {
          return null;
        }
        function getWindowMetadataOfAny(...c) {
          let l = i.getElementsByTagName("meta");
          for (let i = 0; i < l.length; i++) {
            let v = l[i],
              E = ["itemprop", "property", "name"]
                .map((i) => v.getAttribute(i))
                .filter((i) => !!i && c.includes(i));
            if (E.length && E) {
              let i = v.getAttribute("content");
              if (i) return i;
            }
          }
          return "";
        }
        let E =
            ((l = getWindowMetadataOfAny(
              "name",
              "og:site_name",
              "og:title",
              "twitter:title"
            )) || (l = i.title),
            l),
          C = (function () {
            let i = getWindowMetadataOfAny(
              "description",
              "og:description",
              "twitter:description",
              "keywords"
            );
            return i;
          })(),
          P = c.origin,
          M = (function () {
            let l = i.getElementsByTagName("link"),
              v = [];
            for (let i = 0; i < l.length; i++) {
              let E = l[i],
                C = E.getAttribute("rel");
              if (C && C.toLowerCase().indexOf("icon") > -1) {
                let i = E.getAttribute("href");
                if (i) {
                  if (
                    -1 === i.toLowerCase().indexOf("https:") &&
                    -1 === i.toLowerCase().indexOf("http:") &&
                    0 !== i.indexOf("//")
                  ) {
                    let l = c.protocol + "//" + c.host;
                    if (0 === i.indexOf("/")) l += i;
                    else {
                      let v = c.pathname.split("/");
                      v.pop();
                      let E = v.join("/");
                      l += E + "/" + i;
                    }
                    v.push(l);
                  } else if (0 === i.indexOf("//")) {
                    let l = c.protocol + i;
                    v.push(l);
                  } else v.push(i);
                }
              }
            }
            return v;
          })();
        return { description: C, url: P, icons: M, name: E };
      };
    },
    54098: function (i, c) {
      var l = "undefined" != typeof self ? self : this,
        v = (function () {
          function F() {
            (this.fetch = !1), (this.DOMException = l.DOMException);
          }
          return (F.prototype = l), new F();
        })();
      (function (i) {
        var c = {
          searchParams: "URLSearchParams" in v,
          iterable: "Symbol" in v && "iterator" in Symbol,
          blob:
            "FileReader" in v &&
            "Blob" in v &&
            (function () {
              try {
                return new Blob(), !0;
              } catch (i) {
                return !1;
              }
            })(),
          formData: "FormData" in v,
          arrayBuffer: "ArrayBuffer" in v,
        };
        if (c.arrayBuffer)
          var l = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ],
            E =
              ArrayBuffer.isView ||
              function (i) {
                return i && l.indexOf(Object.prototype.toString.call(i)) > -1;
              };
        function normalizeName(i) {
          if (
            ("string" != typeof i && (i = String(i)),
            /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(i))
          )
            throw TypeError("Invalid character in header field name");
          return i.toLowerCase();
        }
        function normalizeValue(i) {
          return "string" != typeof i && (i = String(i)), i;
        }
        function iteratorFor(i) {
          var l = {
            next: function () {
              var c = i.shift();
              return { done: void 0 === c, value: c };
            },
          };
          return (
            c.iterable &&
              (l[Symbol.iterator] = function () {
                return l;
              }),
            l
          );
        }
        function Headers(i) {
          (this.map = {}),
            i instanceof Headers
              ? i.forEach(function (i, c) {
                  this.append(c, i);
                }, this)
              : Array.isArray(i)
              ? i.forEach(function (i) {
                  this.append(i[0], i[1]);
                }, this)
              : i &&
                Object.getOwnPropertyNames(i).forEach(function (c) {
                  this.append(c, i[c]);
                }, this);
        }
        function consumed(i) {
          if (i.bodyUsed) return Promise.reject(TypeError("Already read"));
          i.bodyUsed = !0;
        }
        function fileReaderReady(i) {
          return new Promise(function (c, l) {
            (i.onload = function () {
              c(i.result);
            }),
              (i.onerror = function () {
                l(i.error);
              });
          });
        }
        function readBlobAsArrayBuffer(i) {
          var c = new FileReader(),
            l = fileReaderReady(c);
          return c.readAsArrayBuffer(i), l;
        }
        function bufferClone(i) {
          if (i.slice) return i.slice(0);
          var c = new Uint8Array(i.byteLength);
          return c.set(new Uint8Array(i)), c.buffer;
        }
        function Body() {
          return (
            (this.bodyUsed = !1),
            (this._initBody = function (i) {
              if (((this._bodyInit = i), i)) {
                if ("string" == typeof i) this._bodyText = i;
                else if (c.blob && Blob.prototype.isPrototypeOf(i))
                  this._bodyBlob = i;
                else if (c.formData && FormData.prototype.isPrototypeOf(i))
                  this._bodyFormData = i;
                else if (
                  c.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(i)
                )
                  this._bodyText = i.toString();
                else {
                  var l;
                  c.arrayBuffer &&
                  c.blob &&
                  (l = i) &&
                  DataView.prototype.isPrototypeOf(l)
                    ? ((this._bodyArrayBuffer = bufferClone(i.buffer)),
                      (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                    : c.arrayBuffer &&
                      (ArrayBuffer.prototype.isPrototypeOf(i) || E(i))
                    ? (this._bodyArrayBuffer = bufferClone(i))
                    : (this._bodyText = i = Object.prototype.toString.call(i));
                }
              } else this._bodyText = "";
              !this.headers.get("content-type") &&
                ("string" == typeof i
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : c.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(i) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
            }),
            c.blob &&
              ((this.blob = function () {
                var i = consumed(this);
                if (i) return i;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (!this._bodyFormData)
                  return Promise.resolve(new Blob([this._bodyText]));
                throw Error("could not read FormData body as blob");
              }),
              (this.arrayBuffer = function () {
                return this._bodyArrayBuffer
                  ? consumed(this) || Promise.resolve(this._bodyArrayBuffer)
                  : this.blob().then(readBlobAsArrayBuffer);
              })),
            (this.text = function () {
              var i,
                c,
                l,
                v = consumed(this);
              if (v) return v;
              if (this._bodyBlob)
                return (
                  (i = this._bodyBlob),
                  (l = fileReaderReady((c = new FileReader()))),
                  c.readAsText(i),
                  l
                );
              if (this._bodyArrayBuffer)
                return Promise.resolve(
                  (function (i) {
                    for (
                      var c = new Uint8Array(i), l = Array(c.length), v = 0;
                      v < c.length;
                      v++
                    )
                      l[v] = String.fromCharCode(c[v]);
                    return l.join("");
                  })(this._bodyArrayBuffer)
                );
              if (!this._bodyFormData) return Promise.resolve(this._bodyText);
              throw Error("could not read FormData body as text");
            }),
            c.formData &&
              (this.formData = function () {
                return this.text().then(decode);
              }),
            (this.json = function () {
              return this.text().then(JSON.parse);
            }),
            this
          );
        }
        (Headers.prototype.append = function (i, c) {
          (i = normalizeName(i)), (c = normalizeValue(c));
          var l = this.map[i];
          this.map[i] = l ? l + ", " + c : c;
        }),
          (Headers.prototype.delete = function (i) {
            delete this.map[normalizeName(i)];
          }),
          (Headers.prototype.get = function (i) {
            return (i = normalizeName(i)), this.has(i) ? this.map[i] : null;
          }),
          (Headers.prototype.has = function (i) {
            return this.map.hasOwnProperty(normalizeName(i));
          }),
          (Headers.prototype.set = function (i, c) {
            this.map[normalizeName(i)] = normalizeValue(c);
          }),
          (Headers.prototype.forEach = function (i, c) {
            for (var l in this.map)
              this.map.hasOwnProperty(l) && i.call(c, this.map[l], l, this);
          }),
          (Headers.prototype.keys = function () {
            var i = [];
            return (
              this.forEach(function (c, l) {
                i.push(l);
              }),
              iteratorFor(i)
            );
          }),
          (Headers.prototype.values = function () {
            var i = [];
            return (
              this.forEach(function (c) {
                i.push(c);
              }),
              iteratorFor(i)
            );
          }),
          (Headers.prototype.entries = function () {
            var i = [];
            return (
              this.forEach(function (c, l) {
                i.push([l, c]);
              }),
              iteratorFor(i)
            );
          }),
          c.iterable &&
            (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
        var C = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        function Request(i, c) {
          var l,
            v,
            E = (c = c || {}).body;
          if (i instanceof Request) {
            if (i.bodyUsed) throw TypeError("Already read");
            (this.url = i.url),
              (this.credentials = i.credentials),
              c.headers || (this.headers = new Headers(i.headers)),
              (this.method = i.method),
              (this.mode = i.mode),
              (this.signal = i.signal),
              E ||
                null == i._bodyInit ||
                ((E = i._bodyInit), (i.bodyUsed = !0));
          } else this.url = String(i);
          if (
            ((this.credentials =
              c.credentials || this.credentials || "same-origin"),
            (c.headers || !this.headers) &&
              (this.headers = new Headers(c.headers)),
            (this.method =
              ((v = (l = c.method || this.method || "GET").toUpperCase()),
              C.indexOf(v) > -1 ? v : l)),
            (this.mode = c.mode || this.mode || null),
            (this.signal = c.signal || this.signal),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && E)
          )
            throw TypeError("Body not allowed for GET or HEAD requests");
          this._initBody(E);
        }
        function decode(i) {
          var c = new FormData();
          return (
            i
              .trim()
              .split("&")
              .forEach(function (i) {
                if (i) {
                  var l = i.split("="),
                    v = l.shift().replace(/\+/g, " "),
                    E = l.join("=").replace(/\+/g, " ");
                  c.append(decodeURIComponent(v), decodeURIComponent(E));
                }
              }),
            c
          );
        }
        function Response(i, c) {
          c || (c = {}),
            (this.type = "default"),
            (this.status = void 0 === c.status ? 200 : c.status),
            (this.ok = this.status >= 200 && this.status < 300),
            (this.statusText = "statusText" in c ? c.statusText : "OK"),
            (this.headers = new Headers(c.headers)),
            (this.url = c.url || ""),
            this._initBody(i);
        }
        (Request.prototype.clone = function () {
          return new Request(this, { body: this._bodyInit });
        }),
          Body.call(Request.prototype),
          Body.call(Response.prototype),
          (Response.prototype.clone = function () {
            return new Response(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new Headers(this.headers),
              url: this.url,
            });
          }),
          (Response.error = function () {
            var i = new Response(null, { status: 0, statusText: "" });
            return (i.type = "error"), i;
          });
        var P = [301, 302, 303, 307, 308];
        (Response.redirect = function (i, c) {
          if (-1 === P.indexOf(c)) throw RangeError("Invalid status code");
          return new Response(null, { status: c, headers: { location: i } });
        }),
          (i.DOMException = v.DOMException);
        try {
          new i.DOMException();
        } catch (c) {
          (i.DOMException = function (i, c) {
            (this.message = i), (this.name = c);
            var l = Error(i);
            this.stack = l.stack;
          }),
            (i.DOMException.prototype = Object.create(Error.prototype)),
            (i.DOMException.prototype.constructor = i.DOMException);
        }
        function fetch(l, v) {
          return new Promise(function (E, C) {
            var P = new Request(l, v);
            if (P.signal && P.signal.aborted)
              return C(new i.DOMException("Aborted", "AbortError"));
            var M = new XMLHttpRequest();
            function abortXhr() {
              M.abort();
            }
            (M.onload = function () {
              var i,
                c,
                l = {
                  status: M.status,
                  statusText: M.statusText,
                  headers:
                    ((i = M.getAllResponseHeaders() || ""),
                    (c = new Headers()),
                    i
                      .replace(/\r?\n[\t ]+/g, " ")
                      .split(/\r?\n/)
                      .forEach(function (i) {
                        var l = i.split(":"),
                          v = l.shift().trim();
                        if (v) {
                          var E = l.join(":").trim();
                          c.append(v, E);
                        }
                      }),
                    c),
                };
              l.url =
                "responseURL" in M
                  ? M.responseURL
                  : l.headers.get("X-Request-URL");
              var v = "response" in M ? M.response : M.responseText;
              E(new Response(v, l));
            }),
              (M.onerror = function () {
                C(TypeError("Network request failed"));
              }),
              (M.ontimeout = function () {
                C(TypeError("Network request failed"));
              }),
              (M.onabort = function () {
                C(new i.DOMException("Aborted", "AbortError"));
              }),
              M.open(P.method, P.url, !0),
              "include" === P.credentials
                ? (M.withCredentials = !0)
                : "omit" === P.credentials && (M.withCredentials = !1),
              "responseType" in M && c.blob && (M.responseType = "blob"),
              P.headers.forEach(function (i, c) {
                M.setRequestHeader(c, i);
              }),
              P.signal &&
                (P.signal.addEventListener("abort", abortXhr),
                (M.onreadystatechange = function () {
                  4 === M.readyState &&
                    P.signal.removeEventListener("abort", abortXhr);
                })),
              M.send(void 0 === P._bodyInit ? null : P._bodyInit);
          });
        }
        (fetch.polyfill = !0),
          v.fetch ||
            ((v.fetch = fetch),
            (v.Headers = Headers),
            (v.Request = Request),
            (v.Response = Response)),
          (i.Headers = Headers),
          (i.Request = Request),
          (i.Response = Response),
          (i.fetch = fetch),
          Object.defineProperty(i, "__esModule", { value: !0 });
      })({}),
        (v.fetch.ponyfill = !0),
        delete v.fetch.polyfill,
        ((c = v.fetch).default = v.fetch),
        (c.fetch = v.fetch),
        (c.Headers = v.Headers),
        (c.Request = v.Request),
        (c.Response = v.Response),
        (i.exports = c);
    },
    16791: function (i) {
      "use strict";
      var c = "%[a-f0-9]{2}",
        l = RegExp("(" + c + ")|([^%]+?)", "gi"),
        v = RegExp("(" + c + ")+", "gi");
      i.exports = function (i) {
        if ("string" != typeof i)
          throw TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof i +
              "`"
          );
        try {
          return (i = i.replace(/\+/g, " ")), decodeURIComponent(i);
        } catch (c) {
          return (function (i) {
            for (
              var c = { "%FE%FF": "��", "%FF%FE": "��" }, E = v.exec(i);
              E;

            ) {
              try {
                c[E[0]] = decodeURIComponent(E[0]);
              } catch (i) {
                var C = (function (i) {
                  try {
                    return decodeURIComponent(i);
                  } catch (E) {
                    for (var c = i.match(l) || [], v = 1; v < c.length; v++)
                      c =
                        (i = (function decodeComponents(i, c) {
                          try {
                            return [decodeURIComponent(i.join(""))];
                          } catch (i) {}
                          if (1 === i.length) return i;
                          c = c || 1;
                          var l = i.slice(0, c),
                            v = i.slice(c);
                          return Array.prototype.concat.call(
                            [],
                            decodeComponents(l),
                            decodeComponents(v)
                          );
                        })(c, v).join("")).match(l) || [];
                    return i;
                  }
                })(E[0]);
                C !== E[0] && (c[E[0]] = C);
              }
              E = v.exec(i);
            }
            c["%C2"] = "�";
            for (var P = Object.keys(c), M = 0; M < P.length; M++) {
              var B = P[M];
              i = i.replace(RegExp(B, "g"), c[B]);
            }
            return i;
          })(i);
        }
      };
    },
    92806: function (i) {
      "use strict";
      i.exports = function (i, c) {
        for (
          var l = {}, v = Object.keys(i), E = Array.isArray(c), C = 0;
          C < v.length;
          C++
        ) {
          var P = v[C],
            M = i[P];
          (E ? -1 !== c.indexOf(P) : c(P, M, i)) && (l[P] = M);
        }
        return l;
      };
    },
    72307: function (i, c, l) {
      i = l.nmd(i);
      var v,
        E,
        C,
        P = "__lodash_hash_undefined__",
        M = "[object Arguments]",
        B = "[object Array]",
        W = "[object Boolean]",
        J = "[object Date]",
        X = "[object Error]",
        Q = "[object Function]",
        er = "[object Map]",
        es = "[object Number]",
        eo = "[object Object]",
        ea = "[object Promise]",
        ec = "[object RegExp]",
        el = "[object Set]",
        eh = "[object String]",
        ed = "[object WeakMap]",
        ep = "[object ArrayBuffer]",
        eg = "[object DataView]",
        e_ = /^\[object .+?Constructor\]$/,
        ey = /^(?:0|[1-9]\d*)$/,
        ev = {};
      (ev["[object Float32Array]"] =
        ev["[object Float64Array]"] =
        ev["[object Int8Array]"] =
        ev["[object Int16Array]"] =
        ev["[object Int32Array]"] =
        ev["[object Uint8Array]"] =
        ev["[object Uint8ClampedArray]"] =
        ev["[object Uint16Array]"] =
        ev["[object Uint32Array]"] =
          !0),
        (ev[M] =
          ev[B] =
          ev[ep] =
          ev[W] =
          ev[eg] =
          ev[J] =
          ev[X] =
          ev[Q] =
          ev[er] =
          ev[es] =
          ev[eo] =
          ev[ec] =
          ev[el] =
          ev[eh] =
          ev[ed] =
            !1);
      var em = "object" == typeof l.g && l.g && l.g.Object === Object && l.g,
        eb = "object" == typeof self && self && self.Object === Object && self,
        ew = em || eb || Function("return this")(),
        eE = c && !c.nodeType && c,
        eD = eE && i && !i.nodeType && i,
        eS = eD && eD.exports === eE,
        eI = eS && em.process,
        ex = (function () {
          try {
            return eI && eI.binding && eI.binding("util");
          } catch (i) {}
        })(),
        eC = ex && ex.isTypedArray;
      function mapToArray(i) {
        var c = -1,
          l = Array(i.size);
        return (
          i.forEach(function (i, v) {
            l[++c] = [v, i];
          }),
          l
        );
      }
      function setToArray(i) {
        var c = -1,
          l = Array(i.size);
        return (
          i.forEach(function (i) {
            l[++c] = i;
          }),
          l
        );
      }
      var eO = Array.prototype,
        eP = Function.prototype,
        eA = Object.prototype,
        eR = ew["__core-js_shared__"],
        eN = eP.toString,
        eT = eA.hasOwnProperty,
        eU = (v = /[^.]+$/.exec((eR && eR.keys && eR.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + v
          : "",
        ej = eA.toString,
        eL = RegExp(
          "^" +
            eN
              .call(eT)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        eM = eS ? ew.Buffer : void 0,
        ek = ew.Symbol,
        ez = ew.Uint8Array,
        e$ = eA.propertyIsEnumerable,
        eH = eO.splice,
        eB = ek ? ek.toStringTag : void 0,
        eF = Object.getOwnPropertySymbols,
        eK = eM ? eM.isBuffer : void 0,
        eV =
          ((E = Object.keys),
          (C = Object),
          function (i) {
            return E(C(i));
          }),
        eW = getNative(ew, "DataView"),
        eJ = getNative(ew, "Map"),
        eG = getNative(ew, "Promise"),
        eY = getNative(ew, "Set"),
        eX = getNative(ew, "WeakMap"),
        eZ = getNative(Object, "create"),
        eQ = toSource(eW),
        e0 = toSource(eJ),
        e1 = toSource(eG),
        e5 = toSource(eY),
        e3 = toSource(eX),
        e6 = ek ? ek.prototype : void 0,
        e2 = e6 ? e6.valueOf : void 0;
      function Hash(i) {
        var c = -1,
          l = null == i ? 0 : i.length;
        for (this.clear(); ++c < l; ) {
          var v = i[c];
          this.set(v[0], v[1]);
        }
      }
      function ListCache(i) {
        var c = -1,
          l = null == i ? 0 : i.length;
        for (this.clear(); ++c < l; ) {
          var v = i[c];
          this.set(v[0], v[1]);
        }
      }
      function MapCache(i) {
        var c = -1,
          l = null == i ? 0 : i.length;
        for (this.clear(); ++c < l; ) {
          var v = i[c];
          this.set(v[0], v[1]);
        }
      }
      function SetCache(i) {
        var c = -1,
          l = null == i ? 0 : i.length;
        for (this.__data__ = new MapCache(); ++c < l; ) this.add(i[c]);
      }
      function Stack(i) {
        var c = (this.__data__ = new ListCache(i));
        this.size = c.size;
      }
      function assocIndexOf(i, c) {
        for (var l = i.length; l--; ) if (eq(i[l][0], c)) return l;
        return -1;
      }
      function baseGetTag(i) {
        return null == i
          ? void 0 === i
            ? "[object Undefined]"
            : "[object Null]"
          : eB && eB in Object(i)
          ? (function (i) {
              var c = eT.call(i, eB),
                l = i[eB];
              try {
                i[eB] = void 0;
                var v = !0;
              } catch (i) {}
              var E = ej.call(i);
              return v && (c ? (i[eB] = l) : delete i[eB]), E;
            })(i)
          : ej.call(i);
      }
      function baseIsArguments(i) {
        return isObjectLike(i) && baseGetTag(i) == M;
      }
      function equalArrays(i, c, l, v, E, C) {
        var P = 1 & l,
          M = i.length,
          B = c.length;
        if (M != B && !(P && B > M)) return !1;
        var W = C.get(i);
        if (W && C.get(c)) return W == c;
        var J = -1,
          X = !0,
          Q = 2 & l ? new SetCache() : void 0;
        for (C.set(i, c), C.set(c, i); ++J < M; ) {
          var er = i[J],
            es = c[J];
          if (v) var eo = P ? v(es, er, J, c, i, C) : v(er, es, J, i, c, C);
          if (void 0 !== eo) {
            if (eo) continue;
            X = !1;
            break;
          }
          if (Q) {
            if (
              !(function (i, c) {
                for (var l = -1, v = null == i ? 0 : i.length; ++l < v; )
                  if (c(i[l], l, i)) return !0;
                return !1;
              })(c, function (i, c) {
                if (!Q.has(c) && (er === i || E(er, i, l, v, C)))
                  return Q.push(c);
              })
            ) {
              X = !1;
              break;
            }
          } else if (!(er === es || E(er, es, l, v, C))) {
            X = !1;
            break;
          }
        }
        return C.delete(i), C.delete(c), X;
      }
      function getAllKeys(i) {
        var c;
        return (
          (c = (function (i) {
            return null != i && isLength(i.length) && !isFunction(i)
              ? (function (i, c) {
                  var l,
                    v = e7(i),
                    E = !v && e9(i),
                    C = !v && !E && tn(i),
                    P = !v && !E && !C && ts(i),
                    M = v || E || C || P,
                    B = M
                      ? (function (i, c) {
                          for (var l = -1, v = Array(i); ++l < i; ) v[l] = c(l);
                          return v;
                        })(i.length, String)
                      : [],
                    W = B.length;
                  for (var J in i)
                    eT.call(i, J) &&
                      !(
                        M &&
                        ("length" == J ||
                          (C && ("offset" == J || "parent" == J)) ||
                          (P &&
                            ("buffer" == J ||
                              "byteLength" == J ||
                              "byteOffset" == J)) ||
                          ((l = null == (l = W) ? 9007199254740991 : l) &&
                            ("number" == typeof J || ey.test(J)) &&
                            J > -1 &&
                            J % 1 == 0 &&
                            J < l))
                      ) &&
                      B.push(J);
                  return B;
                })(i)
              : (function (i) {
                  if (
                    ((c = i && i.constructor),
                    i !== (("function" == typeof c && c.prototype) || eA))
                  )
                    return eV(i);
                  var c,
                    l = [];
                  for (var v in Object(i))
                    eT.call(i, v) && "constructor" != v && l.push(v);
                  return l;
                })(i);
          })(i)),
          e7(i)
            ? c
            : (function (i, c) {
                for (var l = -1, v = c.length, E = i.length; ++l < v; )
                  i[E + l] = c[l];
                return i;
              })(c, e8(i))
        );
      }
      function getMapData(i, c) {
        var l,
          v = i.__data__;
        return (
          "string" == (l = typeof c) ||
          "number" == l ||
          "symbol" == l ||
          "boolean" == l
            ? "__proto__" !== c
            : null === c
        )
          ? v["string" == typeof c ? "string" : "hash"]
          : v.map;
      }
      function getNative(i, c) {
        var l = null == i ? void 0 : i[c];
        return !(!isObject(l) || (eU && eU in l)) &&
          (isFunction(l) ? eL : e_).test(toSource(l))
          ? l
          : void 0;
      }
      (Hash.prototype.clear = function () {
        (this.__data__ = eZ ? eZ(null) : {}), (this.size = 0);
      }),
        (Hash.prototype.delete = function (i) {
          var c = this.has(i) && delete this.__data__[i];
          return (this.size -= c ? 1 : 0), c;
        }),
        (Hash.prototype.get = function (i) {
          var c = this.__data__;
          if (eZ) {
            var l = c[i];
            return l === P ? void 0 : l;
          }
          return eT.call(c, i) ? c[i] : void 0;
        }),
        (Hash.prototype.has = function (i) {
          var c = this.__data__;
          return eZ ? void 0 !== c[i] : eT.call(c, i);
        }),
        (Hash.prototype.set = function (i, c) {
          var l = this.__data__;
          return (
            (this.size += this.has(i) ? 0 : 1),
            (l[i] = eZ && void 0 === c ? P : c),
            this
          );
        }),
        (ListCache.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (ListCache.prototype.delete = function (i) {
          var c = this.__data__,
            l = assocIndexOf(c, i);
          return (
            !(l < 0) &&
            (l == c.length - 1 ? c.pop() : eH.call(c, l, 1), --this.size, !0)
          );
        }),
        (ListCache.prototype.get = function (i) {
          var c = this.__data__,
            l = assocIndexOf(c, i);
          return l < 0 ? void 0 : c[l][1];
        }),
        (ListCache.prototype.has = function (i) {
          return assocIndexOf(this.__data__, i) > -1;
        }),
        (ListCache.prototype.set = function (i, c) {
          var l = this.__data__,
            v = assocIndexOf(l, i);
          return v < 0 ? (++this.size, l.push([i, c])) : (l[v][1] = c), this;
        }),
        (MapCache.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new Hash(),
              map: new (eJ || ListCache)(),
              string: new Hash(),
            });
        }),
        (MapCache.prototype.delete = function (i) {
          var c = getMapData(this, i).delete(i);
          return (this.size -= c ? 1 : 0), c;
        }),
        (MapCache.prototype.get = function (i) {
          return getMapData(this, i).get(i);
        }),
        (MapCache.prototype.has = function (i) {
          return getMapData(this, i).has(i);
        }),
        (MapCache.prototype.set = function (i, c) {
          var l = getMapData(this, i),
            v = l.size;
          return l.set(i, c), (this.size += l.size == v ? 0 : 1), this;
        }),
        (SetCache.prototype.add = SetCache.prototype.push =
          function (i) {
            return this.__data__.set(i, P), this;
          }),
        (SetCache.prototype.has = function (i) {
          return this.__data__.has(i);
        }),
        (Stack.prototype.clear = function () {
          (this.__data__ = new ListCache()), (this.size = 0);
        }),
        (Stack.prototype.delete = function (i) {
          var c = this.__data__,
            l = c.delete(i);
          return (this.size = c.size), l;
        }),
        (Stack.prototype.get = function (i) {
          return this.__data__.get(i);
        }),
        (Stack.prototype.has = function (i) {
          return this.__data__.has(i);
        }),
        (Stack.prototype.set = function (i, c) {
          var l = this.__data__;
          if (l instanceof ListCache) {
            var v = l.__data__;
            if (!eJ || v.length < 199)
              return v.push([i, c]), (this.size = ++l.size), this;
            l = this.__data__ = new MapCache(v);
          }
          return l.set(i, c), (this.size = l.size), this;
        });
      var e8 = eF
          ? function (i) {
              return null == i
                ? []
                : (function (i, c) {
                    for (
                      var l = -1, v = null == i ? 0 : i.length, E = 0, C = [];
                      ++l < v;

                    ) {
                      var P = i[l];
                      c(P, l, i) && (C[E++] = P);
                    }
                    return C;
                  })(eF((i = Object(i))), function (c) {
                    return e$.call(i, c);
                  });
            }
          : function () {
              return [];
            },
        e4 = baseGetTag;
      function toSource(i) {
        if (null != i) {
          try {
            return eN.call(i);
          } catch (i) {}
          try {
            return i + "";
          } catch (i) {}
        }
        return "";
      }
      function eq(i, c) {
        return i === c || (i != i && c != c);
      }
      ((eW && e4(new eW(new ArrayBuffer(1))) != eg) ||
        (eJ && e4(new eJ()) != er) ||
        (eG && e4(eG.resolve()) != ea) ||
        (eY && e4(new eY()) != el) ||
        (eX && e4(new eX()) != ed)) &&
        (e4 = function (i) {
          var c = baseGetTag(i),
            l = c == eo ? i.constructor : void 0,
            v = l ? toSource(l) : "";
          if (v)
            switch (v) {
              case eQ:
                return eg;
              case e0:
                return er;
              case e1:
                return ea;
              case e5:
                return el;
              case e3:
                return ed;
            }
          return c;
        });
      var e9 = baseIsArguments(
          (function () {
            return arguments;
          })()
        )
          ? baseIsArguments
          : function (i) {
              return (
                isObjectLike(i) && eT.call(i, "callee") && !e$.call(i, "callee")
              );
            },
        e7 = Array.isArray,
        tn =
          eK ||
          function () {
            return !1;
          };
      function isFunction(i) {
        if (!isObject(i)) return !1;
        var c = baseGetTag(i);
        return (
          c == Q ||
          "[object GeneratorFunction]" == c ||
          "[object AsyncFunction]" == c ||
          "[object Proxy]" == c
        );
      }
      function isLength(i) {
        return (
          "number" == typeof i && i > -1 && i % 1 == 0 && i <= 9007199254740991
        );
      }
      function isObject(i) {
        var c = typeof i;
        return null != i && ("object" == c || "function" == c);
      }
      function isObjectLike(i) {
        return null != i && "object" == typeof i;
      }
      var ts = eC
        ? function (i) {
            return eC(i);
          }
        : function (i) {
            return isObjectLike(i) && isLength(i.length) && !!ev[baseGetTag(i)];
          };
      i.exports = function (i, c) {
        return (function baseIsEqual(i, c, l, v, E) {
          return (
            i === c ||
            (null != i && null != c && (isObjectLike(i) || isObjectLike(c))
              ? (function (i, c, l, v, E, C) {
                  var P = e7(i),
                    Q = e7(c),
                    ea = P ? B : e4(i),
                    ed = Q ? B : e4(c);
                  (ea = ea == M ? eo : ea), (ed = ed == M ? eo : ed);
                  var e_ = ea == eo,
                    ey = ed == eo,
                    ev = ea == ed;
                  if (ev && tn(i)) {
                    if (!tn(c)) return !1;
                    (P = !0), (e_ = !1);
                  }
                  if (ev && !e_)
                    return (
                      C || (C = new Stack()),
                      P || ts(i)
                        ? equalArrays(i, c, l, v, E, C)
                        : (function (i, c, l, v, E, C, P) {
                            switch (l) {
                              case eg:
                                if (
                                  i.byteLength != c.byteLength ||
                                  i.byteOffset != c.byteOffset
                                )
                                  break;
                                (i = i.buffer), (c = c.buffer);
                              case ep:
                                if (
                                  i.byteLength != c.byteLength ||
                                  !C(new ez(i), new ez(c))
                                )
                                  break;
                                return !0;
                              case W:
                              case J:
                              case es:
                                return eq(+i, +c);
                              case X:
                                return (
                                  i.name == c.name && i.message == c.message
                                );
                              case ec:
                              case eh:
                                return i == c + "";
                              case er:
                                var M = mapToArray;
                              case el:
                                var B = 1 & v;
                                if (
                                  (M || (M = setToArray),
                                  i.size != c.size && !B)
                                )
                                  break;
                                var Q = P.get(i);
                                if (Q) return Q == c;
                                (v |= 2), P.set(i, c);
                                var eo = equalArrays(M(i), M(c), v, E, C, P);
                                return P.delete(i), eo;
                              case "[object Symbol]":
                                if (e2) return e2.call(i) == e2.call(c);
                            }
                            return !1;
                          })(i, c, ea, l, v, E, C)
                    );
                  if (!(1 & l)) {
                    var em = e_ && eT.call(i, "__wrapped__"),
                      eb = ey && eT.call(c, "__wrapped__");
                    if (em || eb) {
                      var ew = em ? i.value() : i,
                        eE = eb ? c.value() : c;
                      return C || (C = new Stack()), E(ew, eE, l, v, C);
                    }
                  }
                  return (
                    !!ev &&
                    (C || (C = new Stack()),
                    (function (i, c, l, v, E, C) {
                      var P = 1 & l,
                        M = getAllKeys(i),
                        B = M.length;
                      if (B != getAllKeys(c).length && !P) return !1;
                      for (var W = B; W--; ) {
                        var J = M[W];
                        if (!(P ? J in c : eT.call(c, J))) return !1;
                      }
                      var X = C.get(i);
                      if (X && C.get(c)) return X == c;
                      var Q = !0;
                      C.set(i, c), C.set(c, i);
                      for (var er = P; ++W < B; ) {
                        var es = i[(J = M[W])],
                          eo = c[J];
                        if (v)
                          var ea = P
                            ? v(eo, es, J, c, i, C)
                            : v(es, eo, J, i, c, C);
                        if (
                          !(void 0 === ea
                            ? es === eo || E(es, eo, l, v, C)
                            : ea)
                        ) {
                          Q = !1;
                          break;
                        }
                        er || (er = "constructor" == J);
                      }
                      if (Q && !er) {
                        var ec = i.constructor,
                          el = c.constructor;
                        ec != el &&
                          "constructor" in i &&
                          "constructor" in c &&
                          !(
                            "function" == typeof ec &&
                            ec instanceof ec &&
                            "function" == typeof el &&
                            el instanceof el
                          ) &&
                          (Q = !1);
                      }
                      return C.delete(i), C.delete(c), Q;
                    })(i, c, l, v, E, C))
                  );
                })(i, c, l, v, baseIsEqual, E)
              : i != i && c != c)
          );
        })(i, c);
      };
    },
    80500: function (i) {
      "use strict";
      i.exports = (i, c) => {
        if (!("string" == typeof i && "string" == typeof c))
          throw TypeError("Expected the arguments to be of type `string`");
        if ("" === c) return [i];
        let l = i.indexOf(c);
        return -1 === l ? [i] : [i.slice(0, l), i.slice(l + c.length)];
      };
    },
    70610: function (i) {
      "use strict";
      i.exports = (i) =>
        encodeURIComponent(i).replace(
          /[!'()*]/g,
          (i) => `%${i.charCodeAt(0).toString(16).toUpperCase()}`
        );
    },
    70655: function (i, c, l) {
      "use strict";
      l.r(c),
        l.d(c, {
          __assign: function () {
            return __assign;
          },
          __asyncDelegator: function () {
            return __asyncDelegator;
          },
          __asyncGenerator: function () {
            return __asyncGenerator;
          },
          __asyncValues: function () {
            return __asyncValues;
          },
          __await: function () {
            return __await;
          },
          __awaiter: function () {
            return __awaiter;
          },
          __classPrivateFieldGet: function () {
            return __classPrivateFieldGet;
          },
          __classPrivateFieldSet: function () {
            return __classPrivateFieldSet;
          },
          __createBinding: function () {
            return __createBinding;
          },
          __decorate: function () {
            return __decorate;
          },
          __exportStar: function () {
            return __exportStar;
          },
          __extends: function () {
            return __extends;
          },
          __generator: function () {
            return __generator;
          },
          __importDefault: function () {
            return __importDefault;
          },
          __importStar: function () {
            return __importStar;
          },
          __makeTemplateObject: function () {
            return __makeTemplateObject;
          },
          __metadata: function () {
            return __metadata;
          },
          __param: function () {
            return __param;
          },
          __read: function () {
            return __read;
          },
          __rest: function () {
            return __rest;
          },
          __spread: function () {
            return __spread;
          },
          __spreadArrays: function () {
            return __spreadArrays;
          },
          __values: function () {
            return __values;
          },
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.
Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var extendStatics =
        function (i, c) {
          return (extendStatics =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, c) {
                i.__proto__ = c;
              }) ||
            function (i, c) {
              for (var l in c) c.hasOwnProperty(l) && (i[l] = c[l]);
            })(i, c);
        };
      function __extends(i, c) {
        function __() {
          this.constructor = i;
        }
        extendStatics(i, c),
          (i.prototype =
            null === c
              ? Object.create(c)
              : ((__.prototype = c.prototype), new __()));
      }
      var __assign = function () {
        return (__assign =
          Object.assign ||
          function (i) {
            for (var c, l = 1, v = arguments.length; l < v; l++)
              for (var E in (c = arguments[l]))
                Object.prototype.hasOwnProperty.call(c, E) && (i[E] = c[E]);
            return i;
          }).apply(this, arguments);
      };
      function __rest(i, c) {
        var l = {};
        for (var v in i)
          Object.prototype.hasOwnProperty.call(i, v) &&
            0 > c.indexOf(v) &&
            (l[v] = i[v]);
        if (null != i && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var E = 0, v = Object.getOwnPropertySymbols(i);
            E < v.length;
            E++
          )
            0 > c.indexOf(v[E]) &&
              Object.prototype.propertyIsEnumerable.call(i, v[E]) &&
              (l[v[E]] = i[v[E]]);
        return l;
      }
      function __decorate(i, c, l, v) {
        var E,
          C = arguments.length,
          P =
            C < 3
              ? c
              : null === v
              ? (v = Object.getOwnPropertyDescriptor(c, l))
              : v;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          P = Reflect.decorate(i, c, l, v);
        else
          for (var M = i.length - 1; M >= 0; M--)
            (E = i[M]) &&
              (P = (C < 3 ? E(P) : C > 3 ? E(c, l, P) : E(c, l)) || P);
        return C > 3 && P && Object.defineProperty(c, l, P), P;
      }
      function __param(i, c) {
        return function (l, v) {
          c(l, v, i);
        };
      }
      function __metadata(i, c) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(i, c);
      }
      function __awaiter(i, c, l, v) {
        return new (l || (l = Promise))(function (E, C) {
          function fulfilled(i) {
            try {
              step(v.next(i));
            } catch (i) {
              C(i);
            }
          }
          function rejected(i) {
            try {
              step(v.throw(i));
            } catch (i) {
              C(i);
            }
          }
          function step(i) {
            var c;
            i.done
              ? E(i.value)
              : ((c = i.value) instanceof l
                  ? c
                  : new l(function (i) {
                      i(c);
                    })
                ).then(fulfilled, rejected);
          }
          step((v = v.apply(i, c || [])).next());
        });
      }
      function __generator(i, c) {
        var l,
          v,
          E,
          C,
          P = {
            label: 0,
            sent: function () {
              if (1 & E[0]) throw E[1];
              return E[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (C = { next: verb(0), throw: verb(1), return: verb(2) }),
          "function" == typeof Symbol &&
            (C[Symbol.iterator] = function () {
              return this;
            }),
          C
        );
        function verb(C) {
          return function (M) {
            return (function (C) {
              if (l) throw TypeError("Generator is already executing.");
              for (; P; )
                try {
                  if (
                    ((l = 1),
                    v &&
                      (E =
                        2 & C[0]
                          ? v.return
                          : C[0]
                          ? v.throw || ((E = v.return) && E.call(v), 0)
                          : v.next) &&
                      !(E = E.call(v, C[1])).done)
                  )
                    return E;
                  switch (((v = 0), E && (C = [2 & C[0], E.value]), C[0])) {
                    case 0:
                    case 1:
                      E = C;
                      break;
                    case 4:
                      return P.label++, { value: C[1], done: !1 };
                    case 5:
                      P.label++, (v = C[1]), (C = [0]);
                      continue;
                    case 7:
                      (C = P.ops.pop()), P.trys.pop();
                      continue;
                    default:
                      if (
                        !(E = (E = P.trys).length > 0 && E[E.length - 1]) &&
                        (6 === C[0] || 2 === C[0])
                      ) {
                        P = 0;
                        continue;
                      }
                      if (3 === C[0] && (!E || (C[1] > E[0] && C[1] < E[3]))) {
                        P.label = C[1];
                        break;
                      }
                      if (6 === C[0] && P.label < E[1]) {
                        (P.label = E[1]), (E = C);
                        break;
                      }
                      if (E && P.label < E[2]) {
                        (P.label = E[2]), P.ops.push(C);
                        break;
                      }
                      E[2] && P.ops.pop(), P.trys.pop();
                      continue;
                  }
                  C = c.call(i, P);
                } catch (i) {
                  (C = [6, i]), (v = 0);
                } finally {
                  l = E = 0;
                }
              if (5 & C[0]) throw C[1];
              return { value: C[0] ? C[1] : void 0, done: !0 };
            })([C, M]);
          };
        }
      }
      function __createBinding(i, c, l, v) {
        void 0 === v && (v = l), (i[v] = c[l]);
      }
      function __exportStar(i, c) {
        for (var l in i)
          "default" === l || c.hasOwnProperty(l) || (c[l] = i[l]);
      }
      function __values(i) {
        var c = "function" == typeof Symbol && Symbol.iterator,
          l = c && i[c],
          v = 0;
        if (l) return l.call(i);
        if (i && "number" == typeof i.length)
          return {
            next: function () {
              return (
                i && v >= i.length && (i = void 0),
                { value: i && i[v++], done: !i }
              );
            },
          };
        throw TypeError(
          c ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function __read(i, c) {
        var l = "function" == typeof Symbol && i[Symbol.iterator];
        if (!l) return i;
        var v,
          E,
          C = l.call(i),
          P = [];
        try {
          for (; (void 0 === c || c-- > 0) && !(v = C.next()).done; )
            P.push(v.value);
        } catch (i) {
          E = { error: i };
        } finally {
          try {
            v && !v.done && (l = C.return) && l.call(C);
          } finally {
            if (E) throw E.error;
          }
        }
        return P;
      }
      function __spread() {
        for (var i = [], c = 0; c < arguments.length; c++)
          i = i.concat(__read(arguments[c]));
        return i;
      }
      function __spreadArrays() {
        for (var i = 0, c = 0, l = arguments.length; c < l; c++)
          i += arguments[c].length;
        for (var v = Array(i), E = 0, c = 0; c < l; c++)
          for (var C = arguments[c], P = 0, M = C.length; P < M; P++, E++)
            v[E] = C[P];
        return v;
      }
      function __await(i) {
        return this instanceof __await ? ((this.v = i), this) : new __await(i);
      }
      function __asyncGenerator(i, c, l) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var v,
          E = l.apply(i, c || []),
          C = [];
        return (
          (v = {}),
          verb("next"),
          verb("throw"),
          verb("return"),
          (v[Symbol.asyncIterator] = function () {
            return this;
          }),
          v
        );
        function verb(i) {
          E[i] &&
            (v[i] = function (c) {
              return new Promise(function (l, v) {
                C.push([i, c, l, v]) > 1 || resume(i, c);
              });
            });
        }
        function resume(i, c) {
          try {
            var l;
            (l = E[i](c)).value instanceof __await
              ? Promise.resolve(l.value.v).then(fulfill, reject)
              : settle(C[0][2], l);
          } catch (i) {
            settle(C[0][3], i);
          }
        }
        function fulfill(i) {
          resume("next", i);
        }
        function reject(i) {
          resume("throw", i);
        }
        function settle(i, c) {
          i(c), C.shift(), C.length && resume(C[0][0], C[0][1]);
        }
      }
      function __asyncDelegator(i) {
        var c, l;
        return (
          (c = {}),
          verb("next"),
          verb("throw", function (i) {
            throw i;
          }),
          verb("return"),
          (c[Symbol.iterator] = function () {
            return this;
          }),
          c
        );
        function verb(v, E) {
          c[v] = i[v]
            ? function (c) {
                return (l = !l)
                  ? { value: __await(i[v](c)), done: "return" === v }
                  : E
                  ? E(c)
                  : c;
              }
            : E;
        }
      }
      function __asyncValues(i) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var c,
          l = i[Symbol.asyncIterator];
        return l
          ? l.call(i)
          : ((i = __values(i)),
            (c = {}),
            verb("next"),
            verb("throw"),
            verb("return"),
            (c[Symbol.asyncIterator] = function () {
              return this;
            }),
            c);
        function verb(l) {
          c[l] =
            i[l] &&
            function (c) {
              return new Promise(function (v, E) {
                !(function (i, c, l, v) {
                  Promise.resolve(v).then(function (c) {
                    i({ value: c, done: l });
                  }, c);
                })(v, E, (c = i[l](c)).done, c.value);
              });
            };
        }
      }
      function __makeTemplateObject(i, c) {
        return (
          Object.defineProperty
            ? Object.defineProperty(i, "raw", { value: c })
            : (i.raw = c),
          i
        );
      }
      function __importStar(i) {
        if (i && i.__esModule) return i;
        var c = {};
        if (null != i)
          for (var l in i) Object.hasOwnProperty.call(i, l) && (c[l] = i[l]);
        return (c.default = i), c;
      }
      function __importDefault(i) {
        return i && i.__esModule ? i : { default: i };
      }
      function __classPrivateFieldGet(i, c) {
        if (!c.has(i))
          throw TypeError("attempted to get private field on non-instance");
        return c.get(i);
      }
      function __classPrivateFieldSet(i, c, l) {
        if (!c.has(i))
          throw TypeError("attempted to set private field on non-instance");
        return c.set(i, l), l;
      }
    },
    57026: function (i) {
      "use strict";
      i.exports = function () {
        throw Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    67686: function (i, c, l) {
      "use strict";
      let v = l(85346);
      i.exports = pino;
      let E =
        (function () {
          function defd(i) {
            return void 0 !== i && i;
          }
          try {
            if ("undefined" != typeof globalThis) return globalThis;
            return (
              Object.defineProperty(Object.prototype, "globalThis", {
                get: function () {
                  return (
                    delete Object.prototype.globalThis, (this.globalThis = this)
                  );
                },
                configurable: !0,
              }),
              globalThis
            );
          } catch (i) {
            return defd(self) || defd(window) || defd(this) || {};
          }
        })().console || {};
      function pino(i) {
        var c;
        (i = i || {}).browser = i.browser || {};
        let l = i.browser.transmit;
        if (l && "function" != typeof l.send)
          throw Error("pino: transmit option must have a send function");
        let v = i.browser.write || E;
        i.browser.write && (i.browser.asObject = !0);
        let C = i.serializers || {},
          P = (function (i, c) {
            if (Array.isArray(i)) {
              let c = i.filter(function (i) {
                return "!stdSerializers.err" !== i;
              });
              return c;
            }
            return !0 === i && Object.keys(c);
          })(i.browser.serialize, C),
          M = i.browser.serialize;
        Array.isArray(i.browser.serialize) &&
          i.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (M = !1),
          "function" == typeof v &&
            (v.error = v.fatal = v.warn = v.info = v.debug = v.trace = v),
          !1 === i.enabled && (i.level = "silent");
        let B = i.level || "info",
          W = Object.create(v);
        W.log || (W.log = noop),
          Object.defineProperty(W, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(W, "level", {
            get: function () {
              return this._level;
            },
            set: function (i) {
              if ("silent" !== i && !this.levels.values[i])
                throw Error("unknown level " + i);
              (this._level = i),
                set(J, W, "error", "log"),
                set(J, W, "fatal", "error"),
                set(J, W, "warn", "error"),
                set(J, W, "info", "log"),
                set(J, W, "debug", "log"),
                set(J, W, "trace", "log");
            },
          });
        let J = {
          transmit: l,
          serialize: P,
          asObject: i.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp:
            "function" == typeof (c = i).timestamp
              ? c.timestamp
              : !1 === c.timestamp
              ? nullTime
              : epochTime,
        };
        return (
          (W.levels = pino.levels),
          (W.level = B),
          (W.setMaxListeners =
            W.getMaxListeners =
            W.emit =
            W.addListener =
            W.on =
            W.prependListener =
            W.once =
            W.prependOnceListener =
            W.removeListener =
            W.removeAllListeners =
            W.listeners =
            W.listenerCount =
            W.eventNames =
            W.write =
            W.flush =
              noop),
          (W.serializers = C),
          (W._serialize = P),
          (W._stdErrSerialize = M),
          (W.child = function (c, v) {
            if (!c) throw Error("missing bindings for child Pino");
            (v = v || {}),
              P && c.serializers && (v.serializers = c.serializers);
            let E = v.serializers;
            if (P && E) {
              var M = Object.assign({}, C, E),
                B = !0 === i.browser.serialize ? Object.keys(M) : P;
              delete c.serializers,
                applySerializers([c], B, M, this._stdErrSerialize);
            }
            function Child(i) {
              (this._childLevel = (0 | i._childLevel) + 1),
                (this.error = bind(i, c, "error")),
                (this.fatal = bind(i, c, "fatal")),
                (this.warn = bind(i, c, "warn")),
                (this.info = bind(i, c, "info")),
                (this.debug = bind(i, c, "debug")),
                (this.trace = bind(i, c, "trace")),
                M && ((this.serializers = M), (this._serialize = B)),
                l &&
                  (this._logEvent = createLogEventShape(
                    [].concat(i._logEvent.bindings, c)
                  ));
            }
            return (Child.prototype = this), new Child(this);
          }),
          l && (W._logEvent = createLogEventShape()),
          W
        );
      }
      function set(i, c, l, C) {
        let P = Object.getPrototypeOf(c);
        (c[l] =
          c.levelVal > c.levels.values[l]
            ? noop
            : P[l]
            ? P[l]
            : E[l] || E[C] || noop),
          (function (i, c, l) {
            if (i.transmit || c[l] !== noop) {
              var C;
              c[l] =
                ((C = c[l]),
                function () {
                  let P = i.timestamp(),
                    M = Array(arguments.length),
                    B =
                      Object.getPrototypeOf && Object.getPrototypeOf(this) === E
                        ? E
                        : this;
                  for (var W = 0; W < M.length; W++) M[W] = arguments[W];
                  if (
                    (i.serialize &&
                      !i.asObject &&
                      applySerializers(
                        M,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize
                      ),
                    i.asObject
                      ? C.call(
                          B,
                          (function (i, c, l, E) {
                            i._serialize &&
                              applySerializers(
                                l,
                                i._serialize,
                                i.serializers,
                                i._stdErrSerialize
                              );
                            let C = l.slice(),
                              P = C[0],
                              M = {};
                            E && (M.time = E),
                              (M.level = pino.levels.values[c]);
                            let B = (0 | i._childLevel) + 1;
                            if (
                              (B < 1 && (B = 1),
                              null !== P && "object" == typeof P)
                            ) {
                              for (; B-- && "object" == typeof C[0]; )
                                Object.assign(M, C.shift());
                              P = C.length ? v(C.shift(), C) : void 0;
                            } else
                              "string" == typeof P && (P = v(C.shift(), C));
                            return void 0 !== P && (M.msg = P), M;
                          })(this, l, M, P)
                        )
                      : C.apply(B, M),
                    i.transmit)
                  ) {
                    let v = i.transmit.level || c.level,
                      E = pino.levels.values[v],
                      C = pino.levels.values[l];
                    if (C < E) return;
                    (function (i, c, l) {
                      let v = c.send,
                        E = c.ts,
                        C = c.methodLevel,
                        P = c.methodValue,
                        M = c.val,
                        B = i._logEvent.bindings;
                      applySerializers(
                        l,
                        i._serialize || Object.keys(i.serializers),
                        i.serializers,
                        void 0 === i._stdErrSerialize || i._stdErrSerialize
                      ),
                        (i._logEvent.ts = E),
                        (i._logEvent.messages = l.filter(function (i) {
                          return -1 === B.indexOf(i);
                        })),
                        (i._logEvent.level.label = C),
                        (i._logEvent.level.value = P),
                        v(C, i._logEvent, M),
                        (i._logEvent = createLogEventShape(B));
                    })(
                      this,
                      {
                        ts: P,
                        methodLevel: l,
                        methodValue: C,
                        transmitLevel: v,
                        transmitValue:
                          pino.levels.values[i.transmit.level || c.level],
                        send: i.transmit.send,
                        val: c.levelVal,
                      },
                      M
                    );
                  }
                });
            }
          })(i, c, l);
      }
      function applySerializers(i, c, l, v) {
        for (let E in i)
          if (v && i[E] instanceof Error) i[E] = pino.stdSerializers.err(i[E]);
          else if ("object" == typeof i[E] && !Array.isArray(i[E]))
            for (let v in i[E])
              c && c.indexOf(v) > -1 && v in l && (i[E][v] = l[v](i[E][v]));
      }
      function bind(i, c, l) {
        return function () {
          let v = Array(1 + arguments.length);
          v[0] = c;
          for (var E = 1; E < v.length; E++) v[E] = arguments[E - 1];
          return i[l].apply(this, v);
        };
      }
      function createLogEventShape(i) {
        return {
          ts: 0,
          messages: [],
          bindings: i || [],
          level: { label: "", value: 0 },
        };
      }
      function mock() {
        return {};
      }
      function passthrough(i) {
        return i;
      }
      function noop() {}
      function nullTime() {
        return !1;
      }
      function epochTime() {
        return Date.now();
      }
      (pino.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (pino.stdSerializers = {
          mapHttpRequest: mock,
          mapHttpResponse: mock,
          wrapRequestSerializer: passthrough,
          wrapResponseSerializer: passthrough,
          wrapErrorSerializer: passthrough,
          req: mock,
          res: mock,
          err: function (i) {
            let c = {
              type: i.constructor.name,
              msg: i.message,
              stack: i.stack,
            };
            for (let l in i) void 0 === c[l] && (c[l] = i[l]);
            return c;
          },
        }),
        (pino.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime,
            epochTime,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
  },
]);
