const content = require('./content')

module.exports = {
  	makeBlogContent: function () {
	var generatedContent = content.generateContent();
	var randomizedContent = [];
	
	for (i = 0; i < 6; i++) {
		var randomIndex = Math.floor(Math.random() * 51);
		randomizedContent.push(generatedContent[randomIndex]);
	}
	
	return randomizedContent;
	}
};