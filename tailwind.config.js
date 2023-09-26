module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
    extend:{
        'my_input': 'border-blue-gray-200 text-blue-gray-700\n' +
            '                placeholder-shown:border-blue-gray-200\n' +
            '                placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50',
        'my_label': 'before:content[\' \'] after:content[\' \']\n' +
            '                            text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200\n' +
            '                            peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500'
    }
}
