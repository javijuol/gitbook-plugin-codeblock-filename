module.exports = {
    book: { assets: "./book", css: [ "block.css" ] },
    blocks: {
        filename: {
            process: function(block) {
                return '<p class="code-filename">' + block.body + '</p>';
            }
        }
    }
};
