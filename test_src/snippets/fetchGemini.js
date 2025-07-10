export const fetchGemini = async function queryGemini(prompt) {
      const genAI = new GoogleGenerativeAI('')
      const model = genAI.getGenerativeModel({
        model: MODEL_NAME
      })

      const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048
      }

      const safetySettings = [{
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
      }, {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
      }, {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
      }, {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
      }]

      const parts = [{
        text: prompt
      }]

      const result = await model.generateContent({
        contents: [{
          role: 'user',
          parts
        }],
        generationConfig,
        safetySettings
      })

      const response = result.response
      return {
        data: JSON.parse(JSON.stringify(response.text()))
      }
    }