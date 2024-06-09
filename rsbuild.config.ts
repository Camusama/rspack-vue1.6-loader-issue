import { defineConfig } from '@rsbuild/core'
import { pluginVue2 } from '@rsbuild/plugin-vue2'
import { pluginBabel } from '@rsbuild/plugin-babel'
import { pluginVue2Jsx } from '@rsbuild/plugin-vue2-jsx'
export default defineConfig({
  plugins: [
    pluginVue2(),
    pluginBabel({
      include: /\.(?:jsx|tsx)$/,
      exclude: /[\\/]node_modules[\\/]/,
    }),
    pluginVue2Jsx(),
  ],
  tools: {
    bundlerChain: (chain, { CHAIN_ID }) => {
      // delete this line will reproduce the bug
      chain.module.rule(CHAIN_ID.RULE.JS).set('resourceQuery', a => !a || !/type=template/.test(a))
    },
  },
})
