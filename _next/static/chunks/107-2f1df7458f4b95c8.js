"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [107],
  {
    20107: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return pool;
        },
      });
      var a = s(85893);
      s(41664);
      var l = s(11163),
        n = s(67294),
        r = s(41248),
        i = s(59335),
        c = s(96486),
        o = s.n(c),
        d = s(30381),
        x = s.n(d),
        m = s(214),
        u = s(91172),
        p = s(97637),
        h = s(22006);
      s(1571);
      var f = s(95223),
        g = s(87056),
        v = s(27326),
        j = s(86494),
        b = s(21815),
        y = s(64146),
        N = s(16441);
      let { parseUnits: w } = {
          ...j,
        },
        { AddressZero: k } = {
          ...b,
        },
        _ = [
          "function estimateFees(uint8 _action, uint256 _amount) external view returns (uint256 messageFee)",
          "function estimateFeesWithNative(uint8 _action, uint256 _amount, uint256 _nativeAmount) external view returns (uint256 messageFee)",
          "function stake(uint256 _amount) external payable",
          "function unstake(uint256 _amount,  uint256 _extraNative) external payable",
          "function unstakeAll(uint256 _extraNative) external payable",
          "function setAutoCompound(bool _flag) external payable",
          "function compoundMP() external payable",
          "function compoundAll() external payable",
          "function compoundRewards() external payable",
          "function claimRewards(uint _extraNative) external payable",
          "function estimateFeeForCompoundRewards() external view returns (uint256 messageFee)",
          "function estimateFeeForClaimRewards(uint256 _nativeAmount) public view returns (uint256 messageFee) ",
        ];
      var info = (e) => {
          let { pool: t, userPools: s } = e,
            {
              preferences: l,
              chains: n,
              assets: i,
              pool_assets: c,
              pools: o,
              pools_daily_stats: d,
              wallet: x,
              rpc_providers: p,
            } = (0, r.v9)(
              (e) => ({
                preferences: e.preferences,
                chains: e.chains,
                assets: e.assets,
                pool_assets: e.pool_assets,
                pools: e.pools,
                pools_daily_stats: e.pools_daily_stats,
                wallet: e.wallet,
                rpc_providers: e.rpc_providers,
              }),
              r.wU
            ),
            { theme: f } = {
              ...l,
            },
            { chains_data: j } = {
              ...n,
            },
            { assets_data: b } = {
              ...i,
            },
            { pool_assets_data: k } = {
              ...c,
            },
            { pools_data: F } = {
              ...o,
            },
            { pools_daily_stats_data: C } = {
              ...d,
            },
            { wallet_data: S } = {
              ...x,
            },
            { rpcs: A } = {
              ...p,
            },
            {
              provider: Z,
              ethereum_provider: R,
              signer: T,
              address: D,
            } = {
              ...S,
            },
            { chain: P, asset: B } = {
              ...t,
            },
            E = (0, g.fr)(P, j),
            {
              chain_id: z,
              explorer: H,
              color: I,
            } = {
              ...E,
            },
            { url: q, contract_path: U } = {
              ...H,
            },
            W = !!(P && B),
            O = (0, h.qo)(F).find((e) => {
              var t;
              return (
                (null === (t = e.asset_data) || void 0 === t
                  ? void 0
                  : t.id) === B
              );
            }),
            { staked_amount: V, pending_rewards: M } = {
              ...s,
            },
            {
              price: L,
              tvl: $,
              tvl_value: G,
              error: K,
            } = {
              ...O,
            },
            Y = (0, v.hj)(M) ? parseFloat((0, h.yd)(M * L)) : 0,
            X =
              (0, v.hj)($) && !(0, v.Fr)($)
                ? parseFloat((0, h.yd)((100 * V) / $))
                : 0,
            J = parseFloat((0, h.yd)(($ / "3766000") * 100)),
            Q =
              W &&
              !(0, g.j2)(B, k, {
                chain_id: z,
              }),
            ee = W && !Q && !K && !O,
            et =
              "bg-slate-50 dark:bg-slate-900 bg-opacity-60 dark:bg-opacity-60 rounded border dark:border-slate-800 flex flex-col space-y-8 3xl:space-y-16 py-5 3xl:py-8 px-4 3xl:px-6",
            es =
              "text-slate-600 dark:text-slate-200 text-base 3xl:text-xl font-bold",
            ea = "text-lg 3xl:text-2xl font-semibold cursor-default",
            el = "text-xl 3xl:text-2xl font-bold cursor-default",
            en = ""
              .concat(I || "#e53f3f")
              .concat("light" === f ? "44" : "33", " 0px 32px 128px 64px"),
            call_claim_rewards = async () => {
              try {
                let { contract_data: e } = {
                    ...O,
                  },
                  {
                    chain_id: t,
                    domainId: s,
                    contract_address: a,
                    manager_address: l,
                    adopted: n,
                  } = {
                    ...e,
                  };
                if (z === t) {
                  let e = new y.CH(l, ["function claimRewards() external"], T);
                  await e.claimRewards();
                } else {
                  let { contract_address: s, domainId: a } = {
                      ...e[z],
                    },
                    l = N.hexZeroPad(D, 32),
                    r = w(M, 18),
                    i = new y.CH(
                      n.proxy,
                      [
                        "function estimateSendFee(uint16 _dstChainId, bytes32 _toAddress, uint _amount, bool _useZro, bytes calldata _adapterParams) external view returns (uint nativeFee, uint zroFee)",
                      ],
                      A[t]
                    ),
                    c = await i.estimateSendFee(a, l, r, !1, "0x"),
                    o = c.nativeFee,
                    d = new y.CH(s, _, T),
                    x = await d.estimateFeeForClaimRewards(o);
                  await d.claimRewards(o, {
                    value: x,
                  });
                }
              } catch (e) {
                console.log(e);
              }
            },
            call_compound = async () => {
              try {
                let { contract_data: e } = {
                    ...O,
                  },
                  {
                    chain_id: t,
                    domainId: s,
                    contract_address: a,
                    manager_address: l,
                    adopted: n,
                  } = {
                    ...e,
                  };
                if (z === t) {
                  let e = new y.CH(
                    a,
                    ["function compoundRewards() external"],
                    T
                  );
                  await e.compoundRewards();
                } else {
                  let { contract_address: t } = {
                      ...e[z],
                    },
                    s = new y.CH(t, _, T),
                    a = await s.estimateFeeForCompoundRewards();
                  await s.compoundRewards({
                    value: a,
                  });
                }
              } catch (e) {
                console.log(e);
              }
            };
          return (0, a.jsxs)("div", {
            className: "sm:min-h-full bg-transparent space-y-0 3xl:space-y-2",
            children: [
              (0, a.jsx)("div", {
                className: "w-32 sm:w-64 3xl:w-96 mx-auto sm:mr-8",
                style: {
                  boxShadow: en,
                  WebkitBoxShadow: en,
                  MozBoxShadow: en,
                },
              }),
              (0, a.jsxs)("div", {
                className: "grid grid-cols-1 gap-6",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "bg-slate-50 dark:bg-red-950 bg-opacity-80 dark:bg-opacity-30 rounded border border-slate-300 dark:border-green-900 flex flex-col space-y-8 3xl:space-y-16 py-5 3xl:py-8 px-4 3xl:px-6",
                    children: [
                      (0, a.jsx)("span", {
                        className: es,
                        children: "My Rewards",
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                          (0, a.jsx)("div", {
                            className: "grid",
                            children: (0, a.jsxs)("div", {
                              className: "flex flex-col space-y-0",
                              children: [
                                (0, a.jsx)("a", {
                                  className:
                                    "flex items-center space-x-1 cursor-default",
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "text-xs 3xl:text-lg font-medium",
                                    children: "Pending Rewards",
                                  }),
                                }),
                                (0, a.jsx)("a", {
                                  className: ea,
                                  children:
                                    O && !K
                                      ? (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center space-x-1",
                                          children: [
                                            (0, a.jsx)(u.Z, {
                                              value: M,
                                              suffix: " RAVEX",
                                              noTooltip: !0,
                                              className: el,
                                            }),
                                            (0, a.jsx)(u.Z, {
                                              value: Y,
                                              prefix: "($",
                                              suffix: ")",
                                              noTooltip: !0,
                                              className:
                                                "text-sm 3xl:text-lg mt-0.5",
                                            }),
                                          ],
                                        })
                                      : ee && (0, a.jsx)(m.Z, {}),
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-0",
                            children: [
                              (0, a.jsx)("div", {
                                className: "flex flex-col space-y-0",
                                children: (0, a.jsx)("button", {
                                  disabled: !1,
                                  className:
                                    "w-full bg-red-800 hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-700 rounded flex items-center justify-center space-x-1 py-2 sm:py-2 px-2 sm:px-1",
                                  onClick: () => {
                                    call_claim_rewards();
                                  },
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "text-green-100 dark:text-green-100 text-sm 3xl:text-2xl font-semibold",
                                    children: "Claim Rewards",
                                  }),
                                }),
                              }),
                              (0, a.jsx)("div", {
                                className: "flex flex-col space-y-0",
                                children: (0, a.jsx)("button", {
                                  disabled: !1,
                                  className:
                                    "w-full bg-deep-purple-800 hover:bg-deep-purple-700 dark:bg-deep-purple-800 dark:hover:bg-deep-purple-700 rounded flex items-center justify-center space-x-1 py-2 sm:py-2 px-2 sm:px-1",
                                  onClick: () => {
                                    call_compound();
                                  },
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "text-deep-purple-100 dark:text-deep-purple-100 text-sm 3xl:text-2xl font-semibold",
                                    children: "Compound",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: et,
                    children: [
                      (0, a.jsx)("span", {
                        className: es,
                        children: "Pool Composition",
                      }),
                      (0, a.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, a.jsx)("div", {
                            className: "grid",
                            children: (0, a.jsxs)("div", {
                              className: "flex flex-col space-y-0",
                              children: [
                                (0, a.jsx)("a", {
                                  className:
                                    "flex items-center space-x-1 cursor-default",
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "text-xs 3xl:text-lg font-medium",
                                    children: "Total Value Locked (TVL)",
                                  }),
                                }),
                                (0, a.jsx)("a", {
                                  className: ea,
                                  children:
                                    O && !K
                                      ? (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center space-x-1",
                                          children: [
                                            (0, a.jsx)(u.Z, {
                                              value: $,
                                              suffix: " RAVEX",
                                              noTooltip: !0,
                                              className: el,
                                            }),
                                            (0, a.jsx)(u.Z, {
                                              value: G,
                                              prefix: "($",
                                              suffix: ")",
                                              noTooltip: !0,
                                              className:
                                                "text-sm 3xl:text-lg mt-0.5",
                                            }),
                                          ],
                                        })
                                      : ee && (0, a.jsx)(m.Z, {}),
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "grid gap-3 pt-5 border-t-2 border-t-slate-300 dark:border-t-slate-800",
                            children: (0, a.jsxs)("div", {
                              className: "flex flex-col space-y-0",
                              children: [
                                (0, a.jsx)("a", {
                                  className:
                                    "flex items-center space-x-1 cursor-default",
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "text-xs 3xl:text-lg font-medium",
                                    children: "Token Price",
                                  }),
                                }),
                                (0, a.jsx)("a", {
                                  className: ea,
                                  children:
                                    O && !K
                                      ? (0, a.jsx)("div", {
                                          className:
                                            "flex items-center space-x-0.5",
                                          children: (0, a.jsx)(u.Z, {
                                            value: L,
                                            prefix: "$",
                                            noTooltip: !1,
                                            tooltipContent:
                                              "The token price is fetched from the RAVEX/USDC pool on the Metis network via DIA.",
                                            className: ea,
                                          }),
                                        })
                                      : ee && (0, a.jsx)(m.Z, {}),
                                }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex flex-col space-y-0",
                                children: [
                                  (0, a.jsx)("a", {
                                    className:
                                      "flex items-center space-x-1 cursor-default",
                                    children: (0, a.jsx)("span", {
                                      className:
                                        "text-xs 3xl:text-lg font-medium",
                                      children: "Your Pool Rate",
                                    }),
                                  }),
                                  (0, a.jsx)("a", {
                                    className: ea,
                                    children:
                                      O && !K
                                        ? (0, a.jsx)("div", {
                                            className:
                                              "flex items-center space-x-0.5",
                                            children: (0, a.jsx)(u.Z, {
                                              value: X,
                                              suffix: "%",
                                              noTooltip: !1,
                                              tooltipContent:
                                                "Your pool rate: Your Staked Tokens / Total Stake Pool",
                                              className: ea,
                                            }),
                                          })
                                        : ee && (0, a.jsx)(m.Z, {}),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex flex-col space-y-0",
                                children: [
                                  (0, a.jsx)("a", {
                                    className:
                                      "flex items-center space-x-1 cursor-default",
                                    children: (0, a.jsx)("span", {
                                      className:
                                        "text-xs 3xl:text-lg font-medium",
                                      children: "TVL Dominance",
                                    }),
                                  }),
                                  (0, a.jsx)("a", {
                                    className: ea,
                                    children:
                                      O && !K
                                        ? (0, a.jsx)("div", {
                                            className:
                                              "flex items-center space-x-0.5",
                                            children: (0, a.jsx)(u.Z, {
                                              value: J,
                                              suffix: "%",
                                              noTooltip: !1,
                                              tooltipContent:
                                                "TVL Dominance: Total Value Locked (TVL) / Circulation Market Cap",
                                              className: ea,
                                            }),
                                          })
                                        : ee && (0, a.jsx)(m.Z, {}),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: et,
                    style: {
                      userSelect: "none",
                    },
                    children: [
                      (0, a.jsx)("span", {
                        className: es,
                        children: "Multiplier Points",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "space-y-3 blur-sm pointer-events-none cursor-default",
                        style: {
                          userSelect: "none",
                        },
                        children: (0, a.jsxs)("div", {
                          className:
                            "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex flex-col space-y-0",
                              children: [
                                (0, a.jsx)("a", {
                                  className: "flex items-center space-x-1",
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "text-xs 3xl:text-lg font-medium",
                                    children: "Token Price",
                                  }),
                                }),
                                (0, a.jsx)("a", {
                                  className: ea,
                                  children: (0, a.jsxs)("div", {
                                    className: "flex items-center space-x-0.5",
                                    children: [
                                      (0, a.jsx)(u.Z, {
                                        value: "3.47",
                                        prefix: "$",
                                        noTooltip: !0,
                                        className: ea,
                                      }),
                                      (0, a.jsx)("span", {
                                        className:
                                          "text-xs 3xl:text-lg mt-0.5 font-light",
                                        children: "(RAVEX/USDC)",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex flex-col space-y-0",
                              children: [
                                (0, a.jsx)("a", {
                                  className: "flex items-center space-x-1",
                                  children: (0, a.jsx)("span", {
                                    className:
                                      "text-xs 3xl:text-lg font-medium",
                                    children: "Staking Pool Dominance",
                                  }),
                                }),
                                (0, a.jsx)("a", {
                                  className: ea,
                                  children: (0, a.jsxs)("div", {
                                    className: "flex items-center space-x-0.5",
                                    children: [
                                      (0, a.jsx)(u.Z, {
                                        value: "34",
                                        suffix: "%",
                                        noTooltip: !0,
                                        className: ea,
                                      }),
                                      (0, a.jsx)("span", {
                                        className:
                                          "text-xs 3xl:text-lg font-light mt-0.5",
                                        children: "(Staked/Total Supply)",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "text-xs 3xl:text-lg font-light mt-1 text-center pointer-events-none",
                        children: "Coming Soon",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        F = s(775),
        C = s(39327),
        S = s(5434),
        A = s(47516),
        Z = s(63750),
        R = s(12119),
        T = s(50051);
      s(37179);
      let { formatUnits: D } = {
        ...j,
      };
      var gas_price = (e) => {
          let { chainId: t, dummy: s, iconSize: l = 20, className: i = "" } = e,
            { rpc_providers: c } = (0, r.v9)(
              (e) => ({
                rpc_providers: e.rpc_providers,
              }),
              r.wU
            ),
            { rpcs: o } = {
              ...c,
            },
            [d, x] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(() => {
              let getData = async (e) => {
                if (null == o ? void 0 : o[t]) {
                  e || x(null);
                  let s = o[t];
                  try {
                    let { gasPrice: e } = {
                      ...(await s.getFeeData()),
                    };
                    x(Number(D(e, "gwei")));
                  } catch (e) {
                    d || x("");
                  }
                }
              };
              getData();
              let e = setInterval(() => getData(!0), 3e4);
              return () => clearInterval(e);
            }, [t, o]),
            t
              ? (0, a.jsxs)("div", {
                  className:
                    "flex items-center justify-center text-slate-400 dark:text-slate-500 space-x-1 ".concat(
                      i
                    ),
                  children: [
                    (0, a.jsx)(S.Cwk, {
                      size: l,
                      className: "3xl:w-6 3xl:h-6",
                    }),
                    "number" == typeof d
                      ? (0, a.jsx)(u.Z, {
                          value: d,
                          suffix: " Gwei",
                          noTooltip: !0,
                          className: "whitespace-nowrap font-semibold",
                        })
                      : "string" == typeof d
                      ? (0, a.jsx)("span", {
                          children: "-",
                        })
                      : (0, a.jsx)("div", {
                          children: (0, a.jsx)(m.Z, {
                            name: "RotatingSquare",
                            width: 16,
                            height: 16,
                          }),
                        }),
                  ],
                })
              : s &&
                (0, a.jsx)("div", {
                  className: "h-5",
                })
          );
        },
        P = s(81913),
        B = s(32622),
        E = s(2593),
        z = s(8198);
      let { getAddress: H } = {
          ...j,
        },
        { AddressZero: I } = {
          ...b,
        },
        q = ["stake", "unstake"],
        U = [
          {
            title: "Balanced amounts",
            value: "balanced_amounts",
          },
          {
            title: "{x} only",
            value: "x_only",
          },
          {
            title: "{y} only",
            value: "y_only",
          },
          {
            title: "Custom amounts",
            value: "custom_amounts",
          },
        ],
        W = {
          infiniteApprove: !0,
          slippage: f.pn,
          deadline: f.aM,
        },
        O = [
          "function estimateFees(uint8 _action, uint256 _amount) external view returns (uint256 messageFee)",
          "function estimateFeesWithNative(uint8 _action, uint256 _amount, uint256 _nativeAmount) external view returns (uint256 messageFee)",
          "function stake(uint256 _amount) external payable",
          "function unstake(uint256 _amount,  uint256 _extraNative) external payable",
          "function unstakeAll(uint256 _extraNative) external payable",
          "function setAutoCompound(bool _flag) external payable",
          "function compoundMP() external payable",
          "function compoundAll() external payable",
          "function claimRewards(uint _extraNative) external payable",
          "function estimateFeeForStake(uint _amount) external view returns (uint256 messageFee)",
          "function estimateFeeForUnstake(uint256 _amount, uint256 _nativeAmount) external view returns (uint256 messageFee)",
        ],
        V = [
          "function stake(uint256 _amount) external",
          "function unstake(uint256 _amount) external",
          "function unstakeAll() external",
          "function setAutoCompound(bool _flag) external",
          "function compoundMP() external",
          "function compoundAll() external",
        ];
      var liquidity = (e) => {
          var t, s, l;
          let { pool: c, userPools: d, onFinish: x } = e,
            {
              chains: j,
              pool_assets: b,
              pools: w,
              dev: k,
              wallet: _,
              balances: D,
              rpc_providers: I,
            } = (0, r.v9)(
              (e) => ({
                chains: e.chains,
                pool_assets: e.pool_assets,
                pools: e.pools,
                dev: e.dev,
                wallet: e.wallet,
                balances: e.balances,
                rpc_providers: e.rpc_providers,
              }),
              r.wU
            ),
            { chains_data: M } = {
              ...j,
            },
            { pool_assets_data: L } = {
              ...b,
            },
            { pools_data: $ } = {
              ...w,
            },
            { sdk: G } = {
              ...k,
            },
            { wallet_data: K } = {
              ..._,
            },
            {
              provider: Y,
              ethereum_provider: X,
              signer: J,
              address: Q,
            } = {
              ...K,
            },
            ee = null == K ? void 0 : K.chain_id,
            { balances_data: et } = {
              ...D,
            },
            { rpcs: es } = {
              ...I,
            },
            [ea, el] = (0, n.useState)(o().head(q)),
            [en, er] = (0, n.useState)(null),
            [ei, ec] = (0, n.useState)(null),
            [eo, ed] = (0, n.useState)(null),
            [ex, em] = (0, n.useState)(null),
            [eu, ep] = (0, n.useState)(
              null === (t = o().head(U)) || void 0 === t ? void 0 : t.value
            ),
            [eh, ef] = (0, n.useState)(null),
            [eg, ev] = (0, n.useState)(W),
            [ej, eb] = (0, n.useState)(!1),
            [ey, eN] = (0, n.useState)(null),
            [ew, ek] = (0, n.useState)(null),
            [e_, eF] = (0, n.useState)(null),
            [eC, eS] = (0, n.useState)(null),
            [eA, eZ] = (0, n.useState)(null),
            [eR, eT] = (0, n.useState)(null),
            [eD, eP] = (0, n.useState)(null),
            [eB, eE] = (0, n.useState)(null),
            [ez, eH] = (0, n.useState)(null),
            [eI, eq] = (0, n.useState)(null),
            [eU, eW] = (0, n.useState)([]);
          (0, n.useEffect)(() => {
            reset(ea);
          }, [ea, c]),
            (0, n.useEffect)(() => {
              let getData = async () => {
                eN(null), ek(null), eP(null);
                let { chain: e, asset: t } = {
                  ...c,
                };
                (0, g.fr)(e, M);
                let s = (0, h.qo)($).find((s) => {
                    var a, l;
                    return (
                      (null === (a = s.chain_data) || void 0 === a
                        ? void 0
                        : a.id) === e &&
                      (null === (l = s.asset_data) || void 0 === l
                        ? void 0
                        : l.id) === t
                    );
                  }),
                  {
                    contract_data: a,
                    domainId: l,
                    adopted: n,
                    local: r,
                  } = {
                    ...s,
                  },
                  { contract_address: i } = {
                    ...a,
                  };
                if (l && i && (0, v.hj)(en) && (0, v.hj)(ei)) {
                  let e, t;
                  eq(null);
                  try {
                    if (
                      ((e = (0, v.vz)(en, null == n ? void 0 : n.decimals)),
                      (t = (0, v.vz)(ei, null == r ? void 0 : r.decimals)),
                      (null == n ? void 0 : n.index) === 1)
                    ) {
                      let s = e;
                      (e = t), (t = s);
                    }
                  } catch (a) {
                    let s = (0, h.nU)(a);
                    console.log(
                      "[/pool]",
                      "[calculateAddLiquidityPriceImpact error]",
                      {
                        domainId: l,
                        contract_address: i,
                        _amountX: e,
                        _amountY: t,
                      },
                      a
                    ),
                      eN(0),
                      ek({
                        status: "failed",
                        ...s,
                      });
                  }
                }
              };
              getData();
            }, [en, ei]);
          let reset = async (e) => {
              let t = !["address", "user_rejected"].includes(e);
              if (t) {
                var s;
                er(null),
                  ec(null),
                  ed(null),
                  em(null),
                  ep(
                    null === (s = o().head(U)) || void 0 === s
                      ? void 0
                      : s.value
                  );
              }
              ek(null),
                eS(null),
                eZ(null),
                eT(null),
                eP(null),
                eE(null),
                eH(null),
                eq(null),
                x && !q.includes(e) && x();
            },
            call = async (e) => {
              eZ(null), eE(!0);
              let t = !1,
                s = !1;
              switch (ea) {
                case "stake": {
                  if (!(0, v.hj)(en) || (0, v.Fr)(en)) {
                    (s = !0), eZ(!1);
                    break;
                  }
                  let a = (null == tu ? void 0 : tu.decimals) || 18;
                  (0, v.hj)(en) &&
                    18 === a &&
                    "string" == typeof en &&
                    o().last((0, h.Vl)(en, "normal", ".")).length;
                  let l = (0, v.vz)(en, a),
                    { chain_id: n } = {
                      ...e2,
                    },
                    r = eL !== n,
                    i = H(te);
                  if (r) {
                    let { contract_address: e } = {
                      ...e2[eL],
                    };
                    i = H(e);
                  }
                  let c = H(tu.contract_address);
                  if (!s)
                    try {
                      let e = new y.CH(
                          c,
                          [
                            "function allowance(address owner, address spender) external view returns (uint256)",
                            "function approve(address spender, uint256 amount) external returns (bool)",
                          ],
                          J
                        ),
                        t = await e.allowance(Q, i),
                        a = E.O$.from(l),
                        n = a.gt(t);
                      if (n) {
                        eZ(!0),
                          (n = {
                            to: c,
                            data: e.interface.encodeFunctionData("approve", [
                              i,
                              l,
                            ]),
                            from: Q,
                          });
                        let t = await J.sendTransaction(n),
                          { hash: a } = {
                            ...t,
                          };
                        eP({
                          status: "pending",
                          message: "Waiting for RAVEX approval",
                          tx_hash: a,
                        }),
                          eT(!0);
                        let r = await J.provider.waitForTransaction(a),
                          { status: d } = {
                            ...r,
                          };
                        (s = !d),
                          eP(
                            s
                              ? {
                                  status: "failed",
                                  message: "Failed to approve RAVEX",
                                  tx_hash: a,
                                }
                              : null
                          ),
                          s ||
                            eW(
                              o().uniqBy(
                                o().concat(eU, {
                                  message: "Approve RAVEX successful",
                                  tx_hash: a,
                                }),
                                "tx_hash"
                              )
                            ),
                          eT(!1);
                      }
                      eZ(!1);
                    } catch (t) {
                      console.log("error", t);
                      let e = (0, h.nU)(t);
                      eP({
                        status: "failed",
                        ...e,
                      }),
                        eT(!1),
                        eZ(!1),
                        (s = !0);
                    }
                  if (!s)
                    try {
                      let a;
                      if (
                        (console.log("[/pool]", "[stake]", {
                          x_asset_data: tu,
                          pool_data: e,
                          amount: l,
                        }),
                        r)
                      ) {
                        let e = new y.CH(i, O, J),
                          t = await e.estimateFeeForStake(l),
                          s = e.interface.encodeFunctionData("stake", [l]),
                          n = {
                            to: i,
                            data: s,
                            from: Q,
                            value: t,
                          };
                        a = n;
                      } else {
                        let e = new z.vU(V),
                          t = e.encodeFunctionData("stake", [l]),
                          s = {
                            to: i,
                            data: t,
                            from: Q,
                          };
                        a = s;
                      }
                      if (a) {
                        try {
                          let e = await J.estimateGas(a);
                          e &&
                            (a.gasLimit = (0, v.Ob)(
                              (0, v.lt)(e).mulUnsafe((0, v.lt)(f.Sk))
                            ));
                        } catch (e) {
                          console.log(e);
                        }
                        let e = await J.sendTransaction(a),
                          { hash: l } = {
                            ...e,
                          };
                        eH(!0), (t = l);
                        let n = await J.provider.waitForTransaction(l),
                          { status: r } = {
                            ...n,
                          };
                        s = !r;
                        let i = {
                          status: s ? "failed" : "success",
                          message: s
                            ? "Failed to stake RAVEX!"
                            : "Stake RAVEX successful!",
                          tx_hash: l,
                        };
                        eq(i),
                          s || eW(o().uniqBy(o().concat(eU, i), "tx_hash")),
                          (t = !0);
                      }
                    } catch (r) {
                      let e = (0, h.nU)(r);
                      console.log(
                        "[/pool]",
                        "[addLiquidity error]",
                        {
                          contract_address: te,
                          amount: l,
                          error: r,
                        },
                        r
                      );
                      let { code: a } = {
                          ...e,
                        },
                        { message: n } = {
                          ...e,
                        };
                      ((null == n
                        ? void 0
                        : n.includes("eth_sendRawTransaction")) &&
                        (n = "Failed to send transaction"),
                      "user_rejected" === a)
                        ? reset(a)
                        : t
                        ? eq({
                            status: "success",
                            message: "Stake RAVEX successful",
                            tx_hash: "string" == typeof t ? t : void 0,
                          })
                        : eq({
                            status: "failed",
                            ...e,
                            message: n,
                          }),
                        (s = !t);
                    }
                  break;
                }
                case "unstake":
                  try {
                    let e;
                    if ((0, v.Fr)(ex)) {
                      (s = !0), eZ(!1);
                      break;
                    }
                    if (
                      (eZ(!1),
                      (e =
                        (0, v.hj)(ex) &&
                        "string" == typeof ex &&
                        o().last((0, h.Vl)(ex, "normal", ".")).length >= 16
                          ? ex.substring(0, ex.length - 1 - 2)
                          : ex),
                      (e = (0, v.vz)(e)),
                      !s)
                    )
                      try {
                        let a, l;
                        console.log("[/pool]", "[".concat(e, "]"), {});
                        let { chain_id: n, adopted: r } = {
                            ...e2,
                          },
                          i = eL !== n,
                          c = H(te);
                        if (i) {
                          let { contract_address: e, domainId: t } = {
                            ...e2[eL],
                          };
                          (c = H(e)), (a = t);
                        }
                        if (i) {
                          let t = N.hexZeroPad(Q, 32),
                            s = new y.CH(
                              r.proxy,
                              [
                                "function estimateSendFee(uint16 _dstChainId, bytes32 _toAddress, uint _amount, bool _useZro, bytes calldata _adapterParams) external view returns (uint nativeFee, uint zroFee)",
                              ],
                              es[n]
                            ),
                            i = await s.estimateSendFee(a, t, e, !1, "0x"),
                            o = i.nativeFee,
                            d = new y.CH(c, O, J),
                            x = await d.estimateFeeForUnstake(e, o),
                            m = d.interface.encodeFunctionData("unstake", [
                              e,
                              o,
                            ]),
                            u = {
                              to: c,
                              data: m,
                              from: Q,
                              value: x,
                            };
                          l = u;
                        } else {
                          let t = new z.vU(V),
                            s = t.encodeFunctionData("unstake", [e]),
                            a = {
                              to: c,
                              data: s,
                              from: Q,
                            };
                          l = a;
                        }
                        if (l) {
                          try {
                            let e = await J.estimateGas(l);
                            e &&
                              (l.gasLimit = (0, v.Ob)(
                                (0, v.lt)(e).mulUnsafe((0, v.lt)(f.Sk))
                              ));
                          } catch (e) {
                            console.log("error", e);
                          }
                          let e = await J.sendTransaction(l),
                            { hash: a } = {
                              ...e,
                            };
                          eH(!0), (t = a);
                          let n = await J.provider.waitForTransaction(a),
                            { status: r } = {
                              ...n,
                            };
                          s = !r;
                          let i = {
                            status: s ? "failed" : "success",
                            message: s
                              ? "Failed to unstake RAVEX"
                              : "Unstake RAVEX successful",
                            tx_hash: a,
                          };
                          eq(i),
                            s || eW(o().uniqBy(o().concat(eU, i), "tx_hash")),
                            (t = !0);
                        }
                      } catch (r) {
                        console.log("txerror", r);
                        let a = (0, h.nU)(r);
                        console.log(
                          "[/pool]",
                          "[".concat(method, " error]"),
                          {
                            domainId,
                            contract_address: te,
                            amount: e,
                            minAmounts,
                            amount: ex,
                            maxBurnAmount,
                            deadline,
                          },
                          r
                        );
                        let { code: l } = {
                            ...a,
                          },
                          { message: n } = {
                            ...a,
                          };
                        ((
                          null == n ? void 0 : n.includes("exceed total supply")
                        )
                          ? (n = "Exceed Total Supply")
                          : (null == n
                              ? void 0
                              : n.includes("eth_sendRawTransaction")) &&
                            (n = "Failed to send transaction"),
                        "user_rejected" === l)
                          ? reset(l)
                          : t
                          ? eq({
                              status: "success",
                              message: "Remove RAVEX successful",
                              tx_hash: "string" == typeof t ? t : void 0,
                            })
                          : eq({
                              status: "failed",
                              ...a,
                              message: n,
                            }),
                          (s = !t);
                      }
                  } catch (e) {}
              }
              if (
                (eH(!1), eE(!1), Q && t && (await (0, h._v)(1e3), x && x(), !s))
              )
                switch (ea) {
                  case "stake":
                    er(null), ec(null);
                    break;
                  case "unstake":
                    ed(null), em(null);
                }
            },
            { chain: eO, asset: eV } = {
              ...c,
            },
            eM = (0, g.fr)(eO, M),
            {
              chain_id: eL,
              name: e$,
              image: eG,
              explorer: eK,
            } = {
              ...eM,
            },
            {
              url: eY,
              contract_path: eX,
              transaction_path: eJ,
            } = {
              ...eK,
            },
            eQ = !!(eO && eV),
            e0 =
              eQ &&
              !(0, g.j2)(eV, L, {
                chain_id: eL,
              }),
            e3 = (0, h.qo)($).find((e) => {
              var t;
              return (
                (null === (t = e.asset_data) || void 0 === t
                  ? void 0
                  : t.id) === eV
              );
            }),
            {
              asset_data: e1,
              contract_data: e2,
              symbol: e6,
              lpTokenAddress: e5,
              error: e4,
            } = {
              ...e3,
            },
            {
              adopted: e8,
              local: e9,
              price: e7,
            } = {
              ...e3,
            },
            { contract_address: te, next_asset: tt } = {
              ...e2,
            },
            ts = eQ && !e0 && !e4 && !e3,
            ta =
              e3 &&
              (0, h.qo)(d).find((e) => {
                var t;
                return (
                  (null === (t = e.asset_data) || void 0 === t
                    ? void 0
                    : t.id) === eV
                );
              }),
            { staked_amount: tl, pending_rewards: tn } = {
              ...d,
            },
            tr = (0, v.hj)(tl) ? parseFloat((0, h.yd)(tl * e7)) : 0,
            ti = (0, v.hj)(tn) ? parseFloat((0, h.yd)(tn * e7)) : 0,
            tc = eQ && !e0 && !e4 && (!d || ts),
            to = (0, h.qo)(o().concat(e8, e9)).map((e, t) => {
              let {
                address: s,
                symbol: a,
                decimals: l,
              } = {
                ...e,
              };
              return {
                i: t,
                contract_address: s,
                chain_id: eL,
                symbol: a,
                decimals: l,
                image:
                  ((0, h.qq)(s, te)
                    ? null == e2
                      ? void 0
                      : e2.image
                    : (0, h.qq)(s, null == tt ? void 0 : tt.contract_address)
                    ? (null == tt ? void 0 : tt.image) ||
                      (null == e2 ? void 0 : e2.image)
                    : null) || (null == e1 ? void 0 : e1.image),
              };
            });
          (e8 = {
            ...e8,
            asset_data: o().head(to),
          }),
            (e9 = {
              ...e9,
              asset_data: o().last(to),
            });
          let td = null == e2 ? void 0 : e2.image,
            tx = (0, h.Vl)(td, "normal", "/", !1),
            tm = o().last(tx),
            tu = (null == e8 ? void 0 : e8.address) && {
              ...Object.fromEntries(
                Object.entries({
                  ...e1,
                }).filter((e) => {
                  let [t, s] = e;
                  return !["contracts"].includes(t);
                })
              ),
              ...((0, h.qq)(e8.address, te)
                ? e2
                : {
                    chain_id: eL,
                    contract_address: e8.address,
                    decimals: e8.decimals,
                    symbol: e8.symbol,
                    image: td
                      ? e8.symbol
                        ? e8.symbol.startsWith(f.VP)
                          ? tm.startsWith(f.VP)
                            ? td
                            : tx
                                .map((e, t) =>
                                  t === tx.length - 1
                                    ? "".concat(f.VP).concat(e)
                                    : e
                                )
                                .join("/")
                          : tm.startsWith(f.VP)
                          ? tx
                              .map((e, t) =>
                                t === tx.length - 1
                                  ? e.substring(f.VP.length)
                                  : e
                              )
                              .join("/")
                          : td
                        : td
                      : void 0,
                  }),
            };
          tu &&
            1088 == tu.chain_id &&
            (tu.contract_address =
              "0x6F05709bc91Bad933346F9E159f0D3FdBc2c9DCE"),
            tu &&
              1 == tu.chain_id &&
              (tu.contract_address =
                "0xA2c2C937333165d4c5f2dC5f31a43E1239FeCfeB"),
            tu &&
              599 == tu.chain_id &&
              (tu.contract_address =
                "0x5301D4CE03BB5D3745d0643243B44929582cFD47"),
            tu &&
              5 == tu.chain_id &&
              (tu.contract_address =
                "0xdFB2c656A263f0Ad028b276469325aA6Dd2ba68e");
          let tp = (null == tu ? void 0 : tu.decimals) || 18,
            th =
              tu &&
              (null === (s = (0, g.pm)(eL, tu.contract_address, et)) ||
              void 0 === s
                ? void 0
                : s.amount),
            tf =
              (null == tu ? void 0 : tu.contract_address) &&
              eY &&
              ""
                .concat(eY)
                .concat(
                  null == eX
                    ? void 0
                    : eX.replace("{address}", tu.contract_address)
                )
                .concat(Q ? "?a=".concat(Q) : ""),
            tg = (0, v.hj)(th) ? parseFloat((0, h.yd)(th * e7)) : 0,
            tv =
              "unstake" === ea
                ? (0, v.hj)(ex) &&
                  !(0, v.Fr)(ex) &&
                  (0, v.hj)(tl) &&
                  BigInt((0, v.vz)(ex)) > 0 &&
                  BigInt((0, v.vz)(ex)) <= BigInt((0, v.vz)(tl))
                : (0, v.hj)(en) &&
                  !(0, v.Fr)(en) &&
                  (0, v.hj)(th) &&
                  BigInt((0, v.vz)(en, tp)) > 0 &&
                  BigInt((0, v.vz)(en, tp)) <= BigInt((0, v.vz)(th, tp)),
            tj = !e3 || e4 || eA || eB,
            tb = eI || eD || ew || eC,
            ty = ee !== eL && !eI,
            tN =
              (null == X
                ? void 0
                : null === (l = X.constructor) || void 0 === l
                ? void 0
                : l.name) === "WalletConnectProvider",
            tw = "text-lg 3xl:text-2xl font-semibold cursor-default";
          return (0, a.jsxs)("div", {
            className: "order-1 lg:order-2 space-y-6",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "bg-slate-50 dark:bg-slate-900 rounded border dark:border-slate-800 space-y-3 pt-4 3xl:pt-6 pb-5 3xl:pb-7 px-4 3xl:px-6",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center justify-between space-x-2",
                    children: [
                      (0, a.jsx)("span", {
                        className: "text-lg 3xl:text-2xl font-semibold",
                        children: "Staking Pool",
                      }),
                      (0, a.jsx)(gas_price, {
                        chainId: eL,
                        iconSize: 16,
                        className: "text-xs 3xl:text-xl",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-4 3xl:space-y-6",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "w-fit border-b dark:border-slate-800 flex items-center justify-between space-x-4",
                        children: q.map((e, t) =>
                          (0, a.jsx)(
                            "div",
                            {
                              onClick: () => el(e),
                              className:
                                "w-fit cursor-pointer border-b-2 ".concat(
                                  ea === e
                                    ? "border-slate-300 dark:border-slate-200"
                                    : "border-transparent text-slate-400 dark:text-slate-500",
                                  " capitalize text-sm 3xl:text-xl font-semibold text-left py-3 px-0"
                                ),
                              children: e,
                            },
                            t
                          )
                        ),
                      }),
                      "stake" === ea
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsxs)("div", {
                                className: "3xl:space-y-4 pt-2 px-0",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "space-y-1",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between space-x-2",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "text-slate-600 dark:text-slate-400 text-sm 3xl:text-xl font-medium",
                                            children: "Stake now",
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center space-x-1",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className:
                                                  "whitespace-nowrap text-slate-400 dark:text-slate-500 text-sm 3xl:text-xl font-medium",
                                                children: "Balance:",
                                              }),
                                              (null == tu
                                                ? void 0
                                                : tu.contract_address) &&
                                                Y &&
                                                (0, a.jsx)("button", {
                                                  disabled: tj,
                                                  onClick: () => {
                                                    (0, v.hj)(th) &&
                                                      (er((0, h.yd)(th, 6)),
                                                      (!(0, v.hj)(ei) ||
                                                        (0, v.Fr)(ei)) &&
                                                        ec("0"));
                                                  },
                                                  className:
                                                    "flex items-center",
                                                  children: (0, a.jsx)(T.Z, {
                                                    chainId: eL,
                                                    asset: eV,
                                                    contractAddress:
                                                      null == tu
                                                        ? void 0
                                                        : tu.contract_address,
                                                    symbol: tu.symbol,
                                                    hideSymbol: !1,
                                                    className:
                                                      "text-sm 3xl:text-xl",
                                                  }),
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "space-y-1",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "rounded border dark:border-slate-800 flex items-center justify-between space-x-2 py-2.5 px-3",
                                            children: [
                                              tf &&
                                                (0, a.jsxs)("a", {
                                                  className:
                                                    "min-w-max flex items-center space-x-1.5",
                                                  children: [
                                                    tu.image &&
                                                      (0, a.jsx)(p.Z, {
                                                        src: tu.image,
                                                        width: 20,
                                                        height: 20,
                                                        className:
                                                          "3xl:w-6 3xl:h-6 rounded-full",
                                                      }),
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "text-base 3xl:text-2xl font-semibold",
                                                      children: tu.symbol,
                                                    }),
                                                  ],
                                                }),
                                              (0, a.jsx)(F.DebounceInput, {
                                                debounceTimeout: 750,
                                                size: "small",
                                                type: "number",
                                                maxDecimals: 6,
                                                placeholder: "0.00",
                                                title:
                                                  "Please limit to 6 decimals!",
                                                disabled: tj,
                                                value: (0, v.hj)(en) ? en : "",
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
                                                      (t = (0, h.yd)(t, 6))),
                                                    er(t),
                                                    (!(0, v.hj)(ei) ||
                                                      (0, v.Fr)(ei)) &&
                                                      (ec("0"), ec(t));
                                                },
                                                onWheel: (e) => e.target.blur(),
                                                onKeyDown: (e) =>
                                                  ["e", "E", "-"].includes(
                                                    e.key
                                                  ) && e.preventDefault(),
                                                className:
                                                  "w-full bg-transparent ".concat(
                                                    tj
                                                      ? "cursor-not-allowed"
                                                      : "",
                                                    " border-0 focus:ring-0 text-base 3xl:text-2xl font-medium text-right"
                                                  ),
                                              }),
                                            ],
                                          }),
                                          (0, v.hj)(en) &&
                                            (0, v.hj)(th) &&
                                            BigInt((0, v.vz)(en, tp)) >
                                              BigInt((0, v.vz)(th, tp)) &&
                                            (0, a.jsxs)("div", {
                                              className:
                                                "flex items-center justify-end text-red-600 dark:text-yellow-400 space-x-1 sm:mx-0",
                                              children: [
                                                (0, a.jsx)(A.OzA, {
                                                  size: 16,
                                                  className:
                                                    "min-w-max 3xl:w-5 3xl:h-5",
                                                }),
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "text-xs 3xl:text-lg font-medium",
                                                  children: "Not enough RAVEX",
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-full flex items-center justify-center mt-2.5 -mb-2",
                                    children: (0, a.jsx)(A.OrA, {
                                      size: 18,
                                      className:
                                        "3xl:w-6 3xl:h-6 text-slate-400 dark:text-slate-500",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "flex items-end",
                                children: tv
                                  ? Y && eO && ty
                                    ? (0, a.jsxs)(B.Z, {
                                        connectChainId: eL,
                                        className:
                                          "w-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded flex items-center justify-center text-white text-base 3xl:text-2xl font-medium space-x-1.5 sm:space-x-2 py-3 sm:py-4 px-2 sm:px-3",
                                        children: [
                                          (0, a.jsxs)("span", {
                                            children: [
                                              tN ? "Reconnect" : "Switch",
                                              " to",
                                            ],
                                          }),
                                          eG &&
                                            (0, a.jsx)(p.Z, {
                                              src: eG,
                                              width: 28,
                                              height: 28,
                                              className:
                                                "3xl:w-8 3xl:h-8 rounded-full",
                                            }),
                                          (0, a.jsx)("span", {
                                            className: "font-medium",
                                            children: e$,
                                          }),
                                        ],
                                      })
                                    : tb
                                    ? (0, h.qo)(tb)
                                        .filter((e) => "success" !== e.status)
                                        .map((e, t) => {
                                          let s;
                                          let {
                                            status: l,
                                            message: n,
                                            tx_hash: r,
                                          } = {
                                            ...e,
                                          };
                                          switch (l) {
                                            case "success":
                                              s =
                                                "bg-red-500 dark:bg-red-400";
                                              break;
                                            case "success":
                                              s = "bg-red-500 dark:bg-red-400";
                                          }
                                          let i =
                                            s &&
                                            (0, a.jsx)("button", {
                                              onClick: () => reset(),
                                              className: "".concat(
                                                s,
                                                " rounded-full flex items-center justify-center text-white p-1"
                                              ),
                                              children: (0, a.jsx)(S.FU5, {
                                                size: 14,
                                              }),
                                            });
                                          return (0, a.jsx)(
                                            R.Z,
                                            {
                                              status: l,
                                              icon:
                                                "pending" === l &&
                                                (0, a.jsx)("div", {
                                                  className: "mr-3",
                                                  children: (0, a.jsx)(m.Z, {
                                                    name: "Watch",
                                                    width: 16,
                                                    height: 16,
                                                    color: "white",
                                                  }),
                                                }),
                                              closeDisabled: !0,
                                              className: "p-3",
                                              children: (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center justify-between space-x-2",
                                                children: [
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "leading-5 break-words text-sm 3xl:text-xl font-medium",
                                                    children: (0, h.Hp)(
                                                      (0, h.R_)(n, l),
                                                      128
                                                    ),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className:
                                                      "flex items-center space-x-1",
                                                    children: [
                                                      eY &&
                                                        r &&
                                                        (0, a.jsx)("a", {
                                                          href: ""
                                                            .concat(eY)
                                                            .concat(
                                                              null == eJ
                                                                ? void 0
                                                                : eJ.replace(
                                                                    "{tx}",
                                                                    r
                                                                  )
                                                            ),
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: (0, a.jsx)(
                                                            C.ObP,
                                                            {
                                                              size: 20,
                                                              className:
                                                                "transform -rotate-45",
                                                            }
                                                          ),
                                                        }),
                                                      "failed" === l &&
                                                        (0, a.jsx)(P.Z, {
                                                          value: n,
                                                          className:
                                                            "cursor-pointer text-slate-200 hover:text-white",
                                                        }),
                                                      i,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            },
                                            t
                                          );
                                        })
                                    : Y
                                    ? (0, a.jsx)("button", {
                                        disabled: tj || !tv,
                                        onClick: () => {
                                          call(e3);
                                        },
                                        className: "w-full ".concat(
                                          tj || !tv
                                            ? eB || eA
                                              ? "bg-red-400 dark:bg-red-500 text-white"
                                              : "bg-slate-100 dark:bg-slate-800 pointer-events-none cursor-not-allowed text-slate-400 dark:text-slate-500"
                                            : "bg-red-600 hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-900 cursor-pointer text-white",
                                          " rounded text-base 3xl:text-2xl text-center py-3 sm:py-4 px-2 sm:px-3"
                                        ),
                                        children: (0, a.jsxs)("span", {
                                          className:
                                            "flex items-center justify-center space-x-1.5",
                                          children: [
                                            (eB || eA) &&
                                              (0, a.jsx)("div", {
                                                children: (0, a.jsx)(m.Z, {
                                                  width: 20,
                                                  height: 20,
                                                  color: "white",
                                                }),
                                              }),
                                            (0, a.jsx)("span", {
                                              children: eB
                                                ? eA
                                                  ? eR
                                                    ? "Approving"
                                                    : "Please Approve"
                                                  : ez
                                                  ? "Depositing"
                                                  : "boolean" == typeof eA
                                                  ? "Please Confirm"
                                                  : "Checking Approval"
                                                : tv
                                                ? "Stake Now"
                                                : "Enter amount",
                                            }),
                                          ],
                                        }),
                                      })
                                    : (0, a.jsx)(B.Z, {
                                        connectChainId: eL,
                                        buttonConnectTitle: "Connect Wallet",
                                        className:
                                          "w-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded text-white text-base 3xl:text-2xl font-medium text-center py-3 sm:py-4 px-2 sm:px-3",
                                        children: (0, a.jsx)("span", {
                                          children: "Connect Wallet",
                                        }),
                                      })
                                  : (0, a.jsx)("button", {
                                      disabled: !0,
                                      className:
                                        "w-full bg-slate-100 dark:bg-slate-800 pointer-events-none cursor-not-allowed rounded flex items-center justify-center space-x-1.5 py-3 sm:py-4 px-2 sm:px-3",
                                      children: (0, a.jsx)("span", {
                                        className:
                                          "text-slate-400 dark:text-slate-500 text-base 3xl:text-2xl",
                                        children: "Enter amount",
                                      }),
                                    }),
                              }),
                            ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsxs)("div", {
                                className: "3xl:space-y-4 pt-2 px-0",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "space-y-1",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between space-x-2",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "text-slate-600 dark:text-slate-400 text-sm 3xl:text-xl font-medium",
                                            children: "Unstake now",
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center space-x-1",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className:
                                                  "whitespace-nowrap text-slate-400 dark:text-slate-500 text-sm 3xl:text-xl font-medium",
                                                children: "Staked Balance:",
                                              }),
                                              (null == tu
                                                ? void 0
                                                : tu.contract_address) &&
                                                Y &&
                                                (0, a.jsx)("button", {
                                                  disabled: tj,
                                                  onClick: () => {
                                                    (0, v.hj)(tl) &&
                                                      em((0, h.yd)(tl, 6));
                                                  },
                                                  className:
                                                    "flex items-center",
                                                  children:
                                                    Y &&
                                                    (0, a.jsx)("div", {
                                                      className:
                                                        "flex items-center justify-center",
                                                      children: (0, v.hj)(tl)
                                                        ? (0, a.jsx)(u.Z, {
                                                            value: tl,
                                                            maxDecimals: 6,
                                                            suffix: " RAVEX",
                                                            className:
                                                              "text-slate-600 dark:text-slate-50 text-sm 3xl:text-lg font-semibold",
                                                          })
                                                        : ta || tc
                                                        ? (0, a.jsx)(m.Z, {
                                                            name: "RotatingSquare",
                                                            width: 16,
                                                            height: 16,
                                                          })
                                                        : (0, a.jsx)("span", {
                                                            className:
                                                              "text-slate-600 dark:text-slate-50 text-sm 3xl:text-lg font-semibold",
                                                            children: "0 RAVEX",
                                                          }),
                                                    }),
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "space-y-1",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "rounded border dark:border-slate-800 flex items-center justify-between space-x-2 py-2.5 px-3",
                                            children: [
                                              tf &&
                                                (0, a.jsxs)("a", {
                                                  className:
                                                    "min-w-max flex items-center space-x-1.5",
                                                  children: [
                                                    tu.image &&
                                                      (0, a.jsx)(p.Z, {
                                                        src: tu.image,
                                                        width: 20,
                                                        height: 20,
                                                        className:
                                                          "3xl:w-6 3xl:h-6 rounded-full",
                                                      }),
                                                    (0, a.jsx)("span", {
                                                      className:
                                                        "text-base 3xl:text-2xl font-semibold",
                                                      children: tu.symbol,
                                                    }),
                                                  ],
                                                }),
                                              (0, a.jsx)(F.DebounceInput, {
                                                debounceTimeout: 750,
                                                size: "small",
                                                type: "number",
                                                placeholder: "0.00",
                                                title:
                                                  "Please limit to 6 decimals!",
                                                disabled: tj,
                                                value: (0, v.hj)(ex) ? ex : "",
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
                                                      (t = (0, h.yd)(t, 6))),
                                                    em(t);
                                                },
                                                onWheel: (e) => e.target.blur(),
                                                onKeyDown: (e) =>
                                                  ["e", "E", "-"].includes(
                                                    e.key
                                                  ) && e.preventDefault(),
                                                className:
                                                  "w-full bg-transparent ".concat(
                                                    tj
                                                      ? "cursor-not-allowed"
                                                      : "",
                                                    " border-0 focus:ring-0 text-base 3xl:text-2xl font-medium text-right"
                                                  ),
                                              }),
                                            ],
                                          }),
                                          (0, v.hj)(ex) &&
                                            (0, v.hj)(tl) &&
                                            BigInt((0, v.vz)(ex, tp)) >
                                              BigInt((0, v.vz)(tl, tp)) &&
                                            (0, a.jsxs)("div", {
                                              className:
                                                "flex items-center justify-end text-red-600 dark:text-yellow-400 space-x-1 sm:mx-0",
                                              children: [
                                                (0, a.jsx)(A.OzA, {
                                                  size: 16,
                                                  className:
                                                    "min-w-max 3xl:w-5 3xl:h-5",
                                                }),
                                                (0, a.jsx)("span", {
                                                  className:
                                                    "text-xs 3xl:text-lg font-medium",
                                                  children: "Not enough RAVEX",
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-full flex items-center justify-center mt-2.5 -mb-2",
                                    children: (0, a.jsx)(A.OrA, {
                                      size: 18,
                                      className:
                                        "3xl:w-6 3xl:h-6 text-slate-400 dark:text-slate-500",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "flex items-end",
                                children: tv
                                  ? Y && eO && ty
                                    ? (0, a.jsxs)(B.Z, {
                                        connectChainId: eL,
                                        className:
                                          "w-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded flex items-center justify-center text-white text-base 3xl:text-2xl font-medium space-x-1.5 sm:space-x-2 py-3 sm:py-4 px-2 sm:px-3",
                                        children: [
                                          (0, a.jsxs)("span", {
                                            children: [
                                              tN ? "Reconnect" : "Switch",
                                              " to",
                                            ],
                                          }),
                                          eG &&
                                            (0, a.jsx)(p.Z, {
                                              src: eG,
                                              width: 28,
                                              height: 28,
                                              className:
                                                "3xl:w-8 3xl:h-8 rounded-full",
                                            }),
                                          (0, a.jsx)("span", {
                                            className: "font-medium",
                                            children: e$,
                                          }),
                                        ],
                                      })
                                    : tb
                                    ? (0, h.qo)(tb)
                                        .filter((e) => "success" !== e.status)
                                        .map((e, t) => {
                                          let s;
                                          let {
                                            status: l,
                                            message: n,
                                            tx_hash: r,
                                          } = {
                                            ...e,
                                          };
                                          switch (l) {
                                            case "success":
                                              s =
                                                "bg-red-500 dark:bg-red-400";
                                              break;
                                            case "success":
                                              s = "bg-red-500 dark:bg-red-400";
                                          }
                                          let i =
                                            s &&
                                            (0, a.jsx)("button", {
                                              onClick: () => reset(),
                                              className: "".concat(
                                                s,
                                                " rounded-full flex items-center justify-center text-white p-1"
                                              ),
                                              children: (0, a.jsx)(S.FU5, {
                                                size: 14,
                                              }),
                                            });
                                          return (0, a.jsx)(
                                            R.Z,
                                            {
                                              status: l,
                                              icon:
                                                "pending" === l &&
                                                (0, a.jsx)("div", {
                                                  className: "mr-3",
                                                  children: (0, a.jsx)(m.Z, {
                                                    name: "Watch",
                                                    width: 16,
                                                    height: 16,
                                                    color: "white",
                                                  }),
                                                }),
                                              closeDisabled: !0,
                                              className: "p-3",
                                              children: (0, a.jsxs)("div", {
                                                className:
                                                  "flex items-center justify-between space-x-2",
                                                children: [
                                                  (0, a.jsx)("span", {
                                                    className:
                                                      "leading-5 break-words text-sm 3xl:text-xl font-medium",
                                                    children: (0, h.Hp)(
                                                      (0, h.R_)(n, l),
                                                      128
                                                    ),
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className:
                                                      "flex items-center space-x-1",
                                                    children: [
                                                      eY &&
                                                        r &&
                                                        (0, a.jsx)("a", {
                                                          href: ""
                                                            .concat(eY)
                                                            .concat(
                                                              null == eJ
                                                                ? void 0
                                                                : eJ.replace(
                                                                    "{tx}",
                                                                    r
                                                                  )
                                                            ),
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          children: (0, a.jsx)(
                                                            C.ObP,
                                                            {
                                                              size: 20,
                                                              className:
                                                                "transform -rotate-45",
                                                            }
                                                          ),
                                                        }),
                                                      "failed" === l &&
                                                        (0, a.jsx)(P.Z, {
                                                          value: n,
                                                          className:
                                                            "cursor-pointer text-slate-200 hover:text-white",
                                                        }),
                                                      i,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            },
                                            t
                                          );
                                        })
                                    : Y
                                    ? (0, a.jsx)("button", {
                                        disabled: tj || !tv,
                                        onClick: () => call(e3),
                                        className: "w-full ".concat(
                                          tj || !tv
                                            ? eB || eA
                                              ? "bg-gray-400 dark:bg-gray-500 text-white"
                                              : "bg-slate-100 dark:bg-slate-800 pointer-events-none cursor-not-allowed text-slate-400 dark:text-slate-500"
                                            : "bg-gray-500 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 cursor-pointer text-white",
                                          " rounded text-base 3xl:text-2xl text-center py-3 sm:py-4 px-2 sm:px-3"
                                        ),
                                        children: (0, a.jsxs)("span", {
                                          className:
                                            "flex items-center justify-center space-x-1.5",
                                          children: [
                                            (eB || eA) &&
                                              (0, a.jsx)("div", {
                                                children: (0, a.jsx)(m.Z, {
                                                  width: 20,
                                                  height: 20,
                                                  color: "white",
                                                }),
                                              }),
                                            (0, a.jsx)("span", {
                                              children: eB
                                                ? ez
                                                  ? "Withdrawing"
                                                  : "boolean" == typeof eA
                                                  ? "Please Confirm"
                                                  : "Checking Approval"
                                                : tv
                                                ? "Unstake Now"
                                                : "Enter amount",
                                            }),
                                          ],
                                        }),
                                      })
                                    : (0, a.jsx)(B.Z, {
                                        connectChainId: eL,
                                        buttonConnectTitle: "Connect Wallet",
                                        className:
                                          "w-full bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 rounded text-white text-base 3xl:text-2xl font-medium text-center py-3 sm:py-4 px-2 sm:px-3",
                                        children: (0, a.jsx)("span", {
                                          children: "Connect Wallet",
                                        }),
                                      })
                                  : (0, a.jsx)("button", {
                                      disabled: !0,
                                      className:
                                        "w-full bg-slate-100 dark:bg-slate-800 pointer-events-none cursor-not-allowed rounded flex items-center justify-center space-x-1.5 py-3 sm:py-4 px-2 sm:px-3",
                                      children: (0, a.jsx)("span", {
                                        className:
                                          "text-slate-400 dark:text-slate-500 text-base 3xl:text-2xl",
                                        children: "Enter amount",
                                      }),
                                    }),
                              }),
                            ],
                          }),
                      (0, h.qo)(eU).length > 0 &&
                        (0, a.jsx)("div", {
                          className: "flex flex-col space-y-1",
                          children: (0, h.qo)(eU).map((e, t) => {
                            let { message: s, tx_hash: l } = {
                              ...e,
                            };
                            return (0, a.jsx)(
                              i.Alert,
                              {
                                animate: {
                                  mount: {
                                    y: 0,
                                  },
                                  unmount: {
                                    y: 32,
                                  },
                                },
                                dismissible: {
                                  onClose: () =>
                                    eW(eU.filter((e) => e.tx_hash !== l)),
                                },
                                className: "alert-box flex",
                                children: (0, a.jsxs)("div", {
                                  className: "block items-start",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className:
                                        "min-w-fit leading-5 break-words text-sm 3xl:text-xl font-bold",
                                      children: (0, h.Hp)(
                                        (0, h.Vl)(s, "normal", " ").join(" "),
                                        128
                                      ),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex text-sm space-x-4 pt-2",
                                      children: [
                                        eY &&
                                          l &&
                                          (0, a.jsxs)("a", {
                                            href: ""
                                              .concat(eY)
                                              .concat(
                                                null == eJ
                                                  ? void 0
                                                  : eJ.replace("{tx}", l)
                                              ),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                              "View tx on ",
                                              e$,
                                              " explorer",
                                              (0, a.jsx)(C.ObP, {
                                                size: 24,
                                                className:
                                                  "transform -rotate-45 inline-block",
                                              }),
                                            ],
                                          }),
                                        eY &&
                                          l &&
                                          1088 !== eL &&
                                          (0, a.jsxs)("a", {
                                            href: "https://layerzeroscan.com/".concat(
                                              null == eJ
                                                ? void 0
                                                : eJ.replace("{tx}", l)
                                            ),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                              "View tx on Ravex AI explorer",
                                              (0, a.jsx)(C.ObP, {
                                                size: 24,
                                                className:
                                                  "transform -rotate-45 inline-block",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              },
                              t
                            );
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "bg-slate-50 dark:bg-slate-900 bg-opacity-60 dark:bg-opacity-60 rounded border dark:border-slate-800 flex flex-col space-y-6 3xl:space-y-12 py-5 3xl:py-8 px-4 3xl:px-6",
                children: [
                  (0, a.jsx)("span", {
                    className:
                      "text-slate-600 dark:text-slate-200 text-base 3xl:text-xl font-bold",
                    children: "My Position",
                  }),
                  (0, a.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-3 ".concat(
                      tc || ts ? "" : "pt-2"
                    ),
                    children:
                      tc || ts
                        ? (0, a.jsx)(m.Z, {})
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col space-y-1 border-b border-b-cyan-800 dark:border-b-cyan-600 pb-2",
                                children: [
                                  (0, a.jsx)("a", {
                                    className:
                                      "flex items-center space-x-1 cursor-default",
                                    children: (0, a.jsx)("span", {
                                      className:
                                        "text-xs 3xl:text-lg font-medium text-slate-600 dark:text-slate-400",
                                      children: "Wallet Balance",
                                    }),
                                  }),
                                  (0, a.jsx)("a", {
                                    className: tw,
                                    children:
                                      e3 && !e4
                                        ? (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center space-x-1",
                                            children: [
                                              (0, a.jsx)(u.Z, {
                                                value: th,
                                                noTooltip: !0,
                                                maxDecimals: 4,
                                                suffix: " RAVEX",
                                                className: tw,
                                              }),
                                              (0, a.jsx)(u.Z, {
                                                value: tg,
                                                prefix: "($",
                                                suffix: ")",
                                                noTooltip: !0,
                                                className:
                                                  "text-xs 3xl:text-lg mt-0.5",
                                              }),
                                            ],
                                          })
                                        : ts && (0, a.jsx)(m.Z, {}),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col space-y-1 border-b border-b-green-800 dark:border-b-green-600 pb-2",
                                children: [
                                  (0, a.jsx)("a", {
                                    className:
                                      "flex items-center space-x-1 cursor-default",
                                    children: (0, a.jsx)("span", {
                                      className:
                                        "text-xs 3xl:text-lg font-medium text-slate-600 dark:text-slate-400",
                                      children: "Staked Balance",
                                    }),
                                  }),
                                  (0, a.jsx)("a", {
                                    className: tw,
                                    children:
                                      e3 && !e4
                                        ? (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center space-x-1",
                                            children: [
                                              (0, a.jsx)(u.Z, {
                                                value: tl,
                                                noTooltip: !0,
                                                maxDecimals: 4,
                                                suffix: " RAVEX",
                                                className: tw,
                                              }),
                                              (0, a.jsx)(u.Z, {
                                                value: tr,
                                                prefix: "($",
                                                suffix: ")",
                                                noTooltip: !0,
                                                className:
                                                  "text-xs 3xl:text-lg mt-0.5",
                                              }),
                                            ],
                                          })
                                        : ts && (0, a.jsx)(m.Z, {}),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col space-y-1 border-b border-b-yellow-800 dark:border-b-yellow-600 pb-2",
                                children: [
                                  (0, a.jsx)("a", {
                                    className:
                                      "flex items-center space-x-1 cursor-default",
                                    children: (0, a.jsx)("span", {
                                      className:
                                        "text-xs 3xl:text-lg font-medium text-slate-600 dark:text-slate-400",
                                      children: "Pending Rewards",
                                    }),
                                  }),
                                  (0, a.jsx)("a", {
                                    className: tw,
                                    children:
                                      e3 && !e4
                                        ? (0, a.jsxs)("div", {
                                            className:
                                              "flex items-center space-x-1",
                                            children: [
                                              (0, a.jsx)(u.Z, {
                                                value: tn,
                                                suffix: " RAVEX",
                                                noTooltip: !0,
                                                maxDecimals: 4,
                                                className: tw,
                                              }),
                                              (0, a.jsx)(u.Z, {
                                                value: ti,
                                                prefix: "($",
                                                suffix: ")",
                                                noTooltip: !0,
                                                className:
                                                  "text-xs 3xl:text-lg mt-0.5",
                                              }),
                                            ],
                                          })
                                        : ts && (0, a.jsx)(m.Z, {}),
                                  }),
                                ],
                              }),
                            ],
                          }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "bg-slate-50 dark:bg-slate-900 bg-opacity-60 dark:bg-opacity-60 rounded border dark:border-slate-800 flex flex-col space-y-6 3xl:space-y-12 py-4 3xl:py-8 px-4 3xl:px-6",
                children: (0, a.jsxs)("div", {
                  className: "flex flex-col space-y-1",
                  children: [
                    (0, a.jsx)("a", {
                      className: "flex items-center space-x-1 cursor-default",
                      children: (0, a.jsx)("span", {
                        className:
                          "text-xs 3xl:text-lg font-medium text-green-600 dark:text-green-300",
                        children: "Usage Tip:",
                      }),
                    }),
                    (0, a.jsx)("a", {
                      className: tw,
                      children: (0, a.jsx)("span", {
                        className:
                          "mt-1 flex items-center space-x-1 text-xs text-slate-400 dark:text-slate-500 font-extralight",
                        children:
                          "Stake, unstake, claim, or compound transactions on the Metis are confirmed in a few seconds. However, on OFT chains (e.g., Ethereum) other than Metis, stake/unstake/claim transactions may take 2-4 minutes due to the cross-chain messenger protocol provided by Ravex AI. Please keep this information in mind during your transactions!",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        M = s(21180);
      let L = [
        "function totalBalance(address _user) external view returns (uint256)",
        "function heraBalance(address user) external view returns (uint256)",
        "function totalBalance() external view returns (uint256)",
        "function pendingRewards(address _user) external view returns (uint256 mpRewardAmount, address[] memory rewardTokens, uint256[] memory amounts)",
        "function claimRewards() external",
        "function allStakers(uint256 start, uint256 end) external view",
      ];
      var pool = () => {
        let e = (0, r.I0)(),
          {
            chains: t,
            pool_assets: s,
            pools: c,
            rpc_providers: d,
            dev: f,
            wallet: j,
          } = (0, r.v9)(
            (e) => ({
              chains: e.chains,
              pool_assets: e.pool_assets,
              pools: e.pools,
              rpc_providers: e.rpc_providers,
              dev: e.dev,
              wallet: e.wallet,
            }),
            r.wU
          ),
          { chains_data: b } = {
            ...t,
          },
          { pool_assets_data: N } = {
            ...s,
          },
          { pools_data: w } = {
            ...c,
          },
          { rpcs: k } = {
            ...d,
          },
          { sdk: _ } = {
            ...f,
          },
          { wallet_data: F } = {
            ...j,
          },
          { address: C } = {
            ...F,
          },
          S = null == F ? void 0 : F.chain_id,
          A = (0, l.useRouter)(),
          { asPath: Z } = {
            ...A,
          },
          [R, T] = (0, n.useState)({}),
          [D, P] = (0, n.useState)(null),
          [B, E] = (0, n.useState)(null);
        (0, n.useEffect)(() => {
          if (S) {
            let e = (0, g.fr)(S, b),
              { id: t } = {
                ...e,
              },
              s = {
                chain: t,
                asset: "hera",
              };
            T(s), s.chain && s.asset && E(x()().valueOf());
          }
        }, [S, b, N]),
          (0, n.useEffect)(() => {
            let { id: e } = {
              ...(0, g.fr)(S, b),
            };
            e &&
              (T({
                asset: "hera",
                chain: e,
              }),
              getBalances(e));
          }, [b, S, Z]),
          (0, n.useEffect)(() => {
            if (
              (e({
                type: M.B$,
                value: null,
              }),
              C)
            ) {
              let { chain: e } = {
                ...R,
              };
              getBalances(e);
            } else reset("address");
          }, [C]),
          (0, n.useEffect)(() => {
            let getData = () => {
              if (C) {
                let { chain: e } = {
                  ...R,
                };
                getBalances(e);
              }
            };
            getData();
            let e = setInterval(() => getData(), 15e3);
            return () => clearInterval(e);
          }, [k]),
          (0, n.useEffect)(() => {
            w &&
              o()
                .uniq(
                  (0, h.qo)(
                    w.map((e) => {
                      var t;
                      return null === (t = e.chain_data) || void 0 === t
                        ? void 0
                        : t.id;
                    })
                  )
                )
                .forEach((e) => getBalances(e));
          }, [w]),
          (0, n.useEffect)(() => {
            let getData = async () => {
              let { chain: e, asset: t } = {
                ...R,
              };
              if (C && e && t && B) {
                let t = (0, g.fr)(e, b),
                  {
                    id: a,
                    chain_id: l,
                    domain_id: n,
                  } = {
                    ...t,
                  };
                try {
                  let e, a;
                  let n = N[0].contracts[0],
                    { manager_address: r, chain_id: i } = {
                      ...n,
                    },
                    c = (0, g.j2)(void 0, N, {
                      chain_id: l,
                      symbols: ["hera", "hera"],
                    });
                  try {
                    let t = k[i],
                      s = new y.CH(r, L, t),
                      l = await s.heraBalance(C),
                      n = await s.pendingRewards(C);
                    (e = (0, v.bM)(l, 18)), (a = (0, v.bM)(n.amounts[0], 18));
                  } catch (e) {}
                  var s = {
                    chain_data: t,
                    asset_data: c,
                    staked_amount: (e = e || 0),
                    pending_rewards: (a = a || 0),
                  };
                  P(s);
                } catch (e) {
                  console.log(
                    "[/pool]",
                    "[getUserPools error]",
                    {
                      domain_id: n,
                      address: C,
                    },
                    e
                  );
                }
              }
            };
            getData();
          }, [C, B]);
        let reset = async (e) => {
            "address" !== e &&
              T({
                ...R,
              }),
              E(x()().valueOf());
            let { chain: t } = {
              ...R,
            };
            getBalances(t);
          },
          getBalances = (t) =>
            e({
              type: M.ZK,
              value: {
                chain: t,
              },
            }),
          { chain: z, asset: H } = {
            ...R,
          },
          I = (0, g.fr)(z, b),
          { image: q } = {
            ...I,
          },
          U = !!(z && H),
          W =
            U &&
            !(0, g.j2)(H, N, {
              chain_id: null == I ? void 0 : I.chain_id,
            }),
          O = (0, h.qo)(w).find((e) => {
            var t;
            return (
              (null === (t = e.asset_data) || void 0 === t ? void 0 : t.id) ===
              H
            );
          }),
          {
            name: V,
            apy: $,
            error: G,
            manager_address: K,
          } = {
            ...O,
          },
          { message: Y } = {
            ...G,
          };
        return (0, a.jsx)("div", {
          className:
            "children max-w-6.5xl 3xl:max-w-screen-2xl flex justify-center mx-auto",
          children: (0, a.jsx)("div", {
            className:
              "w-full space-y-3.5 3xl:space-y-6 mt-4 sm:mt-12 mx-auto pl-3 pr-3",
            children: (0, a.jsxs)("div", {
              className: "space-y-6 sm:space-y-12 3xl:space-y-20",
              children: [
                (0, a.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-wrap items-center justify-between space-y-4 lg:space-y-0 sm:space-x-2",
                      children: [
                        (0, a.jsx)("div", {
                          className: "flex items-center space-x-1",
                          children: (0, a.jsxs)("div", {
                            className:
                              "flex items-center space-x-3 sm:space-x-4 3xl:space-x-6",
                            children: [
                              q &&
                                (0, a.jsx)(p.Z, {
                                  src: "/image/logo.png",
                                  width: 48,
                                  height: 48,
                                  className: "3xl:w-16 3xl:h-16 rounded-full",
                                }),
                              (0, a.jsx)("span", {
                                className:
                                  "tracking-tighter text-xl sm:text-5xl font-bold",
                                children: (0, a.jsx)("span", {
                                  className: "mr-1",
                                  children: "AI Trade Mining Portal",
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)(i.Tooltip, {
                          content: "Avg staking APR",
                          children: (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsx)("span", {
                                className:
                                  "text-slate-600 dark:text-slate-200 text-base 3xl:text-2xl font-medium",
                                children: "Avg staking APR",
                              }),
                              (0, a.jsx)("div", {
                                className: "flex flex-col items-end",
                                children: (0, a.jsx)("span", {
                                  className:
                                    "whitespace-nowrap text-6xl sm:text-3xl 3xl:text-4xl font-semibold",
                                  children:
                                    O && !G
                                      ? (0, v.hj)($)
                                        ? (0, a.jsx)(u.Z, {
                                            value: 100 * $,
                                            maxDecimals: 2,
                                            suffix: "%",
                                            noTooltip: !0,
                                            className:
                                              "whitespace-nowrap font-black",
                                          })
                                        : "TBD"
                                      : U &&
                                        !W &&
                                        !G &&
                                        !O &&
                                        (0, a.jsx)(m.Z, {}),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "w-fit bg-red-300 dark:bg-red-900 bg-opacity-100 dark:bg-opacity-50 rounded break-all tracking-tighter text-green-800 dark:text-green-200 text-sm 3xl:text-xl font-medium py-1.5 px-4",
                      children: "$RAVEX Staking Pool",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6",
                  children: [
                    (0, a.jsx)("div", {
                      className: "lg:col-span-2",
                      children: (0, a.jsx)(liquidity, {
                        pool: R,
                        userPools: D,
                        onFinish: () => {
                          E(x()().valueOf()), getBalances(z);
                        },
                      }),
                    }),
                    (0, a.jsx)(info, {
                      pool: R,
                      userPools: D,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    1571: function (e, t, s) {
      s.d(t, {
        k: function () {
          return ProgressBar;
        },
      });
      var a = s(85893),
        l = s(22006);
      let ProgressBar = (e) => {
        let {
          width: t,
          color: s,
          className: n = "",
          backgroundClassName: r = "",
          style: i,
          backgroundStyle: c,
        } = e;
        return (
          (t = (0, l.RX)(t < 0 ? 0 : t > 100 ? 100 : t)),
          (0, a.jsx)("div", {
            className:
              "w-full h-1 relative flex flex-row items-center text-xs text-center ".concat(
                r
              ),
            style: {
              ...c,
            },
            children: (0, a.jsx)("div", {
              className: "w-full h-1 top-0 left-0 ".concat(s, " ").concat(n),
              style: {
                ...i,
                width: "".concat(t, "%"),
              },
            }),
          })
        );
      };
    },
  },
]);
