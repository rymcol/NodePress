const content = require('./content')

module.exports = {
  	makeBlogContent: function () {
	var generatedContent = content.generateContent();
	return generatedContent;
	}
};