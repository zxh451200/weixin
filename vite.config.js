// javascript
// vite.config.js  
import { defineConfig } from 'vite'  
import AutoImport from 'unplugin-auto-import/vite'  
import uni from "@dcloudio/vite-plugin-uni"  
export default defineConfig({  
  plugins: [  
	uni(),  
    AutoImport({  
		
      // 你可以指定要自动导入的库  
      imports: [  
        'vue',  
		'uni-app',
        'vue-router',  
        // ...其他库  
      ],  
      // 你可以指定要排除的导入  
      eslint: {  
        // 如果你正在使用 ESLint，这个选项将生成相应的 ESLint 规则  
        inheritEnv: true,  
        // 如果你想禁用 ESLint 规则，可以设置为 false  
        // disabled: true,  
      },  
    }),  
    // ...其他插件  
  ],  
})