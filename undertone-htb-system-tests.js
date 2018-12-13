function getPartnerId() {
    return 'UndertoneHtb';
}

function getStatsId() {
    return 'UNDR';
}

function getCallbackType() {
    return 'NONE';
}

function getArchitecture() {
    return 'SRA';
}


function getConfig() {
    return {
        publisherId: "12345",
        xSlots: {
            1: {
                sizes: [[300, 250]]
            },
            2: {
                sizes: [[300, 600]]
            }
        }
    };
}

function getBidRequestRegex() {
    return {
        method: 'POST',
        urlRegex: /hb\.undertone\.com\/hb.*/
    };
}

function validateBidRequest(request) {
    expect(request.query.pid).toBe("12345");
    expect(request.query.domain).toBeDefined();
}

function getValidResponse(request, creative) {

    var response = JSON.stringify([
        {
            ad: creative,
            publisherId: 12345,
            //bidRequestId
            //placementId
            adId: 15,
            campaignId: 2,
            height: 250,
            width: 300,
            ttl: 720,
            currency: 'USD',
            cpm: 5,
            adaptor: 'indexexchange',
            netRevenue: true
        },
        {
            ad: creative,
            publisherId: 12345,
            adId: 15,
            campaignId: 2,
            height: 600,
            width: 300,
            ttl: 720,
            currency: 'USD',
            cpm: 5,
            adaptor: 'indexexchange',
            netRevenue: true
        }
    ]);

    return 'headertag.IndexExchangeHtb.adResponseCallback(' + JSON.stringify(response) + ')';

    // var response = JSON.stringify([
    //     {
    //         ad: creative,
    //         publisherId: request.query.publisherId,
    //         bidRequestId: request.body["x-ut-hb-params"][0].bidRequestId,
    //         placementId: request.body["x-ut-hb-params"][0].placementId,
    //         height: request.body["x-ut-hb-params"][0].sizes[0][0],
    //         width: request.body["x-ut-hb-params"][0].sizes[0][1],
    //         cpm: 5,
    //     },
    //     {
    //         ad: creative,
    //         publisherId: request.query.publisherId,
    //         bidRequestId: request.body["x-ut-hb-params"][1].bidRequestId,
    //         placementId: request.body["x-ut-hb-params"][1].placementId,
    //         height: request.body["x-ut-hb-params"][1].sizes[0][0],
    //         width: request.body["x-ut-hb-params"][1].sizes[0][1],
    //         cpm: 5,
    //     }
    // ]);
}

function validateTargeting(targetingMap) {
    expect(targetingMap).toEqual(jasmine.object());
    // expect(targetingMap).toEqual(jasmine.objectContaining({
    //     //ix_undr_cpm: jasmine.arrayContaining(['300x250_5']),
    //     ix_undr_id: jasmine.arrayContaining([jasmine.any(String)])
    // }));
}

function getPassResponse() {
    return "";
}

module.exports = {
    getPartnerId: getPartnerId,
    getStatsId: getStatsId,
    getCallbackType: getCallbackType,
    getArchitecture: getArchitecture,
    //getRequestsToBlock: getRequestsToBlock,
    getConfig: getConfig,
    getBidRequestRegex: getBidRequestRegex,
    validateBidRequest: validateBidRequest,
    getValidResponse: getValidResponse,
    validateTargeting: validateTargeting,
    getPassResponse: getPassResponse
    //getValidBidResponseWithDeal: getValidBidResponseWithDeal,
    //validateTargetingWithDeal: validateTargetingWithDeal
};
