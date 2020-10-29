module.exports = (api, options) => {
   
    // 安裝基本公用庫
    api.extendPackage({
        dependencies: {
            "axios": "^0.18.0"
        },
        devDependencies: {}
    });

    // 如果要安裝 vuex
    if (options.vuex) {
        api.extendPackage({
            dependencies: {
                "vuex": "^3.5.0"
            }
        });
    }

    // 安裝 prerender
    if (options.prerender) {
        api.extendPackage({
            devDependencies: {
                "prerender-spa-plugin": "^3.4.0"
            }
        })
    }

    api.render(files => {
        Object.keys(files)
            .filter(path => path.startsWith('src/') 
                        || path.startsWith('public/') 
                        || path.startsWith('.eslintrc.js'))
            .forEach(path => delete files[path])
    })

    // 新增目錄及文件
    api.render('./template');

    // 配置文件
    // api.render({
    //     './.eslintrc.js'      : './template/_eslintrc.js',
    //     './.gitignore'        : './template/_gitignore',
    //     './postcssrc.js'      : './template/_postcssrc.js'
    // });
}