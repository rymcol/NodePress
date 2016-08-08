const content = require('./content')

module.exports = {
  	makeIndexContent: function () {
	var generatedContent = content.generateContent();
	return generatedContent[1];
	}
};

