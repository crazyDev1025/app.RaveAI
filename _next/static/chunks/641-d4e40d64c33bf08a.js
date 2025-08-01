"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [641],
  {
    31641: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return bridge;
        },
      });
      var a = s(85893),
        l = s(11163),
        n = s(67294),
        r = s(41248),
        i = s(14183),
        o = s(45810),
        d = s(775),
        c = s(21815),
        u = s(86494),
        x = s(16441),
        m = s(8198),
        f = s(64146),
        h = s(2593),
        p = s(96486),
        v = s.n(p),
        b = s(30381),
        j = s.n(b),
        g = s(59335),
        y = s(5434),
        _ = s(53854),
        w = s(47516),
        N = s(60155),
        k = s(79352),
        S = s(36126),
        q = s(95223),
        T = s(27326),
        F = s(22006),
        bridge_options = (e) => {
          let {
              disabled: t = !1,
              applied: s = !1,
              initialData: l,
              onChange: i,
              showInfiniteApproval: d = !0,
              hasNextAsset: c = !1,
              chainData: u,
              relayerFeeAssetTypes: x,
            } = e,
            { preferences: m } = (0, r.v9)(
              (e) => ({ preferences: e.preferences }),
              r.wU
            ),
            { theme: f } = { ...m },
            [h, p] = (0, n.useState)(l);
          (0, n.useEffect)(() => {
            p(l);
          }, [l]);
          let reset = () => p(l),
            b =
              !c &&
              "Unavailable on ".concat(
                (null == u ? void 0 : u.name) || "Ethereum"
              ),
            j = [
              {
                label: "Recipient Address",
                tooltip:
                  "Allows you to transfer to a different address than your connected wallet address.",
                name: "to",
                type: "text",
                placeholder: "target recipient address",
              },
              {
                label: "Infinite Approval",
                tooltip: d
                  ? "This allows you to only need to pay for approval on your first transfer."
                  : "Approval sufficient. If you need to, please revoke using other tools.",
                name: "infiniteApprove",
                type: "switch",
              },
              {
                label: "Asset for Gas on destination",
                tooltip:
                  "This covers costs to execute your transfer on the destination chain.",
                name: "relayerFeeAssetType",
                type: "select",
                options: (0, F.qo)(x),
              },
            ],
            y = !v().isEqual(h, l);
          return (0, a.jsx)(S.Z, {
            disabled: t,
            buttonTitle: (0, a.jsx)("div", {
              className:
                "bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded flex items-center ".concat(
                  s
                    ? "text-blue-400 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400"
                    : "text-slate-600 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-200",
                  " space-x-1 p-2 3xl:p-3"
                ),
              children: (0, a.jsx)(k.$Rt, {
                size: 20,
                className: "3xl:w-6 3xl:h-6",
              }),
            }),
            buttonClassName: "min-w-max "
              .concat(t ? "cursor-not-allowed" : "", " rounded ")
              .concat(
                s ? "border border-blue-400 dark:border-blue-500" : "",
                " flex items-center justify-center"
              ),
            title: (0, a.jsx)("span", {
              className: "text-lg normal-case 3xl:text-2xl",
              children: "Advanced options",
            }),
            body: (0, a.jsx)("div", {
              className: "mt-2 form",
              children: j.map((e, t) => {
                let {
                  label: s,
                  tooltip: l,
                  name: n,
                  size: r,
                  type: i,
                  placeholder: c,
                  options: u,
                  presets: x,
                  postfix: m,
                } = { ...e };
                return (0, a.jsxs)(
                  "div",
                  {
                    className: "form-element py-1",
                    children: [
                      s &&
                        (l
                          ? (0, a.jsx)(g.Tooltip, {
                              placement: "right",
                              content: l,
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center w-fit",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "mb-1 text-xs font-medium max-w-fit text-slate-600 dark:text-slate-200 3xl:text-base",
                                    children: s,
                                  }),
                                  (0, a.jsx)(w.Fs0, {
                                    size: 16,
                                    className:
                                      "block sm:hidden text-slate-400 dark:text-slate-500 mb-0.5 ml-1 sm:ml-0",
                                  }),
                                ],
                              }),
                            })
                          : (0, a.jsx)("div", {
                              className:
                                "text-xs font-light form-label text-slate-600 dark:text-slate-200 3xl:text-base",
                              children: s,
                            })),
                      "select" === i
                        ? (0, a.jsx)("select", {
                            placeholder: c,
                            value: null == h ? void 0 : h[n],
                            onChange: (e) => p({ ...h, [n]: e.target.value }),
                            className:
                              "border-0 rounded form-select min-w-fit bg-slate-50 focus:ring-0",
                            style: { width: "124px" },
                            children: (0, F.qo)(u).map((e, t) => {
                              let { title: s, value: l, name: n } = { ...e };
                              return (0, a.jsx)(
                                "option",
                                { title: s, value: l, children: n },
                                t
                              );
                            }),
                          })
                        : "switch" === i
                        ? "infiniteApprove" === n
                          ? (0, a.jsx)(g.Tooltip, {
                              placement: "right",
                              content: l,
                              children: (0, a.jsx)("div", {
                                className: "flex items-center w-fit",
                                children: (0, a.jsx)(o.Z, {
                                  disabled: !d,
                                  checked:
                                    "boolean" ==
                                      typeof (null == h ? void 0 : h[n]) &&
                                    h[n],
                                  onChange: (e) =>
                                    p({
                                      ...h,
                                      [n]: !(null == h ? void 0 : h[n]),
                                    }),
                                  checkedIcon: !1,
                                  uncheckedIcon: !1,
                                  onColor: (0, F.yz)(f).on,
                                  onHandleColor: "#f8fafc",
                                  offColor: (0, F.yz)(f).off,
                                  offHandleColor: "#f8fafc",
                                }),
                              }),
                            })
                          : "receiveLocal" === n && b
                          ? (0, a.jsx)(g.Tooltip, {
                              placement: "right",
                              content: b,
                              children: (0, a.jsx)("div", {
                                className: "flex items-center w-fit",
                                children: (0, a.jsx)(o.Z, {
                                  disabled: !0,
                                  checked:
                                    "boolean" ==
                                      typeof (null == h ? void 0 : h[n]) &&
                                    h[n],
                                  onChange: (e) =>
                                    p({
                                      ...h,
                                      [n]: !(null == h ? void 0 : h[n]),
                                    }),
                                  checkedIcon: !1,
                                  uncheckedIcon: !1,
                                  onColor: (0, F.yz)(f).on,
                                  onHandleColor: "#f8fafc",
                                  offColor: (0, F.yz)(f).off,
                                  offHandleColor: "#f8fafc",
                                }),
                              }),
                            })
                          : (0, a.jsx)(o.Z, {
                              checked:
                                "boolean" ==
                                  typeof (null == h ? void 0 : h[n]) && h[n],
                              onChange: (e) =>
                                p({ ...h, [n]: !(null == h ? void 0 : h[n]) }),
                              checkedIcon: !1,
                              uncheckedIcon: !1,
                              onColor: (0, F.yz)(f).on,
                              onHandleColor: "#f8fafc",
                              offColor: (0, F.yz)(f).off,
                              offHandleColor: "#f8fafc",
                            })
                        : "textarea" === i
                        ? (0, a.jsx)("textarea", {
                            type: "text",
                            rows: "5",
                            placeholder: c,
                            value: null == h ? void 0 : h[n],
                            onChange: (e) => p({ ...h, [n]: e.target.value }),
                            className:
                              "text-sm border-0 rounded form-textarea focus:ring-0 3xl:text-base",
                          })
                        : (0, a.jsx)("input", {
                            type: i,
                            placeholder: c,
                            value: null == h ? void 0 : h[n],
                            onChange: (e) => p({ ...h, [n]: e.target.value }),
                            className:
                              "text-xs border-0 rounded form-input focus:ring-0 3xl:text-base",
                          }),
                    ],
                  },
                  t
                );
              }),
            }),
            onCancel: () => reset(),
            confirmDisabled: !y,
            onConfirm: () => {
              i && i(h);
            },
            confirmButtonTitle: "Apply",
            onClose: () => reset(),
          });
        },
        E = s(43285),
        fee_ratio = (e) => {
          let { ratio: t = 0 } = e;
          return (
            Number(t) > 0.5 &&
            (0, a.jsxs)("div", {
              className: "flex items-start space-x-1.5 3xl:space-x-2.5",
              children: [
                (0, a.jsx)(N.OvZ, {
                  size: 16,
                  className:
                    "min-w-max 3xl:w-5 3xl:h-5 text-yellow-500 dark:text-yellow-400",
                }),
                (0, a.jsx)("div", {
                  className:
                    "text-yellow-500 dark:text-yellow-400 text-xs 3xl:text-xl",
                  children: "Fees are >".concat(
                    50,
                    "% of the sending amount. Please ensure you would like to proceed."
                  ),
                }),
              ],
            })
          );
        },
        I = s(39327),
        C = s(19470),
        A = s.n(C),
        B = s(63750),
        R = s(214),
        z = s(12119),
        X = s(97637),
        Z = s(91172),
        D = s(81913),
        L = s(32622),
        P = s(87056),
        U = s(21180);
      let { AddressZero: O } = { ...c };
      var action_required = (e) => {
          var t, s;
          let {
              forceDisabled: l = !1,
              initialHidden: o = !0,
              transferData: c,
              buttonTitle: u,
              onTransferBumped: x,
              onSlippageUpdated: m,
            } = e,
            f = (0, r.I0)(),
            {
              chains: h,
              assets: p,
              gas_tokens_price: b,
              dev: j,
              wallet: g,
            } = (0, r.v9)(
              (e) => ({
                chains: e.chains,
                assets: e.assets,
                gas_tokens_price: e.gas_tokens_price,
                dev: e.dev,
                wallet: e.wallet,
              }),
              r.wU
            ),
            { chains_data: _ } = { ...h },
            { assets_data: N } = { ...p },
            { gas_tokens_price_data: k } = { ...b },
            { sdk: C } = { ...j },
            { wallet_data: A } = { ...g },
            {
              chain_id: B,
              ethereum_provider: G,
              signer: W,
              address: M,
            } = { ...A },
            [Y, H] = (0, n.useState)(o),
            [$, V] = (0, n.useState)(null),
            [Q, K] = (0, n.useState)(!1),
            [J, ee] = (0, n.useState)(null),
            [et, es] = (0, n.useState)(!1),
            [ea, el] = (0, n.useState)(v().head(q.Qc)),
            [en, er] = (0, n.useState)(null),
            [ei, eo] = (0, n.useState)(void 0),
            [ed, ec] = (0, n.useState)(null),
            [eu, ex] = (0, n.useState)(null),
            [em, ef] = (0, n.useState)(null),
            [eh, ep] = (0, n.useState)(null);
          (0, n.useEffect)(() => {
            if (v().isEqual(c, $)) {
              if ($ && !Q) {
                let {
                  origin_transacting_asset: e,
                  origin_transacting_amount: t,
                  relayer_fees: s,
                } = { ...$ };
                switch (eb) {
                  case i.XTransferErrorStatus.LowSlippage:
                    calculateAmountReceived(t);
                    break;
                  case i.XTransferErrorStatus.LowRelayerFee:
                    el((null == s ? void 0 : s[e]) ? "transacting" : "native"),
                      estimate();
                }
                K(!0);
              }
            } else V(c);
          }, [c, $, Q]),
            (0, n.useEffect)(() => {
              eb === i.XTransferErrorStatus.LowRelayerFee && estimate();
            }, [Q, ea]),
            (0, n.useEffect)(() => {
              let { origin_domain: e, origin_transacting_asset: t } = { ...$ },
                { chain_id: s } = { ...(0, P.fr)(e, _) },
                a = (0, P.j2)(void 0, N, { chain_id: s, contract_address: t }),
                { allow_paying_gas: l } = { ...a };
              a && !l && el("native");
            }, [$, _, N]);
          let {
              transfer_id: ev,
              error_status: eb,
              origin_domain: ej,
              origin_transacting_asset: eg,
              origin_transacting_amount: ey,
              destination_domain: e_,
              destination_transacting_asset: ew,
              destination_local_asset: eN,
              slippage: ek,
              relayer_fees: eS,
              receive_local: eq,
              delegate: eT,
            } = { ...$ },
            { relayer_fee: eF } = { ...$ },
            eE = (0, P.fr)(ej, _),
            eI = (0, P.j2)(void 0, N, {
              chain_id: null == eE ? void 0 : eE.chain_id,
              contract_address: eg,
            }),
            eC = (0, P.Gr)(
              null == eE ? void 0 : eE.chain_id,
              null == eI ? void 0 : eI.contracts
            ),
            eA = v().cloneDeep(eC);
          if (
            ((null == eC ? void 0 : eC.next_asset) &&
              (0, F.qq)(eC.next_asset.contract_address, eg) &&
              ((eC = { ...eC, ...eC.next_asset }), delete eC.next_asset),
            !eC && (0, F.qq)(O, eg))
          ) {
            let { chain_id: e, native_token: t } = { ...eE },
              { symbol: s } = { ...t },
              { contracts: a } = { ...(0, P.j2)(s, N) };
            eC = { ...(0, P.Gr)(e, a), ...t, contract_address: eg };
          }
          let eB =
              (null == eC ? void 0 : eC.symbol) ||
              (null == eI ? void 0 : eI.symbol),
            eR = (null == eC ? void 0 : eC.decimals) || 18;
          (null == eC ? void 0 : eC.image) || null == eI || eI.image;
          let ez = null == eE ? void 0 : eE.native_token,
            eX = (null == ez ? void 0 : ez.decimals) || 18,
            eZ = (0, T.bM)(ey, eR),
            eD = (0, P.fr)(e_, _),
            eL = (0, P.j2)(null == eI ? void 0 : eI.id, N, {
              chain_id: null == eD ? void 0 : eD.chain_id,
            }),
            eP = (0, P.Gr)(
              null == eD ? void 0 : eD.chain_id,
              null == eL ? void 0 : eL.contracts
            ),
            eU = (0, P.j2)(void 0, N, {
              chain_id: null == eD ? void 0 : eD.chain_id,
              contract_addresses: [
                ew,
                eL
                  ? null ===
                      (t = eq ? (null == eP ? void 0 : eP.next_asset) : eP) ||
                    void 0 === t
                    ? void 0
                    : t.contract_address
                  : eN,
              ],
            }),
            eO = (0, P.Gr)(
              null == eD ? void 0 : eD.chain_id,
              null == eU ? void 0 : eU.contracts
            ),
            eG = v().cloneDeep(eO);
          if (
            ((null == eO ? void 0 : eO.next_asset) &&
              ((0, F.qq)(eO.next_asset.contract_address, ew) || eq) &&
              ((eO = { ...eO, ...eO.next_asset }), delete eO.next_asset),
            !eO && (0, F.qq)(O, ew))
          ) {
            let { chain_id: e, native_token: t } = { ...eD },
              { symbol: s } = { ...t },
              { contracts: a } = { ...(0, P.j2)(s, N) };
            eO = { ...(0, P.Gr)(e, a), ...t, contract_address: ew };
          }
          (null == eO ? void 0 : eO.symbol) || null == eU || eU.symbol,
            null == eO || eO.decimals,
            (null == eO ? void 0 : eO.image) || null == eU || eU.image;
          let eW = ek / 100,
            eM =
              (null == ei ? void 0 : ei.destinationSlippage) &&
              ei.originSlippage
                ? Number(
                    (0, F.yd)(
                      Number(ei.destinationSlippage) +
                        Number(ei.originSlippage),
                      2
                    )
                  )
                : null,
            eY = (0, F.qo)(k).find((e) =>
              (0, F.qq)(e.asset_id, null == ez ? void 0 : ez.symbol)
            ),
            eH = "transacting" === ea ? eR : eX;
          eF = eS
            ? (0, F.yd)(
                v().sum(
                  Object.entries(eS).map((e) => {
                    var t, s;
                    let [a, l] = e;
                    return (
                      (0, T.bM)(l, a === O ? eX : eR) *
                      ("transacting" === ea
                        ? a === O
                          ? (null == eY ? void 0 : eY.price) /
                            (null === (t = eg === O ? eY : eI) || void 0 === t
                              ? void 0
                              : t.price)
                          : 1
                        : a === O
                        ? 1
                        : (null === (s = eg === O ? eY : eI) || void 0 === s
                            ? void 0
                            : s.price) / (null == eY ? void 0 : eY.price))
                    );
                  })
                ),
                eH
              )
            : (0, T.bM)(eF || "0", eX);
          let e$ =
            eF && en
              ? (0, F.yd)(
                  (0, T.lt)(en)
                    .subUnsafe((0, T.lt)(eF))
                    .toString(),
                  eH
                )
              : null;
          eb === i.XTransferErrorStatus.LowRelayerFee &&
            console.log("[action required]", "[debug]", "[relayerFee]", {
              relayerFeeAssetType: ea,
              relayer_fees: eS,
              relayer_fee: eF,
              newRelayerFee: en,
              relayerFeeToBump: e$,
            });
          let reset = () => {
              H(!0),
                V(null),
                K(!1),
                ee(null),
                es(!1),
                el(
                  (null == eI ? void 0 : eI.allow_paying_gas)
                    ? v().head(q.Qc)
                    : "native"
                ),
                er(null),
                eo(void 0),
                ex(null),
                ef(null),
                ep(null);
            },
            estimate = async () => {
              if (!eh) {
                if ((eC || eO) && (0, T.hj)(eZ)) {
                  if (C) {
                    er(null), ex(null), ep(null);
                    try {
                      let { native_token: e } = { ...eE },
                        { gas_price: t } = { ...eD },
                        { decimals: s } = { ...e };
                      s = s || 18;
                      let a = {
                        originDomain: null == eE ? void 0 : eE.domain_id,
                        destinationDomain: null == eD ? void 0 : eD.domain_id,
                        isHighPriority: !0,
                        priceIn: "transacting" === ea ? "usd" : "native",
                        destinationGasPrice: t,
                      };
                      if ("mainnet" !== q.IB) {
                        let t = (0, F.qo)(k).find((t) =>
                            (0, F.qq)(t.asset_id, null == e ? void 0 : e.symbol)
                          ),
                          s = (0, F.qo)(k).find((e) => {
                            var t;
                            return (0, F.qq)(
                              e.asset_id,
                              null == eD
                                ? void 0
                                : null === (t = eD.native_token) || void 0 === t
                                ? void 0
                                : t.symbol
                            );
                          });
                        (null == t ? void 0 : t.price) &&
                          (a.originNativeTokenPrice = t.price),
                          (null == s ? void 0 : s.price) &&
                            (a.destinationNativeTokenPrice = s.price);
                      }
                      try {
                        console.log(
                          "[action required]",
                          "[estimateRelayerFee]",
                          a
                        );
                        let e = await C.sdkBase.estimateRelayerFee(a),
                          t = (0, T.bM)(e, s),
                          { price: l } = { ...(eg === O ? eY : eI) };
                        (0, T.hj)(t) &&
                          (t =
                            "usd" === a.priceIn && l > 0
                              ? (0, F.yd)(t / l, s)
                              : t.toString()),
                          console.log("[action required]", "[relayerFee]", {
                            params: a,
                            response: e,
                            relayerFee: t,
                          }),
                          er(t);
                      } catch (t) {
                        let e = (0, F.nU)(t);
                        console.log(
                          "[action required]",
                          "[estimateRelayerFee error]",
                          a,
                          t
                        ),
                          ec({ status: "failed", ...e });
                      }
                    } catch (e) {}
                  }
                } else er(null);
              }
            },
            calculateAmountReceived = async (e) => {
              if (C) {
                var t, s, a;
                let l, n;
                let r = null == eE ? void 0 : eE.domain_id,
                  i = null == eD ? void 0 : eD.domain_id,
                  o =
                    null ===
                      (t = (0, F.qq)(
                        null == eC ? void 0 : eC.contract_address,
                        O
                      )
                        ? eA
                        : eC) || void 0 === t
                      ? void 0
                      : t.contract_address,
                  d = null == eG ? void 0 : eG.contract_address,
                  c =
                    "boolean" == typeof eq
                      ? eq
                      : (0, F.qq)(
                          null == eO ? void 0 : eO.contract_address,
                          null == eG
                            ? void 0
                            : null === (s = eG.next_asset) || void 0 === s
                            ? void 0
                            : s.contract_address
                        );
                c &&
                  (d =
                    (null == eG
                      ? void 0
                      : null === (a = eG.next_asset) || void 0 === a
                      ? void 0
                      : a.contract_address) || d);
                try {
                  if ((eo(null), ec(null), BigInt(e) > 0)) {
                    console.log(
                      "[action required]",
                      "[calculateAmountReceived]",
                      {
                        originDomain: r,
                        destinationDomain: i,
                        originTokenAddress: o,
                        destinationTokenAddress: d,
                        amount: e,
                        isNextAsset: c,
                      }
                    );
                    let t = await C.sdkBase.calculateAmountReceived(
                      r,
                      i,
                      o,
                      e,
                      c
                    );
                    console.log("[action required]", "[amountReceived]", {
                      originDomain: r,
                      destinationDomain: i,
                      originTokenAddress: o,
                      destinationTokenAddress: d,
                      amount: e,
                      isNextAsset: c,
                      response: t,
                    }),
                      (n = Object.fromEntries(
                        Object.entries({ ...t }).map((e) => {
                          let [t, s] = e;
                          try {
                            switch (t) {
                              case "amountReceived":
                                var a;
                                s = (0, T.bM)(
                                  s,
                                  (null ===
                                    (a =
                                      c && (null == eG ? void 0 : eG.next_asset)
                                        ? eG.next_asset
                                        : eO) || void 0 === a
                                    ? void 0
                                    : a.decimals) || 18
                                );
                                break;
                              case "originSlippage":
                              case "destinationSlippage":
                                s = (0, T.bM)(s, 2);
                                break;
                              default:
                                "boolean" != typeof s && (s = (0, T.bM)(s, eR));
                            }
                          } catch (e) {}
                          return [t, s];
                        })
                      )),
                      eo(n);
                  } else l = !0;
                } catch (a) {
                  let t = (0, F.nU)(a);
                  console.log(
                    "[action required]",
                    "[calculateAmountReceived error]",
                    {
                      originDomain: r,
                      destinationDomain: i,
                      originTokenAddress: o,
                      destinationTokenAddress: d,
                      amount: e,
                      isNextAsset: c,
                    },
                    a
                  );
                  let { message: s } = { ...t };
                  (0, F.nj)(s, ["reverted", "invalid BigNumber value"])
                    ? (l = !0)
                    : ec({ status: "failed", ...t });
                }
                if (l) {
                  let t = parseFloat((0, F.yd)((e * q.bB) / 100, eR));
                  eo(
                    (n = {
                      amountReceived: e - t,
                      routerFee: t,
                      destinationSlippage: "0",
                      originSlippage: "0",
                      isNextAsset: "boolean" == typeof eq && eq,
                    })
                  );
                }
                let u =
                  (null == n ? void 0 : n.destinationSlippage) &&
                  n.originSlippage
                    ? Number(
                        (0, F.yd)(
                          Number(n.destinationSlippage) +
                            Number(n.originSlippage),
                          2
                        )
                      )
                    : null;
                ee(u > 0 ? u : q.sr);
              }
            },
            update = async () => {
              if ((ex(!0), C && W)) {
                let t, s;
                switch (eb) {
                  case i.XTransferErrorStatus.LowSlippage:
                    try {
                      (s = {
                        domainId: e_,
                        transferId: ev,
                        slippage: (100 * (0, F.yd)(J, 2)).toString(),
                      }),
                        console.log("[action required]", "[updateSlippage]", {
                          params: s,
                        });
                      let e = await C.sdkBase.updateSlippage(s);
                      if (e) {
                        try {
                          let t = await W.estimateGas(e);
                          t &&
                            (e.gasLimit = (0, T.Ob)(
                              (0, T.lt)(t).mulUnsafe((0, T.lt)(q.Sk))
                            ));
                        } catch (e) {}
                        let a = await W.sendTransaction(e),
                          { hash: l } = { ...a };
                        ef(!0);
                        let n = await W.provider.waitForTransaction(l),
                          { transactionHash: r, status: i } = { ...n };
                        (t = !i),
                          ep({
                            status: t ? "failed" : "success",
                            message: t
                              ? "Failed to send transaction"
                              : "Update slippage successful",
                            tx_hash: l,
                          }),
                          !t && m && m(s.slippage);
                      }
                    } catch (n) {
                      let e = (0, F.nU)(n);
                      console.log(
                        "[action required]",
                        "[updateSlippage error]",
                        s,
                        n
                      );
                      let { code: a } = { ...e },
                        { message: l } = { ...e };
                      switch (a) {
                        case "user_rejected":
                          break;
                        case "params_invalid":
                          if (!(0, F.qq)(eT, M)) {
                            (l = "Must update slippage with delegate"),
                              ep({ status: "failed", ...e, message: l });
                            break;
                          }
                        default:
                          ep({ status: "failed", ...e });
                      }
                      t = !0;
                    }
                    break;
                  case i.XTransferErrorStatus.LowRelayerFee:
                    try {
                      let a =
                        eF && en
                          ? (0, F.yd)(
                              (0, T.lt)(en)
                                .subUnsafe((0, T.lt)(eF))
                                .toString(),
                              eH
                            )
                          : null;
                      s = {
                        domainId: ej,
                        transferId: ev,
                        asset: "transacting" === ea ? eg : O,
                        relayerFee: (0, T.vz)(a, eH),
                      };
                      try {
                        if ("transacting" === ea) {
                          var e;
                          let a = s.domainId,
                            l =
                              null ===
                                (e = (0, F.qq)(
                                  null == eC ? void 0 : eC.contract_address,
                                  O
                                )
                                  ? eA
                                  : eC) || void 0 === e
                                ? void 0
                                : e.contract_address,
                            n = s.relayerFee;
                          console.log(
                            "[action required]",
                            "[approveIfNeeded before bumpTransfer]",
                            {
                              domain_id: a,
                              contract_address: l,
                              amount: n,
                              infinite_approve: !1,
                            }
                          );
                          let r = await C.sdkBase.approveIfNeeded(a, l, n, !1);
                          if (r) {
                            let e = await W.sendTransaction(r),
                              { hash: s } = { ...e };
                            ep({
                              status: "pending",
                              message: "Waiting for token approval",
                              tx_hash: s,
                            });
                            let a = await W.provider.waitForTransaction(s),
                              { status: l } = { ...a };
                            (t = !l),
                              ep(
                                t
                                  ? {
                                      status: "failed",
                                      message: "Failed to approve",
                                      tx_hash: s,
                                    }
                                  : null
                              );
                          }
                        }
                      } catch (e) {}
                      if (!t) {
                        console.log("[action required]", "[bumpTransfer]", s);
                        let e = await C.sdkBase.bumpTransfer(s);
                        if (e) {
                          try {
                            let t = await W.estimateGas(e);
                            t &&
                              (e.gasLimit = (0, T.Ob)(
                                (0, T.lt)(t).mulUnsafe((0, T.lt)(q.Sk))
                              ));
                          } catch (e) {}
                          let a = await W.sendTransaction(e),
                            { hash: l } = { ...a };
                          ef(!0);
                          let n = await W.provider.waitForTransaction(l),
                            { transactionHash: r, status: i } = { ...n };
                          (t = !i),
                            ep({
                              status: t ? "failed" : "success",
                              message: t
                                ? "Failed to send transaction"
                                : "Bump transfer successful",
                              tx_hash: l,
                            }),
                            !t &&
                              x &&
                              (f({ type: U.nV, value: ev }),
                              x({
                                relayer_fee: s.relayerFee,
                                relayer_fees: { [s.asset]: s.relayerFee },
                              }));
                        }
                      }
                    } catch (n) {
                      let e = (0, F.nU)(n);
                      console.log(
                        "[action required]",
                        "[bumpTransfer error]",
                        s,
                        n
                      );
                      let { code: a } = { ...e },
                        { message: l } = { ...e };
                      (null == l ? void 0 : l.includes("insufficient funds")) &&
                        (l = "Insufficient Balance"),
                        "user_rejected" === a ||
                          ep({ status: "failed", ...e, message: l }),
                        (t = !0);
                    }
                }
              }
              ef(!1), ex(!1);
            },
            eV = eb === i.XTransferErrorStatus.LowSlippage ? eD : eE,
            { explorer: eQ } = { ...eV },
            { url: eK, transaction_path: eJ } = { ...eQ },
            e0 = l || eu,
            e1 = B !== (null == eV ? void 0 : eV.chain_id) && !eh,
            e5 =
              (null == G
                ? void 0
                : null === (s = G.constructor) || void 0 === s
                ? void 0
                : s.name) === "WalletConnectProvider";
          return (
            $ &&
            u &&
            (0, a.jsx)(S.Z, {
              hidden:
                Y ||
                ![
                  i.XTransferErrorStatus.LowRelayerFee,
                  i.XTransferErrorStatus.LowSlippage,
                ].includes(eb),
              disabled: e0,
              onClick: () => H(!1),
              buttonTitle: u,
              buttonClassName: "rounded flex items-center justify-center",
              title: (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, a.jsxs)("span", {
                    className: "normal-case",
                    children: [
                      "Action Required: ",
                      eb === i.XTransferErrorStatus.LowSlippage
                        ? "Slippage exceeded"
                        : eb === i.XTransferErrorStatus.LowRelayerFee
                        ? "Relayer fee insufficient"
                        : eb,
                    ],
                  }),
                  (0, a.jsx)("div", {
                    onClick: () => reset(),
                    className:
                      "hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer rounded-full p-2",
                    children: (0, a.jsx)(w.czh, { size: 18 }),
                  }),
                ],
              }),
              body: (0, a.jsxs)("div", {
                className: "space-y-8 mt-4",
                children: [
                  eb === i.XTransferErrorStatus.LowSlippage
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "text-slate-600 dark:text-slate-400 text-sm",
                                children:
                                  "Your slippage tolerance is too low for this transfer to complete under current market conditions.",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "text-slate-600 dark:text-slate-400 text-sm",
                                children:
                                  "You may increase your slippage tolerance below. If you take no action, the transfer will continue to retry with your current slippage tolerance.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col space-y-3",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center justify-between space-x-1",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "whitespace-nowrap text-slate-800 dark:text-slate-200 text-sm font-medium",
                                    children: "Current slippage tolerance",
                                  }),
                                  (0, a.jsx)(Z.Z, {
                                    value: eW,
                                    suffix: " %",
                                    className:
                                      "whitespace-nowrap text-slate-800 dark:text-slate-200 text-sm font-semibold",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-col space-y-0.5",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex items-start justify-between space-x-1",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "whitespace-nowrap text-slate-800 dark:text-slate-200 text-sm font-medium",
                                        children:
                                          "New slippage tolerance (recommended)",
                                      }),
                                      (0, a.jsx)("div", {
                                        className:
                                          "flex flex-col sm:items-end space-y-1.5",
                                        children: et
                                          ? (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "flex items-center justify-end space-x-1.5",
                                                  children: [
                                                    (0, a.jsx)(
                                                      d.DebounceInput,
                                                      {
                                                        debounceTimeout: 750,
                                                        size: "small",
                                                        type: "number",
                                                        placeholder: "0.00",
                                                        value:
                                                          "number" ==
                                                            typeof J && J >= 0
                                                            ? J
                                                            : "",
                                                        onChange: (e) => {
                                                          let t;
                                                          ("" ===
                                                            e.target.value ||
                                                            /^[0-9.\b]+$/.test(
                                                              e.target.value
                                                            )) &&
                                                            (t =
                                                              e.target.value),
                                                            "string" ==
                                                              typeof t &&
                                                              (t.startsWith(
                                                                "."
                                                              ) &&
                                                                (t = "0".concat(
                                                                  t
                                                                )),
                                                              (0, T.hj)(t) &&
                                                                (t =
                                                                  Number(t))),
                                                            ee(
                                                              (t =
                                                                t <= 0 ||
                                                                t > 100
                                                                  ? q.sr
                                                                  : t) &&
                                                                (0, T.hj)(t)
                                                                ? parseFloat(
                                                                    (0, F.yd)(
                                                                      Number(t),
                                                                      2
                                                                    )
                                                                  )
                                                                : t
                                                            );
                                                        },
                                                        onWheel: (e) =>
                                                          e.target.blur(),
                                                        onKeyDown: (e) =>
                                                          [
                                                            "e",
                                                            "E",
                                                            "-",
                                                          ].includes(e.key) &&
                                                          e.preventDefault(),
                                                        className:
                                                          "w-20 bg-slate-100 focus:bg-slate-200 dark:bg-slate-800 dark:focus:bg-slate-700 rounded border-0 focus:ring-0 text-sm font-semibold text-right py-1 px-2",
                                                      }
                                                    ),
                                                    (0, a.jsx)("button", {
                                                      onClick: () => es(!1),
                                                      className:
                                                        "bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-black dark:text-slate-200 dark:hover:text-white",
                                                      children: (0, a.jsx)(
                                                        w.wRn,
                                                        { size: 16 }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "flex items-center space-x-1.5 -mr-1.5",
                                                  children: [3, 1, 0.5].map(
                                                    (e, t) =>
                                                      (0, a.jsxs)(
                                                        "div",
                                                        {
                                                          onClick: () => {
                                                            ee(e), es(!1);
                                                          },
                                                          className: "".concat(
                                                            J === e
                                                              ? "bg-slate-200 dark:bg-slate-700 font-bold"
                                                              : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 font-medium hover:font-semibold",
                                                            " rounded cursor-pointer text-xs py-1 px-1.5"
                                                          ),
                                                          children: [e, " %"],
                                                        },
                                                        t
                                                      )
                                                  ),
                                                }),
                                              ],
                                            })
                                          : (0, a.jsx)("div", {
                                              className:
                                                "flex items-center space-x-1.5",
                                              children:
                                                J || ed
                                                  ? (0, a.jsxs)(a.Fragment, {
                                                      children: [
                                                        (0, a.jsx)(Z.Z, {
                                                          value: J,
                                                          suffix: " %",
                                                          className:
                                                            "whitespace-nowrap text-sm font-semibold",
                                                        }),
                                                        (0, a.jsx)("button", {
                                                          disabled: e0,
                                                          onClick: () => {
                                                            e0 || es(!0);
                                                          },
                                                          className:
                                                            "rounded-full flex items-center justify-center text-slate-400 hover:text-black dark:text-slate-200 dark:hover:text-white mt-0.5",
                                                          children: (0, a.jsx)(
                                                            w.vpV,
                                                            { size: 16 }
                                                          ),
                                                        }),
                                                      ],
                                                    })
                                                  : (0, a.jsx)("div", {
                                                      children: (0, a.jsx)(
                                                        R.Z,
                                                        {
                                                          width: 20,
                                                          height: 20,
                                                        }
                                                      ),
                                                    }),
                                            }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(E.Z, {
                                    value: J,
                                    estimatedValue: eM,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : eb === i.XTransferErrorStatus.LowRelayerFee
                    ? (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "text-slate-600 dark:text-slate-400 text-sm",
                                children:
                                  "The destination gas paid to complete this trade is currently too low.",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "text-slate-600 dark:text-slate-400 text-sm",
                                children:
                                  "You may bump the amount of gas below for the relayer to execute your transfer. If you take no action, the transfer will continue to retry with the current amount.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex flex-col space-y-3",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center justify-between space-x-1",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "whitespace-nowrap text-slate-800 dark:text-slate-200 text-sm font-medium",
                                    children: "Current relayer fee",
                                  }),
                                  Object.keys({ ...eS }).length > 0
                                    ? (0, a.jsx)("div", {
                                        className: "flex flex-col space-y-2",
                                        children: Object.entries(eS).map(
                                          (e) => {
                                            let [t, s] = e;
                                            return (0, a.jsxs)(
                                              "span",
                                              {
                                                className:
                                                  "whitespace-nowrap text-slate-800 dark:text-slate-200 font-semibold space-x-1.5",
                                                children: [
                                                  (0, a.jsx)(Z.Z, {
                                                    value: (0, T.bM)(
                                                      s || "0",
                                                      t === O ? eX : eR
                                                    ),
                                                    className: "text-sm",
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    children:
                                                      t === O
                                                        ? null == ez
                                                          ? void 0
                                                          : ez.symbol
                                                        : eB,
                                                  }),
                                                ],
                                              },
                                              t
                                            );
                                          }
                                        ),
                                      })
                                    : (0, a.jsxs)("span", {
                                        className:
                                          "whitespace-nowrap text-slate-800 dark:text-slate-200 font-semibold space-x-1.5",
                                        children: [
                                          (0, a.jsx)(Z.Z, {
                                            value: eF,
                                            className: "text-sm",
                                          }),
                                          (0, a.jsx)("span", {
                                            children:
                                              null == ez ? void 0 : ez.symbol,
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center justify-between space-x-1",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "whitespace-nowrap text-slate-800 dark:text-slate-200 text-sm font-medium",
                                    children: "Additional required relayer fee",
                                  }),
                                  en || ed
                                    ? (0, a.jsxs)("span", {
                                        className:
                                          "whitespace-nowrap text-slate-800 dark:text-slate-200 font-semibold space-x-1.5",
                                        children: [
                                          (0, a.jsx)(Z.Z, {
                                            value: Number(e$) > 0 ? e$ : 0,
                                            className: "text-sm",
                                          }),
                                          (0, a.jsx)("span", {
                                            children:
                                              "transacting" === ea
                                                ? eB
                                                : null == ez
                                                ? void 0
                                                : ez.symbol,
                                          }),
                                        ],
                                      })
                                    : (0, a.jsx)(R.Z, {
                                        width: 20,
                                        height: 20,
                                      }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
                  G &&
                  (e1 ||
                    (0, T.hj)(
                      eb === i.XTransferErrorStatus.LowSlippage
                        ? J
                        : eb === i.XTransferErrorStatus.LowRelayerFee
                        ? en
                        : null
                    ))
                    ? e1
                      ? (0, a.jsxs)(L.Z, {
                          connectChainId: null == eV ? void 0 : eV.chain_id,
                          className:
                            "w-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded flex items-center justify-center text-white text-base font-medium space-x-1.5 sm:space-x-2 py-3 sm:py-4 px-2 sm:px-3",
                          children: [
                            (0, a.jsxs)("span", {
                              children: [e5 ? "Reconnect" : "Switch", " to"],
                            }),
                            (null == eV ? void 0 : eV.image) &&
                              (0, a.jsx)(X.Z, {
                                src: eV.image,
                                width: 28,
                                height: 28,
                                className: "rounded-full",
                              }),
                            (0, a.jsx)("span", {
                              className: "font-semibold",
                              children: null == eV ? void 0 : eV.name,
                            }),
                          ],
                        })
                      : !eh &&
                        !eu &&
                        (0, T.hj)(
                          eb === i.XTransferErrorStatus.LowSlippage
                            ? J
                            : eb === i.XTransferErrorStatus.LowRelayerFee
                            ? en
                            : null
                        ) &&
                        (eb === i.XTransferErrorStatus.LowSlippage
                          ? J <= eW
                          : eb === i.XTransferErrorStatus.LowRelayerFee
                          ? !en
                          : null)
                      ? (0, a.jsx)(z.Z, {
                          status: "failed",
                          closeDisabled: !0,
                          children: (0, a.jsx)("span", {
                            children:
                              eb === i.XTransferErrorStatus.LowSlippage &&
                              J <= eW
                                ? "New amount must be higher than existing slippage tolerance"
                                : eb !== i.XTransferErrorStatus.LowRelayerFee ||
                                  en
                                ? ""
                                : "Cannot estimate the relayer fee at the moment. Please try again later.",
                          }),
                        })
                      : eh || ed
                      ? (0, F.qo)(eh || ed).map((e, t) => {
                          let { status: s, message: l, tx_hash: n } = { ...e };
                          return (0, a.jsx)(
                            z.Z,
                            {
                              status: s,
                              closeDisabled: !0,
                              children: (0, a.jsxs)("div", {
                                className:
                                  "flex items-center justify-between space-x-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "break-all text-sm font-medium",
                                    children: (0, F.Hp)((0, F.R_)(l, s), 128),
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center space-x-1",
                                    children: [
                                      eK &&
                                        n &&
                                        (0, a.jsx)("a", {
                                          href: ""
                                            .concat(eK)
                                            .concat(
                                              null == eJ
                                                ? void 0
                                                : eJ.replace("{tx}", n)
                                            ),
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          children: (0, a.jsx)(I.ObP, {
                                            size: 20,
                                            className: "transform -rotate-45",
                                          }),
                                        }),
                                      "failed" === s
                                        ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                              (0, a.jsx)(D.Z, {
                                                value: l,
                                                className:
                                                  "cursor-pointer text-slate-200 hover:text-white",
                                              }),
                                              (0, a.jsx)("button", {
                                                onClick: () => reset(),
                                                className:
                                                  "bg-red-500 dark:bg-red-400 rounded-full flex items-center justify-center text-white p-1",
                                                children: (0, a.jsx)(y.FU5, {
                                                  size: 14,
                                                }),
                                              }),
                                            ],
                                          })
                                        : "success" === s
                                        ? (0, a.jsx)("button", {
                                            onClick: () => reset(),
                                            className:
                                              "bg-red-500 dark:bg-red-400 rounded-full flex items-center justify-center text-white p-1",
                                            children: (0, a.jsx)(y.FU5, {
                                              size: 14,
                                            }),
                                          })
                                        : null,
                                    ],
                                  }),
                                ],
                              }),
                            },
                            t
                          );
                        })
                      : eb === i.XTransferErrorStatus.LowRelayerFee &&
                        eF &&
                        en &&
                        0 >= Number(e$)
                      ? (0, a.jsx)(z.Z, {
                          closeDisabled: !0,
                          children: (0, a.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, a.jsx)("span", {
                              className:
                                "break-all text-sm font-medium text-center",
                              children: "Waiting for bump ...",
                            }),
                          }),
                        })
                      : (0, a.jsx)("button", {
                          disabled: e0,
                          onClick: () => {
                            es(!1), update();
                          },
                          className: "w-full ".concat(
                            e0
                              ? "bg-red-400 dark:bg-red-500"
                              : "bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
                            " rounded flex items-center justify-center text-white text-base py-3 sm:py-4 px-2 sm:px-3"
                          ),
                          children: (0, a.jsxs)("span", {
                            className:
                              "flex items-center justify-center ".concat(
                                eu && em ? "space-x-3 ml-1.5" : "space-x-3"
                              ),
                            children: [
                              e0 &&
                                (0, a.jsx)("div", {
                                  children: (0, a.jsx)(R.Z, {
                                    width: 20,
                                    height: 20,
                                    color: "white",
                                  }),
                                }),
                              (0, a.jsx)("span", {
                                children: eu
                                  ? em
                                    ? "Update in progress ..."
                                    : "Please Confirm"
                                  : "Apply",
                              }),
                            ],
                          }),
                        })
                    : G
                    ? (0, a.jsx)("button", {
                        disabled: !0,
                        className:
                          "w-full bg-slate-100 dark:bg-slate-800 cursor-not-allowed rounded text-slate-400 dark:text-slate-500 text-base text-center py-3 sm:py-4 px-2 sm:px-3",
                        children: (0, a.jsx)("span", { children: "Apply" }),
                      })
                    : (0, a.jsx)(L.Z, {
                        connectChainId: null == eV ? void 0 : eV.chain_id,
                        buttonConnectTitle: "Connect Wallet",
                        className:
                          "w-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded text-white text-base font-medium text-center sm:space-x-2 py-3 sm:py-4 px-2 sm:px-3",
                        children: (0, a.jsx)("span", {
                          children: "Connect Wallet",
                        }),
                      }),
                ],
              }),
              noCancelOnClickOutside: !0,
              noButtons: !0,
              onClose: () => reset(),
              modalClassName: "max-w-md",
            })
          );
        },
        G = s(83147);
      let { AddressZero: W } = { ...c };
      var transfer_status = (e) => {
          var t;
          let { data: s } = e,
            {
              chains: l,
              assets: o,
              wallet: d,
              latest_bumped_transfers: c,
            } = (0, r.v9)(
              (e) => ({
                chains: e.chains,
                assets: e.assets,
                wallet: e.wallet,
                latest_bumped_transfers: e.latest_bumped_transfers,
              }),
              r.wU
            ),
            { chains_data: u } = { ...l },
            { assets_data: x } = { ...o },
            { wallet_data: m } = { ...d },
            { address: f } = { ...m },
            { latest_bumped_transfers_data: h } = { ...c },
            [p, v] = (0, n.useState)(null);
          (0, n.useEffect)(() => {
            s && v(s);
          }, [s]);
          let {
              transfer_id: b,
              status: y,
              error_status: k,
              origin_domain: S,
              origin_transacting_asset: E,
              origin_transacting_amount: C,
              destination_domain: R,
              destination_transacting_asset: z,
              destination_transacting_amount: D,
              destination_local_asset: L,
              receive_local: U,
              to: O,
              xcall_timestamp: M,
              execute_transaction_hash: Y,
              routers: H,
              call_data: $,
            } = { ...p },
            V = (0, P.fr)(S, u),
            Q = (0, P.fr)(R, u),
            { native_token: K, explorer: J, unwrapper_contract: ee } = { ...Q },
            { symbol: et } = { ...K },
            { url: es, transaction_path: ea } = { ...J },
            el = (0, P.j2)(void 0, x, {
              chain_id: null == V ? void 0 : V.chain_id,
              contract_address: E,
            }),
            en = (0, P.Gr)(
              null == V ? void 0 : V.chain_id,
              null == el ? void 0 : el.contracts
            );
          if (
            ((null == en ? void 0 : en.next_asset) &&
              (0, F.qq)(en.next_asset.contract_address, E) &&
              ((en = { ...en, ...en.next_asset }), delete en.next_asset),
            !en && (0, F.qq)(W, E))
          ) {
            let { chain_id: e, native_token: t } = { ...V },
              { symbol: s } = { ...t },
              { contracts: a } = { ...(0, P.j2)(s, x) };
            en = { ...(0, P.Gr)(e, a), ...t, contract_address: E };
          }
          let er = (0, P.j2)(null == el ? void 0 : el.id, x, {
              chain_id: null == Q ? void 0 : Q.chain_id,
            }),
            ei = (0, P.Gr)(
              null == Q ? void 0 : Q.chain_id,
              null == er ? void 0 : er.contracts
            ),
            eo = (0, P.j2)(void 0, x, {
              chain_id: null == Q ? void 0 : Q.chain_id,
              contract_addresses: [
                z,
                er
                  ? null ===
                      (t = U ? (null == ei ? void 0 : ei.next_asset) : ei) ||
                    void 0 === t
                    ? void 0
                    : t.contract_address
                  : L,
              ],
            }),
            ed = (0, P.Gr)(
              null == Q ? void 0 : Q.chain_id,
              null == eo ? void 0 : eo.contracts
            );
          (null == ed ? void 0 : ed.next_asset) &&
            ((0, F.qq)(ed.next_asset.contract_address, z) || U) &&
            ((ed = { ...ed, ...ed.next_asset }), delete ed.next_asset);
          let ec = (0, P.j2)(
            q.Td.find((e) => (null == et ? void 0 : et.endsWith(e))) || et,
            x
          );
          if (
            (!ed && (0, F.qq)(W, z)) ||
            ((null == eo ? void 0 : eo.id) === (null == ec ? void 0 : ec.id) &&
              (0, F.qq)(O, ee))
          ) {
            let { chain_id: e } = { ...Q },
              { contracts: t } = { ...ec };
            ed = { ...(0, P.Gr)(e, t), ...K, contract_address: W };
          }
          let eu =
              (null == en ? void 0 : en.symbol) ||
              (null == el ? void 0 : el.symbol),
            ex =
              (null == ed ? void 0 : ed.symbol) ||
              (null == eo ? void 0 : eo.symbol),
            em = (null == en ? void 0 : en.decimals) || 18,
            ef = (null == ed ? void 0 : ed.decimals) || 18,
            eh =
              (null == en ? void 0 : en.image) ||
              (null == el ? void 0 : el.image),
            ep =
              (null == ed ? void 0 : ed.image) ||
              (null == eo ? void 0 : eo.image),
            ev = (0, T.bM)(C, em),
            eb = D ? (0, T.bM)(D, ef) : ev * (1 - q.bB / 100),
            ej = ![
              i.XTransferStatus.Executed,
              i.XTransferStatus.CompletedFast,
              i.XTransferStatus.CompletedSlow,
            ].includes(y),
            eg =
              k === i.XTransferErrorStatus.LowRelayerFee &&
              !Y &&
              [
                i.XTransferStatus.XCalled,
                i.XTransferStatus.Reconciled,
              ].includes(y),
            ey =
              [
                i.XTransferErrorStatus.LowRelayerFee,
                i.XTransferErrorStatus.ExecutionError,
              ].includes(k) &&
              (0, F.qo)(h).findIndex(
                (e) =>
                  (0, F.qq)(e.transfer_id, b) &&
                  5 >= j()().diff(j()(e.updated), "minutes", !0)
              ) > -1;
          return (
            p &&
            (0, a.jsxs)("div", {
              className:
                "bg-slate-100 dark:bg-slate-900 max-w-xs sm:max-w-none rounded mx-auto py-5 px-4",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-between space-x-2",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex items-center space-x-1.5",
                      children: [
                        (null == V ? void 0 : V.image) &&
                          (0, a.jsx)(X.Z, {
                            src: V.image,
                            width: 20,
                            height: 20,
                            className: "3xl:w-6 3xl:h-6 rounded-full",
                          }),
                        (0, a.jsx)("span", {
                          className: "text-xs 3xl:text-xl font-medium",
                          children: (0, P.pN)(V),
                        }),
                      ],
                    }),
                    ej &&
                      !eg &&
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-center",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-12 h-0.5 border-t border-slate-300 dark:border-slate-700 mt-px ml-2",
                          }),
                          (0, a.jsx)(A(), {
                            left: !0,
                            distance: "64px",
                            duration: 2500,
                            forever: !0,
                            children: (0, a.jsx)("div", {
                              className: "w-2 h-2 rounded-full",
                              style: {
                                background: "".concat(
                                  (null == el ? void 0 : el.color) || "#3b82f6",
                                  "aa"
                                ),
                              },
                            }),
                          }),
                        ],
                      }),
                    (0, a.jsxs)("div", {
                      className: "flex items-center justify-end space-x-1.5",
                      children: [
                        (null == Q ? void 0 : Q.image) &&
                          (0, a.jsx)(X.Z, {
                            src: Q.image,
                            width: 20,
                            height: 20,
                            className: "3xl:w-6 3xl:h-6 rounded-full",
                          }),
                        (0, a.jsx)("span", {
                          className: "text-xs 3xl:text-xl font-medium",
                          children: (0, P.pN)(Q),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-start justify-between space-x-2 my-4",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "flex flex-col space-y-1.5",
                      children: [
                        (0, a.jsx)(Z.Z, { value: ev }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex items-center justify-start space-x-1",
                          children: [
                            eh &&
                              (0, a.jsx)(X.Z, {
                                src: eh,
                                width: 16,
                                height: 16,
                                className: "3xl:w-5 3xl:h-5 rounded-full",
                              }),
                            (0, a.jsx)("span", {
                              className: "text-xs 3xl:text-xl font-medium",
                              children: eu,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "flex flex-col items-center",
                      children: eg
                        ? (0, a.jsx)(action_required, {
                            forceDisabled:
                              [
                                i.XTransferErrorStatus.ExecutionError,
                                i.XTransferErrorStatus.NoBidsReceived,
                              ].includes(k) || ey,
                            transferData: p,
                            buttonTitle: (0, a.jsx)(g.Tooltip, {
                              content:
                                k === i.XTransferErrorStatus.NoBidsReceived
                                  ? "The transfer is not getting boosted by routers (fast path) and will complete in slow path eventually, if no new bids are received till the end."
                                  : ey
                                  ? "Waiting for bump"
                                  : k,
                              children: (0, a.jsx)("div", {
                                children: (0, a.jsx)(N.OvZ, {
                                  size: 24,
                                  className: "text-red-600 dark:text-red-500",
                                }),
                              }),
                            }),
                            onTransferBumped: (e) => {
                              s && v({ ...s, ...e, error_status: null });
                            },
                            onSlippageUpdated: (e) => {
                              s && v({ ...s, slippage: e, error_status: null });
                            },
                          })
                        : ej
                        ? null
                        : (0, a.jsx)("a", {
                            href: ""
                              .concat(es)
                              .concat(
                                null == ea ? void 0 : ea.replace("{tx}", Y)
                              ),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, a.jsx)(_.PjL, {
                              size: 32,
                              className:
                                "3xl:w-10 3xl:h-10 text-green-500 dark:text-green-400",
                            }),
                          }),
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col items-end space-y-1.5",
                      style: { minWidth: "4rem" },
                      children: [
                        (0, a.jsx)(Z.Z, { value: eb }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex items-center justify-center space-x-1",
                          children: [
                            ep &&
                              (0, a.jsx)(X.Z, {
                                src: ep,
                                width: 16,
                                height: 16,
                                className: "3xl:w-5 3xl:h-5 rounded-full",
                              }),
                            (0, a.jsx)("span", {
                              className: "text-xs 3xl:text-xl font-medium",
                              children: ex,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                O &&
                  0 > (0, F.qo)([f, ee]).findIndex((e) => (0, F.qq)(e, O)) &&
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between space-x-2",
                    children: [
                      (0, a.jsx)("span", {
                        className: "text-sm font-medium",
                        children: "To:",
                      }),
                      (0, a.jsx)(G.Z, { address: O }),
                    ],
                  }),
                M &&
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between mt-0.5",
                    children: [
                      ej && !eg
                        ? (0, a.jsx)("div", {})
                        : eg
                        ? (0, a.jsx)(action_required, {
                            forceDisabled:
                              [
                                i.XTransferErrorStatus.ExecutionError,
                                i.XTransferErrorStatus.NoBidsReceived,
                              ].includes(k) || ey,
                            transferData: p,
                            buttonTitle: (0, a.jsx)(g.Tooltip, {
                              content:
                                k === i.XTransferErrorStatus.NoBidsReceived
                                  ? "The transfer is not getting boosted by routers (fast path) and will complete in slow path eventually, if no new bids are received till the end."
                                  : ey
                                  ? "Waiting for bump"
                                  : k,
                              children: (0, a.jsx)("div", {
                                className:
                                  "whitespace-nowrap text-red-600 dark:text-red-500 text-xs font-semibold",
                                children: ey ? "Waiting for bump" : k,
                              }),
                            }),
                            onTransferBumped: (e) => {
                              s && v({ ...s, ...e, error_status: null });
                            },
                            onSlippageUpdated: (e) => {
                              s && v({ ...s, slippage: e, error_status: null });
                            },
                          })
                        : (0, a.jsx)("span", {
                            children:
                              "0x" === $ &&
                              (0, a.jsx)(g.Tooltip, {
                                placement: "bottom",
                                content:
                                  (null == H ? void 0 : H.length) > 0
                                    ? "Boosted by routers."
                                    : "Pending router boost.",
                                children: (0, a.jsxs)("div", {
                                  className: "flex items-center",
                                  children: [
                                    (0, a.jsx)(B.XLv, {
                                      size: 16,
                                      className: "3xl:w-5 3xl:h-5 ".concat(
                                        (null == H ? void 0 : H.length) > 0
                                          ? "text-yellow-500 dark:text-yellow-400"
                                          : "text-blue-300 dark:text-blue-200"
                                      ),
                                    }),
                                    (0, a.jsx)(w.Fs0, {
                                      size: 14,
                                      className:
                                        "block sm:hidden text-slate-400 dark:text-slate-500 ml-1 sm:ml-0",
                                    }),
                                  ],
                                }),
                              }),
                          }),
                      (0, a.jsx)(g.Tooltip, {
                        content: "Transferred at",
                        children: (0, a.jsx)("div", {
                          className:
                            "text-slate-400 dark:text-slate-500 text-xs 3xl:text-xl font-medium",
                          children: j()(1e3 * M).format(
                            "MMM D, YYYY h:mm:ss A"
                          ),
                        }),
                      }),
                    ],
                  }),
                b &&
                  (0, a.jsx)("div", {
                    className: "flex items-center justify-end mt-1 -mb-2",
                    children: (0, a.jsxs)("a", {
                      href: ""
                        .concat("https://layerzeroscan.com", "/tx/")
                        .concat(b),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center text-blue-500 text-xs 3xl:text-xl font-medium space-x-0 -mr-1",
                      children: [
                        (0, a.jsx)("span", {
                          children: "See more on explorer",
                        }),
                        (0, a.jsx)(I.ObP, {
                          size: 16,
                          className:
                            "3xl:w-5 3xl:h-5 transform -rotate-45 mt-0.5",
                        }),
                      ],
                    }),
                  }),
              ],
            })
          );
        },
        latest_transfers = (e) => {
          let { data: t, trigger: s, onUpdateSize: l } = e,
            {
              preferences: o,
              dev: d,
              wallet: c,
            } = (0, r.v9)(
              (e) => ({
                preferences: e.preferences,
                dev: e.dev,
                wallet: e.wallet,
              }),
              r.wU
            ),
            { page_visible: u } = { ...o },
            { sdk: x } = { ...d },
            { wallet_data: m } = { ...c },
            { address: f } = { ...m },
            [h, p] = (0, n.useState)(null),
            [b, j] = (0, n.useState)(null);
          (0, n.useEffect)(() => {
            let getData = async () => {
              if (u && x && f)
                try {
                  if (
                    !h ||
                    (t &&
                      (0, F.qo)(t).findIndex(
                        (e) =>
                          0 >
                          (0, F.qo)(h).findIndex(
                            (t) => t.transfer_id === e.transfer_id
                          )
                      ) > -1) ||
                    (0, F.qo)(h).findIndex(
                      (e) =>
                        ![
                          i.XTransferStatus.Executed,
                          i.XTransferStatus.CompletedFast,
                          i.XTransferStatus.CompletedSlow,
                        ].includes(e.status)
                    ) > -1
                  ) {
                    let e = (0, F.qo)(
                      await x.sdkUtils.getTransfers({ userAddress: f })
                    );
                    (e = v().orderBy(
                      v().uniqBy(
                        (0, F.qo)(v().concat(e, t)),
                        "xcall_transaction_hash"
                      ),
                      ["xcall_timestamp"],
                      ["desc"]
                    )).findIndex(
                      (e) =>
                        0 > (0, F.qo)(h).findIndex((e) => e.transfer_id) &&
                        ![
                          i.XTransferStatus.Executed,
                          i.XTransferStatus.CompletedFast,
                          i.XTransferStatus.CompletedSlow,
                        ].includes(e.status)
                    ) > -1 && j(!1),
                      p(e);
                  }
                } catch (e) {
                  p(null);
                }
              else p(null);
            };
            getData();
            let e = setInterval(() => getData(), 1e4);
            return () => clearInterval(e);
          }, [u, x, f, s]),
            (0, n.useEffect)(() => {
              l && l((0, F.qo)(h).length);
            }, [l, h]);
          let g = v().slice(
            (0, F.qo)(h).map((e, t) =>
              (0, a.jsx)(
                "div",
                {
                  className: "w-70 3xl:w-96 mx-auto",
                  children: (0, a.jsx)(transfer_status, { data: e }),
                },
                t
              )
            ),
            0,
            3
          );
          return (
            (0, F.qo)(h).length > 0 &&
            (0, a.jsxs)("div", {
              className: "lg:max-w-xs 2xl:max-w-sm xl:ml-auto",
              children: [
                (0, a.jsxs)("button", {
                  onClick: () => j(!b),
                  className: "w-full flex items-center justify-center ".concat(
                    b
                      ? "text-slate-300 hover:text-slate-800 dark:text-slate-700 dark:hover:text-slate-200 font-medium"
                      : "font-semibold",
                    " space-x-1 mb-3"
                  ),
                  children: [
                    (0, a.jsx)("span", {
                      className: "capitalize text-sm 3xl:text-2xl",
                      children: "Latest Transfers",
                    }),
                    b
                      ? (0, a.jsx)(w.OrA, {
                          size: 18,
                          className: "3xl:w-6 3xl:h-6",
                        })
                      : (0, a.jsx)(w.jRD, {
                          size: 18,
                          className: "3xl:w-6 3xl:h-6",
                        }),
                  ],
                }),
                !b &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: "max-w-xl grid gap-4 3xl:gap-8 mx-auto",
                        children: g,
                      }),
                      f &&
                        h.length > 3 &&
                        (0, a.jsxs)("a", {
                          href: ""
                            .concat("https://layerzeroscan.com", "/address/")
                            .concat(f),
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center justify-center text-blue-400 dark:text-white 3xl:text-2xl mt-2.5",
                          children: [
                            (0, a.jsx)("span", {
                              className: "font-medium",
                              children: "See more",
                            }),
                            (0, a.jsx)(I.ObP, {
                              size: 18,
                              className:
                                "3xl:w-6 3xl:h-6 transform -rotate-45 mt-0.5",
                            }),
                          ],
                        }),
                    ],
                  }),
              ],
            })
          );
        },
        M = s(50051),
        Y = s(37179),
        time_timeSpent = (e) => {
          let {
              fromTime: t,
              toTime: s,
              format: l = "MMM D, YYYY h:mm:ss A",
              noTooltip: r = !1,
              placement: i = "top",
              title: o = "Time",
              titleClassName: d = "normal-case text-xs font-semibold",
              className:
                c = "normal-case text-slate-400 dark:text-slate-500 font-normal",
            } = e,
            [u, x] = (0, n.useState)(!1);
          (0, n.useEffect)(() => {
            let e = setTimeout(() => x(!u), 1e3);
            return () => clearTimeout(e);
          }, [u]);
          let m = (0, F.F$)(t),
            f = (0, F.F$)(s),
            h = (0, F.cW)(t, s || j()().unix());
          return (
            m &&
            f &&
            (r
              ? (0, a.jsx)("div", { className: c, children: h })
              : (0, a.jsx)(g.Tooltip, {
                  placement: i,
                  content: (0, a.jsxs)("div", {
                    className: "flex flex-col space-y-1 my-1",
                    children: [
                      (0, a.jsx)("div", { className: d, children: o }),
                      (0, a.jsx)("div", {
                        className: c,
                        children: (0, a.jsxs)("div", {
                          className:
                            "w-38 whitespace-nowrap text-2xs font-medium space-x-1",
                          children: [
                            (0, a.jsx)("span", { children: m.format(l) }),
                            (0, a.jsx)("span", { children: "-" }),
                            (0, a.jsx)("span", { children: f.format(l) }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  className: "z-50 bg-dark text-white text-xs",
                  children: (0, a.jsx)("div", { className: c, children: h }),
                }))
          );
        },
        H = s(54597),
        $ = s(92067);
      let { AddressZero: V, MaxUint256: Q } = { ...c },
        { getAddress: K, formatBytes32String: J } = { ...u },
        ee = {
          to: "",
          infiniteApprove: !1,
          callData: "",
          slippage: q.sr,
          relayerFeeAssetType: v().head(q.Qc),
          forceSlow: !1,
          receiveLocal: !1,
          showNextAssets: !0,
        };
      var bridge = () => {
        var e, t, s, c, u, p, b;
        let k;
        let S = (0, r.I0)(),
          {
            preferences: E,
            chains: I,
            assets: C,
            gas_tokens_price: A,
            router_asset_balances: B,
            pools: O,
            rpc_providers: G,
            dev: W,
            wallet: J,
            balances: et,
            latest_bumped_transfers: es,
          } = (0, r.v9)(
            (e) => ({
              preferences: e.preferences,
              chains: e.chains,
              assets: e.assets,
              gas_tokens_price: e.gas_tokens_price,
              router_asset_balances: e.router_asset_balances,
              pools: e.pools,
              rpc_providers: e.rpc_providers,
              dev: e.dev,
              wallet: e.wallet,
              balances: e.balances,
              latest_bumped_transfers: e.latest_bumped_transfers,
            }),
            r.wU
          ),
          { theme: ea } = { ...E },
          { chains_data: el } = { ...I },
          { assets_data: en } = { ...C },
          { gas_tokens_price_data: er } = { ...A },
          { router_asset_balances_data: ei } = { ...B },
          { pools_data: eo } = { ...O },
          { rpcs: ed } = { ...G },
          { sdk: ec } = { ...W },
          { wallet_data: eu } = { ...J },
          {
            provider: ex,
            ethereum_provider: em,
            signer: ef,
            address: eh,
          } = { ...eu },
          { balances_data: ep } = { ...et },
          { latest_bumped_transfers_data: ev } = { ...es },
          eb = null == eu ? void 0 : eu.chain_id,
          ej = (0, l.useRouter)(),
          { asPath: eg, query: ey } = { ...ej },
          { source: e_ } = { ...ey },
          [ew, eN] = (0, n.useState)({}),
          [ek, eS] = (0, n.useState)(ee),
          [eq, eT] = (0, n.useState)(!0),
          [eF, eE] = (0, n.useState)(!1),
          [eI, eC] = (0, n.useState)(!1),
          [eA, eB] = (0, n.useState)(void 0),
          [eR, ez] = (0, n.useState)(null),
          [eX, eZ] = (0, n.useState)(void 0),
          [eD, eL] = (0, n.useState)(null),
          [eP, eU] = (0, n.useState)(null),
          [eO, eG] = (0, n.useState)(null),
          [eW, eM] = (0, n.useState)(null),
          [eY, eH] = (0, n.useState)(null),
          [e$, eV] = (0, n.useState)(null),
          [eQ, eK] = (0, n.useState)(null),
          [eJ, e0] = (0, n.useState)(null),
          [e1, e5] = (0, n.useState)(null),
          [e2, e3] = (0, n.useState)(null),
          [e4, e6] = (0, n.useState)(null),
          [e8, e7] = (0, n.useState)([]),
          [e9, te] = (0, n.useState)(null),
          [tt, ts] = (0, n.useState)(!1),
          [ta, tl] = (0, n.useState)(!1),
          [tn, tr] = (0, n.useState)(null),
          [ti, to] = (0, n.useState)(null);
        (0, n.useEffect)(() => {
          if (en) {
            let e = !1,
              t = (0, F.DW)(eg),
              s = (0, F.vl)(eg),
              { symbol: a, amount: l, receive_next: n } = { ...s },
              r =
                !!(0, F.qq)(null == n ? void 0 : n.toString(), "true") ||
                (!(0, F.qq)(null == n ? void 0 : n.toString(), "false") &&
                  void 0);
            if (t.includes("from-") && t.includes("to-")) {
              let s = (0, F.Vl)(t.replace("/", ""), "normal", "-"),
                n = s[s.indexOf("from") + 1],
                i = s[s.indexOf("to") + 1],
                o =
                  "from" !== v().head(s)
                    ? v().head(s)
                    : "testnet" === q.IB
                    ? [n, i].findIndex((e) => ["linea"].includes(e)) > -1
                      ? "matic"
                      : "test"
                    : "hera",
                d = (0, P.fr)(n, el),
                c = (0, P.fr)(i, el),
                u = (0, P.j2)(o, en);
              d && ((e = ew.source_chain !== n), (ew.source_chain = n)),
                c &&
                  ((e = ew.destination_chain !== i),
                  (ew.destination_chain = i)),
                u && ((e = ew.asset !== o), (ew.asset = o)),
                a && ((e = ew.symbol !== a), (ew.symbol = a)),
                ew.source_chain && (0, T.hj)(l) && !(0, T.Fr)(l)
                  ? ((e = ew.amount !== l),
                    (ew.amount = l),
                    calculateAmountReceived(l),
                    l && estimateFees(),
                    void 0 === eX && checkApprovedNeeded(l))
                  : eA &&
                    (!(0, T.hj)(l) || (0, T.Fr)(l)
                      ? eB({
                          amountReceived: "0",
                          routerFee: "0",
                          isNextAsset: !!r,
                        })
                      : eB(void 0));
            }
            switch (r) {
              case !0:
              case !1:
                (e = ew.receive_next !== r),
                  (ew.receive_next = r),
                  eS({ ...ek, receiveLocal: r });
            }
            e && eN(ew);
          }
        }, [el, en, eg]),
          (0, n.useEffect)(() => {
            let e = {};
            if (ew) {
              let {
                  source_chain: t,
                  destination_chain: s,
                  asset: a,
                  symbol: l,
                  amount: n,
                } = { ...ew },
                r = (0, P.fr)(t, el, { not_disabled: !0 });
              if (r) {
                let { chain_id: s } = { ...r };
                (e.source_chain = t),
                  a && (0, P.j2)(a, en, { chain_id: s }) && (e.asset = a);
              }
              let i = (0, P.fr)(s, el, { not_disabled: !0 });
              if (i) {
                let { chain_id: t } = { ...i };
                (e.destination_chain = s),
                  a && (0, P.j2)(a, en, { chain_id: t }) && (e.asset = a);
              }
              if (e.source_chain && e.asset) {
                let { chain_id: t } = { ...r };
                (0, T.hj)(n) && !(0, T.Fr)(n) && (e.amount = n),
                  l &&
                    (0, P.j2)(a, en, { chain_id: t, symbol: l }) &&
                    (e.symbol = l);
              }
            }
            let { slippage: t } = { ...ek },
              { receiveLocal: s } = { ...ek };
            if (
              ((null == tz ? void 0 : tz.next_asset)
                ? "boolean" == typeof ew._receiveLocal &&
                  ((s =
                    ew.receive_next === ew._receiveLocal ||
                    !1 === ew.receive_next
                      ? ew.receive_next
                      : ew._receiveLocal),
                  (ew._receiveLocal = s))
                : (s && (ew._receiveLocal = s),
                  (s = !1),
                  ew.receive_next && (ew.receive_next = void 0),
                  tr(!0)),
              (s || ew.receive_next) && (e.receive_next = !0),
              e_ && (e.source = e_),
              Object.keys(e).length > 0)
            ) {
              let {
                source_chain: t,
                destination_chain: s,
                asset: a,
                symbol: l,
              } = { ...e };
              delete e.source_chain,
                delete e.destination_chain,
                delete e.asset,
                l || delete e.symbol,
                ej.push(
                  "/"
                    .concat(
                      t && s
                        ? ""
                            .concat(
                              a ? "".concat(a.toUpperCase(), "-") : "",
                              "from-"
                            )
                            .concat(t, "-to-")
                            .concat(s)
                        : ""
                    )
                    .concat(
                      Object.keys(e).length > 0
                        ? "?".concat(new URLSearchParams(e).toString())
                        : ""
                    ),
                  void 0,
                  { shallow: !0 }
                ),
                e3(j()().valueOf());
            }
            let { destination_chain: a } = { ...ew },
              { symbol: l } = { ...e },
              n = (0, P.fr)(a, el),
              { chain_id: r } = { ...n },
              { contract_address: i, next_asset: o } = { ...tz },
              d = (null == tz ? void 0 : tz.decimals) || 18,
              c = v().sum(
                (0, F.qo)(null == ei ? void 0 : ei[r])
                  .filter(
                    (e) =>
                      (0, F.qo)([
                        i,
                        null == o ? void 0 : o.contract_address,
                      ]).findIndex((t) => (0, F.qq)(t, e.contract_address)) > -1
                  )
                  .map((e) =>
                    (0, T.bM)(
                      e.amount,
                      o && (0, F.qq)(e.contract_address, o.contract_address)
                        ? o.decimals
                        : d
                    )
                  )
                  .map((e) => (Number(e) > 0 ? Number(e) : 0))
              );
            eS({
              ...ek,
              slippage: t,
              forceSlow: !!n && !!ei && Number(tm) > c,
              receiveLocal: s,
            }),
              ez(null),
              eU(j()().valueOf()),
              eH(null),
              eV(null),
              e5(null);
          }, [eh, ew]),
          (0, n.useEffect)(() => {
            let { source_chain: e, destination_chain: t } = { ...ew },
              { id: s } = { ...(0, P.fr)(eb, el) };
            if (s && eg) {
              let a = (0, F.vl)(eg);
              (e && t) || (0, F.qq)(s, t)
                ? eg.includes("from-") || (0, F.qq)(s, e) || (e = s)
                : !eg.includes("from-") &&
                  !a.source_chain &&
                  (0, P.fr)(s, el, { not_disabled: !0 }) &&
                  (e = s),
                getBalances(s);
            }
            if (Object.keys(ew).length > 0 || "/" === eg) {
              var a, l, n;
              e =
                e ||
                (null ===
                  (a = (0, P.fr)(void 0, el, {
                    not_disabled: !0,
                    get_head: !0,
                    except: t,
                  })) || void 0 === a
                  ? void 0
                  : a.id);
              let s = (0, P.fr)(e, el);
              e =
                (null == s ? void 0 : s.disabled_bridge) && s.switch_to
                  ? s.switch_to
                  : e;
              let r = (0, P.fr)(t, el);
              t && !(0, F.qq)(t, e)
                ? (null == r ? void 0 : r.disabled_bridge) &&
                  r.switch_to &&
                  (t = (0, F.qq)(r.switch_to, e)
                    ? null ===
                        (l = (0, P.fr)(void 0, el, {
                          not_disabled: !0,
                          must_have_pools: !0,
                          get_head: !0,
                          except: [t, r.switch_to],
                        })) || void 0 === l
                      ? void 0
                      : l.id
                    : r.switch_to)
                : (t =
                    ew.source_chain && !(0, F.qq)(ew.source_chain, e)
                      ? ew.source_chain
                      : (0, F.qq)(e, q.Iz) && (0, P.fr)(q.Iz, el)
                      ? q.Iz
                      : null ===
                          (n = (0, P.fr)(void 0, el, {
                            not_disabled: !0,
                            get_head: !0,
                            except: e,
                          })) || void 0 === n
                      ? void 0
                      : n.id);
            }
            0 === Object.keys(ew).length &&
              eN({ ...ew, source_chain: e, destination_chain: t });
          }, [el, eb, eg]),
          (0, n.useEffect)(() => {
            if ((S({ type: U.B$, value: null }), eh)) {
              let { source_chain: e, destination_chain: t } = { ...ew };
              getBalances(e), getBalances(t);
            } else reset("address");
          }, [eh]),
          (0, n.useEffect)(() => {
            let getData = () => {
              let { status: e } = { ...eY };
              if (eh && !e$ && !eQ && "pending" !== e) {
                let { source_chain: e, destination_chain: t } = { ...ew };
                getBalances(e), getBalances(t);
              }
            };
            getData();
            let e = setInterval(() => getData(), 15e3);
            return () => clearInterval(e);
          }, [ed]),
          (0, n.useEffect)(() => {
            let update = () => {
              eP && !(eO || eY || e$ || eQ || e1) && estimateFees();
            };
            update();
            let e = setInterval(() => update(), 6e4);
            return () => clearInterval(e);
          }, [eP]),
          (0, n.useEffect)(() => {
            let getData = async () => {
              if (ec && eh && e$) {
                let { transfer_id: e, transactionHash: t } = { ...e$ };
                if (!e && t) {
                  let e;
                  try {
                    let s = (0, F.qo)(
                      await ec.sdkUtils.getTransfers({ transactionHash: t })
                    );
                    e = s.find((e) => (0, F.qq)(e.xcall_transaction_hash, t));
                  } catch (e) {}
                  if (!e && eh)
                    try {
                      let s = (0, F.qo)(
                        await ec.sdkUtils.getTransfers({ userAddress: eh })
                      );
                      e = s.find((e) => (0, F.qq)(e.xcall_transaction_hash, t));
                    } catch (e) {}
                  let { status: s, error_status: a } = { ...e };
                  if (s || a) {
                    let { transfer_id: t } = { ...e };
                    t && eV({ ...e$, transfer_id: t }),
                      e7(
                        v().orderBy(
                          v().uniqBy(
                            v().concat(e, e8),
                            "xcall_transaction_hash"
                          ),
                          ["xcall_timestamp"],
                          ["desc"]
                        )
                      ),
                      [
                        i.XTransferStatus.Executed,
                        i.XTransferStatus.CompletedFast,
                        i.XTransferStatus.CompletedSlow,
                      ].includes(s) && reset("finish");
                  } else if (null == e ? void 0 : e.transfer_id) {
                    let { transfer_id: t } = { ...e };
                    eV({ ...e$, transfer_id: t });
                  }
                } else if (e) {
                  let t = (0, F.qo)(
                      await ec.sdkUtils.getTransfers({ transferId: e })
                    ),
                    s = t.find((t) => (0, F.qq)(t.transfer_id, e)),
                    {
                      relayer_fee: a,
                      slippage: l,
                      status: n,
                      error_status: r,
                    } = { ...s };
                  if (n || r) {
                    let e;
                    if ((null == t2 ? void 0 : t2.error_status) === null)
                      switch (r) {
                        case i.XTransferErrorStatus.LowSlippage:
                          e = l > (null == t2 ? void 0 : t2.slippage);
                          break;
                        case i.XTransferErrorStatus.LowRelayerFee:
                          e = a > (null == t2 ? void 0 : t2.relayer_fee);
                          break;
                        default:
                          e = !0;
                      }
                    else e = !0;
                    e &&
                      e7(
                        v().orderBy(
                          v().uniqBy(
                            v().concat(s, e8),
                            "xcall_transaction_hash"
                          ),
                          ["xcall_timestamp"],
                          ["desc"]
                        )
                      ),
                      [
                        i.XTransferStatus.Executed,
                        i.XTransferStatus.CompletedFast,
                        i.XTransferStatus.CompletedSlow,
                      ].includes(n) && reset("finish");
                  }
                }
              }
            };
            getData();
            let e = setInterval(() => getData(), 7500);
            return () => clearInterval(e);
          }, [eh, e$]),
          (0, n.useEffect)(() => {
            tl(!ta);
          }, [tt]),
          (0, n.useEffect)(() => {
            let getData = (e) => {
              (tt || (t2 && !t2.execute_transaction_hash)) &&
                (!ta || e) &&
                tl(!ta);
            };
            getData();
            let e = setInterval(() => getData(!0), 1e3);
            return () => clearInterval(e);
          }, [ta]),
          (0, n.useEffect)(() => {
            if (tn) {
              let e = setInterval(() => {
                to((ti || 5) - 1), 1 === ti && tr(!1);
              }, 1e3);
              return () => clearInterval(e);
            }
          }, [tn, ti]),
          (0, n.useEffect)(() => {
            let { asset: e } = { ...ew },
              t = (0, P.j2)(e, en),
              { allow_paying_gas: s } = { ...t };
            t &&
              ((ee.relayerFeeAssetType = s ? v().head(q.Qc) : "native"),
              s || eS({ ...ek, relayerFeeAssetType: "native" }));
          }, [en, ew]);
        let reset = async (e) => {
            let t = !["address", "user_rejected"].includes(e);
            t &&
              (eN({ ...ew, amount: null }),
              eB(null),
              ez(null),
              eZ(void 0),
              eV(null)),
              "finish" !== e && t && eS(ee),
              t && (eL(null), eU(null)),
              eG(null),
              eM(null),
              eH(null),
              eK(null),
              e0(null),
              e5(null),
              e3(j()().valueOf()),
              e6(j()().valueOf());
            let { source_chain: s, destination_chain: a } = { ...ew };
            getBalances(s), getBalances(a);
          },
          getBalances = (e) => S({ type: U.ZK, value: { chain: e } }),
          call = async function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null == eD
                ? void 0
                : eD.relayerFee;
            eG(null), eK(!0);
            let t = !1,
              s = !1;
            {
              var a, l;
              let {
                  source_chain: n,
                  destination_chain: r,
                  asset: i,
                  amount: o,
                  receive_wrap: d,
                } = { ...ew },
                c = (0, F.yd)(o, 6);
              void 0 === eX && checkApprovedNeeded(c);
              let {
                  to: u,
                  infiniteApprove: f,
                  callData: h,
                  slippage: p,
                  forceSlow: b,
                  receiveLocal: g,
                } = { ...ek },
                y = (0, P.fr)(n, el),
                _ = (0, P.fr)(r, el),
                { native_token: w } = { ...y },
                N = (0, P.j2)(i, en),
                { symbol: k } = { ...N },
                S = (0, P.Gr)(
                  null == y ? void 0 : y.chain_id,
                  null == N ? void 0 : N.contracts
                ),
                E = v().cloneDeep(S);
              k &&
              (0, F.qq)(
                null == S
                  ? void 0
                  : null === (a = S.next_asset) || void 0 === a
                  ? void 0
                  : a.symbol,
                k
              )
                ? (S = { ...S, ...S.next_asset })
                : (null == S ? void 0 : S.wrappable) &&
                  k &&
                  [N.symbol, null == w ? void 0 : w.symbol].findIndex((e) =>
                    (0, F.qq)(e, k)
                  ) > -1 &&
                  (S = {
                    ...S,
                    contract_address: V,
                    symbol: N.symbol,
                    image: N.image,
                  });
              let I = (0, P.j2)(i, en),
                C = (0, P.Gr)(
                  null == _ ? void 0 : _.chain_id,
                  null == I ? void 0 : I.contracts
                );
              v().cloneDeep(C),
                (g || (null == eA ? void 0 : eA.isNextAsset)) &&
                (null == C ? void 0 : C.next_asset)
                  ? (C = { ...C, ...C.next_asset })
                  : (null == C ? void 0 : C.wrappable) &&
                    (!k ||
                      [I.symbol, C.symbol].findIndex((e) => (0, F.qq)(e, k)) >
                        -1) &&
                    !d &&
                    (C = {
                      ...C,
                      contract_address: V,
                      symbol: I.symbol,
                      image: I.image,
                    }),
                (k =
                  (null == S ? void 0 : S.symbol) ||
                  (null == N ? void 0 : N.symbol));
              let A = (null == S ? void 0 : S.decimals) || 18,
                B = "transacting" === tj ? A : 18,
                R = (0, F.yd)(
                  (c || 0) -
                    ("transacting" === tj && Number(e) > 0
                      ? Number((0, F.yd)(e, B))
                      : 0),
                  A - 2
                );
              null == y || y.domain_id;
              let z = null == _ ? void 0 : _.domain_id,
                X = {
                  from: eh,
                  dstChainId: z,
                  toAddress: x.hexZeroPad(u || eh, 32),
                  amount: (0, T.vz)(R, A),
                  callParams: [
                    u || eh,
                    V,
                    "0x00020000000000000000000000000000000000000000000000000000000000030d4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                  ],
                };
              if (!0 == eX || void 0 === eX) {
                let e;
                try {
                  e = f ? Q : (0, T.vz)(c, A);
                  let t = new m.vU([
                      "function allowance(address owner, address spender) external view returns (uint256)",
                      "function approve(address spender, uint256 amount) external returns (bool)",
                    ]),
                    a = E.next_asset.contract_address,
                    l = t.encodeFunctionData("approve", [a, e]),
                    n = { to: E.contract_address, data: l, from: eh };
                  if (n) {
                    eG(!0);
                    let e = await ef.sendTransaction(n),
                      { hash: t } = { ...e };
                    eH({
                      status: "pending",
                      message: "Waiting for ".concat(k, " approval"),
                      tx_hash: t,
                    }),
                      eM(!0);
                    let a = await ef.provider.waitForTransaction(t),
                      { status: l } = { ...a };
                    (s = !l),
                      eH(
                        s
                          ? {
                              status: "failed",
                              message: "Failed to approve ".concat(k),
                              tx_hash: t,
                            }
                          : null
                      ),
                      eM(!1);
                  }
                  eG(!1);
                } catch (a) {
                  let e = (0, F.nU)(a);
                  eH({ status: "failed", ...e }), eM(!1), eG(!1), (s = !t);
                }
              }
              if (!s)
                try {
                  e0(!0);
                  let a = new m.vU([
                      "function sendFrom(address _from, uint16 _dstChainId, bytes32 _toAddress, uint _amount, (address payable, address, bytes) calldata _callParams) external payable",
                    ]),
                    n = a.encodeFunctionData("sendFrom", [
                      X.from,
                      X.dstChainId,
                      X.toAddress,
                      X.amount,
                      X.callParams,
                    ]),
                    r = {
                      to: S.contract_address,
                      data: n,
                      from: eh,
                      chainId: null == y ? void 0 : y.chain_id,
                      value: (0, T.vz)(e, B),
                    };
                  if (r) {
                    try {
                      let e = await ef.estimateGas(r);
                      e &&
                        (r.gasLimit = (0, T.Ob)(
                          (0, T.lt)(e).mulUnsafe((0, T.lt)(q.Sk))
                        ));
                    } catch (e) {}
                    let a = await ef.sendTransaction(r),
                      { hash: n } = { ...a },
                      i = await ef.provider.waitForTransaction(n),
                      { transactionHash: o, status: d } = { ...i };
                    if (
                      ((s = !d),
                      eV(i),
                      e5({
                        status: s ? "failed" : "success",
                        message: s
                          ? "Failed to send transaction"
                          : "Transferring ".concat(
                              k,
                              ". (It's ok to close the browser)"
                            ),
                        tx_hash: n,
                      }),
                      (t = !0),
                      !s)
                    )
                      try {
                        let t =
                            (g || (null == eA ? void 0 : eA.isNextAsset)) &&
                            (null == C
                              ? void 0
                              : null === (l = C.next_asset) || void 0 === l
                              ? void 0
                              : l.contract_address)
                              ? C.next_asset.contract_address
                              : null == C
                              ? void 0
                              : C.contract_address,
                          s =
                            ((null == C ? void 0 : C.next_asset) &&
                            (0, F.qq)(t, C.next_asset.contract_address)
                              ? C.next_asset.decimals
                              : null == C
                              ? void 0
                              : C.decimals) || 18;
                        e7(
                          v().orderBy(
                            v().uniqBy(
                              v().concat(
                                {
                                  xcall_transaction_hash: o || n,
                                  xcall_timestamp: j()().unix(),
                                  origin_chain: null == y ? void 0 : y.chain_id,
                                  origin_domain: X.origin,
                                  origin_transacting_asset: X.asset,
                                  origin_transacting_amount: Number(
                                    (0, T.vz)(c, A)
                                  ),
                                  destination_chain:
                                    null == _ ? void 0 : _.chain_id,
                                  destination_domain: X.destination,
                                  destination_transacting_asset: t,
                                  destination_transacting_amount: (
                                    null == eA ? void 0 : eA.amountReceived
                                  )
                                    ? (0, T.vz)(
                                        eA.amountReceived -
                                          ("transacting" === tj && Number(e) > 0
                                            ? e
                                            : 0),
                                        s
                                      )
                                    : void 0,
                                  to: X.unwrapNativeOnDestination
                                    ? null == _
                                      ? void 0
                                      : _.unwrapper_contract
                                    : X.to,
                                  force_slow: b,
                                  receive_local:
                                    g || (null == eA ? void 0 : eA.isNextAsset),
                                },
                                e8
                              ),
                              "xcall_transaction_hash"
                            ),
                            ["xcall_timestamp"],
                            ["desc"]
                          )
                        ),
                          ts(!0);
                      } catch (e) {
                        console.log(
                          "[/]",
                          "[xcall setLatestTransfers error]",
                          { xcallParams: X },
                          e
                        );
                      }
                  }
                } catch (n) {
                  let e = (0, F.nU)(n);
                  console.log("[/]", "[xcall error]", { xcallParams: X }, n);
                  let { code: a } = { ...e },
                    { message: l } = { ...e };
                  ((null == l
                    ? void 0
                    : l.includes("insufficient funds for gas")) &&
                    (l = "Insufficient gas for the destination gas fee."),
                  "user_rejected" === a)
                    ? reset(a)
                    : e5({ status: "failed", ...e, message: l }),
                    (s = !t);
                }
            }
            s && eV(null),
              e0(!1),
              eK(!1),
              eh &&
                t &&
                (await (0, F._v)(1e3),
                e3(j()().valueOf()),
                e6(j()().valueOf()));
          },
          checkSupported = () => {
            let { source_chain: e, destination_chain: t, asset: s } = { ...ew },
              a = (0, P.fr)(e, el),
              l = (0, P.fr)(t, el),
              n = (0, P.j2)(s, en),
              r = (0, P.j2)(s, en);
            return (
              a &&
              l &&
              n &&
              r &&
              (0, P.Gr)(a.chain_id, n.contracts) &&
              (0, P.Gr)(l.chain_id, n.contracts) &&
              (0, P.Gr)(a.chain_id, r.contracts) &&
              (0, P.Gr)(l.chain_id, r.contracts)
            );
          },
          checkApprovedNeeded = async (e) => {
            if (eh && en) {
              if ((0, T.hj)(e) && !(0, T.Fr)(e)) {
                let { domain_id: t } = { ...tw },
                  { contract_address: s, decimals: a } = { ...tA },
                  { contract_address: l } = {
                    ...(null == tA ? void 0 : tA.next_asset),
                  },
                  n = (0, T.vz)(e, a);
                try {
                  if (void 0 == l) {
                    eZ(!1);
                    return;
                  }
                  let e = new f.CH(
                      s,
                      [
                        "function allowance(address owner, address spender) external view returns (uint256)",
                        "function approve(address spender, uint256 amount) external returns (bool)",
                      ],
                      ef
                    ),
                    t = await e.allowance(eh, l),
                    a = h.O$.from(n),
                    r = a.gte(t);
                  r ? eZ(!0) : eZ(!1);
                } catch (i) {
                  let a = (0, F.nU)(i),
                    { message: r } = { ...a };
                  (null == r ? void 0 : r.includes("Signer Address Missing")) ||
                    console.log(
                      "[/]",
                      "[approveIfNeeded error]",
                      {
                        domain_id: t,
                        contract_address: s,
                        spender: l,
                        amount: e,
                        amountToApprove: n,
                      },
                      i,
                      a
                    );
                }
              } else eZ(!1);
            }
          },
          estimateFees = async () => {
            if (checkSupported()) {
              eL(null), eH(null), e0(!1), eK(!1), e5(null);
              try {
                var e;
                let {
                    source_chain: t,
                    destination_chain: s,
                    asset: a,
                    amount: l,
                  } = { ...ew },
                  { relayerFeeAssetType: n, forceSlow: r } = { ...ek },
                  i = (0, P.fr)(t, el),
                  o = (0, P.fr)(s, el),
                  { native_token: d } = { ...i },
                  { gas_price: c } = { ...o },
                  { decimals: u } = { ...d };
                u = u || 18;
                let f = (0, P.j2)(a, en),
                  { contracts: h, price: p, symbol: v } = { ...f },
                  b = (0, P.Gr)(i.chain_id, h);
                v &&
                (0, F.qq)(
                  null == b
                    ? void 0
                    : null === (e = b.next_asset) || void 0 === e
                    ? void 0
                    : e.symbol,
                  v
                )
                  ? (b = { ...b, ...b.next_asset })
                  : (null == b ? void 0 : b.wrappable) &&
                    v &&
                    [f.symbol, null == d ? void 0 : d.symbol].findIndex((e) =>
                      (0, F.qq)(e, v)
                    ) > -1 &&
                    (b = {
                      ...b,
                      contract_address: V,
                      symbol: f.symbol,
                      image: f.image,
                    }),
                  b.decimals;
                let j = {
                  originDomain: i.domain_id,
                  destinationDomain: o.domain_id,
                  isHighPriority: !r,
                  priceIn: "transacting" === n ? "usd" : "native",
                  destinationGasPrice: c,
                };
                if ("mainnet" !== q.IB) {
                  let e = (0, F.qo)(er).find((e) =>
                      (0, F.qq)(e.asset_id, null == d ? void 0 : d.symbol)
                    ),
                    t = (0, F.qo)(er).find((e) => {
                      var t;
                      return (0, F.qq)(
                        e.asset_id,
                        null == o
                          ? void 0
                          : null === (t = o.native_token) || void 0 === t
                          ? void 0
                          : t.symbol
                      );
                    });
                  (null == e ? void 0 : e.price) &&
                    (j.originNativeTokenPrice = e.price),
                    (null == t ? void 0 : t.price) &&
                      (j.destinationNativeTokenPrice = t.price);
                }
                try {
                  let e = new m.vU([
                      "function estimateSendFee(uint16 _dstChainId, bytes32 _toAddress, uint _amount, bool _useZro, bytes calldata _adapterParams) external view returns (uint nativeFee, uint zroFee)",
                    ]),
                    t = {
                      from: eh,
                      dstChainId: o.domain_id,
                      toAddress: x.hexZeroPad(eh, 32),
                      amount: (0, T.vz)(l, 18),
                      refundAddress: eh,
                      zroPaymentAddress: V,
                      adapterParams:
                        "0x00020000000000000000000000000000000000000000000000000000000000030d4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                    },
                    s = e.encodeFunctionData("estimateSendFee", [
                      t.dstChainId,
                      t.toAddress,
                      t.amount,
                      t.zroPaymentAddress,
                      t.adapterParams,
                    ]),
                    a = { to: b.contract_address, data: s, from: eh },
                    n = await ef.call(a);
                  n = e.decodeFunctionResult("estimateSendFee", n)[0];
                  let r = (0, T.bM)(n, u);
                  eL({ routerFee: 0, relayerFee: r });
                } catch (e) {
                  console.log("[/]", "[estimateRelayerFee error]", j, e),
                    eL({ routerFee: 0 });
                }
              } catch (e) {
                console.log(e);
              }
            } else eL(null);
          },
          calculateAmountReceived = async (e, t) => {
            let s = parseFloat((0, F.yd)((e * q.bB) / 100, tL));
            eB({
              amountReceived: e,
              routerFee: s,
              isNextAsset: "boolean" == typeof t ? t : ty,
            });
          },
          {
            source_chain: td,
            destination_chain: tc,
            asset: tu,
            symbol: tx,
            amount: tm,
            receive_next: tf,
            receive_wrap: th,
          } = { ...ew },
          {
            to: tp,
            infiniteApprove: tv,
            slippage: tb,
            relayerFeeAssetType: tj,
            forceSlow: tg,
            receiveLocal: ty,
            showNextAssets: t_,
          } = { ...ek },
          tw = (0, P.fr)(td, el),
          tN = (0, P.fr)(tc, el),
          { name: tk, native_token: tS, image: tq, color: tT } = { ...tw },
          { explorer: tF } = { ...tN },
          { url: tE, transaction_path: tI } = { ...tF },
          tC = (0, P.j2)(tu, en),
          tA = (0, P.Gr)(
            null == tw ? void 0 : tw.chain_id,
            null == tC ? void 0 : tC.contracts
          ),
          tB = v().cloneDeep(tA);
        tx &&
        (0, F.qq)(
          null == tA
            ? void 0
            : null === (e = tA.next_asset) || void 0 === e
            ? void 0
            : e.symbol,
          tx
        )
          ? (tA = { ...tA, ...tA.next_asset })
          : (null == tA ? void 0 : tA.wrappable) &&
            tx &&
            [tC.symbol, null == tS ? void 0 : tS.symbol].findIndex((e) =>
              (0, F.qq)(e, tx)
            ) > -1 &&
            (tA = {
              ...tA,
              contract_address: V,
              symbol: tC.symbol,
              image: tC.image,
            });
        let tR = (0, P.j2)(tu, en),
          tz = (0, P.Gr)(
            null == tN ? void 0 : tN.chain_id,
            null == tR ? void 0 : tR.contracts
          );
        v().cloneDeep(tz);
        let tX = !1;
        (ty || (null == eA ? void 0 : eA.isNextAsset)) &&
        (null == tz ? void 0 : tz.next_asset)
          ? (tz = { ...tz, ...tz.next_asset })
          : (null == tz ? void 0 : tz.wrappable) &&
            (!tx ||
              [tR.symbol, tz.symbol].findIndex((e) => (0, F.qq)(e, tx)) > -1) &&
            ((tX = !0),
            th ||
              (tz = {
                ...tz,
                contract_address: V,
                symbol: tR.symbol,
                image: tR.image,
              }));
        let tZ =
            (null == tA ? void 0 : tA.symbol) ||
            (null == tC ? void 0 : tC.symbol),
          tD =
            (null == tz ? void 0 : tz.symbol) ||
            (null == tR ? void 0 : tR.symbol),
          tL = (null == tA ? void 0 : tA.decimals) || 18,
          tP = (null == tz ? void 0 : tz.decimals) || 18,
          tU =
            null ===
              (t = (0, P.pm)(
                null == tw ? void 0 : tw.chain_id,
                null == tA ? void 0 : tA.contract_address,
                ep
              )) || void 0 === t
              ? void 0
              : t.amount;
        null ===
          (s = (0, P.pm)(
            null == tN ? void 0 : tN.chain_id,
            null == tz ? void 0 : tz.contract_address,
            ep
          )) ||
          void 0 === s ||
          s.amount;
        let tO =
            null ===
              (c = (0, P.pm)(null == tw ? void 0 : tw.chain_id, V, ep)) ||
            void 0 === c
              ? void 0
              : c.amount,
          { routerFee: tG, relayerFee: tW } = { ...eD };
        (tG =
          (null == eA ? void 0 : eA.routerFee) &&
          !(tg || (null == eA ? void 0 : eA.isFastPath) === !1)
            ? eA.routerFee
            : eD
            ? tg
              ? 0
              : tG
            : null),
          (tW = eD ? tW || 0 : null);
        let tM =
            tU &&
            (0, T.bM)(
              BigInt((0, T.vz)(tU, tL)) -
                BigInt(
                  (0, T.vz)(
                    tW && (null == tA ? void 0 : tA.contract_address) === V
                      ? tW
                      : "0",
                    tL
                  )
                ),
              tL
            ),
          tY =
            "transacting" === tj && Number(tW) > 0
              ? Number((0, F.yd)(tW, tL))
              : 0,
          tH = tY > 0 && Number(tm) > 0 ? (Number(tG) + tY) / tm : null,
          t$ =
            (0, T.hj)(tm) &&
            !(0, T.Fr)(tm) &&
            "number" == typeof (null == tC ? void 0 : tC.price) &&
            !tC.is_stablecoin,
          tV = (null == eA ? void 0 : eA.amountReceived)
            ? Number((0, F.yd)(eA.amountReceived - tY, tP))
            : Number(tm) > 0 && (0, T.hj)(tG)
            ? Number((0, F.yd)(tm - tG - tY, tP))
            : null;
        (null == eA ? void 0 : eA.destinationSlippage) &&
          eA.originSlippage &&
          (eA.destinationSlippage, eA.originSlippage);
        let tQ = v().sum(
            (0, F.qo)(
              null == ei ? void 0 : ei[null == tN ? void 0 : tN.chain_id]
            )
              .filter((e) => {
                var t;
                return (
                  (0, F.qo)([
                    null == tz ? void 0 : tz.contract_address,
                    null == tz
                      ? void 0
                      : null === (t = tz.next_asset) || void 0 === t
                      ? void 0
                      : t.contract_address,
                  ]).findIndex((t) => (0, F.qq)(t, e.contract_address)) > -1
                );
              })
              .map((e) =>
                (0, T.bM)(
                  e.amount,
                  (null == tz ? void 0 : tz.next_asset) &&
                    (0, F.qq)(
                      e.contract_address,
                      tz.next_asset.contract_address
                    )
                    ? tz.next_asset.decimals
                    : tP
                )
              )
              .map((e) => (Number(e) > 0 ? Number(e) : 0))
          ),
          { adopted: tK, local: tJ } = {
            ...(0, F.qo)(eo).find((e) => {
              var t, s;
              return (
                (null === (t = e.chain_data) || void 0 === t
                  ? void 0
                  : t.id) === tc &&
                (null === (s = e.asset_data) || void 0 === s
                  ? void 0
                  : s.id) === tu
              );
            }),
          },
          t0 = (
            null == tK
              ? void 0
              : null === (u = tK.symbol) || void 0 === u
              ? void 0
              : u.startsWith(q.VP)
          )
            ? tK
            : (null == tJ ||
                null === (p = tJ.symbol) ||
                void 0 === p ||
                p.startsWith(q.VP),
              tJ),
          t1 = (0, F.qo)(v().concat(tK, tJ))
            .filter((e) => (0, T.hj)(e.balance))
            .map((e) => Number(e.balance)),
          t5 =
            ty || (null == eA ? void 0 : eA.isNextAsset)
              ? null
              : Number(null == t0 ? void 0 : t0.balance) > -1
              ? Number(t0.balance)
              : v().min(t1);
        if ((0, T.hj)(tm)) {
          if (
            (0, T.hj)(tU) &&
            BigInt((0, T.vz)(tm, tL)) > BigInt((0, T.vz)(tU, tL))
          )
            k = "Insufficient Balance";
          else if (0 > Number(tm))
            k = "The amount cannot be less than the transfer fee.";
          else if ((0, T.hj)(t5) && Number(tm) > t5)
            k = "Exceed Pool Balances: ".concat((0, F.Y4)(t5, "0,0.00"));
          else if (eD) {
            if ((!(0, T.hj)(tW) || 0 >= Number(tW)) && "testnet" !== q.IB)
              k =
                "Cannot estimate the relayer fee at the moment. Please try again later.";
            else if (Number(tW) > 0)
              switch (tj) {
                case "native":
                  (0, T.hj)(tO) &&
                    BigInt((0, T.vz)(tO)) <
                      BigInt((0, T.vz)(tW)) +
                        BigInt(
                          (0, T.vz)(
                            (null == tA ? void 0 : tA.contract_address) === V
                              ? tm
                              : "0"
                          )
                        ) &&
                    (k = "Insufficient gas for the destination gas fee.");
                  break;
                case "transacting":
                  tV <= 0 && (k = "Fees greater than estimate received.");
              }
          }
        }
        let t2 = v().head(e8),
          {
            transfer_id: t3,
            status: t4,
            error_status: t6,
            force_slow: t8,
            transaction_hash: t7,
            xcall_timestamp: t9,
            execute_transaction_hash: se,
            routers: st,
          } = { ...t2 },
          ss =
            se &&
            "".concat(tE).concat(null == tI ? void 0 : tI.replace("{tx}", se)),
          sa = ((null == st ? void 0 : st.length) === 0 || t8 ? 120 : 4) * 60,
          sl = j()().diff((0, F.F$)(t9), "seconds"),
          sn =
            t6 &&
            ![i.XTransferErrorStatus.NoBidsReceived].includes(t6) &&
            !se &&
            [i.XTransferStatus.XCalled, i.XTransferStatus.Reconciled].includes(
              t4
            ),
          sr =
            [
              i.XTransferErrorStatus.LowRelayerFee,
              i.XTransferErrorStatus.ExecutionError,
            ].includes(t6) &&
            (0, F.qo)(ev).findIndex(
              (e) =>
                (0, F.qq)(e.transfer_id, t3) &&
                5 >= j()().diff(j()(e.updated), "minutes", !0)
            ) > -1,
          si = "number" == typeof e9 && e9 > 0,
          so = checkSupported(),
          sd = eQ || eO,
          sc = e1 || (!e$ && eY) || eR,
          su = tw && eb !== tw.chain_id && !e$,
          sx =
            (null == em
              ? void 0
              : null === (b = em.constructor) || void 0 === b
              ? void 0
              : b.name) === "WalletConnectProvider",
          sm = tT && "".concat(tT).concat("25", " 0px 16px 128px 64px");
        return (0, a.jsxs)("div", {
          className: "children grid grid-cols-1 ".concat(
            si ? "lg:grid-cols-8" : "",
            " gap-4 my-4 sm:my-1 xl:my-4"
          ),
          children: [
            (0, a.jsx)("div", {
              className: "hidden xl:block col-span-0 xl:col-span-2",
            }),
            (0, a.jsx)("div", {
              className: "col-span-1 ".concat(
                si ? "lg:col-span-5" : "",
                " xl:col-span-4 3xl:mt-16"
              ),
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center mx-1 my-4 space-y-6 3xl:justify-start sm:my-0 xl:my-6 sm:mx-4",
                children: [
                  (0, a.jsx)("div", {
                    className: "w-full ".concat(
                      tt && t2
                        ? "max-w-xl 3xl:max-w-2xl"
                        : "max-w-md 3xl:max-w-xl"
                    ),
                    children:
                      tt && t2
                        ? (0, a.jsxs)("div", {
                            className:
                              "px-4 pt-5 pb-6 space-y-4 border rounded bg-slate-50 dark:bg-slate-900 dark:border-slate-800 sm:px-6",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center justify-between space-x-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "text-lg font-semibold",
                                    children: "Transfer status",
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => {
                                      eV(null), e5(null), ts(!1);
                                    },
                                    children: (0, a.jsx)(y.FU5, {
                                      size: 20,
                                      className: "-mr-1",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "flex items-center justify-center",
                                children: (0, a.jsx)(action_required, {
                                  forceDisabled:
                                    se ||
                                    !sn ||
                                    [
                                      i.XTransferErrorStatus.ExecutionError,
                                      i.XTransferErrorStatus.NoBidsReceived,
                                    ].includes(t6) ||
                                    sr,
                                  transferData: t2,
                                  buttonTitle: (0, a.jsx)(X.Z, {
                                    src: "/images/transfer-statuses/".concat(
                                      se
                                        ? "Success-End.gif"
                                        : sn
                                        ? t6 ===
                                          i.XTransferErrorStatus.LowSlippage
                                          ? "Error-Slippage.gif"
                                          : t6 ===
                                            i.XTransferErrorStatus.LowRelayerFee
                                          ? "Error-Gas.gif"
                                          : "Error-Generic.gif"
                                        : "Start.gif"
                                    ),
                                    srcEnd: "/images/transfer-statuses/".concat(
                                      se
                                        ? "Success-End.jpeg"
                                        : sn
                                        ? t6 ===
                                          i.XTransferErrorStatus.LowSlippage
                                          ? "Error-Slippage.jpeg"
                                          : t6 ===
                                            i.XTransferErrorStatus.LowRelayerFee
                                          ? "Error-Gas.jpeg"
                                          : "Error-Generic.jpeg"
                                        : "Processing.gif"
                                    ),
                                    width: 526,
                                    height: 295.875,
                                  }),
                                  onTransferBumped: (e) => {
                                    if (e8) {
                                      let t = e8.findIndex(
                                        (e) =>
                                          (e.transfer_id &&
                                            e.transfer_id === t3) ||
                                          (e.xcall_transaction_hash &&
                                            e.xcall_transaction_hash === t7)
                                      );
                                      t > -1 &&
                                        ((e8[t] = {
                                          ...e8[t],
                                          ...e,
                                          error_status: null,
                                        }),
                                        e7(e8));
                                    }
                                  },
                                  onSlippageUpdated: (e) => {
                                    if (e8) {
                                      let t = e8.findIndex(
                                        (e) =>
                                          (e.transfer_id &&
                                            e.transfer_id === t3) ||
                                          (e.xcall_transaction_hash &&
                                            e.xcall_transaction_hash === t7)
                                      );
                                      t > -1 &&
                                        ((e8[t] = {
                                          ...e8[t],
                                          slippage: e,
                                          error_status: null,
                                        }),
                                        e7(e8));
                                    }
                                  },
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "flex flex-col items-center space-y-2",
                                children: (0, a.jsx)("span", {
                                  className:
                                    "text-xs font-medium text-slate-500 dark:text-slate-500 sm:text-sm",
                                  children: se
                                    ? (0, a.jsx)("div", {
                                        className: "flex flex-col items-center",
                                        children: (0, a.jsx)("a", {
                                          href: ss,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          className: "text-center",
                                          children: "Transfer completed.",
                                        }),
                                      })
                                    : sn
                                    ? (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-col items-center space-y-1",
                                        children: [
                                          (0, a.jsx)(action_required, {
                                            forceDisabled:
                                              [
                                                i.XTransferErrorStatus
                                                  .ExecutionError,
                                                i.XTransferErrorStatus
                                                  .NoBidsReceived,
                                              ].includes(t6) || sr,
                                            transferData: t2,
                                            buttonTitle: (0, a.jsx)("span", {
                                              className: "text-center",
                                              children: [
                                                i.XTransferErrorStatus
                                                  .ExecutionError,
                                                i.XTransferErrorStatus
                                                  .NoBidsReceived,
                                              ].includes(t6)
                                                ? "Error Status: ".concat(t6)
                                                : sr
                                                ? "Waiting for bump"
                                                : "Please click here to bump the ".concat(
                                                    t6 ===
                                                      i.XTransferErrorStatus
                                                        .LowSlippage
                                                      ? "slippage"
                                                      : "gas amount",
                                                    " higher."
                                                  ),
                                            }),
                                            onTransferBumped: (e) => {
                                              if (e8) {
                                                let t = e8.findIndex(
                                                  (e) =>
                                                    (e.transfer_id &&
                                                      e.transfer_id === t3) ||
                                                    (e.xcall_transaction_hash &&
                                                      e.xcall_transaction_hash ===
                                                        t7)
                                                );
                                                t > -1 &&
                                                  ((e8[t] = {
                                                    ...e8[t],
                                                    ...e,
                                                    error_status: null,
                                                  }),
                                                  e7(e8));
                                              }
                                            },
                                            onSlippageUpdated: (e) => {
                                              if (e8) {
                                                let t = e8.findIndex(
                                                  (e) =>
                                                    (e.transfer_id &&
                                                      e.transfer_id === t3) ||
                                                    (e.xcall_transaction_hash &&
                                                      e.xcall_transaction_hash ===
                                                        t7)
                                                );
                                                t > -1 &&
                                                  ((e8[t] = {
                                                    ...e8[t],
                                                    slippage: e,
                                                    error_status: null,
                                                  }),
                                                  e7(e8));
                                              }
                                            },
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex flex-wrap items-center justify-center",
                                            children: [
                                              (0, a.jsx)("span", {
                                                className: "mr-1",
                                                children:
                                                  "To file a support request, please create a ticket on our discord",
                                              }),
                                              (0, a.jsx)("a", {
                                                href: "https://discord.hera.finance",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "underline",
                                                children: "here",
                                              }),
                                              ".",
                                            ],
                                          }),
                                        ],
                                      })
                                    : (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-col items-center space-y-1",
                                        children: [
                                          sl > sa
                                            ? (0, a.jsx)("span", {
                                                className: "text-center",
                                                children:
                                                  "Your assets are on the way! We will keep you informed.",
                                              })
                                            : (0, a.jsxs)("div", {
                                                className:
                                                  "flex flex-wrap items-center justify-center space-x-1",
                                                children: [
                                                  (0, a.jsx)("span", {
                                                    children:
                                                      "Your funds will arrive at the destination in about",
                                                  }),
                                                  (0, a.jsx)(time_timeSpent, {
                                                    fromTime: sl,
                                                    toTime: sa,
                                                    noTooltip: !0,
                                                    className:
                                                      "font-semibold text-black dark:text-white",
                                                  }),
                                                  ".",
                                                ],
                                              }),
                                          (0, a.jsx)("span", {
                                            className: "text-center",
                                            children:
                                              "If you close this window, your transaction will still be processed.",
                                          }),
                                        ],
                                      }),
                                }),
                              }),
                            ],
                          })
                        : (0, a.jsxs)("div", {
                            className: "space-y-3 3xl:space-y-4",
                            children: [
                              ew._receiveLocal &&
                                tz &&
                                !tz.next_asset &&
                                (0, a.jsx)(g.Alert, {
                                  show: "boolean" != typeof tn || tn,
                                  icon: (0, a.jsx)(N.ib5, {
                                    size: 26,
                                    className: "mb-0.5",
                                  }),
                                  animate: {
                                    mount: { y: 0 },
                                    unmount: { y: 32 },
                                  },
                                  dismissible: { onClose: () => tr(!1) },
                                  className: "flex alert-box",
                                  children: (0, a.jsxs)("span", {
                                    className: "text-sm",
                                    children: [
                                      "Receive NextAsset setting turned off for ",
                                      null == tN ? void 0 : tN.name,
                                      ".",
                                    ],
                                  }),
                                }),
                              el &&
                                en &&
                                (0, a.jsxs)("div", {
                                  className:
                                    "px-4 pt-5 pb-6 space-y-8 bg-white border rounded dark:bg-slate-900 dark:border-slate-700 3xl:space-y-10 sm:pt-6 3xl:pt-8 sm:pb-7 3xl:pb-10 sm:px-6 3xl:px-8",
                                  style:
                                    so && sm
                                      ? {
                                          boxShadow: sm,
                                          WebkitBoxShadow: sm,
                                          MozBoxShadow: sm,
                                        }
                                      : void 0,
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "space-y-7 3xl:space-y-10",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center justify-between space-x-2",
                                          children: [
                                            (0, a.jsxs)("h1", {
                                              className:
                                                "text-lg font-semibold 3xl:text-2xl",
                                              children: [
                                                "RAVEX Bridge",
                                                tf &&
                                                  (0, a.jsx)("span", {
                                                    className: "ml-1 3xl:ml-2",
                                                    children: "into nextAsset",
                                                  }),
                                              ],
                                            }),
                                            "pool" !== e_ &&
                                              (0, a.jsx)(bridge_options, {
                                                disabled: sd,
                                                applied: !v().isEqual(
                                                  Object.fromEntries(
                                                    Object.entries(ek).filter(
                                                      (e) => {
                                                        let [t, s] = e;
                                                        return !(0, F.qo)([
                                                          "slippage",
                                                          "forceSlow",
                                                          "showNextAssets",
                                                          !1 !== eX &&
                                                            "infiniteApprove",
                                                        ]).includes(t);
                                                      }
                                                    )
                                                  ),
                                                  Object.fromEntries(
                                                    Object.entries(ee).filter(
                                                      (e) => {
                                                        let [t, s] = e;
                                                        return !(0, F.qo)([
                                                          "slippage",
                                                          "forceSlow",
                                                          "showNextAssets",
                                                          !1 !== eX &&
                                                            "infiniteApprove",
                                                        ]).includes(t);
                                                      }
                                                    )
                                                  )
                                                ),
                                                initialData: ek,
                                                onChange: (e) => {
                                                  let { receiveLocal: t } = {
                                                    ...e,
                                                  };
                                                  if (
                                                    (eS(e),
                                                    ((t &&
                                                      !(null == ek
                                                        ? void 0
                                                        : ek.receiveLocal)) ||
                                                      (!t &&
                                                        (null == ek
                                                          ? void 0
                                                          : ek.receiveLocal)) ||
                                                      (null == e
                                                        ? void 0
                                                        : e.relayerFeeAssetType) !==
                                                        tj) &&
                                                      ((0, T.hj)(tm) &&
                                                      !(0, T.Fr)(tm)
                                                        ? (calculateAmountReceived(
                                                            tm,
                                                            t
                                                          ),
                                                          checkApprovedNeeded(
                                                            tm
                                                          ))
                                                        : (eB({
                                                            amountReceived: "0",
                                                            routerFee: "0",
                                                            isNextAsset: t,
                                                          }),
                                                          eZ(!1)),
                                                      (null == e
                                                        ? void 0
                                                        : e.relayerFeeAssetType) !==
                                                        tj &&
                                                        eU(j()().valueOf()),
                                                      (null == ey
                                                        ? void 0
                                                        : ey.receive_next) &&
                                                        !t))
                                                  ) {
                                                    let e = {
                                                      amount: tm,
                                                      receive_next: t,
                                                    };
                                                    ej.push(
                                                      "/"
                                                        .concat(
                                                          td && tc
                                                            ? ""
                                                                .concat(
                                                                  tu
                                                                    ? "".concat(
                                                                        tu.toUpperCase(),
                                                                        "-"
                                                                      )
                                                                    : "",
                                                                  "from-"
                                                                )
                                                                .concat(
                                                                  td,
                                                                  "-to-"
                                                                )
                                                                .concat(tc)
                                                            : ""
                                                        )
                                                        .concat(
                                                          Object.keys(e)
                                                            .length > 0
                                                            ? "?".concat(
                                                                new URLSearchParams(
                                                                  e
                                                                ).toString()
                                                              )
                                                            : ""
                                                        ),
                                                      void 0,
                                                      { shallow: !0 }
                                                    );
                                                  }
                                                },
                                                showInfiniteApproval: eX,
                                                hasNextAsset:
                                                  null == tz
                                                    ? void 0
                                                    : tz.next_asset,
                                                chainData: tN,
                                                relayerFeeAssetTypes:
                                                  q.Qc.filter(
                                                    (e) =>
                                                      (null == tC
                                                        ? void 0
                                                        : tC.allow_paying_gas) ||
                                                      "transacting" !== e
                                                  ).map((e) => ({
                                                    name:
                                                      "transacting" === e
                                                        ? tZ
                                                        : null == tS
                                                        ? void 0
                                                        : tS.symbol,
                                                    value: e,
                                                  })),
                                              }),
                                          ],
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "grid grid-cols-5 gap-3 sm:gap-6",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className:
                                                "col-span-2 flex flex-col items-center sm:items-start space-y-0.5 sm:space-y-2",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "w-32 sm:w-40 flex flex-col sm:flex-row sm:items-center justify-start space-x-1.5",
                                                  children: (0, a.jsx)("span", {
                                                    className:
                                                      "text-sm font-medium text-left text-slate-600 dark:text-slate-500 3xl:text-xl",
                                                    children: "From",
                                                  }),
                                                }),
                                                (0, a.jsx)(H.Z, {
                                                  disabled: sd,
                                                  value: td,
                                                  onSelect: (e) => {
                                                    var t, s, a;
                                                    let l = e === tc ? td : tc,
                                                      n =
                                                        (null == tC
                                                          ? void 0
                                                          : null ===
                                                              (t =
                                                                tC.exclude_source_chains) ||
                                                            void 0 === t
                                                          ? void 0
                                                          : t.includes(e)) ||
                                                        (null == tC
                                                          ? void 0
                                                          : null ===
                                                              (s =
                                                                tC.exclude_destination_chains) ||
                                                            void 0 === s
                                                          ? void 0
                                                          : s.includes(l))
                                                          ? null ===
                                                              (a = v().head(
                                                                (0, F.qo)(
                                                                  en
                                                                ).filter(
                                                                  (e) =>
                                                                    e.id !== tu
                                                                )
                                                              )) || void 0 === a
                                                            ? void 0
                                                            : a.id
                                                          : tu;
                                                    eN({
                                                      ...ew,
                                                      source_chain: e,
                                                      destination_chain: l,
                                                      asset: n,
                                                      symbol:
                                                        (0, F.qq)(e, td) &&
                                                        n === tu
                                                          ? tx
                                                          : void 0,
                                                    }),
                                                      getBalances(e),
                                                      getBalances(l);
                                                  },
                                                  source: td,
                                                  destination: tc,
                                                  origin: "from",
                                                  fixed: "pool" === e_,
                                                }),
                                              ],
                                            }),
                                            (0, a.jsx)("div", {
                                              className:
                                                "flex items-center justify-center mt-5.5 sm:mt-7",
                                              children: (0, a.jsx)("button", {
                                                disabled: sd,
                                                onClick: () => {
                                                  if (!sd) {
                                                    var e, t, s;
                                                    let a =
                                                      (null == tC
                                                        ? void 0
                                                        : null ===
                                                            (e =
                                                              tC.exclude_source_chains) ||
                                                          void 0 === e
                                                        ? void 0
                                                        : e.includes(tc)) ||
                                                      (null == tC
                                                        ? void 0
                                                        : null ===
                                                            (t =
                                                              tC.exclude_destination_chains) ||
                                                          void 0 === t
                                                        ? void 0
                                                        : t.includes(td))
                                                        ? null ===
                                                            (s = v().head(
                                                              (0, F.qo)(
                                                                en
                                                              ).filter(
                                                                (e) =>
                                                                  e.id !== tu
                                                              )
                                                            )) || void 0 === s
                                                          ? void 0
                                                          : s.id
                                                        : tu;
                                                    eN({
                                                      ...ew,
                                                      source_chain: tc,
                                                      destination_chain: td,
                                                      asset: a,
                                                      amount: null,
                                                    }),
                                                      getBalances(td),
                                                      getBalances(tc);
                                                  }
                                                },
                                                className:
                                                  "bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 "
                                                    .concat(
                                                      sd
                                                        ? "cursor-not-allowed"
                                                        : "",
                                                      " "
                                                    )
                                                    .concat(
                                                      "pool" === e_
                                                        ? "pointer-events-none dark:border-slate-800"
                                                        : "dark:border-slate-700",
                                                      " rounded border flex items-center justify-center p-1 sm:p-1.5"
                                                    ),
                                                children: (0, a.jsx)(_.WY3, {
                                                  size: 18,
                                                  className: "3xl:w-6 3xl:h-6",
                                                }),
                                              }),
                                            }),
                                            (0, a.jsxs)("div", {
                                              className:
                                                "col-span-2 flex flex-col items-center sm:items-end space-y-0.5 sm:space-y-2",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "w-32 sm:w-40 flex flex-col sm:flex-row sm:items-center justify-start space-x-1.5",
                                                  children: (0, a.jsx)("span", {
                                                    className:
                                                      "text-sm font-medium text-left text-slate-600 dark:text-slate-500 3xl:text-xl",
                                                    children: "To",
                                                  }),
                                                }),
                                                (0, a.jsx)(H.Z, {
                                                  disabled: sd,
                                                  value: tc,
                                                  onSelect: (e) => {
                                                    var t, s, a;
                                                    let l = e === td ? tc : td,
                                                      n = (0, P.fr)(e, el),
                                                      r = (0, P.j2)(tu, en),
                                                      i = (0, P.Gr)(
                                                        null == n
                                                          ? void 0
                                                          : n.chain_id,
                                                        null == r
                                                          ? void 0
                                                          : r.contracts
                                                      ),
                                                      o =
                                                        (null == r
                                                          ? void 0
                                                          : null ===
                                                              (t =
                                                                r.exclude_source_chains) ||
                                                            void 0 === t
                                                          ? void 0
                                                          : t.includes(l)) ||
                                                        (null == r
                                                          ? void 0
                                                          : null ===
                                                              (s =
                                                                r.exclude_destination_chains) ||
                                                            void 0 === s
                                                          ? void 0
                                                          : s.includes(e))
                                                          ? null ===
                                                              (a = v().head(
                                                                (0, F.qo)(
                                                                  en
                                                                ).filter(
                                                                  (e) =>
                                                                    e.id !== tu
                                                                )
                                                              )) || void 0 === a
                                                            ? void 0
                                                            : a.id
                                                          : r &&
                                                            !i &&
                                                            "mainnet" === q.IB
                                                          ? "eth"
                                                          : tu;
                                                    eN({
                                                      ...ew,
                                                      source_chain: l,
                                                      destination_chain: e,
                                                      asset: o,
                                                    }),
                                                      getBalances(l),
                                                      getBalances(e);
                                                  },
                                                  source: td,
                                                  destination: tc,
                                                  origin: "to",
                                                  fixed: "pool" === e_,
                                                  include: (0, P.fr)(
                                                    void 0,
                                                    el,
                                                    {
                                                      not_disabled: !0,
                                                      return_all: !0,
                                                    }
                                                  )
                                                    .filter((e) =>
                                                      (0, P.Gr)(
                                                        e.chain_id,
                                                        null == tR
                                                          ? void 0
                                                          : tR.contracts
                                                      )
                                                    )
                                                    .map((e) => e.id),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "space-y-1.5",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center justify-between space-x-2",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className:
                                                "text-sm font-medium text-slate-600 dark:text-slate-500 3xl:text-xl",
                                              children: "You send",
                                            }),
                                            tw &&
                                              tu &&
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center space-x-1",
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    className:
                                                      "text-sm font-medium whitespace-nowrap text-slate-400 dark:text-slate-500 3xl:text-xl",
                                                    children: (0, a.jsx)(
                                                      w.cf2,
                                                      {
                                                        size: 14,
                                                        className:
                                                          "block text-slate-500 dark:text-slate-500",
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("button", {
                                                    disabled:
                                                      sd ||
                                                      ((null == tA
                                                        ? void 0
                                                        : tA.contract_address) ===
                                                        V &&
                                                        !eD),
                                                    onClick: () => {
                                                      let e = (0, F.yd)(tM, 6);
                                                      BigInt((0, T.vz)(e, tL)) >
                                                        0 &&
                                                        (eN({
                                                          ...ew,
                                                          amount: e,
                                                        }),
                                                        (0, T.hj)(e) &&
                                                          ((0, T.Fr)(e)
                                                            ? (eB({
                                                                amountReceived:
                                                                  "0",
                                                                routerFee: "0",
                                                                isNextAsset: ty,
                                                              }),
                                                              eZ(!1))
                                                            : (calculateAmountReceived(
                                                                e
                                                              ),
                                                              checkApprovedNeeded(
                                                                e
                                                              ))));
                                                    },
                                                    children: (0, a.jsx)(M.Z, {
                                                      chainId: tw.chain_id,
                                                      asset: tu,
                                                      contractAddress:
                                                        null == tA
                                                          ? void 0
                                                          : tA.contract_address,
                                                      decimals: tL,
                                                      symbol: tZ,
                                                      trigger: e2,
                                                    }),
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "bg-slate-100 dark:bg-slate-900 rounded border dark:border-slate-700 py-1.5 px-3",
                                          children: (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center justify-between space-x-2",
                                            children: [
                                              (0, a.jsx)($.Z, {
                                                disabled: "true",
                                                value: tu,
                                                onSelect: (e, t) => {
                                                  var s;
                                                  let a = (0, P.j2)(e, en),
                                                    l = (0, P.Gr)(
                                                      null == tN
                                                        ? void 0
                                                        : tN.chain_id,
                                                      null == a
                                                        ? void 0
                                                        : a.contracts
                                                    ),
                                                    n = tc
                                                      ? l
                                                        ? tc
                                                        : null ===
                                                            (s = v().head(
                                                              (0, P.fr)(
                                                                void 0,
                                                                el,
                                                                {
                                                                  not_disabled:
                                                                    !0,
                                                                  except: td,
                                                                  return_all:
                                                                    !0,
                                                                }
                                                              ).filter((e) =>
                                                                (0, P.Gr)(
                                                                  e.chain_id,
                                                                  null == a
                                                                    ? void 0
                                                                    : a.contracts
                                                                )
                                                              )
                                                            )) || void 0 === s
                                                        ? void 0
                                                        : s.id
                                                      : tc;
                                                  eN({
                                                    ...ew,
                                                    destination_chain: n,
                                                    asset: e,
                                                    symbol: t,
                                                    amount:
                                                      e === tu &&
                                                      (0, F.qq)(t, tx)
                                                        ? tm
                                                        : null,
                                                  }),
                                                    e !== tu &&
                                                      (getBalances(td),
                                                      getBalances(tc));
                                                },
                                                chain: td,
                                                destinationChain: tc,
                                                isBridge: !0,
                                                showNextAssets: t_,
                                                showNativeAssets: !0,
                                                fixed: "pool" === e_,
                                                data: { ...tC, ...tA },
                                              }),
                                              (0, a.jsxs)("div", {
                                                children: [
                                                  (0, a.jsx)(d.DebounceInput, {
                                                    debounceTimeout: 750,
                                                    size: "small",
                                                    type: "number",
                                                    placeholder: "0.00",
                                                    disabled: sd || !tu,
                                                    value: (0, T.hj)(tm)
                                                      ? tm
                                                      : "",
                                                    onChange: (e) => {
                                                      let t;
                                                      ("" === e.target.value ||
                                                        /^[0-9.\b]+$/.test(
                                                          e.target.value
                                                        )) &&
                                                        (t = e.target.value),
                                                        "string" == typeof t &&
                                                          (t.startsWith(".") &&
                                                            (t = "0".concat(t)),
                                                          (t = (0, F.yd)(
                                                            t,
                                                            6
                                                          ))),
                                                        eN({
                                                          ...ew,
                                                          amount: t,
                                                        }),
                                                        (0, T.hj)(t) &&
                                                          ((0, T.Fr)(t)
                                                            ? (eB({
                                                                amountReceived:
                                                                  "0",
                                                                routerFee: "0",
                                                                isNextAsset: ty,
                                                              }),
                                                              eZ(!1))
                                                            : (calculateAmountReceived(
                                                                t
                                                              ),
                                                              checkApprovedNeeded(
                                                                t
                                                              )));
                                                    },
                                                    onWheel: (e) =>
                                                      e.target.blur(),
                                                    onKeyDown: (e) =>
                                                      ["e", "E", "-"].includes(
                                                        e.key
                                                      ) && e.preventDefault(),
                                                    className:
                                                      "w-36 sm:w-48 bg-transparent ".concat(
                                                        sd
                                                          ? "cursor-not-allowed"
                                                          : "",
                                                        " rounded border-0 focus:ring-0 text-xl 3xl:text-2xl font-semibold text-right"
                                                      ),
                                                  }),
                                                  t$ &&
                                                    (0, a.jsx)("div", {
                                                      className: "text-right",
                                                      children: (0, a.jsx)(
                                                        Z.Z,
                                                        {
                                                          value:
                                                            (Number(tm) + tY) *
                                                            tC.price,
                                                          prefix: "$",
                                                          className:
                                                            "text-xs font-normal text-slate-500 dark:text-slate-500 3xl:text-xl",
                                                        }
                                                      ),
                                                    }),
                                                  !t$ &&
                                                    (0, a.jsx)("div", {
                                                      className: "text-right",
                                                      children: (0, a.jsx)(
                                                        Z.Z,
                                                        {
                                                          value: "0.00",
                                                          prefix: "$",
                                                          className:
                                                            "text-xs font-normal text-slate-500 dark:text-slate-500 3xl:text-xl",
                                                        }
                                                      ),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    so
                                      ? (0, a.jsxs)("div", {
                                          className: "space-y-4",
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className: "space-y-1.5",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "flex items-center justify-between space-x-2",
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "text-sm font-medium text-slate-600 dark:text-slate-500 3xl:text-xl",
                                                      children: "You receive",
                                                    }),
                                                    tN &&
                                                      tu &&
                                                      (0, a.jsxs)("div", {
                                                        className:
                                                          "flex items-center space-x-1",
                                                        children: [
                                                          (0, a.jsx)("div", {
                                                            className:
                                                              "text-sm font-medium whitespace-nowrap text-slate-400 dark:text-slate-500 3xl:text-xl",
                                                            children: (0,
                                                            a.jsx)(w.cf2, {
                                                              size: 14,
                                                              className:
                                                                "block text-slate-500 dark:text-slate-500",
                                                            }),
                                                          }),
                                                          (0, a.jsx)(M.Z, {
                                                            chainId:
                                                              tN.chain_id,
                                                            asset: tu,
                                                            contractAddress:
                                                              null == tz
                                                                ? void 0
                                                                : tz.contract_address,
                                                            decimals: tP,
                                                            symbol: tD,
                                                            trigger: e2,
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "px-3 py-2.5 border rounded bg-slate-100 dark:bg-slate-900 dark:border-slate-800",
                                                  children: (0, a.jsxs)("div", {
                                                    className:
                                                      "flex items-center justify-between space-x-2",
                                                    children: [
                                                      (0, a.jsx)($.Z, {
                                                        disabled: sd,
                                                        value: tu,
                                                        onSelect: (e, t) => {
                                                          "pool" !== e_ &&
                                                            tX &&
                                                            (eN({
                                                              ...ew,
                                                              asset: e,
                                                              receive_wrap:
                                                                null == t
                                                                  ? void 0
                                                                  : t.startsWith(
                                                                      "W"
                                                                    ),
                                                            }),
                                                            e !== tu &&
                                                              (getBalances(td),
                                                              getBalances(tc)));
                                                        },
                                                        chain: tc,
                                                        isBridge: !0,
                                                        showNextAssets: !tX,
                                                        showNativeAssets: !0,
                                                        showOnlyWrappable: tX,
                                                        fixed:
                                                          "pool" === e_ || !tX,
                                                        data: { ...tR, ...tz },
                                                      }),
                                                      !(0, T.hj)(tm) ||
                                                      (0, T.hj)(
                                                        null == eA
                                                          ? void 0
                                                          : eA.amountReceived
                                                      ) ||
                                                      eR
                                                        ? (0, a.jsx)("span", {
                                                            className:
                                                              "text-lg font-semibold whitespace-nowrap 3xl:text-2xl",
                                                            children:
                                                              (0, T.hj)(tm) &&
                                                              (0, T.hj)(tV) &&
                                                              !eR
                                                                ? (0, a.jsx)(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "w-36 sm:w-48 bg-transparent ".concat(
                                                                          (0,
                                                                          T.hj)(
                                                                            tV
                                                                          ) &&
                                                                            !(0,
                                                                            T.Fr)(
                                                                              tV
                                                                            )
                                                                            ? ""
                                                                            : "text-slate-500 dark:text-slate-500",
                                                                          " text-lg 3xl:text-2xl font-semibold text-right py-1.5"
                                                                        ),
                                                                      children:
                                                                        tV > 0
                                                                          ? tV
                                                                          : 0,
                                                                    }
                                                                  )
                                                                : (0, a.jsx)(
                                                                    "span",
                                                                    {
                                                                      children:
                                                                        "-",
                                                                    }
                                                                  ),
                                                          })
                                                        : (0, a.jsx)(R.Z, {
                                                            width: 20,
                                                            height: 20,
                                                          }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "space-y-2.5 ".concat(
                                                (0, T.hj)(tV) || !eq
                                                  ? "mt-2.5"
                                                  : "mt-0"
                                              ),
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className:
                                                    "bg-slate-100 dark:bg-slate-900 rounded border dark:border-slate-700 space-y-2.5 py-4 px-3",
                                                  children: [
                                                    (0, a.jsxs)("div", {
                                                      onClick: () => eT(!eq),
                                                      className:
                                                        "flex items-center justify-between space-x-1 cursor-pointer",
                                                      children: [
                                                        (0, a.jsx)("div", {
                                                          className:
                                                            "whitespace-nowrap ".concat(
                                                              eq
                                                                ? "text-slate-500 dark:text-slate-500 font-medium"
                                                                : "font-semibold",
                                                              " text-sm 3xl:text-xl"
                                                            ),
                                                          children:
                                                            "Estimated Fees",
                                                        }),
                                                        (0, a.jsxs)("div", {
                                                          className:
                                                            "flex items-center space-x-2",
                                                          children: [
                                                            (0, a.jsx)("div", {
                                                              children:
                                                                eD &&
                                                                (!(0, T.hj)(
                                                                  tm
                                                                ) ||
                                                                  (0, T.hj)(
                                                                    null == eA
                                                                      ? void 0
                                                                      : eA.routerFee
                                                                  ) ||
                                                                  eR)
                                                                  ? (0, a.jsx)(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "whitespace-nowrap text-slate-500 dark:text-slate-500 text-sm 3xl:text-xl font-semibold space-x-1.5",
                                                                        children:
                                                                          "native" ===
                                                                            tj &&
                                                                          (0,
                                                                          a.jsxs)(
                                                                            a.Fragment,
                                                                            {
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  a.jsx)(
                                                                                    Z.Z,
                                                                                    {
                                                                                      value:
                                                                                        Number(
                                                                                          tW
                                                                                        ) >
                                                                                        0
                                                                                          ? tW
                                                                                          : 0,
                                                                                      className:
                                                                                        "text-sm 3xl:text-xl",
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  a.jsx)(
                                                                                    "span",
                                                                                    {
                                                                                      children:
                                                                                        null ==
                                                                                        tS
                                                                                          ? void 0
                                                                                          : tS.symbol,
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                      }
                                                                    )
                                                                  : (0, a.jsx)(
                                                                      R.Z,
                                                                      {
                                                                        width: 14,
                                                                        height: 14,
                                                                      }
                                                                    ),
                                                            }),
                                                            (0, a.jsx)("div", {
                                                              children: eq
                                                                ? (0, a.jsx)(
                                                                    w.OrA,
                                                                    {
                                                                      size: 20,
                                                                      className:
                                                                        "3xl:w-5 3xl:h-5",
                                                                    }
                                                                  )
                                                                : (0, a.jsx)(
                                                                    w.jRD,
                                                                    {
                                                                      size: 20,
                                                                      className:
                                                                        "3xl:w-5 3xl:h-5",
                                                                    }
                                                                  ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    !eq &&
                                                      (0, a.jsxs)(a.Fragment, {
                                                        children: [
                                                          (0, a.jsxs)("div", {
                                                            className:
                                                              "flex items-center justify-between space-x-1",
                                                            children: [
                                                              (0, a.jsx)(
                                                                g.Tooltip,
                                                                {
                                                                  content:
                                                                    "The destination address that you want to send asset to.",
                                                                  children: (0,
                                                                  a.jsxs)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "flex items-center",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          a.jsx)(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "text-sm font-medium whitespace-nowrap text-slate-500 dark:text-slate-500 3xl:text-xl",
                                                                              children:
                                                                                "Recipient address",
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          a.jsx)(
                                                                            w.Fs0,
                                                                            {
                                                                              size: 14,
                                                                              className:
                                                                                "block ml-1 sm:hidden text-slate-400 dark:text-slate-500 sm:ml-0",
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              (0, a.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "flex flex-col sm:items-end space-y-1.5",
                                                                  children: eF
                                                                    ? (0,
                                                                      a.jsxs)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "flex items-center justify-end space-x-1.5",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              a.jsx)(
                                                                                d.DebounceInput,
                                                                                {
                                                                                  debounceTimeout: 750,
                                                                                  size: "small",
                                                                                  type: "text",
                                                                                  placeholder:
                                                                                    eh,
                                                                                  value:
                                                                                    tp,
                                                                                  onChange:
                                                                                    (
                                                                                      e
                                                                                    ) => {
                                                                                      let t =
                                                                                        e
                                                                                          .target
                                                                                          .value;
                                                                                      try {
                                                                                        (t =
                                                                                          (0,
                                                                                          F.Vl)(
                                                                                            t,
                                                                                            "normal",
                                                                                            " "
                                                                                          ).join(
                                                                                            ""
                                                                                          )),
                                                                                          (t =
                                                                                            K(
                                                                                              t
                                                                                            ));
                                                                                      } catch (e) {
                                                                                        t =
                                                                                          eh;
                                                                                      }
                                                                                      eS(
                                                                                        {
                                                                                          ...ek,
                                                                                          to: t,
                                                                                        }
                                                                                      );
                                                                                    },
                                                                                  className:
                                                                                    "w-40 sm:w-56 bg-slate-100 focus:bg-slate-200 dark:bg-slate-800 dark:focus:bg-slate-700 rounded border-0 focus:ring-0 text-sm 3xl:text-xl font-semibold text-right py-1.5 px-2",
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              a.jsx)(
                                                                                "button",
                                                                                {
                                                                                  onClick:
                                                                                    () =>
                                                                                      eE(
                                                                                        !1
                                                                                      ),
                                                                                  className:
                                                                                    "flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-black dark:text-slate-200 dark:hover:text-white",
                                                                                  children:
                                                                                    (0,
                                                                                    a.jsx)(
                                                                                      w.wRn,
                                                                                      {
                                                                                        size: 16,
                                                                                        className:
                                                                                          "3xl:w-5 3xl:h-5",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      )
                                                                    : (0,
                                                                      a.jsxs)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "flex items-center space-x-1.5",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              a.jsx)(
                                                                                g.Tooltip,
                                                                                {
                                                                                  content:
                                                                                    tp,
                                                                                  children:
                                                                                    (0,
                                                                                    a.jsx)(
                                                                                      "span",
                                                                                      {
                                                                                        className:
                                                                                          "text-sm font-semibold 3xl:text-xl",
                                                                                        children:
                                                                                          (0,
                                                                                          F.Hp)(
                                                                                            tp,
                                                                                            8
                                                                                          ),
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              a.jsx)(
                                                                                "button",
                                                                                {
                                                                                  disabled:
                                                                                    sd,
                                                                                  onClick:
                                                                                    () => {
                                                                                      sd ||
                                                                                        eE(
                                                                                          !0
                                                                                        );
                                                                                    },
                                                                                  className:
                                                                                    "rounded-full flex items-center justify-center text-slate-400 hover:text-black dark:text-slate-200 dark:hover:text-white mt-0.5",
                                                                                  children:
                                                                                    (0,
                                                                                    a.jsx)(
                                                                                      w.vpV,
                                                                                      {
                                                                                        size: 16,
                                                                                        className:
                                                                                          "3xl:w-5 3xl:h-5",
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          !(
                                                            tg ||
                                                            (null == eA
                                                              ? void 0
                                                              : eA.isFastPath) ===
                                                              !1
                                                          ) &&
                                                            (0, a.jsxs)("div", {
                                                              className:
                                                                "flex items-center justify-between space-x-1",
                                                              children: [
                                                                (0, a.jsx)(
                                                                  g.Tooltip,
                                                                  {
                                                                    content:
                                                                      "Liquidity providers receive a ".concat(
                                                                        q.bB,
                                                                        "% fee for supporting fast transfers"
                                                                      ),
                                                                    children:
                                                                      (0,
                                                                      a.jsxs)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "flex items-center",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              a.jsx)(
                                                                                "div",
                                                                                {
                                                                                  className:
                                                                                    "text-sm font-medium whitespace-nowrap text-slate-500 dark:text-slate-500 3xl:text-xl",
                                                                                  children:
                                                                                    "Router fee",
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              a.jsx)(
                                                                                w.Fs0,
                                                                                {
                                                                                  size: 14,
                                                                                  className:
                                                                                    "block ml-1 sm:hidden text-slate-400 dark:text-slate-500 sm:ml-0",
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                !(0, T.hj)(
                                                                  tm
                                                                ) ||
                                                                (0, T.hj)(
                                                                  null == eA
                                                                    ? void 0
                                                                    : eA.routerFee
                                                                ) ||
                                                                eR
                                                                  ? (0, a.jsxs)(
                                                                      "span",
                                                                      {
                                                                        className:
                                                                          "whitespace-nowrap text-slate-500 dark:text-slate-500 text-sm 3xl:text-xl font-semibold space-x-1.5",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            T.hj)(
                                                                              tm
                                                                            ) &&
                                                                            (0,
                                                                            T.hj)(
                                                                              null ==
                                                                                eA
                                                                                ? void 0
                                                                                : eA.routerFee
                                                                            ) &&
                                                                            !eR
                                                                              ? (0,
                                                                                a.jsx)(
                                                                                  Z.Z,
                                                                                  {
                                                                                    value:
                                                                                      Number(
                                                                                        tG
                                                                                      ) >
                                                                                      0
                                                                                        ? tG
                                                                                        : 0,
                                                                                    className:
                                                                                      "text-sm 3xl:text-xl",
                                                                                  }
                                                                                )
                                                                              : (0,
                                                                                a.jsx)(
                                                                                  "span",
                                                                                  {
                                                                                    children:
                                                                                      "-",
                                                                                  }
                                                                                ),
                                                                            (0,
                                                                            a.jsx)(
                                                                              "span",
                                                                              {
                                                                                children:
                                                                                  tZ,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    )
                                                                  : (0, a.jsx)(
                                                                      R.Z,
                                                                      {
                                                                        width: 14,
                                                                        height: 14,
                                                                      }
                                                                    ),
                                                              ],
                                                            }),
                                                          (0, a.jsxs)("div", {
                                                            className:
                                                              "flex items-center justify-between space-x-1",
                                                            children: [
                                                              (0, a.jsx)(
                                                                g.Tooltip,
                                                                {
                                                                  content:
                                                                    "Fee fluctuates with destination chain gas cost. You can change the asset to pay this in advanced settings.",
                                                                  children: (0,
                                                                  a.jsxs)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "flex items-center",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          a.jsx)(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "text-sm font-medium whitespace-nowrap text-slate-500 dark:text-slate-500 3xl:text-xl",
                                                                              children:
                                                                                "Gas on destination",
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          a.jsx)(
                                                                            w.Fs0,
                                                                            {
                                                                              size: 14,
                                                                              className:
                                                                                "block ml-1 sm:hidden text-slate-400 dark:text-slate-500 sm:ml-0",
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                              eD
                                                                ? (0, a.jsxs)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        "flex items-center space-x-1.5",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          a.jsxs)(
                                                                            "span",
                                                                            {
                                                                              className:
                                                                                "whitespace-nowrap text-slate-500 dark:text-slate-500 text-sm 3xl:text-xl font-semibold space-x-1.5",
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  a.jsx)(
                                                                                    Z.Z,
                                                                                    {
                                                                                      value:
                                                                                        Number(
                                                                                          tW
                                                                                        ) >
                                                                                        0
                                                                                          ? tW
                                                                                          : 0,
                                                                                      className:
                                                                                        "text-sm 3xl:text-xl",
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  a.jsx)(
                                                                                    "span",
                                                                                    {
                                                                                      children:
                                                                                        "transacting" ===
                                                                                        tj
                                                                                          ? tZ
                                                                                          : null ==
                                                                                            tS
                                                                                          ? void 0
                                                                                          : tS.symbol,
                                                                                    }
                                                                                  ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          a.jsx)(
                                                                            "button",
                                                                            {
                                                                              disabled:
                                                                                sd,
                                                                              onClick:
                                                                                () => {
                                                                                  sd ||
                                                                                    eU(
                                                                                      j()().valueOf()
                                                                                    );
                                                                                },
                                                                              className:
                                                                                "flex items-center justify-center rounded-full text-slate-400 hover:text-black dark:text-slate-200 dark:hover:text-white",
                                                                              children:
                                                                                (0,
                                                                                a.jsx)(
                                                                                  y.la_,
                                                                                  {
                                                                                    size: 16,
                                                                                    className:
                                                                                      "3xl:w-5 3xl:h-5",
                                                                                  }
                                                                                ),
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  )
                                                                : (0, a.jsx)(
                                                                    R.Z,
                                                                    {
                                                                      width: 14,
                                                                      height: 14,
                                                                    }
                                                                  ),
                                                            ],
                                                          }),
                                                          em &&
                                                            (0, a.jsx)("div", {
                                                              className:
                                                                "flex flex-col space-y-0.5",
                                                              children: (0,
                                                              a.jsxs)("div", {
                                                                className:
                                                                  "flex items-center justify-between space-x-1",
                                                                children: [
                                                                  (0, a.jsx)(
                                                                    g.Tooltip,
                                                                    {
                                                                      content:
                                                                        "We need your approval to execute this transaction on your behalf.",
                                                                      children:
                                                                        (0,
                                                                        a.jsxs)(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "flex items-center",
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                a.jsx)(
                                                                                  "div",
                                                                                  {
                                                                                    className:
                                                                                      "text-sm font-medium whitespace-nowrap text-slate-500 dark:text-slate-500 3xl:text-xl",
                                                                                    children:
                                                                                      "Infinite approval",
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                a.jsx)(
                                                                                  w.Fs0,
                                                                                  {
                                                                                    size: 14,
                                                                                    className:
                                                                                      "block ml-1 sm:hidden text-slate-400 dark:text-slate-500 sm:ml-0",
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                  (0, a.jsx)(
                                                                    g.Tooltip,
                                                                    {
                                                                      content:
                                                                        eX
                                                                          ? "We need your approval to execute this transaction on your behalf."
                                                                          : "Approval sufficient. If you need to, please revoke using other tools.",
                                                                      children:
                                                                        (0,
                                                                        a.jsx)(
                                                                          "div",
                                                                          {
                                                                            className:
                                                                              "flex items-center w-fit",
                                                                            children:
                                                                              (0,
                                                                              a.jsx)(
                                                                                o.Z,
                                                                                {
                                                                                  disabled:
                                                                                    sd,
                                                                                  width: 32,
                                                                                  height: 16,
                                                                                  checked:
                                                                                    "boolean" ==
                                                                                      typeof tv &&
                                                                                    tv,
                                                                                  onChange:
                                                                                    (
                                                                                      e
                                                                                    ) =>
                                                                                      eS(
                                                                                        {
                                                                                          ...ek,
                                                                                          infiniteApprove:
                                                                                            !tv,
                                                                                        }
                                                                                      ),
                                                                                  checkedIcon:
                                                                                    !1,
                                                                                  uncheckedIcon:
                                                                                    !1,
                                                                                  onColor:
                                                                                    (0,
                                                                                    F.yz)(
                                                                                      ea
                                                                                    )
                                                                                      .on,
                                                                                  onHandleColor:
                                                                                    "#f8fafc",
                                                                                  offColor:
                                                                                    (0,
                                                                                    F.yz)(
                                                                                      ea
                                                                                    )
                                                                                      .off,
                                                                                  offHandleColor:
                                                                                    "#f8fafc",
                                                                                }
                                                                              ),
                                                                          }
                                                                        ),
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                            }),
                                                        ],
                                                      }),
                                                    Number(tm) > 0 &&
                                                      (0, T.hj)(tV) &&
                                                      tV > 0 &&
                                                      (Number(tm) < tQ || ei) &&
                                                      (0, a.jsxs)("div", {
                                                        className:
                                                          "flex items-center justify-between space-x-1",
                                                        children: [
                                                          (0, a.jsx)("div", {
                                                            className:
                                                              "text-sm font-medium whitespace-nowrap text-slate-500 dark:text-slate-500 3xl:text-xl",
                                                            children:
                                                              "Estimated Time",
                                                          }),
                                                          (0, a.jsx)(
                                                            g.Tooltip,
                                                            {
                                                              content:
                                                                tg ||
                                                                (null == eA
                                                                  ? void 0
                                                                  : eA.isFastPath) ===
                                                                  !1
                                                                  ? "Unable to leverage fast liquidity. Your transfer will still complete."
                                                                  : "Fast transfer enabled by Connext router network.",
                                                              children: (0,
                                                              a.jsxs)("div", {
                                                                className:
                                                                  "flex items-center",
                                                                children: [
                                                                  (0, a.jsx)(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "text-sm font-semibold whitespace-nowrap 3xl:text-xl",
                                                                      children:
                                                                        tg ||
                                                                        (null ==
                                                                        eA
                                                                          ? void 0
                                                                          : eA.isFastPath) ===
                                                                          !1
                                                                          ? (0,
                                                                            a.jsx)(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-yellow-500 dark:text-yellow-400",
                                                                                children:
                                                                                  "<180 minutes",
                                                                              }
                                                                            )
                                                                          : (0,
                                                                            a.jsx)(
                                                                              "span",
                                                                              {
                                                                                className:
                                                                                  "text-green-600 dark:text-green-500",
                                                                                children:
                                                                                  "<4 minutes",
                                                                              }
                                                                            ),
                                                                    }
                                                                  ),
                                                                  (0, a.jsx)(
                                                                    w.Fs0,
                                                                    {
                                                                      size: 14,
                                                                      className:
                                                                        "block ml-1 sm:hidden text-slate-400 dark:text-slate-500 sm:ml-0",
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                            }
                                                          ),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                                !eQ &&
                                                  (0, a.jsx)(fee_ratio, {
                                                    ratio: tH,
                                                  }),
                                              ],
                                            }),
                                          ],
                                        })
                                      : td &&
                                        tc &&
                                        tu &&
                                        (0, a.jsx)("div", {
                                          className:
                                            "font-medium text-center text-slate-400 dark:text-slate-200 3xl:text-2xl",
                                          children: "Route not supported",
                                        }),
                                    ex &&
                                    so &&
                                    (su || (0, T.hj)(tm)) &&
                                    (e$ || (0, T.hj)(tU))
                                      ? su
                                        ? (0, a.jsxs)(L.Z, {
                                            connectChainId:
                                              null == tw ? void 0 : tw.chain_id,
                                            className:
                                              "w-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded flex items-center justify-center text-white text-base 3xl:text-2xl font-medium space-x-1.5 sm:space-x-2 py-3 sm:py-4 px-2 sm:px-3",
                                            children: [
                                              (0, a.jsxs)("span", {
                                                children: [
                                                  sx ? "Reconnect" : "Switch",
                                                  " to",
                                                ],
                                              }),
                                              tq &&
                                                (0, a.jsx)(X.Z, {
                                                  src: tq,
                                                  width: 28,
                                                  height: 28,
                                                  className:
                                                    "rounded-full 3xl:w-8 3xl:h-8",
                                                }),
                                              (0, a.jsx)("span", {
                                                className: "font-medium",
                                                children: tk,
                                              }),
                                            ],
                                          })
                                        : e$ || eQ || e1 || !k
                                        ? e$ || e1 || eR
                                          ? (0, F.qo)(sc).map((e, t) => {
                                              let s;
                                              let {
                                                status: l,
                                                message: n,
                                                code: r,
                                                tx_hash: i,
                                              } = { ...e };
                                              switch (l) {
                                                case "success":
                                                  s = e1
                                                    ? "bg-red-600 dark:bg-red-400"
                                                    : "bg-red-500 dark:bg-red-400";
                                                  break;
                                                case "success":
                                                  s =
                                                    "bg-red-500 dark:bg-red-400";
                                              }
                                              let o =
                                                s &&
                                                (0, a.jsx)("button", {
                                                  onClick: () => reset(r),
                                                  className: "".concat(
                                                    s,
                                                    " rounded-full flex items-center justify-center text-white p-1"
                                                  ),
                                                  children: (0, a.jsx)(y.FU5, {
                                                    size: 14,
                                                  }),
                                                });
                                              return (0, a.jsx)(
                                                z.Z,
                                                {
                                                  status: l,
                                                  icon:
                                                    "pending" === l &&
                                                    (0, a.jsx)("div", {
                                                      className: "mr-3",
                                                      children: (0, a.jsx)(
                                                        R.Z,
                                                        {
                                                          width: 20,
                                                          height: 20,
                                                          color: "white",
                                                        }
                                                      ),
                                                    }),
                                                  closeDisabled: !0,
                                                  children: (0, a.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                      (0, a.jsxs)("div", {
                                                        className:
                                                          "flex items-center justify-between space-x-2",
                                                        children: [
                                                          (0, a.jsx)("span", {
                                                            className:
                                                              "text-sm font-medium leading-5 break-words 3xl:text-xl",
                                                            children: (0, F.Hp)(
                                                              (0, F.R_)(n, l),
                                                              128
                                                            ),
                                                          }),
                                                          (0, a.jsxs)("div", {
                                                            className:
                                                              "flex items-center space-x-1",
                                                            children: [
                                                              "failed" === l &&
                                                                n &&
                                                                (0, a.jsx)(
                                                                  D.Z,
                                                                  {
                                                                    value: n,
                                                                    className:
                                                                      "cursor-pointer text-slate-200 hover:text-white",
                                                                  }
                                                                ),
                                                              o,
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                        className:
                                                          "text-sm font-bold 3xl:text-xl",
                                                        children: [
                                                          (0, a.jsx)("span", {
                                                            className: "mr-1",
                                                            children:
                                                              "To file a support request, please create a ticket on our discord",
                                                          }),
                                                          (0, a.jsx)("a", {
                                                            href: "https://discord.hera.finance",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className:
                                                              "underline",
                                                            children: "here",
                                                          }),
                                                          ".",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                },
                                                t
                                              );
                                            })
                                          : (0, a.jsx)("button", {
                                              disabled:
                                                sd ||
                                                (0, T.Fr)(tm) ||
                                                tV <= 0 ||
                                                ((!(0, T.hj)(tW) ||
                                                  0 >= Number(tW)) &&
                                                  "testnet" !== q.IB),
                                              onClick: () => {
                                                eE(!1), eC(!1), call(tW);
                                              },
                                              className: "w-full ".concat(
                                                sd
                                                  ? "bg-red-400 dark:bg-red-500 text-white"
                                                  : (0, T.Fr)(tm) ||
                                                    tV <= 0 ||
                                                    ((!(0, T.hj)(tW) ||
                                                      0 >= Number(tW)) &&
                                                      "testnet" !== q.IB)
                                                  ? "bg-slate-100 dark:bg-slate-800 pointer-events-none cursor-not-allowed text-slate-400 dark:text-slate-500"
                                                  : "bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 cursor-pointer text-white",
                                                " rounded text-base 3xl:text-2xl py-3 sm:py-4 px-2 sm:px-3"
                                              ),
                                              children: (0, a.jsxs)("span", {
                                                className:
                                                  "flex items-center justify-center ".concat(
                                                    !eO && eQ && eJ
                                                      ? "space-x-3 ml-1.5"
                                                      : "space-x-3"
                                                  ),
                                                children: [
                                                  sd &&
                                                    (0, a.jsx)("div", {
                                                      children: (0, a.jsx)(
                                                        R.Z,
                                                        {
                                                          width: 20,
                                                          height: 20,
                                                          color: "white",
                                                        }
                                                      ),
                                                    }),
                                                  (0, a.jsx)("span", {
                                                    children: eQ
                                                      ? eO
                                                        ? eW
                                                          ? "Approving"
                                                          : "Please Approve"
                                                        : eJ
                                                        ? "Transfer in progress ..."
                                                        : "boolean" == typeof eO
                                                        ? "Please Confirm"
                                                        : "Checking Approval"
                                                      : "Send",
                                                  }),
                                                ],
                                              }),
                                            })
                                        : (0, a.jsx)(z.Z, {
                                            status: "failed",
                                            closeDisabled: !0,
                                            children: (0, a.jsx)("span", {
                                              children: k,
                                            }),
                                          })
                                      : ex
                                      ? (0, a.jsx)("button", {
                                          disabled: !0,
                                          className:
                                            "w-full px-2 py-3 text-base text-center rounded cursor-not-allowed pointer-events-none bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 3xl:text-2xl sm:py-4 sm:px-3",
                                          children: "Send",
                                        })
                                      : (0, a.jsx)(L.Z, {
                                          connectChainId:
                                            null == tw ? void 0 : tw.chain_id,
                                          buttonConnectTitle: "Connect Wallet",
                                          className:
                                            "w-full px-2 py-3 text-base font-medium text-center text-white bg-red-500 rounded hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 3xl:text-2xl sm:py-4 sm:px-3",
                                          children: (0, a.jsx)("span", {
                                            children: "Connect Wallet",
                                          }),
                                        }),
                                  ],
                                }),
                            ],
                          }),
                  }),
                  !tt &&
                    (null == tB ? void 0 : tB.mintable) &&
                    (0, a.jsx)(Y.Z, { tokenId: tu, contractData: tB }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: "col-span-1 ".concat(
                si ? "lg:col-span-3" : "",
                " xl:col-span-2 3xl:mt-8"
              ),
              children: (0, a.jsx)(latest_transfers, {
                data: e8,
                trigger: e4,
                onUpdateSize: (e) => te(e),
              }),
            }),
          ],
        });
      };
    },
  },
]);
