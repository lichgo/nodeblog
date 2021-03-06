module.exports = {
    // user AMD loader
    loader: 'requirejs',

    // tasks
    tasks: {
        rm: {
            clean: {
                target: './web/built'
            }
        },

        compile: {
            js: {
                group: [
                    {
                        source: './web/js/index.js',
                        dest: './web/built/js/index.js',
                        baseUrl: './web/js',
                        miniLoader: true
                    },
                    {
                        source: './web/js/post.js',
                        dest: './web/built/js/post.js',
                        baseUrl: './web/js',
                        stubModules: ['tmpl'],
                        miniLoader: true
                    },
                    {
                        source: './web/js/list.js',
                        dest: './web/built/js/list.js',
                        baseUrl: './web/js',
                        miniLoader: true
                    }
                ]
            },
            css: {
                group: [
                    {
                        source: './web/style/index.css'
                    }
                ]
            }
        }
    }
}
