{
  mode: 'development',
  context: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\dist',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules',
      'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\@vue\\cli-service@4.5.12_@vue+compiler-sfc@3.0.7\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // ¯\_(ツ)_/¯
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\@vue\\cli-plugin-babel@4.5.12_6af64733a7e512307207decf90053a76\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules',
      'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\@vue\\cli-service@4.5.12_@vue+compiler-sfc@3.0.7\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\cache-loader@4.1.0_webpack@4.46.0\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '245ccb14'
            }
          },
          {
            loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-loader@16.2.0\\node_modules\\vue-loader\\dist\\index.js',
            options: {
              cacheDirectory: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '245ccb14',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\url-loader@2.3.0_file-loader@4.3.0+webpack@4.46.0\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\file-loader@4.3.0_webpack@4.46.0\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\file-loader@4.3.0_webpack@4.46.0\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\url-loader@2.3.0_file-loader@4.3.0+webpack@4.46.0\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\file-loader@4.3.0_webpack@4.46.0\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\url-loader@2.3.0_file-loader@4.3.0+webpack@4.46.0\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\file-loader@4.3.0_webpack@4.46.0\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\vue-style-loader@4.1.3\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\css-loader@3.6.0_webpack@4.46.0\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\postcss-loader@3.0.0\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\cache-loader@4.1.0_webpack@4.46.0\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: 'a817f0ec'
            }
          },
          {
            loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\babel-loader@8.2.2_c68979f8893c692eeb1a0b70960ae2d4\\node_modules\\babel-loader\\lib\\index.js'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\@vue\\cli-service@4.5.12_@vue+compiler-sfc@3.0.7\\node_modules\\@vue\\cli-service\\lib'
        ],
        use: [
          {
            loader: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\eslint-loader@2.2.1_eslint@6.8.0+webpack@4.46.0\\node_modules\\eslint-loader\\index.js',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '073da382',
              emitWarning: false,
              emitError: false,
              eslintPath: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\node_modules\\.pnpm\\eslint@6.8.0\\node_modules\\eslint',
              formatter: undefined
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: false,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'bundle-webpack4',
        templateParameters: function () { /* omitted long function */ },
        template: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\public\\index.html'
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        include: 'initial',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        include: 'asyncChunks'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\public',
          to: 'D:\\GitHub\\ronan-try\\try-vue3-bundle_webpack-vs-vite\\bundle-webpack4\\dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    )
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  }
}
