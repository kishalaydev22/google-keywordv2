const { GoogleAdsApi, services } = require("google-ads-api");

// Make sure to pass in valid authentication!
const client = new GoogleAdsApi({
    client_id: '643044009290-mn8kt5q2d201qsofhqdivl4sot8a5aoi.apps.googleusercontent.com',
    client_secret: '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',
    developer_token: 'A52yjkoZQbEHCWty7ixzxw',
});


const keywordVolume = async (query) => {

    try {
        const customer = client.Customer({
            customer_id: '3300180123',
            refresh_token: '1//0geb1hrh0le_VCgYIARAAGBASNwF-L9Irnf-6TqdSbhMuVlSThJbJRlTLAoLmqjBZfApMgbuPkAu70F02LA0R_rK_Fs2dbTzC8Qg',
        });
        const keywordSeed = new services.KeywordSeed({ keywords: query });
        const generateKeywordIdeaResponse =
            await customer.keywordPlanIdeas.generateKeywordIdeas({
                customer_id: customer.credentials.customer_id,
                page_size: 20,
                keyword_seed: keywordSeed,
            });

        return generateKeywordIdeaResponse
    } catch (e) {
        console.log(e);
    }

}
exports.keywordController = async (req, res) => {
    try {
        const { keyword } = req.body
        // const keywordData = await keywordVolume(keyword)
        res.status(200).json({
            keywordData: keyword
        })


    } catch (e) {
        console.log('Error: ', e);
        res.status(400).json({ message: 'Error: ' + e });
    }
}