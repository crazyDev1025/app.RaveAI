(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [128],
  {
    65987: function (h) {
      "use strict";
      var c = {
        single_source_shortest_paths: function (h, f, g) {
          var p,
            m,
            y,
            A,
            E,
            $,
            _,
            C = {},
            b = {};
          b[f] = 0;
          var T = c.PriorityQueue.make();
          for (T.push(f, 0); !T.empty(); )
            for (y in ((m = (p = T.pop()).value),
            (A = p.cost),
            (E = h[m] || {})))
              E.hasOwnProperty(y) &&
                (($ = A + E[y]),
                (_ = b[y]),
                (void 0 === b[y] || _ > $) &&
                  ((b[y] = $), T.push(y, $), (C[y] = m)));
          if (void 0 !== g && void 0 === b[g])
            throw Error(
              ["Could not find a path from ", f, " to ", g, "."].join("")
            );
          return C;
        },
        extract_shortest_path_from_predecessor_list: function (h, c) {
          for (var f = [], g = c; g; ) f.push(g), h[g], (g = h[g]);
          return f.reverse(), f;
        },
        find_path: function (h, f, g) {
          var p = c.single_source_shortest_paths(h, f, g);
          return c.extract_shortest_path_from_predecessor_list(p, g);
        },
        PriorityQueue: {
          make: function (h) {
            var f,
              g = c.PriorityQueue,
              p = {};
            for (f in ((h = h || {}), g)) g.hasOwnProperty(f) && (p[f] = g[f]);
            return (p.queue = []), (p.sorter = h.sorter || g.default_sorter), p;
          },
          default_sorter: function (h, c) {
            return h.cost - c.cost;
          },
          push: function (h, c) {
            this.queue.push({ value: h, cost: c }),
              this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      h.exports = c;
    },
    62378: function (h) {
      "use strict";
      h.exports = function (h) {
        for (var c = [], f = h.length, g = 0; g < f; g++) {
          var p = h.charCodeAt(g);
          if (p >= 55296 && p <= 56319 && f > g + 1) {
            var m = h.charCodeAt(g + 1);
            m >= 56320 &&
              m <= 57343 &&
              ((p = (p - 55296) * 1024 + m - 56320 + 65536), (g += 1));
          }
          if (p < 128) {
            c.push(p);
            continue;
          }
          if (p < 2048) {
            c.push((p >> 6) | 192), c.push((63 & p) | 128);
            continue;
          }
          if (p < 55296 || (p >= 57344 && p < 65536)) {
            c.push((p >> 12) | 224),
              c.push(((p >> 6) & 63) | 128),
              c.push((63 & p) | 128);
            continue;
          }
          if (p >= 65536 && p <= 1114111) {
            c.push((p >> 18) | 240),
              c.push(((p >> 12) & 63) | 128),
              c.push(((p >> 6) & 63) | 128),
              c.push((63 & p) | 128);
            continue;
          }
          c.push(239, 191, 189);
        }
        return new Uint8Array(c).buffer;
      };
    },
    94264: function (h, c, f) {
      "use strict";
      f.d(c, {
        j: function () {
          return animate_es_animate;
        },
      });
      var g,
        p = f(36599),
        m = f(22263),
        y = f(2633);
      function stopAnimation(h, c = !0) {
        if (h && "finished" !== h.playState)
          try {
            h.stop ? h.stop() : (c && h.commitStyles(), h.cancel());
          } catch (h) {}
      }
      let createAnimation = (h) => h(),
        withControls = (h, c, f = p.c.duration) =>
          new Proxy(
            {
              animations: h.map(createAnimation).filter(Boolean),
              duration: f,
              options: c,
            },
            A
          ),
        getActiveAnimation = (h) => h.animations[0],
        A = {
          get: (h, c) => {
            let f = getActiveAnimation(h);
            switch (c) {
              case "duration":
                return h.duration;
              case "currentTime":
                return m.X.s((null == f ? void 0 : f[c]) || 0);
              case "playbackRate":
              case "playState":
                return null == f ? void 0 : f[c];
              case "finished":
                return (
                  h.finished ||
                    (h.finished = Promise.all(
                      h.animations.map(selectFinished)
                    ).catch(y.Z)),
                  h.finished
                );
              case "stop":
                return () => {
                  h.animations.forEach((h) => stopAnimation(h));
                };
              case "forEachNative":
                return (c) => {
                  h.animations.forEach((f) => c(f, h));
                };
              default:
                return void 0 === (null == f ? void 0 : f[c])
                  ? void 0
                  : () => h.animations.forEach((h) => h[c]());
            }
          },
          set: (h, c, f) => {
            switch (c) {
              case "currentTime":
                f = m.X.ms(f);
              case "playbackRate":
                for (let g = 0; g < h.animations.length; g++)
                  h.animations[g][c] = f;
                return !0;
            }
            return !1;
          },
        },
        selectFinished = (h) => h.finished;
      var E = f(54085),
        $ = f(24394),
        _ = f(19950);
      let C = new WeakMap();
      function getAnimationData(h) {
        return (
          C.has(h) || C.set(h, { transforms: [], values: new Map() }), C.get(h)
        );
      }
      var b = f(50268);
      let T = ["", "X", "Y", "Z"],
        B = { x: "translateX", y: "translateY", z: "translateZ" },
        x = {
          syntax: "<angle>",
          initialValue: "0deg",
          toDefaultUnit: (h) => h + "deg",
        },
        I = {
          translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: (h) => h + "px",
          },
          rotate: x,
          scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: y.V },
          skew: x,
        },
        U = new Map(),
        asTransformCssVar = (h) => `--motion-${h}`,
        O = ["x", "y", "z"];
      ["translate", "scale", "rotate", "skew"].forEach((h) => {
        T.forEach((c) => {
          O.push(h + c), U.set(asTransformCssVar(h + c), I[h]);
        });
      });
      let compareTransformOrder = (h, c) => O.indexOf(h) - O.indexOf(c),
        j = new Set(O),
        isTransform = (h) => j.has(h),
        addTransformToElement = (h, c) => {
          B[c] && (c = B[c]);
          let { transforms: f } = getAnimationData(h);
          (0, b.y)(f, c), (h.style.transform = buildTransformTemplate(f));
        },
        buildTransformTemplate = (h) =>
          h
            .sort(compareTransformOrder)
            .reduce(transformListToString, "")
            .trim(),
        transformListToString = (h, c) =>
          `${h} ${c}(var(${asTransformCssVar(c)}))`,
        isCssVar = (h) => h.startsWith("--"),
        F = new Set();
      var K = f(27679),
        Y = f(56463),
        J = f(95469),
        q = f(7523),
        Q = f(73617),
        W = f(56457);
      let testAnimation = (h, c) => document.createElement("div").animate(h, c),
        X = {
          cssRegisterProperty: () =>
            "undefined" != typeof CSS &&
            Object.hasOwnProperty.call(CSS, "registerProperty"),
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
          partialKeyframes: () => {
            try {
              testAnimation({ opacity: [1] });
            } catch (h) {
              return !1;
            }
            return !0;
          },
          finished: () =>
            !!testAnimation({ opacity: [0, 1] }, { duration: 0.001 }).finished,
          linearEasing: () => {
            try {
              testAnimation({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (h) {
              return !1;
            }
            return !0;
          },
        },
        G = {},
        tt = {};
      for (let h in X) tt[h] = () => (void 0 === G[h] && (G[h] = X[h]()), G[h]);
      let generateLinearEasingPoints = (h, c) => {
          let f = "",
            g = Math.round(c / 0.015);
          for (let c = 0; c < g; c++) f += h((0, Q.Y)(0, g - 1, c)) + ", ";
          return f.substring(0, f.length - 2);
        },
        convertEasing = (h, c) =>
          (0, Y.m)(h)
            ? tt.linearEasing()
              ? `linear(${generateLinearEasingPoints(h, c)})`
              : p.c.easing
            : (0, W.U)(h)
            ? cubicBezierAsString(h)
            : h,
        cubicBezierAsString = ([h, c, f, g]) =>
          `cubic-bezier(${h}, ${c}, ${f}, ${g})`,
        keyframesList = (h) => (Array.isArray(h) ? h : [h]);
      function getStyleName(h) {
        return B[h] && (h = B[h]), isTransform(h) ? asTransformCssVar(h) : h;
      }
      let te = {
        get: (h, c) => {
          let f = isCssVar((c = getStyleName(c)))
            ? h.style.getPropertyValue(c)
            : getComputedStyle(h)[c];
          if (!f && 0 !== f) {
            let h = U.get(c);
            h && (f = h.initialValue);
          }
          return f;
        },
        set: (h, c, f) => {
          isCssVar((c = getStyleName(c)))
            ? h.style.setProperty(c, f)
            : (h.style[c] = f);
        },
      };
      var tn = f(70850);
      let getOptions = (h, c) =>
          h[c]
            ? Object.assign(Object.assign({}, h), h[c])
            : Object.assign({}, h),
        tr =
          ((g = E.f),
          function (h, c, f = {}) {
            var A, E, C, b, T;
            "string" == typeof (A = h)
              ? E
                ? ((null !== (C = E[A]) && void 0 !== C) ||
                    (E[A] = document.querySelectorAll(A)),
                  (A = E[A]))
                : (A = document.querySelectorAll(A))
              : A instanceof Element && (A = [A]),
              (h = Array.from(A || []));
            let B = h.length;
            (0, $.invariant)(!!B, "No valid element provided."),
              (0, $.invariant)(!!c, "No keyframes defined.");
            let x = [];
            for (let A = 0; A < B; A++) {
              let E = h[A];
              for (let h in c) {
                let $ = getOptions(f, h);
                $.delay = ((b = $.delay), (T = A), (0, Y.m)(b) ? b(T, B) : b);
                let C = (function (h, c, f, g = {}, A) {
                  var E;
                  let $;
                  let C = window.__MOTION_DEV_TOOLS_RECORD,
                    b = !1 !== g.record && C,
                    {
                      duration: T = p.c.duration,
                      delay: B = p.c.delay,
                      endDelay: x = p.c.endDelay,
                      repeat: I = p.c.repeat,
                      easing: O = p.c.easing,
                      persist: j = !1,
                      direction: Q,
                      offset: W,
                      allowWebkitAcceleration: X = !1,
                    } = g,
                    G = getAnimationData(h),
                    tr = isTransform(c),
                    ti = tt.waapi();
                  tr && addTransformToElement(h, c);
                  let to = getStyleName(c),
                    ts =
                      ((E = G.values).has(to) || E.set(to, new _.H()),
                      E.get(to)),
                    ta = U.get(to);
                  return (
                    stopAnimation(
                      ts.animation,
                      !((0, K.m)(O) && ts.generator) && !1 !== g.record
                    ),
                    () => {
                      let readInitialValue = () => {
                          var c, f;
                          return null !==
                            (f =
                              null !== (c = te.get(h, to)) && void 0 !== c
                                ? c
                                : null == ta
                                ? void 0
                                : ta.initialValue) && void 0 !== f
                            ? f
                            : 0;
                        },
                        p = (function (h, c) {
                          for (let f = 0; f < h.length; f++)
                            null === h[f] && (h[f] = f ? h[f - 1] : c());
                          return h;
                        })(keyframesList(f), readInitialValue),
                        E = (function (h, c) {
                          var f;
                          let g = (null == c ? void 0 : c.toDefaultUnit) || y.V,
                            p = h[h.length - 1];
                          if ((0, tn.H)(p)) {
                            let h =
                              (null === (f = p.match(/(-?[\d.]+)([a-z%]*)/)) ||
                              void 0 === f
                                ? void 0
                                : f[2]) || "";
                            h && (g = (c) => c + h);
                          }
                          return g;
                        })(p, ta);
                      if ((0, K.m)(O)) {
                        let h = O.createAnimation(
                          p,
                          "opacity" !== c,
                          readInitialValue,
                          to,
                          ts
                        );
                        (O = h.easing),
                          (p = h.keyframes || p),
                          (T = h.duration || T);
                      }
                      if (
                        (isCssVar(to) &&
                          (tt.cssRegisterProperty()
                            ? (function (h) {
                                if (!F.has(h)) {
                                  F.add(h);
                                  try {
                                    let { syntax: c, initialValue: f } = U.has(
                                      h
                                    )
                                      ? U.get(h)
                                      : {};
                                    CSS.registerProperty({
                                      name: h,
                                      inherits: !1,
                                      syntax: c,
                                      initialValue: f,
                                    });
                                  } catch (h) {}
                                }
                              })(to)
                            : (ti = !1)),
                        tr &&
                          !tt.linearEasing() &&
                          ((0, Y.m)(O) || ((0, J.K)(O) && O.some(Y.m))) &&
                          (ti = !1),
                        ti)
                      ) {
                        ta &&
                          (p = p.map((h) =>
                            (0, q.h)(h) ? ta.toDefaultUnit(h) : h
                          )),
                          1 === p.length &&
                            (!tt.partialKeyframes() || b) &&
                            p.unshift(readInitialValue());
                        let c = {
                          delay: m.X.ms(B),
                          duration: m.X.ms(T),
                          endDelay: m.X.ms(x),
                          easing: (0, J.K)(O) ? void 0 : convertEasing(O, T),
                          direction: Q,
                          iterations: I + 1,
                          fill: "both",
                        };
                        ($ = h.animate(
                          {
                            [to]: p,
                            offset: W,
                            easing: (0, J.K)(O)
                              ? O.map((h) => convertEasing(h, T))
                              : void 0,
                          },
                          c
                        )).finished ||
                          ($.finished = new Promise((h, c) => {
                            ($.onfinish = h), ($.oncancel = c);
                          }));
                        let f = p[p.length - 1];
                        $.finished
                          .then(() => {
                            j || (te.set(h, to, f), $.cancel());
                          })
                          .catch(y.Z),
                          X || ($.playbackRate = 1.000001);
                      } else if (A && tr)
                        1 ===
                          (p = p.map((h) =>
                            "string" == typeof h ? parseFloat(h) : h
                          )).length &&
                          p.unshift(parseFloat(readInitialValue())),
                          ($ = new A(
                            (c) => {
                              te.set(h, to, E ? E(c) : c);
                            },
                            p,
                            Object.assign(Object.assign({}, g), {
                              duration: T,
                              easing: O,
                            })
                          ));
                      else {
                        let c = p[p.length - 1];
                        te.set(
                          h,
                          to,
                          ta && (0, q.h)(c) ? ta.toDefaultUnit(c) : c
                        );
                      }
                      return (
                        b &&
                          C(
                            h,
                            c,
                            p,
                            {
                              duration: T,
                              delay: B,
                              easing: O,
                              repeat: I,
                              offset: W,
                            },
                            "motion-one"
                          ),
                        ts.setAnimation($),
                        $
                      );
                    }
                  );
                })(E, h, c[h], $, g);
                x.push(C);
              }
            }
            return withControls(x, f, f.duration);
          });
      function animateProgress(h, c = {}) {
        return withControls(
          [
            () => {
              let f = new E.f(h, [0, 1], c);
              return f.finished.catch(() => {}), f;
            },
          ],
          c,
          c.duration
        );
      }
      function animate_es_animate(h, c, f) {
        let g = (0, Y.m)(h) ? animateProgress : tr;
        return g(h, c, f);
      }
    },
    92592: function (h, c, f) {
      let g = f(47138),
        p = f(95115),
        m = f(6907),
        y = f(93776);
      function renderCanvas(h, c, f, m, y) {
        let A = [].slice.call(arguments, 1),
          E = A.length,
          $ = "function" == typeof A[E - 1];
        if (!$ && !g()) throw Error("Callback required as last argument");
        if ($) {
          if (E < 2) throw Error("Too few arguments provided");
          2 === E
            ? ((y = f), (f = c), (c = m = void 0))
            : 3 === E &&
              (c.getContext && void 0 === y
                ? ((y = m), (m = void 0))
                : ((y = m), (m = f), (f = c), (c = void 0)));
        } else {
          if (E < 1) throw Error("Too few arguments provided");
          return (
            1 === E
              ? ((f = c), (c = m = void 0))
              : 2 !== E || c.getContext || ((m = f), (f = c), (c = void 0)),
            new Promise(function (g, y) {
              try {
                let y = p.create(f, m);
                g(h(y, c, m));
              } catch (h) {
                y(h);
              }
            })
          );
        }
        try {
          let g = p.create(f, m);
          y(null, h(g, c, m));
        } catch (h) {
          y(h);
        }
      }
      (c.create = p.create),
        (c.toCanvas = renderCanvas.bind(null, m.render)),
        (c.toDataURL = renderCanvas.bind(null, m.renderToDataURL)),
        (c.toString = renderCanvas.bind(null, function (h, c, f) {
          return y.render(h, f);
        }));
    },
    47138: function (h) {
      h.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    21845: function (h, c, f) {
      let g = f(10242).getSymbolSize;
      (c.getRowColCoords = function (h) {
        if (1 === h) return [];
        let c = Math.floor(h / 7) + 2,
          f = g(h),
          p = 145 === f ? 26 : 2 * Math.ceil((f - 13) / (2 * c - 2)),
          m = [f - 7];
        for (let h = 1; h < c - 1; h++) m[h] = m[h - 1] - p;
        return m.push(6), m.reverse();
      }),
        (c.getPositions = function (h) {
          let f = [],
            g = c.getRowColCoords(h),
            p = g.length;
          for (let h = 0; h < p; h++)
            for (let c = 0; c < p; c++)
              (0 !== h || 0 !== c) &&
                (0 !== h || c !== p - 1) &&
                (h !== p - 1 || 0 !== c) &&
                f.push([g[h], g[c]]);
          return f;
        });
    },
    8260: function (h, c, f) {
      let g = f(76910),
        p = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function AlphanumericData(h) {
        (this.mode = g.ALPHANUMERIC), (this.data = h);
      }
      (AlphanumericData.getBitsLength = function (h) {
        return 11 * Math.floor(h / 2) + 6 * (h % 2);
      }),
        (AlphanumericData.prototype.getLength = function () {
          return this.data.length;
        }),
        (AlphanumericData.prototype.getBitsLength = function () {
          return AlphanumericData.getBitsLength(this.data.length);
        }),
        (AlphanumericData.prototype.write = function (h) {
          let c;
          for (c = 0; c + 2 <= this.data.length; c += 2) {
            let f = 45 * p.indexOf(this.data[c]);
            (f += p.indexOf(this.data[c + 1])), h.put(f, 11);
          }
          this.data.length % 2 && h.put(p.indexOf(this.data[c]), 6);
        }),
        (h.exports = AlphanumericData);
    },
    97245: function (h) {
      function BitBuffer() {
        (this.buffer = []), (this.length = 0);
      }
      (BitBuffer.prototype = {
        get: function (h) {
          return ((this.buffer[Math.floor(h / 8)] >>> (7 - (h % 8))) & 1) == 1;
        },
        put: function (h, c) {
          for (let f = 0; f < c; f++)
            this.putBit(((h >>> (c - f - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (h) {
          let c = Math.floor(this.length / 8);
          this.buffer.length <= c && this.buffer.push(0),
            h && (this.buffer[c] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (h.exports = BitBuffer);
    },
    73280: function (h) {
      function BitMatrix(h) {
        if (!h || h < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = h),
          (this.data = new Uint8Array(h * h)),
          (this.reservedBit = new Uint8Array(h * h));
      }
      (BitMatrix.prototype.set = function (h, c, f, g) {
        let p = h * this.size + c;
        (this.data[p] = f), g && (this.reservedBit[p] = !0);
      }),
        (BitMatrix.prototype.get = function (h, c) {
          return this.data[h * this.size + c];
        }),
        (BitMatrix.prototype.xor = function (h, c, f) {
          this.data[h * this.size + c] ^= f;
        }),
        (BitMatrix.prototype.isReserved = function (h, c) {
          return this.reservedBit[h * this.size + c];
        }),
        (h.exports = BitMatrix);
    },
    43424: function (h, c, f) {
      let g = f(62378),
        p = f(76910);
      function ByteData(h) {
        (this.mode = p.BYTE),
          "string" == typeof h && (h = g(h)),
          (this.data = new Uint8Array(h));
      }
      (ByteData.getBitsLength = function (h) {
        return 8 * h;
      }),
        (ByteData.prototype.getLength = function () {
          return this.data.length;
        }),
        (ByteData.prototype.getBitsLength = function () {
          return ByteData.getBitsLength(this.data.length);
        }),
        (ByteData.prototype.write = function (h) {
          for (let c = 0, f = this.data.length; c < f; c++)
            h.put(this.data[c], 8);
        }),
        (h.exports = ByteData);
    },
    35393: function (h, c, f) {
      let g = f(64908),
        p = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        m = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (c.getBlocksCount = function (h, c) {
        switch (c) {
          case g.L:
            return p[(h - 1) * 4 + 0];
          case g.M:
            return p[(h - 1) * 4 + 1];
          case g.Q:
            return p[(h - 1) * 4 + 2];
          case g.H:
            return p[(h - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (c.getTotalCodewordsCount = function (h, c) {
          switch (c) {
            case g.L:
              return m[(h - 1) * 4 + 0];
            case g.M:
              return m[(h - 1) * 4 + 1];
            case g.Q:
              return m[(h - 1) * 4 + 2];
            case g.H:
              return m[(h - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    64908: function (h, c) {
      (c.L = { bit: 1 }),
        (c.M = { bit: 0 }),
        (c.Q = { bit: 3 }),
        (c.H = { bit: 2 }),
        (c.isValid = function (h) {
          return h && void 0 !== h.bit && h.bit >= 0 && h.bit < 4;
        }),
        (c.from = function (h, f) {
          if (c.isValid(h)) return h;
          try {
            return (function (h) {
              if ("string" != typeof h) throw Error("Param is not a string");
              let f = h.toLowerCase();
              switch (f) {
                case "l":
                case "low":
                  return c.L;
                case "m":
                case "medium":
                  return c.M;
                case "q":
                case "quartile":
                  return c.Q;
                case "h":
                case "high":
                  return c.H;
                default:
                  throw Error("Unknown EC Level: " + h);
              }
            })(h);
          } catch (h) {
            return f;
          }
        });
    },
    76526: function (h, c, f) {
      let g = f(10242).getSymbolSize;
      c.getPositions = function (h) {
        let c = g(h);
        return [
          [0, 0],
          [c - 7, 0],
          [0, c - 7],
        ];
      };
    },
    61642: function (h, c, f) {
      let g = f(10242),
        p = g.getBCHDigit(1335);
      c.getEncodedBits = function (h, c) {
        let f = (h.bit << 3) | c,
          m = f << 10;
        for (; g.getBCHDigit(m) - p >= 0; ) m ^= 1335 << (g.getBCHDigit(m) - p);
        return ((f << 10) | m) ^ 21522;
      };
    },
    69729: function (h, c) {
      let f = new Uint8Array(512),
        g = new Uint8Array(256);
      !(function () {
        let h = 1;
        for (let c = 0; c < 255; c++)
          (f[c] = h), (g[h] = c), 256 & (h <<= 1) && (h ^= 285);
        for (let h = 255; h < 512; h++) f[h] = f[h - 255];
      })(),
        (c.log = function (h) {
          if (h < 1) throw Error("log(" + h + ")");
          return g[h];
        }),
        (c.exp = function (h) {
          return f[h];
        }),
        (c.mul = function (h, c) {
          return 0 === h || 0 === c ? 0 : f[g[h] + g[c]];
        });
    },
    35442: function (h, c, f) {
      let g = f(76910),
        p = f(10242);
      function KanjiData(h) {
        (this.mode = g.KANJI), (this.data = h);
      }
      (KanjiData.getBitsLength = function (h) {
        return 13 * h;
      }),
        (KanjiData.prototype.getLength = function () {
          return this.data.length;
        }),
        (KanjiData.prototype.getBitsLength = function () {
          return KanjiData.getBitsLength(this.data.length);
        }),
        (KanjiData.prototype.write = function (h) {
          let c;
          for (c = 0; c < this.data.length; c++) {
            let f = p.toSJIS(this.data[c]);
            if (f >= 33088 && f <= 40956) f -= 33088;
            else if (f >= 57408 && f <= 60351) f -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " +
                  this.data[c] +
                  "\nMake sure your charset is UTF-8"
              );
            (f = ((f >>> 8) & 255) * 192 + (255 & f)), h.put(f, 13);
          }
        }),
        (h.exports = KanjiData);
    },
    27126: function (h, c) {
      c.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let f = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (c.isValid = function (h) {
        return null != h && "" !== h && !isNaN(h) && h >= 0 && h <= 7;
      }),
        (c.from = function (h) {
          return c.isValid(h) ? parseInt(h, 10) : void 0;
        }),
        (c.getPenaltyN1 = function (h) {
          let c = h.size,
            g = 0,
            p = 0,
            m = 0,
            y = null,
            A = null;
          for (let E = 0; E < c; E++) {
            (p = m = 0), (y = A = null);
            for (let $ = 0; $ < c; $++) {
              let c = h.get(E, $);
              c === y
                ? p++
                : (p >= 5 && (g += f.N1 + (p - 5)), (y = c), (p = 1)),
                (c = h.get($, E)) === A
                  ? m++
                  : (m >= 5 && (g += f.N1 + (m - 5)), (A = c), (m = 1));
            }
            p >= 5 && (g += f.N1 + (p - 5)), m >= 5 && (g += f.N1 + (m - 5));
          }
          return g;
        }),
        (c.getPenaltyN2 = function (h) {
          let c = h.size,
            g = 0;
          for (let f = 0; f < c - 1; f++)
            for (let p = 0; p < c - 1; p++) {
              let c =
                h.get(f, p) +
                h.get(f, p + 1) +
                h.get(f + 1, p) +
                h.get(f + 1, p + 1);
              (4 === c || 0 === c) && g++;
            }
          return g * f.N2;
        }),
        (c.getPenaltyN3 = function (h) {
          let c = h.size,
            g = 0,
            p = 0,
            m = 0;
          for (let f = 0; f < c; f++) {
            p = m = 0;
            for (let y = 0; y < c; y++)
              (p = ((p << 1) & 2047) | h.get(f, y)),
                y >= 10 && (1488 === p || 93 === p) && g++,
                (m = ((m << 1) & 2047) | h.get(y, f)),
                y >= 10 && (1488 === m || 93 === m) && g++;
          }
          return g * f.N3;
        }),
        (c.getPenaltyN4 = function (h) {
          let c = 0,
            g = h.data.length;
          for (let f = 0; f < g; f++) c += h.data[f];
          let p = Math.abs(Math.ceil((100 * c) / g / 5) - 10);
          return p * f.N4;
        }),
        (c.applyMask = function (h, f) {
          let g = f.size;
          for (let p = 0; p < g; p++)
            for (let m = 0; m < g; m++)
              f.isReserved(m, p) ||
                f.xor(
                  m,
                  p,
                  (function (h, f, g) {
                    switch (h) {
                      case c.Patterns.PATTERN000:
                        return (f + g) % 2 == 0;
                      case c.Patterns.PATTERN001:
                        return f % 2 == 0;
                      case c.Patterns.PATTERN010:
                        return g % 3 == 0;
                      case c.Patterns.PATTERN011:
                        return (f + g) % 3 == 0;
                      case c.Patterns.PATTERN100:
                        return (Math.floor(f / 2) + Math.floor(g / 3)) % 2 == 0;
                      case c.Patterns.PATTERN101:
                        return ((f * g) % 2) + ((f * g) % 3) == 0;
                      case c.Patterns.PATTERN110:
                        return (((f * g) % 2) + ((f * g) % 3)) % 2 == 0;
                      case c.Patterns.PATTERN111:
                        return (((f * g) % 3) + ((f + g) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + h);
                    }
                  })(h, m, p)
                );
        }),
        (c.getBestMask = function (h, f) {
          let g = Object.keys(c.Patterns).length,
            p = 0,
            m = 1 / 0;
          for (let y = 0; y < g; y++) {
            f(y), c.applyMask(y, h);
            let g =
              c.getPenaltyN1(h) +
              c.getPenaltyN2(h) +
              c.getPenaltyN3(h) +
              c.getPenaltyN4(h);
            c.applyMask(y, h), g < m && ((m = g), (p = y));
          }
          return p;
        });
    },
    76910: function (h, c, f) {
      let g = f(43114),
        p = f(7007);
      (c.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (c.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (c.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (c.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (c.MIXED = { bit: -1 }),
        (c.getCharCountIndicator = function (h, c) {
          if (!h.ccBits) throw Error("Invalid mode: " + h);
          if (!g.isValid(c)) throw Error("Invalid version: " + c);
          return c >= 1 && c < 10
            ? h.ccBits[0]
            : c < 27
            ? h.ccBits[1]
            : h.ccBits[2];
        }),
        (c.getBestModeForData = function (h) {
          return p.testNumeric(h)
            ? c.NUMERIC
            : p.testAlphanumeric(h)
            ? c.ALPHANUMERIC
            : p.testKanji(h)
            ? c.KANJI
            : c.BYTE;
        }),
        (c.toString = function (h) {
          if (h && h.id) return h.id;
          throw Error("Invalid mode");
        }),
        (c.isValid = function (h) {
          return h && h.bit && h.ccBits;
        }),
        (c.from = function (h, f) {
          if (c.isValid(h)) return h;
          try {
            return (function (h) {
              if ("string" != typeof h) throw Error("Param is not a string");
              let f = h.toLowerCase();
              switch (f) {
                case "numeric":
                  return c.NUMERIC;
                case "alphanumeric":
                  return c.ALPHANUMERIC;
                case "kanji":
                  return c.KANJI;
                case "byte":
                  return c.BYTE;
                default:
                  throw Error("Unknown mode: " + h);
              }
            })(h);
          } catch (h) {
            return f;
          }
        });
    },
    41085: function (h, c, f) {
      let g = f(76910);
      function NumericData(h) {
        (this.mode = g.NUMERIC), (this.data = h.toString());
      }
      (NumericData.getBitsLength = function (h) {
        return 10 * Math.floor(h / 3) + (h % 3 ? (h % 3) * 3 + 1 : 0);
      }),
        (NumericData.prototype.getLength = function () {
          return this.data.length;
        }),
        (NumericData.prototype.getBitsLength = function () {
          return NumericData.getBitsLength(this.data.length);
        }),
        (NumericData.prototype.write = function (h) {
          let c, f;
          for (c = 0; c + 3 <= this.data.length; c += 3)
            (f = parseInt(this.data.substr(c, 3), 10)), h.put(f, 10);
          let g = this.data.length - c;
          g > 0 &&
            ((f = parseInt(this.data.substr(c), 10)), h.put(f, 3 * g + 1));
        }),
        (h.exports = NumericData);
    },
    26143: function (h, c, f) {
      let g = f(69729);
      (c.mul = function (h, c) {
        let f = new Uint8Array(h.length + c.length - 1);
        for (let p = 0; p < h.length; p++)
          for (let m = 0; m < c.length; m++) f[p + m] ^= g.mul(h[p], c[m]);
        return f;
      }),
        (c.mod = function (h, c) {
          let f = new Uint8Array(h);
          for (; f.length - c.length >= 0; ) {
            let h = f[0];
            for (let p = 0; p < c.length; p++) f[p] ^= g.mul(c[p], h);
            let p = 0;
            for (; p < f.length && 0 === f[p]; ) p++;
            f = f.slice(p);
          }
          return f;
        }),
        (c.generateECPolynomial = function (h) {
          let f = new Uint8Array([1]);
          for (let p = 0; p < h; p++)
            f = c.mul(f, new Uint8Array([1, g.exp(p)]));
          return f;
        });
    },
    95115: function (h, c, f) {
      let g = f(10242),
        p = f(64908),
        m = f(97245),
        y = f(73280),
        A = f(21845),
        E = f(76526),
        $ = f(27126),
        _ = f(35393),
        C = f(52882),
        b = f(23103),
        T = f(61642),
        B = f(76910),
        x = f(16130);
      function setupFormatInfo(h, c, f) {
        let g, p;
        let m = h.size,
          y = T.getEncodedBits(c, f);
        for (g = 0; g < 15; g++)
          (p = ((y >> g) & 1) == 1),
            g < 6
              ? h.set(g, 8, p, !0)
              : g < 8
              ? h.set(g + 1, 8, p, !0)
              : h.set(m - 15 + g, 8, p, !0),
            g < 8
              ? h.set(8, m - g - 1, p, !0)
              : g < 9
              ? h.set(8, 15 - g - 1 + 1, p, !0)
              : h.set(8, 15 - g - 1, p, !0);
        h.set(m - 8, 8, 1, !0);
      }
      c.create = function (h, c) {
        let f, T;
        if (void 0 === h || "" === h) throw Error("No input text");
        let I = p.M;
        return (
          void 0 !== c &&
            ((I = p.from(c.errorCorrectionLevel, p.M)),
            (f = b.from(c.version)),
            (T = $.from(c.maskPattern)),
            c.toSJISFunc && g.setToSJISFunction(c.toSJISFunc)),
          (function (h, c, f, p) {
            let T;
            if (Array.isArray(h)) T = x.fromArray(h);
            else if ("string" == typeof h) {
              let g = c;
              if (!g) {
                let c = x.rawSplit(h);
                g = b.getBestVersionForData(c, f);
              }
              T = x.fromString(h, g || 40);
            } else throw Error("Invalid data");
            let I = b.getBestVersionForData(T, f);
            if (!I)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (c) {
              if (c < I)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    I +
                    ".\n"
                );
            } else c = I;
            let U = (function (h, c, f) {
                let p = new m();
                f.forEach(function (c) {
                  p.put(c.mode.bit, 4),
                    p.put(c.getLength(), B.getCharCountIndicator(c.mode, h)),
                    c.write(p);
                });
                let y = g.getSymbolTotalCodewords(h),
                  A = _.getTotalCodewordsCount(h, c),
                  E = (y - A) * 8;
                for (
                  p.getLengthInBits() + 4 <= E && p.put(0, 4);
                  p.getLengthInBits() % 8 != 0;

                )
                  p.putBit(0);
                let $ = (E - p.getLengthInBits()) / 8;
                for (let h = 0; h < $; h++) p.put(h % 2 ? 17 : 236, 8);
                return (function (h, c, f) {
                  let p, m;
                  let y = g.getSymbolTotalCodewords(c),
                    A = _.getTotalCodewordsCount(c, f),
                    E = y - A,
                    $ = _.getBlocksCount(c, f),
                    b = y % $,
                    T = $ - b,
                    B = Math.floor(y / $),
                    x = Math.floor(E / $),
                    I = x + 1,
                    U = B - x,
                    O = new C(U),
                    j = 0,
                    F = Array($),
                    K = Array($),
                    Y = 0,
                    J = new Uint8Array(h.buffer);
                  for (let h = 0; h < $; h++) {
                    let c = h < T ? x : I;
                    (F[h] = J.slice(j, j + c)),
                      (K[h] = O.encode(F[h])),
                      (j += c),
                      (Y = Math.max(Y, c));
                  }
                  let q = new Uint8Array(y),
                    Q = 0;
                  for (p = 0; p < Y; p++)
                    for (m = 0; m < $; m++)
                      p < F[m].length && (q[Q++] = F[m][p]);
                  for (p = 0; p < U; p++)
                    for (m = 0; m < $; m++) q[Q++] = K[m][p];
                  return q;
                })(p, h, c);
              })(c, f, T),
              O = g.getSymbolSize(c),
              j = new y(O);
            return (
              (function (h, c) {
                let f = h.size,
                  g = E.getPositions(c);
                for (let c = 0; c < g.length; c++) {
                  let p = g[c][0],
                    m = g[c][1];
                  for (let c = -1; c <= 7; c++)
                    if (!(p + c <= -1) && !(f <= p + c))
                      for (let g = -1; g <= 7; g++)
                        m + g <= -1 ||
                          f <= m + g ||
                          ((c >= 0 && c <= 6 && (0 === g || 6 === g)) ||
                          (g >= 0 && g <= 6 && (0 === c || 6 === c)) ||
                          (c >= 2 && c <= 4 && g >= 2 && g <= 4)
                            ? h.set(p + c, m + g, !0, !0)
                            : h.set(p + c, m + g, !1, !0));
                }
              })(j, c),
              (function (h) {
                let c = h.size;
                for (let f = 8; f < c - 8; f++) {
                  let c = f % 2 == 0;
                  h.set(f, 6, c, !0), h.set(6, f, c, !0);
                }
              })(j),
              (function (h, c) {
                let f = A.getPositions(c);
                for (let c = 0; c < f.length; c++) {
                  let g = f[c][0],
                    p = f[c][1];
                  for (let c = -2; c <= 2; c++)
                    for (let f = -2; f <= 2; f++)
                      -2 === c ||
                      2 === c ||
                      -2 === f ||
                      2 === f ||
                      (0 === c && 0 === f)
                        ? h.set(g + c, p + f, !0, !0)
                        : h.set(g + c, p + f, !1, !0);
                }
              })(j, c),
              setupFormatInfo(j, f, 0),
              c >= 7 &&
                (function (h, c) {
                  let f, g, p;
                  let m = h.size,
                    y = b.getEncodedBits(c);
                  for (let c = 0; c < 18; c++)
                    (f = Math.floor(c / 3)),
                      (g = (c % 3) + m - 8 - 3),
                      (p = ((y >> c) & 1) == 1),
                      h.set(f, g, p, !0),
                      h.set(g, f, p, !0);
                })(j, c),
              (function (h, c) {
                let f = h.size,
                  g = -1,
                  p = f - 1,
                  m = 7,
                  y = 0;
                for (let A = f - 1; A > 0; A -= 2)
                  for (6 === A && A--; ; ) {
                    for (let f = 0; f < 2; f++)
                      if (!h.isReserved(p, A - f)) {
                        let g = !1;
                        y < c.length && (g = ((c[y] >>> m) & 1) == 1),
                          h.set(p, A - f, g),
                          -1 == --m && (y++, (m = 7));
                      }
                    if ((p += g) < 0 || f <= p) {
                      (p -= g), (g = -g);
                      break;
                    }
                  }
              })(j, U),
              isNaN(p) &&
                (p = $.getBestMask(j, setupFormatInfo.bind(null, j, f))),
              $.applyMask(p, j),
              setupFormatInfo(j, f, p),
              {
                modules: j,
                version: c,
                errorCorrectionLevel: f,
                maskPattern: p,
                segments: T,
              }
            );
          })(h, f, I, T)
        );
      };
    },
    52882: function (h, c, f) {
      let g = f(26143);
      function ReedSolomonEncoder(h) {
        (this.genPoly = void 0),
          (this.degree = h),
          this.degree && this.initialize(this.degree);
      }
      (ReedSolomonEncoder.prototype.initialize = function (h) {
        (this.degree = h), (this.genPoly = g.generateECPolynomial(this.degree));
      }),
        (ReedSolomonEncoder.prototype.encode = function (h) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let c = new Uint8Array(h.length + this.degree);
          c.set(h);
          let f = g.mod(c, this.genPoly),
            p = this.degree - f.length;
          if (p > 0) {
            let h = new Uint8Array(this.degree);
            return h.set(f, p), h;
          }
          return f;
        }),
        (h.exports = ReedSolomonEncoder);
    },
    7007: function (h, c) {
      let f = "[0-9]+",
        g =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      g = g.replace(/u/g, "\\u");
      let p = "(?:(?![A-Z0-9 $%*+\\-./:]|" + g + ")(?:.|[\r\n]))+";
      (c.KANJI = RegExp(g, "g")),
        (c.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (c.BYTE = RegExp(p, "g")),
        (c.NUMERIC = RegExp(f, "g")),
        (c.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let m = RegExp("^" + g + "$"),
        y = RegExp("^" + f + "$"),
        A = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (c.testKanji = function (h) {
        return m.test(h);
      }),
        (c.testNumeric = function (h) {
          return y.test(h);
        }),
        (c.testAlphanumeric = function (h) {
          return A.test(h);
        });
    },
    16130: function (h, c, f) {
      let g = f(76910),
        p = f(41085),
        m = f(8260),
        y = f(43424),
        A = f(35442),
        E = f(7007),
        $ = f(10242),
        _ = f(65987);
      function getStringByteLength(h) {
        return unescape(encodeURIComponent(h)).length;
      }
      function getSegments(h, c, f) {
        let g;
        let p = [];
        for (; null !== (g = h.exec(f)); )
          p.push({ data: g[0], index: g.index, mode: c, length: g[0].length });
        return p;
      }
      function getSegmentsFromString(h) {
        let c, f;
        let p = getSegments(E.NUMERIC, g.NUMERIC, h),
          m = getSegments(E.ALPHANUMERIC, g.ALPHANUMERIC, h);
        $.isKanjiModeEnabled()
          ? ((c = getSegments(E.BYTE, g.BYTE, h)),
            (f = getSegments(E.KANJI, g.KANJI, h)))
          : ((c = getSegments(E.BYTE_KANJI, g.BYTE, h)), (f = []));
        let y = p.concat(m, c, f);
        return y
          .sort(function (h, c) {
            return h.index - c.index;
          })
          .map(function (h) {
            return { data: h.data, mode: h.mode, length: h.length };
          });
      }
      function getSegmentBitsLength(h, c) {
        switch (c) {
          case g.NUMERIC:
            return p.getBitsLength(h);
          case g.ALPHANUMERIC:
            return m.getBitsLength(h);
          case g.KANJI:
            return A.getBitsLength(h);
          case g.BYTE:
            return y.getBitsLength(h);
        }
      }
      function buildSingleSegment(h, c) {
        let f;
        let E = g.getBestModeForData(h);
        if ((f = g.from(c, E)) !== g.BYTE && f.bit < E.bit)
          throw Error(
            '"' +
              h +
              '" cannot be encoded with mode ' +
              g.toString(f) +
              ".\n Suggested mode is: " +
              g.toString(E)
          );
        switch ((f !== g.KANJI || $.isKanjiModeEnabled() || (f = g.BYTE), f)) {
          case g.NUMERIC:
            return new p(h);
          case g.ALPHANUMERIC:
            return new m(h);
          case g.KANJI:
            return new A(h);
          case g.BYTE:
            return new y(h);
        }
      }
      (c.fromArray = function (h) {
        return h.reduce(function (h, c) {
          return (
            "string" == typeof c
              ? h.push(buildSingleSegment(c, null))
              : c.data && h.push(buildSingleSegment(c.data, c.mode)),
            h
          );
        }, []);
      }),
        (c.fromString = function (h, f) {
          let p = getSegmentsFromString(h, $.isKanjiModeEnabled()),
            m = (function (h) {
              let c = [];
              for (let f = 0; f < h.length; f++) {
                let p = h[f];
                switch (p.mode) {
                  case g.NUMERIC:
                    c.push([
                      p,
                      { data: p.data, mode: g.ALPHANUMERIC, length: p.length },
                      { data: p.data, mode: g.BYTE, length: p.length },
                    ]);
                    break;
                  case g.ALPHANUMERIC:
                    c.push([
                      p,
                      { data: p.data, mode: g.BYTE, length: p.length },
                    ]);
                    break;
                  case g.KANJI:
                    c.push([
                      p,
                      {
                        data: p.data,
                        mode: g.BYTE,
                        length: getStringByteLength(p.data),
                      },
                    ]);
                    break;
                  case g.BYTE:
                    c.push([
                      {
                        data: p.data,
                        mode: g.BYTE,
                        length: getStringByteLength(p.data),
                      },
                    ]);
                }
              }
              return c;
            })(p),
            y = (function (h, c) {
              let f = {},
                p = { start: {} },
                m = ["start"];
              for (let y = 0; y < h.length; y++) {
                let A = h[y],
                  E = [];
                for (let h = 0; h < A.length; h++) {
                  let $ = A[h],
                    _ = "" + y + h;
                  E.push(_), (f[_] = { node: $, lastCount: 0 }), (p[_] = {});
                  for (let h = 0; h < m.length; h++) {
                    let y = m[h];
                    f[y] && f[y].node.mode === $.mode
                      ? ((p[y][_] =
                          getSegmentBitsLength(
                            f[y].lastCount + $.length,
                            $.mode
                          ) - getSegmentBitsLength(f[y].lastCount, $.mode)),
                        (f[y].lastCount += $.length))
                      : (f[y] && (f[y].lastCount = $.length),
                        (p[y][_] =
                          getSegmentBitsLength($.length, $.mode) +
                          4 +
                          g.getCharCountIndicator($.mode, c)));
                  }
                }
                m = E;
              }
              for (let h = 0; h < m.length; h++) p[m[h]].end = 0;
              return { map: p, table: f };
            })(m, f),
            A = _.find_path(y.map, "start", "end"),
            E = [];
          for (let h = 1; h < A.length - 1; h++) E.push(y.table[A[h]].node);
          return c.fromArray(
            E.reduce(function (h, c) {
              let f = h.length - 1 >= 0 ? h[h.length - 1] : null;
              return (
                f && f.mode === c.mode
                  ? (h[h.length - 1].data += c.data)
                  : h.push(c),
                h
              );
            }, [])
          );
        }),
        (c.rawSplit = function (h) {
          return c.fromArray(getSegmentsFromString(h, $.isKanjiModeEnabled()));
        });
    },
    10242: function (h, c) {
      let f;
      let g = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
      (c.getSymbolSize = function (h) {
        if (!h) throw Error('"version" cannot be null or undefined');
        if (h < 1 || h > 40)
          throw Error('"version" should be in range from 1 to 40');
        return 4 * h + 17;
      }),
        (c.getSymbolTotalCodewords = function (h) {
          return g[h];
        }),
        (c.getBCHDigit = function (h) {
          let c = 0;
          for (; 0 !== h; ) c++, (h >>>= 1);
          return c;
        }),
        (c.setToSJISFunction = function (h) {
          if ("function" != typeof h)
            throw Error('"toSJISFunc" is not a valid function.');
          f = h;
        }),
        (c.isKanjiModeEnabled = function () {
          return void 0 !== f;
        }),
        (c.toSJIS = function (h) {
          return f(h);
        });
    },
    43114: function (h, c) {
      c.isValid = function (h) {
        return !isNaN(h) && h >= 1 && h <= 40;
      };
    },
    23103: function (h, c, f) {
      let g = f(10242),
        p = f(35393),
        m = f(64908),
        y = f(76910),
        A = f(43114),
        E = g.getBCHDigit(7973);
      function getReservedBitsCount(h, c) {
        return y.getCharCountIndicator(h, c) + 4;
      }
      (c.from = function (h, c) {
        return A.isValid(h) ? parseInt(h, 10) : c;
      }),
        (c.getCapacity = function (h, c, f) {
          if (!A.isValid(h)) throw Error("Invalid QR Code version");
          void 0 === f && (f = y.BYTE);
          let m = g.getSymbolTotalCodewords(h),
            E = p.getTotalCodewordsCount(h, c),
            $ = (m - E) * 8;
          if (f === y.MIXED) return $;
          let _ = $ - getReservedBitsCount(f, h);
          switch (f) {
            case y.NUMERIC:
              return Math.floor((_ / 10) * 3);
            case y.ALPHANUMERIC:
              return Math.floor((_ / 11) * 2);
            case y.KANJI:
              return Math.floor(_ / 13);
            case y.BYTE:
            default:
              return Math.floor(_ / 8);
          }
        }),
        (c.getBestVersionForData = function (h, f) {
          let g;
          let p = m.from(f, m.M);
          if (Array.isArray(h)) {
            if (h.length > 1)
              return (function (h, f) {
                for (let g = 1; g <= 40; g++) {
                  let p = (function (h, c) {
                    let f = 0;
                    return (
                      h.forEach(function (h) {
                        let g = getReservedBitsCount(h.mode, c);
                        f += g + h.getBitsLength();
                      }),
                      f
                    );
                  })(h, g);
                  if (p <= c.getCapacity(g, f, y.MIXED)) return g;
                }
              })(h, p);
            if (0 === h.length) return 1;
            g = h[0];
          } else g = h;
          return (function (h, f, g) {
            for (let p = 1; p <= 40; p++)
              if (f <= c.getCapacity(p, g, h)) return p;
          })(g.mode, g.getLength(), p);
        }),
        (c.getEncodedBits = function (h) {
          if (!A.isValid(h) || h < 7) throw Error("Invalid QR Code version");
          let c = h << 12;
          for (; g.getBCHDigit(c) - E >= 0; )
            c ^= 7973 << (g.getBCHDigit(c) - E);
          return (h << 12) | c;
        });
    },
    6907: function (h, c, f) {
      let g = f(89653);
      (c.render = function (h, c, f) {
        var p;
        let m = f,
          y = c;
        void 0 !== m || (c && c.getContext) || ((m = c), (c = void 0)),
          c ||
            (y = (function () {
              try {
                return document.createElement("canvas");
              } catch (h) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (m = g.getOptions(m));
        let A = g.getImageWidth(h.modules.size, m),
          E = y.getContext("2d"),
          $ = E.createImageData(A, A);
        return (
          g.qrToImageData($.data, h, m),
          (p = y),
          E.clearRect(0, 0, p.width, p.height),
          p.style || (p.style = {}),
          (p.height = A),
          (p.width = A),
          (p.style.height = A + "px"),
          (p.style.width = A + "px"),
          E.putImageData($, 0, 0),
          y
        );
      }),
        (c.renderToDataURL = function (h, f, g) {
          let p = g;
          void 0 !== p || (f && f.getContext) || ((p = f), (f = void 0)),
            p || (p = {});
          let m = c.render(h, f, p),
            y = p.type || "image/png",
            A = p.rendererOpts || {};
          return m.toDataURL(y, A.quality);
        });
    },
    93776: function (h, c, f) {
      let g = f(89653);
      function getColorAttrib(h, c) {
        let f = h.a / 255,
          g = c + '="' + h.hex + '"';
        return f < 1
          ? g + " " + c + '-opacity="' + f.toFixed(2).slice(1) + '"'
          : g;
      }
      function svgCmd(h, c, f) {
        let g = h + c;
        return void 0 !== f && (g += " " + f), g;
      }
      c.render = function (h, c, f) {
        let p = g.getOptions(c),
          m = h.modules.size,
          y = h.modules.data,
          A = m + 2 * p.margin,
          E = p.color.light.a
            ? "<path " +
              getColorAttrib(p.color.light, "fill") +
              ' d="M0 0h' +
              A +
              "v" +
              A +
              'H0z"/>'
            : "",
          $ =
            "<path " +
            getColorAttrib(p.color.dark, "stroke") +
            ' d="' +
            (function (h, c, f) {
              let g = "",
                p = 0,
                m = !1,
                y = 0;
              for (let A = 0; A < h.length; A++) {
                let E = Math.floor(A % c),
                  $ = Math.floor(A / c);
                E || m || (m = !0),
                  h[A]
                    ? (y++,
                      (A > 0 && E > 0 && h[A - 1]) ||
                        ((g += m
                          ? svgCmd("M", E + f, 0.5 + $ + f)
                          : svgCmd("m", p, 0)),
                        (p = 0),
                        (m = !1)),
                      (E + 1 < c && h[A + 1]) ||
                        ((g += svgCmd("h", y)), (y = 0)))
                    : p++;
              }
              return g;
            })(y, m, p.margin) +
            '"/>',
          _ = p.width
            ? 'width="' + p.width + '" height="' + p.width + '" '
            : "",
          C =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            _ +
            ('viewBox="0 0 ' + A) +
            " " +
            A +
            '" shape-rendering="crispEdges">' +
            E +
            $ +
            "</svg>\n";
        return "function" == typeof f && f(null, C), C;
      };
    },
    89653: function (h, c) {
      function hex2rgba(h) {
        if (("number" == typeof h && (h = h.toString()), "string" != typeof h))
          throw Error("Color should be defined as hex string");
        let c = h.slice().replace("#", "").split("");
        if (c.length < 3 || 5 === c.length || c.length > 8)
          throw Error("Invalid hex color: " + h);
        (3 === c.length || 4 === c.length) &&
          (c = Array.prototype.concat.apply(
            [],
            c.map(function (h) {
              return [h, h];
            })
          )),
          6 === c.length && c.push("F", "F");
        let f = parseInt(c.join(""), 16);
        return {
          r: (f >> 24) & 255,
          g: (f >> 16) & 255,
          b: (f >> 8) & 255,
          a: 255 & f,
          hex: "#" + c.slice(0, 6).join(""),
        };
      }
      (c.getOptions = function (h) {
        h || (h = {}), h.color || (h.color = {});
        let c =
            void 0 === h.margin || null === h.margin || h.margin < 0
              ? 4
              : h.margin,
          f = h.width && h.width >= 21 ? h.width : void 0,
          g = h.scale || 4;
        return {
          width: f,
          scale: f ? 4 : g,
          margin: c,
          color: {
            dark: hex2rgba(h.color.dark || "#000000ff"),
            light: hex2rgba(h.color.light || "#ffffffff"),
          },
          type: h.type,
          rendererOpts: h.rendererOpts || {},
        };
      }),
        (c.getScale = function (h, c) {
          return c.width && c.width >= h + 2 * c.margin
            ? c.width / (h + 2 * c.margin)
            : c.scale;
        }),
        (c.getImageWidth = function (h, f) {
          let g = c.getScale(h, f);
          return Math.floor((h + 2 * f.margin) * g);
        }),
        (c.qrToImageData = function (h, f, g) {
          let p = f.modules.size,
            m = f.modules.data,
            y = c.getScale(p, g),
            A = Math.floor((p + 2 * g.margin) * y),
            E = g.margin * y,
            $ = [g.color.light, g.color.dark];
          for (let c = 0; c < A; c++)
            for (let f = 0; f < A; f++) {
              let _ = (c * A + f) * 4,
                C = g.color.light;
              if (c >= E && f >= E && c < A - E && f < A - E) {
                let h = Math.floor((c - E) / y),
                  g = Math.floor((f - E) / y);
                C = $[m[h * p + g] ? 1 : 0];
              }
              (h[_++] = C.r), (h[_++] = C.g), (h[_++] = C.b), (h[_] = C.a);
            }
        });
    },
    15713: function (h, c, f) {
      "use strict";
      f.d(c, {
        M: function () {
          return e;
        },
      });
      let e = (h) => (c) =>
        "function" == typeof c
          ? (customElements.define(h, c), c)
          : ((h, c) => {
              let { kind: f, elements: g } = c;
              return {
                kind: f,
                elements: g,
                finisher(c) {
                  customElements.define(h, c);
                },
              };
            })(h, c);
    },
    99662: function (h, c, f) {
      "use strict";
      f.d(c, {
        C: function () {
          return n;
        },
      });
      let i = (h, c) =>
          "method" !== c.kind || !c.descriptor || "value" in c.descriptor
            ? {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                originalKey: c.key,
                initializer() {
                  "function" == typeof c.initializer &&
                    (this[c.key] = c.initializer.call(this));
                },
                finisher(f) {
                  f.createProperty(c.key, h);
                },
              }
            : {
                ...c,
                finisher(f) {
                  f.createProperty(c.key, h);
                },
              },
        e = (h, c, f) => {
          c.constructor.createProperty(f, h);
        };
      function n(h) {
        return (c, f) => (void 0 !== f ? e(h, c, f) : i(h, c));
      }
    },
    57935: function (h, c, f) {
      "use strict";
      var g;
      null !=
        (null === (g = window.HTMLSlotElement) || void 0 === g
          ? void 0
          : g.prototype.assignedElements) ||
        ((h, c) =>
          h.assignedNodes(c).filter((h) => h.nodeType === Node.ELEMENT_NODE));
    },
    30043: function (h, c, f) {
      "use strict";
      f(57935);
    },
    39158: function (h, c, f) {
      "use strict";
      f.d(c, {
        S: function () {
          return t;
        },
      });
      var g = f(99662);
      function t(h) {
        return (0, g.C)({ ...h, state: !0 });
      }
    },
    23588: function (h, c, f) {
      "use strict";
      var g;
      f.d(c, {
        fl: function () {
          return u;
        },
        iv: function () {
          return i;
        },
      });
      let p = window,
        m =
          p.ShadowRoot &&
          (void 0 === p.ShadyCSS || p.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        y = Symbol(),
        A = new WeakMap();
      let o = class o {
        constructor(h, c, f) {
          if (((this._$cssResult$ = !0), f !== y))
            throw Error(
              "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
            );
          (this.cssText = h), (this.t = c);
        }
        get styleSheet() {
          let h = this.o,
            c = this.t;
          if (m && void 0 === h) {
            let f = void 0 !== c && 1 === c.length;
            f && (h = A.get(c)),
              void 0 === h &&
                ((this.o = h = new CSSStyleSheet()).replaceSync(this.cssText),
                f && A.set(c, h));
          }
          return h;
        }
        toString() {
          return this.cssText;
        }
      };
      let r = (h) => new o("string" == typeof h ? h : h + "", void 0, y),
        i = (h, ...c) => {
          let f =
            1 === h.length
              ? h[0]
              : c.reduce(
                  (c, f, g) =>
                    c +
                    ((h) => {
                      if (!0 === h._$cssResult$) return h.cssText;
                      if ("number" == typeof h) return h;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          h +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                      );
                    })(f) +
                    h[g + 1],
                  h[0]
                );
          return new o(f, h, y);
        },
        S = (h, c) => {
          m
            ? (h.adoptedStyleSheets = c.map((h) =>
                h instanceof CSSStyleSheet ? h : h.styleSheet
              ))
            : c.forEach((c) => {
                let f = document.createElement("style"),
                  g = p.litNonce;
                void 0 !== g && f.setAttribute("nonce", g),
                  (f.textContent = c.cssText),
                  h.appendChild(f);
              });
        },
        E = m
          ? (h) => h
          : (h) =>
              h instanceof CSSStyleSheet
                ? ((h) => {
                    let c = "";
                    for (let f of h.cssRules) c += f.cssText;
                    return r(c);
                  })(h)
                : h,
        $ = window,
        _ = $.trustedTypes,
        C = _ ? _.emptyScript : "",
        b = $.reactiveElementPolyfillSupport,
        T = {
          toAttribute(h, c) {
            switch (c) {
              case Boolean:
                h = h ? C : null;
                break;
              case Object:
              case Array:
                h = null == h ? h : JSON.stringify(h);
            }
            return h;
          },
          fromAttribute(h, c) {
            let f = h;
            switch (c) {
              case Boolean:
                f = null !== h;
                break;
              case Number:
                f = null === h ? null : Number(h);
                break;
              case Object:
              case Array:
                try {
                  f = JSON.parse(h);
                } catch (h) {
                  f = null;
                }
            }
            return f;
          },
        },
        a = (h, c) => c !== h && (c == c || h == h),
        B = {
          attribute: !0,
          type: String,
          converter: T,
          reflect: !1,
          hasChanged: a,
        },
        x = "finalized";
      let u = class u extends HTMLElement {
        constructor() {
          super(),
            (this._$Ei = new Map()),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this._$El = null),
            this._$Eu();
        }
        static addInitializer(h) {
          var c;
          this.finalize(),
            (null !== (c = this.h) && void 0 !== c ? c : (this.h = [])).push(h);
        }
        static get observedAttributes() {
          this.finalize();
          let h = [];
          return (
            this.elementProperties.forEach((c, f) => {
              let g = this._$Ep(f, c);
              void 0 !== g && (this._$Ev.set(g, f), h.push(g));
            }),
            h
          );
        }
        static createProperty(h, c = B) {
          if (
            (c.state && (c.attribute = !1),
            this.finalize(),
            this.elementProperties.set(h, c),
            !c.noAccessor && !this.prototype.hasOwnProperty(h))
          ) {
            let f = "symbol" == typeof h ? Symbol() : "__" + h,
              g = this.getPropertyDescriptor(h, f, c);
            void 0 !== g && Object.defineProperty(this.prototype, h, g);
          }
        }
        static getPropertyDescriptor(h, c, f) {
          return {
            get() {
              return this[c];
            },
            set(g) {
              let p = this[h];
              (this[c] = g), this.requestUpdate(h, p, f);
            },
            configurable: !0,
            enumerable: !0,
          };
        }
        static getPropertyOptions(h) {
          return this.elementProperties.get(h) || B;
        }
        static finalize() {
          if (this.hasOwnProperty(x)) return !1;
          this[x] = !0;
          let h = Object.getPrototypeOf(this);
          if (
            (h.finalize(),
            void 0 !== h.h && (this.h = [...h.h]),
            (this.elementProperties = new Map(h.elementProperties)),
            (this._$Ev = new Map()),
            this.hasOwnProperty("properties"))
          ) {
            let h = this.properties,
              c = [
                ...Object.getOwnPropertyNames(h),
                ...Object.getOwnPropertySymbols(h),
              ];
            for (let f of c) this.createProperty(f, h[f]);
          }
          return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
        }
        static finalizeStyles(h) {
          let c = [];
          if (Array.isArray(h)) {
            let f = new Set(h.flat(1 / 0).reverse());
            for (let h of f) c.unshift(E(h));
          } else void 0 !== h && c.push(E(h));
          return c;
        }
        static _$Ep(h, c) {
          let f = c.attribute;
          return !1 === f
            ? void 0
            : "string" == typeof f
            ? f
            : "string" == typeof h
            ? h.toLowerCase()
            : void 0;
        }
        _$Eu() {
          var h;
          (this._$E_ = new Promise((h) => (this.enableUpdating = h))),
            (this._$AL = new Map()),
            this._$Eg(),
            this.requestUpdate(),
            null === (h = this.constructor.h) ||
              void 0 === h ||
              h.forEach((h) => h(this));
        }
        addController(h) {
          var c, f;
          (null !== (c = this._$ES) && void 0 !== c
            ? c
            : (this._$ES = [])
          ).push(h),
            void 0 !== this.renderRoot &&
              this.isConnected &&
              (null === (f = h.hostConnected) || void 0 === f || f.call(h));
        }
        removeController(h) {
          var c;
          null === (c = this._$ES) ||
            void 0 === c ||
            c.splice(this._$ES.indexOf(h) >>> 0, 1);
        }
        _$Eg() {
          this.constructor.elementProperties.forEach((h, c) => {
            this.hasOwnProperty(c) &&
              (this._$Ei.set(c, this[c]), delete this[c]);
          });
        }
        createRenderRoot() {
          var h;
          let c =
            null !== (h = this.shadowRoot) && void 0 !== h
              ? h
              : this.attachShadow(this.constructor.shadowRootOptions);
          return S(c, this.constructor.elementStyles), c;
        }
        connectedCallback() {
          var h;
          void 0 === this.renderRoot &&
            (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (h = this._$ES) ||
              void 0 === h ||
              h.forEach((h) => {
                var c;
                return null === (c = h.hostConnected) || void 0 === c
                  ? void 0
                  : c.call(h);
              });
        }
        enableUpdating(h) {}
        disconnectedCallback() {
          var h;
          null === (h = this._$ES) ||
            void 0 === h ||
            h.forEach((h) => {
              var c;
              return null === (c = h.hostDisconnected) || void 0 === c
                ? void 0
                : c.call(h);
            });
        }
        attributeChangedCallback(h, c, f) {
          this._$AK(h, f);
        }
        _$EO(h, c, f = B) {
          var g;
          let p = this.constructor._$Ep(h, f);
          if (void 0 !== p && !0 === f.reflect) {
            let m = (
              void 0 !==
              (null === (g = f.converter) || void 0 === g
                ? void 0
                : g.toAttribute)
                ? f.converter
                : T
            ).toAttribute(c, f.type);
            (this._$El = h),
              null == m ? this.removeAttribute(p) : this.setAttribute(p, m),
              (this._$El = null);
          }
        }
        _$AK(h, c) {
          var f;
          let g = this.constructor,
            p = g._$Ev.get(h);
          if (void 0 !== p && this._$El !== p) {
            let h = g.getPropertyOptions(p),
              m =
                "function" == typeof h.converter
                  ? { fromAttribute: h.converter }
                  : void 0 !==
                    (null === (f = h.converter) || void 0 === f
                      ? void 0
                      : f.fromAttribute)
                  ? h.converter
                  : T;
            (this._$El = p),
              (this[p] = m.fromAttribute(c, h.type)),
              (this._$El = null);
          }
        }
        requestUpdate(h, c, f) {
          let g = !0;
          void 0 !== h &&
            ((
              (f = f || this.constructor.getPropertyOptions(h)).hasChanged || a
            )(this[h], c)
              ? (this._$AL.has(h) || this._$AL.set(h, c),
                !0 === f.reflect &&
                  this._$El !== h &&
                  (void 0 === this._$EC && (this._$EC = new Map()),
                  this._$EC.set(h, f)))
              : (g = !1)),
            !this.isUpdatePending && g && (this._$E_ = this._$Ej());
        }
        async _$Ej() {
          this.isUpdatePending = !0;
          try {
            await this._$E_;
          } catch (h) {
            Promise.reject(h);
          }
          let h = this.scheduleUpdate();
          return null != h && (await h), !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var h;
          if (!this.isUpdatePending) return;
          this.hasUpdated,
            this._$Ei &&
              (this._$Ei.forEach((h, c) => (this[c] = h)),
              (this._$Ei = void 0));
          let c = !1,
            f = this._$AL;
          try {
            (c = this.shouldUpdate(f))
              ? (this.willUpdate(f),
                null === (h = this._$ES) ||
                  void 0 === h ||
                  h.forEach((h) => {
                    var c;
                    return null === (c = h.hostUpdate) || void 0 === c
                      ? void 0
                      : c.call(h);
                  }),
                this.update(f))
              : this._$Ek();
          } catch (h) {
            throw ((c = !1), this._$Ek(), h);
          }
          c && this._$AE(f);
        }
        willUpdate(h) {}
        _$AE(h) {
          var c;
          null === (c = this._$ES) ||
            void 0 === c ||
            c.forEach((h) => {
              var c;
              return null === (c = h.hostUpdated) || void 0 === c
                ? void 0
                : c.call(h);
            }),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(h)),
            this.updated(h);
        }
        _$Ek() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$E_;
        }
        shouldUpdate(h) {
          return !0;
        }
        update(h) {
          void 0 !== this._$EC &&
            (this._$EC.forEach((h, c) => this._$EO(c, this[c], h)),
            (this._$EC = void 0)),
            this._$Ek();
        }
        updated(h) {}
        firstUpdated(h) {}
      };
      (u[x] = !0),
        (u.elementProperties = new Map()),
        (u.elementStyles = []),
        (u.shadowRootOptions = { mode: "open" }),
        null == b || b({ ReactiveElement: u }),
        (null !== (g = $.reactiveElementVersions) && void 0 !== g
          ? g
          : ($.reactiveElementVersions = [])
        ).push("1.6.3");
    },
    8922: function (h, c, f) {
      "use strict";
      f.d(c, {
        YP: function () {
          return y.YP;
        },
        dy: function () {
          return y.dy;
        },
        iv: function () {
          return m.iv;
        },
        oi: function () {
          return s;
        },
      });
      var g,
        p,
        m = f(23588),
        y = f(33692);
      let s = class s extends m.fl {
        constructor() {
          super(...arguments),
            (this.renderOptions = { host: this }),
            (this._$Do = void 0);
        }
        createRenderRoot() {
          var h, c;
          let f = super.createRenderRoot();
          return (
            (null !== (h = (c = this.renderOptions).renderBefore) &&
              void 0 !== h) ||
              (c.renderBefore = f.firstChild),
            f
          );
        }
        update(h) {
          let c = this.render();
          this.hasUpdated ||
            (this.renderOptions.isConnected = this.isConnected),
            super.update(h),
            (this._$Do = (0, y.sY)(c, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          var h;
          super.connectedCallback(),
            null === (h = this._$Do) || void 0 === h || h.setConnected(!0);
        }
        disconnectedCallback() {
          var h;
          super.disconnectedCallback(),
            null === (h = this._$Do) || void 0 === h || h.setConnected(!1);
        }
        render() {
          return y.Jb;
        }
      };
      (s.finalized = !0),
        (s._$litElement$ = !0),
        null === (g = globalThis.litElementHydrateSupport) ||
          void 0 === g ||
          g.call(globalThis, { LitElement: s });
      let A = globalThis.litElementPolyfillSupport;
      null == A || A({ LitElement: s }),
        (null !== (p = globalThis.litElementVersions) && void 0 !== p
          ? p
          : (globalThis.litElementVersions = [])
        ).push("3.3.3");
    },
    7522: function (h, c, f) {
      "use strict";
      f.d(c, {
        $: function () {
          return m;
        },
      });
      var g,
        p = f(33692);
      let i = class i {
        constructor(h) {}
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(h, c, f) {
          (this._$Ct = h), (this._$AM = c), (this._$Ci = f);
        }
        _$AS(h, c) {
          return this.update(h, c);
        }
        update(h, c) {
          return this.render(...c);
        }
      };
      let m =
        ((g = class extends i {
          constructor(h) {
            var c;
            if (
              (super(h),
              1 !== h.type ||
                "class" !== h.name ||
                (null === (c = h.strings) || void 0 === c ? void 0 : c.length) >
                  2)
            )
              throw Error(
                "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
              );
          }
          render(h) {
            return (
              " " +
              Object.keys(h)
                .filter((c) => h[c])
                .join(" ") +
              " "
            );
          }
          update(h, [c]) {
            var f, g;
            if (void 0 === this.it) {
              for (let g in ((this.it = new Set()),
              void 0 !== h.strings &&
                (this.nt = new Set(
                  h.strings
                    .join(" ")
                    .split(/\s/)
                    .filter((h) => "" !== h)
                )),
              c))
                !c[g] ||
                  (null === (f = this.nt) || void 0 === f
                    ? void 0
                    : f.has(g)) ||
                  this.it.add(g);
              return this.render(c);
            }
            let m = h.element.classList;
            for (let h in (this.it.forEach((h) => {
              h in c || (m.remove(h), this.it.delete(h));
            }),
            c)) {
              let f = !!c[h];
              f === this.it.has(h) ||
                (null === (g = this.nt) || void 0 === g ? void 0 : g.has(h)) ||
                (f
                  ? (m.add(h), this.it.add(h))
                  : (m.remove(h), this.it.delete(h)));
            }
            return p.Jb;
          }
        }),
        (...h) => ({ _$litDirective$: g, values: h }));
    },
    30577: function (h, c, f) {
      "use strict";
      f.d(c, {
        o: function () {
          return l;
        },
      });
      var g = f(33692);
      let l = (h) => (null != h ? h : g.Ld);
    },
    33692: function (h, c, f) {
      "use strict";
      var g;
      f.d(c, {
        Jb: function () {
          return J;
        },
        Ld: function () {
          return q;
        },
        YP: function () {
          return Y;
        },
        dy: function () {
          return K;
        },
        sY: function () {
          return D;
        },
      });
      let p = window,
        m = p.trustedTypes,
        y = m ? m.createPolicy("lit-html", { createHTML: (h) => h }) : void 0,
        A = "$lit$",
        E = `lit$${(Math.random() + "").slice(9)}$`,
        $ = "?" + E,
        _ = `<${$}>`,
        C = document,
        u = () => C.createComment(""),
        d = (h) =>
          null === h || ("object" != typeof h && "function" != typeof h),
        b = Array.isArray,
        v = (h) =>
          b(h) ||
          "function" == typeof (null == h ? void 0 : h[Symbol.iterator]),
        T = "[ 	\n\f\r]",
        B = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        x = /-->/g,
        I = />/g,
        U = RegExp(
          `>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
          "g"
        ),
        O = /'/g,
        j = /"/g,
        F = /^(?:script|style|textarea|title)$/i,
        w =
          (h) =>
          (c, ...f) => ({ _$litType$: h, strings: c, values: f }),
        K = w(1),
        Y = w(2),
        J = Symbol.for("lit-noChange"),
        q = Symbol.for("lit-nothing"),
        Q = new WeakMap(),
        W = C.createTreeWalker(C, 129, null, !1);
      function P(h, c) {
        if (!Array.isArray(h) || !h.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return void 0 !== y ? y.createHTML(c) : c;
      }
      let V = (h, c) => {
        let f = h.length - 1,
          g = [],
          p,
          m = 2 === c ? "<svg>" : "",
          y = B;
        for (let c = 0; c < f; c++) {
          let f = h[c],
            $,
            C,
            b = -1,
            T = 0;
          for (
            ;
            T < f.length && ((y.lastIndex = T), null !== (C = y.exec(f)));

          )
            (T = y.lastIndex),
              y === B
                ? "!--" === C[1]
                  ? (y = x)
                  : void 0 !== C[1]
                  ? (y = I)
                  : void 0 !== C[2]
                  ? (F.test(C[2]) && (p = RegExp("</" + C[2], "g")), (y = U))
                  : void 0 !== C[3] && (y = U)
                : y === U
                ? ">" === C[0]
                  ? ((y = null != p ? p : B), (b = -1))
                  : void 0 === C[1]
                  ? (b = -2)
                  : ((b = y.lastIndex - C[2].length),
                    ($ = C[1]),
                    (y = void 0 === C[3] ? U : '"' === C[3] ? j : O))
                : y === j || y === O
                ? (y = U)
                : y === x || y === I
                ? (y = B)
                : ((y = U), (p = void 0));
          let K = y === U && h[c + 1].startsWith("/>") ? " " : "";
          m +=
            y === B
              ? f + _
              : b >= 0
              ? (g.push($), f.slice(0, b) + A + f.slice(b) + E + K)
              : f + E + (-2 === b ? (g.push(void 0), c) : K);
        }
        return [P(h, m + (h[f] || "<?>") + (2 === c ? "</svg>" : "")), g];
      };
      let N = class N {
        constructor({ strings: h, _$litType$: c }, f) {
          let g;
          this.parts = [];
          let p = 0,
            y = 0,
            _ = h.length - 1,
            C = this.parts,
            [b, T] = V(h, c);
          if (
            ((this.el = N.createElement(b, f)),
            (W.currentNode = this.el.content),
            2 === c)
          ) {
            let h = this.el.content,
              c = h.firstChild;
            c.remove(), h.append(...c.childNodes);
          }
          for (; null !== (g = W.nextNode()) && C.length < _; ) {
            if (1 === g.nodeType) {
              if (g.hasAttributes()) {
                let h = [];
                for (let c of g.getAttributeNames())
                  if (c.endsWith(A) || c.startsWith(E)) {
                    let f = T[y++];
                    if ((h.push(c), void 0 !== f)) {
                      let h = g.getAttribute(f.toLowerCase() + A).split(E),
                        c = /([.?@])?(.*)/.exec(f);
                      C.push({
                        type: 1,
                        index: p,
                        name: c[2],
                        strings: h,
                        ctor:
                          "." === c[1]
                            ? H
                            : "?" === c[1]
                            ? L
                            : "@" === c[1]
                            ? z
                            : k,
                      });
                    } else C.push({ type: 6, index: p });
                  }
                for (let c of h) g.removeAttribute(c);
              }
              if (F.test(g.tagName)) {
                let h = g.textContent.split(E),
                  c = h.length - 1;
                if (c > 0) {
                  g.textContent = m ? m.emptyScript : "";
                  for (let f = 0; f < c; f++)
                    g.append(h[f], u()),
                      W.nextNode(),
                      C.push({ type: 2, index: ++p });
                  g.append(h[c], u());
                }
              }
            } else if (8 === g.nodeType) {
              if (g.data === $) C.push({ type: 2, index: p });
              else {
                let h = -1;
                for (; -1 !== (h = g.data.indexOf(E, h + 1)); )
                  C.push({ type: 7, index: p }), (h += E.length - 1);
              }
            }
            p++;
          }
        }
        static createElement(h, c) {
          let f = C.createElement("template");
          return (f.innerHTML = h), f;
        }
      };
      function S(h, c, f = h, g) {
        var p, m, y;
        if (c === J) return c;
        let A =
            void 0 !== g
              ? null === (p = f._$Co) || void 0 === p
                ? void 0
                : p[g]
              : f._$Cl,
          E = d(c) ? void 0 : c._$litDirective$;
        return (
          (null == A ? void 0 : A.constructor) !== E &&
            (null === (m = null == A ? void 0 : A._$AO) ||
              void 0 === m ||
              m.call(A, !1),
            void 0 === E ? (A = void 0) : (A = new E(h))._$AT(h, f, g),
            void 0 !== g
              ? ((null !== (y = f._$Co) && void 0 !== y ? y : (f._$Co = []))[
                  g
                ] = A)
              : (f._$Cl = A)),
          void 0 !== A && (c = S(h, A._$AS(h, c.values), A, g)),
          c
        );
      }
      let M = class M {
        constructor(h, c) {
          (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = h),
            (this._$AM = c);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(h) {
          var c;
          let {
              el: { content: f },
              parts: g,
            } = this._$AD,
            p = (
              null !== (c = null == h ? void 0 : h.creationScope) &&
              void 0 !== c
                ? c
                : C
            ).importNode(f, !0);
          W.currentNode = p;
          let m = W.nextNode(),
            y = 0,
            A = 0,
            E = g[0];
          for (; void 0 !== E; ) {
            if (y === E.index) {
              let c;
              2 === E.type
                ? (c = new R(m, m.nextSibling, this, h))
                : 1 === E.type
                ? (c = new E.ctor(m, E.name, E.strings, this, h))
                : 6 === E.type && (c = new Z(m, this, h)),
                this._$AV.push(c),
                (E = g[++A]);
            }
            y !== (null == E ? void 0 : E.index) && ((m = W.nextNode()), y++);
          }
          return (W.currentNode = C), p;
        }
        v(h) {
          let c = 0;
          for (let f of this._$AV)
            void 0 !== f &&
              (void 0 !== f.strings
                ? (f._$AI(h, f, c), (c += f.strings.length - 2))
                : f._$AI(h[c])),
              c++;
        }
      };
      let R = class R {
        constructor(h, c, f, g) {
          var p;
          (this.type = 2),
            (this._$AH = q),
            (this._$AN = void 0),
            (this._$AA = h),
            (this._$AB = c),
            (this._$AM = f),
            (this.options = g),
            (this._$Cp =
              null === (p = null == g ? void 0 : g.isConnected) ||
              void 0 === p ||
              p);
        }
        get _$AU() {
          var h, c;
          return null !==
            (c = null === (h = this._$AM) || void 0 === h ? void 0 : h._$AU) &&
            void 0 !== c
            ? c
            : this._$Cp;
        }
        get parentNode() {
          let h = this._$AA.parentNode,
            c = this._$AM;
          return (
            void 0 !== c &&
              11 === (null == h ? void 0 : h.nodeType) &&
              (h = c.parentNode),
            h
          );
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(h, c = this) {
          d((h = S(this, h, c)))
            ? h === q || null == h || "" === h
              ? (this._$AH !== q && this._$AR(), (this._$AH = q))
              : h !== this._$AH && h !== J && this._(h)
            : void 0 !== h._$litType$
            ? this.g(h)
            : void 0 !== h.nodeType
            ? this.$(h)
            : v(h)
            ? this.T(h)
            : this._(h);
        }
        k(h) {
          return this._$AA.parentNode.insertBefore(h, this._$AB);
        }
        $(h) {
          this._$AH !== h && (this._$AR(), (this._$AH = this.k(h)));
        }
        _(h) {
          this._$AH !== q && d(this._$AH)
            ? (this._$AA.nextSibling.data = h)
            : this.$(C.createTextNode(h)),
            (this._$AH = h);
        }
        g(h) {
          var c;
          let { values: f, _$litType$: g } = h,
            p =
              "number" == typeof g
                ? this._$AC(h)
                : (void 0 === g.el &&
                    (g.el = N.createElement(P(g.h, g.h[0]), this.options)),
                  g);
          if (
            (null === (c = this._$AH) || void 0 === c ? void 0 : c._$AD) === p
          )
            this._$AH.v(f);
          else {
            let h = new M(p, this),
              c = h.u(this.options);
            h.v(f), this.$(c), (this._$AH = h);
          }
        }
        _$AC(h) {
          let c = Q.get(h.strings);
          return void 0 === c && Q.set(h.strings, (c = new N(h))), c;
        }
        T(h) {
          b(this._$AH) || ((this._$AH = []), this._$AR());
          let c = this._$AH,
            f,
            g = 0;
          for (let p of h)
            g === c.length
              ? c.push(
                  (f = new R(this.k(u()), this.k(u()), this, this.options))
                )
              : (f = c[g]),
              f._$AI(p),
              g++;
          g < c.length &&
            (this._$AR(f && f._$AB.nextSibling, g), (c.length = g));
        }
        _$AR(h = this._$AA.nextSibling, c) {
          var f;
          for (
            null === (f = this._$AP) || void 0 === f || f.call(this, !1, !0, c);
            h && h !== this._$AB;

          ) {
            let c = h.nextSibling;
            h.remove(), (h = c);
          }
        }
        setConnected(h) {
          var c;
          void 0 === this._$AM &&
            ((this._$Cp = h),
            null === (c = this._$AP) || void 0 === c || c.call(this, h));
        }
      };
      let k = class k {
        constructor(h, c, f, g, p) {
          (this.type = 1),
            (this._$AH = q),
            (this._$AN = void 0),
            (this.element = h),
            (this.name = c),
            (this._$AM = g),
            (this.options = p),
            f.length > 2 || "" !== f[0] || "" !== f[1]
              ? ((this._$AH = Array(f.length - 1).fill(new String())),
                (this.strings = f))
              : (this._$AH = q);
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(h, c = this, f, g) {
          let p = this.strings,
            m = !1;
          if (void 0 === p)
            (m = !d((h = S(this, h, c, 0))) || (h !== this._$AH && h !== J)) &&
              (this._$AH = h);
          else {
            let g, y;
            let A = h;
            for (h = p[0], g = 0; g < p.length - 1; g++)
              (y = S(this, A[f + g], c, g)) === J && (y = this._$AH[g]),
                m || (m = !d(y) || y !== this._$AH[g]),
                y === q
                  ? (h = q)
                  : h !== q && (h += (null != y ? y : "") + p[g + 1]),
                (this._$AH[g] = y);
          }
          m && !g && this.j(h);
        }
        j(h) {
          h === q
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, null != h ? h : "");
        }
      };
      let H = class H extends k {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(h) {
          this.element[this.name] = h === q ? void 0 : h;
        }
      };
      let X = m ? m.emptyScript : "";
      let L = class L extends k {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(h) {
          h && h !== q
            ? this.element.setAttribute(this.name, X)
            : this.element.removeAttribute(this.name);
        }
      };
      let z = class z extends k {
        constructor(h, c, f, g, p) {
          super(h, c, f, g, p), (this.type = 5);
        }
        _$AI(h, c = this) {
          var f;
          if (
            (h = null !== (f = S(this, h, c, 0)) && void 0 !== f ? f : q) === J
          )
            return;
          let g = this._$AH,
            p =
              (h === q && g !== q) ||
              h.capture !== g.capture ||
              h.once !== g.once ||
              h.passive !== g.passive,
            m = h !== q && (g === q || p);
          p && this.element.removeEventListener(this.name, this, g),
            m && this.element.addEventListener(this.name, this, h),
            (this._$AH = h);
        }
        handleEvent(h) {
          var c, f;
          "function" == typeof this._$AH
            ? this._$AH.call(
                null !==
                  (f =
                    null === (c = this.options) || void 0 === c
                      ? void 0
                      : c.host) && void 0 !== f
                  ? f
                  : this.element,
                h
              )
            : this._$AH.handleEvent(h);
        }
      };
      let Z = class Z {
        constructor(h, c, f) {
          (this.element = h),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = c),
            (this.options = f);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(h) {
          S(this, h);
        }
      };
      let G = p.litHtmlPolyfillSupport;
      null == G || G(N, R),
        (null !== (g = p.litHtmlVersions) && void 0 !== g
          ? g
          : (p.litHtmlVersions = [])
        ).push("2.8.0");
      let D = (h, c, f) => {
        var g, p;
        let m =
            null !== (g = null == f ? void 0 : f.renderBefore) && void 0 !== g
              ? g
              : c,
          y = m._$litPart$;
        if (void 0 === y) {
          let h =
            null !== (p = null == f ? void 0 : f.renderBefore) && void 0 !== p
              ? p
              : null;
          m._$litPart$ = y = new R(
            c.insertBefore(u(), h),
            h,
            void 0,
            null != f ? f : {}
          );
        }
        return y._$AI(h), y;
      };
    },
  },
]);
